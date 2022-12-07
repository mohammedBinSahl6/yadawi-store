import '../About.css'


import group from '../imgs/Group-rafiki.png'
import pic from '../imgs/pic.png';
import happy from "../imgs/happy.png";
import man from "../imgs/man.png";




const About = ()=>{
   
      return (
        <div>
        <>
    
<>

</>
  <div className="about-section starter">
    <h1 className='text-center mt-5 main-title'>About Us</h1>
<h2 data-aos='fade-down' data-aos-duration='1000' className='text-center p-5'> Welcome To Yadawi store  </h2>
    
  </div>
  <div className="company">
    <div className="img">
      <img
        src={group}
        alt=""
      />
    </div>
    <div className="company-info">
      
     <span className='display-4 text-dark'>products</span> <span className="our">FOR EVERYONE</span>
      
      <p>
        <b>Yadawi store</b> is a e-commerce website dedicated for sharing stock
        . 
        
      </p>
    </div>
  </div>
  <div className="team">
    <span>OUR TEAM</span>
  </div>
  <div className="container ">
  <div className="card" style={{ width: "18rem" }}>
  <img src={happy} className="card-img-top" alt="..." />
  <div className="card-body bg-dark">
    <h5 className="card-title text-white text-center">peter joe</h5>
    <p className="card-text m-3 text-white">
    I Am the designer
    </p>
  </div>
</div>
<div className="card bg-dark" style={{ width: "18rem" }}>
  <img src={pic} className="" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center text-white">bim </h5>
    <p className="card-text m-3 text-white">
      I Am the marketing manager
    </p>
    
  </div>
</div>

<div className="card bg-dark" style={{ width: "18rem" }}>
  <img src={man} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title m-3 text-white text-center">john jack</h5>
    <p className="card-text text-white">
      I Am the IT 
    </p>
  </div>
</div>

  </div>

  <>
</>

  <>
  <>

</>

</>
</>

        </div>
      );
    };
    export default About;







