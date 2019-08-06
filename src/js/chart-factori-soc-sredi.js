Highcharts.chart('chart-factori-soc-sredi', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    height: 300
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
    categories: ['По повседневным рабочим вопросам', 'За профессиональной консультацией', 'За помощью в подборе команды', 'За помощью в поиске партнера/ инвестора']
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
      pointPadding: 0,
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
      name: 'Нет, не обращаюсь',
      data: [48, 56, 70, 71],
      animation: {
        duration: 1000
      }
    },
    {
      name: 'Да, и мне помогают',
      data: [47, 40, 23, 22],
      animation: {
        duration: 1000
      }
    },
    {
      name: 'Да, но мне не помогают',
      data: [4, 4, 7, 7],
      animation: {
        duration: 1000
      }
    }
  ]
});
