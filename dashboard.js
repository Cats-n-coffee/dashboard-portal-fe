const chart1 = document.getElementById('chart-1').getContext('2d');
const chart2 = document.getElementById('chart-2').getContext('2d');
const chart3 = document.getElementById('chart-3').getContext('2d');
const dashTableBody = document.getElementById('dash-table-body');
const sideBar = document.getElementsByClassName('sidebar')[0];
const expandSidebar = document.getElementById('expand-sidebar');
const mainContainer = document.getElementById('dash-main-container');
const tableLogs = document.getElementsByTagName('table')[0];
const summaryText = document.querySelectorAll('.after-spinner');
const chartWrappers = document.querySelectorAll('.chart-wrapper');

document.addEventListener('DOMContentLoaded', () => {
    const spinnerLogs = document.querySelectorAll('.spinner-wrapper');

    spinnerLogs.forEach(spinner => {
        spinner.style.display = 'flex';

        removeSpinner(spinner);
    })
    fetchData();
});

function removeSpinner(element) {
    setTimeout(() => {
        element.style.display = 'none';
        tableLogs.classList.add('show');
        summaryText.forEach(summary => {
            summary.classList.add('show');
        })
        chartWrappers.forEach(chart => {
            chart.classList.add('show');
        })
    }, 3000);
}

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
        legend: {
            position: 'right'
        }
    }
});

// fetching data from data.json
function fetchData() {

    fetch('data.json')
    .then(res => res.json())
    .then(data => populateTable(dashTableBody, data))
    .catch(err => console.log(err));
}


// populateTable(dashTableBody, array);

function populateTable(wrapper, data) {
    for (let i = 0; i < data.length; i++) {
        var currentItem = data[i];
        console.log(currentItem)
        
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

// Mobile menu toggle
const openMenuBtn = document.getElementById('hamburger-menu');
const closeMenuBtn = document.getElementById('close-mobile-menu');

openMenuBtn.addEventListener('click', openSidebarMobile);
closeMenuBtn.addEventListener('click', openSidebarMobile);

function openSidebarMobile() {
    openMenuBtn.classList.toggle('open');
    sideBar.classList.toggle('mobile-sidebar');
    closeMenuBtn.classList.toggle('close');
    mainContainer.classList.toggle('stopscroll');
}
