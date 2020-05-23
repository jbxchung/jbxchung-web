import * as actionTypes from '../constants/actionTypes';

export function selectActivePage(newPageId) {
  return {
    type: actionTypes.SELECT_ACTIVE_PAGE,
    newPageId,
  };
}

export function dummyAction(data) {
  return {
    type: 'asdf',
    someData: data,
  };
}
