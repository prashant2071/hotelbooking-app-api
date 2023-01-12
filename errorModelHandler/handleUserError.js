
const handleError = (err) =>{
    const errors= {
        message:{},
        status:500,
        code:'',
        stack:err.stack
    }
    console.log(err)
    if(err.code===11000){
        errors.code =11000,
        errors.message={
            message:"Duplicate data email or username already exist "
        };
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