// map地图方法
function mapCharts(mapData) {
  var optionMap = {
    backgroundColor: '#FFFFFF',
    title: {
      text: '全国防疫物资产能态势图',
      x: 'center',
      textStyle: {
        color: '#001d44',
        fontSize: '14',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.value) {
          return params.name + '<br/>防疫物资生产企业：' + params.data['value'];
        } else {
          return params.name + '<br/>&nbsp;-';
        }
      },
    },
    //左侧小导航图标
    visualMap: {
      show: false,
      min: 0,
      max: 67,
      left: '10',
      top: 'bottom',
      text: ['高', '低'],
      calculable: false,
      orient: 'horizontal',
      inRange: {
        color: ['#aad2ff', '#0077ff'],
        symbolSize: [30, 100],
      },
    },
    //配置属性
    series: [
      {
        name: '防疫物资生产企业',
        type: 'map',
        mapType: 'china',
        zoom: 1.03,
        roam: false,
        itemStyle: {
          normal: {
            borderColor: '#0e7eff',
            borderWidth: 0.5,
            areaColor: '#fff',
          },
        },
        label: {
          normal: {
            show: false, //省份名称
          },
          emphasis: {
            show: false,
          },
        },
        data: mapData, //数据
      },
    ],
  };
  //初始化echarts实例
  var myChart = echarts.init(document.getElementById('chinaMap'));
  //使用制定的配置项和数据显示图表
  myChart.setOption(optionMap);
  // myChart.on("click", function(params) {
  //     console.log(params)
  // })
}

// pieChart(id, 利用率，颜色，日产数量）
function pieChart(id, value, color, number) {
  if (value > 100) {
    value = 100;
  }
  var option = {
    title: {
      text: number + '\n万/每天',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: color[0],
        fontSize: '13',
      },
    },
    animation: false,
    series: [
      {
        type: 'pie',
        hoverAnimation: true,
        clockwise: true,
        radius: ['82%', '84%'],
        itemStyle: {
          normal: {
            color: color[0],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        },
        data: [
          { name: '', value: 0 },
          { name: '', value: 100 },
        ],
      },
      {
        type: 'pie',
        clockWise: true,
        radius: ['88%', '96%'],
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        },
        hoverAnimation: true,
        data: [
          {
            value: value,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: color[0] },
                  { offset: 1, color: color[1] },
                ]),
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
          },
          {
            value: 100 - value,
            itemStyle: {
              normal: {
                color: 'transparent',
              },
            },
          },
        ],
      },
    ],
  };
  var Chart = echarts.init(document.getElementById(id));
  Chart.setOption(option, true);
}

// 供给tab切换js
$('.supply p').click(function() {
  let _index = $(this).index();
  $(this)
    .addClass('active')
    .siblings('p')
    .removeClass('active');
  $('.supply-cont li')
    .eq(_index)
    .removeClass('hide')
    .siblings('li')
    .addClass('hide');
});

// 需求tab切换js
$('.demand p').click(function() {
  let _index = $(this).index();
  $(this)
    .addClass('active')
    .siblings('p')
    .removeClass('active');
  $('.demand-cont li')
    .eq(_index)
    .removeClass('hide')
    .siblings('li')
    .addClass('hide');
});
