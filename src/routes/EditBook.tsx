// const updateBook = async (bookId: string, formData: FormData) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/books/${bookId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data.message); // "Book updated successfully"
//       } else {
//         console.log('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   // Usage example
//   const bookId = '123'; // ID of the book to update
//   const formData = {
//     book_name: 'Updated Book Name',
//     publication_year: 2023,
//     // Include other updated fields in the formData object
//   };

//   updateBook(bookId, formData);

import { useState } from "react";
import { BACKEND_PORT } from "../config";

const EditBook = () => {
  const bookid = window.location.pathname.split("/")[1];
  const [formData, setFormData] = useState({
    book_number: bookid,
    book_name: "",
    publication_year: "0",
    pages: "0",
    publisher_name: "",
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
        `http://${BACKEND_PORT}/book/${formData.book_number}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // "Book edited successfully"
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

export default EditBook;
