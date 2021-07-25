import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

import siteKey from '../../constants/reCaptchaPubKey';

import './Contact.scss';
import { sendContactMessage, validateRecaptcha } from '../../actions';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      messageSent: false,
      recaptchaSuccess: false,
    };

    this.onCaptchaEntered = this.onCaptchaEntered.bind(this);
    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (nextProps.recaptchaSuccess !== prevState.recaptchaSuccess) {
      return { recaptchaSuccess: nextProps.recaptchaSuccess };
    }

    if (nextProps.messageSent !== prevState.messageSent) {
      return { messageSent: nextProps.messageSent };
    }

    return null;
  }

  onCaptchaEntered(token) {
    this.props.validateRecaptcha(token);
  }

  onFieldChanged(fieldName, e) {
    if (e && e.target) {
      const { value } = e.target;
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [fieldName]: value,
        },
      }));
    }
  }

  submitForm() {
    this.props.sendContactMessage(this.state.formData);
  }

  render() {
    let formSubmitArea = (
      <button
        className="submit-button"
        onClick={this.submitForm}
      >
        Send Message
      </button>
    );
    if (!this.state.recaptchaSuccess) {
      formSubmitArea = (
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={this.onCaptchaEntered}
        />
      );
    } else if (this.state.messageSent) {
      formSubmitArea = (
        <div className="message-submitted-confirmation">
          Thanks for contacting me! I will generally reply within 48 hours.
        </div>
      );
    }

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
  recaptchaSuccess: PropTypes.bool.isRequired,
  sendContactMessage: PropTypes.func.isRequired,
  validateRecaptcha: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  messageSent: false,
};

function mapStateToProps(state) {
  return {
    messageSent: state.messageSent,
    recaptchaSuccess: state.recaptchaSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sendContactMessage,
    validateRecaptcha,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
