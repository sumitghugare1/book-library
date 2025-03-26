const bookContainer = document.getElementById("bookContainer");
const searchInput = document.getElementById("search");
const toggleViewBtn = document.getElementById("toggleView");
const sortTitleBtn = document.getElementById("sortTitle");
const sortDateBtn = document.getElementById("sortDate");
const loadMoreBtn = document.getElementById("loadMore");
const pageIndicator = document.getElementById("pageIndicator");

let books = [];
let currentPage = 1;
const apiUrl = "https://api.freeapi.app/api/v1/public/books";
const placeholderImage = "https://via.placeholder.com/150?text=No+Image";

async function fetchBooks(page = 1) {
    try {
        const response = await fetch(`${apiUrl}?page=${page}`);
        const data = await response.json();
        books = books.concat(data.data);
        renderBooks(books);
        pageIndicator.textContent = `Page: ${currentPage}`;
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

function renderBooks(bookList) {
    bookContainer.innerHTML = "";
    bookList.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <img src="${book.thumbnail || placeholderImage}" alt="Book Cover">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author || 'Unknown'}</p>
            <p><strong>Publisher:</strong> ${book.publisher || 'Unknown'}</p>
            <p><strong>Published Date:</strong> ${book.publishedDate || 'N/A'}</p>
            <a href="${book.infoLink}" target="_blank">More Details</a>
        `;
        bookContainer.appendChild(bookElement);
    });
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        (book.author && book.author.toLowerCase().includes(searchTerm))
    );
    renderBooks(filteredBooks);
});

toggleViewBtn.addEventListener("click", () => {
    bookContainer.classList.toggle("grid-view");
    bookContainer.classList.toggle("list-view");
});

sortTitleBtn.addEventListener("click", () => {
    books.sort((a, b) => a.title.localeCompare(b.title));
    renderBooks(books);
});

sortDateBtn.addEventListener("click", () => {
    books.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));
    renderBooks(books);
});

loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    fetchBooks(currentPage);
});

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentPage++;
        fetchBooks(currentPage);
    }
});

fetchBooks();
