import * as ActionTypes from '../constants/actionTypes';

export function addFriend(name)
{
  return {
    type: ActionTypes.ADD_FRIEND,
    name: name
  }
}

export function deleteFriend(id)
{
  return {
    type: ActionTypes.DELETE_FRIEND,
    id: id
  }
}

export function starFriend(id)
{
  return {
    type: ActionTypes.STAR_FRIEND,
    id: id
  }
}
