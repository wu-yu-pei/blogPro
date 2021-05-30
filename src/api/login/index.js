import request from '../requst'

export default function setUser(info) {
   return request({
        type:'GET',
        url:'/api/setusers',
        data:info
    })
}