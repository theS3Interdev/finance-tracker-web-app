import TransactionForm from './transaction-form';

const Home = () => {
	return (
		<div className="container">
			<div className="content">Transaction List</div>
			<div className="sidebar">
				<TransactionForm />
			</div>
		</div>
	);
};

export default Home;
