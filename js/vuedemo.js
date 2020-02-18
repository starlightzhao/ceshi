 var store = new Vuex.Store({
 	state:{
 		count:12
 	},
 	mutations: {
	  increment (state) {
	    state.count += 10
	  }
    }
 });
 
 
 
 new Vue({
      el: '.app',
      store,
      data:{
      	ceshi:store.state.count
      }
 
    })