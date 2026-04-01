let selectedLanguage = 'en-US';

// ---------------- TRANSLATIONS ----------------
const translations = {

welcome:{
"en-US":"Welcome to Mental and Emotional Checker – Your All-Time Therapy",
"hi-IN":"मानसिक और भावनात्मक चेकर में आपका स्वागत है – आपकी सभी समय की चिकित्सा",
"ta-IN":"மனச்சின்ன மற்றும் உணர்ச்சி சோதிப்பாளருக்கு வரவேற்கின்றோம் – உங்கள் அனைத்து நேரமும் சிகிச்சை",
"ml-IN":"മെന്റൽ & എമോഷണൽ ചെക്കറിലേക്ക് സ്വാഗതം – നിങ്ങളുടെ ഓൾ ടൈം തെറാപ്പി"
},

intro:{
"en-US":"Caring for your mind and heart is just as important as caring for your body. Nurture your thoughts and embrace your feelings.",
"hi-IN":"अपने मन और हृदय की देखभाल करना आपके शरीर की देखभाल के समान महत्वपूर्ण है। अपने विचारों को पोषित करें और अपनी भावनाओं को अपनाएं।",
"ta-IN":"உங்கள் மனம் மற்றும் இதயத்தின் பராமரிப்பு முக்கியமானது. உங்கள் எண்ணங்களை பராமரிக்கவும் மற்றும் உணர்வுகளை ஏற்றுக்கொள்ளவும்.",
"ml-IN":"നിങ്ങളുടെ മനസ്സിനും ഹൃദയത്തിനും കരുതല് ശരീരത്തിനുള്ളതുപോലെ പ്രധാനമാണ്."
},

question:{
"en-US":"Select how you are feeling today:",
"hi-IN":"आज आप कैसा महसूस कर रहे हैं चुनें:",
"ta-IN":"இன்று நீங்கள் எவ்வாறு உணர்கிறீர்கள் என்பதைத் தேர்ந்தெடுக்கவும்:",
"ml-IN":"ഇന്ന് നിങ്ങൾ എങ്ങനെയാണ് അനുഭവപ്പെടുന്നത് തിരഞ്ഞെടുക്കുക:"
},

suggestionTitle:{
"en-US":"Suggestions:",
"hi-IN":"सुझाव:",
"ta-IN":"பரிந்துரைகள்:",
"ml-IN":"നിർദ്ദേശങ്ങൾ:"
},

options:{
"en-US":[
"Loneliness → no social interaction → sadness 🪑👵👴💬",
"Loss of independence → feel like a burden 🏡🤝💛",
"Health problems → stress, irritation ⚕️🧑‍🦳💤",
"Memory issues → confusion, fear 🧠📖❓",
"Loss of loved ones → emotional pain 🕯️💔🌹"
],

"hi-IN":[
"एकाकीपन → कोई सामाजिक संपर्क नहीं → उदासी",
"स्वायत्तता की कमी → बोझ जैसा महसूस करना",
"स्वास्थ्य समस्याएँ → तनाव, चिड़चिड़ापन",
"स्मृति समस्याएँ → भ्रम, डर",
"प्रियजनों की हानि → भावनात्मक पीड़ा"
],

"ta-IN":[
"தனிமை → சமூக தொடர்பு இல்லை → சோகம்",
"சுயாதீனத்தை இழப்பு → சுமையாக உணர்வு",
"சுகாதார பிரச்சினைகள் → மன அழுத்தம்",
"நினைவுப் பிரச்சினைகள் → குழப்பம்",
"அன்புக்குரியவர்களை இழப்பு → மன வலி"
],

"ml-IN":[
"ഒറ്റപ്പെടൽ → സാമൂഹിക ഇടപെടൽ ഇല്ല → ദുഃഖം",
"സ്വാതന്ത്ര്യം നഷ്ടപ്പെടൽ → ഭാരംപോലെ തോന്നൽ",
"ആരോഗ്യ പ്രശ്നങ്ങൾ → സമ്മർദ്ദം",
"മെമ്മറി പ്രശ്നങ്ങൾ → ആശങ്ക",
"സ്നേഹിതരെ നഷ്ടപ്പെടൽ → മാനസിക വേദന"
]
},

// ✅ FULL suggestions added for all languages
suggestions:{
"en-US":[
["Call a family member 📞","Talk daily ☕","Join community clubs 🤝"],
["Do small tasks independently 🧹","Self-care routines 🧴","Gardening or crafts 🌱"],
["Drink water & rest 💧","Maintain sleep schedule ⏰","Attend health sessions 👴"],
["Write reminders ✏️","Solve puzzles 🧩","Family discussions 👨‍👩‍👧‍👦"],
["Listen to calm music 🎵","Look at old photos 📸","Talk with friends 🌹"]
],

"hi-IN":[
["परिवार को कॉल करें","रोज बात करें","समुदाय समूह से जुड़ें"],
["छोटे काम स्वयं करें","स्वयं की देखभाल करें","बागवानी करें"],
["पानी पिएं और आराम करें","नींद का समय रखें","स्वास्थ्य जांच करें"],
["नोट लिखें","पहेलियाँ हल करें","परिवार से चर्चा करें"],
["शांत संगीत सुनें","पुरानी तस्वीरें देखें","दोस्तों से बात करें"]
],

"ta-IN":[
["குடும்பத்தினருக்கு அழைக்கவும்","தினமும் பேசவும்","சமூக குழுவில் சேரவும்"],
["சிறிய வேலைகள் செய்யவும்","சுய பராமரிப்பு செய்யவும்","தோட்டப்பணி செய்யவும்"],
["தண்ணீர் குடிக்கவும்","நேரம் பின்பற்றவும்","மருத்துவ ஆலோசனை பெறவும்"],
["குறிப்புகள் எழுதவும்","புதிர்கள் தீர்க்கவும்","குடும்பத்துடன் பேசவும்"],
["இசை கேட்கவும்","பழைய புகைப்படங்கள் பார்க்கவும்","நண்பர்களுடன் பேசவும்"]
],

"ml-IN":[
["കുടുംബാംഗങ്ങളെ വിളിക്കുക","ദിവസവും സംസാരിക്കുക","കമ്മ്യൂണിറ്റി ഗ്രൂപ്പിൽ ചേരുക"],
["ചെറിയ ജോലികൾ ചെയ്യുക","സ്വയം പരിപാലനം","തോട്ടം ചെയ്യുക"],
["വെള്ളം കുടിക്കുക","നല്ല ഉറക്കം പാലിക്കുക","ആരോഗ്യ പരിശോധന നടത്തുക"],
["റിമൈൻഡർ എഴുതുക","പസിലുകൾ ചെയ്യുക","കുടുംബവുമായി സംസാരിക്കുക"],
["മൃദുവായ സംഗീതം കേൾക്കുക","പഴയ ഫോട്ടോകൾ കാണുക","സുഹൃത്തുക്കളോട് സംസാരിക്കുക"]
]
}
};

// ---------------- VOICE FIX ----------------
function speak(text){
    if(!('speechSynthesis' in window)) return;

    const utter = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();

    const voiceMatch = voices.find(v => v.lang === selectedLanguage);
    if(voiceMatch) utter.voice = voiceMatch;

    utter.lang = selectedLanguage;
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
}

// ---------------- LANGUAGE SELECT ----------------
function selectLanguage(){
    selectedLanguage =
        document.getElementById('languageSelect').value;

    document.getElementById('languageScreen').classList.remove('active');
    document.getElementById('step1').classList.add('active');

    loadStep1();
}

// ---------------- STEP 1 ----------------
function loadStep1(){
    const welcome = translations.welcome[selectedLanguage];
    const intro = translations.intro[selectedLanguage];

    welcomeText.innerText = welcome;
    introText.innerText = intro;

    speak(welcome + ". " + intro);
}

// ---------------- STEP CHANGE ----------------
function nextStep(){
    step1.classList.remove('active');
    step2.classList.add('active');
    loadStep2();
}

// ---------------- STEP 2 ----------------
function loadStep2(){

    questionText.innerText =
        translations.question[selectedLanguage];

    speak(translations.question[selectedLanguage]);

    optionsContainer.innerHTML="";

    translations.options[selectedLanguage]
    .forEach((opt,idx)=>{

        const btn=document.createElement("button");
        btn.className="option-btn o"+(idx+1);
        btn.innerText=opt;
        btn.onclick=()=>showSuggestions(idx);

        optionsContainer.appendChild(btn);
    });
}

// ---------------- OUTPUT ----------------
function showSuggestions(idx){

    const sugg =
        translations.suggestions[selectedLanguage][idx];

    const title =
        translations.suggestionTitle[selectedLanguage];

    let html=`<h2>${title}</h2><ul>`;

    sugg.forEach(s=> html+=`<li>${s}</li>`);

    html+="</ul>";

    output.innerHTML=html;

    step2.classList.remove('active');
    output.classList.add('active');

    speak(title + " " + sugg.join(". "));
}