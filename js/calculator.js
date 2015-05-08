/*This program calculates estimated day care costs from user inputs from
pre-defined drop down selections. Written by JF² 2015*/

// The values represent the approximate cost of the age group for a half day
var ageGroups = Array(); 
ageGroups.infant = "23.80";
ageGroups.sixWeekTwoAndaHalf = "23.40";
ageGroups.twoAndaHalfToFour = "23.00";
ageGroups.fourToFive = "22.00";

// Used in calculations for total price, rates are set at half days = 1
var lengthOfDay = Array();
lengthOfDay.Half = "1";
lengthOfDay.Full = "2";

var daysperWeek = Array();
daysperWeek["1"] = 1;
daysperWeek["2"] = 2;
daysperWeek["3"] = 3;
daysperWeek["4"] = 4;
daysperWeek["5"] = 5;

var timeframe = Array();
timeframe.Weekly = "1";
timeframe.Monthly = "4";
timeframe.Quarterly = "12";
timeframe.biAnnually = "26";
timeframe.Yearly = "52";

function getageGroupPrice(){

  var ageGroupPrice=0;

  // Get reference from the user for ageGroup
  var ageGroup = document.forms.calculatorForm.elements.ageGroup;

  // Loop through each radio button
  for(var i = 0; i < ageGroup.length; i++){

    // If checked
    if(ageGroup[i].checked){

        // Set ageGroupPrice to the value of the selected radio button
        // by using the ageGroups array I get the selected items value
        ageGroupPrice = ageGroups[ageGroup[i].value];
        // Get a match, break out of loop
        break;
    }
  }
  return ageGroupPrice;
}

// Finds lengthOfDay based on the drop down selection
function getlengthOfDayInput(){

  var lengthOfDayInput = 0;

  // Get reference to the select id="lengthOfDay"
   var selectedlengthOfDay = document.forms.calculatorForm.elements.lengthOfDay;

  // Set lengthOfDay equal to value
  lengthOfDayInput = lengthOfDay[selectedlengthOfDay.value];

  return lengthOfDayInput;
}

// Find the number of days based on the drop down selection
function getdaysperweekInput(){

  var daysperweekInput = 0;

  //Get a reference to the select id="daysperWeek"
   var selecteddaysperWeek = document.forms.calculatorForm.elements.daysperWeek;

  // Set daysperWeek equal to value
  daysperweekInput = daysperWeek[selecteddaysperWeek.value];

  return daysperweekInput;
}

// Find the timeframe based on the drop down selection
function gettimeframeInput(){

  var timeframeInput = 0;

  // Get a reference to the select id="timeframe"
   var selectedtimeframe = document.forms.calculatorForm.elements.timeframe;

  // Set timeframe equal to value
  timeframeInput = timeframe[selectedtimeframe.value];

  return timeframeInput;
}

// Add the summer price based on a check box selection
function summerClassPrice(){

  var SummerClass = 0;

  //Get a reference to the checkbox id="includeSummerClass"
  var includeSummerClass = document.forms.calculatorForm.elements
                          .includeSummerClass;

  //If checked set SummerClass to 20
  if(includeSummerClass.checked === true){

      SummerClass = 20;
  }
  return SummerClass;
}

// Add enrollment fee based on a check box selection
function nonstudentfeeInput(){

  var nonstudentFee = 0;

  //Get a reference to the checkbox id="enrollmentFee"
  var enrollmentFee = document.forms.calculatorForm.elements.enrollmentFee;

  //If checked set enrollmentFee to 30
  if(enrollmentFee.checked === true){

      nonstudentFee = 30;
  }
  return nonstudentFee;
}

// Get the total price by calling our functions
function calculateTotal(){
  
  var childPrice = (getageGroupPrice() * getlengthOfDayInput()) * 
                    getdaysperweekInput() * gettimeframeInput() +
                    summerClassPrice() + nonstudentfeeInput();

// Display the results
  var grandTotal = document.getElementById('totalPrice');
  grandTotal.style.display='block';
  grandTotal.innerHTML = "Total price for this child is $"+childPrice.toFixed(2);
}

function formReset(){

  var total = document.getElementById('totalPrice');
  total.style.display = 'none';
}

getageGroupPrice();
getlengthOfDayInput();
getdaysperweekInput();
gettimeframeInput();
summerClassPrice();
nonstudentfeeInput();
calculateTotal();
formReset();