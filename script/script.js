
// Validation subscribe email

window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
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