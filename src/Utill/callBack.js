const request = require('request')

const returnFunction = (url,callback)=>{

    request(url,(error,resopnse)=>{

        if(error){
           callback("Data not found",undefined);
        }
        else{
            callback(resopnse)
        }

    })

}

module.exports.returnFunction= returnFunction