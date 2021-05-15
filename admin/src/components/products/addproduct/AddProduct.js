import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getDisease } from '../../../redux/disease/diseaseAction';


export default function AddProduct(props) {

    const diseasestate = useSelector((state) => state.disease)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getDisease())
      return () => {}
    }, [dispatch]);


    const {
      register,
      handleSubmit,
    } = useForm();
  

    
    
    // const[diseaseName,
    // ]=useState("")
    // const[productName,setProductName]=useState("");
    // const[productDesc,setProductDesc]=useState("");
    // const[productImg,setProductImg]=useState("");
    // const[productDose,setProductDose]=useState("");

    // const handleSubmit=(e)=>{ 
    //   e.preventDefault();
    // }
    

    return (
        <div className="container" >
                        <h4>Add New Product</h4>
                        <form class="col s12" onSubmit={handleSubmit}>
                          <div class="row">
                            <div class="input-field col s12">
                            <select class="browser-default"  >
                              <option value={{value:null}} disabled selected>Select Disease</option>
                              <option value={{value:null}}>Select Disease</option>
                              {diseasestate.diseaseList.map((disease)=>
                                    <option key={disease.name} value={disease._id}>{disease.name}</option>)}                            
                            </select>
                            </div>
                            {
                              true && (
                                <div class="input-field col s12">
                                <input  id="product_name" type="text" class="validate"/>
                                <label for="product_name">Product Name</label>
                            </div>
                              )
                            }
                            {
                              true && (
                                <div class="input-field col s12">
                                <input  id="product_desc" type="text" class="validate"/>
                                <label for="product_desc">Product Description</label>
                            </div>
                              )
                            }
                            {
                              true && (
                                <div class="input-field col s12">
                                <input  id="product_img" type="text" class="validate"/>
                                <label for="product_img">Product Image</label>
                            </div>
                              )
                            }
                            {
                              true && (
                                <div class="input-field col s12">
                                <input  id="dose" type="text" class="validate"/>
                                <label for="dose">Dose</label>
                            </div>
                              )
                            }
                            {
                              true && (
                                <div class="row">
                    <div class="col s12 m6 offset-m3">
                      <button
                        type="submit"
                        className="waves-effect waves-light btn-small green right"
                        disabled="">
                        Submit
                      </button>
                    </div>
                    </div>
                              )
                            }


                          </div>
                          
                          


                        </form>

                  
        </div>
    )
}
