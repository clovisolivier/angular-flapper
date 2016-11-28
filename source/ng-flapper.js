/**
 * ng-Flapper.js v0.0.1
 *
 *
 * Copyright 2016, Clovis OLIVIER
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 28/11/2016
 */

(function(window, document, angular, undefined) {

    "use strict";

    angular.module('angular-flapper')


    .directive('flapperRepeat', ['$interval', function($interval) {

        function link(scope, element, attrs) {

            var timeoutId, text;

            element.flapper({
                width: attrs.nbFlap,
                format: attrs.format,
                align: attrs.align,
                padding: attrs.padding,
                chars_preset: attrs.type,
                timing: attrs.timing, // the maximum timing for digit animation
                min_timing: attrs.min - timing, // the minimum timing for digit animation
                threshhold: attrs.threshhold, // the point at which Flapper will switch from
                // simple to detailed animations
            });

            scope.$watch('ngModel', function(value) {
                if (value) {
                    text = value;
                }
            });

            element.on('$destroy', function() {
                $interval.cancel(timeoutId);
            });

            setTimeout(function() {
                element.val(text).change();
                var toggle = false;
                timeoutId = setInterval(function() {
                    if (toggle) {
                        element.val(text).change();
                    } else {
                        element.val('').change();
                    }
                    toggle = !toggle;
                }, 5000);
            }, 1000);

        }

        return {
            restrict: 'A',
            transclude: true,
            scope: {
                ngModel: '=',
            },
            link: link
        };
    }])


    .directive('flapper', [function() {

        function link(scope, element, attrs) {

            element.flapper({
                width: attrs.nbFlap,
                format: attrs.format,
                align: attrs.align,
                padding: attrs.padding,
                chars_preset: 'alphanum' || attrs.type,
                timing: attrs.timing, // the maximum timing for digit animation
                min_timing: attrs.min - timing, // the minimum timing for digit animation
                threshhold: attrs.threshhold, // the point at which Flapper will switch from
                // simple to detailed animations
            });

            scope.$watch('ngModel', function(value) {
                if (value) {
                    element.val(value).change();
                }
            });

        }

        return {
            restrict: 'A',
            transclude: true,
            scope: {
                ngModel: '=',
            },
            link: link
        };

    }])

})(window, document, angular);
