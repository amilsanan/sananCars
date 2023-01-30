import React,{useState,useEfffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



function LandingPageComponent() {

  const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate('/login')
        console.log('hi');
        axios.get('http://localhost:5000/api').then((res)=>console.log(res.data))
    }
    React.useEffect(()=>{
        console.log('hello');
    },[])


  return (
    <div> <div>
    <div className="je3-header js-header _transparent _without-space _with-search">
      <header>
        <button className="je2-button js-hamburger-menu _noborder" aria-label="Menu">
          <svg width={20} height={14} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 13.0444H20" strokeWidth="1.6" />
            <path d="M0 7.04443H20" strokeWidth="1.6" />
            <path d="M0 1.04443H20" strokeWidth="1.6" />
          </svg>
        </button>
        <a href="/" className="je2-button _noborder" aria-label="JamesEdition">
          
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.36932 0 2 0.737706 2 0.737706C2 0.737706 2 9.66955 2 16.1362C2 21.6573 4.07286 24.8065 8.19987 27.022L16 31L23.8001 27.022C27.9295 24.8065 30 21.6573 30 16.1362C30 9.66955 30 0.737706 30 0.737706C30 0.737706 24.633 0 16 0ZM14.7015 6.01604C14.2243 6.20747 14.0652 6.46193 14.0652 7.06424V16.0778C14.0652 18.5407 13.0896 19.3018 11.2717 19.7126C9.9756 20.0068 8.05481 19.5539 8.05481 19.5539L7.84191 17.8497L8.16009 17.7423C8.71223 18.7975 9.38135 19.6403 10.4248 19.4068C11.5478 19.1523 11.4542 16.0801 11.4542 16.0801C11.4542 16.0801 11.4542 7.56382 11.4542 7.06657C11.4542 6.46193 11.3115 6.20747 10.8342 6.01838V5.78025H10.8506H14.6898H14.7062V6.01604H14.7015ZM23.5872 19.2387H15.6093V19.0169C16.0866 18.8115 16.2457 18.557 16.2457 17.9687V7.06657C16.2457 6.46193 16.0866 6.20747 15.6093 6.01838V5.78025H23.4141L23.5896 7.81362H23.2246C22.7473 6.6697 22.0127 6.17712 20.7704 6.17712H19.8954C19.1467 6.17712 18.8449 6.43158 18.8449 7.06657V11.8336H20.2931C21.3272 11.8336 21.8372 11.4998 21.9495 10.7364H22.2841V13.4538H21.9495C21.9027 12.6437 21.4231 12.2935 20.2931 12.2935H18.8449V17.824C18.8449 18.1112 18.8777 18.3166 18.9408 18.445C19.0836 18.7158 19.4977 18.8419 20.1995 18.8419H20.995C21.9495 18.8419 22.6046 18.6037 23.1614 18.0481C23.4632 17.747 23.6083 17.5089 23.8305 16.9206L24.1651 17.063L23.5872 19.2387Z" fill="#151515" />
          </svg>
        </a>
        <div className="je3-search-field js-search-field ">
          <div className="je3-search-field__input">
            <div className="je3-search-field__placeholder js-placeholder">
              
              <p>Search Cars</p>
            </div>
            <label>
              <button className="je2-button _noborder js-back" aria-label="Back">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.1666 10L1.66663 10" stroke="#151515" strokeWidth="1.6" />
                  <path d="M10 18.3332L1.66667 9.99984L10 1.6665" stroke="#151515" strokeWidth="1.6" />
                </svg>
                
              </button>
              <input type="text" autoComplete="off" className="js-search-text" name="search" placeholder="Search Cars" enterkeyhint="search" data-url data-hj-allow defaultValue aria-label="Search Cars" />
            </label>
            <button className="je2-button _noborder js-clear" aria-label="Clear">
              <svg viewBox="0 0 32 32">
                <path d="M26.6 6.80002L25.2 5.40002L16 14.6L6.80002 5.40002L5.40002 6.80002L14.6 16L5.40002 25.2L6.80002 26.6L16 17.4L25.2 26.6L26.6 25.2L17.4 16L26.6 6.80002Z" />
              </svg>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99998 19.1668C15.0626 19.1668 19.1666 15.0628 19.1666 10.0002C19.1666 4.93755 15.0626 0.833496 9.99998 0.833496C4.93737 0.833496 0.833313 4.93755 0.833313 10.0002C0.833313 15.0628 4.93737 19.1668 9.99998 19.1668Z" fill="#ADADAD" stroke="#ADADAD" strokeWidth="1.6" />
                <path d="M14.1666 5.8335L5.83331 14.1668" stroke="white" strokeWidth="1.6" />
                <path d="M5.83331 5.8335L14.1666 14.1668" stroke="white" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
          <div className="je3-search-field__suggestions js-search-suggestions" />
        </div>
        <ul>
          <li>
            <a href="/buyer/feed" className="je2-button js-menu-link _noborder" data-click-area="Just for You">
              <span>Just for You</span>
            </a>
          </li>
        </ul>
        <ul className="je2-user-controls js-user-controls">
          <li>
            <a className="je2-user-controls__saved" href="/buyer/saved-listings">
              Saved cars
              
            </a>
          </li>
          <li>
            <button type="button" onClick={handleLogin} className="je2-user-controls__account js-account" aria-haspopup="true" aria-expanded="false">
              <span className="je2-notification-circle js-notification-circle "/>
              <p>Sign up</p>
            </button>
          </li>
          <nav className="je2-account-dropdown js-account-dropdown _v2 _hidden _empty" style={{height: '216px'}}>
            <div className="je3-spinner">
              <div />
              <div />
              <div />
            </div>
          </nav>
        </ul>
      </header>
      <div className="je2-secondary-menu js-secondary-menu">
        <nav>
          <ul>
            <li>
              <a href="/cars/bugatti" className="je2-button js-menu-button _noborder" data-name="Bugatti">
                <span>Bugatti</span>
              </a>
            </li>
            <li>
              <a href="/cars/pagani" className="je2-button js-menu-button _noborder" data-name="Pagani">
                <span>Pagani</span>
              </a>
            </li>
            <li>
              <a href="/cars/koenigsegg" className="je2-button js-menu-button _noborder" data-name="Koenigsegg">
                <span>Koenigsegg</span>
              </a>
            </li>
            <li>
              <a href="/cars/ferrari" className="je2-button js-menu-button _noborder" data-name="Ferrari">
                <span>Ferrari</span>
              </a>
            </li>
            <li>
              <a href="/cars/lamborghini" className="je2-button js-menu-button _noborder" data-name="Lamborghini">
                <span>Lamborghini</span>
              </a>
            </li>
            <li>
              <a href="/cars/mercedes" className="je2-button js-menu-button _noborder" data-name="Mercedes">
                <span>Mercedes</span>
              </a>
            </li>
            <li>
              <a href="/cars/rolls_royce" className="je2-button js-menu-button _noborder" data-name="Rolls-Royce">
                <span>Rolls-Royce</span>
              </a>
            </li>
            <li>
              <a href="/cars/mcLaren" className="je2-button js-menu-button _noborder" data-name="McLaren">
                <span>McLaren</span>
              </a>
            </li>
            <li>
              <a href="/cars/brabus" className="je2-button js-menu-button _noborder" data-name="Brabus">
                <span>Brabus</span>
              </a>
            </li>
            <li>
              <a href="/cars/porsche" className="je2-button js-menu-button _noborder" data-name="Porsche">
                <span>Porsche</span>
              </a>
            </li>
            <li>
              <a href="/cars/aston_martin" className="je2-button js-menu-button _noborder" data-name="Aston+Martin">
                <span>Aston Martin</span>
              </a>
            </li>
            <li>
              <a href="/cars/bentley" className="je2-button js-menu-button _noborder" data-name="Bentley">
                <span>Bentley</span>
              </a>
            </li>
            <li>
              <a href="/cars/maybach" className="je2-button js-menu-button _noborder" data-name="Maybach">
                <span>Maybach</span>
              </a>
            </li>
            <li>
              <a href="/cars/bmw" className="je2-button js-menu-button _noborder" data-name="BMW">
                <span>BMW</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <aside className="je3-hamburger js-hamburger _loading _mobile-right" aria-hidden="true">
        <nav>
          <div className="je3-spinner">
            <div />
            <div />
            <div />
          </div>
        </nav>
      </aside>
    </div>
    <div id="page_content" className>
      <div className="je2-top-banner-new ">
        <div className="je2-top-banner-new__content">
          <div className="je2-top-banner-new__content-wrapper">
            <div className="je2-top-banner-new__content-left">
              <div className="je2-top-banner-new__title">
                Luxury Cars
              </div>
              <h1 className="je2-top-banner-new__subtitle">
                Explore 7,000+ luxury cars, supercars and exotic cars for sale worldwide in one simple
                search
              </h1>
            </div>
          </div>
        </div>
        <div className="je2-top-banner-new__slider _loading js-banner-slides">
          <div className="je2-top-banner-new__slider-slide js-banner-slide _active" style={{backgroundImage: 'url("data:image/jpeg'}}>
            <img src="https://static-x.jamesedition.com/assets/category_banner/cars_desktop-af2ea25aa8e069da3d3411834fa7b06a679a566f81461a9baf7a6e2b40739024.jpg" alt="" importance="high" />
          </div>
        </div>
      </div>
    </div></div></div>
  )
}

export default LandingPageComponent