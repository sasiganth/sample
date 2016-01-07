'use strict';
angular.module('gopaddleAdminApp').factory('RequestService', ['$rootScope', '$q', '$http', function RequestService($rootScope, $q, $http){
	
	return{
		getData: function(){
		//	debugger;
        var deferred, xhr;
        deferred = $q.defer();
        xhr = $http.get('/views/database.json');
        xhr.success(function(data) {
          deferred.resolve(data);
        });
        xhr.error(function(data) {
        deferred.reject(data);
        });
        return deferred.promise;
      },
  }
		
	}]);
