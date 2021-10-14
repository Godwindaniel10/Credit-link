import React from 'react';
import '../../App.css';

export default function Home() {
  return (
    <>
      <div className="header-container">
            <div className="box1">
                <p className="first-p">Building a saving culture</p><br />
                <h1>can help you secure your rainy day</h1><br />
                <p className="second-p">Weather it's periodic saving's or long tenure investment, Credit~Link finance provides a simplified approach to earning more through your saving's.
                </p>
            </div>
            <div className="box2"></div>
      </div>
      <div className="main-contianer">
          <div className="first-container">
            <div className="box-1">
              <div className="qpp-npf-container">
              <div className="qpp">
                <p><i class="far fa-credit-card"></i> Quick Payment Process</p>
              </div>
              <div className="npf">
                <p><i class="far fa-thumbs-down"></i> No Prepayment Fees</p>
              </div>
              </div>
              <div className="text-container">
              <p className="first-p">Do you need a quick loan?</p><br />
                <h1>Credit~Link investment can help</h1><br />
                <p className="second-p">You dont have to get stranded when you suddenly run out of cash.
                Madas got you covered with fast emergency loans to meet your most pressing needs.
                </p>
              </div>
  </div>
  <div className="box-2">
    <div className="header">
      <h1>How Much You Need</h1>
    </div>
    <div className="body">
      <a href="#">Sign up</a>
    </div>
  </div>
          </div>

          <div className="offer-container">
            <div className="header-text">
              <p className="p1">What We're Offering <span></span></p><br />
              <h1>Credit~Link Investment Management Ltd</h1>
              <p className="p2">We offer quick loans at flexible repayment terms and help<br /> you earn on every dime you save or invest for long and short terms.</p>
            </div>
            <div className="cards-container">
              <div className="card1">
                <div className="image"></div>
                <div className="image-text">
                  <p className="cl-loan-header">Credit~Link Loans</p>
                  <p className="cl-loan-text">Credit Link Finance manages your loan needs to provide you with quick loans, attractive interest rates and flexible repayments plans.</p>
                </div>
              </div>
              <div className="card2">
                <div className="image"></div>
                <div className="image-text">
                  <p className="cl-savings-header">Credit~Link Savings</p>
                  <p className="cl-savings-text">We can help you build a saving culture with our simple and easy-to-understand savings plans and gives you interest on each deposit.</p>
                </div>
              </div>
              <div className="card3">
                <div className="image"></div>
                <div className="image-text">
                  <p className="cl-investment-header">Credit~Link Investment</p>
                  <p className="cl-investment-text">Our investment plans allows you to select comfortable tenure and generate high return on your investment. More than bank offers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container">
            <div className="about-sec1">
              <div className="about-intro-1">
                <p className="intro-p">About Credit~Link Finance</p>
                <h1>It's All About Loans, Savings & Investments</h1>
              </div>
              <div className="about-intro-2">
              <p>Credit Link Investment Management Limited is a Finance Company duly registered by the Corporate Affairs Commission to carry our financial management services for clients.
              </p>
              </div>
            </div>
            <div className="about-sec2">
              <div className="card1">
              <img src="https://img.icons8.com/external-ddara-lineal-ddara/64/000000/external-assets-fintech-ddara-lineal-ddara.png" alt="" />
                <p>Stress-free loans with flexible repayments</p>
              </div>
              <div className="card2">
              <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-saving-money-economy-and-currency-justicon-lineal-justicon-4.png" alt="" />
                <p>Savings plans to build your saving culture & earn</p>
              </div>
              <div className="card3">
              <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-investment-investment-flatart-icons-outline-flatarticons-2.png" alt="" />
                <p>Investment plans with peace of mind guaranteed</p>
              </div>
            </div>
          </div>
          <div className="why-choose-container">
            <div className="wcu1">
                  <div data-aos="fade-up" class="leftbox">
                        <div className="img1">
                        <div className="img2"></div>
                        <div className="img3"></div>
                        <div className="img4"></div>
                        <div className="img5"></div>
                        </div>
                  </div>
                  <div className="rightbox">
                    <div className="text">
                    <h1>Why Choose Credit Link Finance</h1>
                    <p>Our mission is to make processing of financial service seamless and to help our clients meets their financial needs faster. This is why we strive to offer first class financial services to our clients.</p>
                    </div>
                  </div>
            </div>
            <div className="wcu2">

                  <div className="rightbox">
                    <div className="text">
                    <div className="container1">

                       <span className="num1">01</span><br />
                       <div className="header-text-box">
                     <p className="header">Reliability & Transparency</p>
                      <p className="text">Our foundation is built upon the trust reposed on us by our client simply because we make everything clear and transparent.</p>
                     </div>
                    </div>
                    <div className="container2">
                    <span className="num2">02</span><br />
                    <div className="header-text-box">
                     <p className="header">Experienced Leadership</p>
                      <p className="text">The company is led by directors that have demonstrated time-tested principles of financial success and breakthrough.</p>
                     </div>
                    </div>
                    <div className="container3">
                    <span className="num3">03</span><br />
                    <div className="header-text-box">
                     <p className="header">Operational Efficiency</p>
                      <p className="text">Our system is completely automated to deliver best user experience for our clients and operators with high efficiency and accuracy.</p>
                     </div>
                    </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" class="leftbox">
                        <div className="img1">
                        <div className="img2"></div>
                        <div className="img3"></div>
                        <div className="img4"></div>
                        <div className="img5"></div>
                        </div>
                  </div>
            </div>
          </div>
          <div className="footer"></div>
      </div>
    </>
  );
}