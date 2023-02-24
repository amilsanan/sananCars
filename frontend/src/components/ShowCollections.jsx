import React from "react";

function ShowCollections() {
  return <div className="cars index" id="view">
  <div className="je3-header js-header _no-max-width _with-search">
    <header>
      <button className="je2-button js-hamburger-menu _noborder" aria-label="Menu">
        <svg width={20} height={14} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 13.0444H20" strokeWidth="1.6" />
          <path d="M0 7.04443H20" strokeWidth="1.6" />
          <path d="M0 1.04443H20" strokeWidth="1.6" />
        </svg>
      </button>
      <a href="/" className="je2-button _noborder" aria-label="JamesEdition">
        <svg className="je2-icon"><use xlinkHref="#logo-new" /></svg>
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.36932 0 2 0.737706 2 0.737706C2 0.737706 2 9.66955 2 16.1362C2 21.6573 4.07286 24.8065 8.19987 27.022L16 31L23.8001 27.022C27.9295 24.8065 30 21.6573 30 16.1362C30 9.66955 30 0.737706 30 0.737706C30 0.737706 24.633 0 16 0ZM14.7015 6.01604C14.2243 6.20747 14.0652 6.46193 14.0652 7.06424V16.0778C14.0652 18.5407 13.0896 19.3018 11.2717 19.7126C9.9756 20.0068 8.05481 19.5539 8.05481 19.5539L7.84191 17.8497L8.16009 17.7423C8.71223 18.7975 9.38135 19.6403 10.4248 19.4068C11.5478 19.1523 11.4542 16.0801 11.4542 16.0801C11.4542 16.0801 11.4542 7.56382 11.4542 7.06657C11.4542 6.46193 11.3115 6.20747 10.8342 6.01838V5.78025H10.8506H14.6898H14.7062V6.01604H14.7015ZM23.5872 19.2387H15.6093V19.0169C16.0866 18.8115 16.2457 18.557 16.2457 17.9687V7.06657C16.2457 6.46193 16.0866 6.20747 15.6093 6.01838V5.78025H23.4141L23.5896 7.81362H23.2246C22.7473 6.6697 22.0127 6.17712 20.7704 6.17712H19.8954C19.1467 6.17712 18.8449 6.43158 18.8449 7.06657V11.8336H20.2931C21.3272 11.8336 21.8372 11.4998 21.9495 10.7364H22.2841V13.4538H21.9495C21.9027 12.6437 21.4231 12.2935 20.2931 12.2935H18.8449V17.824C18.8449 18.1112 18.8777 18.3166 18.9408 18.445C19.0836 18.7158 19.4977 18.8419 20.1995 18.8419H20.995C21.9495 18.8419 22.6046 18.6037 23.1614 18.0481C23.4632 17.747 23.6083 17.5089 23.8305 16.9206L24.1651 17.063L23.5872 19.2387Z" fill="#151515" />
        </svg>
      </a>
      <div className="je3-search-field js-search-field ">
        <div className="je3-search-field__input">
          <div className="je3-search-field__placeholder js-placeholder">
            <svg><use xlinkHref="#search-icon" /></svg>
            <p>Search Cars</p>
          </div>
          <label>
            <button className="je2-button _noborder js-back" aria-label="Back">
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1666 10L1.66663 10" stroke="#151515" strokeWidth="1.6" />
                <path d="M10 18.3332L1.66667 9.99984L10 1.6665" stroke="#151515" strokeWidth="1.6" />
              </svg>
              <svg><use xlinkHref="#search-icon" /></svg>
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
            Saved
            <div>1</div>
          </a>
        </li>
        <li>
          <button type="button" className="je2-user-controls__account js-account" aria-haspopup="true" aria-expanded="false">
            <span className="je2-notification-circle js-notification-circle " />
            <p>Amil</p>
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
    <div className="je3-filter-bar js-je3-filterbar">
      <button className="je2-button js-filter-button" aria-label="Filters">
        <span>
          Filters
        </span>
        <div className="je2-button__badge" />
        <svg viewBox="0 0 14 14">
          <ellipse cx="10.15" cy="4.2001" rx="2.1" ry="2.1" strokeWidth="1.6" fill="none" />
          <path d="M1.40002 4.19995L8.40002 4.19995" strokeWidth="1.6" />
          <ellipse cx="3.85" cy="9.79995" rx="2.1" ry="2.1" strokeWidth="1.6" fill="none" />
          <path d="M5.59998 9.80005L12.6 9.80005" strokeWidth="1.6" />
        </svg>
      </button>
      <div className="je2-select _with-placeholder" data-name="brand_id">
        <svg className="je2-select__right-icon"><use xlinkHref="#arrow-down" /></svg>
        <select name id aria-label><option value>All Makes</option><optgroup label="Popular"><option value="ferrari">Ferrari</option>
            <option value="bugatti">Bugatti</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="porsche">Porsche</option>
            <option value="koenigsegg">Koenigsegg</option>
            <option value="pagani">Pagani</option>
            <option value="mercedes">Mercedes</option>
            <option value="rolls_royce">Rolls-Royce</option>
            <option value="aston_martin">Aston Martin</option>
            <option value="bentley">Bentley</option></optgroup><optgroup label="All"><option value="ac">AC</option>
            <option value="am-general">AM General</option>
            <option value="amc">AMC</option>
            <option value="abarth">Abarth</option>
            <option value="acura">Acura</option>
            <option value="ada">Ada</option>
            <option value="alfa_romeo">Alfa Romeo</option>
            <option value="alpina">Alpina</option>
            <option value="alvis">Alvis</option>
            <option value="amen">Amen</option>
            <option value="amer">Amer</option>
            <option value="amphicar">Amphicar</option>
            <option value="apocalypse-hellfire">Apocalypse </option>
            <option value="argosy">Argosy</option>
            <option value="ariel">Ariel</option>
            <option value="aspark">Aspark</option>
            <option value="aston_martin">Aston Martin</option>
            <option value="auburn">Auburn</option>
            <option value="audi">Audi</option>
            <option value="austin">Austin</option>
            <option value="austin_healey">Austin-Healey</option>
            <option value="bac">BAC</option>
            <option value="bmw">BMW</option>
            <option value="bsa">BSA</option>
            <option value="backdraft">Backdraft</option>
            <option value="Backdraft Racing">Backdraft Racing</option>
            <option value="bentley">Bentley</option>
            <option value="big_dog">Big Dog</option>
            <option value="boat">Boat</option>
            <option value="brabus">Brabus</option>
            <option value="bricklin">Bricklin</option>
            <option value="bugatti">Bugatti</option>
            <option value="buick">Buick</option>
            <option value="cadillac">Cadillac</option>
            <option value="can-am">Can-Am</option>
            <option value="challenger">Challenger</option>
            <option value="cheetah">Cheetah</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="chris_craft">Chris Craft</option>
            <option value="chrysler">Chrysler</option>
            <option value="cisitalia">Cisitalia</option>
            <option value="citroen">Citroën</option>
            <option value="classic">Classic</option>
            <option value="cleveland">Cleveland</option>
            <option value="cobra">Cobra</option>
            <option value="cord">Cord</option>
            <option value="corvette">Corvette</option>
            <option value="crosley">Crosley</option>
            <option value="custom">Custom</option>
            <option value="dkw">DKW</option>
            <option value="daimler">Daimler</option>
            <option value="datsun">Datsun</option>
            <option value="davidson">Davidson</option>
            <option value="de-tomaso">De Tomaso</option>
            <option value="delorean">DeLorean</option>
            <option value="desoto">DeSoto</option>
            <option value="detomaso">DeTomaso</option>
            <option value="delage">Delage</option>
            <option value="diamond">Diamond</option>
            <option value="dodge">Dodge</option>
            <option value="donkervoort">Donkervoort</option>
            <option value="ducati">Ducati</option>
            <option value="e-c-onlyone">E.C. OnlyOne</option>
            <option value="edsel">Edsel</option>
            <option value="excalibur">Excalibur</option>
            <option value="facel">Facel</option>
            <option value="factory-five">Factory Five</option>
            <option value="ferrari">Ferrari</option>
            <option value="fiat">Fiat</option>
            <option value="fisker">Fisker</option>
            <option value="ford">Ford</option>
            <option value="gmc">GMC</option>
            <option value="genesis">Genesis</option>
            <option value="gumpert">Gumpert</option>
            <option value="harley_davidson">Harley-Davidson</option>
            <option value="hispano_suiza">Hispano-Suiza</option>
            <option value="honda">Honda</option>
            <option value="horch">Horch</option>
            <option value="hudson">Hudson</option>
            <option value="hummer">Hummer</option>
            <option value="hyundai">Hyundai</option>
            <option value="infiniti">Infiniti</option>
            <option value="inkas">Inkas</option>
            <option value="innocenti">Innocenti</option>
            <option value="international">International</option>
            <option value="iso">Iso</option>
            <option value="italdesign ">Italdesign </option>
            <option value="jaguar">Jaguar</option>
            <option value="jeep">Jeep</option>
            <option value="jensen">Jensen</option>
            <option value="kandi">Kandi</option>
            <option value="karma">Karma</option>
            <option value="kia">Kia</option>
            <option value="koenigsegg">Koenigsegg</option>
            <option value="kompact-kamp">Kompact Kamp</option>
            <option value="lagonda">Lagonda</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="lancia">Lancia</option>
            <option value="land_rover">Land Rover</option>
            <option value="lear">Lear</option>
            <option value="lexus">Lexus</option>
            <option value="lincoln">Lincoln</option>
            <option value="lohr">Lohr</option>
            <option value="lola">Lola</option>
            <option value="lotus">Lotus</option>
            <option value="lucid">Lucid</option>
            <option value="mci">MCI</option>
            <option value="mg">MG</option>
            <option value="mv_agusta">MV Agusta</option>
            <option value="marchi-mobile">Marchi Mobile</option>
            <option value="maserati">Maserati</option>
            <option value="maybach">Maybach</option>
            <option value="mazda">Mazda</option>
            <option value="mclaren">McLaren</option>
            <option value="mehari-loisirs-technologie">Mehari Loisirs Technologie</option>
            <option value="meng">Meng</option>
            <option value="mercedes">Mercedes-Benz</option>
            <option value="mercury">Mercury</option>
            <option value="metz">Metz</option>
            <option value="midwest-automotive-designs">Midwest Automotive Designs</option>
            <option value="mini">Mini</option>
            <option value="mitsubishi">Mitsubishi</option>
            <option value="morgan">Morgan</option>
            <option value="morris">Morris</option>
            <option value="nsu">NSU</option>
            <option value="nascar">Nascar</option>
            <option value="nash">Nash</option>
            <option value="nissan">Nissan</option>
            <option value="oreion">OREION</option>
            <option value="oldsmobile">Oldsmobile</option>
            <option value="opel">Opel</option>
            <option value="other">Other</option>
            <option value="packard">Packard</option>
            <option value="pagani">Pagani</option>
            <option value="peugeot">Peugeot</option>
            <option value="plymouth">Plymouth</option>
            <option value="pontiac">Pontiac</option>
            <option value="porsche">Porsche</option>
            <option value="prodrive">Prodrive</option>
            <option value="ruf">RUF</option>
            <option value="rambler">Rambler</option>
            <option value="renault">Renault</option>
            <option value="reo">Reo</option>
            <option value="riley">Riley</option>
            <option value="rimac">Rimac</option>
            <option value="rivian">Rivian</option>
            <option value="rolls_royce">Rolls-Royce</option>
            <option value="rossion">Rossion</option>
            <option value="roush">Roush</option>
            <option value="rupp">Rupp</option>
            <option value="saab">Saab</option>
            <option value="saturn">Saturn</option>
            <option value="seagrave">Seagrave</option>
            <option value="shelby">Shelby</option>
            <option value="siata">Siata</option>
            <option value="spyker">Spyker</option>
            <option value="studebaker">Studebaker</option>
            <option value="stutz">Stutz</option>
            <option value="su">Su</option>
            <option value="subaru">Subaru</option>
            <option value="sunbeam">Sunbeam</option>
            <option value="superformance">Superformance</option>
            <option value="temsa">TEMSA</option>
            <option value="tnt">TNT</option>
            <option value="tvr">TVR</option>
            <option value="techart">Techart</option>
            <option value="tesla">Tesla</option>
            <option value="toyota">Toyota</option>
            <option value="triumph">Triumph</option>
            <option value="trojan">Trojan</option>
            <option value="ussv">USSV</option>
            <option value="urban">Urban</option>
            <option value="vw">VW</option>
            <option value="vanderhall">Vanderhall</option>
            <option value="vespa">Vespa</option>
            <option value="vintage">Vintage</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="volvo">Volvo</option>
            <option value="wiesmann">Wiesmann</option>
            <option value="willys">Willys</option>
            <option value="yamaha">Yamaha</option></optgroup></select>
        <span>All Makes</span>
      </div>
      <div className="je2-select _with-placeholder _hidden" data-name="model_id">
        <svg className="je2-select__right-icon"><use xlinkHref="#arrow-down" /></svg>
        <select name id aria-label><option value>Model</option></select>
        <span>Model</span>
      </div>
      <button className="je2-button js-filter-button" data-type="year">
        <div className="je2-button__temporary" />
        <span>Year</span>
        <svg><use xlinkHref="#arrow-down" /></svg>
      </button>
      <button className="je2-button js-filter-button" data-type="car-price">
        <div className="je2-button__temporary" />
        <span>Price</span>
        <svg><use xlinkHref="#arrow-down" /></svg>
      </button>
      <button className="je2-button js-filter-button" data-type="car-type">
        <span>Body Style</span>
        <div className="je2-button__badge" />
        <svg><use xlinkHref="#arrow-down" /></svg>
      </button>     
    </div>    
  </div>
  <div id="page_content" className>
    <section className="je2-search-page _v2 _without-map">
      <div className="je2-search-page__left-side">
        <nav className="je3-breadcrumbs " aria-label="Breadcrumb">
          <ol>
            <li>
              <a href="/cars">Cars</a>
            </li>
          </ol>
        </nav>
        <div className="je2-search-page__header">
          <div className="je2-search-page__header__left">
            <h1>Luxury Cars for Sale</h1>
          </div>
          <div className="je2-search-page__header__right ">
            <span>
              500+ listings
            </span>
            <div>
              <span>Sort:</span>
              <div className="je2-select  _with-placeholder">
                <svg className="je2-select__right-icon"><use xlinkHref="#arrow-down" /></svg>
                <select name="order" id="order" aria-label="order"><option value="premium">Premium</option>
                  <option value="popular">Popular</option>
                  <option value="recent">Recent</option>
                  <option value="price_asc">Price lowest first</option>
                  <option value="price_desc">Price highest first</option>
                  <option value="mileage_asc">Mileage Low to High</option>
                  <option value="mileage_desc">Mileage High to Low</option>
                  <option value="year_asc">Year Low to High</option>
                  <option value="year_desc">Year High to Low</option></select>
                <span>Premium</span>
              </div>
            </div>
          </div>
        </div>
        <div className="je2-grid _serp_results">
          <div className="je2-grid__content">


            <div className="ListingCard _with-cars-logo _initialized" data-id={12491845} data-price-usd={1200000} data-country-code="US" data-country="United States" data-country-subdivision="TX" data-city="Flower Mound" data-office-id={148546} data-agent-id={-1} data-category="Car" data-brand="Shelby" data-model="Cobra" data-position="Search" data-serp-position={1} data-type="Listing card">
              <a href="/cars/shelby/cobra/2023-shelby-cobra-rwd-for-sale-12491845" title="2023 Shelby Cobra rwd" target="_blank" className="js-link">
                <div className="ListingCard__badges">
                  <div className="ListingCard__badges__text"> video </div>
                </div>
                <div className="ListingCard__save js-heart " data-listing-id={12491845}>
                  <svg><use xlinkHref="#white-heart" /></svg>
                </div>
                <div className="ListingCard__picture">
                  <div className="slider">
                    <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="swiper-container" style={{overflow: 'hidden'}}>
                      <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
                        <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
                          <img importance="high" alt="2023 Shelby Cobra rwd in Flower mound, TX, United States 1" src="https://img.jamesedition.com/listing_images/2022/12/02/15/04/03/24685169-0802-42cd-aadd-1955db1187a9/je/620x465xc.jpg" />
                        </div>
                        <div className="swiper-slide-next swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="2023 Shelby Cobra rwd in Flower mound, TX, United States 2" data-src="https://img.jamesedition.com/listing_images/2022/12/02/15/04/01/bd10214e-24f7-4eea-821f-52167a233032/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="2023 Shelby Cobra rwd in Flower mound, TX, United States 3" data-src="https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/3dd4984d-fc5a-4491-bca7-7d7b00ff9c2e/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="2023 Shelby Cobra rwd in Flower mound, TX, United States 4" data-src="https://img.jamesedition.com/listing_images/2022/12/02/15/04/01/71a07481-99a6-4d76-ae7f-a3d59eaf58f2/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="2023 Shelby Cobra rwd in Flower mound, TX, United States 5" data-src="https://img.jamesedition.com/listing_images/2022/12/02/15/04/02/6a749c3c-e436-48bf-8521-bd10f4c6c927/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                          <div className="slider__show-more">
                            <div className="slider__show-more-button">
                              View 6 photos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider__pagination ">
                        <div className="slider__pagination__position _1" />
                        <div className="_0 slider__pagination__bullet" />
                        <div className="_1 slider__pagination__bullet" />
                        <div className="_2 slider__pagination__bullet" />
                        <div className="_3 slider__pagination__bullet" />
                        <div className="_4 slider__pagination__bullet" />
                        <div className="_5 slider__pagination__bullet" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ListingCard__description">
                  <div className="ListingCard__price">
                    $1,200,000
                  </div>
                  <div className="ListingCard__tags">
                    <span className="ListingCard__tag">2023 Shelby Cobra rwd</span>
                  </div>
                  <div className="ListingCard__title">
                    Flower mound, TX, United States
                  </div>
                  <div className="ListingCard__actions">
                    <div className="js-contact-button">Contact<svg><use xlinkHref="#contact" /></svg></div>
                  </div>

                  
                  <img className="ListingCard__office-logo je2-lazy-load _loaded" width={97} height={40} data-src="https://img.jamesedition.com/dealer_listings_logos/2023/01/12/15/48/30/aa74c304-237a-44b6-b31d-ef063d39d880/je/120x50xs.jpg" data-type="office_logo_serp" data-watermark="true" src="https://img.jamesedition.com/dealer_listings_logos/2023/01/12/15/48/30/aa74c304-237a-44b6-b31d-ef063d39d880/je/97x40xs.jpg" />
                </div>
              </a>
            </div>

            <div className="ListingCard _initialized" data-id={12248186} data-price-usd={64000} data-country-code="KW" data-country="Kuwait" data-country-subdivision="Al Asimah Governate" data-city="Kuwait City" data-office-id={141705} data-category="Car" data-brand="Mini" data-model="John Cooper Works GP3" data-position="Search" data-serp-position={2} data-type="Listing card">
              <a href="/cars/mini/john-cooper-works-gp3/2021-mini-john-cooper-works-gp3-for-sale-12248186" title="2021 Mini John Cooper Works GP3 " target="_blank" className="js-link">
                <div className="ListingCard__save js-heart " data-listing-id={12248186}>
                  <svg><use xlinkHref="#white-heart" /></svg>
                </div>
                <div className="ListingCard__picture">
                  <div className="slider">
                    <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="swiper-container" style={{overflow: 'hidden'}}>
                      <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
                        <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
                          <img decoding="sync" className="je2-lazy-load _loaded" src="https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/d55b7637-2131-45e6-a8a8-ea4f4ea0b5a0/je/556x342xcxm.jpg" alt="2021 Mini John Cooper Works GP3  in Kuwait city, Kuwait 1" />
                        </div>
                        <div className="swiper-slide-next swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="2021 Mini John Cooper Works GP3  in Kuwait city, Kuwait 2" data-src="https://img.jamesedition.com/listing_images/2022/09/23/14/26/25/58fc4e06-9999-4267-9789-13a32c337cc5/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="2021 Mini John Cooper Works GP3  in Kuwait city, Kuwait 3" data-src="https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/930236de-a8c7-4300-ac17-2cb7e937717b/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="2021 Mini John Cooper Works GP3  in Kuwait city, Kuwait 4" data-src="https://img.jamesedition.com/listing_images/2022/09/23/14/26/25/709b6f4e-9613-465f-ac6a-0725c451aed4/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="2021 Mini John Cooper Works GP3  in Kuwait city, Kuwait 5" data-src="https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/24b2e848-89b3-45fc-ab99-beecfabda044/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                          <div className="slider__show-more">
                            <div className="slider__show-more-button">
                              View 17 photos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider__pagination ">
                        <div className="slider__pagination__position _1" />
                        <div className="_0 slider__pagination__bullet" />
                        <div className="_1 slider__pagination__bullet" />
                        <div className="_2 slider__pagination__bullet" />
                        <div className="_3 slider__pagination__bullet" />
                        <div className="_4 slider__pagination__bullet" />
                        <div className="_5 slider__pagination__bullet" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ListingCard__description">
                  <div className="ListingCard__price">
                    $64,000
                  </div>
                  <div className="ListingCard__tags">
                    <span className="ListingCard__tag">2021 Mini John Cooper Works GP3 </span>
                  </div>
                  <div className="ListingCard__title">
                    Kuwait city, Kuwait
                  </div>
                  <div className="ListingCard__actions">
                    <div className="js-contact-button">Contact<svg><use xlinkHref="#contact" /></svg></div>
                  </div>
                </div>
              </a>
            </div>
            <div className="ListingCard _with-cars-logo _initialized" data-id={12498164} data-price-usd={108000} data-country-code="US" data-country="United States" data-country-subdivision="CT" data-city="Bridgeport" data-office-id={153106} data-agent-id={-1} data-category="Car" data-brand="Ferrari" data-model={308} data-position="Search" data-serp-position={3} data-type="Listing card">
              <a href="/cars/ferrari/308/1981-ferrari-308-rwd-for-sale-12498164" title="1981 Ferrari 308 rwd" target="_blank" className="js-link">
                <div className="ListingCard__badges">
                  <div className="ListingCard__badges__text"> video </div>
                </div>
                <div className="ListingCard__save js-heart " data-listing-id={12498164}>
                  <svg><use xlinkHref="#white-heart" /></svg>
                </div>
                <div className="ListingCard__picture">
                  <div className="slider">
                    <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="swiper-container" style={{overflow: 'hidden'}}>
                      <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
                        <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
                          <img decoding="sync" className="je2-lazy-load _loaded" src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/04/4530dfbf-5588-42ed-bafa-9ae4b576e643/je/556x342xcxm.jpg" alt="1981 Ferrari 308 rwd in Bridgeport, CT, United States 1" />
                        </div>
                        <div className="swiper-slide-next swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1981 Ferrari 308 rwd in Bridgeport, CT, United States 2" data-src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/05/3ea76194-3371-4da6-b9d0-d806fe700e2d/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1981 Ferrari 308 rwd in Bridgeport, CT, United States 3" data-src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/04/d00498ec-e2c5-4de6-8fdc-dd4c9d3b0ec2/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1981 Ferrari 308 rwd in Bridgeport, CT, United States 4" data-src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/03/22098de3-17c7-413a-9048-43e8ef9d5d63/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1981 Ferrari 308 rwd in Bridgeport, CT, United States 5" data-src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/03/4545614e-3c8a-4b74-84c3-dc4e60964fa7/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                          <div className="slider__show-more">
                            <div className="slider__show-more-button">
                              View 36 photos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider__pagination ">
                        <div className="slider__pagination__position _1" />
                        <div className="_0 slider__pagination__bullet" />
                        <div className="_1 slider__pagination__bullet" />
                        <div className="_2 slider__pagination__bullet" />
                        <div className="_3 slider__pagination__bullet" />
                        <div className="_4 slider__pagination__bullet" />
                        <div className="_5 slider__pagination__bullet" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ListingCard__description">
                  <div className="ListingCard__price">
                    $108,000
                  </div>
                  <div className="ListingCard__tags">
                    <span className="ListingCard__tag">1981 Ferrari 308 rwd</span>
                  </div>
                  <div className="ListingCard__title">
                    Bridgeport, CT, United States
                  </div>
                  <div className="ListingCard__actions">
                    <div className="js-contact-button">Contact<svg><use xlinkHref="#contact" /></svg></div>
                  </div>
                  <img className="ListingCard__office-logo je2-lazy-load _loaded" width={97} height={40} data-src="https://img.jamesedition.com/dealer_listings_logos/2023/01/23/16/39/48/e5fae32e-6f38-457c-b38c-abe90de099a5/je/120x50xs.jpg" data-type="office_logo_serp" data-watermark="true" src="https://img.jamesedition.com/dealer_listings_logos/2023/01/23/16/39/48/e5fae32e-6f38-457c-b38c-abe90de099a5/je/97x40xs.jpg" />
                </div>
              </a>
            </div>
            <div className="ListingCard _with-cars-logo _initialized" data-id={12498105} data-price-usd={23000} data-country-code="US" data-country="United States" data-country-subdivision="CT" data-city="Bridgeport" data-office-id={153106} data-agent-id={-1} data-category="Car" data-brand="Volkswagen" data-model="BEETLE" data-position="Search" data-serp-position={4} data-type="Listing card">
              <a href="/cars/volkswagen/beetle/1963-volkswagen-beetle-rwd-for-sale-12498105" title="1963 Volkswagen BEETLE rwd" target="_blank" className="js-link">
                <div className="ListingCard__badges">
                  <div className="ListingCard__badges__text"> video </div>
                </div>
                <div className="ListingCard__save js-heart " data-listing-id={12498105}>
                  <svg><use xlinkHref="#white-heart" /></svg>
                </div>
                <div className="ListingCard__picture">
                  <div className="slider">
                    <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="swiper-container" style={{overflow: 'hidden'}}>
                      <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
                        <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
                          <img decoding="sync" className="je2-lazy-load _loaded" src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/05/fe99db25-f86d-4675-9bd4-94119cb6bfbc/je/556x342xcxm.jpg" alt="1963 Volkswagen BEETLE rwd in Bridgeport, CT, United States 1" />
                        </div>
                        <div className="swiper-slide-next swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1963 Volkswagen BEETLE rwd in Bridgeport, CT, United States 2" data-src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/05/f0db974c-1de9-4d0d-98b8-ce7b230f6e38/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1963 Volkswagen BEETLE rwd in Bridgeport, CT, United States 3" data-src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/04/125a4e2a-f993-4e91-a117-f9870f31a0c1/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1963 Volkswagen BEETLE rwd in Bridgeport, CT, United States 4" data-src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/05/e5d711bd-5bcd-4f21-a8ac-4fb258b98030/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1963 Volkswagen BEETLE rwd in Bridgeport, CT, United States 5" data-src="https://img.jamesedition.com/listing_images/2023/02/03/17/49/04/dd3f214e-a3ff-4ba6-b4ae-7bada16b16d0/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                          <div className="slider__show-more">
                            <div className="slider__show-more-button">
                              View 26 photos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider__pagination ">
                        <div className="slider__pagination__position _1" />
                        <div className="_0 slider__pagination__bullet" />
                        <div className="_1 slider__pagination__bullet" />
                        <div className="_2 slider__pagination__bullet" />
                        <div className="_3 slider__pagination__bullet" />
                        <div className="_4 slider__pagination__bullet" />
                        <div className="_5 slider__pagination__bullet" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ListingCard__description">
                  <div className="ListingCard__price">
                    $23,000
                  </div>
                  <div className="ListingCard__tags">
                    <span className="ListingCard__tag">1963 Volkswagen BEETLE rwd</span>
                  </div>
                  <div className="ListingCard__title">
                    Bridgeport, CT, United States
                  </div>
                  <div className="ListingCard__actions">
                    <div className="js-contact-button">Contact<svg><use xlinkHref="#contact" /></svg></div>
                  </div>
                  <img className="ListingCard__office-logo je2-lazy-load _loaded" width={97} height={40} data-src="https://img.jamesedition.com/dealer_listings_logos/2023/01/23/16/39/48/e5fae32e-6f38-457c-b38c-abe90de099a5/je/120x50xs.jpg" data-type="office_logo_serp" data-watermark="true" src="https://img.jamesedition.com/dealer_listings_logos/2023/01/23/16/39/48/e5fae32e-6f38-457c-b38c-abe90de099a5/je/97x40xs.jpg" />
                </div>
              </a>
            </div>
            <div className="ListingCard _with-cars-logo _initialized" data-id={12495398} data-price-usd={75000} data-country-code="US" data-country="United States" data-country-subdivision="CT" data-city="Bridgeport" data-office-id={153106} data-agent-id={-1} data-category="Car" data-brand="Chevrolet" data-model="Camaro SS " data-position="Search" data-serp-position={5} data-type="Listing card">
              <a href="/cars/chevrolet/camaro-ss/1968-chevrolet-camaro-ss-rwd-for-sale-12495398" title="1968 Chevrolet Camaro SS  rwd" target="_blank" className="js-link">
                <div className="ListingCard__badges">
                  <div className="ListingCard__badges__text"> video </div>
                </div>
                <div className="ListingCard__save js-heart " data-listing-id={12495398}>
                  <svg><use xlinkHref="#white-heart" /></svg>
                </div>
                <div className="ListingCard__picture">
                  <div className="slider">
                    <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="swiper-container" style={{overflow: 'hidden'}}>
                      <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
                        <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
                          <img decoding="sync" className="je2-lazy-load _loaded" src="https://img.jamesedition.com/listing_images/2023/02/02/16/25/09/973397ac-b8f1-40e2-824a-c95960e471d7/je/556x342xcxm.jpg" alt="1968 Chevrolet Camaro SS  rwd in Bridgeport, CT, United States 1" />
                        </div>
                        <div className="swiper-slide-next swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1968 Chevrolet Camaro SS  rwd in Bridgeport, CT, United States 2" data-src="https://img.jamesedition.com/listing_images/2023/02/02/16/25/05/844cb8a4-ca05-4784-a874-d44099a122c0/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1968 Chevrolet Camaro SS  rwd in Bridgeport, CT, United States 3" data-src="https://img.jamesedition.com/listing_images/2023/02/02/16/25/08/a265438e-107b-413e-8c53-6987b915e0ac/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1968 Chevrolet Camaro SS  rwd in Bridgeport, CT, United States 4" data-src="https://img.jamesedition.com/listing_images/2023/02/02/16/25/08/93e0a1f8-ed30-4f05-a1f3-389f5657fa01/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1968 Chevrolet Camaro SS  rwd in Bridgeport, CT, United States 5" data-src="https://img.jamesedition.com/listing_images/2023/02/02/16/25/09/d504b825-7c7f-4916-8e19-9032245fffe5/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                          <div className="slider__show-more">
                            <div className="slider__show-more-button">
                              View 42 photos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider__pagination ">
                        <div className="slider__pagination__position _1" />
                        <div className="_0 slider__pagination__bullet" />
                        <div className="_1 slider__pagination__bullet" />
                        <div className="_2 slider__pagination__bullet" />
                        <div className="_3 slider__pagination__bullet" />
                        <div className="_4 slider__pagination__bullet" />
                        <div className="_5 slider__pagination__bullet" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ListingCard__description">
                  <div className="ListingCard__price">
                    $75,000
                  </div>
                  <div className="ListingCard__tags">
                    <span className="ListingCard__tag">1968 Chevrolet Camaro SS rwd</span>
                  </div>
                  <div className="ListingCard__title">
                    Bridgeport, CT, United States
                  </div>
                  <div className="ListingCard__actions">
                    <div className="js-contact-button">Contact<svg><use xlinkHref="#contact" /></svg></div>
                  </div>
                  <img className="ListingCard__office-logo je2-lazy-load _loaded" width={97} height={40} data-src="https://img.jamesedition.com/dealer_listings_logos/2023/01/23/16/39/48/e5fae32e-6f38-457c-b38c-abe90de099a5/je/120x50xs.jpg" data-type="office_logo_serp" data-watermark="true" src="https://img.jamesedition.com/dealer_listings_logos/2023/01/23/16/39/48/e5fae32e-6f38-457c-b38c-abe90de099a5/je/97x40xs.jpg" />
                </div>
              </a>
            </div>
            
            <div className="ListingCard _with-cars-logo _initialized" data-id={12378289} data-price-usd={51274} data-country-code="FR" data-country="France" data-country-subdivision="Occitanie" data-city="Gaillac" data-office-id={128935} data-agent-id={1221706} data-category="Car" data-brand="BMW" data-model="535i" data-position="Search" data-serp-position={36} data-type="Listing card">
              <a href="/cars/bmw/535i/1987-bmw-535i-rwd-for-sale-12378289" title="1987 BMW 535i rwd" target="_blank" className="js-link">
                <div className="ListingCard__save js-heart " data-listing-id={12378289}>
                  <svg><use xlinkHref="#white-heart" /></svg>
                </div>
                <div className="ListingCard__picture">
                  <div className="slider">
                    <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="swiper-container" style={{overflow: 'hidden'}}>
                      <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
                        <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
                          <img decoding="sync" className="je2-lazy-load _loaded" src="https://img.jamesedition.com/listing_images/2023/01/13/09/35/56/a2589361-b480-4528-b30e-14c1488c3a3a/je/556x342xcxm.jpg" alt="1987 BMW 535i rwd in Gaillac, France 1" />
                        </div>
                        <div className="swiper-slide-next swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1987 BMW 535i rwd in Gaillac, France 2" data-src="https://img.jamesedition.com/listing_images/2023/01/13/09/36/05/9ffd8df9-4f2e-4175-b6b8-935c9084263a/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1987 BMW 535i rwd in Gaillac, France 3" data-src="https://img.jamesedition.com/listing_images/2023/01/13/09/35/56/5632cb3b-0dc8-43b8-8731-a559139a7da1/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1987 BMW 535i rwd in Gaillac, France 4" data-src="https://img.jamesedition.com/listing_images/2023/01/13/09/35/55/716256f7-f52d-4bf0-a074-03de95c75eb6/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                        </div>
                        <div className=" swiper-slide" style={{width: '465px', marginRight: '0px'}}>
                          <div className="je2-lazy-load" alt="1987 BMW 535i rwd in Gaillac, France 5" data-src="https://img.jamesedition.com/listing_images/2023/01/13/09/36/01/5ed74702-7395-40e0-86df-a364c13174b2/je/507x312xc.jpg" data-type="card_horizontal" data-watermark="true" />
                          <div className="slider__show-more">
                            <div className="slider__show-more-button">
                              View 15 photos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider__pagination ">
                        <div className="slider__pagination__position _1" />
                        <div className="_0 slider__pagination__bullet" />
                        <div className="_1 slider__pagination__bullet" />
                        <div className="_2 slider__pagination__bullet" />
                        <div className="_3 slider__pagination__bullet" />
                        <div className="_4 slider__pagination__bullet" />
                        <div className="_5 slider__pagination__bullet" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ListingCard__description">
                  <div className="ListingCard__price">
                    $51,274
                  </div>
                  <div className="ListingCard__tags">
                    <span className="ListingCard__tag">1987 BMW 535i rwd</span>
                  </div>
                  <div className="ListingCard__title">
                    Gaillac, France
                  </div>
                  <div className="ListingCard__actions">
                    <div className="js-contact-button">Contact<svg><use xlinkHref="#contact" /></svg></div>
                  </div>
                  <img className="ListingCard__office-logo je2-lazy-load _loaded" width={97} height={40} data-src="https://img.jamesedition.com/dealer_listings_logos/2022/05/12/15/32/48/5c91d106-9e77-4aef-a1f1-35e8500c7eb7/je/120x50xs.jpg" data-type="office_logo_serp" data-watermark="true" src="https://img.jamesedition.com/dealer_listings_logos/2022/05/12/15/32/48/5c91d106-9e77-4aef-a1f1-35e8500c7eb7/je/97x40xs.jpg" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="je2-search-page__pagination js-pagination-serp">
          <a href="https://www.jamesedition.com/cars/all?page=2" className="je2-button " data-next="true">
            <span>Next</span>
          </a>
          <div className="Pagination js-pagination">
            <div className="Pagination__pages">
              <span className="_active" data-page={1}>
                1
              </span>
              <a aria-label={2} href="/cars/all?page=2">
                <span data-page={2}>2</span>
              </a>
              <a aria-label={3} href="/cars/all?page=3">
                <span data-page={3}>3</span>
              </a>
              <span>…</span>
              <a className="_last" aria-label={50} href="/cars/all?page=50">
                <span data-page={50}>50</span>
              </a>
              <a aria-label={2} href="/cars/all?page=2">
                <span className="_next" data-page={2}>
                  <svg><use xlinkHref="#short-arrow" /></svg>
                </span>
              </a>
            </div>
            <div className="Pagination__stats">
              1-36 of 7,046 cars for sale
            </div>
          </div>
        </div>
      </div>
      <div className="je2-search-page__mobile-footer">
        <button className="je2-button je2-saved-search-mobile _noborder _cyan _rounded" data-disabled-text="Search saved" data-active-text="Save search">
          <svg viewBox="0 0 18 17">
            <path stroke="currentColor" d="M7.3999 15.4287H10.5999" strokeWidth="1.6" />
            <path stroke="currentColor" fill="none" d="M13.5715 6.57143C13.5715 5.35901 13.0899 4.19625 12.2326 3.33894C11.3752 2.48163 10.2125 2 9.00007 2C7.78765 2 6.62489 2.48163 5.76758 3.33894C4.91027 4.19625 4.42864 5.35901 4.42864 6.57143V10.5714C4.42864 11.0261 4.24803 11.4621 3.92654 11.7836C3.60505 12.1051 3.16901 12.2857 2.71436 12.2857H15.2858C14.8311 12.2857 14.3951 12.1051 14.0736 11.7836C13.7521 11.4621 13.5715 11.0261 13.5715 10.5714V6.57143Z" strokeWidth="1.6" />
            <path stroke="currentColor" d="M1.57129 6.42314C1.57191 5.3353 1.83133 4.26322 2.32813 3.29545C2.82493 2.32768 3.54485 1.49199 4.42843 0.857422" strokeWidth="1.6" />
            <path stroke="currentColor" d="M16.4284 6.42314C16.4278 5.3353 16.1684 4.26322 15.6716 3.29545C15.1748 2.32768 14.4549 1.49199 13.5713 0.857422" strokeWidth="1.6" />
          </svg>
          <span>Save search</span>
        </button>
      </div>
      <div className="je2-search-filters js-je2-search-filters">
        <div className="je2-search-filters__container">
          <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', height: 0, width: 0, left: '-100px'}}>
            <symbol viewBox="0 0 20 20" id="color-black">
              <circle cx={10} cy={10} r={10} fill="black" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-white">
              <circle cx={10} cy={10} r="9.5" fill="white" stroke="#E0E0E0" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-red">
              <circle cx={10} cy={10} r={10} fill="#DD4A4C" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-grey">
              <circle cx={10} cy={10} r={10} fill="#C5CDD4" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-blue">
              <circle cx={10} cy={10} r={10} fill="#2293DD" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-silver">
              <circle cx={10} cy={10} r={10} fill="url(#color-silver-gradient)" />
              <defs>
                <linearGradient id="color-silver-gradient" x1={10} y1={0} x2={10} y2={20} gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F3F5F6" />
                  <stop offset={1} stopColor="#DCE1E5" />
                </linearGradient>
              </defs>
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-green">
              <circle cx={10} cy={10} r={10} fill="#50AF57" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-yellow">
              <circle cx={10} cy={10} r={10} fill="#F9D448" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-orange">
              <circle cx={10} cy={10} r={10} fill="#F08A34" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-beige">
              <circle cx={10} cy={10} r={10} fill="#E3D9B5" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-gold">
              <circle cx={10} cy={10} r={10} fill="url(#color-gold-gradient)" />
              <defs>
                <linearGradient id="color-gold-gradient" x1={10} y1={0} x2={10} y2={20} gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F9EBC1" />
                  <stop offset={1} stopColor="#EBCD5D" />
                </linearGradient>
              </defs>
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-brown">
              <circle cx={10} cy={10} r={10} fill="#996837" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-two_tone">
              <rect x="0.5" y="0.5" width={19} height={19} rx="9.5" fill="black" />
              <rect width={10} height={20} fill="white" />
              <rect x="0.5" y="0.5" width={19} height={19} rx="9.5" stroke="#E0E0E0" fill="none" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-purple">
              <circle cx={10} cy={10} r={10} fill="#B24BE7" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-turquoise">
              <circle cx={10} cy={10} r={10} fill="#49B3BA" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-pink">
              <circle cx={10} cy={10} r={10} fill="#E64C88" />
            </symbol>
            <symbol viewBox="0 0 20 20" id="color-custom">
              <circle cx={10} cy={10} r={10} fill="url(#pattern_custom_color)" />
              <defs>
                <pattern id="pattern_custom_color" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image_color_custom" transform="translate(-0.00179856) scale(0.00179856)" />
                </pattern>
                
              </defs>
            </symbol>
          </svg>
        </div>
      </div>
    </section>
    <div className="je2-search-page__seo-container js-seo-container _no-max-width">
    </div>
   
  </div>
</div>
}

export default ShowCollections;
