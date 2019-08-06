Highcharts.chart('chart-formaty-obshenia', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [50, 50, 50, 50],
    height: 350
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
    // opposite: true,
    labels: {
      style: {
        color: '#D4D6DC'
      }
    },
    categories: ['Личное рабочее общение', 'Личное общение в неформальной обстановке', 'Общение в социальных сетях коворкинга']
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
      stacking: "normal",
      pointWidth: 35,
      pointPadding: 50,
      groupPadding: 0,
      borderWidth: 0,
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
    name: 'Не общаюсь',
    data: [23, 59, 62],
    animation: {
      duration: 1000
    }
  }, {
    name: 'Личные вопросы',
    data: [60, 35, 33],
    animation: {
      duration: 1000
    }
  }, {
    name: 'Рабочие вопросы',
    data: [49, 19, 30],
    animation: {
      duration: 1000
    }
  }]
});
