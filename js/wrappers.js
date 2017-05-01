var results;
var dc = new DataConvert();

<<<<<<< HEAD
function DataConvert() {
    this.toDatabase = function(edit) {
        var re_invoice = JSON.parse(localStorage.getItem("invoice_storage"));   // I know none of this would be necessary if I named things well...
        re_invoice.item_arr = [];
        re_invoice.price_arr = [];
        re_invoice.hardware_arr = [];
        re_invoice.item_object_array.forEach(function(val, index) {
            re_invoice.item_arr.push(val.name);
            re_invoice.price_arr.push(val.price);
            re_invoice.hardware_arr.push(val.is_hardware || false);
        });

        re_invoice.first = re_invoice.first_name;
        re_invoice.last = re_invoice.last_name;
        re_invoice.customer_pswd = 'none';
        re_invoice.customerID = 1001;   // Currently not used. Should be used when connection between invoicing and check-in is made
        re_invoice.active = 1;
        var d = new Date();
        re_invoice.invoice_date = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();

        if(edit) {
            re_invoice.invoiceID = re_invoice.id;
        }
        delete re_invoice.id;
        delete re_invoice.first_name;
        delete re_invoice.last_name;
        delete re_invoice.item_object_array;
        delete re_invoice.payment_type;

        return '{"invoice":'+JSON.stringify(re_invoice)+'}';

    }

    this.fromDatabase = function(input) {
        var i = window.telescope.invoice;
        i.id = parseInt(input.invoiceID);  // Needless to say, I've learned my lesson.
        i.first_name = input.first;
        i.last_name = input.last;
        i.email = input.email;
        i.paid_by = input.paid_by;
        i.subtotal = parseFloat(input.subtotal);
        i.discount = parseFloat(input.discount);
        i.discount_type = input.discount_type;
        i.tax = parseFloat(input.tax);
        i.total = parseFloat(input.total);

        input.item_arr = JSON.parse(input.item_arr.replace(/'/g, '"'));
        input.price_arr = JSON.parse(input.price_arr.replace(/'/g, '"'));
        input.hardware_arr = JSON.parse(input.hardware_arr.replace(/'/g, '"'));

        input.item_arr.forEach(function(val, index) {
            i.item_object_array[index] = {
                name: val,
                price: parseFloat(input.price_arr[index]),
                is_hardware: input.hardware_arr[index]
            }
        });
        window.telescope.$apply(function() {
            window.telescope.invoice = i;
        }); // Apply changes to scope variable in Angular

        return i;
    }
}

=======
>>>>>>> f6b2955d0b0703d3eeb9a41a5081bc39dbb78279
function db_search(input) {
    if(input.length === 0) {
        results = null;
        window.telescope.$apply(function() {
            window.telescope.search_results = results;
            if(results !== "") {
                window.telescope.has_results = true;
            } else {
                window.telescope.has_results = false;
            }
        }); // Apply changes to scope variable in Angular
    } else {
        var ajax = new XMLHttpRequest();
        ajax.responseType = 'json';
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                results = this.response; // Set variable for JS outside Angular's scope in search page
                window.telescope.$apply(function() {
                    window.telescope.search_results = results;
                    if(results !== null) {
                        window.telescope.has_results = true;
                    } else {
                        window.telescope.has_results = false;
                    }
                }); // Apply changes to scope variable in Angular
            }
        };
        ajax.open("GET", "php/search.php?q="+input, true);
        ajax.send();
    }
}

function invoice_add() {
    $.post("./php/add.php", JSON.parse(dc.toDatabase()), function(response) {
        console.log(dc.toDatabase());
        console.log(response);
        get_all();
        localStorage.removeItem("invoice_storage");
        window.telescope.invoice = {
            id: 0, // Used by edit function
            paid_by: "Cash",
            discount_type: "%",
            discount: 0,
            subtotal: 0,
            tax: 0,
            total: 0
        };
        window.telescope.invoice.item_object_array = [{}];
        window.telescope.changePage('all');
    });
}

function invoice_edit() {
    $.post("./php/edit.php", JSON.parse(dc.toDatabase(true)), function(response) {
        console.log(response);
        //console.log(dc.toDatabase(true));
    });
}

function get_one() {
    $.post("./php/get_one.php", {id: window.telescope.invoice.id}, function(response) {
        var data = JSON.parse(response)[0];
        dc.fromDatabase(data);

    });
}

function get_all() {
    var ajax = new XMLHttpRequest();
    ajax.responseType = 'json';
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            all_invoices = this.response; // Set variable for JS outside Angular's scope in all invoices page
            window.telescope.$apply(function() {
                window.telescope.all_invoices = all_invoices;
            }); // Apply changes to scope variable in Angular
        }
    };
    ajax.open("GET", "php/get_all.php", true);
    ajax.send();
}

function archive() {
    console.log('got here');
    $.post("./php/archive.php", {id: window.telescope.invoice.id}, function(response) {
        console.log(response);
    });
}
