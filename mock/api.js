import { videos, categories } from './db'

export const getVideo = (id) => {
  return videos[id]
}

export const getResults = (searchType, term) => {
  const getters = {
    videos: getVideos,
    categories: getCategories,
  }

  return getters[searchType](term)
}

const getVideos = (term) => {
  return videos.filter((video) => videoHaveTerm(video, term))
}

const getCategories = (term) => {
  return categories.filter((category) => categoryHaveTerm(category, term))
}

const videoHaveTerm = (video, term) => {
  const { author, title, description } = video
  return (
    author.includes(term) || title.includes(term) || description.includes(term)
  )
}

const categoryHaveTerm = (category, term) => {
  const { label, videosIds } = category

  return (
    label.includes(term) ||
    videosIds.reduce((id) => videoHaveTerm(videos[id], term))
  )
}
