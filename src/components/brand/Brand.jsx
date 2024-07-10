import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt4__brand section__padding">
    <div>
      <img src={google} alt='imag' />
    </div>
    <div>
      <img src={slack} alt='imag' />
    </div>
    <div>
      <img src={atlassian} alt='imag' />
    </div>
    <div>
      <img src={dropbox} alt='imag' />
    </div>
    <div>
      <img src={shopify} alt='imag' />
    </div>
  </div>
);

export default Brand;
