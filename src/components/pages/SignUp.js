import React from 'react';
import '../../App.css';

export default function SignUp() {
  return (
    <>
    <div className="sign-up-container">
      <div className="form-container">
      <h1 className="header">Credit Link Finance</h1>
        <div className="form1">
          <p className="form1-header">Basic Information</p>
          <form>

            <div className="zone1-of-form1">
               <label htmlFor="surname">Surname</label><br />
               <input type="text" name="surname" id="surname" placeholder="Enter Surname"/><br /><br />
               <label htmlFor="othername">Other Names</label><br />
               <input type="text" name="othername" id="othername" placeholder="Enter other names"/>
            </div>



            <div className="zone2-of-form1">
               <label htmlFor="dob">Date of Birth</label><br />
               <input type="date" name="dob" id="dob" /><br /><br />
               <label htmlFor="gender">Gender</label><br />
               Male
               <input type="radio" name="gender" id="male" value="male" className="male"/>
               Female
               <input type="radio" name="gender" id="female" value="female" className="female"/>
            </div>


          </form>
        </div>
        <div className="form2">
        <p className="form1-header">Contact Information</p>
          <form>

            <div className="zone1-of-form1">

               <label htmlFor="phone-number">Phone Number</label><br />
               <input type="text" name="phone-number" id="phone-number" placeholder="Enter Phone Number"/><br/><br/>
               <label htmlFor="residential-address">Residential Address</label><br />
               <input type="text" name="residential-address" id="residential-address" placeholder="Enter Residential Address"/><br /><br />
               <label htmlFor="city">City</label><br />
               <input type="text" name="city" id="city" placeholder="Enter City of Residence"/>
               
            </div>



            <div className="zone2-of-form1">
               <label htmlFor="apn">Additional Phone Number</label><br />
               <input type="text" name="apn" id="apn" placeholder="Enter Second Phone Number"/><br /><br />
               <label htmlFor="sor">State of Residence</label><br />
               <select id="sor" name="sor">
                  <option value="ss">Select state...</option>
                  <option value="abia">Abia</option>
                  <option value="adamawa">Adamawa</option>
                  <option value="akwa-ibom">Akwa-Ibom</option>
                  <option value="anambra">Anambra</option>
                  <option value="bauchi">Bauchi</option>
                  <option value="bayelsa">Bayelsa</option>
                  <option value="benue">Benue</option>
                  <option value="borno">Borno</option>
                  <option value="cross-river">Cross River</option>
                  <option value="delta">Delta</option>
                  <option value="ebonyi">Ebonyi</option>
                  <option value="edo">Edo</option>
                  <option value="ekiti">Ekiti</option>
                  <option value="enugu">Enugu</option>
                  <option value="fct">FCT</option>
                  <option value="gombe">Gombe</option>
                  <option value="imo">Imo</option>
                  <option value="jigawa">Jigawa</option>
                  <option value="kaduna">Kaduna</option>
                  <option value="kano">Kano</option>
                  <option value="katsina">Katsina</option>
                  <option value="kebbi">Kebbi</option>
                  <option value="kogi">Kogi</option>
                  <option value="lagos">Lagos</option>
                  <option value="kwara">Kwara</option>
                  <option value="kwara">Nasarawa</option>
                  <option value="niger">Niger</option>
                  <option value="ogun">Ogun</option>
                  <option value="ondo">Ondo</option>
                  <option value="osun">Osun</option>
                  <option value="oyo">Oyo</option>
                  <option value="plateau">Plateau</option>
                  <option value="rivers">Rivers</option>
                  <option value="sokoto">Sokoto</option>
                  <option value="taraba">Taraba</option>
                  <option value="yobe">Yobe</option>
                  <option value="zamfara">Zamfara</option>
                  <option value="outside-nigeria">Outside Nigeria</option>
               </select><br /><br />
               <label htmlFor="oa">Office Address</label><br />
               <input type="text" name="oa" id="oa" placeholder="Enter Office Address"/>
            </div>
            </form>
        </div>
        <div className="form3">
          <p className="form1-header">User Login Information </p> 
          <form>

            <div className="zone1-of-form1">
               <label htmlFor="email">E-mail</label><br />
               <input type="text" name="email" id="email" placeholder="Enter Email Address"/><br /><br />
               <label htmlFor="branch">Branch</label><br />
               <select id="branch" name="branch">
                  <option value="sb">Select branch...</option>
                  <option value="ojota">Ojota</option>
                  <option value="ikorodu">Ikorodu</option>
                  
               </select>
            </div>



            <div className="zone2-of-form1">
               <label htmlFor="password">Password</label><br />
               <input type="password" name="password" id="password" placeholder="Enter Password"/>
            </div>
           

          </form>
          <div className="fpassword-submit-container">
              <a href="" className="sign-up-submit">Sign up</a>
              <p className="ahaa">Already have an account? <a href="">Sign in</a> </p>
            </div>
        </div>
      </div>
      <div className="footer-sign-up">
            <p className="copyright">Copyright © 2021. Madas Investment Management Ltd.</p>
            <p className="powered">Powered by <span>LIVEPETAL SYSTEMS LTD</span></p>
          </div>
    </div>
    </>
  )
}