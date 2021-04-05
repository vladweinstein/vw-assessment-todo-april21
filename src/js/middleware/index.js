import { ADD_TODO} from '../constants/action-types';

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            // do your stuff
            if (action.type === ADD_TODO && action.payload.title.includes('goofus')) {
                return dispatch({ type: "FOUND_BAD_WORD" });
            }
            return next(action);
        };
    };
}