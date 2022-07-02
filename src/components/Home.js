import React from 'react';
import {
    MDBCarousel,

    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer
  } from "mdbreact";
import './Home.css';

const Home = () => {
  return (
    
    <div className='home'>

    <div class="sec-text-image wf-section">
        <div class="w-layout-grid grid-text-image">
            <div class="div-left-text">
            
                <h4>Why does Hloov exist?</h4>
                <div class="content"><p>
                As Earth is facing challenge of global warming, the Built Environment is responsible for over one-third of global energy consumption.<br/><br/> Hloov exists to minimize the effects of built environment by reimagining the built environment with data science.<br/><br/> It aims to create a better future for ourselves and future generations by solving complex built environment challenges that we face today and the ones expected in the future.</p>
                </div>
            </div>
            <div class="div-col-image"> 
                <img loading="lazy" src="images/whyhloov.jpg" alt="" class="col-image"/>
            </div>
        </div>
    </div>
    
    <div class="b-environment">
        <img class="img-earth" src="images/built.jpg" alt="Card image cap"/>
        <div class="text-block-1">
           <h4>What Hloov does?</h4>
        </div>
        <div class="text-block-2">
          <p>Hloov's mission is to empower #BuiltEnvironment people to reduce waste and deliver Carbon neutral infrastructure. With the help of specialized technology proficiency, Hloov offers a broad range of solutions and services.<br/><br/>
       
          Hloov aims to restore balance between the built environment needs and finite natural resources to create a better world that embraces People, Planet, and Prosperity.<br/><br/>
       
          Hloov offers and specializes in a broad range of solutions and services like #DigitalTransformation, #DigitalTwins, #BuildingInformationModeling - #BIM, and #MixedReality. <br/><br/>
       
          Hloov is leading towards the development of the next layer of intelligent technology toolset for the architecture, engineering, and construction industry</p>
        </div>
      
    </div>

    <div class="slider">
        <div class="slider-title">
           <h5>Hloov is a pioneer in human-centric artificial intelligence for the built environment that empowers people to achieve people, planet, and prosperity goals by minimizing waste with data science.</h5>
        </div>
        <div class="carousel" >       
        <MDBContainer>
        <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
           
            mobileGesture={true}
            className="z-depth-1" dark={true} fade >
        <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
        
       
            <div class="card">
                <img class="img-fluid" src="images/img-h3.jpg" alt="Card image cap"/>
                <div class="card-body">
                  <h3 class="card-title">Hloov Hluas</h3>
                  <p>Hloov Hluas aims to inspire and empower the next generation of problem solvers through research, technology, and innovation to build a brighter future for everyone.<br/><br/>It's a global innovation platform to connect, collaborate, and create – together!</p>
                </div>
            </div>
        
        </MDBCarouselItem>
 
        <MDBCarouselItem itemId="2">
      
            <div class="card">
                <img class="img-fluid" src="images/tenet.jpg" alt="Card image cap"/>
                <div class="card-body">
                  <h3 class="card-title">Hloov Tenet</h3>
                  <p>Hloov Tenet aims to raise awareness and support the pressing need for sustainable practices in the built environment to build a sustainable future for everyone.<br/><br/>It's a global collaboration platform to engage, educate, and encourage – everyone!</p>
                </div>
            </div>
      
        </MDBCarouselItem>
 
        <MDBCarouselItem itemId="3">
       
            <div class="card">
                <img class="img-fluid" src="images/tagwaye.jpg" alt="Card image cap"/>
                <div class="card-body">
                  <h3 class="card-title">Hloov Tagwaye</h3>
                  <p>Hloov Tagwaye is a living digital twins platform for the built environment assets that empower people to make proactive, data-led decisions in real-time.<br/><br/>It keeps up with data and technical advances in the built environment industry aiding towards waste reduction.</p>
                </div>
            </div>
        </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
    </MDBContainer>
    </div>
    </div>

    <div class="b-environment">
        <img class="img-earth" src="images/earth.jpg" alt="Card image cap"/>
        <div class="text-block-1">
            <h4>Hloov's contribution to the Built Environment and Planet</h4>
        </div>
        <div class="text-block-2">
            <p>The built environment is a product of human civilization and the natural landscape. It consumes almost 50% of the world’s non-renewable resources, making it one of the least sustainable sectors on the planet.<br/><br/>
        
            To reimagine the Built Environment, Hloov performs digital transformations of the built environment with data science to encourage the participation and engagement of citizens – empower people.<br/><br/>
       
            Hloov's software enable Built Environment stakeholders to develop "Digital Twins" of their buildings and infrastructure to predict asset's behaviour and performance, making it easier to minimize waste and reduce emissions.<br/><br/> 
        
           Hloov aims to empower people and create a new way to interact with the Built Environment to minimize waste and reduce emissions</p>
        </div>
    </div>

    <div class="sec-image-text wf-section">
        <div class="w-layout-grid grid-image-text">
            <div class="div-col-image">
                <img src="images/hloov.jpg" loading="lazy" alt=""/>
            </div>
            <div class="div-right-text">
                <h4>What inspired you to join Hloov?</h4>
                <div class="content">
                    <p>Hloov contribute to the Built Environment and leading the change in this world.<br/><br/>Empowering people with data science, cutting-edge technology, and innovative design thinking with a human-centric approach.<br/><br/>Hloov is strongly committed to the well-being and personal development of its employees, and also has a great work-life balance and workplace culture.</p>
                </div>
            </div>
        </div>
    </div>

    </div>

  )
}

export default Home;