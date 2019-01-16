
<script>
import Vue from 'vue';
import router from '../router'
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import Poland from 'fusionmaps/maps/fusioncharts.poland';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import json from '../data/crime_data.json';
import CrimeInPoland from '@/components/Poland/CrimeInPoland.vue';
import FightInPoland from '@/components/Poland/FightInPoland.vue';
import TheftInPoland from '@/components/Poland/TheftInPoland.vue';
import TheftAutoInPoland from '@/components/Poland/TheftAutoInPoland.vue';
import BurglaryInPoland from '@/components/Poland/BurglaryInPoland.vue';
import RobberyInPoland from '@/components/Poland/RobberyInPoland.vue';
import CrimeDamageInPoland from '@/components/Poland/CrimeDamageInPoland.vue';
import WagesInPoland from '@/components/Poland/WagesInPoland.vue';
import EducationInPoland from '@/components/Poland/EducationInPoland.vue';
import SocialInPoland from '@/components/Poland/SocialInPoland.vue';
import UnemployInPoland from '@/components/Poland/UnemployInPoland.vue';

// Register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, FusionMaps, Poland, FusionTheme);


export default {
  name: 'app',
  components: {
    CrimeInPoland,
    FightInPoland,
    TheftInPoland,
    BurglaryInPoland,
    TheftAutoInPoland,
    RobberyInPoland,
    CrimeDamageInPoland,
    WagesInPoland,
    EducationInPoland,
    SocialInPoland,
    UnemployInPoland
  },
  data () {
    return {
        "type": "poland",
        "renderAt": "map",
        "width": "975",
        "height": "775",
        "dataFormat": "json",
        "datasource": {
                // Map Configuration
            "chart": {
                "animation": "1",
                "showbevel": "0",
                "usehovercolor": "1",
                "showlegend": "1",
                "legendposition": "BOTTOM",
                "legendborderalpha": "0",
                "legendbordercolor": "ffffff",
                "legendallowdrag": "0",
                "legendshadow": "0",
                "connectorcolor": "000000",
                "fillalpha": "80",
                "hovercolor": "CCCCCC",
                "theme": "fusion"
            },
            "colorrange": {
                "minvalue": "15000",
                "startlabel": "Low",
                "endlabel": "High",
                "code": " 6baa01",
                "gradient": "1",
                "color": [{"maxvalue": "65000", "code": "f8bd19"}, {"maxvalue": "115000", "code": "e44a00"}]
            },
            "data": [{"id":"72", "value":json[19].Stwierdzone},{"id":"73","value":json[38].Stwierdzone},{"id":"74","value":json[95].Stwierdzone},{"id":"75","value":json[57].Stwierdzone},{"id":"76","value":json[76].Stwierdzone},{"id":"77","value":json[114].Stwierdzone},{"id":"78","value":json[133].Stwierdzone},{"id":"79","value":json[152].Stwierdzone},{"id":"80","value":json[171].Stwierdzone},{"id":"81","value":json[190].Stwierdzone},{"id":"82","value":json[209].Stwierdzone},{"id":"83","value":json[228].Stwierdzone},{"id":"84","value":json[247].Stwierdzone},{"id":"85","value":json[266].Stwierdzone},{"id":"86","value":json[285].Stwierdzone},{"id":"87","value":json[304].Stwierdzone}]
        },
        "events": {
            "entityClick": function (eventObj, dataObj) {
                if(dataObj.id == 87){
                    router.push("./zachodniopomorskie");
                }else if(dataObj.id == 84){
                    router.push("./swietokrzyskie");
                }else if(dataObj.id == 72){
                    router.push("./dolnoslaskie");
                }else if(dataObj.id == 85){
                    router.push("./warminsko-mazurskie");
                }else if(dataObj.id == 76){
                    router.push("./lubuskie");
                }else if(dataObj.id == 75){
                    router.push("./lubelskie");
                }else if(dataObj.id == 73){
                    router.push("./kujawsko-pomorskie");
                }else if(dataObj.id == 74){
                    router.push("./lodzkie");
                }else if(dataObj.id == 78){
                    router.push("./mazowieckie");
                }else if(dataObj.id == 77){
                    router.push("./malopolskie");
                }else if(dataObj.id == 79){
                    router.push("./opolskie");
                }else if(dataObj.id == 80){
                    router.push("./podkarpackie");
                }else if(dataObj.id == 81){
                    router.push("./podlaskie");
                }else if(dataObj.id == 82){
                    router.push("./pomorskie");
                }else if(dataObj.id == 86){
                    router.push("./wielkopolskie");
                }else if(dataObj.id == 83){
                    router.push("./slaskie");
                }else{
                    console.log("upsi");
                }
            }
        }      
    }
  }
}
</script>
<template>
  <div id="app">
    <h1>Poziom przestępczości w Polsce w odniesieniu do czynników ekonomicznych i społecznych</h1>
    <div id="map">
        <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataformat="dataformat"
            :datasource="datasource"
            :events="events">
        </fusioncharts>
    </div>
    <div id="crimeInCountry">
        <h2>Liczba przestępstw w skali kraju</h2>
        <CrimeInPoland/>
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
                    <FightInPoland/>
                </td>
                <td>
                    <TheftInPoland/>
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
                    <TheftAutoInPoland/>
                </td>
                <td>
                    <BurglaryInPoland/>
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
                    <RobberyInPoland/>
                </td>
                <td>
                    <CrimeDamageInPoland/>
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
                        <UnemployInPoland/>
                    </td>
                    <td>
                        <EducationInPoland/>
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
                        <SocialInPoland/>
                    </td>
                    <td>
                        <WagesInPoland/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
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
    #app{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    h1,h2{
        margin-bottom: 30px;
    }
    #crimeInCountry{
        width: 80%;
        margin-bottom: 40px;
    }
    #socialHelps{
        margin-bottom: 40px;
    }
    #map{
        margin-bottom: 40px;
    }
</style>
