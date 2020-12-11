import { videos } from './db'

export const getVideo = (id) => {
  return videos[id]
}

export const getResults = (term = null) => {
  return getVideos(term)
}

export const getSuggestions = (currentVideoId) => {
  const suggestions = getVideos()

  const currentVideoIndex = suggestions.findIndex(
    (video) => video.id === currentVideoId
  )
  suggestions.splice(currentVideoIndex, 1)

  return suggestions
}

const getVideos = (term) => {
  if (!term) return Object.values(videos)

  return Object.values(videos).filter((video) => videoHaveTerm(video, term))
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
