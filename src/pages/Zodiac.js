import React from "react";

function Zodiac() {
  return (
    <div>
      <section className="as_horoscope_wrapper as_padderBottom80 as_padderTop80">
        <div className="container_as_wrapper">
          <div className="row_as_wrapper">
            <div className="col-lg-12 col-md-12 text-centerr">
              <h1 className="as_heading">Horoscope Forecasts</h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={240}
                  height={15}
                  viewBox="0 0 240 15"
                >
                  <image
                    id="Vector_Smart_Object"
                    data-name="Vector Smart Object"
                    width={240}
                    height={15}
                    xlinkHref="data:img/png;base64,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"
                  />
                </svg>
              </span>
              <p className="as_font14 as_padderTop20 as_padderBottom20">
                It is a long established fact that a reader will be distracted
                by the readable content of a page <br />
                when looking at its layout. The point of using Lorem Ipsum .
              </p>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh1.svg?alt=media&token=0eefc484-fd9c-4960-8f84-e250d47a83ed" alt />
                  </span>
                  <div>
                    <h5>Aries</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh2.svg?alt=media&token=66939bb6-ad7e-4e32-8643-12104cdea364" alt />
                  </span>
                  <div>
                    <h5>Taurus</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh3.svg?alt=media&token=dc84012e-76d1-4fa8-b650-6145525df2dd" alt />
                  </span>
                  <div>
                    <h5>Gemini</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh4.svg?alt=media&token=3bc262f7-275f-44be-8106-b2b49869bad4" alt />
                  </span>
                  <div>
                    <h5>Cancer</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh5.svg?alt=media&token=88182494-cfa9-4995-a8fc-78b42fd49891" alt />
                  </span>
                  <div>
                    <h5>Leo</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh6.svg?alt=media&token=6070a619-c60a-44b7-a588-dc218c800cad" alt />
                  </span>
                  <div>
                    <h5>Virgo</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh7.svg?alt=media&token=7c5b93f6-b977-4a60-b2ba-6ce2f1f416dc" alt />
                  </span>
                  <div>
                    <h5>Libra</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh8.svg?alt=media&token=2b076948-93c6-48ea-9f31-004e36be5971" alt />
                  </span>
                  <div>
                    <h5>Scorpio</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh9.svg?alt=media&token=0eb0ffe4-ec4a-4936-aa6b-37b5367faede" alt />
                  </span>
                  <div>
                    <h5>Sagittairus</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh10.svg?alt=media&token=12ec1cac-4bcf-4803-84fc-fd679039e759" alt />
                  </span>
                  <div>
                    <h5>Capricorn</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh11.svg?alt=media&token=24daedbb-378b-4252-a998-42bf84001427" alt />
                  </span>
                  <div>
                    <h5>Aquarius</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-6">
              <div className="as_sign_box text-centerr">
                <a href="service_single.html">
                  <span className="as_sign">
                    <img src="https://firebasestorage.googleapis.com/v0/b/traveltogether-54339.appspot.com/o/Image%2Fh12.svg?alt=media&token=14096dd8-98a7-434b-aa11-7281e84ef6fb" alt />
                  </span>
                  <div>
                    <h5>Pisces</h5>
                    <p>Mar 21 - Apr 19</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Zodiac;
