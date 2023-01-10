
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { staticData } from '../data';
import product from '../imgs/product.jpg'
import Load from './Load';
import OpenCart from './OpenCart';
export default function Shop(){
   
const [newProducts, setNewProducts] = useState(staticData);
const [isLoading,setIsLoading] = useState(true)
    const getProducts = ()=>{
        let requestOption = {
            method : 'GET'
        }
        let apiURL = process.env.REACT_APP_BASE_API_URL
        fetch(`${apiURL}/products`,requestOption).then(response => {
            console.log(response)
            return response.json()
        }).then(result =>{
            const {products} = result;
            setNewProducts(products)
            setIsLoading(false)
            console.log(result)
        }).catch(error =>{
            console.log(error)
            setIsLoading(false)
        })

    }
    const myref = useRef()
useEffect(()=>{
    myref.current?.scrollIntoView({behavior: 'smooth'});
    getProducts()
    console.log('the products$$ : ', newProducts)

},[])
    return (
        <div>
        { isLoading? 
        <Load/>
        :
        

        <div className="shop starter " id='top' ref={myref}>
            <div className="row p-5">
                <h1 className="text-center">Explore our items</h1>
            </div>

            <div className="row">
                
                <div className='col-sm products-body p-3'>
                    <div className='row'>
                        {newProducts?.map((p ,index)=>(
                                 <div key={index} className="col-sm pcol p-5 ">
                                 <Link className='p-link' to={`/product/${p.product_id}`}>
                                 <div className="card" data-aos='zoom-in-up'>
                                     <img className="card-img-top" src={require(p.main_image)} />
                                     <div className='card-body'>
                                         <h4 className="card-title">{p.product_name}</h4>
                                         <div className="card-text">$<span>{p.old_price}</span></div>
                                         <button className="btn btn-dark m-3">Add to cart <i className='bx bxs-cart-add'></i></button>
                                     </div>
                                 </div>
                                 </Link>
                             </div>
                        ))}

                    </div>
                </div>
            </div>











        </div>}

                                <OpenCart />
        </div>
    )
}