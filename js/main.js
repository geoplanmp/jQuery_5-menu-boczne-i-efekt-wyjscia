$(document).ready(function () {
    $('.hamburger').click(function () {
        if ($('.main-menu').hasClass('open')) {
            $('.main-menu').removeClass('open');
            $('.main-menu').css({'transform': 'translateX(0)'});
        }
        else {
            $('.main-menu').addClass('open');
            $('.main-menu').css({'transform': 'translateX(-100%)'});
        }
    });

    $('.main-menu-item').click(function (e) {
        e.preventDefault();                   
        $('body').fadeOut(2000);
         
        let hrefValue = $('a:hover').attr('href');
        $(location).attr('href', hrefValue);   
               
        console.log(hrefValue);                  
           	
    });
})







// $(document).ready(function () {
//     $('.container').click(function () {
//         $('#menu-list').toggleClass('content');
//             // 'display': 'flex',
//             // 'transform': 'translateX(0%)',
//             // 'transition': '10s transform ease-in-out'
//             // });
//         // $('#menu-list').sliiide({place: 'left', toggle: '.container'});
//     });
// })