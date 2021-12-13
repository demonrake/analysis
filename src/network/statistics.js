import {request} from './request'

export function getFailuresInfo(page,limit){
  return request({
    url:'/failures/queryFailures',
    method:'post',
    params:{
      page,
      limit,
    }
  })
}
export function getCountFailures(){
  return request({
    url:'/failures/queryCountFailures',
    method:'get',
  })
}