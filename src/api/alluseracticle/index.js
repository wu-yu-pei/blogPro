import request from '../requst'

export default function getAllUserActicle() {
   return request({
        type:'GET',
        url:'/api/alluseracticle'
    })
}