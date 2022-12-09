import '../css/About.css'


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
    <div className="img-about">
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
  <div className="team-head">
    <span>OUR TEAM</span>
  </div>
 
<div className='container-fluid team'>
  <div className='row p-5'>
    <div className='col-sm-4 p-col'>
      <div className='card'>
        <img className='card-img-top'></img>
        <div className='card-body text-white bg-dark'>
          <h4 className='card-title'>Mohammed Bin Sahl</h4>
          <p className='card-text'>Web Developer</p>
          <div className='f-holder p-3'>
            <a className='link'><i class='bx bxl-instagram-alt'></i></a>
            <a className='link'><i class='bx bxl-github'></i></a>
          </div>
        </div>
      </div>
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







