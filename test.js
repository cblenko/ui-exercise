$(document).on('ready', function bootstrap() {
    $('#nav-toggle').on('click', function toggle(e) {
        $('#nav-items').toggleClass('show');
    })

    // implemted this way due to lack of transition in <IE10
    $('#side-bar').on('click', function toggle(e) {
        var main = $('main'),
            sideBar = $('main > div.sidebar');

        if(main.attr('data-sidebar')){
            main.animate({ paddingRight: 0 });
            sideBar.animate({ left: '100%' });
            main.removeAttr('data-sidebar');
        } else {
            main.animate({ paddingRight: '30%' });
            sideBar.animate({ left: '70%' });
            main.attr('data-sidebar', true);
        }
        
    })
});