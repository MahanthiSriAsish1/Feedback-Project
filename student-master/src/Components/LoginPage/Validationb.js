export default function Validationb(data){
    const errors ={}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const first_Name =/^[a-zA-Z ]{2,30}$/;
    const last_Name =/^[a-zA-Z ]{2,30}$/;
    

    //usernameW
    if(data.userName === "" ){
        errors.userName = "Name is required";
    }
    
    // first name vefification
    if(data.firstName === ""){
        errors.firstName="First Name is required";
    }else if(!first_Name.test(data.firstName)){
        errors.firstName = "Name format is not correct";
    }

    //lastname verification
    if(data.lastName === ""){
        errors.lastName="   Last Name is required";
    }else if(!last_Name.test(data.lastName)){
        errors.lastName = "Name format is not correct";
    }
    //email verification
    if(data.email === ""){
        errors.email="Email is required";
    }else if(!email_pattern.test( data.email )){
        errors.email = "Email format is not correct";
    }
    //panel verification
    if(data.panel === ""){
        errors.panel="panel is required";
    }

    //password verification
    if(data.password === ""){
        errors.password="Password is required";
    }else if(!password_pattern.test(data.password)){
        errors.password = "Password format is not correct";
    }
    
    //confirm password verification
    if(data.confPassword === ""){
        errors.confPassword="Password is required";
    }else if(data.password !== data.confPassword){
        errors.confPassword = "Password format does not match";
    }

    return errors;
}