Highcharts.chart('chart-smena-rabochego-mesta', {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
    spacing: [50, 50, 50, 50],
    margin: [10, 10, 100, 10]
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
        color: '#D4D6DC'
      }
    },
    categories: ['Доля рабочих мест разных форматов, % от общего количества рабочих мест', 'Доля резидентов, занимающих рабочие места разного формата, % от общего числа опрошенных']
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
        color: 'white'
      }
    }
  },
  series: [{
    name: 'Brands',
    startAngle: 330,
    colorByPoint: true,
    data: [{
      name: 'Нет, не планирую менять',
      y: 66,
      sliced: false,
      selected: false
    }, {
      name: 'Планирую сменить на мини-офис',
      y: 19
    }, {
      name: 'Планирую сменить на незакрепленное рабочее место',
      y: 10
    }, {
      name: 'Затрудняюсь ответить',
      y: 5
    }]
  }]
});
