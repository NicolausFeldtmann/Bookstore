

function init() {
    loadLocal();
    renderBookEntrys();

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
        contentRef.innerHTML += getEntryTemplates(titel, price, likes, heart, autor, year, genre, i);
        const commentArea = document.getElementsByClassName('commentArea');
        for (let j = 0; j < books[i].comments.length; j++) {
            commentArea[i].innerHTML +=`
                <tr class="comment">
                    <td class="tdComment"><b>${books[i].comments[j].name}:</b></td>
                    <td class="tdPost">${books[i].comments[j].comment}</td>
                </tr>`;
        }
    }
}

function like(idx) {
    const item = books[idx];
    if (item.liked) {
        item.likes--;
        item.liked = false;
        item.heart = heart[0];
    } else {
        item.likes++; 
        item.liked = true;
        item.heart = heart[1];
    }
    saveLocal();
    loadLocal();
    init();
}

function saveLocal(index) {
    const item = books[index];
    localStorage.setItem("books", JSON.stringify(books));

}

function loadLocal(idx) {
    const item = books[idx];
    let savedBook = localStorage.getItem('books');
    if (savedBook) {books = JSON.parse(savedBook);

    }
}

function addComment(idx) {
    const item = books[idx];
    let input = document.getElementById(`input(${idx})`);
    if (input.value ==0) {
        alert('Kein Kommentar!')
        return false;
    }
    books.push({name: 'Buchbert', comment: input.value});
    input.value = "";

    saveLocal();
    init();
}


            