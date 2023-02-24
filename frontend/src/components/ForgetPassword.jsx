import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import bcryptjs from "bcryptjs";
import axios from 'axios';

function ForgetPassword() {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm()
    const onClick=()=>navigate('/login')
    
    const [isVisibleotp, setIsVisibleotp] = useState(true);   
    const [isVisibleVerify, setIsVisibleVerify] = useState(false);
    const [isVisibleVerifybtn, setIsVisibleVerifybtn] = useState(false);
    const [isVisiblepass, setIsVisiblepass] = useState(false);
    const [inputOtp, setInputOtp] = useState("");
  
    const handleChange = (event) => {
      
    }
    const otp = (number)=>{
        setIsVisibleotp(false)
        setIsVisibleVerify(true)
        setIsVisibleVerifybtn(true)

     
    }

    const pass = (number)=>{
        setIsVisibleVerifybtn(false)
        setIsVisiblepass(true)
      
    }
    const onSubmit =async (data) => { 
     
    };

  return(
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
     <div className="je2-sign-up-dialog">
        <div className="je2-sign-up-dialog__header">
          <div className="je2-sign-up-dialog__header-title">Change password</div>
          <button className="je2-button _noborder js-close">
            <svg><use xlinkHref="#cross" /></svg>
          </button>
        </div>
        <div className="js-sign-up-form">
          <div className="je2-sign-up-dialog__content">
            <div className="je2-sign-up-dialog__content__first-step js-first-step _visible">
             
              <form  id="registration-form-first-step" className="simple_form je2-sign-up-dialog__content-form je2-form" >
              
              
                <div className="je2-sign-up-dialog__content-form__field">
                  <input  className="je2-input" type="number" placeholder="Phone" name="phone" required />
                  <div className="js-error-message _hidden">
                  </div>
                </div> 
                <div className="je2-sign-up-dialog__content-form__continue">
                  <div className="je3-spinner">
                  </div>
                  {isVisibleotp && (
                  <button type='button' onClick={otp} className="je2-button _black js-save">
                    <span>
                      send otp
                    </span>
                  </button>)}
                </div>

                {isVisibleVerify && (
                  <div className="je2-sign-up-dialog__content-form__field">
                  <input type="number"  className="je2-input"  placeholder="otp" name="otp" required />
                  <div className="js-error-message _hidden">
                  </div>
                </div>  )}
                {isVisibleVerifybtn && (
                <div className="je2-sign-up-dialog__content-form__continue">
                  <div className="je3-spinner">
                  </div>
                  <button onClick={pass}  className="je2-button _black js-save">
                    <span>
                      verify OTP
                    </span>
                  </button>
                </div>)}

                {isVisiblepass && (                   
                <div className="je2-sign-up-dialog__content-form__continue">
                <input  className="je2-input" type="text" placeholder="new password" name="phone" required />

                  <div className="je3-spinner">
                  </div>
                  <button type='submit' className="je2-button _black js-save">
                    <span>
                      Change password
                    </span>
                  </button>
                </div>)}
              </form>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword;
