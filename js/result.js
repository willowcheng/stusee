/**
 * Created by willowcheng on 15-09-26.
 */

$(document)
    .ready(function () {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;

        // create dropdown for some labels
        $('.ui.dropdown')
            .dropdown({
                on: 'click'
            })
        ;

        // create radio checkbox feature
        $('.ui.radio.checkbox')
            .checkbox()
        ;

        // create dimmer effect when hovering on the card
        $('.special.cards .image').dimmer({
            on: 'hover'
        });

    })
;