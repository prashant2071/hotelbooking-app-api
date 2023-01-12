const nextHandlers = (message,error) =>{
    const err={
        success:false,
        message:message||"something went wrong" ,
        errMessage:error.message||"",
        status:error.status ||500,
        code:error.code ||"",
        stack:error.stack||""
    };
    
return err;
}
module.exports=nextHandlers