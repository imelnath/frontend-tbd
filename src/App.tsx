import { useState } from 'react';

interface Item {
	store: number;
	book_number: number;
	book_name: string;
	publication_year: number;
	pages: number;
	pname: string;
	quantity: number;
	price: number;
}

const App = () => {
	const [data, setData] = useState([]);

	const handleClick = async () => {
		const res = await fetch('http://127.0.0.1:5000/books');
		const jsonData = await res.json();
		setData(jsonData);
		console.log(data);
	};
	const items: Item[] = data;

	return (
		<>
			<div className='flex flex-row justify-center p-96'>
				<button
					onClick={() => {
						handleClick();
					}}
					className='bg-sky-500 px-5 py-2.5 text-slate-50 rounded-md'>
					MyButton
				</button>
			</div>
			<div className='space-y-4'>
				{items.map((item) => (
					<div>
						<h1 className='text-xl'>
							Judul Buku: {item.book_name}
						</h1>
						<h2>Penerbit: {item.pname}</h2>
						<h2>Harga: {item.price}</h2>
						<p>Stock: {item.quantity}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default App;
