selectType();


//traffic-widget

let trafficCanvas = document.getElementsByClassName("traffic-chart");

let trafficData = {
    labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31",
    ],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
        fill: true,
    }, ],
};

let trafficOptions = {
    plugins: {
        aspectRatio: 2.5,
        animation: {
            duration: 0,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
        legend: {
            display: false,
        },
    }
};


let trafficChart = new Chart(trafficCanvas, {
    type: "line",
    data: trafficData,
    options: trafficOptions,
});

let mobileCanvas = document.getElementsByClassName("mobile-chart");

let mobileData = {

    datasets: [{
        data: [1, 20, 56, ],
        backgroundColor: ["#7476be", "blue", "green"],

    }],
    labels: [
        "Desktop",
        "Tablet",
        "Phone",

    ],


}

let mobileOptions = {


    plugins: {

        legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                fontStyle: "bold"
            },
        }
    }
}
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


let barCanvas = document.getElementsByClassName("bar-chart");

let barData = {

    datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'red',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }, ],


};

let barChart = new Chart(barCanvas, {
    type: "bar",
    data: barData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});