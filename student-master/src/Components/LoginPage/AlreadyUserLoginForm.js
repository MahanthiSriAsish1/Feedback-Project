import {useState} from 'react';
import Validation from './Validation';
function AlreadyUserLoginForm({userDetails})
{
    const [formdata, setFormData] = useState({
        userName:"",
        email:"",
        password:"",
    })

    const [errors,setErrors]= useState({})

    const handleOnchange = (event) =>{
        setFormData({ ...formdata,[event.target.name]:event.target.value.trim() });
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(formdata));
        userDetails(formdata);
    }

    return(
        <div>
        <form onSubmit={handleOnSubmit}>
            
            <label>Username
            <input type="text" name="userName" value={formdata.userName} onChange={handleOnchange}/>
            {errors.userName && <p style={{color:"red"}}>{errors.userName}</p>}
            </label>
            
            <label>Email
            <input type="text" name="email" value={formdata.email} onChange={handleOnchange}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            </label>
            <label>password
            <input type="text" name="password" value={formdata.password} onChange={handleOnchange}/>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            </label>
            
            <button>Submit</button>
        </form>
        </div>
    )
}

export default AlreadyUserLoginForm;