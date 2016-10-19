
'use strict';

angular.module('blogList', []).
    component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function(Post, $location, $routeParams, $rootScope, $scope){

            $scope.goToItem = function(post){
                $location.path("/blog/"+ post.id)
            }

            $scope.items = Post.query(function(data){
                var numCols = 6;
                $scope.cssClass = 'col-sm-'+ numCols;
                $scope.items = data;
                $scope.colItems = chunkArrayInGroups(data, numCols)
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