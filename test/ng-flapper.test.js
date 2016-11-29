'use strict';

describe('Directive : flapper', function() {

    // load the controller's module
    beforeEach(module('angular-flapper'));

    var controller, scope;

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var node = $compile("<div flapper class='slow dark XS' ng-model='value' nb-flap=5 type='num' />")($rootScope);
        //var contents = element.contents();
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // find number od flapper generated
        var nb_digit = node.all(by.css('.digit')).count();

        console.log("Nb flappers", nb_digit);

        // Check that the compiled element contains the good number of flapper
        expect(nb_digit).toBe(5);
    });

});
