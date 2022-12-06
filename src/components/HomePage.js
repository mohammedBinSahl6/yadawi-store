import { Link } from "react-router-dom";
import product from '../imgs/product.jpg'

export default function HomePage(){
    return (
        <div>
            <div className="container-fluid text-white starter" id="land">
                <div className="row p-5">
                    <h1 className=" display-1 text-center">Welcome to</h1>
                    <h3 className="text-center">Yadawi Store</h3>
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
                    <h1 className="text-center">Our Products</h1>
                </div>
                <div className="row pt-3">
                    <div className="col pcol p-5 ">
                        <div className="card" data-aos='zoom-in-up'>
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='300'>
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col pcol p-5">
                        <div className="card"  data-aos='zoom-in-up' data-aos-delay='600' >
                            <img className="card-img-top" src={product} />
                            <div className='card-body'>
                                <h4 className="card-title">Proda</h4>
                                <div className="card-text">$55.0</div>
                                <button className="btn btn-dark m-3">Add to cart <i class='bx bxs-cart-add'></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="f-holder">
                    <Link to='/shop#top' className="btn btn-dark my-3"  data-aos='zoom-in-up' data-aos-delay='300'>Show more items</Link>
                </div>
            </div>






        </div>
    )
}