import { useState } from 'react';
import { useSignin } from '../../hooks/useSignin';

const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signin, error, isPending } = useSignin();

	const handleSubmit = (e) => {
		e.preventDefault();
		signin(email, password);
	};

	return (
		<form onSubmit={handleSubmit} className="signin-form">
			<h2>Sign In</h2>

			<label>
				<span>Email:</span>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>

			<label>
				<span>Password:</span>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>

			{!isPending && <button className="btn">Sign In</button>}

			{isPending && (
				<button className="btn" disabled>
					Loading...
				</button>
			)}

			{error && <p>{error}</p>}
		</form>
	);
};

export default Signin;
