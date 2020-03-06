describe('Same test: ', function () {

    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
    }));

   

    it('Another test', function () {
        var $scope = {};
        var controller = $controller('testController', { $scope: $scope });
        expect($scope.message).toEqual('This is AngularJS Jasmine unit test!');
    });
})