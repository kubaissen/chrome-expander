var WebImagesResizer = (function() {
    'use strict';

    var hyperlinks = $$('a');// || document.querySelectorAll('a');
    var urlArray = getUrlFromLinks(hyperlinks);

    function getUrlFromLinks(links) {
        var array = [];
        for ( let i = 0; i < links.length; i++ ) {
            var urlString = links[i].href;
            if ( urlString.length === 0 ) {
                continue;
            }
            urlString = linkChecker(urlString);

            if ( array.indexOf(urlString) !== -1 ) {
                continue;
            }
            array.push(urlString);
            imagesFromLinks(urlString);
        }
        return array;
    }

    function linkChecker(url) {
        if (url.match(/.(\#|\@).[^$]/gmi)) {
            return false;
        }

        url = url.replace(/\#+$/gim, '');
        return url;

    }

    function imagesFromLinks(url) {

        var img = new Image();
        img.addEventListener('error', function (e) {
            img.remove();
        }, false);

        function onLoadStartHandler() {
            document.body.appendChild(img);
        }

        img.onloadstart = onLoadStartHandler(img);


        img.src = url;

        return true;

    }

})();