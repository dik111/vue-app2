import {Action, Mutation} from "vuex";

export interface StoreState<S> {
    [propName :string] :S
}

export interface Store {
    namespaced:boolean,
    state:StoreState<any>,
    actions:{
        [propName:string] :Action<any, any>
    },
    mutations:{
        [propName:string] :Mutation<any>
    }
}


