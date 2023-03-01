import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import bcryptjs from "bcryptjs";
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const {register, formState: {errors}, handleSubmit} = useForm()
  const onClick=()=>navigate('/login')
  
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleotp, setIsVisibleotp] = useState(true);

 
  const [phoneno, setPhoneno] = useState("");

  const handleChange = (event) => {
    setPhoneno(event.target.value);
  }
  const otp = (number)=>{
    let num={number:phoneno}   
    axios.post('http://localhost:5000/numExist',num).then((res)=>{console.log(res)
    console.log(res.data);
    if(res.data==true){
      alert('number exists')
    } else{
      setIsVisible(true)
      setIsVisibleotp(false)
      //  axios.post('http://localhost:5000/otp',num).then((res)=>console.log(res))      
    }  
  })
  }
  const onSubmit =async (data) => { 
    const detail = data  
    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(data.password, saltRounds);    
    console.log('=====>>>>',detail);
    detail.password=hashedPassword 
    try {
      axios.post('http://localhost:5000/signup',detail).then((response)=>{

      if (response.data.status === "success") {
      console.log("OTP verified successfully");
    } else {
      console.error("OTP verification failed");
    }
        navigate('/')
      })
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
     <div className="je2-sign-up-dialog">
        <div className="je2-sign-up-dialog__header">
          <div className="je2-sign-up-dialog__header-title">Sign up</div>
          <button className="je2-button _noborder js-close">
            <svg><use xlinkHref="#cross" /></svg>
          </button>
        </div>
        <div className="js-sign-up-form">
          <div className="je2-sign-up-dialog__content">
            <div className="je2-sign-up-dialog__content__first-step js-first-step _visible">
             
            
              <div className="je2-sign-up-dialog__content__separator">
                <span>or</span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} id="registration-form-first-step" className="simple_form je2-sign-up-dialog__content-form je2-form" >
              
                <div className="je2-sign-up-dialog__content-form__field">
                  <input type="text" {...register("Name")} className="je2-input"  placeholder="Name" required  />
                </div>
                <div className="je2-sign-up-dialog__content-form__field">
                  <input {...register("email")} className="je2-input" type="email" placeholder="Email" name="email" required />
                </div>
                <div className="je2-sign-up-dialog__content-form__field">
                  <input {...register("password")} className="je2-input" type="password" placeholder="Password" name="password" required />
                  <div className="js-error-message _hidden">
                  </div>
                </div>
                <div className="je2-sign-up-dialog__content-form__field">
                  <input {...register("phone")} onChange={handleChange} className="je2-input" type="number" placeholder="Phone" name="phone" required />
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

                {isVisible && (
                  <div className="je2-sign-up-dialog__content-form__field">
                  <input {...register("otp")} type="number"  className="je2-input"  placeholder="otp" name="otp" required />
                  <div className="js-error-message _hidden">
                  </div>
                </div>  )}
                {isVisible && (
                <div className="je2-sign-up-dialog__content-form__continue">
                  <div className="je3-spinner">
                  </div>
                  <button type='submit' className="je2-button _black js-save">
                    <span>
                      SignUp
                    </span>
                  </button>
                </div>)}
              </form>
            </div>
            
            
          </div>
          <div className="je2-sign-up-dialog__footer">
            <p>Already a member?<a onClick={onClick} className="js-sign-in je2-link">Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp