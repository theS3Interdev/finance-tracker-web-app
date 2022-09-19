const TransactionList = ({ transactions }) => {
	return (
		<ul className="transactions">
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<p className="name">{transaction.name}</p>
					<p className="amount">KES{transaction.amount}</p>
				</li>
			))}
		</ul>
	);
};

export default TransactionList;
