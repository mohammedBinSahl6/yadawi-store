import proda from '../imgs/product.jpg'

export default function Cart(){
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
                        <tr>
                            <td><img className='img-pro' src={proda}></img></td>
                            <td>Proda</td>
                            <td>55.0</td>
                            <td><div className='d-flex f-holder counter' >
                       <button className='btn' ><i class='bx bx-plus-circle counter-btn'></i></button>
                        <h4 className='display-6'>1</h4>
                      <button className='btn'  >  <i class='bx bx-minus-circle counter-btn'></i></button>
                    </div>
                    </td>
                            <td>55.0</td>
                            <td><i class='bx bxs-trash-alt text-danger'></i></td>
                        </tr>

                        <tr>
                            <td><img className='img-pro' src={proda}></img></td>
                            <td>Proda</td>
                            <td>55.0</td>
                            <td><div className='d-flex f-holder counter'>
                       <button className='btn' ><i class='bx bx-plus-circle counter-btn'></i></button>
                        <h4 className='display-6'>1</h4>
                      <button className='btn'  >  <i class='bx bx-minus-circle counter-btn'></i></button>
                    </div>
                    </td>
                            <td>55.0</td>
                            <td><i class='bx bxs-trash-alt text-danger'></i></td>
                        </tr>
                    </tbody>
                </table>


                <div className='row p-5'>
                    <div className='f-holder'>
                        <button className='btn btn-dark'>Checkout</button>
                    </div>
                </div>
            </div>









        </div>
    )
}