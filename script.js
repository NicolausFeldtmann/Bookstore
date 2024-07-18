function init() {
    renderBookEntrys();
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
    }
}



