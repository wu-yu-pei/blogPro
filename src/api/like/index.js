import request from '../requst'

export  function getlikecount(info) {
   return request({
        type:'GET',
        url:'/api/getlikecount',
        data:info
    })
}

export  function setlikecount(info) {
    return request({
         type:'GET',
         url:'/api/setlikecount',
         data:info
     })
 }