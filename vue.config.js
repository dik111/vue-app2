const path = require('path')
module.exports = {
    chainWebpack: c =>{
        c.resolve.alias
            .set('@',path.join(__dirname,'./src'))
    }
}
