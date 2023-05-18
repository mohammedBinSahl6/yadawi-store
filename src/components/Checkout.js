/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../App';

export default function Checkout() {
	const [total, setTotal] = useState(0);
	const { cart } = useContext(CartContext);

	useEffect(() => {
		cart.forEach((p) => setTotal(p.product.old_price * p.count));
	}, []);

	return (
		<div className='checkout starter'>
			<div className='row p-5'>
				<h1 className='text-center'>Checkout Now</h1>
			</div>

			<div className='container-fluid'>
				<div className='row p-5'>
					<div className='col-sm-6'>
						<div className='cart-review p-5'>
							<h2 className='h2'>
								Cart Reveiw <i className='bx bxs-cart-alt'></i>{' '}
							</h2>
							<ul className='list-group'>
								{cart.map((p, index) => (
									<li key={index} className='list-group-item p-3'>
										<h4 className='name-reveiw'>
											{p.count}-{p.product.product_name}
										</h4>
										<h3>-----${p.product.old_price}</h3>
									</li>
								))}
							</ul>
							<div className='row p-5'>
								<div className='f-holder'>
									<h2 className='h2 text-danger'>Total :{total} </h2>
								</div>
							</div>
						</div>
					</div>
					<div className='col-sm-6 checkout-info'>
						<div className='row p-5'>
							<h2 className='text-center'>Complete your information</h2>
						</div>
						<div className='row p-5'>
							<form>
								<div className='mb-3 mt-3'>
									<label className='form-label'>
										<i className='bx bxs-user-check'></i>Full Name
									</label>
									<input
										className='form-control'
										placeholder='Please Your Full name'
									/>
								</div>
								<div className='mb-3 mt-3'>
									<label className='form-label'>
										<i className='bx bxs-location-plus'></i>Address
									</label>
									<input
										className='form-control'
										placeholder='Giza/Cairo ...ex'
									/>
								</div>
								<div className='mb-3 mt-3'>
									<label className='form-label'>
										<i className='bx bx-phone'></i>Phone Number
									</label>
									<input
										className='form-control'
										type='tel'
										placeholder='+123-456-789'
									/>
								</div>
								<div className='mb-3 mt-3'>
									<label className='form-label'>
										<i className='bx bx-credit-card'></i>Creidet Card
									</label>
									<input
										className='form-control'
										type='number'
										placeholder='123-456-789'
									/>
								</div>
								<div className='mb-3 mt-3'>
									<label className='form-label'>
										<i className='bx bxs-discount'></i>Discount Code
									</label>
									<input
										className='form-control'
										type='text'
										placeholder='xxxx'
									/>
								</div>
								<button className='btn btn-dark m-3'>Buy the items</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
