import React from "react";


function Product(props) {  
  return(
    <div>
      <div class="row">
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
       
        <img alt="img" src={props.data.product_url} style={{ height:200 , width:200}}/>
        <span class="card-title red">{props.data.product_name}</span>  
        </div>
        <div class="card-content">
          <p>{props.data.product_desc}</p>
        </div>
        <div class="card-action">
        <a href="#">View</a>
        <a href="#">Delete</a>
        <a href="#">Update</a>
        </div>
      </div>
    </div>
  </div>    
</div>

  )
    
  }

export default Product

