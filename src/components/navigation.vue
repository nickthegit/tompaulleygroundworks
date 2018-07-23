<template>
    <header>
        <div class="brand">
            <img src="http://via.placeholder.com/350x350" alt="">
        </div>
        <nav>
            <ul id="navMenu">
                <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
                <li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
                <li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
                <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
            </ul>
        </nav> 
    </header>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
  }
  nav {
      background: darkgreen;
      li {
          display: inline-block;
          padding: 10px;
          margin: 0 10px;
      }
      a {
          text-decoration: none;
          color: white;
      }
  }
  .brand {
      width: 100px;
      height: 100%;
      img {
          height: auto;
          width: 100%;
      }
  }
</style>
