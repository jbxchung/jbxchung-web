import * as actionTypes from '../constants/actionTypes';
import pageMapping from '../constants/pageMapping';

const initialActivePage = pageMapping[Object.keys(pageMapping).find(pageName => (
  pageMapping[pageName].url === window.location.pathname
))] || pageMapping.home;

const initialState = {
  activePageId: initialActivePage.url,
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
