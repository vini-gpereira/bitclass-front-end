import { videos, categories } from './db'

export const getVideo = (id) => {
  return videos[id]
}

export const getResults = (term = null) => {
  return {
    videos: getVideos(term),
    categories: getCategories(term),
  }
}

export const getSuggestions = (currentVideoId) => {
  const suggestions = []

  if (currentVideoId) {
    Object.values(categories).forEach((category) => {
      if (category.videosIds.includes(currentVideoId)) {
        category.videosIds.forEach((videoId) => {
          if (currentVideoId !== videoId) suggestions.unshift(getVideo(videoId))
        })
      } else {
        suggestions.push(
          ...category.videosIds.map((videoId) => getVideo(videoId))
        )
      }
    })
  }

  return suggestions
}

const getVideos = (term) => {
  if (!term) return Object.values(videos)

  return Object.values(videos).filter((video) => videoHaveTerm(video, term))
}

const getCategories = (term) => {
  if (!term) return Object.values(categories)

  return Object.values(categories).filter((category) =>
    categoryHaveTerm(category, term)
  )
}

const videoHaveTerm = (video, term) => {
  const { author, title, description } = video
  const lowerTerm = term.toLowerCase()

  return (
    author.toLowerCase().includes(lowerTerm) ||
    title.toLowerCase().includes(lowerTerm) ||
    description.toLowerCase().includes(lowerTerm)
  )
}

const categoryHaveTerm = (category, term) => {
  const { label, videosIds } = category

  const reducer = (accumulator, id) => {
    return accumulator || videoHaveTerm(videos[id], term)
  }

  return label.toLowerCase().includes(term) || videosIds.reduce(reducer, false)
}
