import React from "react";


function Product(props) {  
  return(
  
 
      <div class="card">
        <div class="card-image">
       
        <img alt="img" className="img-res" src={props.data.product_url} style={{ height: "50vh"}}/>
        <span class="card-title red">{props.data.product_name}</span>  
        </div>
        <div class="card-content">
          <p className="" style={{height: 100 , overflow: "hidden"}}>{props.data.product_desc}</p>
        </div>
        <div class="card-action">
        <a href="#">View</a>
        <a href="#">Delete</a>
        <a href="#">Update</a>
        </div>
      </div>
  
  


  )
    
  }

export default Product

