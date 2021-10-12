import React from 'react';
import '../../App.css';

export default function Home() {
  return (
    <>
      <div className="header-container">
            <div className="box1">
                <p className="first-p">Do you need a quick loan?</p><br />
                <h1>Credit~Link investment can help</h1><br />
                <p className="second-p">You dont have to get stranded when you suddenly run out of cash.
                Madas got you covered with fast emergency loans to meet your most pressing needs.
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
      </div>
    </>
  );
}