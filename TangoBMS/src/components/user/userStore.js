const state = {
	authenticated: null
}

const mutations = {
	SET_AUTH_USER (state, userObj){
		state.authenticated = userObj
	}
}

const actions = {
	setUserObject: ({commit}, userObj) => {
		commit('SET_AUTH_USER', userObj)
	}
}

export default {
	state, mutations, actions
}