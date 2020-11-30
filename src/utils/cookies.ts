export const getCookie = function (name:string){
    let arr = decodeURIComponent(document.cookie).split(";")
    for (let i = 0; i <arr.length;i++){
        let newarr = arr[i].split("=")
        if (name === newarr[0]){
            return newarr[1]
        }
    }
}
