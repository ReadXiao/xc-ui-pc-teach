import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//查询课程列表
//我的课程列表
export const findCourseList = (page,size,params) => {
//使用工具类将json对象转成key/value
  let queries = querystring.stringify(params)
  return http.requestQuickGet(apiUrl+"/course/coursebase/list/"+page+"/"+size+"?"+queries)
}

//查询课程分类
export const category_findlist= () => {
  return http.requestQuickGet(apiUrl+'/category/list')
}
/*添加课程基础信息*/
export const addCourseBase = params => {
  return http.requestPost(apiUrl+'/course/coursebase/add',params)
}
/*查询课程计划*/
export const findTeachplanList = courseid => {
  return http.requestQuickGet(apiUrl+'/course/teachplan/list/'+courseid)
}
/*添加课程计划*/
export const addTeachplan = teachplah => {
  return http.requestPost(apiUrl+'/course/teachplan/add',teachplah)
}

//保存课程图片地址到课程数据 库
export const addCoursePic= (courseId,pic) => {
  return http.requestPost(apiUrl+'/course/coursepic/add?courseId='+courseId+"&pic="+pic)
}
//查询课程图片
export const findCoursePicList = courseId => {
  return http.requestQuickGet(apiUrl+'/course/coursepic/list/'+courseId)
}

//删除课程图片
export const deleteCoursePic= courseId => {
  return http.requestDelete(apiUrl+'/course/coursepic/delete?courseId='+courseId)
}
//todo 预览课程
/*预览课程*/
export const preview = id => {
  return http.requestPost(apiUrl+'/course/preview/'+id);
}
//todo 发布课程
/*发布课程*/
export const publish = id => {
  return http.requestPost(apiUrl+'/course/publish/'+id);
}
//查询课程信息
export const findCourseView = courseId => {
  return http.requestQuickGet(apiUrl+'/course/courseview/'+courseId)
}
//todo 媒资管理
/*保存媒资信息*/
export const savemedia = teachplanMedia => {
  return http.requestPost(apiUrl+'/course/savemedia',teachplanMedia);
}

export const getCourseMarketById = courseId => {
  return http.requestGet(apiUrl+'/course/courseMarket/'+courseId);
}

export const updateCourseMarket = (courseId,courseMarket) => {
  return http.requestPut(apiUrl+'/course/courseMarket/update/'+courseId,courseMarket);
}

export const getCoursebaseById = courseId => {
  return http.requestQuickGet(apiUrl+'/course/coursebase/'+courseId);
}

export const updateCoursebase = (id,courseBase) =>{
  return http.requestPut(apiUrl+'/course/coursebase/update/'+id,courseBase);
}
//获取数据字典
/*export const sys_getDictionary= dType => {
  return http.requestGet(apiUrl+'/sys/dictionary/get/'+dType);
}*/


