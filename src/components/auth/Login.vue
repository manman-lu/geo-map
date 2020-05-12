<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <h2 class="center deep-purple-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field">
          <button class="btn deep-purple">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'Login',
    data(){
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods:{
        login(){
            //make sure this all working
            //console.log(this.email, this.password)
            //make sure the user enter in valid email and pass
            if(this.email && this.password){

                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    console.log(cred.user)
                    this.$router.push({name:'GMap'})
                }).catch(err =>{
                    this.feedback = err.message
                })
                this.feedback = null;
            } else {
                this.feedback = 'please fill in both fields'
            }
        }
    }
}
</script>

<style>
.login{
    max-width: 400px;
    margin-top: 60px;

}
.login h2{
    font-size:2.4em;
}
.login .field{
    margin-bottom: 16px;
}

</style>