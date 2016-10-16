'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($http, $location, $routeParams, $scope){



            $http.get("/json/posts.json").then(successCallback, errorCallback);

            function successCallback(response, status, config, statusText){
                $scope.notFound = true;

                var blogItems = response.data;
                $scope.posts = blogItems;

                angular.forEach(blogItems, function(blog){

                    if (blog.id == $routeParams.id){
                        $scope.notFound = false;
                        $scope.post = blog;
                    }
                })

            }

            function errorCallback(response, status, config, statusText){

            }

            if ($scope.notFound){
                console.log("Not found");
                $location.path("/404")
            }


            console.log($routeParams);






    }
});