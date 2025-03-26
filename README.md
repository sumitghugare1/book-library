📚 Book Library

A dynamic book library web application that fetches and displays book data using the FreeAPI.app. Users can search, filter, sort, and view book details in an interactive UI.

🚀 Features
✅ Fetch & Display Books – Dynamically fetches book data from an API and presents it in a list/grid format.
✅ List/Grid View Toggle – Users can switch between list view and grid view for better readability.
✅ Book Details – Displays title, author, publisher, published date, and book cover (thumbnail).
✅ Search Functionality – Users can search books by title or author.
✅ Sorting Options – Sort books alphabetically (A-Z) or by published date.
✅ Pagination – Loads the next set of books when reaching the end of the page.
✅ External Link for More Details – Clicking a book opens more details in a new tab via infoLink.
✅ Fully Responsive – Works seamlessly on desktop, tablet, and mobile devices.

🛠 Tech Stack
Frontend: HTML, CSS, JavaScript

API: FreeAPI.app

🎥 Screenshots
📌 Home Page ![image](https://github.com/user-attachments/assets/50adf6df-70bf-4ca1-87fa-efd74dc1e1a5)


📌 Home Page ![image](https://github.com/user-attachments/assets/70a7e5f2-cf1e-4d97-81e0-011809e2c11a)



🔗 Live Demo
🔴 Deployed URL: [Book Library Live](https://book-library-phi-five.vercel.app/)

🚀 Getting Started
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/sumitghugare1/book-library.git
cd book-library
2️⃣ Install Dependencies
No additional dependencies required. Just open index.html in a browser.

3️⃣ Run the Project
Simply open index.html in a browser or use a local server like:

sh
Copy
Edit
npx serve .
🌟 API Usage
We are using the GET endpoint to fetch books:
📌 API Endpoint:

sh
Copy
Edit
https://api.freeapi.app/api/v1/public/books
Example Response:

json
Copy
Edit
{
  "data": [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publisher": "Scribner",
      "publishedDate": "1925-04-10",
      "thumbnail": "https://example.com/gatsby.jpg",
      "infoLink": "https://example.com/gatsby"
    }
  ]
}
💻 Contributing
Feel free to contribute by submitting issues and pull requests.

📜 License
This project is open-source and free to use.

🔹 GitHub Repository: https://github.com/sumitghugare1/book-library/tree/main
🔹 Live Demo: [Book Library Live
](https://book-library-phi-five.vercel.app/)
