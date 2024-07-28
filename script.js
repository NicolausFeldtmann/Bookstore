

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
        let heart = books[i].heart;
        let autor = books[i].author;
        let year = books[i].publishedYear;
        let genre = books[i].genre;
        contentRef.innerHTML += getEntryTemplates(titel, price, likes, heart, autor, year, genre);
    const commentArea = document.getElementsByClassName('commentArea');
    for (let j = 0; j < books[i].comments.length; j++) {
        commentArea[i].innerHTML +=`
        <tr class="comment">
            <td class="tdComment"><b>${books[i].comments[j].name}:</b></td>
            <td class="tdPost">${books[i].comments[j].comment}</td>
        </tr>`;
        }}}

        function like() {
            let i = 0; i < books.length; i++
            if (books[i].liked) 
                {books[i].likes--;
                books[i].liked = false;
                books[i].heart = heart[i];
            }else{
                books[i].likes++; 
                books[i].liked = true;
                books[i].heart = heart[0];
            }
            saveLocal();
            loadLocal();
            init();
        }

        function saveLocal() {
            console.log("books");
            localStorage.setItem("books", JSON.stringify(books));

        }

        function loadLocal() {
            console.log();
            let books = localStorage.getItem("books");
            if (books) {books = JSON.parse(books);
            }
        }


            