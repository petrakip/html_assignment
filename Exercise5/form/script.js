//-------------------- Regions' datalist --------------
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

//-------------------- Cities' datalist --------------
const greekCities = [
  "Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Ioannina", 
  "Chania", "Rhodes", "Kalamata", "Kavala", "Serres", "Trikala", "Lamia", "Corfu", 
  "Agrinio", "Alexandroupoli", "Chalkida", "Katerini", "Xanthi", "Kozani", "Komotini", 
  "Drama", "Veria", "Rethymno", "Pyrgos", "Giannitsa", "Karditsa", "Mytilene", "Argos", 
  "Sparti", "Florina", "Naousa", "Orestiada", "Edessa", "Thebes", "Preveza", "Grevena", 
  "Arta", "Amfissa", "Kastoria", "Polygyros", "Lefkada", "Parga", "Karystos", "Skiathos", 
  "Skopelos", "Nafplio", "Paros", "Naxos", "Samos", "Kos", "Andros", "Syros", "Tinos", 
  "Milos", "Kea", "Kalymnos", "Karpathos", "Ikaria", "Chios", "Kythira", "Lemnos", 
  "Zakynthos", "Kefalonia", "Aegina", "Salamina", "Poros", "Hydra", "Spetses", 
  "Methana", "Galaxidi", "Ermioni", "Pylos", "Messini", "Koroni", "Megalopolis", 
  "Monemvasia", "Kilkis", "Litochoro", "Kassandra", "Nea Moudania", "Sithonia", 
  "Nea Karvali", "Elefsina", "Marathon", "Lavrio", "Markopoulo", "Nea Makri", 
  "Oropos", "Porto Rafti", "Varkiza", "Vari", "Vouliagmeni", "Glyfada", "Voula", 
  "Alimos", "Elliniko", "Agios Nikolaos", "Ierapetra", "Sitia", "Malia", "Elounda", 
  "Palaiokastritsa", "Sidari", "Gaios", "Lixouri", "Fiskardo", "Argostoli", "Poros (Kefalonia)",
  "Vathy", "Aigio", "Kyparissia", "Filiatra", "Amaliada", "Lechaina", "Gythio", 
  "Areopoli", "Selinitsa", "Feres", "Soufli", "Didymoteicho", "Ormenio", "Sapes", 
  "Iasmos", "Avdira", "Vistonida", "Chrysoupoli", "Nea Peramos", "Stavroupoli", 
  "Eleutheroupoli", "Agia Paraskevi", "Limenaria", "Megara", "Aspropyrgos", 
  "Kalyvia Thorikou", "Spata", "Koropi", "Paiania", "Rafina", "Nea Filadelfia", 
  "Nea Ionia", "Peristeri", "Acharnes", "Ilion", "Agioi Anargyroi", "Egaleo", 
  "Kallithea", "Nea Smyrni", "Moschato", "Tavros", "Perama", "Korydallos", 
  "Nikaia", "Drapetsona", "Keratsini", "Piraeus"
].sort();
console.log(greekCities);

// Find element with id=region
const citySelect = document.querySelector('#cities');

// Add options from array "regionsList"
greekCities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    citySelect.appendChild(option);
});

//--------------- Form reset -----------------------
// Clear all fields in form
function clearInputField() {
  document.getElementById('myForm').reset();
}

//--------- Textarea: characters left Validation --------------
 // characters left
 const chars = document.querySelector("#mytext");
 const charsleft = document.querySelector("#charsLeft");

 chars.addEventListener("input", (e)=>{
     charsleft.value = chars.maxLength-chars.value.length + ' have left';
 })


//--------------- Date Validation -------------------
 // Take the current date
 const today = new Date().toISOString().split('T')[0];
        
 // Set the max attribute of inputdate in current date
 document.getElementById('date').setAttribute('max', today);


//--------- Mail Validation in real time ---------
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

const emailInput = document.getElementById('email');
const emailMessageElement = document.getElementById('emailMessage');

emailInput.addEventListener('input', function() {
  const emailValue = emailInput.value;

  if (emailValue === "") {
      emailMessageElement.textContent = ""; // Clear message
      emailMessageElement.className = "message";
  } else if (validateEmail(emailValue)) {
      emailMessageElement.textContent = "Valid email!";
      emailMessageElement.className = "message success";
  } else {
      emailMessageElement.textContent = "Invalid email.";
      emailMessageElement.className = "message error";
  }
});


//--------- Password Validation in real time ---------
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordMessageElement = document.getElementById('passwordMessage');

confirmPasswordInput.addEventListener('input', function() {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  if (confirmPasswordValue === "") {
      passwordMessageElement.textContent = ""; // Clear message
      passwordMessageElement.className = "message";
  } else if (passwordValue === confirmPasswordValue) {
      passwordMessageElement.textContent = "Passwords match!";
      passwordMessageElement.className = "message success";
  } else {
      passwordMessageElement.textContent = "Passwords do not match.";
      passwordMessageElement.className = "message error";
  }
});