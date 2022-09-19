import { useAuthContext } from '../../hooks/useAuthContext';
import TransactionForm from './transaction-form';

const Home = () => {
	const { user } = useAuthContext();

	return (
		<div className="container">
			<div className="content">Transaction List</div>
			<div className="sidebar">
				<TransactionForm uid={user.id} />
			</div>
		</div>
	);
};

export default Home;
