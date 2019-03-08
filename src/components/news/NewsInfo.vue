<template>
    <div class="newsinfo">
        <h1 class="newsinfoTitle">{{msg.title}}</h1>
        <p>
            <span>发表时间：{{msg.add_time|dateFormat}}</span>
            <span>点击：{{msg.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="msg.content">

        </div>
        <coment :id='this.id'></coment>
    </div>
</template>

<script>

import coment from '../subcomponents/component'
import {newslnfo} from  '@/getadd/index.js'

export default {
    data(){
        return {
            id:this.$route.params.id,
            msg:{}
        }
    },
    created(){
        newslnfo(this.id).then(res=>{
            this.msg = res.data.message[0]
        })
    },
    methods:{
    },
    components: {
    coment
}
}
</script>

<style lang="scss" scope>
  .newsinfo{
      padding: 0 4px;
      .newsinfoTitle{
          font-size: 16px;
          color: red;
          text-align: center;
      }
      p {
          margin-top: 10px;
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          color: #226aff;
      }
      /deep/
      img{
          width: 100%;
      }
  }
</style>
