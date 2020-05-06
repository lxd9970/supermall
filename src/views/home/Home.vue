<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
   <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="LoadMore">
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/> 
    <feature-view />
    <tab-control class="tab-control1" 
    :titles="['流行','新款','精选']"
    @tabClick="tabClick"
     ></tab-control>
    <good-list :goods="goods[currentType].list"/>
   </scroll>
   <better-top @click.native="betterClick"  v-show="isShow" ></better-top>
   <!-- 组件点击必须加.native -->
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import BetterTop from 'components/content/betterTop/BetterTop'

   import HomeSwiper from './childComps/HomeSwiper'
   import RecommendView from './childComps/RecommendView'
    import  FeatureView from './childComps/FeatureView'

   import {getHomeMultidata,
    getHomeGoods
  } from "network/home";

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "Home",
    components: {
      NavBar,
       HomeSwiper,
       RecommendView,
       FeatureView,
       TabControl,
       GoodList,
       Scroll,
       BetterTop
    },
    data() {
      return {
         banners: [],
         recommends: [],
          isShow:false,
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop'
      }
    },
    created() {
      // 1.请求多个数据
   this.getHomeMultidata()
   //请求商品数据
     this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
       /**
       * 事件监听模块
       **/
       tabClick(index){
        console.log(index);
       switch(index){
         case 0:
           this.currentType='pop';
           break;
           case 1:
             this.currentType='new';
             break;
             case 2:
             this.currentType='sell';
              break;
       }
       
       },
       contentScroll(position){
          //  console.log(position);
           this.isShow = position.y < -600
       },
       betterClick(){
        
         this.$refs.scroll.scrollTo(0,0)
       },
       LoadMore(){
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()
       },
      /**
       * 网络请求模块
       **/
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
         
          this.$refs.scroll.scroll.finishPullUp();
        })
      }
    }
   }
</script>

<style scoped>
  #home{
     padding-top: 44px; 
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control1{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  }
</style>
