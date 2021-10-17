import React from 'react';
import '../../App.css';


export default function Faq() {




  return (
    <>
    <div className="faq-container">
      <div className="header-container">
        <h1 className="faq-header">Faq <br />
        <span className="header-intro">Frequently Asked Questions</span>
        </h1>
        <h1 className="faq-q">?</h1>
      </div>
      <div className="faq-main-container">

        <div className="question1">

          <div className="text1" id="text1" >
            <p className="head-text" id="head-text">Who is eligible for Madas Loans?</p>
           <div className="body-text-1"  id="body-text-1" >
            <p>Salary earners, businessmen/women, people who can demonstrate capacity to repay their loans without tress.</p>
            </div>
          </div>
          <div className="text2">
          <p className="head-text">What are the requirement for accessing Madas loans?</p>
            <ul id="body-text-2" class="body-text">
              <li>Receipt of duly executed loan application form, one passport photograph, a valid means of identification</li>
              <li>Receipt of duly executed offer letter in acceptance of the Facility.</li>
              <li>Receipt of duly executed guarantors form, together with one passport photograph, valid means of identification.</li>
            </ul>
          </div>
          <div className="text3">
          <p className="head-text">How long does it takes to process loans?</p>
            <p className="body-text" id="body-text-3">It usually takes between 4 to 72 hours depending on the size of the loan and availabity of requested information</p>
          </div>
          <div className="text4">
          <p className="head-text">Can i submit loan application online?</p>
            <p className="body-text" id="body-text-4">Yes. All you need to do is to login to your account after signup and submit your application from your dashboard.</p>
          </div>
          <div className="text5">
          <p className="head-text">Do i need to sign up separate accounts for different services?</p>
            <p className="body-text" id="body-text-5">No. With a single signup you can have access to all our services. Note that signup is completely free of charge.</p>
          </div>
          <div className="text6">
          <p className="head-text">What is the mininmum and maximum loan tenure?</p>
            <p className="body-text" id="body-text-6">Loan tenure ranges from 7 days to 90 days depending on the size of the loan.</p>
          </div>
          <div className="text7">
          <p className="head-text">What are the available savings and Loans packages?</p>
            <div className="pkg-container">
              <div className="pkg1">
                <h4>1. ESUSU SAVINGS ACCOUNT</h4>
                <p>This is a savings account designed to encourage micro traders cultivate the habit of daily savings and enjoy micro credit in other to boost their daily sales.</p>
                <ul>
                  <li>a. Minimum opening and daily contribution of N1000</li>
                  <li>b. Customer to maintain a minimum daily balance of N500</li>
                  <li>c. Customer is eligible to loan after one (1) week of regular savings.</li>
                  <li>d. To obtain loan, customer must provide 30% of the proposed loan amount as security deposit</li>
                  <li>e. Interest rate of 10% flat per month is charged on the loan amount</li>
                  <li>f. After availing loan to customer, he/she should continue the daily voluntary contribution apart from loan repayment (not compulsory)</li>
                  <li>g. Management/process fee of 2.5% flat payable up-front.</li>
                  <li>h. Maximum loan repayment period is within one (1) months.</li>
                  <li>i. Credit insurance premium of N5/mile.</li>
                </ul>
              </div>
              <div className="pkg2">
              <h4>2. SALARY ADVANCE ACCOUNT (PAY- DAY LOAN)</h4>
                <p>This is current account targeted at salary earners who work in a well-structured corporate organization. The aim is to assist their personal/family needs.</p>
                <ul>
                  <li>a. Minimum opening amount is N5000</li>
                  <li>b. Maximum loan amount shall not be more than 30% of monthly net pay.</li>
                  <li>c. Interest rate is 8% flat per months</li>
                  <li>d. Management/processing fee of 2.5% flat</li>
                  <li>e. Maximum repayment period is 1 month</li>
                  <li>f. There shall be no security deposit</li>
                  <li>g. Customer provides credible and reliable Guarantor from their place of work. h. COT is N5/mile</li>
                  <li>Credit insurance premium of N5/mile</li>
                </ul>
              </div>
              <div className="pkg3">
              <h4>3. PLATINUM BUSINESS ACCOUNT</h4>
                <p>This is a savings account designed to assist micro traders for the purpose of augmenting working capital.</p>
                <ul>
                  <li>a. Minimum opening and daily contribution of N2000</li>
                  <li>b. Customer to maintain a minimum daily contribution of N2000 for minimum of One (1) week continuously before loan can be accessed.</li>
                  <li>c. Maximum repayment period is three (3) months.</li>
                  <li>d. To obtain loan, customer must provide Tangible and Movable asset for Collateral</li>
                  <li>e. After availing loan to customer he/she continue the daily contribution</li>
                  <li>f. Maximum loan amount is five million naira only (5,000,000)</li>
                  <li>g. Interest of 8% flat per month</li>
                  <li>h. Management / Processing Fee of 2.5% flat payable upfront</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="question2">
          <div className="q2">
          <h1>Do you still have questions or need more clarification about our loans, savings and investment services?
            <br/><br/><br/><br/>
            <a href="/#">Contact us</a>
          </h1>
          </div>
        </div>
      </div>
      <div className="footer-faq">
            <p className="copyright">Copyright © 2021. Madas Investment Management Ltd.</p>
            <p className="powered">Powered by <span>LIVEPETAL SYSTEMS LTD</span></p>
          </div>
    </div>
    </>
  )
}
