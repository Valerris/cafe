Highcharts.chart('chart-resudenty-coworkingov-moskvy', {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
    spacing: [0, 20, 0, 20]
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
    categories: ['']
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
    "#FFBE02",
    "#FE6102",
    "#2ECC71",
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
        format: '{point.name}:<br>{point.percentage:.f} %',
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
    name: 'Типы резидентов',
    startAngle: 120,
    colorByPoint: true,
    data: [{
      name: 'Компании',
      y: 64,
      sliced: true,
      selected: true
    }, {
      name: 'Фрилансеры',
      y: 30
    }, {
      name: 'Другое',
      y: 6
    }]
  }]
});
