const rowsPerPage = 10;
let currentPage = 1;
let data = [];

function renderTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.type}</td><td>${row.detail}</td>`;
        tableBody.appendChild(tr);
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener('click', function(event) {
            event.preventDefault();
            currentPage = i;
            renderTable();
        });
        pagination.appendChild(li);
    }
}

// Fetch and render data for Type Distribution Chart
fetch('data/type_distribution_data.json')
    .then(response => response.json())
    .then(chartData => {
        const typeDistributionChart = new Chart(document.getElementById('typeDistributionChart').getContext('2d'), {
            type: 'pie',
            data: {
                labels: chartData.type,
                datasets: [{
                    label: 'Type Distribution',
                    data: chartData.count,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    });

// Fetch and render data for Details Table
fetch('data/details_data.json')
    .then(response => response.json())
    .then(tableData => {
        data = tableData.type.map((type, index) => ({ type, detail: tableData.detail[index] }));
        renderTable();
    });