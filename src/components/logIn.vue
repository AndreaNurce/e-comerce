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
      <button class="submit" align="center"><p>Sign in</p></button>
      <div v-if="loading" class="loader">
        <div class="loader-wheel"></div>
        <div class="loader-text"></div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    signIn() {
      this.loading = true;
      axios
        .get("http://localhost:3000/signin/", {
          params: {
            email: this.email,
            password: this.password,
          },
        })
        .then(
          function (res) {
            this.loading = false;
            console.log(res);
          }.bind(this)
        );
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
  background: linear-gradient(to right, #9c27b0, #e040fb);
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
.loader {
  margin-top: 20px;
  width: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  transform-origin: center;
}

.loader-wheel {
  animation: spin 1s infinite linear;
  border: 2px solid rgba(216, 215, 215, 0.5);
  border-left: 2px solid black;
  border-radius: 100px;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
}

.loader-text {
  color: black;
  font-family: arial, sans-serif;
}

.loader-text:after {
  content: "Loading";
  animation: load 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes load {
  0% {
    content: "Loading";
  }
  33% {
    content: "Loading.";
  }
  67% {
    content: "Loading..";
  }
  100% {
    content: "Loading...";
  }
}
</style>