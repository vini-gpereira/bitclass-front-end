import axios from 'axios'
import { videoHaveTerm, restructureVideo } from '~/utils/helpers'

const key = 'AIzaSyB6eK43_XqoZ4wFrSzWibgmaKW-qeGI4ZU'

const playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems'
const videosUrl = 'https://www.googleapis.com/youtube/v3/videos'

async function invoke({ method, url, params }) {
  const response = await axios({
    method,
    url,
    params: {
      ...params,
      key,
    },
  })

  return response
}

async function getPlaylist() {
  const { data } = await invoke({
    method: 'get',
    url: playlistUrl,
    params: {
      part: 'snippet',
      playlistId: 'PL4ZDKpM7CWu_3ncgNsG31FvaE-RI4prcY',
      maxResults: 50,
      fields:
        'nextPageToken,items(snippet(title,description,resourceId(videoId)))',
    },
  })

  return data.items
}

async function getVideosIds(term = null) {
  const playlist = await getPlaylist()
  const videosIds = []

  playlist.forEach((video) => {
    if (videoHaveTerm(video, term)) {
      const videoId = video.snippet.resourceId.videoId
      videosIds.push(videoId)
    }
  })

  return videosIds.join(',')
}

async function getVideoInvoke(ids) {
  const { data } = await invoke({
    method: 'get',
    url: videosUrl,
    params: {
      id: ids,
      part: 'snippet,contentDetails',
      fields:
        'items(id,snippet(publishedAt,title,description,tags),contentDetails(duration))',
    },
  })

  return data.items
}

async function getVideos(term = null) {
  const videosIds = await getVideosIds(term)

  return await getVideoInvoke(videosIds)
}

export async function getVideo(videoId) {
  const videos = await getVideos()
  const video = videos.find((video) => video.id === videoId)

  return videos.length === 0 ? null : restructureVideo(video)
}

export async function getResults(term = null) {
  const videos = await getVideos(term)
  const results = []

  videos.forEach((video) => {
    const newVideoStructure = restructureVideo(video)
    results.push(newVideoStructure)
  })

  return results
}

export async function getSuggestions(videoId) {
  const suggestions = await getResults()

  const videoIndex = suggestions.findIndex((videos) => videos.id === videoId)

  suggestions.splice(videoIndex, 1)

  return suggestions
}
