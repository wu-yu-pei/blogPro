import request from '../requst'

export function getqianduan(info) {
   return request({
        type:'GET',
        url:'/api/qianduan',
        data:info
    })
}

export function gethouduan(info) {
    return request({
         type:'GET',
         url:'/api/houduan',
         data:info
     })
 }
 
export function getvue(info) {
    return request({
         type:'GET',
         url:'/api/vue',
         data:info
     })
 }
 
export function getreact(info) {
    return request({
         type:'GET',
         url:'/api/react',
         data:info
     })
 }
 
export function getcss(info) {
    return request({
         type:'GET',
         url:'/api/css',
         data:info
     })
 }
 
export function gethtml(info) {
    return request({
         type:'GET',
         url:'/api/html',
         data:info
     })
 }
 
export function getjava(info) {
    return request({
         type:'GET',
         url:'/api/java',
         data:info
     })
 }
 
export function getnode(info) {
    return request({
         type:'GET',
         url:'/api/node',
         data:info
     })
 }
 
export function getc(info) {
    return request({
         type:'GET',
         url:'/api/c',
         data:info
     })
 }
 
export function getjavascript(info) {
    return request({
         type:'GET',
         url:'/api/javascript',
         data:info
     })
 }
