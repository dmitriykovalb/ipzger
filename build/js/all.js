function getHistory(){return document.getElementById("history-value").innerText}function printHistory(t){document.getElementById("history-value").innerText=t}function getOutput(){return document.getElementById("output-value").innerText}function printOutput(t){document.getElementById("output-value").innerText=""==t?t:getFormattedNumber(t)}function getFormattedNumber(t){return"-"==t?"":Number(t).toLocaleString("en")}function reverseNumberFormat(t){return Number(t.replace(/,/g,""))}for(var operator=document.getElementsByClassName("operator"),i=0;i<operator.length;i++)operator[i].addEventListener("click",function(){if("clear"==this.id)printHistory(""),printOutput("");else if("backspace"==this.id){var output=reverseNumberFormat(getOutput()).toString();output&&(output=output.substr(0,output.length-1),printOutput(output))}else{var output=getOutput(),history=getHistory();if(""==output&&""!=history&&isNaN(history[history.length-1])&&(history=history.substr(0,history.length-1)),""!=output||""!=history)if(output=""==output?output:reverseNumberFormat(output),history+=output,"="==this.id){var result=eval(history);printOutput(result),printHistory("")}else history+=this.id,printHistory(history),printOutput("")}});for(var number=document.getElementsByClassName("number"),i=0;i<number.length;i++)number[i].addEventListener("click",function(){var t=reverseNumberFormat(getOutput());NaN!=t&&printOutput(t+=this.id)});