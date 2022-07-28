// ROZWIĄZANIE WYKŁAD

// $(document).ready(function () {
//     $('.hamburger').click(function () {
//         $('.main-menu').toggleClass('open');
//     });

//     $('.main-menu-item a').click(function (e) {
//         e.preventDefault();
//         $('body').fadeOut(2000, function(){
//             window.location.href = $(e.target).attr('href');
//         });
//     });
// });


// ROZWIĄZANIE MOJE

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

    $('.main-menu-item a').click(function (e) {
        e.preventDefault();                   
        $('body').fadeOut(2000, function(){
            window.location.href = $(e.target).attr('href');
        });                       	
    });
});








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