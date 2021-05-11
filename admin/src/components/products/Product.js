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

// const data = useSelector(state => state.product.data.items)
//     const dispatch=useDispatch()

//  <div class="col s12 m4" style={{ padding: 5 }}>
//         <div class="card blue-grey darken-1">
//           <div class="card-content white-text">
//             <span class="card-title">{items.product_name}</span>
//             <p>
//               {/* Product Description - I am a very simple card. I am good at
//               containing small bits of information. I am convenient because I
//               require little markup to use effectively. */}
//               {items.product_desc}
//             </p>
//           </div>
//           <div class="card-action">
//             <a href="#">View</a>
//             <a href="#">Delete</a>
//             <a href="#">Update</a>
//           </div>
//         </div>
//       </div> 
