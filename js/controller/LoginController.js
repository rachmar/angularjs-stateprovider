function LoginController($scope) {
    $scope.firstName;
    $scope.lastName = "Doe";

    $scope.submit = function() {
        alert($scope.firstName + " " + $scope.lastName);
    };




};

angular.module('app').controller('LoginController', LoginController);
