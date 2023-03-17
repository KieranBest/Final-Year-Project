// Do Data Calculations
const refresh = document.getElementById('refresh')
refresh.addEventListener('click', () => {
    let allData = {}
    for(let i = 0; i < localStorage.length; i++){
        allData[i] = JSON.parse(localStorage.getItem(i))
    }
    createDataTypes(allData)
})

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
    }]
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

function timeDifferenceHitFunction(){
  myChart.data.labels = timeDifferenceHit.map(row => row.noteNumber)
  myChart.data.datasets[0].label = "Time Difference of When Note Hit Against Required Note Hit"
  myChart.data.datasets[0].data = timeDifferenceHit.map(row => row.timeDifference)
  myChart.update()
}
