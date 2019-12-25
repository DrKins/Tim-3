<template>
       <div class="container">
         <div id="igraj"><button v-on:click="dobitnaKombinacija" class="btn"><span><router-link to="/">PLAY AGAIN</router-link></span></button> </div>
       </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
  height: 100vw;
}
#igraj{
  color: white;
  padding: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
.btn {
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 66px;
  background-color: #222;
  padding: 17px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
  border-radius: 25px;
  font-family: 'Righteous', cursive;
}

.btn a{
  text-decoration: none;
  color: unset;
  -webkit-text-stroke: 2px #222222;
  -webkit-text-fill-color: white;
}

.btn span {
  position: relative; 
  z-index: 1;
}


.btn:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 490%;
  width: 115%;

  background: #3D7EAA;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFE47A, #3D7EAA);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFE47A, #3D7EAA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
}

.btn:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
</style>>

