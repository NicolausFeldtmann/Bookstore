

function init() {
    renderBookEntrys();
    loadLocal();
}

function renderBookEntrys() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        let titel = books[i].name;
        let price = books[i].price;
        let likes = books[i].likes;
        let autor = books[i].author;
        let year = books[i].publishedYear;
        let genre = books[i].genre;
        contentRef.innerHTML += getEntryTemplates(titel, price, likes, autor, year, genre);
    const commentArea = document.getElementsByClassName('commentArea');
    for (let j = 0; j < books[i].comments.length; j++) {
        commentArea[i].innerHTML +=`
        <tr class="comment">
            <td class="tdComment"><b>${books[i].comments[j].name}:</b></td>
            <td class="tdPost">${books[i].comments[j].comment}</td>
        </tr>`;
        }}}

        function like() {
            console.log();
           let i = 0; i < books.length; i++;
            if (books[i].liked) 
                {books[i].likes--;
                books[i].liked = false;
            }else{
                books[i].likes++;
                books[i].liked = true;
            }
            saveLocal();
            init();
        }

        function saveLocal() {
            let booksAstext = JSON.stringify(books);
            localStorage.setItem('books', booksAstext);
        }

        function loadLocal() {
            let savedBooks = JSON.parse(localStorage.getItem('books'));
            if (savedBooks) { books = savedBooks};
        }