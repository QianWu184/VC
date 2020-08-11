<template>
  <div id="chart-pane">
    <div id="work-skill-charts"></div>
    <div id="skill-charts"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "chart-pane",
  props: {
    workInfo: {
      type: Object
    }
  },
  data() {
    return {
      baseData: [
        {
          name: "前端开发",
          value: 8,
          children: [
            {
              name: "webgis",
              value: 7,
              children: [
                {
                  name: "geoserver",
                  value: 2
                },
                {
                  name: "arcgis\nserver",
                  value: 1
                },
                {
                  name: "arcgis\njs",
                  value: 1
                },
                {
                  name: "cesium",
                  value: 1,
                },
                {
                  name: "openlayer",
                  value: 2
                }
              ]
            },
            {
              name: "vue.js",
              value: 1
            }
          ]
        },
        {
          name: "java",
          value: 1,
          children: [
            {
              name: "spring\nboot",
              value: 1
            }
          ]
        },
        {
          name: "C#",
          value: 2,
          children: [
            {
              name: "mvc5",
              value: 1
            },
            {
              name: "net\ncore",
              value: 1
            }
          ]
        }
      ]
    };
  },
  methods: {
    init() {
      if (!this.workInfo) {
        return;
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("work-skill-charts"));
      let chartX = [];
      let chartValue = [];
      this.workInfo.skill.map(item => {
        if (chartX.indexOf(item.skillName) < 0) {
          chartX.push(item.skillName);
          chartValue.push(item.skillAge);
        }
      });
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "涉及技术年限"
        },
        tooltip: {},
        legend: {
          data: ["年限"],
          orient: "horizontal",
          x: "right",
          y: " center"
        },
        xAxis: {
          data: chartX,
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },
        yAxis: {},
        series: [
          {
            name: "年限",
            type: "bar",
            data: chartValue
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    let option = {
      title: {
          text: "技术图谱",
        },
      legend: {
        show: false
      },
      visualMap: {
        type: "continuous",
        show: false,
        min: 0,
        max: 10,
        inRange: {
          color: ["#2D5F73", "#538EA6", "#F2D1B3", "#F2B8A2", "#F28C8C"]
        }
      },
      series: {
        type: "sunburst",
        data: this.baseData,
        radius: [0, "100%"],
        label: {
          rotate: "0"
        }
      }
    };
    let myChart = echarts.init(document.getElementById("skill-charts"));
    myChart.setOption(option);
    this.init();
  },
  watch: {
    workInfo: function(newVal, olVal) {
      if (!olVal || newVal.name !== olVal.name) {
        this.workInfo = newVal;
        this.init();
      }
    }
  }
};
</script>
<style scoped>
#chart-pane {
  position: absolute;
  top: 50px;
  right: 20px;
  height: 800px;
  width: 300px;
  z-index: 1000;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0 10px;
}
#work-skill-charts {
  height: 350px;
  width: 280px;
  margin: 10px 0px;
}
#skill-charts {
  height: 350px;
  width: 280px;
  margin: 10px 0px;
}
</style>
