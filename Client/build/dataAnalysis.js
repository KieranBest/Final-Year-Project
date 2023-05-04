"use strict";

// Do data calculations on loading of page
var allData = {};
window.onload = function () {
  for (var i = 0; i < localStorage.length + 1; i++) {
    if (JSON.parse(localStorage.getItem(i)) != null) {
      allData[i] = JSON.parse(localStorage.getItem(i));
    }
  }
  retrieveIndividualNotes(allData);
  retrievePlaytimePeriods(allData);
};

// Define canvas for graph display with predefined data variables
var Example1 = [{
  year: 2010,
  count: 10
}, {
  year: 2011,
  count: 20
}, {
  year: 2012,
  count: 15
}, {
  year: 2013,
  count: 25
}, {
  year: 2014,
  count: 22
}, {
  year: 2015,
  count: 30
}, {
  year: 2016,
  count: 28
}];
var ctx = document.getElementById('myChart');
var data = {
  labels: Example1.map(function (row) {
    return row.year;
  }),
  datasets: [{
    barPercentage: 0.5,
    barThickness: 50,
    label: 'Example data',
    data: Example1.map(function (row) {
      return row.count;
    }),
    backgroundColor: ['red', 'blue', 'yellow', 'green', 'black'],
    borderColor: ['red', 'blue', 'yellow', 'green', 'black'],
    borderWidth: 1
  }]
};
var config = {
  type: 'line',
  data: data,
  options: {
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        display: true
      },
      x: {
        display: true
      }
    }
  }
};
var myChart = new Chart(document.getElementById('myChart'), config);
function actualVsExpectedTimeFunction() {
  myChart.config.type = 'line';
  myChart.config.options.scales.y.display = true;
  myChart.config.options.scales.x.display = true;
  if (data.datasets.length > 1) {
    data.datasets.length = 1;
  }
  myChart.data.labels = NoOfNotes.map(function (row) {
    return row.noteNumber;
  });
  myChart.data.datasets[0].label = "Actual Hit Times";
  myChart.data.datasets[0].data = timeDifferenceHit;
  myChart.data.datasets[0].backgroundColor = ['red'];
  myChart.data.datasets[0].borderColor = ['red'];
  var newDataset = {
    label: "Expected Time",
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    data: expectedHitTimes
  };
  data.datasets.push(newDataset);
  myChart.update();
}
function viewNoteCodesPie() {
  myChart.config.type = 'pie';
  myChart.config.options.scales.y.display = false;
  myChart.config.options.scales.x.display = false;
  if (data.datasets.length > 1) {
    data.datasets.length = 1;
  }
  myChart.data.labels = ['Number Of Correct Hits', 'Number Of Wrong Hits', 'Number Of Wrong Number Hits', 'Number Of Out Of Bound Hits', 'Number Of Missed Notes'];
  myChart.data.datasets[0].label = "";
  myChart.data.datasets[0].data = [numberOfCorrectHits, numberOfWrongHits, numberOfWrongNumberHits, numberOfOutOfBoundHits, numberOfMissedNotes];
  myChart.data.datasets[0].backgroundColor = ['red', 'blue', 'yellow', 'green', 'black'];
  myChart.data.datasets[0].borderColor = ['red', 'blue', 'yellow', 'green', 'black'];
  myChart.update();
}
function viewNoteCodesLine() {
  myChart.config.type = 'line';
  myChart.config.options.scales.y.display = true;
  myChart.config.options.scales.x.display = true;
  if (data.datasets.length > 0) {
    data.datasets.length = 0;
  }
  myChart.data.labels = ['Number Of Correct Hits', 'Number Of Wrong Hits', 'Number Of Wrong Number Hits', 'Number Of Out Of Bound Hits', 'Number Of Missed Notes'];
  for (var numberOfPeriods = 1; numberOfPeriods < playPeriodNotes.length; numberOfPeriods++) {
    var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var newDataset = {
      label: "Period " + numberOfPeriods,
      backgroundColor: colour,
      borderColor: colour,
      borderWidth: 1,
      data: playPeriodCodes[numberOfPeriods]
    };
    data.datasets.push(newDataset);
  }
  myChart.update();
}