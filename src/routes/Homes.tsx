// import { useEffect, useState } from "react";

// interface Stores {
//   book_name: string;
//   book_number: number;
//   pages: number;
//   publication_year: number;
//   publisher_name: string;
// }

// const Home = () => {
//   const [data, setData] = useState([]);
//   const getData = async () => {
//     const data = await fetch("http://127.0.0.1:5000/Stores");
//     const jsonData = await data.json();
//     setData(jsonData);
//     console.log(jsonData);
//   };

//   useEffect(() => {
//     getData();
//   }, []);
//   const book: Stores[] = data;
//   return <div>
//     {book.map((book.book_number)=>(
//       <div>
//         <h1>{book.book_name}</h1>
//         <p>{book.pages}</p>
//       </div>
//     ))}
//   </div>;
// };

// export default Home;

// import { useEffect, useState } from "react";

// interface Book {
//   book_name: string;
//   book_number: number;
//   pages: number;
//   publication_year: number;
//   publisher_name: string;
// }

// const Home = () => {
//   const [data, setData] = useState<Book[]>([]);

//   const getData = async () => {
//     const response = await fetch("http://127.0.0.1:5000/books");
//     const jsonData = await response.json();
//     setData(jsonData);
//     console.log(jsonData);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       {data.map((book) => (
//         <div key={book.book_number}>
//           <a
//             href="#"
//             className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//           >
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               {book.book_name}
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               {book.publication_year}
//             </p>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import { BACKEND_PORT } from "../config";

interface Stores {
  city: string;
  store_number: number;
  street: string;
  telephone: number;
}

const Home = () => {
  const [data, setData] = useState<Stores[]>([]);

  const getData = async () => {
    const response = await fetch(`http://${BACKEND_PORT}/store`);
    const jsonData = await response.json();
    setData(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((store) => (
        <div key={store.store_number}>
          <a
            href={`/${store.store_number}`}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cabang ke-{store.store_number}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lokasi : {store.street}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
