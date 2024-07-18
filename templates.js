function getEntryTemplates(titel, price, likes, autor, year, genre) {
    return `
        <div class="entry">
            <h3>Name: ${titel}</h3><hr>
            <img class="entryImg" src="./assets/img/book2.png"><hr>
            <div class="entryMain">
                Price: ${price}
                ${likes}<br>
                <div class="BookInfo">
                    Autor: ${autor}<br>
                    Erscheinugsjahr: ${year}<br>
                    Genre: ${genre}
                </div>
            </div>
        </div>`;
}