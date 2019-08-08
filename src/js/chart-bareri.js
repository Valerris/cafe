(function() {

  Highcharts.chart('chart-bareri', {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      spacing: [25, 0, 15, 0],
      height: 225
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
          color: '#757575'
        }
      },
      categories: ['Барьеров нет', 'Нет нормативов/законодательной базы', 'Отсутствие/сложности в получении финансирования', 'Отсутствие связей: сложно находить партнеров/клиентов', 'Взаимодействие с государственными организациями', 'Внутренние проблемы организации', 'Нет рынка/Потребности в продукте', 'не ответили на вопрос']
    },
    yAxis: {
      min: 0,
      gridLineColor: 'transparent',
      lineColor: 'transparent',
      max: 32,
      labels: false,
      verticalAlign: 'top',
      title: {
        text: ''
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    "colors": [
      "#bab0fc",
      "#25b8ec",
      "#edb2cc",
      "#5763aa",
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
          filter: {
            property: 'y',
            operator: '>',
            value: 1
          },
          style: {
            textOutline: false
          },
          color: '#000'
        }
      }
    },
    series: [{
      name: 'undefined',
      data: [39, 18, 15, 7, 7, 6, 5, {color: "#f2f2f2", y: 3}],
      animation: {
        duration: 1000
      }
    }]
  });

  Highcharts.chart('chart-bareri-1', {
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
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
      pointFormat: '{point.y}%'
    },
    xAxis: {
      lineColor: 'transparent',
      labels: {
        style: {
          color: '#757575'
        }
      },
      categories: ['Барьеров нет', 'Нет нормативов/законодательной базы', 'Отсутствие/сложности в получении финансирования', 'Отсутствие связей: сложно находить партнеров/клиентов', 'Взаимодействие с государственными организациями', 'Внутренние проблемы организации', 'Нет рынка/Потребности в продукте', 'не ответили на вопрос']
    },
    yAxis: {
      min: 0,
      gridLineColor: 'transparent',
      lineColor: 'transparent',
      max: 32,
      labels: false,
      verticalAlign: 'top',
      title: {
        text: ''
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    "colors": [
      "#bab0fc",
      "#25b8ec",
      "#edb2cc",
      "#5763aa",
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
          filter: {
            property: 'y',
            operator: '>',
            value: 1
          },
          style: {
            textOutline: false
          },
          color: '#000'
        }
      }
    },
    series: [{
      name: 'undefined',
      data: [39, 18, 15, 7, 7, 6, 5, {color: "#f2f2f2", y: 3}],
      animation: {
        duration: 1000
      }
    }]
  });

})();
