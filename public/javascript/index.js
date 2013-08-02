(function() {
    "use strict";

    $(document).ready(function() {
//        M.navbar.setActive('navbar-link-brand');

//        $('#content div:first-child').toggleClass('picture-location-1').toggleClass('picture-lemond-by-picnic-table');
//        $('#content div:last-child').toggleClass('picture-mark-packing-truck');

//        setTimeoutOnRandomDiv();

    });

    var getRandomPictureDiv = function () {
        return $('#content div:first-child');
    };

    var getRandomPictureLocation = function() {
        var locations = [
            '.picture-location-1',
            '.picture-location-2',
            '.picture-location-3'
        ];

        return function() {
            return (Math.random() * locations.length) + 1;
        }
    };

    var getRandomPictureClass = function () {
        return 'picture-mark-packing-truck';
    };

    var getRandomTimeoutDuration = function () {
        return 30;
    };

    var setTimeoutOnRandomDiv = function () {
        setTimeout(function() {
            getRandomPictureDiv().toggleClass(getRandomPictureClass());
        }, getRandomTimeoutDuration());
    };

}());

