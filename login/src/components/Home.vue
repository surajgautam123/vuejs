<template>
  <div>
    <h3>The Home Page</h3>
    <hr>
    <p>sdf asdf afsafs adfasfadf asdkf ;jflsa dfjasfjas;fj;lasfja;ldfjask fjas;dfjs dfasjdfasjf  asdfjsafjda s</p>
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
      users: []
    }
  },
  created(){
    axios.get('/users.json')
      .then(res => {
        console.log(res)
        const data = res.data
        for (let key in data){
          const user = data[key]
          user.id = key
          this.users.push(user)
        }
        console.log("Suraj ", this.users);
      })
      .catch(error => console.log(error))
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