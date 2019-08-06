Highcharts.chart('chart-vibot-kovorkinga', {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    height: 400
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
    categories: ['Фрилансер', 'Бизнес (компания)', 'Среднее по выборке']
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
        format: '{point.y}%',
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
    name: 'Да, много альтернатив, легко подобрать под желаемые критерии',
    data: [25, 15, 18],
    animation: {
      duration: 1000
    }
  }, {
    name: 'Да, хотя выбор небольшой и альтернативных вариантов немного',
    data: [36, 45, 40],
    animation: {
      duration: 1000
    }
  }, {
    name: 'Нет, сложно, выбор большой, но соответствующих требованиям немного',
    data: [11, 22, 18],
    animation: {
      duration: 1000
    }
  }, {
    name: 'Нет, сложно, выбор небольшой',
    data: [29, 18, 23],
    animation: {
      duration: 1000
    }
  }]
});
