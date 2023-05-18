import { Link } from 'react-router-dom';
import added from '../imgs/added-cart.webp';
export default function AddedModal() {
	return (
		<div className='added-card p-3'>
			<div className='row pt-5'>
				<h3 className='text-center'>Added To Cart Successfully !</h3>
			</div>
			<div className='f-holder pt-3'>
				<img className='added-cart-icon' src={added} />
			</div>
			<div className='f-holder py-3'>
				<Link to='/shop' className='btn btn-dark m-3'>
					Keep Shopping
				</Link>
				<Link to='/cart' className='btn btn-dark m-3'>
					Go to Cart
				</Link>
			</div>
		</div>
	);
}
