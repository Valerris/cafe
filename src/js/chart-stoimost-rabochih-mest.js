Highcharts.chart('chart-stoimost-rabochih-mest', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    height: 80
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  tooltip: {
    backgroundColor: '#eeeeee',
    borderWidth: 0,
    shadow: false,
    headerFormat: '',
    pointFormat: '{series.name}: {point.y}%'
  },
  xAxis: {
    lineColor: 'transparent',
    labels: false,
    categories: ['Стоимость незакрепленного места, руб./мес.', 'Стоимость закрепленного места, руб./мес.']
  },
  yAxis: {
    min: 0,
    gridLineColor: 'transparent',
    lineColor: 'transparent',
    max: 100,
    labels: false,
    verticalAlign: 'top',
    title: {
      text: ''
    }
  },
  legend: false,
  exporting: {
    enabled: false
  },
  "colors": [
    "#02CCCB",
    "#FE6102",
    "#FFBE02",
    "#F476BF",
    "#9743B4",
    "#2ECC71",
    "#F4CB59",
    "#91e8e1"
  ],
  plotOptions: {
    series: {
      stacking: 'normal',
      borderColor: 'transparent',
      pointWidth: 45,
      pointPadding: 0.01,
      groupPadding: 0.01,
      dataLabels: {
        enabled: true,
        borderWidth: 0,
        textOutline: false,
        formatter: function() {
          if (this.y != 0) {
            return this.y;
          }
        },
        style: {
          textOutline: false
        },
        color: 'white'
      }
    }
  },
  series: [{
    name: 'бесплатно *',
    data: [15],
    animation: {
      duration: 1000
    }
  }, {
    name: 'до 5000',
    data: [7],
    animation: {
      duration: 1000
    }
  }, {
    name: '5000 – 10000',
    data: [28],
    animation: {
      duration: 1000
    }
  }, {
    name: '10000 – 15000',
    data: [23],
    animation: {
      duration: 1000
    }
  }, {
    name: '15000 – 20000',
    data: [18],
    animation: {
      duration: 1000
    }
  }, {
    name: 'более 20000',
    data: [9],
    animation: {
      duration: 1000
    }
  }]
});
