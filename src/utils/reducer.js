import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    playlists: [],
    userInfo: null,
    selectedPlaylistId: "3UtKL1py3X4uVi7kI2qFg2",
    selectedPlaylist: null,
    currentlyPlaying: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN: {
            return {
                ...state, token: action.token,
            };
        }
        case reducerCases.SET_PLAYLISTS: {
            return {
                ...state,
                playlists: action.playlists,
            }
        }
        case reducerCases.SET_USER: {
            return {
                ...state,
                userInfo: action.userInfo,
            };
        }
        case reducerCases.SELECT_PLAYLIST: {
            return{
                ...state,
                selectedPlaylistId: action.selectedPlaylist,
            };
        }
        case reducerCases.SET_PLAYLING: {
            return {
                ...state,
                currentlyPlaying: action.currentlyPlaying,
            };
        }

        default: return state;
    }
};

export default reducer;