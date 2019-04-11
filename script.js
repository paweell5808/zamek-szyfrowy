var generateDiv = function() {
    const tab = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Cofnij", "0", "Otwórz"];

    for (let i = 0; i < tab.length; i++) {
        Ext.DomHelper.append('keyboard', { tag: 'div', cls: 'btn', id: 'button', html: tab[i] });
    }
}
let counter_succes = 0;
let counter_unsucces = 0;

var succesCode = function() {
    counter_succes++;
    Ext.Msg.alert('Sukces!', 'Udało Ci się odblokować zamek!');
    Ext.get('code').dom.textContent = '';
    Ext.get('succes').dom.innerHTML = counter_succes;
}

var unsuccesCode = function() {
    counter_unsucces++;
    Ext.Msg.alert('Błędny kod!', 'Niestety podaleś błędny kod, spróbuj ponownie');
    Ext.get('code').dom.textContent = '';
    Ext.get('unsucces').dom.innerHTML = counter_unsucces;
}

Ext.onReady(function() {
    generateDiv();

    Ext.get('button').on('click', function(nr) {
        let clicked_number = nr.target.innerHTML;
        if ((clicked_number != "Cofnij") && (clicked_number != "Otwórz")) {
            Ext.get('code').dom.textContent += clicked_number;
        } else if (clicked_number === "Cofnij") {
            Ext.get('code').dom.textContent = Ext.get('code').dom.textContent.slice(0, -1);
        } else if (clicked_number === "Otwórz") {
            let valueofkey = Ext.get('code').dom.textContent;
            if (valueofkey == 24680) {
                succesCode();
            } else {
                unsuccesCode();
            }
        }
    })
});