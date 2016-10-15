'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($location, $routeParams, $scope){

            var blogItems = [
                {title: "soem Title", id:1, description: "this si a book"},
                {title: " Title", id:2, description: "thiasdfsadfook"},
                {title: "adf Title", id:3, description: "asdf sad fsthis si a book"},
                {title: "123  asdf Title", id:4, description: "12 312 31 2this si a book"},
            ]


            console.log($routeParams)
            $scope.title = "Blog " +$routeParams.id
            $scope.notFound = true
            angular.forEach(blogItems, function(blog){
                if (blog.id == $routeParams.id){
                    $scope.notFound = false;
                    $scope.post = blog;
                }

            })

            console.log($scope.post);

            if ($scope.notFound){
                console.log("Not found")
                $location.path("/404")
            }

    }
});