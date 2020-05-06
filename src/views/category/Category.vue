<template>
 <div class="wrapper">
  <ul class="content">
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
  </ul>
 </div>
</template>

<script>
  import BSscroll from 'better-scroll'
  export default {
    name: "Category",
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      this.scroll = new BSscroll(document.querySelector('.wrapper'),{
       probeType:3,
       pullUpLoad:true
      })
      this.scroll.on('scroll',(position) => {
        // console.log(position);
        
      })
      this.scroll.on('pullingUp',()=>{
        console.log('111');
        
      })
    }
  }
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
