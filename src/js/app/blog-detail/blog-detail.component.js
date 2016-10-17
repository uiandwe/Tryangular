'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function(Post, $http, $location, $routeParams, $scope){

            Post.query(function(data){
                $scope.notFound = true;
                angular.forEach(data, function(blog){

                    if (blog.id == $routeParams.id){
                        $scope.notFound = false;
                        $scope.post = blog;
                    }
                })
            });

            if ($scope.notFound){
                console.log("Not found");
                $location.path("/404")
            }

    }
});