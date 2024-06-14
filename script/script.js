
// Validation subscribe email

window.addEventListener('load', function() {
  const forms = document.getElementsByClassName('needs-validation');
  Array.from(forms).forEach(function(form) {
      form.addEventListener('submit', function(event) {
          if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
          }
          form.classList.add('was-validated');
      }, false);
  });
}, false);


// Tabel  Data   
const tableData = [
    {
      paymentMethod: 'Master Card',
      minDeposit: '£10',
      maxWithdrawal: '£2500',
      withdrawTime: '2-5 Days'
    },
    {
      paymentMethod: 'VISA',
      minDeposit: '£20',
      maxWithdrawal: '£2500',
      withdrawTime: '2-5 Days'
    },
    {
      paymentMethod: 'Trustly',
      minDeposit: '£10',
      maxWithdrawal: '£2500',
      withdrawTime: '24h'
    },
    {
      paymentMethod: 'Skrill',
      minDeposit: '£10',
      maxWithdrawal: '£2500',
      withdrawTime: '24h'
    },
    {
      paymentMethod: 'NETELLER',
      minDeposit: '£10',
      maxWithdrawal: '£2500',
      withdrawTime: '2-5 Days'
    }
  ];

  // Function to populate the table with data
  
function populateTable() {
    const tableBody = document.getElementById('payment-table').getElementsByTagName('tbody')[0];
    tableData.forEach((rowData) => {
      const createTr = document.createElement('tr');
      createTr.innerHTML = `
        <td><img src="images/card.png" alt="Card Image">${rowData.paymentMethod}</td>
        <td><span class="small">${rowData.minDeposit}</span></td>
        <td>${rowData.maxWithdrawal}</td>
        <td><span class="small">${rowData.withdrawTime}</span></td>
      `;
      tableBody.appendChild(createTr);
    });
  }
  
  
  populateTable();



// READ MORE DESCRIPTIONS 

document.addEventListener('DOMContentLoaded', function() {
  const descriptions = document.querySelectorAll('.read-more');
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  function toggleText(index) {
      const description = descriptions[index];
      const button = toggleButtons[index];
      const isCollapsed = description.style.height === '49px' || description.style.height === '';

      description.style.height = isCollapsed ? 'auto' : '49px';
      button.innerHTML = isCollapsed ? 'Read Less <i class="fas fa-chevron-up"></i>' : 'Read More <i class="fas fa-chevron-down"></i>';
  }

  toggleButtons.forEach((button, index) => {
      button.addEventListener('click', () => toggleText(index));
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const searchIcon = document.getElementById('search-icon');
  const searchInput = document.getElementById('search-input');
  const navbarToggle = document.getElementById('click-menu');
  const navbar = document.querySelector('.navbar');

  searchIcon.addEventListener('click', () => {
      body.classList.toggle('open-search');
      searchInput.focus();
  });

  document.addEventListener('click', (event) => {
      if (!event.target.closest('.block-search')) {
          body.classList.remove('open-search');
          searchInput.blur();
      }
  });

  navbarToggle.addEventListener('click', () => {
      body.classList.toggle('open-menu');
  });

  document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target) && !navbarToggle.contains(event.target)) {
          body.classList.remove('open-menu');
      }
  });
});

