import axios from 'axios'
axios.defaults.baseURL = "http://www.lovegf.cn:8899"
//获取新闻列表
export function getnewslist(){
    return axios.get("/api/getnewslist/")
}
//获取详情列表
export function newslnfo(result){
    return axios.get("/api/getnew/"+result);
}
//获取评论
export function Getcompoenet(id,pageindex){
    return axios.get("/api/getcomments/"+id+'?pageindex='+pageindex);
}
//提交评论
export function postcomment(id,content){
    return axios.post("/api/postcomment/"+id,{content});
}