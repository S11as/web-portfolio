import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="conainer">
            <div className="row justify-content-center">
              <div className="col-auto text-center">
                C {new Date().getFullYear()} Kirill Lakhov. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
