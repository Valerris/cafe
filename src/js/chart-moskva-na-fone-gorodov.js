Highcharts.chart('chart-moskva-na-fone-gorodov-1', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    style: {
      "fontSize": "11px"
    }
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
    categories: ['Дели', 'Бангалор', 'Шанхай', 'Амстердам*', 'Лондон*', 'Сингапур', 'Гонконг', 'Пекин', 'Сидней', 'Манила', 'Барселона*', 'Москва', 'Берлин*'],
    labels: {
      style: {
        color: '#D4D6DC'
      }
    }
  },
  yAxis: {
    max: 20,
    gridLineColor: 'transparent',
    title: {
      text: '*Данные за 2017 г.<br>Источники: Statista; Cushman & Wakefield; The Flexible Workspace Outlook Report 2018, Colliers International',
      style: {
        'color': '#fff',
        'opacity': '.5'
      }
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
      }
    }
  },
  series: [{
    name: '',
    color: "#2ECC71",
    borderColor: 'transparent',
    dataLabels: [{
      align: 'right',
      format: '{point.y:,.1f}%',
      x: 45
    }],
    data: [17.6, 17.6, 8.0, 6.0, 4.0, 3.9, 3.0, 2.9, 2.6, 2.5, 1.1, {
      y: 0.5,
      color: "#f01737"
    }, 0.5]
  }]
});


Highcharts.chart('chart-moskva-na-fone-gorodov-2', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    style: {
      "fontSize": "11px"
    }
  },
  title: {
    text: '',
    style: {
      "color": "#D4D6DC"
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
    pointFormat: "{point.y}"
  },
  xAxis: {
    lineColor: 'transparent',
    categories: ['Лос-Анджелес', 'Сингапур', 'Нью-Йорк', 'Гонконг', 'Берлин', 'Лондон', 'Торонто', 'Токио', 'Москва', 'Сеул'],
    labels: {
      style: {
        color: '#D4D6DC'
      }
    }
  },
  yAxis: {
    max: 20,
    gridLineColor: 'transparent',
    title: {
      text: 'Источники: Statista; Global Cities Review 2017, Instant Group; PAC Flex Market - The fastest growing region in the world, октябрь 2018, Instant Group; данные статистических комитетов городов',
      style: {
        'color': '#fff',
        'opacity': '.5'
      }
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
      }
    }
  },
  series: [{
    name: '',
    color: "#2ECC71",
    borderColor: 'transparent',
    dataLabels: [{
      align: 'right',
      format: '{y}',
      x: 35
    }],
    data: [11.8, 7.1, 6.9, 6.3, 5.9, 4.4, 4.1, 3.8, {
      y: 1.6,
      color: "#f01737"
    }, 1.4]
  }]
});
