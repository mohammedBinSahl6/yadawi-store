const FAQ = () => {
	return (
		<div className='starter'>
			<section className='faq-ask'>
				<h3 className='text-center mb-4 pb-2 fw-bold'>FAQ</h3>
				<p className='text-center mb-5'>
					Find the answers for the most frequently asked questions below
				</p>
				<div className='row'>
					<div className='col-md-6 col-lg-4 mb-4'>
						<h6 className='mb-3 '>
							<i className='far fa-paper-plane  pe-2' /> Payment methods are not
							included?
						</h6>
						<p>
							<strong>
								<u>Absolutely!</u>
							</strong>{' '}
							We work with top payment companies which guarantees your safety and
							security. All billing information is stored on our payment processing
							partner.
						</p>
					</div>
					<div className='col-md-6 col-lg-4 mb-4'>
						<h6 className='mb-3 '>
							<h5 className=''>
								If I want to cancel the subscription, will I be charged a fee?
							</h5>
						</h6>
						<p>
							<strong>
								<u>Yes, it is possible!</u>
							</strong>{' '}
							You can cancel your subscription anytime in your account. Once the
							subscription is cancelled, you will not be charged next month.
						</p>
					</div>
					<div className='col-md-6 col-lg-4 mb-4'>
						<h6 className='mb-3 y'>
							<h5> question?</h5>
						</h6>
						<p>
							Currently, we only offer monthly subscription. You can upgrade or cancel
							your monthly account at any time with no further obligation.
						</p>
					</div>
					<div className='col-md-6 col-lg-4 mb-4'>
						<h6 className='mb-3 y'>
							<i className='fas fa-rocket  pe-2' /> A simple question?
						</h6>
						<p>
							Yes. Go to the billing section of your dashboard and update your payment
							information.
						</p>
					</div>
					<div className='col-md-6 col-lg-4 mb-4'>
						<h6 className='mb-3 '>
							<h5> Money back?</h5>
						</h6>
						<p>
							<strong>
								<u>Unfortunately no</u>.
							</strong>{' '}
							We do not issue full or partial refunds for any reason.
						</p>
					</div>
					<div className='col-md-6 col-lg-4 mb-4'>
						<h6 className='mb-3 y'>
							<i className='fas fa-book-open y pe-2' /> Another question that is
							longer than usual
						</h6>
						<p>
							Of course! We’re happy to offer a free plan to anyone who wants to try
							our service.
						</p>
					</div>
				</div>
			</section>
			{/*Section: FAQ*/}

			<div className='list-group learn-more'>
				<a
					href='#shortExampleAnswer1collapse'
					data-mdb-toggle='collapse'
					aria-expanded='false'
					aria-controls='shortExampleAnswer1collapse'
					className='list-group-item list-group-item-action'
				>
					<div className='d-flex w-100 justify-content-between'>
						<h5 className='mb-1'>Question 1</h5>
					</div>
					<p className='mb-1'>Short &amp; concise version of the answer.</p>
					<small>
						<u>Learn more</u>
					</small>
				</a>
				<a
					href='#shortExampleAnswer2collapse'
					data-mdb-toggle='collapse'
					aria-expanded='false'
					aria-controls='shortExampleAnswer1collapse'
					className='list-group-item list-group-item-action'
				>
					<div className='d-flex w-100 justify-content-between'>
						<h5 className='mb-1'>Question 2</h5>
					</div>
					<p className='mb-1'>Short &amp; concise version of the answer.</p>
					<small className='text-muted'>
						<u>Learn more</u>
					</small>
					{/* Collapsed content */}
				</a>
				<a
					href='#shortExampleAnswer3collapse'
					data-mdb-toggle='collapse'
					aria-expanded='false'
					aria-controls='shortExampleAnswer1collapse'
					className='list-group-item list-group-item-action'
				>
					<div className='d-flex w-100 justify-content-between'>
						<h5 className='mb-1'>Question 3</h5>
					</div>
					<p className='mb-1'>Short &amp; concise version of the answer.</p>
					<small className='text-muted'>
						<u>Learn more</u>
					</small>
					{/* Collapsed content */}
				</a>
			</div>

			<section className='py-4 accordion-list '>
				<div className='container border rounded'>
					<div className='row my-5 border rounded'>
						<div className='col-md-6 mx-auto text-center '>
							<h2>Frequently Asked Questions</h2>
							<p>
								A lot of people don't appreciate the moment until it’s passed. I'm
								not trying my hardest, and I'm not trying to do{' '}
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-10 mx-auto'>
							<div className='accordion' id='accordionRental'>
								<div className='accordion-item mb-3'>
									<h5 className='accordion-header' id='headingOne'>
										<button
											className='accordion-button active bg-dark text-white border-bottom font-weight-bold'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseOne'
											aria-expanded='true'
											aria-controls='collapseOne'
										>
											How do I order?
											<i className='collapse-close fa fa-plus text-xs pt-1 position-absolute end-0' />
											<i className='collapse-open  fa fa-minus text-xs pt-1 position-absolute end-0' />
										</button>
									</h5>
									<div
										id='collapseOne'
										className='accordion-collapse collapse show'
										aria-labelledby='headingOne'
										data-bs-parent='#accordionRental'
									>
										<div className='accordion-body text-sm opacity-8'>
											We’re not always in the position that we want to be at.
											We’re constantly growing. We’re constantly making
											mistakes. We’re constantly trying to express ourselves
											and actualize our dreams. If you have the opportunity to
											play this game of life you need to appreciate every
											moment. A lot of people don’t appreciate the moment
											until it’s passed.
										</div>
									</div>
								</div>
								<div className='accordion-item mb-3'>
									<h5 className='accordion-header' id='headingOne'>
										<button
											className='accordion-button  bg-dark text-white border-bottom font-weight-bold'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseOne'
											aria-expanded='true'
											aria-controls='collapseOne'
										>
											How do I order?
											<i className='collapse-close fa fa-plus text-xs pt-1 position-absolute end-0' />
											<i className='collapse-open fa fa-minus text-xs pt-1 position-absolute end-0' />
										</button>
									</h5>
									<div
										id='collapseOne'
										className='accordion-collapse collapse '
										aria-labelledby='headingOne'
										data-bs-parent='#accordionRental'
									>
										<div className='accordion-body text-sm opacity-8'>
											We’re not always in the position that we want to be at.
											We’re constantly growing. We’re constantly making
											mistakes. We’re constantly trying to express ourselves
											and actualize our dreams. If you have the opportunity to
											play this game of life you need to appreciate every
											moment. A lot of people don’t appreciate the moment
											until it’s passed.
										</div>
									</div>
								</div>
								<div className='accordion-item mb-3'>
									<h5 className='accordion-header' id='headingTwo'>
										<button
											className='accordion-button bg-dark text-white border-bottom font-weight-bold'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseTwo'
											aria-expanded='false'
											aria-controls='collapseTwo'
										>
											How can i make the payment?
											<i className='collapse-close fa fa-plus text-xs pt-1 position-absolute end-0' />
											<i className='collapse-open fa fa-minus text-xs pt-1 position-absolute end-0' />
										</button>
									</h5>
									<div
										id='collapseTwo'
										className='accordion-collapse collapse'
										aria-labelledby='headingTwo'
										data-bs-parent='#accordionRental'
									>
										<div className='accordion-body text-sm opacity-8'>
											It really matters and then like it really doesn’t
											matter. What matters is the people who are sparked by
											it. And the people who are like offended by it, it
											doesn’t matter. Because it's about motivating the doers.
											Because I’m here to follow my dreams and inspire other
											people to follow their dreams, too.
											<br />
											We’re not always in the position that we want to be at.
											We’re constantly growing. We’re constantly making
											mistakes. We’re constantly trying to express ourselves
											and actualize our dreams. If you have the opportunity to
											play this game of life you need to appreciate every
											moment. A lot of people don’t appreciate the moment
											until it’s passed.
										</div>
									</div>
								</div>
								<div className='accordion-item mb-3'>
									<h5 className='accordion-header' id='headingThree'>
										<button
											className='accordion-button bg-dark text-white border-bottom font-weight-bold'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseThree'
											aria-expanded='false'
											aria-controls='collapseThree'
										>
											How much time does it take to receive the order?
											<i className='collapse-close fa fa-plus text-xs pt-1 position-absolute end-0' />
											<i className='collapse-open fa fa-minus text-xs pt-1 position-absolute end-0' />
										</button>
									</h5>
									<div
										id='collapseThree'
										className='accordion-collapse collapse'
										aria-labelledby='headingThree'
										data-bs-parent='#accordionRental'
									>
										<div className='accordion-body text-sm opacity-8'>
											The time is now for it to be okay to be great. People in
											this world shun people for being great. For being a
											bright color. For standing out. But the time is now to
											be okay to be the greatest you. Would you believe in
											what you believe in, if you were the only one who
											believed it? If everything I did failed - which it
											doesn't, it actually succeeds - just the fact that I'm
											willing to fail is an inspiration. People are so scared
											to lose that they don't even try. Like, one thing people
											can't say is that I'm not trying, and I'm not trying my
											hardest, and I'm not trying to do the best way I know
											how.
										</div>
									</div>
								</div>
								<div className='accordion-item mb-3'>
									<h5 className='accordion-header' id='headingFour'>
										<button
											className='accordion-button bg-dark text-white border-bottom font-weight-bold'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseFour'
											aria-expanded='false'
											aria-controls='collapseFour'
										>
											Can I resell the products?
											<i className='collapse-close fa fa-plus text-xs pt-1 position-absolute end-0' />
											<i className='collapse-open fa fa-minus text-xs pt-1 position-absolute end-0' />
										</button>
									</h5>
									<div
										id='collapseFour'
										className='accordion-collapse collapse'
										aria-labelledby='headingFour'
										data-bs-parent='#accordionRental'
									>
										<div className='accordion-body text-sm opacity-8'>
											I always felt like I could do anything. That’s the main
											thing people are controlled by! Thoughts- their
											perception of themselves! They're slowed down by their
											perception of themselves. If you're taught you can’t do
											anything, you won’t do anything. I was taught I could do
											everything.
											<br />
											<br />
											If everything I did failed - which it doesn't, it
											actually succeeds - just the fact that I'm willing to
											fail is an inspiration. People are so scared to lose
											that they don't even try. Like, one thing people can't
											say is that I'm not trying, and I'm not trying my
											hardest, and I'm not trying to do the best way I know
											how.
										</div>
									</div>
								</div>
								<div className='accordion-item mb-3'>
									<h5 className='accordion-header' id='headingFifth'>
										<button
											className='accordion-button bg-dark text-white border-bottom font-weight-bold'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseFifth'
											aria-expanded='false'
											aria-controls='collapseFifth'
										>
											Where do I find the shipping details?
											<i className='collapse-close fa fa-plus text-xs pt-1 position-absolute end-0' />
											<i className='collapse-open fa fa-minus text-xs pt-1 position-absolute end-0' />
										</button>
									</h5>
									<div
										id='collapseFifth'
										className='accordion-collapse collapse'
										aria-labelledby='headingFifth'
										data-bs-parent='#accordionRental'
									>
										<div className='accordion-body text-sm opacity-8'>
											There’s nothing I really wanted to do in life that I
											wasn’t able to get good at. That’s my skill. I’m not
											really specifically talented at anything except for the
											ability to learn. That’s what I do. That’s what I’m here
											for. Don’t be afraid to be wrong because you can’t learn
											anything from a compliment. I always felt like I could
											do anything. That’s the main thing people are controlled
											by! Thoughts- their perception of themselves! They're
											slowed down by their perception of themselves. If you're
											taught you can’t do anything, you won’t do anything. I
											was taught I could do everything.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default FAQ;
