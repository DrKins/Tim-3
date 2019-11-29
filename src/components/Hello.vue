<template>
  <div class="hello">
      Klikni me
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hello {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 200px;
    height: 50px;
    top: 50%;
    left: 50%;
    background-color: red;
    box-sizing: border-box;
    border: solid rgba(51, 0, 0, 0.719) 1px;
    border-color: rgb(71, 0, 0);
}
.hello:hover {
    background-color: rgba(180, 0, 0, 0.267);
    border-color: black;
}

</style>
