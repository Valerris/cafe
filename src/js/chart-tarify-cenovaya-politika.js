Highcharts.chart('chart-tarify-cenovaya-politika', {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0]
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
    pointFormat: '{series.name}: {point.y}'
  },
  xAxis: {
    lineColor: 'transparent',
    labels: {
      style: {
        color: '#D4D6DC'
      }
    },
    categories: ['Незакрепленное рабочее место', 'Закрепленное рабочее место', 'Мини-офис']
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
  legend: {
    itemStyle: {
      color: '#D4D6DC',
      fontWeight: 'bold'
    },
    itemHoverStyle: {
      color: '#FFFFFF',
      fontWeight: 'bold'
    },
    layout: 'vertical'
  },
  exporting: {
    enabled: false
  },
  "colors": [
    "#02CCCB",
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
    name: 'По фактическому месту использования',
    data: [39, 9, 5],
    animation: {
      duration: 1000
    }
  }, {
    name: 'Абонемент более 1 месяца',
    data: [13, 35, 30],
    animation: {
      duration: 1000
    }
  }, {
    name: 'Абонемент на 1 месяц',
    data: [48, 56, 65],
    animation: {
      duration: 1000
    }
  }]
});
