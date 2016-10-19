
'use strict';

angular.module('blogList', []).
    component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function(Post, $location, $routeParams, $rootScope, $scope){

            $scope.goToItem = function(post){
                $location.path("/blog/"+ post.id)
            }

            $scope.changeCols = function(number){
                $scope.numCols = 2;
                if(angular.isNumber(number)){
                    $scope.numCols = number;
                }
                setupCol($scope.items, $scope.numCols);
            }

            $scope.loadingQuery = false;
            $scope.$watch(function(){
                if($scope.query){
                    $scope.loadingQuery  = true;
                    $scope.cssClass = 'col-sm-12'
                }
                else{
                    if($scope.loadingQuery ){
                        setupcol($scope.items, 2);
                        $scope.loadingQuery  = false;
                    }

                }
            })

            function setupCol(data, number){
                $scope.numCols = 2;
                if(angular.isNumber(number)){
                    $scope.numCols = number;
                }

                $scope.cssClass = 'col-sm-'+ (12/$scope.numCols);
                $scope.items = data;
                $scope.colItems = chunkArrayInGroups(data, $scope.numCols)
            }

            Post.query(function(data){
                setupCol(data, 4)
            }, function(errorData){

            });

            function chunkArrayInGroups(array, unit){
                var results = [],
                    length = Math.ceil(array.length / unit);
                for(var i = 0; i< length; i++){
                    results.push(array.slice(i * unit, (i + 1) * unit));

                }

                return results;
            }
            
        }
    });