// Fetch and render data for Type Distribution Chart
fetch('data/type_distribution_data.json')
    .then(response => response.json())
    .then(data => {
        var typeDistributionChart = new Chart(document.getElementById('typeDistributionChart').getContext('2d'), {
            type: 'pie',
            data: {
                labels: data.type,
                datasets: [{
                    label: 'Type Distribution',
                    data: data.count,
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
    .then(data => {
        var tableContainer = document.getElementById('detailsTableContainer');
        var tableHTML = '<table class="table table-bordered"><thead><tr><th>Type</th><th>Detail</th></tr></thead><tbody>';
        
        for (var i = 0; i < data.type.length; i++) {
            tableHTML += `<tr><td>${data.type[i]}</td><td>${data.detail[i]}</td></tr>`;
        }
        
        tableHTML += '</tbody></table>';
        tableContainer.innerHTML = tableHTML;
    });