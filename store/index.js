import axios from '@/plugins/axios/index'

export const state = () => ({
  guests: [],
})

export const mutations = {
  SET_GUESTS(state, { data }) {
    state.guests = data
  },
}

export const getters = {
  getCurrentGuest: (state) => (id) => {
    // геттер с пропсами
    return state.guests.find((guest) => guest.id === id)
  },
  // getGuest: (state) => { // геттер без пропсов
  //   return state.guests.find((guest) => guest.id === id)
  // }
}

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    try {
      await dispatch('getGuests', context)
    } catch (e) {
      console.log(e)
    }
  },
  async getGuests({ commit }) {
    console.log('get guests')
    try {
      const res = await axios.get('/guests')
      commit('SET_GUESTS', res.data)
    } catch (error) {
      console.error(error)
      throw error // Передаём ошибку выше для обработки в nuxtServerInit
    }
  },
}
