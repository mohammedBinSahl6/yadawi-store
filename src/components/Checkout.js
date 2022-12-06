export default function Checkout(){
    
    
    
    return(
        <div className="checkout starter">
            <div className="row p-5">
                <h1 className="text-center">Checkout Now</h1>
            </div>

            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-sm-6">
                        <div className="cart-review p-5">
                            <h2 className="h2">Cart Reveiw <i class='bx bxs-cart-alt'></i> </h2>
                            <ul className="list-group">
                                <li className="list-group-item p-3">
                                    <h4 className="name-reveiw">Product some</h4><h3>-----$44.00</h3>
                                </li>
                                <li className="list-group-item p-3">
                                    <h4 className="name-reveiw">Product some</h4><h3>-----$44.00</h3>
                                </li>

                            </ul>
                            <div className="row p-5"> 
                               <div className="f-holder">
                               <h2 className="h2">Total :<h4>88.00</h4> </h2>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 checkout-info">
                        <div className="row p-5">
                            <h2 className="text-center">Complete your information</h2>
                        </div>
                        <div className="row p-5">
                            <form>
                                <div className="mb-3 mt-3">
                                    <label className="form-label"><i class='bx bxs-user-check'></i>Full Name</label>
                                    <input className="form-control" placeholder="Please Your Full name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label"><i class='bx bxs-location-plus'></i>Address</label>
                                    <input className="form-control" placeholder="Giza/Cairo ...ex" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label"><i class='bx bx-phone'></i>Phone Number</label>
                                    <input className="form-control" type='tel' placeholder="+123-456-789" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label"><i class='bx bx-credit-card'></i>Creidet Card</label>
                                    <input className="form-control" type='number' placeholder="123-456-789" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label"><i class='bx bxs-discount' ></i>Discount Code</label>
                                    <input className="form-control" type='text' placeholder="xxxx" />
                                </div>
                                <button className="btn btn-dark m-3">Buy the items</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}