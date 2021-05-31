import getUserAllActicle from '../../../api/allacticle/index'
export default {
    namespaced:true,
    state: {
        allacticle:''
    },
    mutations: {
        // 获取用于在数据库里的每一篇文章
        ['GETUSERALLACTICLE'](state,payload) {
            getUserAllActicle({
                phone:payload.userphone
            }).then(res => {
                state.allacticle = res.data
            }).catch(err => {
                state.allacticle = []
            })
        }
    },
    actions: {
        GetUserAllActicle(context,payload) {
            context.commit('GETUSERALLACTICLE',payload)
        }
    }
}