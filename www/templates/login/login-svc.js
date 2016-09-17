angular.module('empman.services',[])
.service('loginSvc',['$http','serviceCon',function($http,serviceCon){
	this.authenticateUser=function(userCredentials){
		return $http.get(serviceCon.url+'UserAuthentication/login/dologin',{params:userCredentials});
	}
}])