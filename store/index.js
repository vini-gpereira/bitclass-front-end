export const state = () => ({
  searchText: '',
  searchType: '',
})

export const mutations = {
  changeSearchText(state, text) {
    state.searchText = text
  },
  changeSearchType(state, type) {
    state.searchType = type
  },
}
