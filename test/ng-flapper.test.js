'use strict';

describe('Directive : flapper', function() {

    // load the controller's module
    beforeEach(module('angular-flapper'));

    var $compile, form,
        $rootScope;

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    it('Replaces the element with the appropriate content', function() {

        // Compile a piece of HTML containing the directive
        form = $compile("<div flapper class='slow dark XS' ng-model='value' nbflap=5 />")($rootScope);

        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();

        // find number od flapper generated
        inject(function($injector) {
            // check the value right after directive attribute
            expect(form.attr('nbflap')).not.toBeUndefined();
            expect(form.attr('nbflap')).toEqual('5');
        });
    });

});
