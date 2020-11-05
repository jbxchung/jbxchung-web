import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import siteKey from '../../../keys/recaptchaSiteKey';

import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="about-container">
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={(e) => console.log(e)}
        />
      </div>
    );
  }
}

export default Contact;
