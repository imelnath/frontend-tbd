import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Book {
  book_name: string;
  book_number: number;
  pages: number;
  publication_year: number;
  publisher_name: string;
}

const Store = () => {
  const param = useParams();
  const store_number = param.store_number;
  const [data, setData] = useState<Book[]>([]);

  const getBook = async () => {
    const res = await fetch(`http://127.0.0.1:5000/${store_number}/books`);
    const jsonData = await res.json();
    console.log(jsonData);
    setData(jsonData.items);
  };

  const handleDelete = async (book_number: number) => {
    axios
      .delete(`http://127.0.0.1:5000/book/${book_number}`)
      .then((response) => {
        console.log("Post deleted successfully", response);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
      <div>
        {data.map((book) => (
          <div key={book.book_number}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.book_name}
              </h5>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p>Tahun terbit : {book.publication_year}</p>
                <p>Jumlah halaman : {book.pages}</p>
                <p>Penerbit : {book.publisher_name}</p>
              </div>

              <a
                href={`/${book.book_number}/editbooks`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit Book
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <button
                onClick={(e) => handleDelete(book.book_number)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Delete Book
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <a
          href={`/${store_number}/addbooks`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add book
        </a>
      </div>
    </div>
  );
};

export default Store;

// import { useEffect, useState } from "react";

// interface Stores {
//   city: string;
//   store_number: number;
//   street: string;
//   telephone: number;
// }

// const Home = () => {
//   const [data, setData] = useState<Stores[]>([]);

//   const getData = async () => {
//     const response = await fetch("http://127.0.0.1:5000/store");
//     const jsonData = await response.json();
//     setData(jsonData);
//     console.log(jsonData);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       {data.map((store) => (
//         <div key={store.store_number}>
//           <a
//             href="#"
//             classNameName="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//           >
//             <h5 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               Cabang ke-{store.store_number}
//             </h5>
//             <p classNameName="font-normal text-gray-700 dark:text-gray-400">
//               Lokasi : {store.street}
//             </p>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;
