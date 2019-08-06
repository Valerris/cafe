Highcharts.chart('chart-masterskaya', {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
    spacing: [50, 50, 50, 50],
    margin: [10, 10, 125, 10],
    height: 275
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
        format: '{point.y} %',
        style: {
          textOverflow: 'none',
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
        }
      },
      center: ['50%', '50%'],
      size: '90%'
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
        filter: {
          property: 'y',
          operator: '>',
          value: 0
        },
        style: {
          textOutline: false
        },
        color: 'white'
      }
    }
  },
  series: [{
    startAngle: 240,
    colorByPoint: true,
    data: [{
      name: 'Места в мини-офисах',
      y: 0,
      sliced: false,
      selected: false
    }, {
      name: 'Закрепленные места',
      y: 23
    }, {
      name: 'Незакрепленные места',
      y: 77
    }]
  }]
});
