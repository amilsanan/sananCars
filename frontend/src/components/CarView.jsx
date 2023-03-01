import React from "react";
import StripeCheckout from 'react-stripe-checkout'

function CarView() {
  function onToken(data){
    console.log('vbn',data);
    let checkoutData = {
      token : data

    }
    console.log('jkl',checkoutData);
  }
  return (
    <div>
      <div className="cars show" id="view">
        <div className="je3-header js-header _no-sticky">
          <header>
            <button
              className="je2-button js-hamburger-menu _noborder"
              aria-label="Menu"
            >
              <svg
                width={20}
                height={14}
                viewBox="0 0 20 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 13.0444H20" strokeWidth="1.6" />
                <path d="M0 7.04443H20" strokeWidth="1.6" />
                <path d="M0 1.04443H20" strokeWidth="1.6" />
              </svg>
            </button>
            <a
              href="/"
              style={{ marginTop: "15px" }}
              className="je2-texts__heading-34"
              aria-label="JamesEdition"
            >
              Sanan Cars
            </a>
            <ul>
              <li>
                <a
                  href="/buyer/feed"
                  className="je2-button js-menu-link _noborder"
                  data-click-area="Just for You"
                >
                  <span>Just for You</span>
                </a>
              </li>
            </ul>
            <ul className="je2-user-controls js-user-controls">
              <li>
                <a
                  className="je2-user-controls__saved"
                  href="/buyer/saved-listings"
                >
                  Saved
                  <div>1</div>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="je2-user-controls__account js-account"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="je2-notification-circle js-notification-circle " />
                  <p>Amil</p>
                </button>
              </li>
              <nav
                className="je2-account-dropdown js-account-dropdown _v2 _hidden _empty"
                style={{ height: "216px" }}
              >
                <div className="je3-spinner">
                  <div />
                  <div />
                  <div />
                </div>
              </nav>
            </ul>
          </header>
          <aside
            className="je3-hamburger js-hamburger _loading _mobile-right"
            aria-hidden="true"
          >
            <nav>
              <div className="je3-spinner">
                <div />
                <div />
                <div />
              </div>
            </nav>
          </aside>
        </div>
        <div id="page_content" className="_w-bottom-offset">
          <main className="je2-listing js-listing _compact">
            <div className="je2-mobile-top-bar js-mobile-top-bar _transparent">
              <div>
                <a
                  href="https://www.jamesedition.com/cars/all?page=2"
                  className="je2-button _onlyicon"
                  aria-label="Back to search"
                >
                  <svg>
                    <use xlinkHref="#short-arrow" />
                  </svg>
                </a>
                <div className="je2-mobile-top-bar__info">
                  <p>Jaguar XKE Series I</p>
                  <span>$119,500</span>
                </div>
                <div>
                  <button
                    className="je2-button _onlyicon js-share"
                    aria-label="Share"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3848 5L22.0002 9.61538L17.3848 14.2308"
                        stroke="#151515"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M2 18.846V15.7691C2 14.137 2.64835 12.5717 3.80242 11.4177C4.95649 10.2636 6.52174 9.61523 8.15385 9.61523H22"
                        stroke="#151515"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </button>
                  <button
                    className="je2-button _onlyicon js-heart "
                    data-listing-id={12489786}
                    aria-label="Save"
                  >
                    <svg>
                      <use xlinkHref="#heart" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="je2-listing__top _max-width _mobile-reverse">
              <nav className="je3-breadcrumbs _gray" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <a href="/cars">Cars</a>
                  </li>
                  <svg>
                    <use xlinkHref="#breadcrumb-arrow" />
                  </svg>
                  <li>
                    <a href="/cars/jaguar">Jaguar</a>
                  </li>
                  <svg>
                    <use xlinkHref="#breadcrumb-arrow" />
                  </svg>
                  <li>
                    <a href="/cars/jaguar/xke">XKE </a>
                  </li>
                </ol>
              </nav>
              <div className="je2-top-gallery js-top-gallery _w-side-images ">
                <div className="je2-top-gallery__image _2" style={{}}>
                  <picture style={{ backgroundImage: 'url("data:image/jpeg' }}>
                    <source
                      media="(max-width: 450px)"
                      srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/380xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/760xxsxm.jpg 2x"
                    />
                    <source
                      media="(max-width: 768px)"
                      srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/450xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/900xxsxm.jpg 2x"
                    />
                    <source
                      media="(max-width: 1100px)"
                      srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/768xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/1536xxsxm.jpg 2x"
                    />
                    <source
                      media="(max-width: 1900px)"
                      srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/1100xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/2200xxs.jpg 2x"
                    />
                    <source
                      media="(min-width: 1900px)"
                      srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/1900xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/2200xxs.jpg 2x"
                    />
                    <img
                      src="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/4af8cb75-a901-453c-b363-9bc53c588634/je/1100xxs.jpg"
                      importance="high"
                      alt="Jaguar XKE Series I in Los Angeles, CA 1 - 12489786"
                    />
                  </picture>
                  <div className="je2-top-gallery__side-images _2">
                    <div>
                      <picture
                        style={{ backgroundImage: 'url("data:image/jpeg' }}
                      >
                        <source
                          media="(max-width: 450px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/380xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/760xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 768px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/450xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/900xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1100px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/768xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/1536xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/1100xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/2200xxs.jpg 2x"
                        />
                        <source
                          media="(min-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/1900xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/2200xxs.jpg 2x"
                        />
                        <img
                          src="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2eeaa9cd-4f86-4dd9-9759-681d43dc3ddf/je/1100xxs.jpg"
                          importance="high"
                          alt="Jaguar XKE Series I in Los Angeles, CA 2 - 12489786"
                        />
                      </picture>
                      <picture
                        style={{ backgroundImage: 'url("data:image/jpeg' }}
                      >
                        <source
                          media="(max-width: 450px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/380xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/760xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 768px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/450xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/900xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1100px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/768xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/1536xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/1100xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/2200xxs.jpg 2x"
                        />
                        <source
                          media="(min-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/1900xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/2200xxs.jpg 2x"
                        />
                        <img
                          src="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/44f1067e-8749-41f0-abca-f1ed37a4048c/je/1100xxs.jpg"
                          importance="high"
                          alt="Jaguar XKE Series I in Los Angeles, CA 3 - 12489786"
                        />
                      </picture>
                    </div>
                    <div>
                      <picture
                        style={{ backgroundImage: 'url("data:image/jpeg' }}
                      >
                        <source
                          media="(max-width: 450px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/380xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/760xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 768px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/450xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/900xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1100px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/768xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/1536xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/1100xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/2200xxs.jpg 2x"
                        />
                        <source
                          media="(min-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/1900xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/2200xxs.jpg 2x"
                        />
                        <img
                          src="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/2602d5f3-3565-4833-91fc-0dfa9014bf31/je/1100xxs.jpg"
                          importance="high"
                          alt="Jaguar XKE Series I in Los Angeles, CA 4 - 12489786"
                        />
                      </picture>
                      <picture
                        style={{ backgroundImage: 'url("data:image/jpeg' }}
                      >
                        <source
                          media="(max-width: 450px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/380xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/760xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 768px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/450xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/900xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1100px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/768xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/1536xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/1100xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/2200xxs.jpg 2x"
                        />
                        <source
                          media="(min-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/1900xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/2200xxs.jpg 2x"
                        />
                        <img
                          src="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/1100xxs.jpg"
                          importance="high"
                          alt="Jaguar XKE Series I in Los Angeles, CA 5 - 12489786"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="je2-top-gallery__controls">
                  <button
                    className="je2-button je2-top-gallery__save js-heart "
                    data-listing-id={12489786}
                    data-saved="Saved"
                    data-location="Gallery block"
                    aria-label="Save"
                  >
                    <svg>
                      <use xlinkHref="#heart" />
                    </svg>
                    <span>Save</span>
                  </button>
                  <button
                    className="je2-button _noborder js-share"
                    aria-label="Share"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3848 5L22.0002 9.61538L17.3848 14.2308"
                        stroke="#151515"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M2 18.846V15.7691C2 14.137 2.64835 12.5717 3.80242 11.4177C4.95649 10.2636 6.52174 9.61523 8.15385 9.61523H22"
                        stroke="#151515"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    <span>Share</span>
                  </button>
                  <div className="je2-top-gallery__details">
                    <button
                      className="je2-button _noborder"
                      data-open="Photos"
                      aria-label="46 Photos"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 9.11538C22 8.70736 21.8379 8.31605 21.5494 8.02753C21.2609 7.73901 20.8696 7.57692 20.4615 7.57692H17.3846L15.0769 4.5H8.92308L6.61538 7.57692H3.53846C3.13044 7.57692 2.73912 7.73901 2.4506 8.02753C2.16209 8.31605 2 8.70736 2 9.11538V18.3462C2 18.7542 2.16209 19.1455 2.4506 19.434C2.73912 19.7225 3.13044 19.8846 3.53846 19.8846H20.4615C20.8696 19.8846 21.2609 19.7225 21.5494 19.434C21.8379 19.1455 22 18.7542 22 18.3462V9.11538Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.0001 16.4231C13.9119 16.4231 15.4617 14.8733 15.4617 12.9615C15.4617 11.0498 13.9119 9.5 12.0001 9.5C10.0884 9.5 8.53857 11.0498 8.53857 12.9615C8.53857 14.8733 10.0884 16.4231 12.0001 16.4231Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>46 Photos</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="je2-listing__body-wrapper">
              <div className="je2-listing__body">
                <div className="je2-listing__section">
                  <div className="je2-listing-info _compact">
                    <div>
                      <h1>Jaguar XKE Series I</h1>
                      <div className="je2-listing-info__price">
                        ₹ 9,900,468
                        <button
                          className="je2-button _noborder"
                          aria-label="This price is converted from $119,500"
                        >
                          <svg viewBox="0 0 12 12">
                            <circle cx={6} cy={6} r={6} />
                            <rect
                              x={5}
                              y={5}
                              width={2}
                              height={5}
                              fill="white"
                            />
                            <rect
                              x={5}
                              y={2}
                              width={2}
                              height={2}
                              fill="white"
                            />
                          </svg>
                          <div className="je2-button__tooltip ">
                            This price is converted from $119,500
                          </div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <p>Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
                <div className="je2-listing__section _mobile-overflow-gradient">
                  <div className="je2-listing-specs">
                    <div className="je2-listing-specs__item">
                      <p>1964</p>
                      <span>Year</span>
                    </div>
                    <div className="je2-listing-specs__item">
                      <p>100</p>
                      <span>kms</span>
                    </div>
                    <div className="je2-listing-specs__item">
                      <p>petrol</p>
                      <span>engine</span>
                    </div>
                    <div className="je2-listing-info__price" >
                    <StripeCheckout token={onToken} amount={100} currency='INR' stripeKey="pk_test_51Mg69KSCKTDw8Te2ZcDATxGK2CzkuTztyNVT6VVAAx8wjWvMvVjsRZpvhgOPiMPy6YIpybEUx3Tl2B75DRVMPmPd00Z8HnRmco" >
                    <button>Book Now</button></StripeCheckout>
                      {/* <p>petrol</p>
                      <span>engine</span> */}
                    </div>
                  </div>
                </div>
                <div className="je2-listing__section">
                  <h2>About This Car</h2>
                  <div className="je2-listing-about js-listing-about">
                    <div
                      className="je2-read-more js-read-more _original"
                      aria-expanded="false"
                      data-block
                    >
                      <div className="je2-read-more__preview _translated" />
                      <div className="je2-read-more__preview _original">
                        
                        
                        <em>1964 Jaguar XKE Series I Roadster</em> This highly
                        desirable 1964 Jaguar XKE Series I Roadster featured
                        with matching numbers is finished in Old English White
                        complemented with a Black interior and Red upholstery.
                        This Series I XKE roadster is equipped with a four-speed
                        manual transmission, 3.8-liter inline-six engine, triple
                        SU carburetors, front-wheel disc brakes, twin exhaust
                        finishers, convertible soft top, toggle switches, Smiths
                        instruments, Lucas-branded ammeter gauge, covered
                        headlights, triple windshield wipers, three-spoke
                        wood-rimmed steering wheel, bonnet louvers, chrome
                        trim/bumpers, Coker Classic redline tires, wire wheels
                        with Jaguar branded two-eared knock-off wheel spinners,
                        and a full-size spare tire fitted in the trunk.
                        Amenities include manual-crank windows, an armrest
                        center console, cigar lighter with an ashtray, a
                        passenger dash grab handle, and a vintage Boman
                        Astrosonic radio. A sensational Series I E-Type Roadster
                        that is in excellent condition and is also mechanically
                        sound. For $119,500
                      </div>
                      <div className="je2-read-more__expand js-expand">
                        <span>…</span>
                        <button className="je2-button je2-link">
                          Read more
                        </button>
                      </div>
                      <div className="je2-read-more__collapse">
                        <button className="je2-button je2-link js-collapse">
                          Read less
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                       
               
              </div>
             
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
}

export default CarView;
