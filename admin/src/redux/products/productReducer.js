import {REMOVE_PRODUCT,ADD_PRODUCT,UPDATE_ITEM} from './productType'

const  initialState={
    items:[{
        product_id:1,
        product_name:"Arjuna Capsules",
        product_url:"https://5.imimg.com/data5/UL/ER/MY-47611873/planet-ayurveda-arjuna-capsules-500x500.png",
        product_desc:"Zandu Arjuna Capsule is an ayurvedic supplement which helps in boosting heart health. Arjuna herb has various benefits such as regulating blood sugar level, healthy weight management and is also beneficial in urinary disorders. It promotes healing of wounds and is also useful against hypertension"
    },
    {
        product_id:2,
        product_name:"CORAL CALCIUM COMPLEX",
        product_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHle_Bc9ce012GboelCAqNW2nxZIqO01uDAuAwxDIhX5a3p5C9xy2KtQSc5eYnduo23I&usqp=CAU",
        product_desc:"Coral is used as a calcium supplement; to treat multiple sclerosis; and to treat and prevent cancer, heart disease, and other chronic health problems. Surgeons use coral as a foundation for growing new bone in reconstructive surgery, cosmetic facial surgery, and in areas damaged by trauma"
    },
    {   
        product_id:3,
        product_name:"ALLER-G CARE",
        product_url:"https://cdn.shopify.com/s/files/1/0126/4277/9200/products/aller-g-care.jpg",
        product_desc:"Planet Ayurveda Aller-G Care is an effective herbal remedy which is useful for allergies of all types and also provides relief in Asthma, Sneezing, Rhinitis, Sinusitis, Pollen allergy, and Rust Allergy"
    },
    {
        product_id:4,
        product_name:"amalaki rasayan",
        product_url:"https://images-na.ssl-images-amazon.com/images/I/31kXVVT6WDL._AC_.jpg",
        product_desc:"Amla is rich in vitamin C. Divya amla rasayan is therefore very effective in treating cold infections. It is rich in fibre and improves digestion. Amla has antioxidants properties."
    },
    {
        product_id:5,
        product_name:"CARICA PAPAYA CAPSULES",
        product_url:"https://5.imimg.com/data5/CT/NH/MY-2938682/45bac256-cfc0-4aaa-bce0-bdf29c82590c-500x500.jpg",
        product_desc:"The clinical value of improvement in platelet count or early discharge is unclear in the absence of more robust indicators of favourable clinical outcome. Current evidence is insufficient to comment on the role of CP extract in dengue. There is a need for further well designed clinical trials examining the effect of CP on platelet counts, plasma leakage, other serious manifestations of dengue, and mortality, with clearly defined outcome measures"
    }
    ]
}

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        
        case REMOVE_PRODUCT:
            const filtereditem=state.items.filter(item=>item.id!==action.payload);    
        return{
            // remove product from db
            ...state,
            items:filtereditem
            
        }
        case ADD_PRODUCT:return{
            //add product
            ...state,
            items:[...state.items,action.payload]
        }
        case UPDATE_ITEM:{
            const index=state.items.findIndex(item=>item.id!==action.payload);
            const newArray=[...state.items]
            newArray[index].completed=true
            return{
                ...state,
                items:newArray
            }
        }
        default:return state
    }
}
export default productReducer