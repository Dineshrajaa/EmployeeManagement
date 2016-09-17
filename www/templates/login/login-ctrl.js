angular.module('empman.controllers', [])
    .controller('loginCtrl', ['$scope', '$state', 'loginSvc', function($scope, $state, loginSvc) {
        $scope.loginData = {}; // holder to save login data
        $scope.login = function() {
            var loginCredentials = {};
            loginCredentials.username = $scope.loginData.uname;
            loginCredentials.password = $scope.loginData.upass;
            loginSvc.authenticateUser(loginCredentials).then(function(response) {
                var res = response.data;
                if (res.login.status) {
                    if (res.clients) {
                        localStorage.clients = res.clients;
                    }
                    if (res.companyId) {
                        localStorage.companyId = res.companyId;
                    }
                    $state.go('home');
                } else {
                    alert("Login Failed");
                }
            });
        };
    }])
