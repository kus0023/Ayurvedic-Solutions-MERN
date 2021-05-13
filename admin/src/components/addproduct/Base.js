import React from 'react'
import AddProduct from './AddProduct'
import ViewProduct from './ViewProduct'

export default function Base() {
    return (
        <div className="row">
            <div class="col s12 m6"><AddProduct/></div>
            
            <div class="col s12 m6"><ViewProduct/></div>
        </div>
    )
}
