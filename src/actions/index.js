import * as actionTypes from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function selectActivePage(newPageId) {
  return {
    type: actionTypes.SELECT_ACTIVE_PAGE,
    newPageId,
  };
}
