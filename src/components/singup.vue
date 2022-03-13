<template>
  <div>
    <h1>SING UP</h1>
    <div>
      <h3>E-mail</h3>
      <input type="text" placeholder="E-mail" v-model="email" />
    </div>
    <div>
      <h3>Password</h3>
      <input type="text" placeholder="Password" v-model="password" />
    </div>
    <button @click="createUserAccount">Sing UP!!</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { server } from "../utils/helper"
import axios from 'axios';

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
});

export default {
  methods: {
    createUserAccount() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log(process.env.VUE_APP_API_KEY);
          const data = {
            id: response.user.uid,
            name: response.user.email,
            email: response.user.email
          };
          console.log(data);
          this.__submitToServer(data);
          alert("Create Account");
        })
        .catch(error => {
          alert("Error!", error.message);
          console.error("Account Regeister Error", error.message);
        });
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/user`, data).then(response => {
        console.log(response);
      })
    }
  }
}
</script>
