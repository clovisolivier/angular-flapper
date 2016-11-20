'use strict';

describe('Controller : AdminV2Ctrl', function() {
  
    // load the controller's module
    beforeEach(module('myAppV2App'));
             
    var controller, scope;
 
    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('AdminV2Ctrl', {
            $scope: scope
                // place here mocked dependencies
        });
    }));    


    it('Controller should be defined', function() {
        expect(controller).toBeDefined();
        expect(scope).toBeDefined();
    });
});
