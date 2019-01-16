<script>
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import json from '../../data/crime_data.json';

// Resolves charts dependancy
Charts(FusionCharts);

const dataSource = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "theme": "fusion"
  },
    "categories": [
    {
      "category": [
        {
          "label": "99"
        },
        {
          "label": "00"
        },
        {
          "label": "01"
        },
        {
          "label": "02"
        },        
        {
          "label": "03"
        },
        {
          "label": "04"
        },
        {
          "label": "05"
        },
        {
          "label": "06"
        },        
        {
          "label": "07"
        },
        {
          "label": "08"
        },
        {
          "label": "09"
        },
        {
          "label": "11"
        },
        {
          "label": "12"
        },
        {
          "label": "13"
        },
        {
          "label": "14"
        },
        {
          "label": "15"
        },
        {
          "label": "16"
        },
        {
          "label": "17"
        }

      ]
    }
  ],
  "dataset": [
    {
      "seriesName": "Przestępstwa stwierdzone",
      "data": [
        {
        "value": json[18].Stwierdzone
        },
        {
        "value": json[17].Stwierdzone
        },
        {
        "value": json[16].Stwierdzone
        },
        {
        "value": json[15].Stwierdzone
        },
        {
        "value": json[14].Stwierdzone
        },
        {
        "value": json[13].Stwierdzone
        },
        {
        "value": json[12].Stwierdzone
        },
        {
        "value": json[11].Stwierdzone
        },
        {
        "value": json[10].Stwierdzone
        },
        {
        "value": json[9].Stwierdzone
        },
        {
        "value": json[8].Stwierdzone
        },
        {
        "value": json[7].Stwierdzone
        },
        {
        "value": json[6].Stwierdzone
        },
        {
        "value":json[5].Stwierdzone
        },
        {
        "value": json[4].Stwierdzone
        },
        {
        "value": json[3].Stwierdzone
        },
        {
        "value": json[2].Stwierdzone
        },
        {
        "value":json[1].Stwierdzone
        },
        {
        "value":json[0].Stwierdzone
        }
      ]
    },
    {
      "seriesName": "Przestępstwa wykryte",
      "renderAs": "line",
      "data": [
        {
        "value": json[18].Wykryte
        },
        {
        "value": json[17].Wykryte
        },
        {
        "value": json[16].Wykryte
        },
        {
        "value": json[15].Wykryte
        },
        {
        "value": json[14].Wykryte
        },
        {
        "value": json[13].Wykryte
        },
        {
        "value": json[12].Wykryte
        },
        {
        "value": json[11].Wykryte
        },
        {
        "value": json[10].Wykryte
        },
        {
        "value": json[9].Wykryte
        },
        {
        "value": json[8].Wykryte
        },
        {
        "value": json[7].Wykryte
        },
        {
        "value": json[6].Wykryte
        },
        {
        "value":json[5].Wykryte
        },
        {
        "value": json[4].Wykryte
        },
        {
        "value": json[3].Wykryte
        },
        {
        "value": json[2].Wykryte
        },
        {
        "value":json[1].Wykryte
        },
        {
        "value":json[0].Wykryte
        }
      ]
    }
  ]
};

export default {
name:'CrimeInPoland',
   data: () => ({
      type: "mscombi2d",
      width: '100%',
      height: '40%',
      dataFormat: 'json',
      dataSource,
   }),
};
</script>
<template>
<fusioncharts 
   :type="type"
   :width="width"
   :height="height"
   :dataFormat="dataFormat"
   :dataSource="dataSource">
</fusioncharts>  
</template>
