function getEntryTemplates(titel, price, likes, heart, autor, year, genre ,idx) {
   
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
                <div class="likes">${likes}<img class="heart" onclick="like(${idx})" src="${heart}"></div></div>
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
                <textarea class="commentInput" id="input(${idx})" placeholder="Dein Komentar..." type="text"></textarea>
                <div class="commentImgSection">
                    <img class="commentImg" onclick="addComment(${idx})" src="./assets/img/pin.png">
                </div>
            </div>
        </div>`; 
}