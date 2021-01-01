const chart1 = document.getElementById('chart-1').getContext('2d');
const chart2 = document.getElementById('chart-2').getContext('2d');
const chart3 = document.getElementById('chart-3').getContext('2d');
const dashTableBody = document.getElementById('dash-table-body');

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
        labels: ['Apples', 'Cherries', 'Peaches', 'Pears', 'Strawberries', 'Oranges', 'Mango', 'Papaya'],
        datasets: [{
            label: 'All the fruits',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2, 4, 6, 1, 8, 10, 5, 2]
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

var lineChart = new Chart(chart2, {
    type: 'line',
    data: {
        labels: ['Apples', 'Cherries', 'Peaches', 'Pears', 'Strawberries', 'Oranges', 'Mango', 'Papaya'],
        datasets: [{
            label: 'All the fruits',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2, 4, 6, 1, 8, 10, 6, 3]
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

var doughnutChart = new Chart(chart3, {
    type: 'doughnut',
    data: {
        labels: ['Apples', 'Cherries', 'Peaches', 'Pears', 'Strawberries', 'Oranges', 'Mango', 'Papaya'],
        datasets: [{
            label: 'All the fruits',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2, 4, 6, 1, 8, 10, 6, 3]
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