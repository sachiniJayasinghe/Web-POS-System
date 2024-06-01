document.addEventListener('DOMContentLoaded', () => {
    const iCode = document.getElementById('iCode');
    const iNameTxt = document.getElementById('iNameTxt');
    const iPrice = document.getElementById('iPrice');
    const iQTY = document.getElementById('iQTY');
    const tblItems = document.getElementById('tblItems');

    document.getElementById('iSavebtn').addEventListener('click', () => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${iCode.value}</td>
        <td>${iNameTxt.value}</td>
        <td>${iPrice.value}</td>
        <td>${iQTY.value}</td>
      `;
      row.addEventListener('click', () => {
        iCode.value = row.cells[0].innerText;
        iNameTxt.value = row.cells[1].innerText;
        iPrice.value = row.cells[2].innerText;
        iQTY.value = row.cells[3].innerText;
        tblItems.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');
      });
      tblItems.appendChild(row);
      clearForm();
    });

    document.getElementById('ieditbtn').addEventListener('click', () => {
      const selectedRow = tblItems.querySelector('tr.selected');
      if (selectedRow) {
        selectedRow.cells[0].innerText = iCode.value;
        selectedRow.cells[1].innerText = iNameTxt.value;
        selectedRow.cells[2].innerText = iPrice.value;
        selectedRow.cells[3].innerText = iQTY.value;
        clearForm();
      }
    });

    document.getElementById('ideletebtn').addEventListener('click', () => {
      const selectedRow = tblItems.querySelector('tr.selected');
      if (selectedRow) {
        tblItems.removeChild(selectedRow);
        clearForm();
      }
    });

    document.getElementById('iClearbtn').addEventListener('click', clearForm);

    function clearForm() {
      iCode.value = '';
      iNameTxt.value = '';
      iPrice.value = '';
      iQTY.value = '';
      tblItems.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
    }
  });