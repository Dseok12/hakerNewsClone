import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem
} from '../api'

export default {
  /*
  // promise
  FECH_NEWS (context) {
    return fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
      })
  },
  */

  // async
  async FECH_NEWS (context) {
    const response = await fetchNewsList()
    context.commit('SET_NEWS', response.data)
    return response
  },

  /*
  FECH_ASK (context) {
    return fetchAskList()
      .then((response) => {
        console.log(response)
        context.commit('SET_ASK', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  */

  async FECH_ASK (context) {
    // API단에서 에러처리를 해줌
    const response = await fetchAskList()
    context.commit('SET_ASK', response.data)
    return response
  },

  /*
  FECH_JOBS ({ commit }) {
    return fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  */

  async FECH_JOBS ({ commit }) {
    try {
      const response = await fetchJobsList()
      commit('SET_JOBS', response.data)
      return response
    } catch (error) {
      console.log(error)
    }
  },

  /*
  FECH_USER ({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  */

  async FECH_USER ({ commit }, name) {
    const response = await fetchUserInfo(name)
    commit('SET_USER', response.data)
    return response
  },

  /*
  FECH_ITEM ({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  */

  async FECH_ITEM ({ commit }, id) {
    const response = await fetchCommentItem(id)
    commit('SET_ITEM', response.data)
    return response
  },

  /*
  // #2
  FECH_LIST ({ commit }, pageName) {
    // #3
    return fetchList(pageName)
      .then(({ data }) => {
        // #4
        console.log(4)
        commit('SET_LIST', data)
        return data
      })
      .catch(error => console.log(error))
  },
  */

  async FECH_LIST ({ commit }, pageName) {
    const response = await fetchList(pageName)
    commit('SET_LIST', response.data)
    return response
  }
}
