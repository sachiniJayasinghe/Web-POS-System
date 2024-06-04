document.addEventListener('DOMContentLoaded', () => {

  const saveButton = $("#iSavebtn");
  const updateButton = $('#ieditbtn');
  const deleteButton = $('#ideletebtn');
  const clearButton = $('#iClearbtn');
  const itemTable = $('#tblItems');

  var $tblItems = $("#tblItems");
  var $iCode = $("#iCode");
  var $iNameTxt = $("#iNameTxt");
  var $iPrice = $("#iPrice");
  var $iQTY = $("#iQTY");

  var items =[];


  // Assuming `items` is an array to store item objects

  $("#iSavebtn").click(() => {
      let newItem = {
          code: $iCode.val(),
          name: $iNameTxt.val(),
          price: $iPrice.val(),
          qty: $iQTY.val()
      };
      items.push(newItem);
      console.log(items);
      updateItemTable();
  });

  $("#ieditbtn").click(() => {
      const iIdValue = $iCode.val();
      const iNameValue = $iNameTxt.val();
      const iPriceValue = $iPrice.val();
      const iQtyValue = $iQTY.val();

      for (let i = 0; i < items.length; i++) {
          if (items[i].code === iIdValue) {
              items[i] = {
                  code: iIdValue,
                  name: iNameValue,
                  price: iPriceValue,
                  qty: iQtyValue,
              };
              break;
          }
      }

      updateItemTable();
  });

  function updateItemTable() {
      $tblItems.empty();

      items.forEach((item) => {
          $tblItems.append(`<tr>
          <td>${item.code}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.qty}</td></tr>`);
      });

      $tblItems.find("tr").click(function () {
          const row = $(this);
          const code = row.find("td:eq(0)").text();
          const name = row.find("td:eq(1)").text();
          const price = row.find("td:eq(2)").text();
          const qty = row.find("td:eq(3)").text();

          $iCode.val(code);
          $iNameTxt.val(name);
          $iPrice.val(price);
          $iQTY.val(qty);
      });
  
    }

    clearButton.click(() => {
      $iCode.val("");
      $iNameTxt.val("");
      $iPrice.val("");
      $iQTY.val("");
      console.log('Form cleared');
  });

  $("#ideletebtn").click(() => {
    const iIdValue = $iCode.val();

    for (let i = 0; i < items.length; i++) {
        if (items[i].code === iIdValue) {
            items.splice(i, 1);
            updateItemTable();
            break;
        }
    }
  
});

});
