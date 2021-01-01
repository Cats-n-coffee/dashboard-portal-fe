const chart1 = document.getElementById('chart-1').getContext('2d');
const chart2 = document.getElementById('chart-2').getContext('2d');
const chart3 = document.getElementById('chart-3').getContext('2d');
const dashTableBody = document.getElementById('dash-table-body');
const sideBar = document.getElementsByClassName('sidebar')[0];
const expandSidebar = document.getElementById('expand-sidebar');

const array = [
    { item: 'Apple', quantity: 2, price: '$0.90', message: 'Once upon a time a cat knocked at my door and let hinself in' },
    { item: 'Onion', quantity: 3, price: '$0.20', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Prune', quantity: 5, price: '$0.50', message: 'Once upon a time a cat' },
    { item: 'Banana', quantity: 2, price: '$0.50', message: 'Once upon a time a cat knocked at my door and rolled over to ask for pets' },
    { item: 'Eggplant', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Tofu', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Zucchini', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Bread', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Coffee', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Tea', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Milk', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Almonds', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Peanuts', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Spices', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Barley', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Rice', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
    { item: 'Pasta', quantity: 1, price: '$1.90', message: 'Once upon a time a cat knocked at my door' },
];

const url = 'https://dummyapi.io/data/api/';
const apiKey = '5feddcaaa78ae44b49a6dca1';

var barChart = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ['Apples', 'Cherries', 'Peaches', 'Pears', 'Strawberries', 'Oranges'],
        datasets: [{
            label: 'All the fruits',
            backgroundColor: ['rgb(192, 235, 252)', 'rgb(66, 135, 245)', 'rgb(55, 196, 250)', 'rgb(175, 247, 136)', 'rgb(90, 176, 209)', 'rgb(47, 247, 100)'],
           
            data: [2, 4, 6, 1, 8, 10]
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                gridLines: {
                    color: 'white'
                }
            }],
            xAxes: [{
                gridLines: {
                    color: 'white'
                }
            }]
        },
        legend: {
            display: false
        }
    }
});

var lineChart = new Chart(chart2, {
    type: 'line',
    data: {
        labels: ['Apples', 'Cherries', 'Peaches', 'Pears', 'Strawberries', 'Oranges'],
        datasets: [{
            
            borderColor: 'blue',
            pointBackgroundColor: 'blue',
            backgroundColor: 'rgb(192, 235, 252)',
            
            data: [2, 4, 6, 1, 8, 10]
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                gridLines: {
                    color: 'white'
                }
            }],
            xAxes: [{
                gridLines: {
                    color: 'white'
                }
            }]
        },
        legend: {
            display: false
        }
    }
});

var doughnutChart = new Chart(chart3, {
    type: 'doughnut',
    data: {
        labels: ['Apples', 'Cherries', 'Peaches', 'Pears', 'Strawberries', 'Oranges'],
        datasets: [{
            
            backgroundColor: ['rgb(192, 235, 252)', 'rgb(66, 135, 245)', 'rgb(55, 196, 250)', 'rgb(175, 247, 136)', 'rgb(90, 176, 209)', 'rgb(47, 247, 100)'],
            borderColor: ['rgb(192, 235, 252)', 'rgb(66, 135, 245)', 'rgb(55, 196, 250)', 'rgb(175, 247, 136)', 'rgb(90, 176, 209)', 'rgb(47, 247, 100)'],
            data: [2, 4, 6, 1, 8, 10]
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

populateTable(dashTableBody, array);

function populateTable(wrapper, data) {
    for (let i = 0; i < data.length; i++) {
        var currentItem = data[i];
        
        var row = `<tr>
                        <td>${currentItem.item}</td>
                        <td>${currentItem.quantity}</td>
                        <td>${currentItem.price}</td>
                        <td>${currentItem.message}</td>
                   </tr>`;
        
        wrapper.innerHTML += row;
    }
}

//['rgb(192, 235, 252)', 'rgb(66, 135, 245)', 'rgb(55, 196, 250)', 'rgb(175, 247, 136)', 'rgb(90, 176, 209)', 'rgb(47, 247, 100)']

expandSidebar.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    sideBar.classList.toggle('toggle-sidebar');
}
