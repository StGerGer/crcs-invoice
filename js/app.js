// If you need to debug anything in Angular, use window.telescope in the console
// This controls page changes and stuff

var results;

var app = angular.module('invoices', ['ngRoute']);

app.config(function($routeProvider) {
    var search = {
        templateUrl: 'views/search.html',
    },
    all = {
        templateUrl: 'views/all.html'
    }

    $routeProvider
        .when('/', search)
        .when('/all', all);
});

app.controller('invoiceCtrl', function($rootScope) {
    window.telescope = $rootScope;
    $rootScope.search_results = results;
    $rootScope.has_results = false;
    $rootScope.page = "search";
});

$('#searchbar').keyup(function() {
    console.log("kewl");
    if($('#searchbar').val() == "") {
        //$('.results-table').css("opacity", "0");
        db_search("zxqzxqykj"); // Clears the table... in a stupid way, but whatevs, amirite?
    } else {
        //$('.results-table').css("opacity", "1");
        db_search($('#searchbar').val());
    }
});
