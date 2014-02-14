/**
 * Created by myers on 2/13/14.
 */

var app = angular.module("app",[]);

app.directive("cats", function() {
   return {
       restrict: "E",
       scope: {

       },
       templateUrl: "allCats.html",
       link: function(scope) {
        scope.meOW = function() {
            console.log("MEOW!!!");
        }
       }
   }
});