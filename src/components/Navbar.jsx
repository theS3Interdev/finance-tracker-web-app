import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignout } from '../hooks/useSignout';

const Navbar = () => {
	const { signout } = useSignout();
	const { user } = useAuthContext();

	return (
		<nav className="navbar">
			<ul>
				<li className="title">
					<Link to="/">Finance Tracker</Link>
				</li>

				{!user && (
					<>
						<li>
							<Link to="/signin">Sign In</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					</>
				)}

				{user && (
					<>
						<li>Hello, {user.displayName}</li>
						<li>
							<button className="btn" onClick={signout}>
								Sign Out
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
