import axios from 'axios'

export default function request(config) {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_BASEURL,
        timeout: 10000
    })
    return new Promise((resolve,reject) => {
        let promise
        if(config.type === 'GET') {
            promise = instance.get(config.url,{params:config.data})
        }
        if(config.type === "POST") {
            promise = instance.post(config.url,config.data)
        }
        promise.then(res => {
            resolve(res)
        })
    })
}