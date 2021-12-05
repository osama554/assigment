import React from 'react';
import { Link } from 'react-router-dom';
const Header = (props) => {
 return (
  <div className="header">
   <div className="headerLeft">
    <div className="headerLeftInner">
     {props.props.match.url === '/' ? <Link to="/form">Form</Link> : <Link to="/">Go Back</Link>}
     <div>
      <h1>Product Design</h1>
      <p>Our multifacated apps are custom build and developed to support multiple platforms, including both Android and iOS, making apps accessible for all</p>
     </div>
    </div>
   </div>
   <div className="headerRight"></div>
  </div>
 );
};
export default Header;
