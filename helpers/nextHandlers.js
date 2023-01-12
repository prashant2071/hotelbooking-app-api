const nextHandlers = (message,status,code,stack) =>{
    const err={
        success:false,
        message:message||"something went wrong" ,
        status:status ||500,
        code:code ||"",
        stack:stack||""
    };
    
return err;
}
module.exports=nextHandlers