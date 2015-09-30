/**
 * Created by willowcheng on 15-09-15.
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

        // create dropdown for country selection
        $('.ui.dropdown')
            .dropdown({
                on: 'click'
            })
        ;
        
        // create login modal
        $('.login').click(function () {
            $('.ui.modal')
                .modal('show')
            ;
        });

    })
;