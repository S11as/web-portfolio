import React from 'react';
import {Link} from 'react-router-dom';
import RedWrapper from '../../utils/RedWrapper';

const Header = (props) => {
  return (
    <div className="container-fluid  nav-wrapper">
      <div className="container">
        <div className="row justify-content-around">
          <RedWrapper text="Silas" font={true} active={true}/>
          <div className="col-auto">
            <nav className="row">
              <Link to="/" className="col-auto">
                <RedWrapper text="Hihi" active={true} font={false}/>
              </Link>
              <Link to="/" className="col-auto">Hihi</Link>
              <Link to="/" className="col-auto">Hihi</Link>
              <Link to="/" className="col-auto">Hihi</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
