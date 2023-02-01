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

 
  const [inputOtp, setInputOtp] = useState("");

  const handleChange = (event) => {
    setInputOtp(event.target.value);
  }
  const otp = (number)=>{
    let num={number:inputOtp}   
    setIsVisible(true)
    setIsVisibleotp(false)
    axios.post('http://localhost:5000/otp',num).then((res)=>console.log(res))
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
              {/* <a href="/auth/google?modal=true&listing_id=&location=&perform_url=&return_url=https%3A%2F%2Fwww.jamesedition.com%2F" className="je2-button ">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_201_8131)">
                    <path d="M19.9997 10.2297C19.9997 9.54995 19.9434 8.8665 19.8235 8.19775H10.2002V12.0486H15.711C15.4823 13.2905 14.7475 14.3892 13.6716 15.0873V17.586H16.9593C18.89 15.8443 19.9997 13.2722 19.9997 10.2297Z" fill="#4285F4" />
                    <path d="M10.2002 20C12.9518 20 15.2723 19.1145 16.963 17.5859L13.6753 15.0873C12.7606 15.6973 11.5797 16.0427 10.2039 16.0427C7.54224 16.0427 5.28545 14.2826 4.4757 11.9163H1.08301V14.492C2.81497 17.8689 6.34262 20 10.2002 20Z" fill="#34A853" />
                    <path d="M4.47227 11.9163C4.04491 10.6743 4.04491 9.32947 4.47227 8.0875V5.51172H1.08333C-0.363715 8.33737 -0.363715 11.6664 1.08333 14.4921L4.47227 11.9163Z" fill="#FBBC04" />
                    <path d="M10.2002 3.95732C11.6547 3.93527 13.0605 4.47174 14.1139 5.45649L17.0268 2.60145C15.1824 0.903855 12.7344 -0.0294541 10.2002 -5.85336e-05C6.34261 -5.85336e-05 2.81497 2.13112 1.08301 5.51161L4.47195 8.08739C5.27795 5.71738 7.53849 3.95732 10.2002 3.95732Z" fill="#EA4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_8131">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Continue with Google</span>
              </a> */}
            
              {/* <div className="je2-sign-up-dialog__content__separator">
                <span>or</span>
              </div> */}
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
                  <input {...register("phone")} value={inputOtp} onChange={handleChange} className="je2-input" type="number" placeholder="Phone" name="phone" required />
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
                      Continue
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