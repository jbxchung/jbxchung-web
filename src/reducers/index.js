import * as actionTypes from '../constants/actionTypes';
import Pages from '../constants/pageMapping';

const initialState = {
  activePageId: Pages[0].id,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SELECT_ACTIVE_PAGE:
      return { ...state, activePageId: action.newPageId };
    default: return state;
  }
}

export default reducer;
