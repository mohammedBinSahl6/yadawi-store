import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import product from '../imgs/product.jpg'
import Load from "./Load";
import landImg from '../imgs/land.svg'
import step1 from '../imgs/craft.svg'
import step2 from '../imgs/sell.svg'
import step3 from '../imgs/buseniss.svg'
import OpenCart from "./OpenCart";
export default function HomePage(){
    const [newProductsHome, setNewProducts] = useState([]);
    const [mostOrderedProducts, setMostOrderedProducts] = useState([]);
    const[isLoading, setIsLoading] = useState(true)
    
   
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

       
    const myref= useRef()
    useEffect(()=>{
        myref.current?.scrollIntoView({behavior: 'smooth'});
        getProducts()
    },[])
    return (
        <div ref={myref}>
            <div className="container-fluid text-white starter " id="land">
                <img className="land-img" src={landImg} />
                <div className="row headers-holder">
                    <h1 className=" display-1 text-center text-white" data-aos='fade-up' data-aos-duration='2000'>Welcome to</h1>
                    <h3 className="text-center head " data-aos="fade-up"  data-aos-duration='2000' data-aos-delay='500' >Yadawi Store</h3>
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

            <div className="container-fluid steps-section">
                <div className="row p-5">
                    <div className="col-sm-6 p-3">
                       <div className="f-holder">
                       <img className="img-step" src={step1} data-aos='zoom-in-up' />
                       </div>
                    </div>
                    <div className="col-sm-6 p-3">
                        <h3 className="" data-aos='fade-up'>Be creative in your craft</h3>
                        <p data-aos='fade-down' data-aos-delay='500'>Your handmade is your product. Show the world somthing about your culture.</p>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-sm-6 p-3">
                        <h3 className="" data-aos='fade-up'>Sell your product</h3>
                        <p data-aos='fade-down' data-aos-delay='500'>Sell your creatives with best price , and earn money from your handmades .</p>
                    </div>
                    <div className="col-sm-6 p-3">
                        <img className="img-step" src={step2} data-aos='zoom-in-up' />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-sm-6 p-3">
                        <img className="img-step" src={step3} data-aos='zoom-in-up' />
                    </div>
                    <div className="col-sm-6 p-3">
                        <h3 className="" data-aos='fade-up'>Start your own Business</h3>
                        <p data-aos='fade-down' data-aos-delay='500'>Explore the other cultures and increace your sells and your business will comes to you!</p>
                    </div>
                    </div>
                    <hr />
            </div>

            <div className="container-fluid" id="products">
                <div className="row p-3">
                    <h1 className="text-center">Our Most Ordered Products</h1>
                </div>
                {isLoading ? <Load /> 
                :
                    
                    <div className="row pt-3">
                   {mostOrderedProducts.map((p,index)=>(
                     <div key={index} className="col pcol p-5 ">
                        <Link className="p-link"  to={`/product/${p.product_id}`}>
                        <div className="card" data-aos='zoom-in-up'>
                         <img className="card-img-top" src={p.main_image} />
                         <div className='card-body'>
                             <h4 className="card-title">{p.product_name}</h4>
                             <div className="card-text">${p.old_price}</div>
                             <button className="btn btn-dark m-3" >Veiw more details</button>
                         </div>
                     </div>
                        </Link>
                     
                 </div>
                   ))}
                   

                </div>}
               { mostOrderedProducts &&
               <div className="f-holder">
                    <Link to='/shop#top' className="btn btn-dark my-3"  data-aos='zoom-in-up' data-aos-delay='300'>Show more items</Link>
                </div>
                }
        <hr />
                <div className="container-fluid" id="new-products">
                    <div className="row p-3 mt-5">
                        <h1 className="text-center">Our New Products</h1>
                    </div>
                  { isLoading ? <Load /> :
                  
                  <div className="row p-5">
                       
                      { newProductsHome.length===0 ? <div className="h1 text-center p-3">Coming soon ...</div>
                      :

                        newProductsHome.map((p,index)=>(
                           <div key={index} className="col pcol p-5">
                           <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                               <img className="card-img-top" src={product} />
                               <div className='card-body'>
                                   <h4 className="card-title">{p.product_name}</h4>
                                   <div className="card-text">${p.old_price}</div>
                                   <button className="btn btn-dark m-3" >Veiw more details</button>
                                </div>
                           </div>
                       </div>
                        ))}
                    </div>}
                </div>
            </div>


                            <OpenCart />



        </div>
    )
}