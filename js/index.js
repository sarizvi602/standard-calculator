$(document).ready(function() {

  var currentNum = '';
  var inputs = [];//array of all inputs include numbers and signs
  var dispAns;
  var totalDispLim = 12;//display limit for screen
  var showInputsLim = 40;//display limit for expression on screen
  var calcOn = false;

  function connectDig(currentNum, newDig) {
    if (newDig === "plusminus" && currentNum.indexOf("-") === 0) {//change negative number
      return currentNum.slice(1);//into positive
    } else if (newDig === "plusminus" && currentNum.indexOf("-") === -1) {//change positive number
      return "-" + currentNum;//into negative  number
    } else if (currentNum.length <= totalDispLim) {//within display limit
      if (newDig === "0" && currentNum.length === 0) {//if first digit
        return "";//don't concatenate zero
      } else if (newDig === "." && currentNum.length === 0) {//if decimal for first digit
        return "0.";//have it like 0.
      } else if (newDig === "." && currentNum.indexOf(newDig) > -1) {//if decimal does exist
        return currentNum;//not concatenate decimal point
      } else {
        return currentNum + newDig; //just concatenate if everything else checks out
      }
    } else {
      return currentNum; //just return the original if not in the display limit
    }
  }
  
  //display results
  function displayCalc() {
    if (currentNum !== "") {//if there is new person, make it part of array
      inputs.push(currentNum);
      currentNum = "";
    }

    if (isNaN(Number(inputs[inputs.length - 1]))) {//if sign at the end
      dispAns = eval(inputs.slice(0, -1).join(" ")).toString();//remove it and calculate
    } else {//if no sign at the end
      dispAns = eval(inputs.join(" ")).toString();
    }

    if (dispAns.length > totalDispLim) {//solution is larger than display limit
      dispAns = dispAns.slice(0, totalDispLim);//remove last few digits to fit
    }

    $("#showResult").html(dispAns);//display results and expression
    $("#displayNum").html(inputs.join(" ").slice(-showInputsLim));
  }

  function updateDisplay(sign) {//when sign is pressed then update array
    if (currentNum !== "") {//if number exists then push number and sign to array
      inputs.push(currentNum);
      inputs.push(sign);
    } else if (inputs.length > 0 && currentNum === "") {//if number is empty
      inputs.pop();//change the most recent sign
      inputs.push(sign);
    }
    currentNum = "";
    displayCalc();//display result
  }

  $("a").click(function() {//if button is pressed
    switch (this.id) {//take action based on id
      case "onOff":
        if (calcOn) { //turn off calculator
          calcOn = false;
          inputs = [];
          currentNum = "";
          $("#displayNum").html("");
          $("#showResult").html("");
        } else { //turn on calculator
          calcOn = true;
          $("#displayNum").html("");
          $("#showResult").html("0");
        }
        break;
      case "clearAll":
        if (calcOn) {
          currentNum = "";
          inputs = [];
          $("#displayNum").html("");
          $("#showResult").html("0");
        }
        break;
      case "clearEntry":
        if (calcOn) {
          currentNum = "";
          $("#showResult").html("0");
        }
        break;
      case "zero":
        if (calcOn) {
          currentNum = connectDig(currentNum, "0");
          $("#showResult").html(currentNum);
        }
        break;
      case "decimal":
        if (calcOn) {
          currentNum = connectDig(currentNum, ".");
          $("#showResult").html(currentNum);
        }
        break;
      case "plusminus":
        if (calcOn) {
          currentNum = connectDig(currentNum, "plusminus");
          $("#showResult").html(currentNum);
        }
        break;
      case "one":
        if (calcOn) {
          currentNum = connectDig(currentNum, "1");
          $("#showResult").html(currentNum);
        }
        break;
      case "two":
        if (calcOn) {
          currentNum = connectDig(currentNum, "2");
          $("#showResult").html(currentNum);
        }
        break;
      case "three":
        if (calcOn) {
          currentNum = connectDig(currentNum, "3");
          $("#showResult").html(currentNum);
        }
        break;
      case "four":
        if (calcOn) {
          currentNum = connectDig(currentNum, "4");
          $("#showResult").html(currentNum);
        }
        break;
      case "five":
        if (calcOn) {
          currentNum = connectDig(currentNum, "5");
          $("#showResult").html(currentNum);
        }
        break;
      case "six":
        if (calcOn) {
          currentNum = connectDig(currentNum, "6");
          $("#showResult").html(currentNum);
        }
        break;
      case "seven":
        if (calcOn) {
          currentNum = connectDig(currentNum, "7");
          $("#showResult").html(currentNum);
        }
        break;
      case "eight":
        if (calcOn) {
          currentNum = connectDig(currentNum, "8");
          $("#showResult").html(currentNum);
        }
        break;
      case "nine":
        if (calcOn) {
          currentNum = connectDig(currentNum, "9");
          $("#showResult").html(currentNum);
        }
        break;
      case "add":
        if (calcOn) {
          updateDisplay("+");
        }
        break;
      case "subtract":
        if (calcOn) {
          updateDisplay("-");
        }
        break;
      case "multiply":
        if (calcOn) {
          updateDisplay("*");
        }
        break;
      case "divide":
        if (calcOn) {
          updateDisplay("/");
        }
        break;
      case "equal":
        if (calcOn) {
          displayCalc();
          inputs = [];
        }
        break;
    }

  });
  //if there is key press then make corresponding action/click
  $(document).keypress(function(event) {
    if (calcOn) {
      switch (event.which) {
        case 48://press 0 button
        case 96:
          $("#zero").click();
          break;
        case 49://press 1 button
        case 97:
          $("#one").click();
          break;
        case 50://press 2 button
        case 98:
          $("#two").click();
          break;
        case 51://press 3 button
        case 99:
          $("#three").click();
          break;
        case 52: //press 4 button
        case 100:
          $("#four").click();
          break;
        case 53: //press 5 button
        case 101:
          $("#five").click();
          break;
        case 54: //press 6 button
        case 102:
          $("#six").click();
          break;
        case 55: //press 7 button
        case 103:
          $("#seven").click();
          break;
        case 56: //press 8 button
        case 104:
          $("#eight").click();
          break;
        case 57: //press 9 button
        case 105:
          $("#nine").click();
          break;
        case 13: //press equal button
        case 187:
        case 61:
        case 59:
          $("#equal").click();
          break;
        case 8: //press CE button
        case 46:
          $("#clearEntry").click();
          break;
        case 107: //press + button
        case 43:
          $("#add").click();
          break;
        case 109: //press - button
        case 189:
        case 173:
        case 45:
          $("#subtract").click();
          break;
        case 106: //press x button
        case 170:
        case 171:
        case 42:
          $("#multiply").click();
          break;
        case 111: //press divide button
        case 191:
        case 47:
          $("#divide").click();
          break;
        case 190: //press decimal button
        case 193:
        case 194:
        case 110:
          $("#decimal").click();
          break;
      }
    }
  });

});