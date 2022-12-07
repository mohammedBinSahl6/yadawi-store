import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../App'
import proda from '../imgs/product.jpg'

export default function Cart(){
    const {cart,setCart}= useContext(CartContext)



    function increace(id){
     const selected= cart.find(item=>item.product.id === id)
      selected.qty++
       const filtered =  cart.filter(item=>item.product.id !== id)
       console.log(filtered)
       setCart([...filtered,selected])
    }
    
    function decreace(id){
        const selected= cart.find(item=>item.product.id === id)
      selected.qty--
       const filtered =  cart.filter(item=>item.product.id !== id)
       console.log(filtered)
       setCart([...filtered,selected])
    }

    function removeItem(id){
        const filtered =  cart.filter(item=>item.product.id !== id)
        console.log(filtered)
        setCart(filtered)
    }

    useEffect(()=>{
        console.log(cart)
    },[])
    return (
        <div className="cart starter" >
            <div className='row'>
                <h1 className="text-center">My Cart <i class='bx bxs-cart-alt'></i></h1>
            </div>

            <div className="container-fluid p-5">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                       {cart?.map((cartP, index)=>(
                         <tr key={index}>
                         <td><img className='img-pro' src={cartP.product.main_image}></img></td>
                         <td>{cartP?.product.product_name}</td>
                         <td>{cartP?.product.old_price}</td>
                         <td><div className='d-flex f-holder counter' >
                    <button className='btn' onClick={()=>increace(cartP.product.id)} disabled={cartP.qty==cartP.product.qty} ><i class='bx bx-plus-circle counter-btn'></i></button>
                     <h4 className='display-6'>{cartP.qty}</h4>
                   <button className='btn' onClick={()=>decreace(cartP.product.id)} disabled={cartP.qty==1} >  <i class='bx bx-minus-circle counter-btn'></i></button>
                 </div>
                 </td>
                         <td>{cartP.qty * cartP.product.old_price}</td>
                         <td><i className='bx bxs-trash-alt text-danger'onClick={()=>removeItem(cartP.id)}></i></td>
                     </tr>
                       ))}

                      
                    </tbody>
                </table>


                <div className='row p-5'>
                    <div className='f-holder'>
                        <Link to='/checkout' className='btn btn-dark'>Checkout</Link>
                    </div>
                </div>
            </div>









        </div>
    )
}