// If you need to debug anything in Angular, use window.telescope in the console
// This controls page changes and stuff

var results;

var app = angular.module('invoices', ['ngRoute']);

app.config(function($routeProvider) {
    var search = {
        templateUrl: 'views/search.html',
    },
    all = {
        templateUrl: 'views/all.html',
        controller: "searchCtrl"
    }

    $routeProvider
        .when('/', search)
        .when('/all', all);
});

app.controller('invoiceCtrl', function($scope, $document) {
    window.telescope = $scope;
    $scope.search_results = results;
    $scope.has_results = false;
    $scope.page = "search";

    $scope.onSearchPress = function(event) {
        console.log("kewl");
        if($('#searchbar').val() == "") {
            //$('.results-table').css("opacity", "0");
            db_search("zxqzxqykj"); // Clears the table... in a stupid way, but whatevs, amirite?
        } else {
            //$('.results-table').css("opacity", "1");
            db_search($('#searchbar').val());
        }
    }
});