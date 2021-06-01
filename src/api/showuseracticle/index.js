import request from '../requst'

export default function showUserActicle(info) {
   return request({
        type:'GET',
        url:'/api/useraticle',
        data:info
    })
}