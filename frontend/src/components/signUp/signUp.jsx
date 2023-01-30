import React from 'react'

function signUp() {
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
              <a href="/auth/google?modal=true&listing_id=&location=&perform_url=&return_url=https%3A%2F%2Fwww.jamesedition.com%2F" className="je2-button ">
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
              </a>
              <a href="/auth/facebook?modal=true&listing_id=&location=&perform_url=&return_url=https%3A%2F%2Fwww.jamesedition.com%2F" className="je2-button ">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_201_8138)">
                    <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#3D5AA5" />
                    <path d="M13.8926 12.8906L14.3359 10H11.5625V8.125C11.5625 7.33418 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C9.47287 20.0405 10.5271 20.0405 11.5625 19.8785V12.8906H13.8926Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_8138">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Continue with Facebook</span>
              </a>
              <div className="je2-sign-up-dialog__content__separator">
                <span>or</span>
              </div>
              <form id="registration-form-first-step" className="simple_form je2-sign-up-dialog__content-form je2-form" noValidate="novalidate" action acceptCharset="UTF-8" method="post"><input type="hidden" name="authenticity_token" defaultValue="RhebVAV7Q1zW2zXx-8lmgA9bWOx6DHbdA_AC2R-dV72SULOZy49NS7CBjtDRfg5Jg-v9F8hLP2R4Ntwf66fIcQ" autoComplete="off" />
                <div className="je2-sign-up-dialog__content-form__field">
                  <input id="first_name" className="je2-input" type="text" placeholder="First name" data-required-error="Enter your first name" data-invalid-error="Invalid characters used. Check your name" name="first_name" autoComplete="first_name" required />
                </div>
                <div className="je2-sign-up-dialog__content-form__field">
                  <input id="last_name" className="je2-input" type="text" placeholder="Last name" data-required-error="Enter your last name" data-invalid-error="Invalid characters used. Check your name" name="last_name" autoComplete="last_name" required />
                </div>
                <div className="je2-sign-up-dialog__content-form__field">
                  <input id="email" className="je2-input" type="email" placeholder="Email" name="email" data-invalid-error="Check your email address" data-required-error="Enter your email address" autoComplete="email" required />
                  <div className="js-error-message _hidden">
                  </div>
                </div>
                <div className="je2-sign-up-dialog__content-form__continue">
                  <div className="je3-spinner">
                    <div />
                    <div />
                    <div />
                  </div>
                  <button className="je2-button _black js-save">
                    <span>
                      Continue
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="je2-sign-up-dialog__content__second-step js-second-step">
              <form id="registration-form-second-step" className="simple_form je2-sign-up-dialog__content-form je2-form" noValidate="novalidate" action="/auth-modals/register-with-email-and-password" acceptCharset="UTF-8" method="post"><input type="hidden" name="authenticity_token" defaultValue="XXt2LBfzS3-fQkfIqVfSID6xxh1zsaWmtKzaBSfdCIX1EI2X8w-3OhiM_jwOLPITI9T09yjCQ1X2al4yREWFoQ" autoComplete="off" />
                <div data-sitekey="6LeNK2caAAAAABqNVS2GtBowWgxSInPKc9XdX4PE" data-size="invisible" />
                <input defaultValue autoComplete="off" type="hidden" name="perform_url" id="perform_url" /><input defaultValue autoComplete="off" type="hidden" name="listing_id" id="listing_id" /><input defaultValue="https://www.jamesedition.com/" autoComplete="off" type="hidden" name="return_url" id="return_url" /><input defaultValue autoComplete="off" type="hidden" name="location" id="location" />
                <div className="je2-sign-up-dialog__content-form__field">
                  <input id="password" className="je2-input" type="password" placeholder="Enter password" data-required-error="Enter your password" name="password" autoComplete="new-password" maxLength={128} required />
                </div>
                <div className="je2-sign-up-dialog__content-form__field">
                  <input id="password_confirmation" className="je2-input" type="password" placeholder="Confirm password" data-required-error="Enter your confirmation password" name="password_confirmation" autoComplete="new-password" maxLength={128} required />
                  <div className="je2-sign-up-dialog__content-form__field__label">
                    <div className="js-error-message _hidden">
                    </div>
                    8 characters or longer. Combine uppercase and lowercase letters.
                  </div>
                </div>
                <div className="je2-sign-up-dialog__content-form__continue">
                  <div className="je3-spinner">
                    <div />
                    <div />
                    <div />
                  </div>
                  <button className="je2-button _black js-save">
                    <span>
                      Continue
                    </span>
                  </button>
                </div>
                <div className="je2-sign-up-dialog__content__terms">
                  By joining, you agree to JamesEdition's
                  <a href="/about/terms-of-use">Terms of Service</a>
                  and
                  <a href="/about/privacy-policy">Privacy Policy</a>,
                  as well as to receive occasional emails from us.
                </div>
              </form> <div className="je2-sign-up-dialog__footer__separator" />
            </div>
            <div className="je2-sign-up-dialog__content__last-step js-last-step">
              <svg width={64} height={64} viewBox="0 0 64 64">
                <circle cx={32} cy={32} r="31.1" stroke="#006C75" strokeWidth="1.8" />
                <path d="M19 24V42H45V24H19ZM23.3125 26H40.6875L32 31.7812L23.3125 26ZM21 26.875L31.4375 33.8438L32 34.1875L32.5625 33.8438L43 26.875V40H21V26.875Z" fill="#006C75" />
              </svg>
              <div className="je2-sign-up-dialog__content__last-step__title">
                Activate your account
              </div>
              <div className="je2-sign-up-dialog__content__last-step__text js-last-step-label">
                A link to confirm your email has been sent to
              </div>
              <div>
                <button className="je2-button _black js-done">
                  <span>
                    Okay
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="je2-sign-up-dialog__footer">
            <p>Already a member?<a className="js-sign-in je2-link">Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signUp