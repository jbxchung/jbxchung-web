import * as actionTypes from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function selectActivePage(newPageId) {
  return {
    type: actionTypes.SELECT_ACTIVE_PAGE,
    newPageId,
  };
}

export function validateRecaptcha(token) {
  return async function (dispatch) {
    dispatch({
      type: actionTypes.VALIDATE_RECAPTCHA,
      recaptchaSuccess: true,
    });
    try {
      const resp = await fetch('/api/recaptcha/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      });

      const response = await resp.json();

      dispatch({
        type: actionTypes.VALIDATE_RECAPTCHA,
        recaptchaSuccess: response.status,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function contactMessageSent(sendMessageStatus) {
  return {
    type: actionTypes.SEND_CONTACT_FORM,
    sendMessageStatus,
  };
}

export function sendContactMessage(formData) {
  console.log(formData);
  return async function (dispatch) {
    dispatch(contactMessageSent('submitted'));

    try {
      const res = await fetch('/api/contact/sendMessage');
      const apiResponse = await res.json();

      dispatch(contactMessageSent(apiResponse.status ? 'success' : 'fail'));
    } catch (err) {
      console.error(err);
      dispatch(contactMessageSent('fail'));
    }
  };
}

export function resetContactForm() {
  return {
    type: actionTypes.RESET_CONTACT_FORM,
  };
}
