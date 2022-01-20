import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Home extends Component {

    render() {
        return (
            <div>
                <section id="hero" className="d-flex align-items-center">
                 <div className="containerz">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h1>Learn the secrets of the Web Development</h1>
                        <h2>We are team of talented designers ready to make your learning easier</h2>
                        <div className="d-lg-flex">
                            <Link to="/Registration" className="btn-get-started scrollto" >Get Started</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                         <img src="./images/hero-img.png" className="img-fluid animated" alt=""/>
                    </div>
                </div>
                </div>
             </section>

             

            </div>
        )
    }
}

export default Home
