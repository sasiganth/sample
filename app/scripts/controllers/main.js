'use strict';

angular.module('gopaddleAdminApp').controller('requestCtrl',['$scope','RequestService','ngTableParams','$filter', function ($scope, RequestService, ngTableParams,$filter){

    $scope.filter = {
        startDate:undefined,
        endDate: undefined
    };   
    

        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value + (1e-10);},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Months'
                },
                yAxis: {
                    axisLabel: 'No of Users',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.data1 = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "Jan" ,
                        "value" : 29.765957771107
                    } ,
                    {
                        "label" : "Feb",
                        "value" : 100
                    } ,
                    {
                        "label" : "Mar" ,
                        "value" : 62.807804682612
                    } ,
                    {
                        "label" : "Apr" ,
                        "value" : 16.45946739256
                    } ,
                    {
                        "label" : "May" ,
                        "value" : 150.19434030906893
                    } ,
                    {
                        "label" : "Jun" ,
                        "value" : 98.079782601442
                    } ,
                    {
                        "label" : "Jul" ,
                        "value" : 83.925743130903
                    } ,
                    {
                        "label" : "Aug" ,
                        "value" : 55.1387322875705
                    }
                ]
            }
        ]


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