// create option region menu
const regionsList = ["East Makedonia and Thraki",
"Central Makedonia",
"West Makedonia",
"Ipeiros",
"Thessalia",
"Ionio Islands",
"West Greece",
"Central Greece",
"Attiki",
"Peloponnise",
"North Aegean",
"South Aegean",
"Crete"].sort();
console.log(regionsList);

// Find element with id=region
const regionSelect = document.querySelector('#regions');

// Add options from array "regionsList"
regionsList.forEach(region => {
    const option = document.createElement('option');
    option.value = region;
    regionSelect.appendChild(option);
});

function isFormValid() {
    const inpObj = document.getElementById("submit");
    if (!inpObj.checkValidity()) {
      document.getElementById("validation_message").innerHTML = inpObj.validationMessage;
      return false;
    } else {
      document.getElementById("validation_message").innerHTML = "The form has sumbitted!";
      return true;
    } 
  } 

  function clearInputField() {
    document.getElementById('myForm').reset();
}
