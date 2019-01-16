<script>
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import json from '../../data/theft_auto_data.json';

// Resolves charts dependancy
Charts(FusionCharts);

const dataSource = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "theme": "fusion"
  },
  "data": [
     {
      "label": "99",
      "value": json[18].Stwierdzone
    },
    {
      "label": "00",
      "value": json[17].Stwierdzone
    },
    {
      "label": "01",
      "value": json[16].Stwierdzone
    },
    {
      "label": "02",
      "value": json[15].Stwierdzone
    },
    {
      "label": "03",
      "value": json[14].Stwierdzone
    },
    {
      "label": "04",
      "value": json[13].Stwierdzone
    },
    {
      "label": "05",
      "value": json[12].Stwierdzone
    },
    {
      "label": "06",
      "value": json[11].Stwierdzone
    },
    {
      "label": "07",
      "value": json[10].Stwierdzone
    },
    {
      "label": "08",
      "value": json[9].Stwierdzone
    },
    {
      "label": "09",
      "value": json[8].Stwierdzone
    },
    {
      "label": "10",
      "value": json[7].Stwierdzone
    },
    {
      "label": "11",
      "value": json[6].Stwierdzone
    },
    {
      "label": "12",
      "value":json[5].Stwierdzone
    },
    {
      "label": "13",
      "value": json[4].Stwierdzone
    },
    {
      "label": "14",
      "value": json[3].Stwierdzone
    },
    {
      "label": "15",
      "value": json[2].Stwierdzone
    },
    {
      "label": "16",
      "value":json[1].Stwierdzone
    },
    {
      "label": "17",
      "value":json[0].Stwierdzone
    }
  ]
};

export default {
name:'TheftAutoInPoland',
   data: () => ({
      type: "line",
      width: '100%',
      height: '300',
      dataFormat: 'json',
      dataSource,
   }),
};
</script>
<template>
<fusioncharts :type="type"
   :width="width"
   :height="height"
   :dataFormat="dataFormat"
   :dataSource="dataSource"></fusioncharts>
    
</template>