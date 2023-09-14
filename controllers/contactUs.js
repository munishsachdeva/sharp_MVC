const path = require('path')
exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactUs.html'))
 }

 exports.postContactUs = (req,res,next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'success.html'))
    //  console.log(req.body)
     res.redirect('/success');
}

exports.getSuccess = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','success.html'))
}