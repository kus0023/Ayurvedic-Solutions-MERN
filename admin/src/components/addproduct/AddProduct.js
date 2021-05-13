import React from 'react'

export default function AddProduct() {

  
    return (
        <div className="container" >
            
                        <h4>Add New Product</h4>
                        <form class="col s12">
                        <div class="row">
                          <div class="input-field col s12">
                          <select class="browser-default">
                            <option value="" disabled selected>Select Disease</option>
                            {[1,2,3,4,5].map(i=>
                              <option key={i} value={i}>{i}</option>)}
                          </select>
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
    )
}
