import request from '../requst'

export default function getUserAllActicle(info) {
   return request({
        type:'GET',
        url:'/api/userallactive',
        data:info
    })
}