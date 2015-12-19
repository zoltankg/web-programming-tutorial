console.info('listing agenda');



function getRow(lastName, firstName, email) {
    var row = '<tr class="favorit">' +
        '<td>' + lastName + '</td>' +
        '<td>' + firstName + '</td>' +
        '<td>' + email + '</td>' +
        '<td><a href="#">Edit</a> <a href="#">Delete</a></td>' +
        '</tr>';
    return row;
}

var contacts = [
                 ["Pop", "Ionel", "b@gm.net"],
                 ["Alb", "Maria", "c@fsd.com"],
                 ["Ioan", "Ion", "d@gm.net"],
                 ["Marian", "Laurentiu", "cg@gmd.net"]
];


var agendaTable = document.getElementById("agenda");
var agendaBody = agendaTable.getElementsByTagName("tbody")[0];



var contactsHTML = '';

for(var i = 0; i < contacts.length; i++){
    var person = contacts[i];
    contactsHTML += getRow(person[0], person[1], person[2]);
}

agendaBody.innerHTML = contactsHTML;