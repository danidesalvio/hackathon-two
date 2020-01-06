import React from 'react';
import '../css/custom.css';
import logo from '../images/airplane.svg';
import { Button } from 'semantic-ui-react';


const Footer = () => (
  <div className="footer">
    <div className="footer-wrapper">
      <div className="ftr-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="ftr-contact">
        <Button circular color='facebook' icon='facebook' />
        <Button circular color='twitter' icon='twitter' />
        <Button circular color='linkedin' icon='linkedin' />
        <Button circular color='google plus' icon='google plus' />
      </div>
    </div>
  </div>
)


export default Footer;