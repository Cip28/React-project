import React, { Component } from 'react'

export class Photo extends Component {
    render() {
        return (
            <div>
                
                <div class="photo">
                       <h2>Now you can code everywhere. Don't hesitate to travel!</h2>
                       <br></br>
                       <div class="photo-galery">
                        <img src="travel.jpg" class="rounded" width="350px" alt=""></img>
                        <img src="travel2.jpg" class="rounded" width="350px"  alt=""></img>
                        <img src="travel3.jpg" class="rounded" width="350px"  alt=""></img>
                        </div>
                        
                <h2> A few of our offices:</h2>
                <div class="photo-galery">
                        <img src="office1.jpg" class="rounded" width="350px"  alt=""></img>
                        <img src="office2.jpg" class="rounded" width="350px"  alt=""></img>
                        <img src="office3.jpg" class="rounded" width="350px"  alt=""></img>
                        </div>
                <h2> Our online and offline classes:</h2>
                <div class="photo-galery">
                        <img src="class1.jpg" class="rounded" width="350px"  alt=""></img>
                        <img src="class2.jpg" class="rounded" width="350px"  alt=""></img>
                        <img src="class3.jpg" class="rounded" width="350px"  alt=""></img>
                        </div>
                 </div>

            </div>
            
        )
    }
}

export default Photo
