<template>
  <div class="container">
    <div class="header">
      <h1>仿真实验数据中心</h1>
    </div>
    <div class="main">
      <div class="left">
        <div class="section">
          <h2>仿真时常统计</h2>
          <div class="echarts" ref="echartsLeft1"></div>
        </div>
        <div class="section">
          <h2>近一周仿真使用次数</h2>
          <div class="echarts" ref="echartsLeft2"></div>
        </div>
        <div class="section">
          <h2>近一周仿真使用时长</h2>
          <div class="echarts" ref="echartsLeft3"></div>
        </div>
      </div>
      <div class="center">
        <div class="data">
          <ul>
            <li v-for="item in centerData" :key="item.value">
              <p>{{ item.value }}</p>
              <p>{{ item.label }}</p>
            </li>
          </ul>
        </div>
        <div ref="echartsCenter" style="width: 100%; height: 100%"></div>
      </div>
      <div class="right">
        <div class="section">
          <h2>平台仿真使用次数排行</h2>
          <div class="echarts" ref="echartsRight1"></div>
        </div>
        <div class="section">
          <h2>近一年得分统计</h2>
          <div class="echarts" ref="echartsRight2"></div>
        </div>
        <div class="section">
          <h2>近一年使用时长统计</h2>
          <div class="echarts" ref="echartsRight3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import chinaMap from 'echarts/map/json/china.json'
import * as echarts from 'echarts'

const echartsLeft1 = ref()
const echartsLeft2 = ref()
const echartsLeft3 = ref()
const echartsCenter = ref()
const echartsRight1 = ref()
const echartsRight2 = ref()
const echartsRight3 = ref()

const centerData = ref([
  { label: '累计服务老师', value: '2人次' },
  { label: '累计服务学生', value: '1人次' },
  { label: '学习总时长', value: '0.00小时' },
  { label: '平台访问次数', value: '4次' }
])

const dataList = [
  {
    name: '南海诸岛',
    value: 100,
    eventTotal: 100,
    specialImportant: 10,
    import: 10,
    compare: 10,
    common: 40,
    specail: 20
  },
  { name: '北京', value: 1540 },
  { name: '天津', value: 130 },
  { name: '上海', value: 400 },
  { name: '重庆', value: 750 },
  { name: '河北', value: 130 },
  { name: '河南', value: 830 },
  { name: '云南', value: 110 },
  { name: '辽宁', value: 19 },
  { name: '黑龙江', value: 150 },
  { name: '湖南', value: 690 },
  { name: '安徽', value: 60 },
  { name: '山东', value: 39 },
  { name: '新疆', value: 452 },
  { name: '江苏', value: 31 },
  { name: '浙江', value: 104 },
  { name: '江西', value: 36 },
  { name: '湖北', value: 52 },
  { name: '广西', value: 33 },
  { name: '甘肃', value: 73 },
  { name: '山西', value: 54 },
  { name: '内蒙古', value: 778 },
  { name: '陕西', value: 22 },
  { name: '吉林', value: 44 },
  { name: '福建', value: 18 },
  { name: '贵州', value: 54 },
  { name: '广东', value: 98 },
  { name: '青海', value: 13 },
  { name: '西藏', value: 0 },
  { name: '四川', value: 44 },
  { name: '宁夏', value: 42 },
  { name: '海南', value: 22 },
  { name: '台湾', value: 23 },
  { name: '香港', value: 25 },
  { name: '澳门', value: 555 }
]

function initLeft1() {
  const chart = echarts.init(echartsLeft1.value)
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '1%'
    },
    series: [
      {
        name: '时长统计',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '时长 1' },
          { value: 735, name: '时长 2' },
          { value: 580, name: '时长 3' }
        ]
      }
    ]
  }
  chart.setOption(option)
}

function initLeft2() {
  const chart = echarts.init(echartsLeft2.value)
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  }
  chart.setOption(option)
}

function initLeft3() {
  const chart = echarts.init(echartsLeft3.value)
  const option = {
    title: {
      text: ''
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  }
  chart.setOption(option)
}

function initCenter() {
  // 基于准备好的dom，初始化echarts实例
  const chart = echarts.init(echartsCenter.value)
  // 指定图表的配置项和数据
  const option = {
    tooltip: {
      triggerOn: 'mousemove', //mousemove、click
      padding: 8,
      borderWidth: 1,
      borderColor: '#409eff',
      backgroundColor: 'rgba(255,255,255,0.7)',
      textStyle: {
        color: '#000000',
        fontSize: 13
      }
      // formatter: function (e) {
      //   let data = e.data
      //   let context = `
      //                       <div>
      //                           <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
      //                           <p class="tooltip_style"><span class="tooltip_left">成果总数</span><span class="tooltip_right">${data.value}</span></p>
      //                       </div>
      //                       `
      //   return context
      // }
    },
    visualMap: {
      show: true,
      left: 26,
      bottom: 40,
      showLabel: true,
      pieces: [
        {
          gte: 1000,
          label: '>= 1000',
          color: '#5475f5'
        },
        {
          gte: 700,
          lt: 999,
          label: '700 - 999',
          color: '#56cdf5'
        },
        {
          gte: 500,
          lt: 699,
          label: '500 - 699',
          color: '#83d8fb'
        },
        {
          gte: 100,
          lt: 499,
          label: '100 - 499',
          color: '#85daef'
        },
        {
          gte: 10,
          lt: 99,
          label: '10 - 99',
          color: '#8ae4fb'
        },
        {
          lt: 10,
          label: '<10',
          color: '#81b4fc'
        }
      ]
    },
    geo: {
      map: 'china',
      scaleLimit: {
        min: 1,
        max: 2
      },
      zoom: 1.2,
      top: 120,
      layoutSize: '100%', //保持地图宽高比
      roam: false, // 是否可以缩放、拖拽
      silent: true, // 禁用鼠标事件，hover，mouseenter
      label: {
        normal: {
          show: false, // 是否显示省份名称
          fontSize: '14',
          color: 'rgba(0,0,0,0.7)'
        },
        emphasis: {
          show: false,
          textStyle: {
            color: '#F3F3F3'
          }
        }
      },
      itemStyle: {
        normal: {
          //shadowBlur: 50,
          //shadowColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(0, 0, 0, 0.2)',
          areaColor: '#1955a4'
        },
        emphasis: {
          areaColor: '#a6fdf3', // 鼠标hover颜色
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    },
    series: [
      {
        name: '数据预览',
        type: 'map',
        geoIndex: 0,
        data: dataList
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  chart.setOption(option)
}

function initRight1() {
  const chart = echarts.init(echartsRight1.value)
  const option = {
    title: {
      text: '',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  chart.setOption(option)
}

function initRight2() {
  const chart = echarts.init(echartsRight2.value)
  const option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
  chart.setOption(option)
}

function initRight3() {
  const chart = echarts.init(echartsRight3.value)
  const option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
  chart.setOption(option)
}

onMounted(() => {
  echarts.registerMap('china', { geoJSON: chinaMap })
  initLeft1()
  initLeft2()
  initLeft3()
  initCenter()
  initRight1()
  initRight2()
  initRight3()
})
</script>

<style scope>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
}
.header {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.left {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.center {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.center .data {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
}
.center .data ul {
  display: flex;
  padding: 20px;
}
.center .data ul li {
  flex: 1;
}
.right {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.section {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px;
}
h2 {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  color: #fff;
  font-size: 18px;
  background: linear-gradient(to right, #77a2fc, #e0ecfc);
  border-radius: 4px;
}
.echarts {
  flex: 1;
}
</style>
