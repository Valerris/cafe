(function() {

  Highcharts.chart('chart-meri', {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      spacing: [15, 0, 35, 0],
      height: 175
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
      categories: ['Финансовая поддержка', 'Нет идей / Сами справимся', 'Построение каналов коммуникации', 'Четкие правила игры', 'Информационная поддержка', 'Госзаказы', 'Маркетинговая поддержка', 'Поиск клиентов', 'Юридическая поддержка', 'Государственные программы развития', 'Пилотные проекты с городом']
    },
    yAxis: {
      min: 0,
      gridLineColor: 'transparent',
      lineColor: 'transparent',
      max: 40,
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
          style: {
            textOutline: false
          },
          color: '#000'
        }
      }
    },
    series: [{
      name: 'undefined',
      data: [31, 23, 14, 10, 5, 5, 4, 3, 2, 2, {color: "#f2f2f2", y: 1}],
      animation: {
        duration: 1000
      }
    }]
  });

})();
