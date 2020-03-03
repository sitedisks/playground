(function(){
    'use strict';

    app.controller('componentAddCtrl', ['$scope', function($scope){
        $scope.message = "component add";
        $scope.password = '';

        $scope.grade = grade;

        function grade() {
            var size= $scope.password.length;
            if(size > 8){
                $scope.strength = 'strong';

            }else if (size > 3) {
                $scope.strength = 'medium';

            }
            else {
                $scope.strength = 'weak';
            }
        }

    }]);
})();