import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, displayName) => {
		setError(null);
		setIsPending(true);

		try {
			/** signup procedure */
			const res = await projectAuth.createUserWithEmailAndPassword(email, password);

			if (!res) {
				throw new Error('Could not complete the sign up procedure');
			}

			/** add the display name to user profile */
			await res.user.updateProfile({ displayName });

			/** dispatch signin action */
			dispatch({ type: 'SIGNIN', payload: res.user });

			/** update state */
			if (!isCancelled) {
				setIsPending(false);
				setError(null);
			}
		} catch (err) {
			if (!isCancelled) {
				setError(err.message);
				setIsPending(false);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { signup, error, isPending };
};
