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



function showContacts(contacts) {
    var agendaTable = document.getElementById("agenda");
    var agendaBody = agendaTable.getElementsByTagName("tbody")[0];



    var contactsHTML = '';

    for(var i = 0; i < contacts.length; i++){
        var person = contacts[i];
        contactsHTML += getRow(person.lastName, person.firstName, person.email);
    }

    agendaBody.innerHTML = contactsHTML;

}




$.ajax({
    url: "js/mocks/load-agenda.json",
    context: document.body
}).done(function(contacts) {
    console.debug('loaded contacts', contacts);
    showContacts(contacts);
});
