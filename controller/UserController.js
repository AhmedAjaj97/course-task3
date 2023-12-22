


exports.LoginUser = (req,res)=>{

}

exports.LoginUser = (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(username==="ahmed" && password=="ajaj54321"){
       return res.json({
        msg:"Login Successfuly",
        status:1
       })

    }else{
        res.json({
            msg: "Login faield"
        })
    }
}
exports.SignUpUser = (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;


    if(username.trim()==="" || password.trim()==="" || email.trim()==='' || phone.trim()===""){
       return res.json({
        msg:"Something is Wrong ",
        state:0
       })

    }else{
        res.json({
            msg: "SignUp Successfuly",
            state:1
        })
    }
}