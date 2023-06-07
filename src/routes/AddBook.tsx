// import { useEffect, useState } from "react";

//   const AddBook = () => {
//     const formData = {
//       email: "example@example.com",
//       password: "password123",
//     };

//     try {
//       const response = await fetch("http://127.0.0.1:5000/books", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data.message); // "Book added successfully"
//       } else {
//         console.log("Error:", response.statusText);
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <form>
//         <div className="mb-6">
//           <label
//             htmlFor="title"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Judul Buku
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="none"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="title"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Penerbit
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="none"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;

import { useState } from "react";
import { useParams } from "react-router-dom";

const AddBook = () => {
  const param = useParams();
  const [formData, setFormData] = useState({
    store_number: param.store_number,
    book_name: "",
    publication_year: "0",
    pages: "1",
    publisher_name: "",
    quantity: "1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/${formData.store_number}/books`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // "Book added successfully"
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="book_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            value={formData.book_name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="publication_year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Publication Year
          </label>
          <input
            type="text"
            id="publication_year"
            name="publication_year"
            value={formData.publication_year}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="pages"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pages
          </label>
          <input
            type="text"
            id="pages"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="publisher_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Publisher Name
          </label>
          <input
            type="text"
            id="publisher_name"
            name="publisher_name"
            value={formData.publisher_name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="quantity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
