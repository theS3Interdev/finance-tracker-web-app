import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

const TransactionForm = ({ uid }) => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const { addDoc, response } = useFirestore('transactions');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ uid, name, amount });
		//addDoc({ uid, name, amount });
	};

	/** reset the form fields */
	// useEffect(() => {
	// 	if (response.success) {
	// 		setName('');
	// 		setAmount('');
	// 	}
	// }, [response.success]);

	return (
		<>
			<h3>Add a Transaction</h3>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Transaction Name:</span>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
						required
					/>
				</label>
				<label>
					<span>Amount (KES):</span>
					<input
						type="number"
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
						required
					/>
				</label>
				<button>Add Transaction</button>
			</form>
		</>
	);
};

export default TransactionForm;
