module.exports = function toReadable (number) {
  let result = '';
  let zero= 'zero';
  let one= 'one';
  let two = 'two';
  let three = 'three';
  let four = 'four';
  let five = 'five';
  let six = 'six';
  let seven = 'seven';
  let eight = 'eight';
  let nine ='nine';
  let ten = 'ten';
  let eleven ='eleven';
  let twelve = 'twelve';
  let thirteen = 'thirteen';
  let fourteen = 'fourteen';
  let fifteen = 'fifteen';
  let sixteen = 'sixteen';
  let seventeen = 'seventeen';
  let eighteen = 'eighteen';
  let nineteen = 'nineteen';
  let twenty = 'twenty';
  let thirty = 'thirty';
  let forty = 'forty';
  let fifty = 'fifty';
  let sixty = 'sixty';
  let seventy = 'seventy';
  let eighty = 'eighty';
  let ninety = 'ninety';
  let oneNum = Math.floor(number/100);
  let twoNum = Math.floor(number/10%10);
  let threeNum = number%10;
  let twoNumThreeNum = Number(`${twoNum}${threeNum}`);



if (oneNum){
    switch(oneNum){
        case 1:
            result=`${one} hundred `;
            break;
        case 2:
            result=`${two} hundred `;
            break;
        case 3:
            result=`${three} hundred `;
            break;
        case 4:
            result=`${four} hundred `;
            break;
        case 5:
            result=`${five} hundred `;
            break;
        case 6:
            result=`${six} hundred `;
            break;
        case 7:
            result=`${seven} hundred `;
            break;
        case 8:
            result=`${eight} hundred `;
            break;
        case 9:
            result=`${nine} hundred `;
            break;
      }
}
if (twoNum){
    switch(twoNum){
        case 0:
            result=`${result} `;
            break;
        case 2:
            result=`${result}${twenty} `;
            break;
        case 3:
            result=`${result}${thirty} `;
            break;
        case 4:
            result=`${result}${forty} `;
            break;
        case 5:
            result=`${result}${fifty} `;
            break;
        case 6:
            result=`${result}${sixty} `;
            break;
        case 7:
            result=`${result}${seventy} `;
            break;
        case 8:
            result=`${result}${eighty} `;
            break;
        case 9: 
            result=`${result}${ninety} `;
            break;
        case 1:
            switch(twoNumThreeNum){
                case 10:
                    result=`${result}${ten}`;
                    break;
                case 11:
                    result=`${result}${eleven}`;
                    break;
                case 12:
                    result=`${result}${twelve}`;
                    break;
                case 13:
                    result=`${result}${thirteen}`;
                    break;
                case 14:
                    result=`${result}${fourteen}`;
                    break;
                case 15:
                    result=`${result}${fifteen}`;
                    break;
                case 16:
                    result=`${result}${sixteen}`;
                    break;
                case 17:
                    result=`${result}${seventeen}`;
                    break;
                case 18:
                    result=`${result}${eighteen}`;
                    break;
                case 19:
                    result=`${result}${nineteen}`;
                    break;
            }

    }
}

if (threeNum && twoNum != 1 && number!= 0){
    switch(threeNum){
        case 0:
            result=`${result}`;
            break;
        case 1:
            result=`${result}${one}`;
            break;
        case 2:
            result=`${result}${two}`;
            break;
        case 3:
            result=`${result}${three}`;
            break;
        case 4:
            result=`${result}${four}`;
            break;
        case 5:
            result=`${result}${five}`;
            break;
        case 6:
            result=`${result}${six}`;
            break;
        case 7:
            result=`${result}${seven}`;
            break;
        case 8:
            result=`${result}${eight}`;
            break;
        case 9: 
            result=`${result}${nine}`;
            break;
       
    }
}

if (number===0){
    result=`${zero}`
}


    return result.trim();
}



