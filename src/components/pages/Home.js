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
                <div className="image-text"></div>
              </div>
              <div className="card2">
                <div className="image"></div>
                <div className="image-text"></div>
              </div>
              <div className="card3">
                <div className="image"></div>
                <div className="image-text"></div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}