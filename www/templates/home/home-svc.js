angular.module('empman.services')

.service('doclistSvc',['$http','serviceCon',function($http,serviceCon){
	this.getDocList=function(companyId){
		return $http.get(serviceCon.url+'history/getLastWeeksDockets',{params:companyId});
	}
}])