console.info('Shopping list for today');

function getRow (produs, cantitate) {

        return '<tr>' +
               '<td>' + produs + '</td>' +
               '<td>' + cantitate + '</td>' +
               '</tr>';

}

document.getElementsByTagName('tbody')[0].innerHTML = getRow("Paine", 1) + getRow("Suc", 3);



