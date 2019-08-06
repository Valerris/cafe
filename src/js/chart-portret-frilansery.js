Highcharts.chart('chart-portret-frilansery', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    height: 40
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  tooltip: false,
  xAxis: {
    lineColor: 'transparent',
    labels: false,
    categories: ['Стоимость незакрепленного места, руб./мес.', 'Стоимость закрепленного места, руб./мес.']
  },
  yAxis: {
    min: 0,
    gridLineColor: 'transparent',
    lineColor: 'transparent',
    max: 100,
    labels: false,
    verticalAlign: 'top',
    title: {
      text: ''
    }
  },
  legend: false,
  exporting: {
    enabled: false
  },
  "colors": [
    "#FFBE02",
    "#FE6102",
    "#FFBE02",
    "#F476BF",
    "#9743B4",
    "#2ECC71",
    "#F4CB59",
    "#91e8e1"
  ],
  plotOptions: {
    series: {
      stacking: 'normal',
      borderColor: 'transparent',
      pointWidth: 12,
      pointPadding: 0.01,
      groupPadding: 0.01,
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
        style: {
          textOutline: false
        },
        color: 'white'
      }
    }
  },
  series: [{
    name: 'закрепленные рабочие места',
    data: [54],
    animation: {
      duration: 1000
    }
  }, {
    name: 'незакрепленные рабочие места',
    data: [39],
    animation: {
      duration: 1000
    }
  }]
});
