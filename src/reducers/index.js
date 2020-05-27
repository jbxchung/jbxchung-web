import * as actionTypes from '../constants/actionTypes';
import pageMapping from '../constants/pageMapping';

const initialState = {
  activePageId: pageMapping.home.url[0],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SELECT_ACTIVE_PAGE:
      return { ...state, activePageId: action.newPageId };
    default: return state;
  }
}

export default reducer;
