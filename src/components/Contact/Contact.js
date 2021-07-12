import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import siteKey from '../../constants/reCaptchaPubKey';

import './Contact.scss';


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEmail: false,
      recaptchaError: false,
    };

    this.onCaptchaEntered = this.onCaptchaEntered.bind(this);
  }

  onCaptchaEntered(token) {
    // if is null, this captcha has expired
    if (token) {
      fetch('/api/validateRecaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      }).then(res => res.json()).then((response) => {
        if (response.status) {
          this.setState({ showEmail: true });
        } else {
          this.setState({
            showEmail: false,
            recaptchaError: true,
          });
        }
      }).catch((err) => {
        console.error(err);
      });
    }
  }

  render() {
    let renderContent = (
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={this.onCaptchaEntered}
      />
    );

    if (this.state.showEmail) {
      renderContent = (
        <span>
          Email me at&nbsp;
          <a className="email-link" href="mailto:brandon@jbxchung.dev">
            brandon@jbxchung.dev
          </a>
          !
        </span>
      );
    } else if (this.state.recaptchaError) {
      renderContent = (
        <div>
          Recaptcha validation error - please refresh the page to try again.
        </div>
      );
    }

    return (
      <div className="about-container">
        {renderContent}
      </div>
    );
  }
}

export default Contact;
