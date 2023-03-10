const refresh = document.getElementById('refresh')
refresh.addEventListener('click', () => {
    // displays single object perfectly
    let allSaveFiles = {}
    for(let i = 0; i < localStorage.length; i++){
        allSaveFiles[i] = JSON.parse(localStorage.getItem(i))
    }

    console.log(allSaveFiles)

    console.log(localStorage)
})

const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Notes Correct',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });