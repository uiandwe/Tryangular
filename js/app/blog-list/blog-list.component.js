'use strict';

angular.module('blogList', []).
    component('blogList', {
        //template: "<div  ><h1 class='new-class'>{{title}}</h1><button ng-click='someClickTest()'>click me</button></div>",
        templateUrl: '/template/blog-list.html',
        controller: function($scope){

            var blogItems = [
                {title: "soem Title", id:1, description: "this si a book"},
                {title: " Title", id:2, description: "thiasdfsadfook"},
                {title: "adf Title", id:3, description: "asdf sad fsthis si a book"},
                {title: "123  asdf Title", id:4, description: "12 312 31 2this si a book"},
            ]

            $scope.items = blogItems;

            $scope.title = "hi there"
            $scope.clicks = 0
            $scope.someClickTest = function(){
                console.log("clicked");

                $scope.clicks += 1
                $scope.title = "clicke" + $scope.clicks + " times";
            }
            
        }
    });
    
//    controller('BlogListController', function($scope){
//        console.log("!");
//        $scope.title = "hi there"
//        $scope.clicks = 0
//        $scope.someClickTest = function(){
//            console.log("clicked");
//
//            $scope.clicks += 1
//            $scope.title = "clicke" + $scope.clicks + " times";
//        }
//});