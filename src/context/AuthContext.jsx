import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'SIGNUP':
			return { ...state, user: action.payload };
		case 'SIGNIN':
			return { ...state, user: action.payload };
		case 'SIGNOUT':
			return { ...state, user: null };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, { user: null });

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
	);
};
