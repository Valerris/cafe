Highcharts.chart('chart-osobennosti', {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    height: 280,
    width: 300,
    style: {
      fontSize: "16px"
    }
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
    pointFormat: '{point.name}'
  },
  xAxis: {
    lineColor: 'transparent',
    labels: {
      style: {
        color: '#D4D6DC'
      }
    }
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  "colors": [
    "#FE6102",
    "#02CCCB",
    "#FFBE02",
    "#5DA86B",
    "#9743B4",
    "#E77B73",
    "#F4CB59",
    "#91e8e1"
  ],
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        distance: -20,
        style: {
          textOverflow: 'none',
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
        }
      },
      center: ['50%', '50%'],
      size: '100%'
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
        color: 'white'
      }
    }
  },
  series: [{
    name: 'Brands',
    startAngle: -90,
    colorByPoint: true,
    data: [{
      name: 'Гибкие условия аренды',
      y: 25,
      sliced: false,
      selected: false
    }, {
      name: 'Разные форматы рабочих мест',
      y: 25
    }, {
      name: 'Нетворкинг и сервисы',
      y: 25
    }, {
      name: 'Многофункциональность',
      y: 25
    }]
  }]
});
