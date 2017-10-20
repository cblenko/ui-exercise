$(document).on('ready', function bootstrap() {
    $('#nav-toggle').on('click', function toggle(e) {
        $('#nav-items').toggleClass('show');
    })
});