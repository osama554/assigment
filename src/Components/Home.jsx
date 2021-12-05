import React from 'react';
import Header from './Header';
import Visual from '../assets/visual.png';
import { ReactComponent as Research } from '../assets/research-and-project-estimation.svg';
import { ReactComponent as Discovery } from '../assets/discovery.svg';
import { ReactComponent as DiscoveryWhite } from '../assets/discovery-white.svg';
import { ReactComponent as WireFrame } from '../assets/wireframe.svg';
import { ReactComponent as UI } from '../assets/ui.svg';
import { ReactComponent as UX } from '../assets/ux.svg';
import { ReactComponent as VisualDesign } from '../assets/visual-design.svg';
const Home = (props) => {
 const [reseacrh, setResearch] = React.useState(false);
 const [ui, setUi] = React.useState(false);
 const [ux, setUx] = React.useState(false);
 const [disc, setDisc] = React.useState(false);
 const [products, setProducts] = React.useState([
  {
   name: 'User experience design',
  },
  {
   name: 'Visual design',
  },
  {
   name: 'Prototyping',
  },
  {
   name: 'Content design',
  },
  {
   name: 'Design Systems',
  },
  {
   name: 'Voice, Chatbots & Multimodal UI',
  },
 ]);
 return (
  <>
   <Header props={props} />
   <div className="section-1">
    <div className="section-1-left">
     <img src={Visual} />
    </div>
    <div className="section-1-right">
     <div>
      <h1>
       More than visual design, more <br />
       than interactions.
      </h1>
      <p>
       we take pride in our craft. Drawing on our deep expertise in design, our Product Design team cares for your user's experience over the the entire customer journey, at every touchpoint with your
       company
      </p>
      <p>we shepherd your product through the entire design process. we aim to achieve your</p>
      <p>
       we also collaborate with our Software Engineering team to emsure our designs are technically feasible with the constraints og the project. At the same time, we're watching for inovative new
       technologies that can make the experience more seamless.
      </p>
     </div>
    </div>
   </div>
   <div className="section-2">
    <div style={{ textAlign: 'center' }}>
     <h1>Our Design Process</h1>
     <p>Every decision we make is informed and goal oriented with the user journey in mind. Designing with a</p>
    </div>
    <div className="section-2-inner">
     <div className="research">
      <div onMouseEnter={() => setDisc(true)} onMouseLeave={() => setDisc(false)}>
       {disc ? <Research style={{ stroke: '#fff' }} /> : <Research style={{ stroke: '#4ed3fffa' }} />}
      </div>
      <h3>2. Research + project estimation</h3>
     </div>
     <div className="UX">
      <div onMouseEnter={() => setUx(true)} onMouseLeave={() => setUx(false)}>
       {ux ? <WireFrame style={{ stroke: '#fff' }} /> : <WireFrame style={{ stroke: '#4ed3fffa' }} />}
      </div>
      <h3>3. UX wireframes</h3>
     </div>
     <div className="discovery">
      <div onMouseEnter={() => setResearch(true)} onMouseLeave={() => setResearch(false)}>
       {reseacrh ? <DiscoveryWhite style={{ stroke: '#fff' }} /> : <Discovery style={{ stroke: '#4ed3fffa' }} />}
      </div>
      <h3>1. Discovery</h3>
     </div>
     <div className="UI">
      <div onMouseEnter={() => setUi(true)} onMouseLeave={() => setUi(false)}>
       {ui ? <UI style={{ stroke: '#fff' }} /> : <UI style={{ stroke: '#4ed3fffa' }} />}
      </div>
      <h3>4. UI application</h3>
     </div>
    </div>
   </div>
   <div className="section-2-mobile">
    <div style={{ textAlign: 'center' }}>
     <h1>Our Design Process</h1>
     <p>Every decision we make is informed and goal oriented with the user journey in mind. Designing with a</p>
    </div>
    <div>
     <Discovery style={{ stroke: '#4ed3fffa' }} />
     <span>1. Discovery</span>
    </div>
    <div>
     <Research style={{ stroke: '#4ed3fffa' }} />
     <span>2. Research + project estimation</span>
    </div>
    <div>
     <WireFrame style={{ stroke: '#4ed3fffa' }} />
     <span>3. UX wireframes</span>
    </div>
    <div>
     <UI style={{ stroke: '#4ed3fffa' }} />
     <span>4. UI application</span>
    </div>
   </div>
   <div className="section-3">
    <div className="section-3-inner">
     <h2>Product Design Services</h2>
     <div className="services">
      {products.map((i, k) => {
       return (
        <div className="service" key={k}>
         {i.name}
        </div>
       );
      })}
     </div>
    </div>
   </div>
   <div className="section-4">
    <div className="section-4-left">
     <h2>User experience design</h2>
     <p>
      Even after the Product Statergy phase, we maintain a relentless focus on your bisuness goals. Ours Product Design team ensures the product we deliver will solve your challenge while your user's
      needs.
     </p>
     <h3>TACTICS</h3>
     <div className="tactics">
      <div>
       <span>Behavioral data analysis</span>
       <span>Personalization architecture</span>
      </div>
      <div>
       <span>Wireframe</span>
       <span>User flow</span>
      </div>
     </div>
    </div>
    <div className="section-4-right">
     <UX />
    </div>
   </div>
   <div className="section-5">
    <div className="section-5-left">
     <VisualDesign />
    </div>
    <div className="section-5-right">
     <h2>Visual design</h2>
     <p>Yes, we make your software product beautifil. We also make it easy-to-use, complelling and delightful</p>
     <h3>TACTICS</h3>
     <div className="tactics">
      <div>
       <span>Design workshop</span>
       <span>Visual design concept</span>
       <span>Typography system</span>
      </div>
      <div>
       <span>Custom iconography</span>
       <span>UI elements</span>
       <span>Style guide</span>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
export default Home;
