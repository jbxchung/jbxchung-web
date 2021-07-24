import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

import siteKey from '../../constants/reCaptchaPubKey';

import './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recaptchaSuccess: false,
      formData: {},
    };

    this.onCaptchaEntered = this.onCaptchaEntered.bind(this);
    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onCaptchaEntered(token) {
    this.setState({ recaptchaSuccess: true });
    // if is null, this captcha has expired
    if (token) {
      fetch('/api/recaptcha/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      }).then(res => res.json()).then((response) => {
        if (response.status) {
          this.setState({ recaptchaSuccess: true });
        } else {
          this.setState({ recaptchaSuccess: false });
        }
      }).catch((err) => {
        console.error(err);
      });
    }
  }

  onFieldChanged(fieldName, e) {
    if (e && e.target) {
      const { value } = e.target;
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [fieldName]: value,
        },
      }), () => console.log(this.state.formData));
    }
  }

  submitForm() {
    console.log('todo: submit form');
  }

  render() {
    const formSubmitArea = this.state.recaptchaSuccess ? (
      <button className="submit-button" onClick={this.submitForm} disabled={this.props.messageSent}>Send Message</button>
    ) : (
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={this.onCaptchaEntered}
      />
    );

    return (
      <div className="contact-container">
        <div className="contact-form">
          <div className="contact-field">
            <label className="contact-field-label" htmlFor="contact-email">Email:</label>
            <input
              id="contact-email"
              className="contact-field-input"
              value={this.state.fromUser}
              onChange={e => this.onFieldChanged('fromUser', e)}
              placeholder="Your email"
            />
          </div>

          <div className="contact-field">
            <label className="contact-field-label" htmlFor="contact-message">Message:</label>
            <textarea
              id="contact-message"
              className="contact-field-input"
              value={this.state.userMessage}
              onChange={e => this.onFieldChanged('message', e)}
              placeholder="Enter a message"
            />
          </div>
          {formSubmitArea}
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  messageSent: PropTypes.bool,
};

Contact.defaultProps = {
  messageSent: false,
};

export default Contact;
