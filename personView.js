function PersonView(person) {
    var eventHandler = function() {
            var btn_preview = document.getElementById('btn_preview'),
                btn_edit = document.getElementById('btn_edit'),

                name_tab = document.getElementById('name_tab'),
                contact_tab = document.getElementById('contact_tab'),
                personal_tab = document.getElementById('personal_tab'),
                active_tab_name = 'name',
                inputs = {'name': ['name', 'last_name'],
                            'contacts': ['skype', 'email', 'phone'],
                            'personal': ['age', 'sex']
                        },
                
                showTabContent = function(name) {
                    var i,
                        tab_captions = document.getElementsByClassName('tab_caption');

                    document.getElementById('tab_' + active_tab_name).style.textDecoration = 'none';
                    document.getElementById('tab_' + active_tab_name + '_content').style.display = 'none';

                    document.getElementById('tab_' + name).style.textDecoration = 'underline';
                    document.getElementById('tab_' + name + '_content').style.display = 'block';

                    for(i=0; i < inputs[active_tab_name].length; i++) {
                        person.set(inputs[active_tab_name][i], document.getElementById('edit_' + inputs[active_tab_name][i] + '_field').value);
                    }

                    active_tab_name = name;
                    this.update();
                },

                showPage = function(name) {
                    for(i=0; i < inputs[active_tab_name].length; i++) {
                        person.set(inputs[active_tab_name][i], document.getElementById('edit_' + inputs[active_tab_name][i] + '_field').value);
                    }

                    this.update();

                    document.getElementById('preview_page').style.display = 'none';
                    document.getElementById('edit_page').style.display = 'none';
                    document.getElementById(name + '_page').style.display = 'block';
                };

            addEvent(btn_preview, 'click', showPage.bind(this, 'preview'));
            addEvent(btn_edit, 'click', showPage.bind(this, 'edit'));

            addEvent(tab_name, 'click', showTabContent.bind(this, 'name'));
            addEvent(tab_contacts, 'click', showTabContent.bind(this, 'contacts'));
            addEvent(tab_personal, 'click', showTabContent.bind(this, 'personal'));
        }.bind(this),

        start = function() {
            eventHandler();
        };

    this.update = function() {
        for(property in person.toJSON()) {
            if(person.toJSON()[property] !== '') {
                document.getElementById('edit_' + property + '_field').value = person.toJSON()[property];
                document.getElementById('preview_' + property + '_field').innerHTML = person.toJSON()[property];
            } else {
                document.getElementById('edit_' + property + '_field').value = 'none';
                document.getElementById('preview_' + property + '_field').innerHTML = 'none';
            }
        }

        return this;
    };

    start();

    return this;
}