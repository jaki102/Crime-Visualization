<script>
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import json from '../../data/wages.json';

// Resolves charts dependancy
Charts(FusionCharts);

const dataSource = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"#f44336",
    "theme": "fusion"
  },
  "data": [
    {
      "label": "02",
      "value": json[0].Wynagrodzenie
    },
    {
      "label": "03",
      "value": json[1].Wynagrodzenie
    },
    {
      "label": "04",
      "value": json[2].Wynagrodzenie
    },
    {
      "label": "05",
      "value": json[3].Wynagrodzenie
    },
    {
      "label": "06",
      "value": json[4].Wynagrodzenie
    },
    {
      "label": "07",
      "value": json[5].Wynagrodzenie
    },
    {
      "label": "08",
      "value": json[6].Wynagrodzenie
    },
    {
      "label": "09",
      "value": json[7].Wynagrodzenie
    },
    {
      "label": "10",
      "value": json[8].Wynagrodzenie
    },
    {
      "label": "11",
      "value": json[9].Wynagrodzenie
    },
    {
      "label": "12",
      "value":json[10].Wynagrodzenie
    },
    {
      "label": "13",
      "value": json[11].Wynagrodzenie
    },
    {
      "label": "14",
      "value": json[12].Wynagrodzenie
    },
    {
      "label": "15",
      "value": json[13].Wynagrodzenie
    },
    {
      "label": "16",
      "value":json[14].Wynagrodzenie
    },
    {
      "label": "17",
      "value":json[15].Wynagrodzenie
    }
  ]
};

export default {
name:'WagesInPoland',
   data: () => ({
      type: "line",
      width: '100%',
      height: '300',
      dataFormat: 'json',
      dataSource,
   })
};
</script>
<template>
<fusioncharts :type="type"
   :width="width"
   :height="height"
   :dataFormat="dataFormat"
   :dataSource="dataSource"></fusioncharts>
    
</template>
