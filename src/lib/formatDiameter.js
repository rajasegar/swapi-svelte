export default function formatDiameter(value) {
   if (value === undefined) {
     return "";
   } else {
     const parsedValue = parseInt(value);
     if (isNaN(parsedValue)) {
       return value;
     } else {
       return `${value} Kilometers (${value * 0.621371} Miles)`;
     }
   }
 }
