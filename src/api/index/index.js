import request from '../requst'

export default function getUserinfo(info) {
   return request({
        type:'GET',
        url:'/api/userinfo',
        data:info
    })
}