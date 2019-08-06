var chart1 = Highcharts.chart('chart-prichini-smeni-coworkinga-1', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    style: {
      "fontSize": "11px"
    },
    height: 250
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
    categories: ['Стало неудобным местоположение', 'Высокая стоимость аренды', 'Потребность в другом формате рабочего пространства', 'Отсутствие нужных услуг', 'Низкое качество или отсутствие инфраструктуры', 'Плохие отношения с другими арендаторами'],
    labels: {
      style: {
        color: '#D4D6DC'
      }
    }
  },
  yAxis: {
    max: 80,
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
      color: "rgb(255, 190, 2)",
      borderColor: 'transparent',
      dataLabels: {
        enabled: true,
        inside: true,
        color: '#fff',
        align: 'center',
        format: '{y}%',
        filter: {
          property: 'y',
          operator: '>',
          value: 1
        }
      },
      groupPadding: 0,
      pointPadding: 0,
      pointWidth: 15
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
  series: [{
    name: 'Все резиденты',
    data: [43, 33, 20, 13, 7, 7]
  }]
});


Highcharts.chart('chart-prichini-smeni-coworkinga-2', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    spacingTop: 0,
    marginTop: 10,
    style: {
      "fontSize": "11px"
    },
    height: 250
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
    categories: ['Недостаточное качество услуг в текущем коворкинге', 'Появилась возможность арендовать офис', 'Нашел коворгинг дешевле', 'Сменилась сфера деятельности', 'Появилась возможность работать ближе к дому'],
    labels: {
      style: {
        color: '#D4D6DC'
      }
    }
  },
  yAxis: {
    max: 80,
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
  series: [{
    name: 'Все резиденты',
    color: "rgb(255, 190, 2)",
    borderColor: 'transparent',
    dataLabels: [{
      align: 'center',
      format: '{point.y}%'
    }],
    data: [36, 21, 21, 14, 14] //color: "#f01737"
  }]
});
