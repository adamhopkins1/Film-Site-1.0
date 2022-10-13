$("#navbarSupportedContent").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbarSupportedContent").collapse('hide');
    });
});