// Do data calculations on loading of page
window.onload = function(){
  let allData = {}
  for(let i = 0; i < localStorage.length; i++){
      allData[i] = JSON.parse(localStorage.getItem(i))
  }
  createDataTypes(allData)
  //localStorage.clear()
}

// Define canvas for graph display with predefined data variables
let Example1 = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
]

const ctx = document.getElementById('myChart')
const data = {
  labels: Example1.map(row => row.year),
  datasets: [
    { label: 'Example data',
      data: Example1.map(row => row.count)
    },
    {}
  ]
  }

const config = {
  type: 'line',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}  

const myChart = new Chart(
  document.getElementById('myChart'),
  config
)

function actualVsExpectedTimeFunction(){
  myChart.data.labels = timeDifferenceHit.map(row => row.noteNumber)
  myChart.data.datasets[0].label = "Actual Hit Times"
  myChart.data.datasets[0].data = timeDifferenceHit.map(row => row.timeDifference)
  
  myChart.data.datasets[1].label = "Expected Hit Times",
  myChart.data.datasets[1].data = expectedHitTimes.map(row => row.expectedHitTime)

  myChart.update()
}