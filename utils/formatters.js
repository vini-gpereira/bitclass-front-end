export function formatDate(noFormattedDate) {
  const months = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ]

  const date = new Date(noFormattedDate)
  const monthId = date.getMonth()

  const day = date.getDate()
  const month = months[monthId]
  const year = date.getFullYear()

  return `${day} de ${month}. de ${year}`
}

export function formatDuration(noFormattedDuration) {
  const minutes = noFormattedDuration.match(/PT(\d+)M/i)[1]

  return `${minutes}min`
}

export function formatDescription(noFormattedDescription) {
  const urlRegex = /((http|ftp|https):\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

  const htmlLineBreaksDesc = noFormattedDescription.replaceAll(/\n/g, '<br>')

  const descriptionWithUrl = htmlLineBreaksDesc.replaceAll(
    urlRegex,
    (match) => `<a class="description-link" href="${match}">${match}</a>`
  )

  return descriptionWithUrl
}
