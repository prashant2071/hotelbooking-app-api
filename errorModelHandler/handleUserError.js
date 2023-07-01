
const handleError = (err) =>{
    const errors= {
        message:{},
        status:500,
        name:err.name,
        code:err.code||"",
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
    else if(err._message==="Room validation failed"){
        errors.message ={
            title:err.errors.title?err.errors.title.properties.message:"",
            price:err.errors.price?err.errors.price.properties.message:"",
            maxPeople:err.errors.maxPeople?err.errors.maxPeople.properties.message:"",
            description:err.errors.description?err.errors.description.properties.message:""


        }
    }
    return errors
}
const notFound = (req, res, next) => {
    const error = new Error(`Not Found ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
module.exports={
    handleError,
    notFound
}