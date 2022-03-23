import React, {useState} from "react";
import './Login.css';


const LoginForm = () => {

    //To keep track of values of each input tag by assigning to empty string//
    const [values,setValues] = useState({
        name:"",
    });

 

    //It will assign the value typed by user to the empty string// 
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    //To prevent from reloading on every submit and valdating the value on submit//
    const handleFormsubmit = (event) => {
        event.preventDefault();
   
    };

  return (
    <div className="section" >
    <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
        
        <div className="title">
        <h2>Login</h2>
        </div>
         <form>
        
        
         
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
                  <input
                  className="input"
                  name="name" 
                  value={values.name}
                  onChange={handleChange}
                  />
            </div></div>
                  
            <div className="field">
            <div className="control buttons is-centered">
            <input className="button is-medium is-danger is-fullwidth"
             type="submit" 
             value="Login" 
             onClick={handleFormsubmit} />
                   
                     </div></div>
                      </form>
</div></div>
  );

};
export default LoginForm;