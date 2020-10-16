export const state = () => ({
  searchText: '',
  searchType: 'videos',
})

export const mutations = {
  changeSearchText(state, text) {
    state.searchText = text
  },
  changeSearchType(state, type) {
    state.searchType = type
  },
}
