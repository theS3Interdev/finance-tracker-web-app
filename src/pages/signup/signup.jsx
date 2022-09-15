import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const { error, isPending, signup } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, displayName);
	};

	return (
		<form onSubmit={handleSubmit} className="signup-form">
			<h2>Signup</h2>

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

			<label>
				<span>Display Name:</span>
				<input
					type="text"
					onChange={(e) => setDisplayName(e.target.value)}
					value={displayName}
					required
				/>
			</label>

			{!isPending && <button className="btn">Sign Up</button>}

			{isPending && (
				<button className="btn" disabled>
					Loading...
				</button>
			)}

			{error && <p>{error}</p>}
		</form>
	);
};

export default Signup;
