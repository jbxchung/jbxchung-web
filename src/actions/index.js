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

export function contactMessageSent(apiResponse) {
  return {
    type: actionTypes.SEND_CONTACT_FORM,
    apiResponse,
  };
}

export function sendContactMessage(formData) {
  console.log(formData);
  return async function (dispatch) {
    dispatch({
      type: actionTypes.SEND_CONTACT_FORM,
      apiResponse: { status: true },
    });
    /*
    try {
      const res = await fetch('/api/contact/sendMessage');
      const apiResponse = res.json();
      dispatch(contactMessageSent(apiResponse));
    } catch (err) {
      console.error(err);
    }
    */
  };
}
