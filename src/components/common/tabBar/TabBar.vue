<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabBar"
}
</script>

<style>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    margin-bottom: 0px;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

</style>