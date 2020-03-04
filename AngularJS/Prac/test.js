describe('Same test', function () {


    beforeEach(module('app_angularJS'));

    var $controller;

    beforeEach(inject(function(_$controller_){
              $controller = _$controller_;
    }));


    it('Condition is true', function () {
        expect('AngularJS').toBe('AngularJS');
    })
})