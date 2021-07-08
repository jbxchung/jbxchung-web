import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import siteKey from '../../constants/reCaptchaPubKey';

import './Contact.scss';


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEmail: false,
    };

    this.onCaptchaEntered = this.onCaptchaEntered.bind(this);
  }

  onCaptchaEntered(token) {
    // if is null, this captcha has expired
    if (token) {
      fetch('/api/validateRecaptcha', {
        method: 'POST',
        requestBody: {
          token,
        },
      }).then(res => res.json()).then((response) => {
        console.log(response);
        this.setState({ showEmail: true });
      });
    }
  }

  render() {
    const renderContent = this.state.showEmail
      ? <a className="email-link" href="mailto:brandon@jbxchung.dev">brandon@jbxchung.dev</a>
      : (
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={this.onCaptchaEntered}
        />
      );

    return (
      <div className="about-container">
        {renderContent}
      </div>
    );
  }
}

export default Contact;
