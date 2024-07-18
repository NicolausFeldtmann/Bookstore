function getEntryTemplates(titel, price, likes, autor, year, genre) {
    return `
        <div class="entry">
            <div class="entryHeader">
                <h3>${titel}</h3>
            </div><hr>
            <div class="imgArea">
            <img class="entryImg" src="./assets/img/book2.png">
            </div><hr>
            <div class="entryMain">
                <div class="entryNav">Price: ${price}
                <div class="likes">${likes}<br></div></div>
                <div class="BookInfo">
                    <table class="infoTable">
                        <tr>
                            <td>Autor</td> <td>:${autor}</td>
                        </tr>
                        <tr>
                            <td>Erscheinugsjahr</td> <td>:${year}</td>
                        </tr>
                        <tr>
                            <td>Genre</td> <td>:${genre}</td>
                        </tr>
                </div>
            </div>
        </div>`;
}