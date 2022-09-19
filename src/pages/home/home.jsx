import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import TransactionForm from './transaction-form';
import TransactionList from './transaction-list';

const Home = () => {
	const { user } = useAuthContext();
	const { documents, error } = useCollection(
		'transactions',
		['uid', '==', user.uid],
		['createdAt', 'desc']
	);

	return (
		<div className="container">
			<div className="content">
				{error && <p>{error}</p>}

				{documents && <TransactionList transactions={documents} />}
			</div>
			<div className="sidebar">
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
};

export default Home;
