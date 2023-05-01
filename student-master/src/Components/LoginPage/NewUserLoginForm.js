import {useState} from 'react';
import Validationb from './Validationb';
import axios from 'axios';

function NewUserLoginForm({userDetails})
{
    const [data, setData] = useState({
        userName:"",
        firstName:"",
        lastName:"",
        email:"",
        panel:"",
        password:"",
        confPassword:""
    })

    const [errors,setErrors]= useState({})

    const handleOnchange = (event) =>{
        setData({ ...data,[event.target.name]:event.target.value.trim() });
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        // axios call to post data to backend
        axios.post('http://localhost:5000/students',data)
        .then((res)=>{
            alert('New user added')
        })
        .catch((err)=>{
            console.log(err);
        })

        setErrors(Validationb(data));
        userDetails(data);
    }

    return(
        <div>
        <form onSubmit={handleOnSubmit}>
            
            <label>Username
            <input type="text" name="userName" value={data.userName} onChange={handleOnchange}/>
            {errors.userName && <p style={{color:"red"}}>{errors.userName}</p>}
            </label>
            <label>First Name
            <input type="text" name="firstName" value={data.firstName} onChange={handleOnchange}/>
            {errors.firstName && <p style={{color:"red"}}>{errors.firstName}</p>}
            </label>
            <label>Last Name
            <input type="text" name="lastName" value={data.lastName} onChange={handleOnchange}/>
            {errors.lastName && <p style={{color:"red"}}>{errors.lastName}</p>}
            </label>
            <label>Email
            <input type="text" name="email" value={data.email} onChange={handleOnchange}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            </label>
            <label>panel
            <input type="text" name="panel" value={data.panel} onChange={handleOnchange}/>
            {errors.panel && <p style={{color:"red"}}>{errors.panel}</p>}
            </label>
            <label>password
            <input type="password" name="password" value={data.password} onChange={handleOnchange}/>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            </label>
            <label>Confirm Password
            <input type="password" name="confPassword" value={data.confPassword} onChange={handleOnchange}/>
            {errors.confPassword && <p style={{color:"red"}}>{errors.confPassword}</p>}
            </label>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default NewUserLoginForm;