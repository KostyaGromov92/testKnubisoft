/**
 * Created by Костя on 28.03.2017.
 */

$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true
    });

    $('.header__wrap-btn--item').click(function () {
       $('.form-block').css('display','block');
       $('html').css('overflow','hidden');
    });

    $('.form-block__main-form--close').click(function () {
        $('.form-block').css('display','none');
        $('html').css('overflow','visible');
    })
});

// Инициализируем объект с данными
var data = { updates: [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur doler adipiscing elit.',
        price: '$ 550.95'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur doler adipiscing elit.',
        price: '$ 350.95'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur doler adipiscing elit.',
        price: '$ 850.95'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur doler adipiscing elit.',
        price: '$ 550.95'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur doler adipiscing elit.',
        price: '$ 350.95'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur doler adipiscing elit.',
        price: '$ 850.95'
    }

]};

var template = Handlebars.compile( $('#template').html() );
$('.goods__center').append( template(data) );

document.getElementsByClassName('phone')[0].onkeypress = function(e) {

    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);

    if (chr == null) return;

    if (chr < '0' || chr > '9') {
        return false;
    }

};

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which)
    }

    return null;
}