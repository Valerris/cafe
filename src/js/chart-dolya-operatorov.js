Highcharts.chart('chart-dolya-operatorov', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    marginBottom: 45,
    height: 150
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
    labels: {
      style: {
        color: '#D4D6DC'
      }
    },
    categories: ['Количество объектов', 'Площадь объектов']
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
    name: 'Несетевые операторы',
    data: [56, 34],
    animation: {
      duration: 1000
    }
  }, {
    name: 'Сетевые операторы',
    data: [44, 66],
    animation: {
      duration: 1000
    }
  }]
});
