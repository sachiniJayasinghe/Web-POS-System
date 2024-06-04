document.addEventListener("DOMContentLoaded", function () {
    // Initialize order form
    initOrderForm();

    // Event listeners
    document.getElementById("item_Id").addEventListener("change", onItemSelect);
    document.querySelector(".cart_btn").addEventListener("click", addToCart);
    document.querySelector(".order_btn").addEventListener("click", placeOrder);
});

function initOrderForm() {
    // Populate customer dropdown
    populateCustomers();
    // Populate item dropdown
    populateItems();
}

function populateCustomers() {
    const customerDropdown = document.getElementById("custId");
    // Fetch customers from an API or database
    // Assuming a sample response
    for (let i = 0; i < customers.length; i++) {
        const option = $("<option></option>");
        option.val(customers[i].id);
        option.text(customers[i].id);
        selectElement.append(option);
    }
    customers.forEach(customer => {
        const option = document.createElement("option");
        option.value = customer.id;
        option.textContent = customer.name;
        customerDropdown.appendChild(option);
    });
}

function populateItems() {
    const itemDropdown = document.getElementById("item_Id");
    // Fetch items from an API or database
    // Assuming a sample response
    const items = [
        { id: "I001", name: "Item 1", description: "Item 1 description", price: 10, qty: 100 },
        { id: "I002", name: "Item 2", description: "Item 2 description", price: 20, qty: 200 }
    ];
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        option.dataset.price = item.price;
        option.dataset.qty = item.qty;
        option.dataset.description = item.description;
        itemDropdown.appendChild(option);
    });
}

function onItemSelect(event) {
    const selectedItem = event.target.selectedOptions[0];
    document.getElementById("unit_price").value = selectedItem.dataset.price;
    document.getElementById("qtyOnHand").value = selectedItem.dataset.qty;
    document.getElementById("desc").value = selectedItem.dataset.description;
}

function addToCart() {
    const itemDropdown = document.getElementById("item_Id");
    const selectedItem = itemDropdown.selectedOptions[0];
    const itemId = selectedItem.value;
    const unitPrice = selectedItem.dataset.price;
    const qtyOnHand = selectedItem.dataset.qty;
    const orderQty = document.getElementById("order_quantity").value;

    if (orderQty > 0 && orderQty <= qtyOnHand) {
        const cartTable = document.querySelector(".order_container tbody");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${itemId}</td>
            <td>${unitPrice}</td>
            <td>${orderQty}</td>
            <td>${unitPrice * orderQty}</td>
            <td><button class="remove-btn">Remove</button></td>
        `;
        cartTable.appendChild(row);

        row.querySelector(".remove-btn").addEventListener("click", function () {
            row.remove();
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
    const cash = document.getElementById("cash").value;
    const discount = document.getElementById("discount").value;
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
