<template>
          <div  class="loader">
        <div class="loader-wheel"></div>
        <div class="loader-text"></div>
      </div>
</template>
<style  scoped>
    .loader {
  margin-top: 20px;
  width: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  transform-origin: center;
}
.error-message {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
  text-align: center;
padding : 10px 5px;
margin:35px 0;
color: rgb(255, 80, 80);

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