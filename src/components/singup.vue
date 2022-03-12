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

firebase.initializeApp({
  apiKey: `${server.apiKey}`,
  authDomain: `${server.authDomain}`
});

export default {
  methods: {
    createUserAccount() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log(response);
          alert("Create Account");
        })
        .catch(error => {
          alert("Error!", error.message);
          console.error("Account Regeister Error", error.message);
        });
    }
  }
}
// import axios from "axios";
// import { server } from "../utils/helper";
// import router from "../router";
// export default {
//   methods: {
//     getHello() {
//       axios.get(`${server.baseURL}/hello`).then(response => {
//         console.log(response);
//         router.push({ name: "home" });
//       });
//     }
//   }
// }
</script>
