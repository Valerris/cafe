Highcharts.chart('chart-tech-otraslevaya-specifika', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    style: {
      "fontSize": "11px"
    },
    height: 300
  },
  title: {
    text: '',
    style: {
      'color': '#D4D6DC'
    }
  },
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  tooltip: {
    backgroundColor: "#eee",
    borderWidth: 0,
    shadow: false,
    headerFormat: '',
    pointFormat: "{point.y}%"
  },
  xAxis: {
    lineColor: 'transparent',
    categories: ['ИТ (разработка игр, мобильные приложения, софт)', 'Промышленность и индустрия 4.0', 'Маркетинг, PR, реклама и медиа', 'Образование (коучинг, тренинги, преподавание, онлайн-курсы)', 'HRTech и консалтинг', 'Архитектура, дизайн, креативные индустрии'],
    labels: {
      style: {
        color: '#D4D6DC'
      }
    },
  },
  yAxis: {
    max: 40,
    gridLineColor: 'transparent',
    title: {
      text: ''
    },
    labels: {
      enabled: false
    }
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        inside: true,
        color: '#fff'
      },
      groupPadding: 0,
      pointPadding: 0,
      pointWidth: 15
    }
  },
  series: [{
    name: '',
    color: "rgb(255, 190, 2)",
    borderColor: 'transparent',
    dataLabels: [{
      align: 'right',
      format: '{point.y}%',
      x: 45
    }],
    data: [32, 14, 14, 8, 7, 7]
  }]
});
