import abbrNum from './abbrNum';

 export default function formatPopulation(value) {
   if (value === undefined) {
     return "";
   } else {
     const parsedValue = parseInt(value);
     if (isNaN(parsedValue)) {
       return value;
     } else {
       return abbrNum(value);
     }
   }
 }
