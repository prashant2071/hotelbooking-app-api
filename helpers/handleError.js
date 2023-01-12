
const handleError = (err) =>{
    const errors= {
        // email:"",
        // password:"",
        message:{},
        status:500,
        code:'',
        stack:err.stack
    }
    // console.log(err)
    console.log("the error is",err.errors.username.properties.message)
    if(err.code===11000){
        errors.code =11000
        errors.message="email or username already exist";
    }
    if(err._message==="User validation failed"){
        errors.message ={
            email:err.errors.email?err.errors.email.properties.message:"",
            username:err.errors.username?err.errors.username.properties.message:"",
            password:err.errors.password?err.errors.password.properties.message:""

        }

    }
    return errors
}
module.exports=handleError