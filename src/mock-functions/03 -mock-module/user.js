const axios = require('axios');

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }

   static findOneUser(){
      return axios.get('/user/:id').then(resp => resp.data)
  }

}

module.exports = Users;