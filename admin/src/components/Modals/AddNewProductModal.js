import React, { Component } from "react";

export default class AddNewProductModal extends Component {
  componentDidMount() {
    const M = window.M;
    var elems = document.querySelectorAll(".modal-product-add");
    M.Modal.init(elems, { dismissible: false });
  }

//   watchNumberOfTickets = watch('numberOfTickets');

//   validationSchema = Yup.object().shape({
//     numberOfTickets: Yup.string()
//         .required('Number of tickets is required'),
//     tickets: Yup.array().of(
//         Yup.object().shape({
//             name: Yup.string()
//                 .required('Name is required'),
//             email: Yup.string()
//                 .email('Email is Invalid')
//                 .required('Email is required')
//         })
//     )
// });

  render() {
    return (
      <div>
        <div
          id="modal-product-add"
          class="modal modal-fixed-footer modal-product-add">
          <div class="modal-content">
            <div className="right ">
              <i class="material-icons  modal-close">close</i>
            </div>
            <h4>Add New Product</h4>
            <div class="row">
                      <form class="col s12">
                        <div class="row">
                          <div class="input-field col s12">
                              <input id="productname" type="text" class="validate"/>
                              <label for="productname">Product Name</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                              <input id="productdescription" type="text" class="validate"/>
                              <label for="productdescription">Product Description</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                              <input id="producturl" type="text" class="validate"/>
                              <label for="producturl">Product image url</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                          <select class="browser-default">
                            <option value="" disabled selected>Select Disease</option>
                            {[1,2,3,4,5].map(i=>
                              <option key={i} value={i}>{i}</option>)}
                          </select>
                          </div>
                        </div>


                      </form> 
            </div> 
            
          </div>
          

          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
            <button class="waves-effect waves-green btn red">Add</button>
          </div>
        </div>
      </div>
    );
  }
}
