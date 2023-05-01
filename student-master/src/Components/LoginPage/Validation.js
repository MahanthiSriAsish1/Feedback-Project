export default function Validation(formdata){
    const errors ={}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

    //username
    if(formdata.userName === ""  ){
        errors.userName = "Name is required";
    }
    
    //email verification
    if(formdata.email === "" ){
        errors.email="Email is required";
    }else if(!email_pattern.test(formdata.email  )){
        errors.email = "Email format is not correct";
    }

    //password verification
    if(formdata.password === "" ){
        errors.password="Password is required";
    }else if(!password_pattern.test(formdata.password )){
        errors.password = "Password format is not correct";
    }
    


    return errors;
}