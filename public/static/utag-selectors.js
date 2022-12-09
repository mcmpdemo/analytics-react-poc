


$(document).on('click', '#static-vs-server-link', function (e) {
    console.log("Static-vs-server clicked!!!");
    utag.link({
        "click": 'Static vs Server link',
    })
});

$(document).on('click', '#pre-rendering-link', function (e) {
    console.log("Pre-rendering clicked!!!");
    utag.link({
        "click": 'Pre-rendering link',
    })
});