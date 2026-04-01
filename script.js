// ================= LANGUAGE =================
let selectedLanguage = 'en-US';

// ================= TRANSLATIONS =================
const translations = {

welcome:{
"en-US":"Welcome to Mental and Emotional Checker – Your All-Time Therapy",
"hi-IN":"मानसिक और भावनात्मक चेकर में आपका स्वागत है – आपकी सभी समय की चिकित्सा",
"ta-IN":"மனச்சின்ன மற்றும் உணர்ச்சி சோதிப்பாளருக்கு வரவேற்கின்றோம் – உங்கள் அனைத்து நேரமும் சிகிச்சை",
"ml-IN":"മെന്റൽ & എമോഷണൽ ചെക്കറിലേക്ക് സ്വാഗതം – നിങ്ങളുടെ ഓൾ ടൈം തെറാപ്പി",
"kn-IN":"ಮಾನಸಿಕ ಮತ್ತು ಭಾವನಾತ್ಮಕ ಪರಿಶೀಲಕಕ್ಕೆ ಸ್ವಾಗತ – ನಿಮ್ಮ ಸದಾ ಚಿಕಿತ್ಸೆ",
"te-IN":"మానసిక మరియు భావోద్వేగ పరిశీలకానికి స్వాగతం – మీ అన్ని సమయాల చికిత్స"
},

intro:{
"en-US":"Caring for your mind and heart is just as important as caring for your body. Nurture your thoughts and embrace your feelings.",
"hi-IN":"अपने मन और हृदय की देखभाल करना आपके शरीर की देखभाल के समान महत्वपूर्ण है।",
"ta-IN":"உங்கள் மனம் மற்றும் இதயத்தின் பராமரிப்பு முக்கியமானது.",
"ml-IN":"നിങ്ങളുടെ മനസ്സിനും ഹൃദയത്തിനും കരുതല് ശരീരത്തിനുള്ളതുപോലെ പ്രധാനമാണ്.",
"kn-IN":"ನಿಮ್ಮ ಮನಸ್ಸು ಮತ್ತು ಹೃದಯದ ಆರೈಕೆ ನಿಮ್ಮ ದೇಹದ ಆರೈಕೆಯಷ್ಟೇ ಮುಖ್ಯವಾಗಿದೆ.",
"te-IN":"మీ మనస్సు మరియు హృదయాన్ని సంరక్షించడం మీ శరీరాన్ని సంరక్షించడం ఎంత ముఖ్యమో అంతే ముఖ్యమైనది."
},

question:{
"en-US":"Select how you are feeling today:",
"hi-IN":"आज आप कैसा महसूस कर रहे हैं चुनें:",
"ta-IN":"இன்று நீங்கள் எவ்வாறு உணர்கிறீர்கள் என்பதைத் தேர்ந்தெடுக்கவும்:",
"ml-IN":"ഇന്ന് നിങ്ങൾ എങ്ങനെയാണ് അനുഭവപ്പെടുന്നത് തിരഞ്ഞെടുക്കുക:",
"kn-IN":"ಇಂದು ನೀವು ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ ಆಯ್ಕೆಮಾಡಿ:",
"te-IN":"ఈరోజు మీరు ఎలా అనుభవిస్తున్నారో ఎంచుకోండి:"
},

suggestionTitle:{
"en-US":"Suggestions:",
"hi-IN":"सुझाव:",
"ta-IN":"பரிந்துரைகள்:",
"ml-IN":"നിർദ്ദേശങ്ങൾ:",
"kn-IN":"ಸಲಹೆಗಳು:",
"te-IN":"సూచనలు:"
},

options:{
"en-US":[
"Loneliness → no social interaction → sadness 🪑👵👴💬",
"Loss of independence → feel like a burden 🏡🤝💛",
"Health problems → stress, irritation ⚕️🧑‍🦳💤",
"Memory issues → confusion, fear 🧠📖❓",
"Loss of loved ones → emotional pain 🕯️💔🌹"
],
"kn-IN":[
"ಏಕಾಂತ → ಸಾಮಾಜಿಕ ಸಂಪರ್ಕ ಇಲ್ಲ → ದುಃಖ",
"ಸ್ವಾತಂತ್ರ್ಯ ಕಳೆದುಕೊಳ್ಳುವುದು → ಭಾರವಾದ ಅನುಭವ",
"ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು → ಒತ್ತಡ",
"ಸ್ಮರಣೆ ಸಮಸ್ಯೆಗಳು → ಗೊಂದಲ",
"ಪ್ರಿಯರನ್ನು ಕಳೆದುಕೊಳ್ಳುವುದು → ಭಾವನಾತ್ಮಕ ನೋವು"
]
},

suggestions:{
"en-US":[
["Call a family member 📞","Talk daily ☕","Join community clubs 🤝"],
["Do small tasks independently 🧹","Self-care routines 🧴","Gardening or crafts 🌱"],
["Drink water & rest 💧","Maintain sleep schedule ⏰","Attend health sessions 👴"],
["Write reminders ✏️","Solve puzzles 🧩","Family discussions 👨‍👩‍👧‍👦"],
["Listen to calm music 🎵","Look at old photos 📸","Talk with friends 🌹"]
],

"kn-IN":[
["ಕುಟುಂಬ ಸದಸ್ಯರಿಗೆ ಕರೆ ಮಾಡಿ","ಪ್ರತಿದಿನ ಮಾತನಾಡಿ","ಸಮುದಾಯ ಗುಂಪಿನಲ್ಲಿ ಸೇರಿ"],
["ಸಣ್ಣ ಕೆಲಸಗಳನ್ನು ಸ್ವತಃ ಮಾಡಿ","ಸ್ವಯಂ ಆರೈಕೆ ಮಾಡಿ","ತೋಟಗಾರಿಕೆ ಮಾಡಿ"],
["ನೀರು ಕುಡಿಯಿರಿ ಮತ್ತು ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ","ನಿದ್ರೆ ಸಮಯ ಪಾಲಿಸಿ","ಆರೋಗ್ಯ ತಪಾಸಣೆ ಮಾಡಿ"],
["ರಿಮೈಂಡರ್ ಬರೆಯಿರಿ","ಪಜಲ್ ಆಡಿರಿ","ಕುಟುಂಬದೊಂದಿಗೆ ಮಾತನಾಡಿ"],
["ಶಾಂತ ಸಂಗೀತ ಕೇಳಿ","ಹಳೆಯ ಫೋಟೋ ನೋಡಿ","ಸ್ನೇಹಿತರೊಂದಿಗೆ ಮಾತನಾಡಿ"]
]
}
};



// ================= VOICE SYSTEM =================
let availableVoices = [];

// Load voices safely
function loadVoices(){
    availableVoices = speechSynthesis.getVoices();
}

speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function speak(text){

    if(!('speechSynthesis' in window)) return;

    speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);

    // exact match
    let voiceMatch = availableVoices.find(v =>
        v.lang.toLowerCase() === selectedLanguage.toLowerCase()
    );

    // fallback language match
    if(!voiceMatch){
        voiceMatch = availableVoices.find(v =>
            v.lang.startsWith(selectedLanguage.split('-')[0])
        );
    }

    if(voiceMatch){
        utter.voice = voiceMatch;
        utter.lang = voiceMatch.lang;
    } else {
        utter.lang = selectedLanguage;
    }

    utter.rate = 0.9;   // slower (elder-friendly)
    utter.pitch = 1;

    speechSynthesis.speak(utter);
}



// ================= LANGUAGE SELECT =================
function selectLanguage(){

    selectedLanguage =
        document.getElementById('languageSelect').value;

    document.getElementById('languageScreen')
        .classList.remove('active');

    document.getElementById('step1')
        .classList.add('active');

    loadStep1();
}



// ================= STEP 1 =================
function loadStep1(){

    const welcome =
        translations.welcome[selectedLanguage];

    const intro =
        translations.intro[selectedLanguage];

    welcomeText.innerText = welcome;
    introText.innerText = intro;

    speak(welcome + ". " + intro);
}



// ================= NEXT STEP =================
function nextStep(){

    step1.classList.remove('active');
    step2.classList.add('active');

    loadStep2();
}



// ================= STEP 2 =================
function loadStep2(){

    questionText.innerText =
        translations.question[selectedLanguage];

    speak(translations.question[selectedLanguage]);

    optionsContainer.innerHTML="";

    translations.options[selectedLanguage]
    .forEach((opt,idx)=>{

        const btn=document.createElement("button");
        btn.className="option-btn";
        btn.innerText=opt;

        btn.onclick=()=>showSuggestions(idx);

        optionsContainer.appendChild(btn);
    });
}



// ================= OUTPUT =================
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