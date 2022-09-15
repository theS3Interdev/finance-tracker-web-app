import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignout = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const signout = async () => {
		setError(null);
		setIsPending(true);

		try {
			/** signout procedure */
			await projectAuth.signOut();

			/** dispatch signout action */
			dispatch({ type: 'SIGNOUT' });

			setIsPending(false);
			setError(null);
		} catch (err) {
			console.log(err.message);
			setError(err.message);
			setIsPending(false);
		}
	};

	return { error, isPending, signout };
};
