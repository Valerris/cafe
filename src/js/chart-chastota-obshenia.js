Highcharts.chart('chart-chastota-obshenia', {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
    spacing: [50, 50, 50, 50],
    margin: [50, 10, 150, 10],
    height: 370
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
        format: '{point.percentage:.0f} %',
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
    startAngle: 0,
    colorByPoint: true,
    data: [{
      name: 'Меньше 10 минут, не общаюсь вовсе',
      y: 37
    }, {
      name: 'Не более получаса',
      y: 47
    }, {
      name: 'Не более часа',
      y: 7
    }, {
      name: 'Много общаюсь',
      y: 9
    }]
  }]
});
