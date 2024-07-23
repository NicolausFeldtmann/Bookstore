function getEntryTemplates(titel, price, likes, autor, year, genre) {
    return `
        <div class="entry">
            <div class="entryHeader">
                <h3>${titel}</h3>
            </div>
            <div class="imgArea">
                <img class="entryImg" src="./assets/img/book2.png">
            </div>
            <div class="entryMain">
                <div class="entryNav">Price: ${price}€
                <div class="likes">${likes}</div></div>
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
                    </table>
                </div>
            </div>
            <div class="commentSecction">
                    <table>
                        <tbody class="commentArea">
                        </tbody>
                    </table>
            </div>
            <div Class="inputfield">
                <input class="nameInput" placeholder="Benutzername" id="nameInput" type="text">
                <textarea class="commentInput" placeholder="Dein Komentar..." id="commentInput" type="text"></textarea>
                <img class="commentImg" id="commentImg" src="./assets/img/pin.png">
            </div>
        </div>`; 
}