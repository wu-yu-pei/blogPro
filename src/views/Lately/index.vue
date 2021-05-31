<template>
  <div>
      <div v-if="allacticle.length == 0" class="nodata">暂无数据</div>
      <div v-else>
        <!-- 截取最新的8篇文章 -->
        <ShowItem @click="toinfo(item.acticleinfoid)" v-for="(item,index) in allacticle.slice(0,8)" :time="item.acticleinfotime" :key="index" :body="item.acticleinfobody" :readcount="item.acticleinforeadcount" :commencount="0" :likecount="item.acticleinfolikecount"></ShowItem>
      </div>
  </div>
</template> 

<script>
import ShowItem from '../../components/ShowItem/index'
import {mapActions, mapState} from 'vuex'
export default {
  name:'latery',
  data() {
    return {
      userphone:JSON.parse(localStorage.getItem("userinfo")).userid,
    }
  },
  components: {
    ShowItem
  },
  methods: {
    ...mapActions({
      GetUserAllActicle:"Index/GetUserAllActicle"
    }),
    toinfo(acticleid) {
      console.log(acticleid);
    }
  },
  computed:{
    ...mapState({
      allacticle:state => state.Index.allacticle,
    })
  },
  created() {
    // getUserAllActicle({
    //   phone:this.userphone
    // }).then(res => {
    //   this.userallacticle = res.data
    //   console.log(res.data);
    //   console.log(this.userallacticle);
    // }).catch(err => {
    //   this.userallacticle = []
    // })
    // 把数据存到vuex里面
    this.GetUserAllActicle({userphone:this.userphone})
  },
}
</script>

<style scoped lang="less">
.nodata {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: red;
}
</style>