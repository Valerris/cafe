Highcharts.chart('chart-meri', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0]
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
    categories: ['Финансовая поддержка', 'Нет идей / Сами справимся', 'Построение каналов коммуникации', 'Четкие правила игры', 'Информационная поддержка', 'Госзаказы', 'Маркетинговая поддержка', 'Поиск клиентов', 'Юридическая поддержка', 'Государственные программы развития', 'Пилотные проекты с городом'],
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
    data: [31, 23, 14, 10, 5, 5, 4, 3, 2, 2, 1]
  }]
});
