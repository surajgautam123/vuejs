<template>
  <div>
    <h3>The Home Page</h3>
    <div class="row">
      <div class="col-md-4">
        <select class="form-control" id="select" @change="selectUser()">
          <option>Select</option>
          <option v-bind:value="option.id" :id="option.id" v-model="option.id" v-for="option in selectList">
            {{option.name}}
          </option>
          <option id="all">All</option>
        </select>
      </div>
    </div>
    <div class="row" v-if="userDetail != ''">
      <div class="col-md-4" v-for="detail in userDetail">
        <div class="card mt-4">
          <img :src="detail.avatar" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{detail.name}}</h5>
            <p>{{detail.createdAt}}</p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <p>Below data is coming from Firebase API</p>
    <table>
      <tr>
        <th>Username</th>
        <th>Password</th>
      </tr>
      <tr v-for="user in users">
        <td>
          {{user.name}}
        </td>
        <td>{{user.password}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data (){
    return{
      name: '',
      password: '',
      users: [],
      selectList: [],
      userDetail: []
    }
  },
  mounted(){
    this.showUserList();
    this.userDetails();
  },
  created(){
    axios.get('https://vuelogin-ffdba.firebaseio.com/users.json')
      .then(res => {
        //console.log(res)
        this.users = res.data
      })
      .catch(error => console.log(error))
  },
  methods: {
    showUserList: function(){
      axios.get('http://5da80c2523fa740014697bf3.mockapi.io/users')
      .then(respone => {
        this.selectList = respone.data;
        console.log("selectList", this.selectList)
      })
      .catch(error => console.log(error))
    },
    userDetails: function(){
      axios.get('http://5da80c2523fa740014697bf3.mockapi.io/users')
      .then(respone => {
        this.userDetail = respone.data;
      })
      .catch(error => console.log(error))
    },
    selectUser: function(event){
      console.log(this.option.id);
      console.log("Clicked!!");
    }
  }
}
</script>
<style>
table{
  width: 100%;
  max-width: 600px;
  border-right: 1px solid #CCC;
  border-top: 1px solid #CCC;
}
table th, table td{
  border-left: 1px solid #CCC;
  border-bottom: 1px solid #CCC;
  padding: 5px 10px;
}
</style>