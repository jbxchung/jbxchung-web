import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

import EmailIcon from '../Icons/EmailIcon';
import GithubLogo from '../Icons/GitHubLogo';
import LinkedInLogo from '../Icons/LinkedInLogo';

import siteKey from '../../constants/reCaptchaPubKey';

import './Contact.scss';
import {
  resetContactForm,
  sendContactMessage,
  validateRecaptcha,
} from '../../actions';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      sendMessageStatus: this.props.sendMessageStatus,
      recaptchaSuccess: this.props.recaptchaSuccess,
    };

    this.onCaptchaEntered = this.onCaptchaEntered.bind(this);
    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.renderEmailForm = this.renderEmailForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillUnmount() {
    this.props.resetContactForm();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.recaptchaSuccess !== prevState.recaptchaSuccess) {
      return { recaptchaSuccess: nextProps.recaptchaSuccess };
    }

    if (nextProps.sendMessageStatus !== prevState.sendMessageStatus) {
      return { sendMessageStatus: nextProps.sendMessageStatus };
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

  renderEmailForm() {
    const { recaptchaSuccess, sendMessageStatus } = this.state;

    let formSubmitArea = (
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={this.onCaptchaEntered}
      />
    );

    if (recaptchaSuccess) {
      formSubmitArea = (
        <button
          className="submit-button"
          onClick={this.submitForm}
        >
          Send Message
        </button>
      );

      if (sendMessageStatus) {
        if (sendMessageStatus === 'success') {
          formSubmitArea = (
            <div className="message-submitted-confirmation">
              Thanks for contacting me! I will generally reply within 48 hours.
            </div>
          );
        } else if (sendMessageStatus === 'submitted') {
          formSubmitArea = <button className="submit-button">Sending Message...</button>;
        } else if (sendMessageStatus === 'fail') {
          formSubmitArea = (
            <div className="message-submitted-confirmation">
              Looks like there was a problem sending this message, feel free to&nbsp;
              <a className="email-link" href="mailto:brandon@jbxchung.dev">send me an email</a>
              &nbsp;instead!
            </div>
          );
        }
      }
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
              disabled={!!sendMessageStatus}
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
              disabled={!!sendMessageStatus}
            />
          </div>
          {formSubmitArea}
        </div>
      </div>
    );
  }

  render() {
    // return this.renderEmailForm();
    return (
      <div className="contact-container">
        <div className="contact-header">
          Questions? Feel free to contact me at:
        </div>
        <div className="contact-details">
          <div className="contact-entry">
            <a href="mailto:brandon@jbxchung.dev" title="Email" alt="Email" target="_blank" rel="noreferrer">
              <EmailIcon />
              <span className="link-text">brandon@jbxchung.dev</span>
            </a>
          </div>
          <div className="contact-entry">
            <a href="https://github.com/jbxchung" title="GitHub" alt="GitHub" target="_blank" rel="noreferrer">
              <GithubLogo />
              <span className="link-text">GitHub</span>
            </a>
          </div>
          <div className="contact-entry">
            <a href="https://www.linkedin.com/in/jiehong-brandon-chung-79543856/" title="LinkedIn" alt="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedInLogo />
              <span className="link-text">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="contact-footer">
          CI/CD for this site has been automated with GitHub Actions and deployed with Docker on a self-hosted raspberry pi cluster.
          <p>
            Thanks for visiting!
          </p>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  sendMessageStatus: PropTypes.string,
  recaptchaSuccess: PropTypes.bool.isRequired,
  resetContactForm: PropTypes.func.isRequired,
  sendContactMessage: PropTypes.func.isRequired,
  validateRecaptcha: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  sendMessageStatus: null,
};

function mapStateToProps(state) {
  return {
    sendMessageStatus: state.sendMessageStatus,
    recaptchaSuccess: state.recaptchaSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetContactForm,
    sendContactMessage,
    validateRecaptcha,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
