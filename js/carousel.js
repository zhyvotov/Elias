/**
 * Created by Ivashkevych on 21.11.2014.
 */
(function() {
    'use strict';

        $.getJSON("json/agile_carousel_data.json", function (data) {
            $(document).ready(function () {
                $("#basic_slideshow").agile_carousel({
                    carousel_data: data,
                    carousel_outer_height: 228,
                    carousel_height: 228,
                    slide_height: 230,
                    carousel_outer_width: 480,
                    slide_width: 480,
                    transition_type: "fade",
                    timer: 4000
                });
            });
        });
})();
