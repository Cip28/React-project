import React, { Component } from 'react'

export class Registration extends Component {
    constructor(){
        super();
        this.state={participate:""};
    }

    changeHandler=(event)=>{
        this.setState({participate:event.target.value});
    }

    render() {
        return (
            <div class="container">
                <form class="form"> 
                <h1>Registration</h1>
                <div class="name">
                  <label>Name</label> </div>
                  
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
                  <label>Course<br></br>
                      <input type="text" placeholder="your course" required/>
                  </label>
                  <br></br>
                    <label>Remarks<br></br>
                        <textarea placeholder="your suggestions"></textarea>
                    </label>
                    <br></br>
                    <button type="submit" id="button" onclick="jfun1()">Submit</button>

                </form>
  
            </div>
        );
    }
}

export default Registration
