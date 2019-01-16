<template>
  <div class="wrapper">
    <h1>Zachodniopomorskie</h1>
    <div class="comparisonSection">
      <h2>Porównaj z:</h2>
      <select name="Regions" @change="selectRegion()" v-model="key">
        <option value="" disabled selected>Wybierz region</option>
        <option value="1">Pomorskie</option>
        <option value="2">Warmińsko-mazurskie</option>
        <option value="3">Podlaskie</option>
        <option value="4">Lubuskie</option>
        <option value="5">Wielkopolskie</option>
        <option value="6">Kujawsko-pomorskie</option>
        <option value="7">Mazowieckie</option>
        <option value="8">Dolnośląskie</option>
        <option value="9">Opolskie</option>
        <option value="10">Łódzkie</option>
        <option value="11">Świętokrzyskie</option>
        <option value="12">Lubelskie</option>
        <option value="13">Śląskie</option>
        <option value="14">Małopolskie</option>
        <option value="15">Podkarpackie</option>
        <option value="16">Polska (średnia)</option>
      </select>
    </div>
    <div class="crimeInRegion">
      <h2>Liczba przestępstw w skali regionu w latach 1999 - 2017</h2>
      <fusioncharts 
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="crimeData">
      </fusioncharts> 
    </div>
    <div id="crimeCategory">
        <h2>Zestawienie skategoryzowany rodzajów przestępstw z czynnikami ekonomicznymi i społecznymi</h2>
        <table>
            <thead>
            <tr>
                <th>Bójka i pobicie</th>
                <th>Kradzież cudzej rzeczy</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                  <fusioncharts 
                    :type="type"
                    :width="width"
                    :height="height"
                    :dataFormat="dataFormat"
                    :dataSource="fightData">
                  </fusioncharts>
                </td>
                <td>
                  <fusioncharts 
                    :type="type"
                    :width="width"
                    :height="height"
                    :dataFormat="dataFormat"
                    :dataSource="theftData">
                  </fusioncharts>
                </td>
            </tr>
            </tbody>
        </table>
         <table>
            <thead>
            <tr>
                <th>Kradzieże samochodów</th>
                <th>Kradzieże z włamaniami </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                  <fusioncharts 
                    :type="type"
                    :width="width"
                    :height="height"
                    :dataFormat="dataFormat"
                    :dataSource="theftAutoData">
                  </fusioncharts>
                </td>
                <td>
                  <fusioncharts 
                    :type="type"
                    :width="width"
                    :height="height"
                    :dataFormat="dataFormat"
                    :dataSource="burglaryData">
                  </fusioncharts>
                </td>
            </tr>
            </tbody>
        </table>
        <table>
            <thead>
              <tr>
                <th>Rozboje, wymuszenia i kradzieże rozbójnicze</th>
                <th>Uszkodzenie mienia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <fusioncharts 
                    :type="type"
                    :width="width"
                    :height="height"
                    :dataFormat="dataFormat"
                    :dataSource="robberyData">
                  </fusioncharts>
                </td>
                <td>
                  <fusioncharts 
                    :type="type"
                    :width="width"
                    :height="height"
                    :dataFormat="dataFormat"
                    :dataSource="damageData">
                  </fusioncharts>
                </td>
              </tr>
            </tbody>
        </table>
    </div>
    <div id="socialHelps">
        <table>
            <thead>
                <tr>
                    <th>Liczba osób bezrobotnych</th>
                    <th>Liczba osób z wyższym wykształceniem</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>
                    <fusioncharts 
                      :type="type"
                      :width="width"
                      :height="height"
                      :dataFormat="dataFormat"
                      :dataSource="unemploymentData">
                    </fusioncharts>
                  </td>
                  <td>
                    <fusioncharts
                      :type="type"
                      :width="width"
                      :height="height"
                      :dataFormat="dataFormat"
                      :dataSource="educationData">
                    </fusioncharts>
                  </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>Wielkość świadczeń socjalnych [zł]</th>
                    <th>Wielkość średniego wynagrodzenia brutto [zł]</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <fusioncharts
                      :type="type"
                      :width="width"
                      :height="height"
                      :dataFormat="dataFormat"
                      :dataSource="socialData">
                    </fusioncharts>
                    </td>
                    <td>
                    <fusioncharts
                      :type="type"
                      :width="width"
                      :height="height"
                      :dataFormat="dataFormat"
                      :dataSource="wagesData">
                    </fusioncharts>
                    </td>
                </tr>
            </tbody>
        </table>
    </div> 
  </div>
</template>

<script>
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import burglary from '../data/burglary.json';
import damage from '../data/crime_damage.json';
import crime from '../data/crime_data.json';
import education from '../data/education.json';
import fight from '../data/fight_data.json';
import robbery from '../data/robbery_data.json';
import social from '../data/social.json';
import theft_auto from '../data/theft_auto_data.json';
import theft from '../data/theft_data.json';
import unemployment from '../data/unemployment.json';
import wages from '../data/wages.json';
import CrimeInPoland from '@/components/Poland/CrimeInPoland.vue';

Vue.use(VueFusionCharts, FusionCharts,FusionTheme);


var i = 304
var w = 256
var u = 243
var s = 144
var e = 304

const crimeData = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": crime[i+18].Wykryte
        },
        {
        "value": crime[i+17].Wykryte
        },
        {
        "value": crime[i+16].Wykryte
        },
        {
        "value": crime[i+15].Wykryte
        },
        {
        "value": crime[i+14].Wykryte
        },
        {
        "value": crime[i+13].Wykryte
        },
        {
        "value": crime[i+12].Wykryte
        },
        {
        "value": crime[i+11].Wykryte
        },
        {
        "value": crime[i+10].Wykryte
        },
        {
        "value": crime[i+9].Wykryte
        },
        {
        "value": crime[i+8].Wykryte
        },
        {
        "value": crime[i+7].Wykryte
        },
        {
        "value": crime[i+6].Wykryte
        },
        {
        "value": crime[i+5].Wykryte
        },
        {
        "value": crime[i+4].Wykryte
        },
        {
        "value": crime[i+3].Wykryte
        },
        {
        "value": crime[i+2].Wykryte
        },
        {
        "value": crime[i+1].Wykryte
        },
        {
        "value": crime[i].Wykryte
        }
      ]
    }
  ]
};
const fightData = {
  "chart": {
    "rotatelabels": "0",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": fight[i+18].Wykryte
        },
        {
        "value": fight[i+17].Wykryte
        },
        {
        "value": fight[i+16].Wykryte
        },
        {
        "value": fight[i+15].Wykryte
        },
        {
        "value": fight[i+14].Wykryte
        },
        {
        "value": fight[i+13].Wykryte
        },
        {
        "value": fight[i+12].Wykryte
        },
        {
        "value": fight[i+11].Wykryte
        },
        {
        "value": fight[i+10].Wykryte
        },
        {
        "value": fight[i+9].Wykryte
        },
        {
        "value": fight[i+8].Wykryte
        },
        {
        "value": fight[i+7].Wykryte
        },
        {
        "value": fight[i+6].Wykryte
        },
        {
        "value": fight[i+5].Wykryte
        },
        {
        "value": fight[i+4].Wykryte
        },
        {
        "value": fight[i+3].Wykryte
        },
        {
        "value": fight[i+2].Wykryte
        },
        {
        "value": fight[i+1].Wykryte
        },
        {
        "value": fight[i].Wykryte
        }
      ]
    }
  ]
};
const theftData = {
  "chart": {
    "rotatelabels": "0",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": theft[i+18].Wykryte
        },
        {
        "value": theft[i+17].Wykryte
        },
        {
        "value": theft[i+16].Wykryte
        },
        {
        "value": theft[i+15].Wykryte
        },
        {
        "value": theft[i+14].Wykryte
        },
        {
        "value": theft[i+13].Wykryte
        },
        {
        "value": theft[i+12].Wykryte
        },
        {
        "value": theft[i+11].Wykryte
        },
        {
        "value": theft[i+10].Wykryte
        },
        {
        "value": theft[i+9].Wykryte
        },
        {
        "value": theft[i+8].Wykryte
        },
        {
        "value": theft[i+7].Wykryte
        },
        {
        "value": theft[i+6].Wykryte
        },
        {
        "value": theft[i+5].Wykryte
        },
        {
        "value": theft[i+4].Wykryte
        },
        {
        "value": theft[i+3].Wykryte
        },
        {
        "value": theft[i+2].Wykryte
        },
        {
        "value": theft[i+1].Wykryte
        },
        {
        "value": theft[i].Wykryte
        }
      ]
    }
  ]
};
const theftAutoData = {
  "chart": {
    "rotatelabels": "0",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": theft_auto[i+18].Wykryte
        },
        {
        "value": theft_auto[i+17].Wykryte
        },
        {
        "value": theft_auto[i+16].Wykryte
        },
        {
        "value": theft_auto[i+15].Wykryte
        },
        {
        "value": theft_auto[i+14].Wykryte
        },
        {
        "value": theft_auto[i+13].Wykryte
        },
        {
        "value": theft_auto[i+12].Wykryte
        },
        {
        "value": theft_auto[i+11].Wykryte
        },
        {
        "value": theft_auto[i+10].Wykryte
        },
        {
        "value": theft_auto[i+9].Wykryte
        },
        {
        "value": theft_auto[i+8].Wykryte
        },
        {
        "value": theft_auto[i+7].Wykryte
        },
        {
        "value": theft_auto[i+6].Wykryte
        },
        {
        "value": theft_auto[i+5].Wykryte
        },
        {
        "value": theft_auto[i+4].Wykryte
        },
        {
        "value": theft_auto[i+3].Wykryte
        },
        {
        "value": theft_auto[i+2].Wykryte
        },
        {
        "value": theft_auto[i+1].Wykryte
        },
        {
        "value": theft_auto[i].Wykryte
        }
      ]
    }
  ]
};
const burglaryData = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": burglary[i+18].Wykryte
        },
        {
        "value": burglary[i+17].Wykryte
        },
        {
        "value": burglary[i+16].Wykryte
        },
        {
        "value": burglary[i+15].Wykryte
        },
        {
        "value": burglary[i+14].Wykryte
        },
        {
        "value": burglary[i+13].Wykryte
        },
        {
        "value": burglary[i+12].Wykryte
        },
        {
        "value": burglary[i+11].Wykryte
        },
        {
        "value": burglary[i+10].Wykryte
        },
        {
        "value": burglary[i+9].Wykryte
        },
        {
        "value": burglary[i+8].Wykryte
        },
        {
        "value": burglary[i+7].Wykryte
        },
        {
        "value": burglary[i+6].Wykryte
        },
        {
        "value": burglary[i+5].Wykryte
        },
        {
        "value": burglary[i+4].Wykryte
        },
        {
        "value": burglary[i+3].Wykryte
        },
        {
        "value": burglary[i+2].Wykryte
        },
        {
        "value": burglary[i+1].Wykryte
        },
        {
        "value": burglary[i].Wykryte
        }
      ]
    }
  ]
};
const robberyData = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": robbery[i+18].Wykryte
        },
        {
        "value": robbery[i+17].Wykryte
        },
        {
        "value": robbery[i+16].Wykryte
        },
        {
        "value": robbery[i+15].Wykryte
        },
        {
        "value": robbery[i+14].Wykryte
        },
        {
        "value": robbery[i+13].Wykryte
        },
        {
        "value": robbery[i+12].Wykryte
        },
        {
        "value": robbery[i+11].Wykryte
        },
        {
        "value": robbery[i+10].Wykryte
        },
        {
        "value": robbery[i+9].Wykryte
        },
        {
        "value": robbery[i+8].Wykryte
        },
        {
        "value": robbery[i+7].Wykryte
        },
        {
        "value": robbery[i+6].Wykryte
        },
        {
        "value": robbery[i+5].Wykryte
        },
        {
        "value": robbery[i+4].Wykryte
        },
        {
        "value": robbery[i+3].Wykryte
        },
        {
        "value": robbery[i+2].Wykryte
        },
        {
        "value": robbery[i+1].Wykryte
        },
        {
        "value": robbery[i].Wykryte
        }
      ]
    }
  ]
};
const damageData = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": damage[i+18].Wykryte
        },
        {
        "value": damage[i+17].Wykryte
        },
        {
        "value": damage[i+16].Wykryte
        },
        {
        "value": damage[i+15].Wykryte
        },
        {
        "value": damage[i+14].Wykryte
        },
        {
        "value": damage[i+13].Wykryte
        },
        {
        "value": damage[i+12].Wykryte
        },
        {
        "value": damage[i+11].Wykryte
        },
        {
        "value": damage[i+10].Wykryte
        },
        {
        "value": damage[i+9].Wykryte
        },
        {
        "value": damage[i+8].Wykryte
        },
        {
        "value": damage[i+7].Wykryte
        },
        {
        "value": damage[i+6].Wykryte
        },
        {
        "value": damage[i+5].Wykryte
        },
        {
        "value": damage[i+4].Wykryte
        },
        {
        "value": damage[i+3].Wykryte
        },
        {
        "value": damage[i+2].Wykryte
        },
        {
        "value": damage[i+1].Wykryte
        },
        {
        "value":damage[i].Wykryte
        }
      ]
    }
  ]
};
const unemploymentData = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
    "theme": "fusion"
  },
    "categories": [
    {
      "category": [
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": unemployment[u].Wartosc
        },
        {
        "value": unemployment[u+1].Wartosc
        },
        {
        "value": unemployment[u+2].Wartosc
        },
        {
        "value": unemployment[u+3].Wartosc
        },
        {
        "value": unemployment[u+4].Wartosc
        },
        {
        "value": unemployment[u+5].Wartosc
        },
        {
        "value": unemployment[u+6].Wartosc
        },
        {
        "value": unemployment[u+7].Wartosc
        },
        {
        "value": unemployment[u+8].Wartosc
        },
        {
        "value": unemployment[u+9].Wartosc
        },
        {
        "value": unemployment[u+10].Wartosc
        },
        {
        "value": unemployment[u+11].Wartosc
        }
      ]
    }
  ]
};
const educationData = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
    "theme": "fusion"
  },
    "categories": [
    {
      "category": [
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": education[e].Liczba_absolwentow
        },
        {
        "value": education[e+1].Liczba_absolwentow
        },
        {
        "value": education[e+2].Liczba_absolwentow
        },
        {
        "value": education[e+3].Liczba_absolwentow
        },
        {
        "value": education[e+4].Liczba_absolwentow
        },
        {
        "value": education[e+5].Liczba_absolwentow
        },
        {
        "value": education[e+6].Liczba_absolwentow
        },
        {
        "value": education[e+7].Liczba_absolwentow
        },
        {
        "value": education[e+8].Liczba_absolwentow
        },
        {
        "value": education[e+9].Liczba_absolwentow
        },
        {
        "value": education[e+10].Liczba_absolwentow
        },
        {
        "value": education[e+11].Liczba_absolwentow
        },
        {
        "value": education[e+12].Liczba_absolwentow
        },
        {
        "value": education[e+13].Liczba_absolwentow
        },
        {
        "value": education[e+14].Liczba_absolwentow
        },
        {
        "value": education[e+15].Liczba_absolwentow
        },
                {
        "value": education[e+16].Liczba_absolwentow
        },
        {
        "value": education[e+17].Liczba_absolwentow
        },
        {
        "value": education[e+18].Liczba_absolwentow
        }
      ]
    }
  ]
};
const socialData = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
    "theme": "fusion"
  },
    "categories": [
    {
      "category": [
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": social[s].Wartosc
        },
        {
        "value": social[s+1].Wartosc
        },
        {
        "value": social[s+2].Wartosc
        },
        {
        "value": social[s+3].Wartosc
        },
        {
        "value": social[s+4].Wartosc
        },
        {
        "value": social[s+5].Wartosc
        },
        {
        "value": social[s+6].Wartosc
        },
        {
        "value": social[s+7].Wartosc
        },
        {
        "value": social[s+8].Wartosc
        }
      ]
    }
  ]
};
const wagesData = {
  "chart": {
    "rotatelabels": "0",
    "setadaptiveymin": "1",
    "palettecolors":"5d62b5,#f44336,#ff9800,#8bc34a,#9c27b0,#00bcd4,#795548",
    "theme": "fusion"
  },
    "categories": [
    {
      "category": [
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
      "seriesName": "Zachodniopomorskie",
      "data": [
        {
        "value": wages[w].Wynagrodzenie
        },
        {
        "value": wages[w+1].Wynagrodzenie
        },
        {
        "value": wages[w+2].Wynagrodzenie
        },
        {
        "value": wages[w+3].Wynagrodzenie
        },
        {
        "value": wages[w+4].Wynagrodzenie
        },
        {
        "value": wages[w+5].Wynagrodzenie
        },
        {
        "value": wages[w+6].Wynagrodzenie
        },
        {
        "value": wages[w+7].Wynagrodzenie
        },
        {
        "value": wages[w+8].Wynagrodzenie
        },
        {
        "value": wages[w+9].Wynagrodzenie
        },
        {
        "value":wages[w+10].Wynagrodzenie
        },
        {
        "value": wages[w+11].Wynagrodzenie
        },
        {
        "value": wages[w+12].Wynagrodzenie
        },
        {
        "value": wages[w+13].Wynagrodzenie
        },
        {
        "value":wages[w+14].Wynagrodzenie
        },
        {
        "value":wages[w+15].Wynagrodzenie
        }
      ]
    }
  ]
};
export default {
  name:'zp',
   data() {
       return {
        type: "msline",
        width: '100%',
        height: '500',
        dataFormat: 'json',
        crimeData,
        fightData,
        theftData,
        theftAutoData,
        burglaryData,
        robberyData,
        damageData,
        unemploymentData,
        wagesData,
        socialData,
        educationData
       }
   },
  methods:{
    selectRegion(){

      var i;
      var w;
      var u;
      var e;
      var s;
      var m = 1

      if(this.key==1){
        i = 209
        w = 176
        u = 168
        s = 99
        e = 209
      }else if(this.key==2){
        i = 266
        w = 224
        u = 213
        s = 126
        e = 266
      }else if(this.key==3){
        i = 190
        w = 160
        u = 153
        s = 90
        e = 190
      }else if(this.key==4){
        i = 76
        w = 64
        u = 63
        s = 36
        e = 76
      }else if(this.key==5){
        i = 285
        w = 240
        u = 228
        s = 135
        e = 285
      }else if(this.key==6){
        i = 38
        w = 32
        u = 33
        s = 18
        e = 38
      }else if(this.key==7){
        i = 133
        w = 112
        u = 108
        s = 63
        e = 133
      }else if(this.key==8){
        i = 19
        w = 16
        u = 18
        s = 9
        e = 19
      }else if(this.key==9){
        i = 152
        w = 128
        u = 123
        s = 72
        e = 152
      }else if(this.key==10){
        i = 95
        w = 80
        u = 78
        s = 45
        e = 95
      }else if(this.key==11){
        i = 247
        w = 208
        u = 198
        s = 117
        e = 247
      }else if(this.key==12){
        i = 57
        w = 48
        u = 48
        s = 27
        e = 57
      }else if(this.key==13){
        i = 228
        w = 192
        u = 183
        s = 108
        e = 228
      }else if(this.key==14){
        i = 114
        w = 96
        u = 93
        s = 54
        e = 114
      }else if(this.key==15){
        i = 171
        w = 144
        u = 138
        s = 81
        e = 171
      }else if (this.key==16){
        i = 0
        w = 0
        u = 3
        s = 0
        e = 0
        m = 16
      }else{
        console.log("upsss")
      }
      
      const crimeComparison = {
        "seriesName": crime[i].Region,
        "data": [
          {
          "value": crime[i+18].Wykryte/m
          },
          {
          "value": crime[i+17].Wykryte/m
          },
          {
          "value": crime[i+16].Wykryte/m
          },
          {
          "value": crime[i+15].Wykryte/m
          },
          {
          "value": crime[i+14].Wykryte/m
          },
          {
          "value": crime[i+13].Wykryte/m
          },
          {
          "value": crime[i+12].Wykryte/m
          },
          {
          "value": crime[i+11].Wykryte/m
          },
          {
          "value": crime[i+10].Wykryte/m
          },
          {
          "value": crime[i+9].Wykryte/m
          },
          {
          "value": crime[i+8].Wykryte/m
          },
          {
          "value": crime[i+7].Wykryte/m
          },
          {
          "value": crime[i+6].Wykryte/m
          },
          {
          "value":crime[i+5].Wykryte/m
          },
          {
          "value": crime[i+4].Wykryte/m
          },
          {
          "value": crime[i+3].Wykryte/m
          },
          {
          "value": crime[i+2].Wykryte/m
          },
          {
          "value":crime[i+1].Wykryte/m
          },
          {
          "value":crime[i].Wykryte/m
          }
        ]
      }
      const fightComparison = {
        "seriesName": fight[i].Region,
        "data": [
          {
          "value": fight[i+18].Wykryte/m
          },
          {
          "value": fight[i+17].Wykryte/m
          },
          {
          "value": fight[i+16].Wykryte/m
          },
          {
          "value": fight[i+15].Wykryte/m
          },
          {
          "value": fight[i+14].Wykryte/m
          },
          {
          "value": fight[i+13].Wykryte/m
          },
          {
          "value": fight[i+12].Wykryte/m
          },
          {
          "value": fight[i+11].Wykryte/m
          },
          {
          "value": fight[i+10].Wykryte/m
          },
          {
          "value": fight[i+9].Wykryte/m
          },
          {
          "value": fight[i+8].Wykryte/m
          },
          {
          "value": fight[i+7].Wykryte/m
          },
          {
          "value": fight[i+6].Wykryte/m
          },
          {
          "value":fight[i+5].Wykryte/m
          },
          {
          "value": fight[i+4].Wykryte/m
          },
          {
          "value": fight[i+3].Wykryte/m
          },
          {
          "value": fight[i+2].Wykryte/m
          },
          {
          "value":fight[i+1].Wykryte/m
          },
          {
          "value":fight[i].Wykryte/m
          }
        ]
      }
      const theftComparison = {
        "seriesName": theft[i].Region,
        "data": [
          {
          "value": theft[i+18].Wykryte/m
          },
          {
          "value": theft[i+17].Wykryte/m
          },
          {
          "value": theft[i+16].Wykryte/m
          },
          {
          "value": theft[i+15].Wykryte/m
          },
          {
          "value": theft[i+14].Wykryte/m
          },
          {
          "value": theft[i+13].Wykryte/m
          },
          {
          "value": theft[i+12].Wykryte/m
          },
          {
          "value": theft[i+11].Wykryte/m
          },
          {
          "value": theft[i+10].Wykryte/m
          },
          {
          "value": theft[i+9].Wykryte/m
          },
          {
          "value": theft[i+8].Wykryte/m
          },
          {
          "value": theft[i+7].Wykryte/m
          },
          {
          "value": theft[i+6].Wykryte/m
          },
          {
          "value":theft[i+5].Wykryte/m
          },
          {
          "value": theft[i+4].Wykryte/m
          },
          {
          "value": theft[i+3].Wykryte/m
          },
          {
          "value": theft[i+2].Wykryte/m
          },
          {
          "value":theft[i+1].Wykryte/m
          },
          {
          "value":theft[i].Wykryte/m
          }
        ]
      }
      const theftAutoComparison = {
        "seriesName": theft_auto[i].Region,
        "data": [
          {
          "value": theft_auto[i+18].Wykryte/m
          },
          {
          "value": theft_auto[i+17].Wykryte/m
          },
          {
          "value": theft_auto[i+16].Wykryte/m
          },
          {
          "value":theft_auto[i+15].Wykryte/m
          },
          {
          "value": theft_auto[i+14].Wykryte/m
          },
          {
          "value": theft_auto[i+13].Wykryte/m
          },
          {
          "value": theft_auto[i+12].Wykryte/m
          },
          {
          "value": theft_auto[i+11].Wykryte/m
          },
          {
          "value": theft_auto[i+10].Wykryte/m
          },
          {
          "value": theft_auto[i+9].Wykryte/m
          },
          {
          "value": theft_auto[i+8].Wykryte/m
          },
          {
          "value": theft_auto[i+7].Wykryte/m
          },
          {
          "value": theft_auto[i+6].Wykryte/m
          },
          {
          "value":theft_auto[i+5].Wykryte/m
          },
          {
          "value": theft_auto[i+4].Wykryte/m
          },
          {
          "value": theft_auto[i+3].Wykryte/m
          },
          {
          "value": theft_auto[i+2].Wykryte/m
          },
          {
          "value":theft_auto[i+1].Wykryte/m
          },
          {
          "value":theft_auto[i].Wykryte/m
          }
        ]
      }
      const burglaryComparison = {
        "seriesName": burglary[i].Region,
        "data": [
          {
          "value": burglary[i+18].Wykryte/m
          },
          {
          "value": burglary[i+17].Wykryte/m
          },
          {
          "value": burglary[i+16].Wykryte/m
          },
          {
          "value": burglary[i+15].Wykryte/m
          },
          {
          "value": burglary[i+14].Wykryte/m
          },
          {
          "value": burglary[i+13].Wykryte/m
          },
          {
          "value": burglary[i+12].Wykryte/m
          },
          {
          "value": burglary[i+11].Wykryte/m
          },
          {
          "value": burglary[i+10].Wykryte/m
          },
          {
          "value": burglary[i+9].Wykryte/m
          },
          {
          "value": burglary[i+8].Wykryte/m
          },
          {
          "value": burglary[i+7].Wykryte/m
          },
          {
          "value": burglary[i+6].Wykryte/m
          },
          {
          "value":burglary[i+5].Wykryte/m
          },
          {
          "value": burglary[i+4].Wykryte/m
          },
          {
          "value": burglary[i+3].Wykryte/m
          },
          {
          "value": burglary[i+2].Wykryte/m
          },
          {
          "value":burglary[i+1].Wykryte/m
          },
          {
          "value":burglary[i].Wykryte/m
          }
        ]
      }
      const robberyComparison = {
        "seriesName": robbery[i].Region,
        "data": [
          {
          "value": robbery[i+18].Wykryte/m
          },
          {
          "value": robbery[i+17].Wykryte/m
          },
          {
          "value": robbery[i+16].Wykryte/m
          },
          {
          "value": robbery[i+15].Wykryte/m
          },
          {
          "value": robbery[i+14].Wykryte/m
          },
          {
          "value": robbery[i+13].Wykryte/m
          },
          {
          "value": robbery[i+12].Wykryte/m
          },
          {
          "value": robbery[i+11].Wykryte/m
          },
          {
          "value": robbery[i+10].Wykryte/m
          },
          {
          "value": robbery[i+9].Wykryte/m
          },
          {
          "value": robbery[i+8].Wykryte/m
          },
          {
          "value": robbery[i+7].Wykryte/m
          },
          {
          "value": robbery[i+6].Wykryte/m
          },
          {
          "value":robbery[i+5].Wykryte/m
          },
          {
          "value": robbery[i+4].Wykryte/m
          },
          {
          "value": robbery[i+3].Wykryte/m
          },
          {
          "value": robbery[i+2].Wykryte/m
          },
          {
          "value":robbery[i+1].Wykryte/m
          },
          {
          "value":robbery[i].Wykryte/m
          }
        ]
      }
      const damageComparison = {
        "seriesName": damage[i].Region,
        "data": [
          {
          "value": damage[i+18].Wykryte/m
          },
          {
          "value": damage[i+17].Wykryte/m
          },
          {
          "value": damage[i+16].Wykryte/m
          },
          {
          "value": damage[i+15].Wykryte/m
          },
          {
          "value": damage[i+14].Wykryte/m
          },
          {
          "value": damage[i+13].Wykryte/m
          },
          {
          "value": damage[i+12].Wykryte/m
          },
          {
          "value": damage[i+11].Wykryte/m
          },
          {
          "value": damage[i+10].Wykryte/m
          },
          {
          "value": damage[i+9].Wykryte/m
          },
          {
          "value": damage[i+8].Wykryte/m
          },
          {
          "value": damage[i+7].Wykryte/m
          },
          {
          "value": damage[i+6].Wykryte/m
          },
          {
          "value":damage[i+5].Wykryte/m
          },
          {
          "value": damage[i+4].Wykryte/m
          },
          {
          "value": damage[i+3].Wykryte/m
          },
          {
          "value": damage[i+2].Wykryte/m
          },
          {
          "value":damage[i+1].Wykryte/m
          },
          {
          "value":damage[i].Wykryte/m
          }
        ]
      }
      const unemploymentComparison = {
        "seriesName": unemployment[u].Nazwa,
        "data": [
          {
          "value": unemployment[u].Wartosc/m
          },
          {
          "value": unemployment[u+1].Wartosc/m
          },
          {
          "value": unemployment[u+2].Wartosc/m
          },
          {
          "value": unemployment[u+3].Wartosc/m
          },
          {
          "value": unemployment[u+4].Wartosc/m
          },
          {
          "value": unemployment[u+5].Wartosc/m
          },
          {
          "value": unemployment[u+6].Wartosc/m
          },
          {
          "value": unemployment[u+7].Wartosc/m
          },
          {
          "value": unemployment[u+8].Wartosc/m
          },
          {
          "value": unemployment[u+9].Wartosc/m
          },
          {
          "value": unemployment[u+10].Wartosc/m
          },
          {
          "value": unemployment[u+11].Wartosc/m
          }
        ]
      }
      const wagesComparison = {
        "seriesName": wages[w].Region,
        "data": [
          {
          "value": wages[w].Wynagrodzenie
          },
          {
          "value": wages[w+1].Wynagrodzenie
          },
          {
          "value": wages[w+2].Wynagrodzenie
          },
          {
          "value": wages[w+3].Wynagrodzenie
          },
          {
          "value": wages[w+4].Wynagrodzenie
          },
          {
          "value": wages[w+5].Wynagrodzenie
          },
          {
          "value": wages[w+6].Wynagrodzenie
          },
          {
          "value": wages[w+7].Wynagrodzenie
          },
          {
          "value": wages[w+8].Wynagrodzenie
          },
          {
          "value": wages[w+9].Wynagrodzenie
          },
          {
          "value": wages[w+10].Wynagrodzenie
          },
          {
          "value": wages[w+11].Wynagrodzenie
          },
          {
          "value": wages[w+12].Wynagrodzenie
          },
          {
          "value": wages[w+13].Wynagrodzenie
          },
          {
          "value": wages[w+14].Wynagrodzenie
          },
          {
          "value": wages[w+15].Wynagrodzenie
          }
        ]
      }
      const socialComparison = {
        "seriesName": social[s].Nazwa,
        "data": [
          {
          "value": social[s].Wartosc/m
          },
          {
          "value": social[s+1].Wartosc/m
          },
          {
          "value": social[s+2].Wartosc/m
          },
          {
          "value": social[s+3].Wartosc/m
          },
          {
          "value": social[s+4].Wartosc/m
          },
          {
          "value": social[s+5].Wartosc/m
          },
          {
          "value": social[s+6].Wartosc/m
          },
          {
          "value": social[s+7].Wartosc/m
          },
          {
          "value": social[s+8].Wartosc/m
          }
        ]
      }
      const educationComparison = {
        "seriesName": education[e].Region,
        "data": [
          {
          "value": education[e].Liczba_absolwentow/m
          },
          {
          "value": education[e+1].Liczba_absolwentow/m
          },
          {
          "value": education[e+2].Liczba_absolwentow/m
          },
          {
          "value": education[e+3].Liczba_absolwentow/m
          },
          {
          "value": education[e+4].Liczba_absolwentow/m
          },
          {
          "value": education[e+5].Liczba_absolwentow/m
          },
          {
          "value": education[e+6].Liczba_absolwentow/m
          },
          {
          "value": education[e+7].Liczba_absolwentow/m
          },
          {
          "value": education[e+8].Liczba_absolwentow/m
          },
          {
          "value": education[e+9].Liczba_absolwentow/m
          },
          {
          "value": education[e+10].Liczba_absolwentow/m
          },
          {
          "value": education[e+11].Liczba_absolwentow/m
          },
          {
          "value": education[e+12].Liczba_absolwentow/m
          },
          {
          "value": education[e+13].Liczba_absolwentow/m
          },
          {
          "value": education[e+14].Liczba_absolwentow/m
          },
          {
          "value": education[e+15].Liczba_absolwentow/m
          },
          {
          "value": education[e+16].Liczba_absolwentow/m
          },
          {
          "value":education[e+17].Liczba_absolwentow/m
          },
          {
          "value":education[e+18].Liczba_absolwentow/m
          }
        ]
      }
      crimeData.dataset.push(crimeComparison);
      fightData.dataset.push(fightComparison);
      theftData.dataset.push(theftComparison);
      theftAutoData.dataset.push(theftAutoComparison);
      burglaryData.dataset.push(burglaryComparison);
      robberyData.dataset.push(robberyComparison);
      damageData.dataset.push(damageComparison);
      unemploymentData.dataset.push(unemploymentComparison);
      wagesData.dataset.push(wagesComparison);
      socialData.dataset.push(socialComparison);
      educationData.dataset.push(educationComparison);
    }
  }
};
</script>
<style scoped lang="scss">
    table tr td, th{
        width:600px;
        padding: 15px;
        border: 1px solid black;
    }
    table tr td{
        background-color: white;
    }
    table tr th{
        background-color: #ffff8d;
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .crimeInRegion{
        width: 80%;
        margin-bottom: 40px;
    }
    #socialHelps{
        margin-bottom: 40px;
    }
    .comparisonSection{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .comparisonSection select{
      height:2em;
      margin-left:15px;
    }
</style>
