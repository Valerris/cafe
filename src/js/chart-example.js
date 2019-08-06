Highcharts.chart('container1', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0]
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
        shadow: false
    },
  xAxis: {
	  lineColor: 'transparent',
	  labels: {
      	style: {
        	color: '#D4D6DC'
      	}
    },
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  yAxis: {
    min: 0,
    gridLineColor: 'transparent',
    lineColor: 'transparent',
    labels: {
      	style: {
        	color: '#D4D6DC'
      	}
    },
    gridLineWidth: 0,
    minorGridLineWidth: 0,
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
    reversed: true
  },
  exporting: { 
	  enabled: false 
	},
	"colors": [
    "#02CCCB",
    "#FE6102",
    "#FFBE02",
    "#F476BF",
    "#9743B4",
    "#E77B73",
    "#F4CB59",
    "#2b908f",
    "#f45b5b",
    "#91e8e1"
  ],
  plotOptions: {
    series: {
      stacking: 'normal',
      borderColor: 'transparent'
    }
  },
  series: [{
    name: 'John',
    data: [5, 3, 4, 7, 2],
    animation: {
            duration: 1000
        }
  }, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5],
    animation: {
            duration: 1000
        }
  }, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1],
    animation: {
            duration: 1000
        }
  }]
});



Highcharts.chart('container3', {

  chart: {
    type: 'item',
    backgroundColor: 'transparent',
    spacing: [0, 0, 0, 0]
  },

  title: {
    text: ''
  },
credits: {
      enabled: false
  },
  subtitle: {
    text: ''
  },

  legend: {
	  enabled: false,
    labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
  },
  
  
  exporting: { 
	  enabled: false 
	},
	"colors": [
    "#11C8E9",
    "#217ECB",
    "#2C33C1",
    "#F476BF",
    "#9743B4",
    "#E77B73",
    "#F4CB59"
  ],
  
  tooltip: {
        backgroundColor: '#eeeeee',
        borderWidth: 0,
        shadow: false
    },

  series: [{
    name: 'Representatives',
    keys: ['name', 'y', 'color', 'label'],
    data: [
      ['The Left', 14, '#02CCCB', 'DIE LINKE'],
      ['Social Democratic Party', 10, '#FE6102', 'SPD'],
      ['Alliance 90/The Greens', 8, '#FE6102', 'GRÜNE'],
      ['Free Democratic Party', 7, '#FFBE02', 'FDP'],
      ['Christian Democratic Union', 7, '#F476BF', 'CDU'],
      ['Christian Social Union in Bavaria', 4, '#9743B4', 'CSU']
    ],
    dataLabels: {
      enabled: true,
      format: '{point.label}'
    },

    // Circular options
    center: ['50%', '88%'],
    size: '170%',
    startAngle: -100,
    endAngle: 100
  }]
});
