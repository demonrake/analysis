import {request} from './request'
export function getUsers(){
  return request({
    url:'users/getUsers',
    method:'get'
  })
}