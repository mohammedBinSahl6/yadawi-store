
import { Link } from 'react-router-dom'
import product from '../imgs/product.jpg'
export default function Shop(){
    const products=[{
        id:1,
        name:"products 1",
        price:150
    },{
        id:2,
        name:"products 2",
        price:150
    },
    {
        id:3,
        name:"products 3",
        price:150
    },
    {
        id:4,
        name:"products 4",
        price:150
    },{
        id:5,
        name:"products 5",
        price:150
    },{
        id:6,
        name:"products 6",
        price:150
    },{
        id:7,
        name:"products 7",
        price:150
    },{
        id:8,
        name:"products 8",
        price:150
    },
]
    return (
        <div className="shop starter " id='top'>
            <div className="row p-5">
                <h1 className="text-center">Explore our items</h1>
            </div>

            <div className="row">
                
                <div className='col-sm products-body'>
                    <div className='row'>
                        {products.map((p ,index)=>(
                                 <div key={index} className="col-sm pcol p-5 ">
                                 <Link className='p-link' to={`/product/${p.id}`}>
                                 <div className="card" data-aos='zoom-in-up'>
                                     <img className="card-img-top" src={product} />
                                     <div className='card-body'>
                                         <h4 className="card-title">{p.name}</h4>
                                         <div className="card-text">$<span>{p.price}</span></div>
                                         <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                                     </div>
                                 </div>
                                 </Link>
                             </div>
                        ))}
{/*                    
                    <div className="col-sm pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='300'>
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div> <div className="col-sm pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div> <div className="col-sm pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div> <div className="col-sm pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div> <div className="col-sm pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>











        </div>
    )
}