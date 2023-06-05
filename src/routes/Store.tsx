import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Book {
	book_name: string;
	pages: number;
	price: number;
	publisher: string;
}

const Store = () => {
	const param = useParams();
	const storeId = param.storeId;
	const [data, setData] = useState([]);

	const getBook = async () => {
		const res = await fetch(`http://127.0.0.1:5000/${storeId}/books`);
		const jsonData = await res.json();
		console.log(jsonData);
		setData(jsonData.items);
	};

	useEffect(() => {
		getBook();
	}, []);

	const books: Book[] = data;

	return (
		<div className='px-28'>
			<div className='flex'>
				<h3 className='m-auto text-7xl font-semibold'>id: {storeId}</h3>
			</div>
			<div className='space-y-2'>
				{books.map((book, index) => (
					<div
						key={index}
						className='hover:bg-slate-200 px-5 py-2.5 space-y-2 border-b-2'>
						<h1 className='font-medium text-3xl text-slate-900'>
							{book.book_name}
						</h1>
						<h2>{book.publisher}</h2>
						<a href={`/${storeId}/books/${book.book_name}`}>
							<button className='bg-slate-500 px-5 py-1 rounded-lg text-slate-200'>
								Pelajari
							</button>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Store;
