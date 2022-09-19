import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignin = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);
	const { dispatch } = useAuthContext();

	const signin = async (email, password) => {
		setError(null);
		setIsPending(true);

		try {
			/** signin procedure */
			const res = await projectAuth.signInWithEmailAndPassword(email, password);

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

	return { signin, isPending, error };
};
