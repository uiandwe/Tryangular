
'use strict';

angular.module('blogList', []).
    component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function(Post, $location, $routeParams, $rootScope, $scope){

            $scope.goToItem = function(post){
                $location.path("/blog/"+ post.id)
            }

            $scope.items = Post.query();

            
        }
    });