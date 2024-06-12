// Example of script.js or a similar script that handles view switching
document.addEventListener('DOMContentLoaded', function() {
  // Function to switch views
  function switchView(viewId) {
      const views = document.querySelectorAll('.view');
      views.forEach(view => {
          view.classList.remove('active');
      });
      document.getElementById(viewId).classList.add('active');
  }

  // Adding event listeners to menu items
  document.querySelectorAll('.menu-item').forEach(item => {
      item.addEventListener('click', function() {
          // Get the target view ID from the menu item text or data attribute
          const targetView = this.innerText.toLowerCase().replace(/ /g, '-') + '-view';
          switchView(targetView);
          populateCustomers();
      });
  });

  // Initially show home view
  switchView('home-view');
});
