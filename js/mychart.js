function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getDataURL(id) {
  return 'data/chart/' + id + ".csv";
}

const labels = [
  // 'January',
  // 'February',
  // 'March',
  // 'April',
  // 'May',
  // 'June'
];
const data = {
  labels: labels,
  datasets: [{
    label: 'Water Level(in M)',
    yAxisID: 'y',
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
    borderColor: 'rgba(0, 0, 255, 0.5)',
    //data: [10, 20, 15, 12, 10, 20, 40],
    data: [],
    pointRadius: 0,
    pointHoverRadius: 0
  },
  {
    label: 'Live Capacity(in M.cum)',
    yAxisID: 'y1',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderColor: 'rgba(255, 0, 0, 0.5)',
    //data: [10, 20, 15, 12, 10, 20, 40],
    data: [],
    pointRadius: 0,
    pointHoverRadius: 0
  }
  ]
};

const config = {
  type: 'line',
  data: data,
  maintainAspectRatio: true,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {        
        title: {
          display: true,
          text: 'Observation Date'
        }
      },
      y: {
        // title:{
        //   display:true,
        //   text:'Y-Axis'
        //   }
        type: 'linear',
        position: 'left',
      },
      y1: {
        type: 'linear',
        position: 'right',
        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      }
    },
    plugins: {
      title: {
        text: 'Water Level & Live Capacity',
        display: true,
      },
      // subtitle: {
      //   display: true,
      //   text: 'Custom Chart Subtitle'
      // },
      legend: {
        position: 'bottom',
        align: 'end'
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy'
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          drag: {
            enabled: true
          },
          mode: 'xy',
        }
      }
    },
    animation: {
      onProgress: chartAnimationProgress
    }
  }
};




var myChart;
/**
 * To reset the zoom into chart
 */
function resetZoom() {
  myChart.resetZoom();
}

/**
 * To set and display header at chart.
 * @param {*} e 
 */
function chartAnimationProgress(e) {
  $("#damname").text(getParameterByName('name'));
  $("#header").show();
}

/**
 * When document is ready
 */
$(document).ready(function () {
  var url = getDataURL(getParameterByName('id'));
  parseCSV(url);
  $("#myChart").height("100%");
  $("#myChart").width("100%");
  setTimeout(function () {
    myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  }, 1000);
});

function parseCSV(url) {
  var od = [], wl = [], lc = [], count = 0, skip = false;
  // Stream big file in worker thread
  Papa.parse(url, {
    download: true,
    worker: false,
    step: function (results) {
      results.data.map(function (d, i) {
        // console.log("Row:", d, i);
        count++;
        if (count > 4) {
          if (i === 1) {
            if (od.indexOf(d) === -1) {
              od.push(d);
              skip = false;
            } else {
              skip = true;
            }
          } else if (i === 2 && skip === false) {
            wl.push(parseFloat(d));
          } else if (i === 3 && skip === false) {
            lc.push(parseFloat(d));
          }
        }
      });
      // console.log("Row:", results.data);
    },
    error: function (e) {
      switch (e.message) {
        case "Not Found":
          alert("Data is not available");
          break;
        default:
          alert(e.message);
      }
    }
  });
  // console.log(od);
  // console.log(wl);
  data.labels = od;
  data.datasets[0].data = wl;
  data.datasets[1].data = lc;
  // console.log(config);
}

/**
 * To download the image from chart
 */
function downloadImage() {
  var url = myChart.toBase64Image('image/png', 1);
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.download = "image.png";
  a.click();
}