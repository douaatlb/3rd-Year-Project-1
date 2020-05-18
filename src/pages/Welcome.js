import React from 'react'
import Header from '../partiels/Header';
import Footer from '../partiels/Footer';
import j from '../image/1.jpg';
import galery03 from '../image/galery03.jpg';
import background01 from '../pages/background01.jpg';
import pic from '../pic.jpg';
import './Welcome.css';
import { Slide } from 'react-slideshow-image';
function Welcome() {
   //fonction pour le back ground 
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { background01 } +")"
  
  };

 //les proprieté des sliders
const properties = {
  duration: 1000,
  transitionDuration: 450,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div >
            <img src={j}  width="1110px" height="510px" className="rounded-pill" /> 
              
            </div>
          </div>
          <div className="each-slide" >
            <div >
            <img src={galery03}  width="1110px" height="510px"  className="rounded-pill"  /> 
            </div>
          </div>
          <div className="each-slide">
            <div >
            <img src={pic }  width="1110px" height="510px" className="rounded-pill" />
              
            </div>
            
          </div>
          
        </Slide>
      </div>
    )
}
    return (

        <div className="App2" >
        <section style={ sectionStyle }> 
         <Header/>
        <div className="container">
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <h1 >Bienvenu chez <span style={{color: "indianred"}}>Conférences Share</span>... </h1>
         <h6>Déposez votre article et participez a des conférences maintenant !</h6>
         <br></br><br></br>
         <button type="button" className="btn btn-danger" id="btn"> Inscription</button>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br>
         <div className="text-center"> 
           <h2>Des conférences a vous proposez </h2>
         <br></br><br></br><br></br>
         <p>les conférences twala yetaffichaw hna mechi ge3</p>
          <br></br><br></br><br></br>
          
          <a href="#" class="btn btn-dark btn-lg  " role="button" aria-pressed="true">Voir plus</a>
          </div>
        
           <br></br><br></br><br></br><br></br><br></br>
           
        <div className="classe1">
             <br></br><br></br><br></br> 
      
             <h5>Vous etes résponsable d'une conférence et vous cherchez  à la présentez au chercheurs ? </h5>
       
             <br></br><br></br>
             <a href="#" class="btn btn-danger  btn-lg " role="button" aria-pressed="true">Cliquez ici</a>
               <br></br><br></br><br></br>
          </div>
            <br></br><br></br>
         <div className="about">
            <br></br> <br></br>
            <h2>About CONFERENCES</h2>
            <p>bla bla bla bla bla bla bla bla bla bla</p>
            <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
           <br></br><br></br><br></br> 
         </div>
         <br></br><br></br><br></br>
    
         <div className="text-center">
            <br></br>
            <h2>Des conférences déja qui sont déjà faites !</h2>
            <br></br>
            <Slideshow/><br></br>
          
            <a href="#" class="btn btn-dark  " role="button" aria-pressed="true">Voir plus de conférences qui sont déja faites</a>
         </div><br></br> <br></br>
         <Footer/>
       </div>
        
        
      
      
     </section>
      
    </div>


    );
}

export default Welcome


