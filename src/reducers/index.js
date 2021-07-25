import * as actionTypes from '../constants/actionTypes';
import pageMapping from '../constants/pageMapping';

const initialState = {
  activePageId: pageMapping.home.url[0],
  recaptchaSuccess: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SELECT_ACTIVE_PAGE:
      return { ...state, activePageId: action.newPageId };
    case actionTypes.SEND_CONTACT_FORM:
      return { ...state, messageSent: action.apiResponse.status };
    case actionTypes.VALIDATE_RECAPTCHA:
      return { ...state, recaptchaSuccess: action.recaptchaSuccess };
    default: return state;
  }
}

export default reducer;
