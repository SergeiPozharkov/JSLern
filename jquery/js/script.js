// метод text

// $(function () {
//     function widthAndHeight(element) {
//         let className = '.' + element;
//         let width = $(className).width();
//         let height = $(className).height();
//         $('p').text('Ширина: ' + width + ' ; Высота: ' + height);
//     }
//
//     widthAndHeight('small');
// });

// метод html

// $(function () {
//     console.log($('.gallery').html('<h1>Новый текст!</h1>'));
// });

// методы fadeIn и fadeOut

// $(function () {
// $('.text p').fadeOut(3000).fadeIn(4000);
//     function elementOut(element, time) {
//         if (time > 5000 || time < 1000 || isNaN(time)) {
//             return false;
//         } else {
//             let className = '.' + element;
//             $(className).fadeOut(time);
//         }
//     }
//
//     elementOut('text', 4000);
// });

// метод fadeTo

// $(function () {
//     $('.text').fadeTo(5000, 0.5).fadeTo(4000, 1);
// });

// методы slideUp и slideDown

// $(function () {
//     $('.text').slideUp(3000);
//     $('.text').slideDown(2000);
// });

// методы attr и removeAttr

// $(function () {
// console.log($('.big img').attr('src'));
// $('.big img').attr('src', 'images/gallery/1.jpg');
// $('.big img').removeAttr('src');
// });

// методы addClass и removeClass

// $(function () {
//     $('.gallery').removeClass();
//     $('.text p').addClass('test');
// });

// метод css

// $(function () {
// console.log($('p').css('font-size'));
// $('p').css('background-color', 'red');
// $('p').css('font-size', '20px');
// $('p').css({
//     'background-color': 'red',
//     'color': 'blue',
//     'font-size': '20px'
// });

// });


// метод animate

// $(function () {
//     $('p').animate({
//         'font-size': '20px'
//     }, 5000);
// });

// методы before, after, append и prepend

// $(function () {
//     $('p').before('<span>Text inside span before(begin) tag p</span>');
//     $('p').after('<span>Text inside span after tag p</span>');
//     $('p').append('<span>Text inside span in end tag p</span>');
//     $('p').prepend('<span>Text inside span and tag p</span>');
// });

// метод each и контекст this

// $(function () {
//     $('.small a img').each(function () {
//         if ($(this).attr('src') === 'images/gallery/1_mini.jpg') {
//             $(this).css('border', 'solid black 5px');
//         } else {
//             $(this).css('border', 'none');
//         }
//     });
// });

// свойство length

// $(function () {
//     let imgCount = $('img').length;
//     console.log(imgCount);
// });

// метод clone

// $(function () {
//     let cloneText = $('.text').remove();
//     $('body').append(cloneText);
// });

// events jquery

// $(function () {
//     $('.text p').mouseover(function () {
//         alert('Ты на велся на текст !');
//     });
// });

// модель событий в js

// $(function () {
//     let myElem = document.getElementById('text');
//
//     function elemClick() {
//         alert('event started');
//     }
//
//     myElem.onclick = elemClick;
// });

// модель событий на Jquery

// $(function () {
//     $('.button').click(function () {
//         alert('scroll!');
// $('.button').hide();
// });
// });

// событие hover

// $(function () {
//     let link = $('.menu li a');
//     link.hover(function () {
//         $(this).addClass('border');
//     }, function () {
//         $(this).removeClass('border');
//     });
// });

// Объект события eventObject

// $(function () {
//     $('body').click(function (e) {
//         alert(e.pageX + ' ' + e.pageY);
//     });
// });

// Отмена стандартного поведения

// $(function () {
//     $('.button').click(function (e) {
//         let answer = confirm('Send message?');
//         if (!answer) {
//             e.preventDefault();
//         }
//     });
// });

// Действия над элементами формы

// $(function () {
//     $(':checkbox').fadeOut(3000);
//     $(':radio').fadeOut(3000);
//     $(':submit').fadeOut(3000);
//     $(':reset').fadeOut(3000);
//     $(':text').fadeOut(3000);
//     $(':password').fadeOut(3000);
//     $(':file').fadeOut(3000);
// });

// Фильтры для элементов формы

// $(function () {
//     $('form :checkbox:checked').fadeOut(1000);
// });


// Метод val

// $(function () {
//     $(':submit').click(function () {
//         let value = $('textarea').val();
//         alert(value);
//     });
// });

// События submit и focus

// $(function () {
//     $('form ').submit(function (e) {
//         if ($('.text1').val() === '') {
//             e.preventDefault();
//             alert('Вы не заполнили поля!');
//         }
//     });
// });

// $(function () {
//     $('.text1').focus(function () {
//         $(this).css({
//             'background': 'red'
//         });
//     });
// });

// Блокировка элементов формы

// $(function () {
//     $(':submit').click(function (e) {
//         $('.text1').attr('disabled', 'disabled');
//         e.preventDefault();
//     });
//     $(':reset').click(function () {
//         $('.text1').removeAttr('disabled');
//         e.preventDefault();
//     });
// });

// --------------------------------------------------------------------------------------------------------------------

$(function () {
    $('.small a').click(function (e) {
        if ($('.big img').attr('src') !== $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
        e.preventDefault();
    });

    $('.button').click(function () {
        $('.gallery').slideToggle(900);
        if ($('.button').text() === '-') {
            $('.button').text('+');
        } else {
            $('.button').text('-');
        }
    });

    $('.small a img').click(function () {
        $('.small a img').fadeTo(500, 1).css('border', 'none');
        $(this).fadeTo(500, 0.6).css('border', 'solid black 2px');
    });
});




