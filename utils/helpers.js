import { formatDate, formatDescription, formatDuration } from './formatters'

export function videoHaveTerm(video, term) {
  if (!term) {
    return true
  }

  const { title, description } = video.snippet
  const lowerCaseTerm = term.toLowerCase()
  const titleWithoutProjName = title.split(' - ')[0]

  if (titleWithoutProjName.toLowerCase().includes(lowerCaseTerm)) {
    return true
  }

  if (description.toLowerCase().includes(lowerCaseTerm)) {
    return true
  }

  return false
}

export function restructureVideo(video) {
  const { id, snippet, contentDetails } = video
  const { publishedAt, title, description } = snippet
  const duration = contentDetails.duration

  const newVideoStructure = {
    id,
    title: title.split(' - ')[0],
    description: formatDescription(description),
    postDate: formatDate(publishedAt),
    duration: formatDuration(duration),
  }

  return newVideoStructure
}
