import { Link } from "react-router-dom";

export default function Footer(){
    return(
       
       <footer className=" text-center text-white">
       {/* Grid container */}
       <div className="container p-4">
         {/* Section: Social media */}
         <section className="mb-4">
           {/* Facebook */}
           <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className='bx bxl-facebook-circle'></i></a>
           {/* Twitter */}
           <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className='bx bxl-twitter' ></i></a>
           {/* Google */}
           <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className='bx bxl-google'></i></a>
           {/* Instagram */}
           <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className='bx bxl-instagram-alt'></i></a>
           {/* Linkedin */}
           <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className='bx bxl-linkedin-square' ></i></a>
           {/* Github */}
           <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className='bx bxl-github' ></i></a>
         </section>
         {/* Section: Social media */}
         {/* Section: Form */}
         <section >
           <form >
             {/*Grid row*/}
             <div className="row d-flex justify-content-center">
               {/*Grid column*/}
               <div className="col-auto">
                 <p className="pt-2">
                   <strong>Sign up to get offer</strong>
                 </p>
               </div>
               {/*Grid column*/}
               {/*Grid column*/}
               <div className="col-md-5 col-12">
                 {/* Email input */}
                 <div className="form-outline form-white mb-4">
                   <input type="email" id="form5Example21" className="form-control" placeholder="Email Address"/>
                   
                 </div>
               </div>
               {/*Grid column*/}
               {/*Grid column*/}
               <div className="col-auto">
                 {/* Submit button */}
                 <button type="submit" className="btn btn-outline-light mb-4">
                   Subscribe
                 </button>
               </div>
               {/*Grid column*/}
             </div>
             {/*Grid row*/}
           </form>
         </section>
         {/* Section: Form */}
         {/* Section: Text */}
         <section className="mb-4">
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
             repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
             eum harum corrupti dicta, aliquam sequi voluptate quas.
           </p>
         </section>
         {/* Section: Text */}
         {/* Section: Links */}
         <section >
           {/*Grid row*/}
           <div className="row">
             {/*Grid column*/}
             <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
               <h5 className="text-uppercase">Shortcuts</h5>
               <ul className="list-unstyled mb-0">
                 <li>
                   <Link href="#!" className="text-white" to='/'>Home</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white" to='/about'>About</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white" to='/shop'>Store</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white" to="/cart">Cart</Link>
                 </li>
               </ul>
             </div>
             {/*Grid column*/}
             {/*Grid column*/}
             <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
               <h5 className="text-uppercase">Links</h5>
               <ul className="list-unstyled mb-0">
                 <li>
                   <Link href="#!" className="text-white" to='/login'>Login</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white" to="signup">SignUP</Link>
                 </li>
                 <li>
                   <Link to="/faq" className="text-white">FAQ</Link>
                 </li>
                 <li>
                   <Link to='/privacy-policy' className="text-white">Privacy Policy</Link>
                 </li>
               </ul>
             </div>
             {/*Grid column*/}
             {/*Grid column*/}
             <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
               <h5 className="text-uppercase">Links</h5>
               <ul className="list-unstyled mb-0">
                 <li>
                   <Link href="#!" className="text-white">best sales</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white">Contact</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white">Help Center</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white">Cultures</Link>
                 </li>
               </ul>
             </div>
             {/*Grid column*/}
             {/*Grid column*/}
             <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
               <h5 className="text-uppercase">Links</h5>
               <ul className="list-unstyled mb-0">
                 <li>
                   <Link href="#!" className="text-white">watch us</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white">Payment way</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white">my Accounts</Link>
                 </li>
                 <li>
                   <Link href="#!" className="text-white">Log-out</Link>
                 </li>
               </ul>
             </div>
             {/*Grid column*/}
           </div>
           {/*Grid row*/}
         </section>
         {/* Section: Links */}
       </div>
       {/* Grid container */}
       {/* Copyright */}
       <div className="text-center p-3 bg-dark" >
         © 2020 Copyright:
         <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
       </div>
       {/* Copyright */}
     </footer>
   
   );
 }
    
