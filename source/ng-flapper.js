/**
 * ng-Flapper.js v0.0.1
 *
 * Original jQuery project: https://github.com/davatron5000/FitText.js
 *
 * Copyright 2015, Patrick Marabeas http://marabeas.io
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 12/06/2016
 */

(function(window, document, angular, undefined) {

    "use strict";

    angular.module('ngFlapper')


    .directive('flapperRepeat', ['$interval',

        function($interval) {

            function link(scope, element, attrs) {

                var timeoutId;
                var text = attrs.ngModel;

                var nbFlap = attrs.nbFlap;

                element.flapper({
                    width: nbFlap,
                    chars_preset: 'alphanum'
                });

                scope.$watch(attrs.ngModel, function(value) {
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
                require: '?ngModel',
                restrict: 'AE',
                scope: {},
                link: link
            };
        }
    ])

    .directive('flapper', [function() {

        function link(scope, element, attrs) {

            element.flapper({
                width: attrs.nbFlap,
                chars_preset: attrs.type || 'alphanum',
                timing: 100
            });

            attrs.$observe('ngModels', function(value) {
                if (value) {
                    element.val(value).change();
                }
            });

            scope.$watch('ngModel', function(value) {
                if (value) {
                    element.val(value).change();
                }
            });

        }

        return {
            require: '?ngModel',
            restrict: 'AE',
            transclude: true,
            scope: {},
            link: link
        };
    }]);

})(window, document, angular);
