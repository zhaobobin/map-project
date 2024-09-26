<template>
  <div class="container">
    <div class="header">
      <div class="logo">LOGO</div>
      <h1>智慧模拟虚拟实验室平台</h1>
      <div class="date">
        <p>2022年6月10日 星期五 14:59</p>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <div class="section">
          <h2>课程使用总时长统计</h2>
          <div class="echarts" ref="echartsLeft1"></div>
        </div>
        <div class="section">
          <h2>在线状态统计</h2>
          <div class="echarts" ref="echartsLeft2"></div>
        </div>
        <!-- <div class="section">
          <h2>近一周使用时长</h2>
          <div class="echarts" ref="echartsLeft3"></div>
        </div> -->
      </div>
      <div class="center">
        <div class="center-data">
          <ul>
            <li v-for="item in centerData" :key="item.value">
              <p class="label">{{ item.value }}</p>
              <p class="value">{{ item.label }}</p>
            </li>
          </ul>
        </div>
        <div class="center-map echarts" ref="echartsCenter"></div>
        <div class="center-rank">
          <el-table :data="centerRank" style="width: 100%" height="150">
            <el-table-column prop="index" label="排名" width="100" align="center" />
            <el-table-column prop="name" label="医院名称" width="180" align="center" />
            <el-table-column prop="value" label="使用人数" width="180" align="center" />
            <el-table-column prop="time" label="时间" align="center" />
          </el-table>
        </div>
      </div>
      <div class="right">
        <div class="section">
          <h2>课程使用时长排行榜</h2>
          <!-- <div class="echarts" ref="echartsRight1"></div> -->
          <div class="echarts">
            <ul class="ranking">
              <li v-for="item in right1Data" :key="item.value" class="item">
                <label>{{ item.label }}</label>
                <span>{{ item.value }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="section">
          <h2>近一年模拟通过率统计</h2>
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
import chinaMap from '@/assets/map/json/china.json'
import * as echarts from 'echarts'

const echartsLeft1 = ref()
const echartsLeft2 = ref()
const echartsLeft3 = ref()
const echartsCenter = ref()
const echartsRight1 = ref()
const echartsRight2 = ref()
const echartsRight3 = ref()

const centerData = ref([
  { label: '医院数', value: '210' },
  { label: '课程数', value: '34,255' },
  { label: '学习人数', value: '8,234' },
  { label: '学习总时长', value: '564,234' },
  { label: '模拟通过率', value: '90%' }
])

const centerRank = ref([
  { index: 1, name: '广医附一', value: '40', time: '70' },
  { index: 2, name: '北医三院', value: '30', time: '60' },
  { index: 3, name: '中山医院', value: '25', time: '40' },
  { index: 4, name: '协和医院', value: '60', time: '35' }
])

const right1Data = ref([
  { label: '1. 新生儿重症监护', value: '150小时' },
  { label: '2. 简易呼吸机使用', value: '120小时' },
  { label: '3. 鼻饲法虚实结合系统', value: '100小时' }
])

const dataList = [
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
  { name: '台湾', value: 23 }
]

function initLeft1() {
  const chart = echarts.init(echartsLeft1.value)
  const option = {
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: {
      // show: false
      type: 'category',
      data: ['1 北一三院', '2 北一三院', '3 北一三院', '4 北一三院', '5 北一三院', '6 北一三院'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        fontSize: 12,
        color: '#fff'
        // color: function (value, index) {
        //   if (index == 0) {
        //     return 'red'
        //   }
        //   if (index == 1) {
        //     return '#ff8447'
        //   }
        //   if (index == 2) {
        //     return '#ffcc00'
        //   }
        //   return 'rgb(18,205,12)'
        // },
      }
    },
    series: [
      {
        type: 'bar',
        stack: 'chart',
        barWidth: '14',
        showBackground: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              {
                offset: 0,
                color: '#FF5E48'
              },
              {
                offset: 1,
                color: '#FF5E4800'
              }
            ])
          }
        },
        label: {
          normal: {
            // position: 'left',
            fontSize: 10,
            show: true,
            color: 'white',
            formatter: '{c}%'
          }
        },
        data: [3805, 2805, 1805, 1805, 1805, 1805]
      }
      // {
      //   type: 'bar',
      //   stack: 'chart',
      //   barWidth: '24',
      //   itemStyle: {
      //     normal: {
      //       color: '#0D2253'
      //     }
      //   },
      //   data: [40, 35, 30, 32, 28, 24, 20, 34, 40, 20, 32, 18]
      // }
    ]
  }
  chart.setOption(option)
}

function initLeft2() {
  const chart = echarts.init(echartsLeft2.value)
  const option = {
    grid: {
      top: '15%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [5, 7, 11, 16, 19],
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
    // legend: {
    //   data: ['周一', '周二']
    // },
    radar: {
      // shape: 'circle',
      radius: '62%',
      indicator: [
        { name: '周一', max: 2 },
        { name: '周二', max: 2 },
        { name: '周三', max: 2 },
        { name: '周四', max: 2 },
        { name: '周五', max: 2 }
        // { name: '周六', max: 2 },
        // { name: '周日', max: 2 }
      ]
    },
    series: [
      {
        name: '使用时长',
        type: 'radar',
        data: [
          {
            value: [1.2, 1.7, 1.0, 1.5, 1.8],
            name: ''
          }
        ]
      }
    ]
  }
  chart.setOption(option)
}

// 地图
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
      show: false,
      left: 20,
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
    geo: [
      {
        map: 'china',
        scaleLimit: {
          min: 1,
          max: 2
        },
        zoom: 1, // 地图缩放比例
        top: '13%',
        z: 5,
        layoutSize: '100%', //保持地图宽高比
        roam: false, // 是否可以缩放、拖拽
        silent: false, // 禁用鼠标事件，hover，mouseenter
        regions: [
          {
            name: '南海诸岛',
            itemStyle: {
              normal: {
                opacity: 0 // 设置为0使其不可见
              }
            },
            label: {
              show: false // 隐藏文字标签
            }
          }
        ],
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
            borderColor: 'rgba(0, 0, 0, 0.3)',
            areaColor: 'rgb(48,83,160)'
          },
          emphasis: {
            areaColor: '#a6fdf3', // 鼠标hover颜色
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0
          }
        }
      },
      {
        map: 'china',
        scaleLimit: {
          min: 1,
          max: 2
        },
        zoom: 1, // 地图缩放比例
        top: '13.5%',
        z: 4,
        layoutSize: '100%', //保持地图宽高比
        roam: false, // 是否可以缩放、拖拽
        silent: true, // 禁用鼠标事件，hover，mouseenter
        regions: [
          {
            name: '南海诸岛',
            itemStyle: {
              normal: {
                opacity: 0 // 设置为0使其不可见
              }
            },
            label: {
              show: false // 隐藏文字标签
            }
          }
        ],
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
            // shadowBlur: 50,
            // borderColor: 'rgba(0, 0, 0, 0.5)',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            areaColor: 'rgb(7,34,119)'
          },
          emphasis: {
            areaColor: '#a6fdf3', // 鼠标hover颜色
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0
          }
        }
      },
      {
        map: 'china',
        scaleLimit: {
          min: 1,
          max: 2
        },
        zoom: 1, // 地图缩放比例
        top: '14%',
        z: 3,
        layoutSize: '100%', //保持地图宽高比
        roam: false, // 是否可以缩放、拖拽
        silent: true, // 禁用鼠标事件，hover，mouseenter
        regions: [
          {
            name: '南海诸岛',
            itemStyle: {
              normal: {
                opacity: 0 // 设置为0使其不可见
              }
            },
            label: {
              show: false // 隐藏文字标签
            }
          }
        ],
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
            // shadowBlur: 50,
            // borderColor: 'rgba(0, 0, 0, 0.2)',
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            areaColor: 'rgb(7,31,142)'
          },
          emphasis: {
            areaColor: '#a6fdf3', // 鼠标hover颜色
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0
          }
        }
      },
      {
        map: 'china',
        scaleLimit: {
          min: 1,
          max: 2
        },
        zoom: 1, // 地图缩放比例
        top: '14.5%',
        z: 2,
        layoutSize: '100%', //保持地图宽高比
        roam: false, // 是否可以缩放、拖拽
        silent: true, // 禁用鼠标事件，hover，mouseenter
        regions: [
          {
            name: '南海诸岛',
            itemStyle: {
              normal: {
                opacity: 0 // 设置为0使其不可见
              }
            },
            label: {
              show: false // 隐藏文字标签
            }
          }
        ],
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
            // shadowBlur: 50,
            // borderColor: 'rgba(0, 0, 0, 0.2)',
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            areaColor: 'rgb(6,30,162)'
          },
          emphasis: {
            areaColor: '#a6fdf3', // 鼠标hover颜色
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0
          }
        }
      },
      {
        map: 'china',
        scaleLimit: {
          min: 1,
          max: 2
        },
        zoom: 1, // 地图缩放比例
        top: '15%',
        z: 1,
        layoutSize: '100%', //保持地图宽高比
        roam: false, // 是否可以缩放、拖拽
        silent: true, // 禁用鼠标事件，hover，mouseenter
        regions: [
          {
            name: '南海诸岛',
            itemStyle: {
              normal: {
                opacity: 0 // 设置为0使其不可见
              }
            },
            label: {
              show: false // 隐藏文字标签
            }
          }
        ],
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
            // shadowBlur: 50,
            // borderColor: 'rgba(0, 0, 0, 0.2)',
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            areaColor: 'rgb(17,137,208)'
          },
          emphasis: {
            areaColor: '#a6fdf3', // 鼠标hover颜色
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0
          }
        }
      }
    ],
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
      text: '2023年3月-2024年2月',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: '#666',
        fontWeight: 400
      }
    },
    grid: {
      left: 0,
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        color: function (value, index) {
          if (index == 0) {
            return 'red'
          }
          if (index == 1) {
            return '#ff8447'
          }
          if (index == 2) {
            return '#ffcc00'
          }
          return 'rgb(18,205,12)'
        },
        fontSize: 8
      }
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: 'bar',
        stack: 'chart',
        barWidth: '24',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              {
                offset: 0,
                color: '#2A6BCD'
              },
              {
                offset: 1,
                color: '#34F6F8'
              }
            ])
          }
        },
        label: {
          normal: {
            // position: 'left',
            fontSize: 10,
            show: true,
            color: 'white',
            formatter: '{c}%'
          }
        },
        data: [60, 65, 70, 68, 72, 76, 80, 66, 60, 80, 68, 83]
      }
      // {
      //   type: 'bar',
      //   stack: 'chart',
      //   barWidth: '24',
      //   itemStyle: {
      //     normal: {
      //       color: '#0D2253'
      //     }
      //   },
      //   data: [40, 35, 30, 32, 28, 24, 20, 34, 40, 20, 32, 18]
      // }
    ]
  }
  chart.setOption(option)
}

function initRight3() {
  const chart = echarts.init(echartsRight3.value)
  const option = {
    title: {
      text: '2023年3月-2024年2月',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: '#666',
        fontWeight: 400
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        fontSize: 8
      }
    },
    yAxis: {
      type: 'value',
      name: '小时',
      nameTextStyle: {
        //  单位样式
        color: '#666', //  字体颜色
        fontSize: 12, //  字体大小
        padding: [0, 25, 0, 0] //  内填充
      }
    },
    series: [
      {
        type: 'bar',
        stack: 'chart',
        barWidth: '20',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              {
                offset: 0,
                color: '#2A6BCD'
              },
              {
                offset: 1,
                color: '#34F6F8'
              }
            ])
          }
        },
        label: {
          normal: {
            // position: 'left',
            fontSize: 10,
            show: true,
            color: 'white'
          }
        },
        data: [35, 37, 40, 42, 45, 41, 39, 38, 40, 37, 42, 44]
      }
    ]
  }
  chart.setOption(option)
}

onMounted(() => {
  echarts.registerMap('china', { geoJSON: chinaMap })
  initLeft1()
  // initLeft2()
  // initLeft3()
  initCenter()
  // initRight1()
  initRight2()
  // initRight3()
})
</script>

<style scope>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/bg.jpg) center center no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 130px;
  line-height: 80px;
  text-align: center;
  background: url(../../assets/images/header_bg.png) center top no-repeat;
  background-size: auto 90%;
}
.logo {
  width: 540px;
  height: 100%;
  color: #fff;
  font-size: 36px;
  text-align: left;
  padding: 0 20px;
}
h1 {
  display: inline-block;
  background: linear-gradient(180deg, #ffffff 0%, #8bceff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Chrome, Safari */
  color: transparent;
  font-weight: bold;
  font-size: 36px;
}
.date {
  width: 540px;
  height: 100%;
  padding: 46px 20px 0;
  p {
    height: 56px;
    line-height: 56px;
    padding-left: 20px;
    text-align: left;
    font-size: 28px;
    color: #b9f2ff;
    background: url(../../assets/images/date_bg.png) left center no-repeat;
    background-size: auto 100%;
  }
}

.main {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.left,
.right {
  width: 540px;
  padding: 0 20px 10px;
}

.left {
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
.center .center-data {
  width: 100%;
  height: 130px;
  background: url(../../assets/images/center_data_bg.png) center center no-repeat;
  background-size: 100% 100%;
}
.center .center-data ul {
  display: flex;
  padding: 20px;
}
.center .center-data ul li {
  flex: 1;
  text-align: center;
}
.center .center-data ul li .label {
  color: #00f7ff;
  font-weight: bold;
  font-size: 28px;
}
.center .center-data ul li .value {
  color: #fff;
  font-size: 16px;
}

.center-map {
  flex: 1;
}

.center-rank {
  height: 170px;
  padding-bottom: 20px;
}

.right {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.section {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0px 0px 19.27px 0px #0069ff66 inset;
}
h2 {
  height: 48px;
  line-height: 48px;
  padding: 0 20px;
  color: rgb(0, 244, 254);
  font-size: 18px;
  background: url(../../assets/images/h2_bg.png) left center no-repeat;
  background-size: 100% 100%;
  border-radius: 4px;
}
.echarts {
  flex: 1;
}

.ranking {
  height: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item {
  padding: 10px 0;
  color: #4f7bd8;
}
.item label {
  display: inline-block;
  margin-right: 20px;
  width: 160px;
}

.el-table {
  color: #fff;
}
.el-table thead {
  color: rgb(0, 244, 254);
  font-weight: bold;
}
.el-table,
.el-table tr,
.el-table th.el-table__cell {
  background: none !important;
}
.el-table .el-table__row:hover > td {
  background-color: #000; /* 自定义的 hover 背景颜色 */
}
</style>
