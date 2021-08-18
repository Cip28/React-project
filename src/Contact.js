import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <div class="contact">    
                    <div class="left">
                            <h2>Our location:</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondra%2C%20Regatul%20Unit!5e0!3m2!1sro!2sro!4v1628771075889!5m2!1sro!2sro" width="500" height="400" ></iframe>
                            </div>
                    <br></br>
                    <div class="right">
                           <form class="contact-form">
                    <h1>Contact us</h1>
                  <label>Name</label> 
                  <br></br>
                      <input type="text" placeholder="your name" required/>
                  
                 
                  <br></br>
                  <label>Email address   </label><br></br>
                      <input type="email" placeholder="your email" required/>
               
                  <br></br>
                            
                  <input type="radio" id="html" name="fav_language" value="HTML"/>
                  <label for="html">Male</label>
                  <input type="radio" id="css" name="fav_language" value="CSS"/>
                  <label for="css">Female</label><br></br>
                    <br></br>
                  <label>Mobile<br></br>
                      <input type="text" placeholder="your mobile number" required/>
                  </label>
                  <br></br>
                  <label>Designation<br></br>
                      <input type="text" class="line" placeholder="your designation" required/>
                  </label>
                  <br></br>
                  <label>Location<br></br>
                      <input type="text" placeholder="your location" required/>
                  </label>
                  <br></br>
                    <label>Remarks<br></br>
                        <textarea placeholder="your suggestions"></textarea>
                    </label>
                    <br></br>
                    <button type="submit" id="button" onclick="jfun1()">Submit</button>

                           </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact
