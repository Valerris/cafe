var chart = Highcharts.chart('chart-tipy-residentov', {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0],
    height: 300
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
    pointFormat: '{series.name}: {point.y}%'
  },
  xAxis: {
    lineColor: 'transparent',
    labels: {
      style: {
        color: '#D4D6DC'
      }
    },
    categories: ['Деловая обстановка', 'Непринужденная обставка', 'Доступ к бизнес-контактам и творческому сообществу', 'Экономия на аренде офиса', 'Возможность использовать оборудование']
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
    "#FFBE02",
    "#F476BF",
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
        color: 'white'
      }
    }
  },
  series: [{
    name: 'Все резиденты',
    data: [66, 37, 34, 29, 14],
    animation: {
      duration: 1000
    }
  }]
});
