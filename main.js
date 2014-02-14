/**
 * Created by myers on 2/13/14.
 */

var app = angular.module("app", []);

app.directive("cats", function () {
    var catCt = 0;
    var catClasses = [];
    return {
        restrict: "E",
        scope: {},
        templateUrl: "allCats.html",
        link: function (scope, elem, attrs) {
            scope.meOW = function (ev) {
                // Add a cat
                scope.addCat(ev);
                // Make all the cats move
                scope.moveCats();
            },
            scope.addCat = function (ev) {
                var randomCat = Math.floor(1 + Math.random() * 9); // there are 9 cat images in the img/ dir
                catClasses.push(catCt + "cat");
                elem.append("<img class='" + catCt + "cat' src='img/cat" + randomCat + ".png' style='position:absolute; top:" + ev.y + "px; left:" + ev.x + "px;'/>");
                catCt++;
            },
            scope.moveCats = function(mult, accelRate) {
                if(!mult) {
                    mult = 40;
                    accelRate = 1000;
                }

                catClasses.forEach(function (cat) {
                    var el = $('.' + cat);
                    var x = el.offset().left + Math.floor(-mult/2 + Math.random() * mult);
                    var y = el.offset().top + Math.floor(-mult/2 + Math.random() * mult);
                    var accel = Math.floor(Math.random() * accelRate + 100);
                    el.animate({
                        top: y,
                        left: x
                    }, accel);
                });
            },
            scope.clearCats = function() {
              $('img').remove();
              catCt = 0;
              catClasses = [];
            },
            scope.wiggleCats = function() {
                scope.moveCats();
            },
            scope.crazyCats = function() {
                scope.moveCats(500, 200);
            },
            scope.gatherCats = function() {
                catClasses.forEach(function (cat) {
                    var el = $('.' + cat);
                    el.animate({
                        top: 100,
                        left: 200
                    }, 500);
                });
            }
        }
    }
});