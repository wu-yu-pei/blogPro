import request from '../requst'

export default function getUsers(info) {
   return request({
        type:'GET',
        url:'/api/users',
        data:info
    })
}