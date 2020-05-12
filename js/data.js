//环状图数据
var _pieData = [
  { name: '口罩', persent: 70, number: 780 },
  { name: '防护服', persent: 55, number: 540 },
];

// 地图数据
var _mapData = [
  { name: '河南', value: 67 },
  { name: '江苏', value: 65 },
  { name: '江西', value: 54 },
  { name: '湖北', value: 37 },
  { name: '广东', value: 29 },
  { name: '山东', value: 25 },
  { name: '浙江', value: 14 },
  { name: '河北', value: 12 },
  { name: '福建', value: 10 },
  { name: '四川', value: 8 },
  { name: '湖南', value: 7 },
  { name: '重庆', value: 6 },
  { name: '上海', value: 6 },
  { name: '吉林', value: 5 },
  { name: '安徽', value: 5 },
  { name: '天津', value: 4 },
  { name: '新疆', value: 3 },
  { name: '黑龙江', value: 3 },
  { name: '贵州', value: 3 },
  { name: '云南', value: 2 },
  { name: '广西', value: 2 },
  { name: '北京', value: 2 },
  { name: '台湾', value: 1 },
  { name: '海南', value: 1 },
  { name: '甘肃', value: 1 },
];
//地图下方企业总数
var _totalNum = 1098;

//供给数据
var _supplyData = [
  {
    name: '防疫口罩',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司1',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
  {
    name: '防护面罩/眼镜',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司2',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
  {
    name: '防护服',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司3',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
  {
    name: '防护配件',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司4',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
  {
    name: '体温枪',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司5',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
  {
    name: '原辅料',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司6',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
  {
    name: '设备',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司7',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
  {
    name: '其他物资',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司8',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
  {
    name: '发布需求',
    data: [
      {
        text: '银川市XXXXXX特殊器械有限公司9',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
      {
        text: '银川市XXXXXX特殊器械有限公司',
        subText: '全密封防护服防护服防护服',
        address: '宁夏回族自治区 银川市',
      },
    ],
  },
];

//需求数据
var _demandData = [
  {
    name: '防疫口罩',
    data: [
      {
        text: '活性炭防护口罩需求1',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
  {
    name: '防护面罩/眼镜',
    data: [
      {
        text: '活性炭防护口罩需求2',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
  {
    name: '防护服',
    data: [
      {
        text: '活性炭防护口罩需求3',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
  {
    name: '防护配件',
    data: [
      {
        text: '活性炭防护口罩需求4',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
  {
    name: '体温枪',
    data: [
      {
        text: '活性炭防护口罩需求5',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
  {
    name: '原辅料',
    data: [
      {
        text: '活性炭防护口罩需求6',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
  {
    name: '设备',
    data: [
      {
        text: '活性炭防护口罩需求7',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
  {
    name: '其他物资',
    data: [
      {
        text: '活性炭防护口罩需求8',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
  {
    name: '发布需求',
    data: [
      {
        text: '活性炭防护口罩需求9',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
      {
        text: '活性炭防护口罩需求',
        number: 3,
        address: '北京 北京市 海淀医院',
      },
    ],
  },
];
