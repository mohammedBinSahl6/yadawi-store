import { Link } from 'react-router-dom';

export default function OpenCart() {
	return (
		<Link className='open-cart' to='/cart'>
			<i className='bx bxs-shopping-bag-alt'></i>
		</Link>
	);
}
