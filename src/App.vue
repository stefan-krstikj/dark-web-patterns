<template>
  <div id="app">
    <div style="width: 100%; background-color: seagreen; color: antiquewhite;">
      <b><a href="https://github.com/stefan-krstikj/dark-web-patterns">github.com/stefan-krstikj/dark-web-patterns</a></b>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/trickquestion">Trick Question</router-link>
      |
      <router-link to="/confirmshaming">Confirmshaming</router-link>
      |
      <router-link to="/pricecomparison">Price Comparison Prevention</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
