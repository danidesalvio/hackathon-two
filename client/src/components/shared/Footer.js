import React from 'react';
import '../css/custom.css';
import logo from '../images/airplane.svg';
import { Button } from 'semantic-ui-react';


const Footer = () => (
  <div class="footer">
    <div class="footer-wrapper">
      <div class="ftr-logo">
        <img src={logo}/>
      </div>
      <div class="ftr-contact">
        <Button circular color='facebook' icon='facebook' />
        <Button circular color='twitter' icon='twitter' />
        <Button circular color='linkedin' icon='linkedin' />
        <Button circular color='google plus' icon='google plus' />
      </div>
    </div>
  </div>
)


export default Footer;