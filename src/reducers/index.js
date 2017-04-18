import * as ActionTypes from '../constants/actionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
friends_id: [1,2,3],
friends_by_id: {
  1: {
    id: 1,
    name: 'neeraj'
  },
  2: {
    id: 2,
    name: 'pc'
  },
  3: {
    id: 3,
    name: 'akshay'
  }
}
}

export default function friend(state=initialState, action)
{
  switch(action.type){
    case ActionTypes.ADD_FRIEND : {
      let temp_id = state.friends_id[state.friends_id.length]+1;
      return {
        ...state,
        friends_id: state.friends_id.concat(temp_id),
        friends_by_id: {
          ...state.friends_by_id,
          [temp_id]: {
            id: temp_id,
            name: action.name
          }
        }
      }
    },
    case ActionTypes.DELETE_FRIEND: {
      return {
        ...state,
        friends_id: state.friends_id.filter(id => id!=action.id),
        friends_by_id: omit(state.friends_by_id, action.id)
      }
    },
    case ActionTypes.STAR_FRIEND: {
      return {
        ...state,
        friends_by_id: mapValues(state.friends_by_id, (friend) => {
          friend.id == action.id ? Object.assign({}, friend, {starred: !friend.starred}): friend
        })
      }
    },
    default: return state;
  }
}
