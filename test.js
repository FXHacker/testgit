const API_URL = "www.baidu.com"

function fetchApi(type, params, method){
    return new Promise((resolve, reject) =>{
        wx.requset({
            url: `${API_URL}/${type}`,
            data: params,
            success: resolve,
            fail: reject
        })
    })
}

module.exports = {
    getOpenid: function(type, encrytedDate, iv, js_code, method){
        return fetchApi(type, {
            "encrytedDate": encrytedDate,
            "iv": iv,
            "js_code": js_code
        }, "POST").then( res => {
            res
        }).catch((e) => {
            e
        })
    }
}