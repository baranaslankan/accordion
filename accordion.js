
function accordion_toggle(id) {
    console.log(`open ${id}`);

    var selectedSection = document.getElementById(id);


    if (selectedSection.style.display == 'block') {
        selectedSection.style.display = 'none';
    }
    else {
        var allSections = document.getElementsByClassName('accordion-section');

        for (var i = 0; i < allSections.length; i++) {
            allSections[i].style.display = 'none';
        }

        selectedSection.style.display = 'block';
    }

}