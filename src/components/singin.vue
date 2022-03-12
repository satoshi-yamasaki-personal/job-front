<template>
  <div>
    <h1>SING IN</h1>
    <div>
      <h3>E-mail</h3>
      <input type="text" placeholder="E-mail" v-model="email" />
    </div>
    <div>
      <h3>Password</h3>
      <input type="text" placeholder="Password" v-model="password" />
    </div>
    <button @click="userSingIn">Sing in Now!!</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { server } from "../utils/helper";
import axios from "axios";
// import router from "../router";
export default {
  methods: {
    userSingIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          alert("Login Suceeded");
          console.log(response);
          const data = {
            userId: response.user.uid,
            email: response.user.email
          }
          axios.post(`${server.baseURL}/hello`, data).then(response2=> {
            console.log(response2);
          })
          this.$router.push("/mypage");
        });
    }
  }
}
</script>
