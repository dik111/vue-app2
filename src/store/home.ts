import {Store} from "@/interface";
import {getMenuReq} from "@/api";

const homeStore:Store={
    namespaced:true,
    state:{
        menus:[]
    },
    actions:{
        async getMenus({commit}){
            commit({
                type:'get_menus',
                payload: await getMenuReq()
            })
        }
    },
    mutations:{
        get_menus(state,{playload}){
            console.log('playload',playload)
        }
    }
}



export default homeStore


