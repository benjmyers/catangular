/**
 * Created by myers on 2/13/14.
 */

var app = angular.module("app",[]);

app.controller("AppCtrl", function ($scope) {
    $scope.clickCt = 0;
})

app.directive("cats", function() {
   return {
       restrict: "E",
       scope: {

       },
       templateUrl: "allCats.html",
       link: function(scope, elem, attrs) {
        scope.meOW = function(ev) {
            var randomCat = Math.floor(1+Math.random()*9); // there are 9 cat images in the img/ dir
            elem.append("<img src='img/cat"+randomCat+".png' style='position:absolute; top:"+ev.y+"px; left:"+ev.x+"px;'/>");
        }
       }
   }
});