var nums = [1, 2, 3, 4]
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"]
var prices = [7.50, 9.50, 8.50, 7.50]
var quantities = [0, 0, 0, 0]
var totals = [0.0, 0.0, 0.0, 0.0]
var gT = ["Grand Total"]
var grandTotal = 0


function getSum(total, num) {
    return grandTotal = (total + num);
}

function myFunction(item) {
    document.getElementById("total").innerHTML = totals.reduce(getSum);
    display_all();
}

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    myFunction();
    display_all();
}

function sub_selection(x) {
    if (quantities[x] > 0) {
        console.log(x);
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        myFunction();
        display_all();
    } else {
        alert("Must be positive");
    }

}

function display_all() {

    var myTable = "<table>";
    myTable += "<th style='width: 50px; text-align: right;'>Item</th>";
    myTable += "<th style='width: 50px; text-align: right;'>Price</th>";
    myTable += "<th style='width: 50px; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 50px; text-align: right;'>Total</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 50px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 50px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 50px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 50px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td style='width: 50px; text-align: center;'><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td style='width: 50px; text-align: center;'><button onclick='sub_selection(" + i + ")'>Remove</button></td></tr>";
    }

    myTable += "</table>";

    document.getElementById("demo").innerHTML = myTable;
}
window.onload = function() {
    display_all();
}