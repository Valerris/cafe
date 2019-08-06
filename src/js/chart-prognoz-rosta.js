Highcharts.chart('chart-prognoz-rosta', {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    height: 250
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
    pointFormat: '{series.name}: {point.y} 000 м<sup>2</sup>'
  },
  xAxis: {
    lineColor: 'transparent',

    labels: {
      style: {
        color: '#D4D6DC'
      }
    },
    categories: ['2018', '2019П', '2020П', '2021П', '2022П']
  },
  yAxis: {
    min: 0,
    gridLineColor: 'transparent',
    lineColor: 'transparent',
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
    "#8C48AB",
    "#FE6102",
    "#FFBE02",
    "#F476BF",
    "#9743B4",
    "#E77B73",
    "#F4CB59",
    "#91e8e1"
  ],
  plotOptions: {
    series: {
      stacking: 'normal',
      borderColor: 'transparent',
      dataLabels: {
        enabled: true,
        borderWidth: 0,
        textOutline: false,
        format: '{point.y}',
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
    name: 'Общая площадь',
    data: [101, 153, 207, 279, 378],
    animation: {
      duration: 1000
    }
  }]

});
