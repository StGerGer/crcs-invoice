var results;

function db_search(input) {
    if(input.length === 0) {
        results = null;
    } else {
        var ajax = new XMLHttpRequest();
        ajax.responseType = 'json';
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                results = this.response; // Set variable for JS outside Angular's scope in search page
                window.telescope.$apply(function() {
                    window.telescope.search_results = results;
                    if(results !== "") {
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

function get_all() {
    var ajax = new XMLHttpRequest();
    ajax.responseType = 'json';
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            all_invoices = this.response; // Set variable for JS outside Angular's scope in all invoices page
            console.log(all_invoices);
            window.telescope.$apply(function() {
                window.telescope.all_invoices = all_invoices;
            }); // Apply changes to scope variable in Angular
        }
    };
    ajax.open("GET", "php/get_all.php", true);
    ajax.send();
}
