
function populateCustomers() {
    const selectElement = $("#custId");
    selectElement.children().remove();

    for (let i = 0; i < customers.length; i++) {
        const option = $("<option></option>");
        option.val(customers[i].id);
        option.text(customers[i].id);
        selectElement.append(option);
    }
    
    

}

function populateItems() {
    const selectItem = $("#item_Id");
    selectItem.children().remove();
    
    for (let i = 0; i < items.length; i++) {
        const option = $("<option></option>");
        option.val(items[i].id);
        option.text(items[i].id);
        option.data("price", items[i].price);
        option.data("qty", items[i].qty);
        option.data("description", items[i].description);
        selectItem.append(option);
    }
}

$("#custId").change(function () {
    console.log("hai");
    const selectedValue = $(this).val();
    for (let i = 0; i < customers.length; i++) {
        if (selectedValue === customers[i].id) {
            $("#custName").val(customers[i].name);
            console.log("customer", customers[i]);
        }
    }
});

$("#item_Id").change(onItemSelect);

function onItemSelect(event) {
    const selectedItem = $(event.target).find(":selected");
    $("#unit_price").val(selectedItem.data("price"));
    $("#qtyOnHand").val(selectedItem.data("qty"));
    $("#desc").val(selectedItem.data("description"));
}

function addToCart() {
    const itemDropdown = document.getElementById("item_Id");
    const selectedItem = $(itemDropdown).find(":selected");
    const itemId = selectedItem.val();
    const unitPrice = parseFloat(selectedItem.data("price"));
    const qtyOnHand = parseInt(selectedItem.data("qty"));
    const orderQty = parseInt(document.getElementById("order_quantity").value);

    if (orderQty > 0 && orderQty <= qtyOnHand) {
        const cartTable = document.querySelector(".order_container tbody");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${itemId}</td>
            <td>${unitPrice.toFixed(2)}</td>
            <td>${orderQty}</td>
            <td>${(unitPrice * orderQty).toFixed(2)}</td>
            <td><button class="remove-btn">Remove</button></td>
        `;
        cartTable.appendChild(row);

        row.querySelector(".remove-btn").addEventListener("click", function () {
            row.remove();
            updateTotals();
        });

        updateTotals();
    } else {
        alert("Invalid quantity!");
    }
}

function updateTotals() {
    const rows = document.querySelectorAll(".order_container tbody tr");
    let subTotal = 0;

    rows.forEach(row => {
        const total = parseFloat(row.children[3].textContent);
        subTotal += total;
    });

    document.querySelector(".sub_total span:nth-child(2)").textContent = `${subTotal.toFixed(2)}/=`;
    document.querySelector(".net_total span:nth-child(2)").textContent = `${subTotal.toFixed(2)}/=`;
}

function placeOrder() {
    const orderId = document.getElementById("order_Id").value;
    const customerId = document.getElementById("custId").value;
    const orderDate = document.getElementById("orderDate").value;
    const cash = parseFloat(document.getElementById("cash").value);
    const discount = parseFloat(document.getElementById("discount").value);
    const subTotal = parseFloat(document.querySelector(".sub_total span:nth-child(2)").textContent);
    const netTotal = subTotal - (subTotal * (discount / 100));

    if (cash >= netTotal) {
        const balance = cash - netTotal;
        document.getElementById("balance").value = balance.toFixed(2);

        // Logic to save order to database

        alert("Order placed successfully!");
        clearOrderForm();
    } else {
        alert("Insufficient cash!");
    }
}

function clearOrderForm() {
    document.getElementById("order_Id").value = '';
    document.getElementById("custId").selectedIndex = 0;
    document.getElementById("orderDate").value = '';
    document.getElementById("cash").value = '';
    document.getElementById("balance").value = '';
    document.getElementById("discount").value = '';
    document.querySelector(".order_container tbody").innerHTML = '';
    updateTotals();
}
