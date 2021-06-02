import request from '../requst'

export function WriteBlog(info) {
   return request({
        type:'GET',
        url:'/api/write',
        data:info
    })
}

export function WriteBloginfo(info) {
    return request({
         type:'GET',
         url:'/api/writeinfo',
         data:info
     })
 }