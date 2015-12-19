console.info('listing agenda');

var row = '<tr class="favorit">' +
            '<td>Pop</td>' +
            '<td>Ionel</td>' +
            '<td>a@est.com</td>' +
            '<td><a href="#">Edit</a> <a href="#">Delete</a></td>' +
    '</tr>';

var agendaTable = document.getElementById("agenda");
var agendaBody = agendaTable.getElementsByTagName("tbody")[0];

agendaBody.innerHTML = row + row + row;