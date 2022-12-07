import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import product from '../imgs/product.jpg'
import Load from "./Load";

export default function HomePage(){
    const [newProductsHome, setNewProducts] = useState([]);
    const [mostOrderedProducts, setMostOrderedProducts] = useState([]);
    const[isLoading, setIsLoading] = useState(true)
    const{cart, setCart} = useContext(CartContext)
    const [count , setCount] = useState(1);
        const getProducts = ()=>{
            let requestOption = {
                method : 'GET'
            }
            let apiURL = process.env.REACT_APP_BASE_API_URL
            fetch(`${apiURL}/home`,requestOption).then(response => {
                console.log(response)
                return response.json()
            }).then(result =>{
                const {new_5_products,most_ordered_products} = result;
                setNewProducts(new_5_products)
                setMostOrderedProducts(most_ordered_products)
                console.log(result)
                setIsLoading(false)
            }).catch(error =>{
                console.log(error)
                setIsLoading(false)
               
            })
    
        }

        const AddToCart=(product)=>{
            console.log(product)
            if(cart.find(item=>item.id === product.id))
            {
                const selected= cart.find(item=>item.id === product.id)
                selected.count = product.count + selected.count
                const filtered =  cart.filter(item=>item.id !== product.id)
                console.log(filtered)
                setCart([...filtered,selected])
            }else{
                setCart([...cart,{product:product,qty:count}])
            }
           
        }
    const myref= useRef()
    useEffect(()=>{
        myref.current?.scrollIntoView({behavior: 'smooth'});
        getProducts()
    },[])
    return (
        <div ref={myref}>
            <div className="container-fluid text-white starter" id="land">
                <div className="row p-5">
                    <h1 className=" display-1 text-center">Welcome to</h1>
                    <h3 className="text-center head">Yadawi Store</h3>
                </div>
                <div className="row p-5">
                    <div className="f-holder">
                        <Link to="/login" className="btn btn-light">Login Now</Link>
                    </div>
                    <h3 className="text-center p-3">OR</h3>
                    <div className="f-holder">
                        <Link to='/signup' className="btn btn-outline-light my-3">Sign up</Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid" id="products">
                <div className="row p-5">
                    <h1 className="text-center">Our Most Ordered Products</h1>
                </div>
                {isLoading ? <Load /> 
                :
                    
                    <div className="row pt-3">
                   {mostOrderedProducts.map((p,index)=>(
                     <div key={index} className="col pcol p-5 ">
                     <div className="card" data-aos='zoom-in-up'>
                         <img className="card-img-top" src={p.main_image} />
                         <div className='card-body'>
                             <h4 className="card-title">{p.product_name}</h4>
                             <div className="card-text">${p.old_price}</div>
                             <button className="btn btn-dark m-3" onClick={()=>AddToCart(p)}>Add to cart <i className='bx bxs-cart-add'></i></button>
                         </div>
                     </div>
                 </div>
                   ))}
                   

                </div>}
               { mostOrderedProducts &&
               <div className="f-holder">
                    <Link to='/shop#top' className="btn btn-dark my-3"  data-aos='zoom-in-up' data-aos-delay='300'>Show more items</Link>
                </div>
                }

                <div className="container-fluid" id="new-products">
                    <div className="row p-5">
                        <h1 className="text-center">Our New Ptoducts</h1>
                    </div>
                  { isLoading ? <Load /> :
                  
                  <div className="row p-5">
                        {newProductsHome.map((p,index)=>(
                           <div key={index} className="col pcol p-5">
                           <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                               <img className="card-img-top" src={product} />
                               <div className='card-body'>
                                   <h4 className="card-title">{p.product_name}</h4>
                                   <div className="card-text">${p.old_price}</div>
                                   <button className="btn btn-dark m-3" onClick={()=>AddToCart(p)}>Add to cart <i className='bx bxs-cart-add'></i></button>
                                </div>
                           </div>
                       </div>
                        ))}
                    </div>}
                </div>
            </div>






        </div>
    )
}