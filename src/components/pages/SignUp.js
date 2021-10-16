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
               <input type="radio" name="male" id="male" className="male"/>
               Female
               <input type="radio" name="female" id="female" className="female"/>
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
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
               </select><br /><br />
               <label htmlFor="oa">Office Address</label><br />
               <input type="text" name="oa" id="oa" placeholder="Enter Office Address"/>
            </div>
            </form>
        </div>
        <div className="form3">
        <p className="form1-header">Basic Information</p>
          <form>

            <div className="zone1-of-form1">
               <label htmlFor="email">E-mail</label><br />
               <input type="text" name="email" id="email" placeholder="Enter Email Address"/><br /><br />
               <label htmlFor="sor">State of Residence</label><br />
               <select id="sor" name="sor">
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
               </select>
            </div>



            <div className="zone2-of-form1">
               <label htmlFor="password">Password</label><br />
               <input type="password" name="password" id="password" placeholder="Enter Password"/>
            </div>


          </form>
        </div>
      </div>
    </div>
    </>
  )
}