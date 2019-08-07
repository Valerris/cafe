(function() {

  // 1
  Highcharts.chart('chart-portret-1', {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      spacing: [0, 0, 0, 0],
      height: 250
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
      categories: ['0-2 года', '3-5 лет', '6-10 лет', '11-15 лет', 'старше 15 лет', 'не указали возраст']
    },
    yAxis: {
      min: 0,
      gridLineColor: 'transparent',
      lineColor: 'transparent',
      max: 33,
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
      "#7fa0e1",
      "#edb2cc",
      "#60b4d4",
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
      data: [32.5, 22.9, 19.7, 6.4, 13.4, 5.1],
      animation: {
        duration: 1000
      }
    }]
  });

  // 2
  Highcharts.chart('chart-portret-2', {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      spacing: [0, 0, 0, 0],
      margin: [0, 0, 0, 0],
      height: 250
    },
    title: {
      text: ''
    },
    pie: {
      shadow: false,
      center: ['50%', '50%']
    },
    credits: {
      enabled: false
    },
    tooltip: {
      backgroundColor: '#eeeeee',
      borderWidth: 0,
      shadow: false,
      headerFormat: '',
      pointFormat: '{point.name}: {point.y}%'
    },
    xAxis: {
      lineColor: 'transparent',
      labels: {
        style: {
          color: '#757575'
        }
      }
    },
    legend: {
      itemStyle: {
        color: '#757575',
        fontWeight: 'bold'
      },
      itemHoverStyle: {
        color: '#000',
        fontWeight: 'bold'
      },
      layout: 'horizontal'
    },
    exporting: {
      enabled: false
    },
    "colors": [
      "#7fa0e1",
      "#edb2cc",
      "#60b4d4",
      "#5763aa",
      "#9743B4",
      "#E77B73",
      "#F4CB59",
      "#91e8e1"
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          distance: 5,
          format: '{point.y} %',
          style: {
            textOverflow: 'none',
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
          }
        },
        center: ['50%', '50%'],
        size: '70%'
      },
      series: {
        stacking: 'normal',
        borderColor: 'transparent',
        size: '70%',
        innerSize: '40%',
        dataLabels: {
          enabled: true,
          borderWidth: 0,
          textOutline: false,
          formatter: function() {
            if (this.y != 0) {
              return this.y;
            }
          },
          style: {
            textOutline: false
          },
          color: '#000'
        }
      }
    },
    series: [{
      name: 'Brands',
      startAngle: 200,
      colorByPoint: true,
      data: [{
        name: 'FinTech',
        y: 59,
        sliced: false,
        selected: false
      }, {
        name: 'Другое',
        y: 41
      }]
    }]
  });

  // 3
  Highcharts.chart('chart-portret-3', {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      // spacing: [50, 50, 50, 50],
      // margin: [10, 10, 100, 10],
      height: 300
    },
    title: {
      text: ''
    },
    pie: {
      shadow: false,
      center: ['50%', '50%']
    },
    credits: {
      enabled: false
    },
    tooltip: {
      backgroundColor: '#eeeeee',
      borderWidth: 0,
      shadow: false,
      headerFormat: '',
      pointFormat: '{point.name}: {point.y}%'
    },
    xAxis: {
      lineColor: 'transparent',
      labels: {
        style: {
          color: '#757575'
        }
      }
    },
    legend: {
      itemStyle: {
        color: '#757575',
        fontWeight: 'bold'
      },
      itemHoverStyle: {
        color: '#000',
        fontWeight: 'bold'
      },
      layout: 'horizontal'
    },
    exporting: {
      enabled: false
    },
    "colors": [
      "#7fa0e1",
      "#edb2cc",
      "#60b4d4",
      "#6043d4",
      "#9743B4",
      "#E77B73",
      "#F4CB59",
      "#91e8e1"
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          distance: 5,
          format: '{point.y} %',
          style: {
            textOverflow: 'none',
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
          }
        },
        center: ['50%', '50%'],
        size: '70%'
      },
      series: {
        stacking: 'normal',
        borderColor: 'transparent',
        size: '70%',
        innerSize: '40%',
        dataLabels: {
          enabled: true,
          borderWidth: 0,
          textOutline: false,
          formatter: function() {
            if (this.y != 0) {
              return this.y;
            }
          },
          style: {
            textOutline: false
          },
          color: '#000'
        }
      }
    },
    series: [{
      name: 'Brands',
      startAngle: 0,
      colorByPoint: true,
      data: [{
        name: '10-20',
        y: 18,
        sliced: false,
        selected: false
      }, {
        name: '1-3',
        y: 17
      }, {
        name: '3-10',
        y: 25
      }, {
        name: 'более 100',
        y: 15
      }, {
        name: 'более 20',
        y: 12
      }, {
        name: 'более 50',
        y: 13
      }]
    }]
  });

  // 4
  Highcharts.chart('chart-portret-4', {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      spacing: [0, 0, 0, 0],
      height: 280
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
      categories: ['Идея', 'Прототип(альфа или бета версии)', 'Первые показатели', 'Динамичный рост пользователей', 'Устойчивые продажи', 'Другое']
    },
    yAxis: {
      min: 0,
      gridLineColor: 'transparent',
      lineColor: 'transparent',
      max: 35,
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
      "#edb2cc",
      "#25b8ec",
      "#60b4d4",
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
      data: [13, 12, 13, 15, 34, {color: "#f2f2f2", y: 13}],
      animation: {
        duration: 1000
      }
    }]
  });


})();
