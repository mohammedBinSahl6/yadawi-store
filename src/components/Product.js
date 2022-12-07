import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../App';
import product_img from '../imgs/product.jpg'
import Load from './Load';
export default function Product(){

const {cart,setCart}=useContext(CartContext)

    const [count , setCount] = useState(1);
    const[product, setProduct]= useState({id:1,name:'test',qty:5, count : 1 ,price : 55});
    const [isLoading, setIsLoading] = useState(true)
    const param = useParams();
    console.log(param)

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
                console.log(result)
                setIsLoading(false)
            }).catch(error =>{
                console.log(error)
                setIsLoading(false)

            })
    
        }
        useEffect(()=>{
            getProduct()
        },[])
        const AddToCart=()=>{
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
    
    return(
        <div className="starter product-details">
            
               {isLoading ? <Load/> 
               :
               <div className="row">
               <div className="col-sm-6 p-5">
                    <img className="img-fluid" src={product.main_image} />
                </div>
                <div className='col-sm-6 p-5'>
                    <h1 className='product-name'>{product?.product_name||'braclet 1'}</h1>
                    <div className='stars'>
                    <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>

                    </div>
                    <h3>${product?.old_price||'20'}</h3>
                    <div className='d-flex counter'>
                       <button className='btn' onClick={increace} disabled={product.qty ==count}><i class='bx bx-plus-circle counter-btn'></i></button>
                        <h4 className='display-6'>{count}</h4>
                      <button className='btn'  disabled={count==1}  onClick={decreace}>  <i class='bx bx-minus-circle counter-btn'></i></button>
                    </div>
                    <p className='p-3'>{product?.product_desc||'lorem ipsum asbjkbasjkfasjkfhasklfnasklmfklasfmasklfmasklfaskfmaskfmaksfmnak.sfmnak.sfnask.fmaskfmaksfma;lsfm;lasfklas'}</p>
                    <button className='btn btn-dark'
                    onClick={AddToCart}
                    >Add to cart  <i class='bx bxs-cart-add'></i></button>
                    <Link to='/shop'className='p-link p-3' >Keep Shopping</Link>
                </div>
                </div>
                
                }
            
        </div>
    )
}