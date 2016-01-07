'use strict';

angular.module('gopaddleAdminApp').controller('requestCtrl',['$scope','RequestService','ngTableParams','$filter', function ($scope, RequestService, ngTableParams,$filter){

    $scope.filter = {
        startDate:undefined,
        endDate: undefined
    };   
    
     $scope.kubeTable = new ngTableParams(
     {
         page: 1,            // show page number
         count: 5,
         sorting: {
                    name: 'asc'     // initial sorting
                },
         filter: $scope.filter
               // count per page
     }, 
     {     
         debugMode: true,   
         getData: function($defer, params)     
             
         {    
          debugger;    
             RequestService.getData({p:params.parameters().page, s:params.parameters().count}).then(function(data){
                 $scope.kubes = data;           
                 $scope.orderedData = params.sorting() ? $filter('orderBy')($scope.kubes, params.orderBy()) : data;              
                 $scope.orderedData = $filter('filter')($scope.orderedData, params.filter());              
                 params.total(10);
          
                  // params.settings({ counts: data.result.length > 5 ? [10,25,50,100] : []});
                 $defer.resolve($scope.orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
               debugger;
                 
             });
         }
     });
        $scope.$watch("keysFilter", function(newvalue, oldvalue) {
            $scope.kubeTable.reload();
        });

      /*   $scope.sort = function(keyname){
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }*/
    }]);

/*getData: function($defer, params) {
            var orderedData = params.sorting() ? $filter('orderBy')($scope.completedQueries, params.orderBy()) : data;
            orderedData = $filter('filter')(orderedData, params.filter());
            params.total(orderedData.length);
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
        params.total(data.count);
                  // params.settings({ counts: data.result.length > 5 ? [10,25,50,100] : []});
                 $defer.resolve(data);*/