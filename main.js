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
       link: function(scope, elem, attrs) {
        scope.meOW = function(ev) {

            var images = ['cat1.jpg','cat2.png','cat3.png'];
            elem.append("<img src='img/"+images[0]+"' style='position:relative; top:"+ev.y+"; left:"+ev.x+";'/>");
        }
       }
   }
});