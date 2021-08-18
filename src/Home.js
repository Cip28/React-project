import React, { Component } from 'react'

export class Home extends Component {
  constructor(){
      super();
      function jfun1(){
          alert("Hi");
      }
  }
    


    render() {
        return (
            <div>
                <section id="hero" class="d-flex align-items-center">
                 <div class="containerz">
                <div class="row">
                    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                    <h1>Learn the secrets of the Web Development</h1>
                    <h2>We are team of talented designers ready to make your learning easier</h2>
                    <div class="d-lg-flex">
                        <a href="http://localhost:3000/Registration" class="btn-get-started scrollto" onChange="jfun1()">Get Started</a>
                    </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                    <img src="hero-img.png" class="img-fluid animated" alt=""/>
                    </div>
                </div>
                </div>
             </section>

             

            </div>
        )
    }
}

export default Home
