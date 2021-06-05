import request from '../requst'

export  function changeUname(info) {
   return request({
        type:'GET',
        url:'/api/changeuname',
        data:info
    })
}
export  function changeImg(info) {
    return request({
         type:'GET',
         url:'/api/changeimg',
         data:info
     })
 }