
addEvent(window, 'load', function() {
    var person = new Person(),
        person_view = new PersonView(person);
    person.bulkSet({
            'name': 'Andrey',
            'last_name': 'Granat',
            'skype': 'kreol_1992',
            'email': 'Granat.Andrey@gmail.com',
            'phone': '067-63-53-277',
            'age': '21',
            'sex': 'M'});
    person_view.update();
});