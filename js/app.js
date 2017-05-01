// If you need to debug anything in Angular, use window.telescope in the console
// This controls page changes and stuff

var results;

var app = angular.module('invoices', ['ngRoute']);

app.config(function($routeProvider) {
    var search = {
        templateUrl: 'views/search.html',
    },
    all = {
<<<<<<< HEAD
        templateUrl: 'views/all.html'
    },
    create = {
        templateUrl: 'views/create.html'
    },
    edit = {
        templateUrl: 'views/edit.html'
=======
        templateUrl: 'views/all.html',
        controller: "searchCtrl"
>>>>>>> f6b2955d0b0703d3eeb9a41a5081bc39dbb78279
    }

    $routeProvider
        .when('/', search)
        .when('/all', all)
        .when('/create', create)
        .when('/edit', edit);
});

<<<<<<< HEAD
app.controller('invoiceCtrl', function($scope, $location) {
    window.telescope = $scope;
    window.telelocation = $location;
    $scope.search_results = results;
    $scope.has_results = false;
    $scope.page = "search";

    $scope.invoice = {
        id: 0, // Used by edit function
        paid_by: "Cash",
        discount_type: "%",
        discount: 0,
        subtotal: 0,
        tax: 0,
        total: 0
    };

    $scope.invoice.item_object_array = [{}];

    localStorage.getItem("invoice_storage") && ($scope.invoice = JSON.parse(localStorage.getItem("invoice_storage")));

    $scope.changePage = function(page, id) {
        $location.path(page);
        if(id) {
            $scope.invoice.id = id;
            get_one(id);
        }
    }

    $scope.validateEmail = function(email) {
        if(!email && email != "") { // I literally don't have the slightest clue why this works. If email validation isn't working, here's why
            $("#email").addClass("form-control-warning");
            $("#email-group").addClass("has-warning");
        } else {
            $("#email").removeClass("form-control-warning");
            $("#email-group").removeClass("has-warning");
        }
    }

    $scope.add_item = function() {
        $scope.invoice.item_object_array.push({});
    }

    $scope.remove_item = function(index) {
        $scope.invoice.item_object_array.splice(index, 1);
    }

    $scope.toggleDiscountType = function() {
        if($scope.invoice.discount_type == "%") {
            $scope.invoice.discount_type = "$";
        } else {
            $scope.invoice.discount_type = "%";
        }
    }

    $scope.calculateTotals = function() {
        var i = $scope.invoice;
        i.subtotal = 0;
        i.tax = 0;

        i.item_object_array.forEach(function(val, index) {
            i.subtotal += parseFloat(val.price) || 0;
            val.is_hardware && (i.tax += parseFloat(val.price)*0.07);
        });

        i.subtotal = (i.discount_type == "%" ? i.subtotal-(i.subtotal*(i.discount/100)) : i.subtotal-i.discount);

        i.total = i.subtotal+i.tax;

        $scope.invoice.subtotal = parseFloat(Math.round(i.subtotal * 100) / 100).toFixed(2);
        $scope.invoice.tax = parseFloat(Math.round(i.tax * 100) / 100).toFixed(2);
        $scope.invoice.total = parseFloat(Math.round(i.total * 100) / 100).toFixed(2);

        localStorage.setItem('invoice_storage', JSON.stringify($scope.invoice));
    }

    $scope.addInvoice = function() {
        localStorage.setItem('invoice_storage', JSON.stringify($scope.invoice));
        invoice_add();
    }

    $scope.editInvoice = function() {
        localStorage.setItem('invoice_storage', JSON.stringify($scope.invoice));
        invoice_edit();
    }

    $scope.autoSearch = function(input) {
        if($('#searchbar').val() == "") {
            //$('.results-table').css("opacity", "0");
            db_search("zxqzxqykj"); // Clears the table... in a stupid way, but it works
        } else {
            //$('.results-table').css("opacity", "1");
            db_search(input);
        }
    };

    $scope.select = function(id) {
        $scope.invoice.id = id;
    }

    $scope.get_all = get_all();

    get_all();
});
=======
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
>>>>>>> f6b2955d0b0703d3eeb9a41a5081bc39dbb78279
