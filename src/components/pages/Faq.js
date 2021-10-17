import React from 'react';
import '../../App.css';
/*import ReactDOM from 'react-dom';*/

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

          <div className="text1">
            <p className="head-text">Who is eligible for Madas Loans?</p>
           
            <p className="body-text" id="body-text-1">Salary earners, businessmen/women, people who can demonstrate capacity to repay their loans without tress.</p>
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
          <p className="head-text">Who is eligible for Madas Loans?</p>
            <p className="body-text" id="body-text-7">Salary earners, businessmen/women, people who can demonstrate capacity to repay their loans without tress.</p>
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
