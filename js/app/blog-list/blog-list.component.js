'use strict';

angular.module('blogList', []).
    component('blogList', {
        template: "<div  ><h1 class='new-class'>{{title}}</h1><button ng-click='someClickTest()'>click me</button></div>",
        
        controller: function($scope){
            console.log("!");
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