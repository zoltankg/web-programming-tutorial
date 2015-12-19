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
    {lastName:"Pop",    firstName:"Ionel",      email:"b@gm.net"},
    {lastName:"Alb",    firstName:"Maria",      email:"c@fsd.com"},
    {lastName:"Ioan",   firstName:"Ion",        email:"d@gm.net"},
    {lastName:"Marian", firstName:"Laurentiu",  email:"cg@gmd.net"}
];


var agendaTable = document.getElementById("agenda");
var agendaBody = agendaTable.getElementsByTagName("tbody")[0];



var contactsHTML = '';

for(var i = 0; i < contacts.length; i++){
    var person = contacts[i];
    contactsHTML += getRow(person.lastName, person.firstName, person.email);
}

agendaBody.innerHTML = contactsHTML;