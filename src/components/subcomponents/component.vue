<template>
    <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model='content'></textarea>
    <mt-button type="primary" size="large" @click="Addpostcomment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for='(itme,index) in msg' :key='index'>
        <div class="cmt-title">
          第{{index+1}}楼&nbsp;&nbsp;用户:{{itme.user_name}}&nbsp;&nbsp;发表时间：{{itme.add_time|dateFormat}}
        </div>
        <div class="cmt-body">
          {{itme.content === 'undefined' ? '该用户很懒' : itme.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click='getMort'>加载更多</mt-button>
  </div>
</template>
<script>
import {Getcompoenet,postcomment} from '@/getadd/index.js'
export default {
    data(){
        return{
            pageindex:1,
            msg:[],
            content:''
        }
    },
    props:['id'],
    created(){
        Getcompoenet(this.id,this.pageindex).then(res=>{
            this.msg = [...this.msg,...res.data.message]
        })
    },
    methods:{
        getMort(){
            this.pageindex++;
             Getcompoenet(this.id,this.pageindex).then(res=>{
            this.msg = [...this.msg,...res.data.message]
            })
        },
        Addpostcomment(){
             postcomment(this.id,this.content).then(res=>{
                   
            })
        }
    }, 
}
</script>


<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
