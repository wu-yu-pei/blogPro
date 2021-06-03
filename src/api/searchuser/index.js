import request from '../requst'

export default function searchUser(info) {
console.log(info);
   return request({
        type:'GET',
        url:'/api/searchuser',
        data:info
    })
}