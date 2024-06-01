document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById('cSavebtn');
  const updateButton = document.getElementById('ceditBtn');
  const deleteButton = document.getElementById('cdeleteBtn');
  const clearButton = document.getElementById('cClearbtn');
  const customerTable = document.getElementById('tblCustomer');
  let editingRow = null;

  saveButton.addEventListener('click', () => {
      const customerId = document.getElementById('cIdTxt').value;
      const customerName = document.getElementById('cNameTxt').value;
      const contactNo = document.getElementById('cNoTxt').value;
      const address = document.getElementById('cAddressTxt').value;

      if (customerId && customerName && contactNo && address) {
          if (editingRow) {
              editingRow.cells[0].innerText = customerId;
              editingRow.cells[1].innerText = customerName;
              editingRow.cells[2].innerText = contactNo;
              editingRow.cells[3].innerText = address;
              editingRow = null;
          } else {
              const newRow = document.createElement('tr');
              newRow.innerHTML = `
                  <td>${customerId}</td>
                  <td>${customerName}</td>
                  <td>${contactNo}</td>
                  <td>${address}</td>
              `;
              customerTable.appendChild(newRow);
          }

          // Clear the form inputs after saving
          clearForm();
      } else {
          alert('Please fill in all fields');
      }
  });

  updateButton.addEventListener('click', () => {
      if (editingRow) {
          const customerId = document.getElementById('cIdTxt').value;
          const customerName = document.getElementById('cNameTxt').value;
          const contactNo = document.getElementById('cNoTxt').value;
          const address = document.getElementById('cAddressTxt').value;

          if (customerId && customerName && contactNo && address) {
              editingRow.cells[0].innerText = customerId;
              editingRow.cells[1].innerText = customerName;
              editingRow.cells[2].innerText = contactNo;
              editingRow.cells[3].innerText = address;
              editingRow = null;
              clearForm();
          } else {
              alert('Please fill in all fields');
          }
      } else {
          alert('Please select a row to update');
      }
  });

  deleteButton.addEventListener('click', () => {
      if (editingRow) {
          customerTable.removeChild(editingRow);
          editingRow = null;
          clearForm();
      } else {
          alert('Please select a row to delete');
      }
  });

  clearButton.addEventListener('click', () => {
      clearForm();
  });

  customerTable.addEventListener('click', (event) => {
      const row = event.target.closest('tr');
      if (row) {
          editingRow = row;
          document.getElementById('cIdTxt').value = row.cells[0].innerText;
          document.getElementById('cNameTxt').value = row.cells[1].innerText;
          document.getElementById('cNoTxt').value = row.cells[2].innerText;
          document.getElementById('cAddressTxt').value = row.cells[3].innerText;
      }
  });

  function clearForm() {
      document.getElementById('cIdTxt').value = '';
      document.getElementById('cNameTxt').value = '';
      document.getElementById('cNoTxt').value = '';
      document.getElementById('cAddressTxt').value = '';
      editingRow = null;
  }
});
