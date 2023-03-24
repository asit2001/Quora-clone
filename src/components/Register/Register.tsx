import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { disabledRegisterBtn, registerUser, validateEmailForRegister, validateName, validatePassword } from "../../utils/utils";
import { CloseIcon, ErrorIcon } from "../Icons/Icon";

import "./styles/Register.css";
function Register({hideRegister}:{hideRegister:Function}) {
  const navigate = useNavigate(); 
  const [buttonText,setButtonText] = useState<"Next"|"Finish">("Next");
    const [userInfo,setUserInfo] = useState({
        name:"",
        email:"",
        password:""
    })
    const [inputError,setInputError] = useState({
        name:"",
        email:"",
        password:""
    })
    useEffect(()=>{
        setInputError({
            name:userInfo.name.length>0? validateName(userInfo.name.trim()):"",
            email:userInfo.email.length>0?validateEmailForRegister(userInfo.email):"",
            password:userInfo.password.length >0? validatePassword(userInfo.password.trim()):""
        })
    },[userInfo])
    function register() {
      if (buttonText === "Next") {
        setButtonText("Finish")
      }else{
        registerUser(userInfo)
        hideRegister();
        navigate("/");
      }
    }
  return (
    <div className="container">
      <div className="register">
        <button className="register__closeBtn" onClick={()=>{hideRegister()}}>
          <CloseIcon />
        </button>
        <h3 className="register__heading">Sign up</h3>
        <Form className="register__form">
          {buttonText === "Next"?  
          <>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" 
            onChange={(e)=>{setUserInfo({...userInfo,name:e.target.value})}}
            placeholder="What would you like to be called?"
            />

            {inputError.name !== "" && 
            <p className="register__form__error"><ErrorIcon/> {inputError.name}</p>
            }
            <label htmlFor="email">Email</label>
            <input type="email" id="email" 
            onChange={(e)=>{setUserInfo({...userInfo,email:e.target.value})}}
            placeholder="Your Email"
            />
            {inputError.email !=="" && 
            <p className="register__form__error"><ErrorIcon/> {inputError.email}</p>
            }
          </>
          :
          <>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" 
            onChange={(e)=>{setUserInfo({...userInfo,password:e.target.value})}}
          />
          {inputError.password !=="" && 
          <p className="register__form__error"><ErrorIcon/> {inputError.password}</p>
          }
          </>
          }
          <button className="register__form__btn"
          disabled={disabledRegisterBtn(buttonText,userInfo)}
          onClick={(e)=>{register()}}>
            {buttonText}
            </button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
