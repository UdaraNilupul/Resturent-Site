import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app_wrapper section__padding" id="home">
    <div className="app_wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}></p>
    </div>

    <div className="app_wrapper_img">

    </div>
  </div>
);

export default Header;
