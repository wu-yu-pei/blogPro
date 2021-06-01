import request from '../requst'

export default function changeUserInfo(info) {
   return request({
        type:'GET',
        url:'/api/change',
        data:info
    })
}