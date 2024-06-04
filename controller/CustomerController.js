document.addEventListener("DOMContentLoaded", () => {
  const saveButton = $("#cSavebtn")
  const updateButton =$('#ceditBtn');
  const deleteButton = $('#cdeleteBtn');
  const clearButton = $('#cClearbtn');
  const customerTable = $('#tblCustomer');

    var $tblCustomer = $("#tblCustomer");
    var $cIdTxt = $("#cIdTxt");
    var $cNameTxt = $("#cNameTxt");
    var $cNOText = $("#cNoTxt");
    var $cAddressTxt = $("#cAddressTxt");

                                                                            
    $("#cSavebtn").click(() => {

    console.log("Lahiru");
    let newCustomer = Object.assign({},customer);
    newCustomer.id = $cIdTxt.val();
    newCustomer.name = $cNameTxt.val();
    newCustomer.number = $cNOText.val();
    newCustomer.address = $cAddressTxt.val();
    customers.push(newCustomer);
    console.log(customers);
    updateCustomerTable();


});

$("#ceditBtn").click(() => {
    const cIdValue = $cIdTxt.val();
    const cNameValue = $cNameTxt.val();
    const cNumberValue = $cNOText.val();
    const cAddressValue = $cAddressTxt.val();

    for (let i = 0; i < customers.length; i++) {
        if (customers[i].id === cIdValue) {
            customers[i] = {
                id: cIdValue,
                name: cNameValue,
                number: cNumberValue,
                address: cAddressValue,
            };
            break;
        }
    }

    updateCustomerTable();
});

function updateCustomerTable() {
    $tblCustomer.empty();

    customers.forEach((customer) => {
        $tblCustomer.append(`<tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.number}</td>
        <td>${customer.address}</td></tr>`);
    });

    $tblCustomer.find("tr").click(function () {
        const row = $(this);
        const name = row.find("td:eq(0)").text();
        const id = row.find("td:eq(1)").text();
        const number = row.find("td:eq(2)").text();
        const address = row.find("td:eq(3)").text();

        $cNameTxt.val(name);o
        $cIdTxt.val(id);
        $cNOText.val(number);
        $cAddressTxt.val(address);
    });
}
    $("#cClearbtn").click(() => {
        $cNameTxt.val("");
        $cIdTxt.val("");
        $cNOText.val("");
        $cAddressTxt.val("");
    });

    $("#cdeleteBtn").click(() => {
        const cIdValue = $cIdTxt.val();
    
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].id === cIdValue) {
                customers.splice(i, 1);
                updateCustomerTable();
                break;
            }
        }
    });

  });
