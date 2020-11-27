<template>
  <div class="list">
    <div class="top">
      <div @click="cakeClass" v-text="top_class">全部蛋糕</div>
      <div @click="mode">配送方式</div>
    </div>
    <div class="a" :class="isshow==1?'show':'none'">
      <div>
        <a href="javascript:;" @click="fn(1001)">生日蛋糕</a>
        <a href="javascript:;" @click="fn(2002)">新鲜切件</a>
        <a href="javascript:;" @click="fn(0)">全部蛋糕</a>
      </div>
    </div>
    <div class="b" :class="isshow1==1?'show':'none'">
      <div>
        <a href="javascript:;">不限</a>
        <a href="javascript:;">开花亭配送</a>
        <a href="javascript:;">全国配送</a>
      </div>
    </div>
    <div class="container"  infinite-scroll-distance="10px"  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy"  infinite-scroll-immediate-check="true">
      <div class="item" v-for="(p,i) of details" :key="i">
        <div class="imgLoaded" v-html='p.goods_img'>
          <img src="../assets/images/icake.png">
        </div>
        <div class="details" v-html='p.goods_name'></div>
        <span class="text3"><span class="text4">¥{{p.counter_price}}</span>/1磅</span>
        <div class="add">
          <img @click="add" src="http://m.icake.cc/icake/images/btn-add.png">
        </div>
      </div>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="1">
        <img
          v-if="selected == '1'"
          slot="icon"
          src="../../public/img/b_nav/home.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-home-hover.png"
        />
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        <img
          v-if="selected == '2'"
          slot="icon"
          src="../../public/img/b_nav/icon-cake.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-cake-hover.png"
        />
        新鲜蛋糕
      </mt-tab-item>
      <mt-tab-item id="3">
        <img
          v-if="selected == '3'"
          slot="icon"
          src="../../public/img/b_nav/icon-tel.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-tel-hover.png"
        />
        电话订购
      </mt-tab-item>
      <mt-tab-item id="4">
        <img
          v-if="selected == '4'"
          slot="icon"
          src="../../public/img/b_nav/icon-cart.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-cart-hover.png"
        />
        购物车
      </mt-tab-item>
      <mt-tab-item id="5">
        <img
          v-if="selected == '5'"
          slot="icon"
          src="../../public/img/b_nav/icon-me.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-me-hover.png"
        />
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      cid:0,
      n:10,
      busy:false,
      isshow:0,
      isshow1:0,
      selected:2,
      listDetials:{},
      details:[],
      page:1,
      pagecount:0,
      top_class:"全部蛋糕"
    }
  },
  methods:{
    fn(cid){
      this.cid=cid;
      this.details=[];
      if(cid==1001){
        this.top_class="生日蛋糕";
        
      }else if(cid==2002){
        this.top_class="新鲜切件";
      }else{
        this.top_class="全部蛋糕"
      }
      this.isshow=0;
      this.loadData(cid,1)
    },
    loadData(cid,page){
      this.busy=true;
      this.$indicator.open({
        text:"加载中",
        spinnerType:"fading-circle"
      });
      this.axios.get('/details?cid='+cid+'&page='+page).then(res=>{
        this.details=res.data.resultset;
        this.pagecount=res.data.pageCount;
        this.$indicator.close();
        this.busy=false;
      })  
    },
    loadMore(){
      this.page++;
      if(this.page<=this.pagecount){
        this.loadData(this.cid,this.page);
      }
    },
    cakeClass(e){
      if(this.isshow==0){
        this.isshow=1;
        this.isshow1=0;
        e.target.style.zIndex=666;
      }else{
        this.isshow=0;
        e.target.style.zIndex=555;
      }
    },
    mode(e){
     if(this.isshow1==0){
        this.isshow1=1;
        this.isshow=0;
        e.target.style.zIndex=666;
      }else{
        this.isshow1=0;
        e.target.style.zIndex=555;
      }
    },
    add(uid,gid,price,cart_number){
      this.axios(`/add?uid=${uid}&gid=${gid}&price=${price}&cart_number=${cart_number}`).then(res=>{
     console.log(res.data);
   })
    }
  },
  mounted(){
   this.loadData(0,1);
  },
  

}
</script>
<style>
  *{
    margin: 0;padding: 0;
  }
  .list .none{
    display: none;
  }
  .list .show{
    display:block;
    z-index: 666;
  }
  .list .a,.list .b{
    position:fixed;
    top: 43px;
    width: 100%;
    height: 800px;
    z-index: 555;
    background-color: rgba(0,0,0,.3);
  }
  .list .a a,.list .b a{
    display: block;
    width: 22%;
    display: block;
    margin: .3rem 0;
    border: 1px solid #ccc;
    padding: .3rem 0;
    border-radius: 50px;
    font-size: .75rem;
    float: left;
    margin-left: 2%;
    text-align: center;
    color: #000;
  }
  .list .a>div,.list .b>div{
    width: 100%;
    padding:30px 0 60px 0;
    background-color: #fff;
  }
  .list .top{
    position: fixed;
    top: 0;
    display: flex;
    z-index: 555;
    width: 100%;
    font-size: .8rem;
  }
  .list .top>div{
    width: 50%;
    height: 42px;
    text-align: center;
    line-height: 42px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
  .list .top>div:first-child{
    border-right:1px solid #ccc;
  }
  .list .container{
    background-color: #F7F3EA;
    margin: 42px 2px 55px 2px;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .list .container>div{
    width:180px;
    height:180px;
    background-color: #fff;
    border-radius: 10px;
    margin-top:10px
  }
  .list .item{
    display:flex;
    flex-flow: column wrap;
    align-items: center;
    position: relative;
    text-align: center;
  }
  .list .imgLoaded{
    width: 100%;
    height:118px
  }
  .list .imgLoaded>img{
    width: 180px;
  }
  .list span{
    font-family: "Helvetica Neue",Helvetica, sans-serif;
    font-weight: 500;
  }
  .list .details>p:first-child{
    font-size: .8rem;
    color: #505050;
    margin-top:3px;
  }
  .list .details>p:last-child{
    font-size: .55rem;
    color: #888;
  }
  .list .text3{
    font-weight: bold;
    font-size: .55rem;
    color: #777;
    font-size: 10px;
    margin: .6rem 0 ;
  }
  .list .text3>.text4{
    font-size: .9rem;
    color: #ff6600;
    font-weight: bold;
  }
  .list .add{
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    right:0;
  }
  .list .add>img{
    width: 40px;
  }
</style>