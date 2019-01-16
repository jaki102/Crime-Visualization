<script>
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import json from '../../data/education.json';

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
      "value": json[0].Liczba_absolwentow
    },
    {
      "label": "03",
      "value": json[1].Liczba_absolwentow
    },
    {
      "label": "04",
      "value": json[2].Liczba_absolwentow
    },
    {
      "label": "05",
      "value": json[3].Liczba_absolwentow
    },
    {
      "label": "06",
      "value": json[4].Liczba_absolwentow
    },
    {
      "label": "07",
      "value": json[5].Liczba_absolwentow
    },
    {
      "label": "08",
      "value": json[6].Liczba_absolwentow
    },
    {
      "label": "09",
      "value": json[7].Liczba_absolwentow
    },
    {
      "label": "10",
      "value": json[8].Liczba_absolwentow
    },
    {
      "label": "11",
      "value": json[9].Liczba_absolwentow
    },
    {
      "label": "12",
      "value":json[10].Liczba_absolwentow
    },
    {
      "label": "13",
      "value": json[11].Liczba_absolwentow
    },
    {
      "label": "14",
      "value": json[12].Liczba_absolwentow
    },
    {
      "label": "15",
      "value": json[13].Liczba_absolwentow
    },
    {
      "label": "16",
      "value":json[14].Liczba_absolwentow
    },
    {
      "label": "17",
      "value":json[15].Liczba_absolwentow
    },
    {
      "label": "15",
      "value": json[16].Liczba_absolwentow
    },
    {
      "label": "16",
      "value":json[17].Liczba_absolwentow
    },
    {
      "label": "17",
      "value":json[18].Liczba_absolwentow
    }
  ]
};

export default {
name:'EducationInPoland',
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
