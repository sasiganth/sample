'use strict';

angular.module('gopaddleAdminApp').controller('requestCtrl',['$scope','RequestService','ngTableParams', function ($scope, RequestService, ngTableParams){

           
    
     $scope.kubeTable = new ngTableParams({
     page: 1,            // show page number
     count: 5,
     sorting: {Name:'asc'}
           // count per page
     }, {        
     getData: function($defer, params) {
        
         RequestService.getData({p:params.parameters().page, s:params.parameters().count}).then(function(data){
         $scope.kubes = data;
         debugger;
         params.total(data.count);
          // params.settings({ counts: data.result.length > 5 ? [10,25,50,100] : []});
         $defer.resolve(data);
});
     }});

        /*  $scope.sort = function(keyname){
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }*/
    }]);
/*.filter('dateRange', function() {
        return function(kubes, from, to) {
            return kube.filter(function(data) {
                return data.JDate >= from && data.JDate <= to;
            });
        }
        });*/

