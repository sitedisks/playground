describe('Same test', function () {

    var $controller;
    beforeEach(module('app'));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));


    it('Condition is true', function () {
        var $scope = {};
        var controller = $controller('TestCtrl', {$scope: $scope});
        expect($scope.message).toBe('Hello world!');
    })
})