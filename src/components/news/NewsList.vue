<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="itme in msg" :key="itme.id">
        <routerLink :to="'newsinfo/'+ itme.id">
          <img class="mui-media-object mui-pull-left" :src="itme.img_url">
          <div class="mui-media-body">
            <h1>{{itme.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{itme.add_time| dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
              <span>点击：{{itme.click}}次</span>
            </p>
          </div>
        </routerLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { getnewslist } from '../../getadd/index.js'
export default {
  data() {
    return {
      msg: null,
    };
  },
  created(){
    getnewslist().then(res => {
        this.msg = res.data.message;
    });
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {

  .mui-table-view-cell {
    height: 80px;
    .mui-media-body {
        h1 {
            font-size: 14px;
        }
    }
    p {
      font-size: 12px;
      color: #0094ff;
      font-weight: 400;
        display: flex;
        justify-content: space-between;
    }
  }
}
</style>
