var chart2 = Highcharts.chart('chart-vliyanie-coworkinga', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    height: 255
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
    pointFormat: '{point.y}%'
  },
  xAxis: {
    lineColor: 'transparent',
    labels: {
      style: {
        color: '#D4D6DC'
      }
    },
    categories: ['Комфортное место работы', 'Развитие проекта/бизнеса', 'Развитие компетенций, навыков', 'Сообщество единомышленников', 'Общирная сеть деловых контактов', 'Ничего', 'Нашел партнера/заказчика', 'Нашел инвестора']
  },
  yAxis: {
    gridLineColor: 'transparent',
    lineColor: 'transparent',
    minPadding: 0,
    maxPadding: 0,
    max: 80,
    labels: false,
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
  plotOptions: {
    series: {
      borderColor: 'transparent',
      dataLabels: {
        enabled: true,
        borderWidth: 0,
        textOutline: false,
        format: '{point.y: .0f}%',
        filter: {
          property: 'y',
          operator: '>',
          value: 0.5
        },
        color: 'white'
      },
      groupPadding: 0,
      pointPadding: 25,
      pointWidth: 15
    }
  },
  series: [{
    name: 'Все резиденты',
    color: "#067BC6",
    data: [66, 27, 24, 17, 11, 9, 6, 1],
    animation: {
      duration: 1000
    }
  }]
});
