<script>
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import json from '../../data/unemployment.json';

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
      "label": "06",
      "value": json[3].Wartosc
    },
    {
      "label": "07",
      "value": json[4].Wartosc
    },
    {
      "label": "08",
      "value": json[5].Wartosc
    },
    {
      "label": "09",
      "value": json[6].Wartosc
    },
    {
      "label": "10",
      "value": json[7].Wartosc
    },
    {
      "label": "11",
      "value": json[8].Wartosc
    },
    {
      "label": "12",
      "value":json[9].Wartosc
    },
    {
      "label": "13",
      "value": json[10].Wartosc
    },
    {
      "label": "14",
      "value": json[11].Wartosc
    },
    {
      "label": "15",
      "value": json[12].Wartosc
    },
    {
      "label": "16",
      "value":json[13].Wartosc
    },
    {
      "label": "17",
      "value":json[14].Wartosc
    }
  ]
};

export default {
name:'UnemployInPoland',
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
