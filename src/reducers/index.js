import * as actionTypes from '../constants/actionTypes';
import pageMapping from '../constants/pageMapping';

const initialState = {
  activePageId: pageMapping.home.url[0],
  recaptchaSuccess: false,
  sendMessageStatus: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SELECT_ACTIVE_PAGE:
      return { ...state, activePageId: action.newPageId };
    case actionTypes.RESET_CONTACT_FORM:
      return {
        ...state,
        recaptchaSuccess: false,
        sendMessageStatus: null,
      };
    case actionTypes.SEND_CONTACT_FORM:
      return { ...state, sendMessageStatus: action.sendMessageStatus };
    case actionTypes.VALIDATE_RECAPTCHA:
      return { ...state, recaptchaSuccess: action.recaptchaSuccess };
    default: return state;
  }
}

export default reducer;
