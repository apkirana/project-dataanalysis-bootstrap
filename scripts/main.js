// Fetch and render data for overview chart
fetch('data/sales_data.json')
    .then(response => response.json())
    .then(data => {
        var salesChart = new Chart(document.getElementById('salesChart').getContext('2d'), {
            type: 'line',
            data: {
                labels: data.month,
                datasets: [{
                    label: 'Sales',
                    data: data.sales,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    });

// Repeat for other charts