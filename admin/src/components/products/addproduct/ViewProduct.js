import React from 'react'

export default function ViewProduct(props) {
    return (
        <div>
            <h4>Products</h4>
        
            <div class="col s12">
                <div class="card">
                    <div class="card-image">
                        <img src="images/sample-1.jpg" alt="image"/>
                        <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                <div class="card-action">
                <a href="#">Delete</a>
                <a href="#">Update</a>
                </div>
                </div>
            </div>
        </div>
    )
}
