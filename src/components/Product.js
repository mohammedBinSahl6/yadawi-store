import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import product from '../imgs/product.jpg'
export default function Product(){
    const [count , setCount] = useState(1);
    const param = useParams();
    console.log(param)

    function increace(){
        setCount(count +1)
    }
    
    function decreace(){
        setCount(count -1)
    }
    
    
    return(
        <div className="starter product-details">
            <div className="row">
                <div className="col-sm-6 p-5">
                    <img className="img-fluid" src={product} />
                </div>
                <div className='col-sm-6 p-5'>
                    <h1 className='product-name'>Proda</h1>
                    <div className='stars'>
                    <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>

                    </div>
                    <h3>$55.0</h3>
                    <div className='d-flex counter'>
                       <button className='btn' onClick={increace}><i class='bx bx-plus-circle counter-btn'></i></button>
                        <h4 className='display-6'>{count}</h4>
                      <button className='btn'  disabled={count ==1}  onClick={decreace}>  <i class='bx bx-minus-circle counter-btn'></i></button>
                    </div>
                    <p className='p-3'>Thousands of High Quality Product Descriptions in Bulk using AI. AI Writer for E-Commerce Product Descriptions and Marketing Content. Read Blog. View Products. See Pricing. Highlights: Help Center Available, On Request Demo Available, Free Trial Available</p>
                    <button className='btn btn-dark'>Add to cart  <i class='bx bxs-cart-add'></i></button>
                    <Link to='/shop'className='p-link p-3' >Keep Shopping</Link>
                </div>
                
            </div>
        </div>
    )
}