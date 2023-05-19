/* eslint-disable jsx-a11y/anchor-is-valid */
import '../css/About.css';

import group from '../imgs/Group-rafiki.png';
import man from '../imgs/man.png';

const About = () => {
	return (
		<div>
			<>
				<></>
				<div className='about-section starter'>
					<h1 className='text-center mt-5 main-title'>About Us</h1>
					<h2
						data-aos='fade-down'
						data-aos-duration='1000'
						className='text-center  welcome-about'
					>
						{' '}
						Welcome To
						<h1 className='text-center'> Yadawi store</h1>{' '}
					</h2>
				</div>
				<div className='company'>
					<div className='img-about'>
						<img src={group} alt='' />
					</div>
					<div className='company-info p-3'>
						<span className='display-4 text-dark'>Products</span>{' '}
						<span className='our'>For Everyone</span>
						<p>
							<b>Yadawi store</b> is a e-commerce website dedicated for sharing stock
							.
						</p>
					</div>
				</div>
					</>
		</div>
	);
};
export default About;
