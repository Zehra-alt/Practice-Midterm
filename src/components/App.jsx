import {Hello} from './Hello.jsx';
import {
  View,
  Text
} from 'react-native';
import { squareFeetToAcres } from "../acres.js";

import { mowTime } from "../mowTime.js";

import { airQuality } from "../airQuality.js";

import { yeeHa } from "../yeeHa.js";

import { slope } from "../slope.js";




export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />

      <Text>--- Square Feet to Acres ---</Text>

      <Text>
        43560 sq ft = {squareFeetToAcres(43560)} acres
      </Text>

      <Text>
        87120 sq ft = {squareFeetToAcres(87120)} acres
      </Text>

      <Text>
        21780 sq ft = {squareFeetToAcres(21780)} acres
      </Text>
      
      <Text>--- Lawn Mowing Time ---</Text>

      <Text>
      10m x 20m at 5 m²/min = {mowTime(10, 20, 5)} minutes
      </Text>

      <Text>
      15m x 30m at 10 m²/min = {mowTime(15, 30, 10)} minutes
      </Text>

      <Text>
      25m x 40m at 20 m²/min = {mowTime(25, 40, 20)} minutes
      </Text>

      <Text>--- Air Quality ---</Text>

      <Text>
      AQI 25 = {airQuality(25)}
      </Text>

      <Text>
      AQI 75 = {airQuality(75)}
      </Text>

      <Text>
      AQI 125 = {airQuality(125)}
      </Text>

    <Text>
    AQI 175 = {airQuality(175)}
    </Text>

    <Text>
    AQI 250 = {airQuality(250)}
    </Text>

    <Text>
    AQI 400 = {airQuality(400)}
    </Text>
    
    <Text>--- Yee Ha ---</Text>

    <Text>6 = {yeeHa(6)}</Text>
    <Text>14 = {yeeHa(14)}</Text>
    <Text>21 = {yeeHa(21)}</Text>
    <Text>5 = {yeeHa(5)}</Text>
    
    <Text>--- Slope ---</Text>

    <Text>
    (0,0) to (2,2) = {slope(0,0,2,2)}
    </Text>
    <Text>
    (1,2) to (3,6) = {slope(1,2,3,6)}
    </Text>
    <Text>
    (2,4) to (4,4) = {slope(2,4,4,4)}
    </Text>
    </View>
  );
}

