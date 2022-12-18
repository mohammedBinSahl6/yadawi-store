import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../App';
import Load from './Load';
import OpenCart from './OpenCart';
export default function Product(){

const {cart,setCart}=useContext(CartContext)
    const[adedToCart, setAddedToCart]= useState(false)
    const [count , setCount] = useState(1);
    const[product, setProduct]= useState({ });
    const [isLoading, setIsLoading] = useState(true)
    const param = useParams();
    console.log(param);
    const selectedItem= cart.find(item=>item.product.product_id === product.product_id)

    function increace(){
        setCount(count +1)
        setProduct({...product, count : count })
    }
    
    function decreace(){
        setCount(count -1)
        setProduct({...product, count :count})
    }

      const getProduct = ()=>{
            let requestOption = {
                method : 'GET'
            }
            let apiURL = process.env.REACT_APP_BASE_API_URL
            fetch(`${apiURL}/products/${param.id}`,requestOption).then(response => {
                return response.json()
            }).then(result =>{
                const {product} = result;
                    setProduct(product)
                console.log('re',result)
                setIsLoading(false)
            }).catch(error =>{
                console.log(error)
                setIsLoading(false)

            })
    
        }
        const myref= useRef()
        useEffect(()=>{
            myref.current?.scrollIntoView({behavior: 'smooth'});
            getProduct()
            console.log('q' , product.qty)
        },[])
      
       
        const AddToCart=()=>{
            
            console.log(product)
            if (adedToCart===false) setAddedToCart(true)
            
            if(cart.find(item=>item.product.product_id === product.product_id))
            {
                const selected= cart.find(item=>item.product.product_id === product.product_id)
                selected.count += count
                
                console.log('pc',product.count)
                const filtered =  cart.filter(item=>item.product.product_id !== product.product_id)
                console.log('filterd ',filtered)
                setCart([...filtered,selected])
                console.log('selected' , selected)
                
               
            }
            else{
                
                 setCart([...cart,{product:product,count:count}])
                

            }
            
           
           
        }

       
    return(
        <div className="starter product-details" ref={myref}>
            
               {isLoading ? <Load/> 
               :
               <div className="row">
                {adedToCart? <div className='added-msg p-3'>
                 <p className='text-center text-white'>Added to Cart <i className='bx bxs-cart-download' ></i></p>
                </div> : ()=>setAddedToCart(false)}
               <div className="col-sm-6 p-5">
                    <img className="img-fluid img-product-detail" src={product.main_image} />
                </div>
                <div className='col-sm-6 p-5'>
                    <h1 className='product-name'>{product?.product_name||'braclet 1'}</h1>
                    <div className='stars'>
                    <i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star-half'></i>

                    </div>
                    <h3>${product?.old_price||'20'}</h3>
                    <div className='d-flex counter'>
                       <button className='btn' onClick={increace} disabled={product.qty ==count}><i className='bx bx-plus-circle counter-btn'></i></button>
                        <h4 className='display-6'>{count}</h4>
                      <button className='btn'  disabled={count==1}  onClick={decreace}>  <i className='bx bx-minus-circle counter-btn'></i></button>
                    </div>
                    <p className='p-3'>{product?.product_desc||'lorem ipsum asbjkbasjkfasjkfhasklfnasklmfklasfmasklfmasklfaskfmaskfmaksfmnak.sfmnak.sfnask.fmaskfmaksfma;lsfm;lasfklas'}</p>
                    <button className='btn btn-dark'
                    onClick={AddToCart} onMouseLeave={()=>setAddedToCart(false)}
                    
                    >Add to cart  <i className='bx bxs-cart-add'></i></button>
                    <Link to='/shop'className='link p-3' >Keep Shopping</Link>
                </div>
                </div>
                
                }
                                    <OpenCart />
        </div>
    )
}