<template>
  <div class="main">
    <p class="sign" align="center">Sign in</p>
    <form class="form1" @submit.prevent="signIn">
      <input
        v-model="email"
        class="un"
        type="email"
        align="center"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        class="pass"
        type="password"
        align="center"
        placeholder="Password"
        required
      />
      <button></button>
      <h1></h1>
      <button class="submit" align="center"><p>Log in</p></button>
        <loading v-if="loading" />
      <div v-if="error" class="error-message">
        <h3>{{message}}</h3>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
import loading from "@/components/loading.vue"
export default {
  components:{
    loading
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      error: false,
      message:""
    };
  },
  methods: {
    signIn() {
      this.loading = true;
      this.error = false;
      var url = new URL("http://localhost:8081/login"),
        params = { email: this.email, password: this.password };
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );

      fetch(url, {
        method: "GET",
        credentials: "include",
      })
        .then(
          function (res) {
            this.loading = false;
            if (res.status != 200) {
              this.message = 'ERROR! Wrong email or password'
              this.error = true;
            }else{
              this.$router.push('/admin');
            }
          }.bind(this)
        )
        .catch(
          function () {
            this.loading = false;
              this.message = 'ERROR! Something went wrong'
            this.error = true;
          }.bind(this)
        );

      // axios
      //   .post("http://localhost:3000/signin",{withCredentials: true} ,{
      //     params: {
      //       email: this.email,
      //       password: this.password,
      //     }})
      //   .then(
      //     function () {
      //       this.loading = false;
      //     }.bind(this)
      //   );
      // setTimeout(function(){this.loading = false}.bind(this),3000)
    },
  },
};
</script>



<style  scoped>
.main {
  background-color: #ffffff;
  width: 400px;
  height: 400px;
  margin: 7em auto;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}

.sign {
  padding-top: 40px;
  color: #8c55aa;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: 23px;
}

.un {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
}

form.form1 {
  padding-top: 40px;
}

.pass {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
}

.un:focus,
.pass:focus {
  border: 2px solid rgba(0, 0, 0, 0.18) !important;
}

.submit {
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background-color: #8c55aa;
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: "Ubuntu", sans-serif;
  margin-left: 35%;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  outline: none;
}

.forgot {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  padding-top: 15px;
}

a {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  text-decoration: none;
}

.error-message {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
  text-align: center;
padding : 10px 5px;
margin:35px 0;
color: rgb(255, 80, 80);

}

</style>