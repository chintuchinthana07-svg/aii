let selectedLanguage = 'en-US';

// All texts mapped by language
const translations = {
    "welcome": {
        "en-US": "Welcome to Mental and Emotional Checker – Your All-Time Therapy",
        "hi-IN": "मानसिक और भावनात्मक चेकर में आपका स्वागत है – आपकी सभी समय की चिकित्सा",
        "ta-IN": "மனச்சின்ன மற்றும் உணர்ச்சி சோதிப்பாளருக்கு வரவேற்கின்றோம் – உங்கள் அனைத்து நேரமும் சிகிச்சை",
        "ml-IN": "മെന്റൽ & എമോഷണൽ ചെക്കറിലേക്ക് സ്വാഗതം – നിങ്ങളുടെ ഓൾ ടൈം തെറാപ്പി"
    },
    "intro": {
        "en-US": "Caring for your mind and heart is just as important as caring for your body. Nurture your thoughts and embrace your feelings.",
        "hi-IN": "अपने मन और हृदय की देखभाल करना आपके शरीर की देखभाल के समान महत्वपूर्ण है। अपने विचारों को पोषित करें और अपनी भावनाओं को अपनाएं।",
        "ta-IN": "உங்கள் மனம் மற்றும் இதயத்தின் பராமரிப்பு உங்கள் உடலின் பராமரிப்புக்கு முக்கியமானது. உங்கள் எண்ணங்களை பராமரிக்கவும், உணர்வுகளை ஏற்றுக்கொள்ளவும்.",
        "ml-IN": "നിങ്ങളുടെ മനസ്സിനും ഹൃദയത്തിനും കരുതല് ശരീരത്തിനുള്ളതുപോലെയാണ്. നിങ്ങളുടെ ചിന്തകളെ പോഷണം നൽകുക, നിങ്ങളുടെ അനുഭവങ്ങളെ ഏറ്റെടുക്കുക."
    },
    "question": {
        "en-US": "Select how you are feeling today:",
        "hi-IN": "आज आप कैसा महसूस कर रहे हैं चुनें:",
        "ta-IN": "இன்று நீங்கள் எவ்வாறு உணர்கிறீர்கள் என்பதைத் தேர்ந்தெடுக்கவும்:",
        "ml-IN": "ഇന്ന് നിങ്ങൾ എങ്ങനെയാണ് അനുഭവപ്പെടുന്നത് തിരഞ്ഞെടുക്കുക:"
    },
    "options": {
        "en-US": [
            "Loneliness → no social interaction → sadness 🪑👵👴💬",
            "Loss of independence → feel like a burden 🏡🤝💛",
            "Health problems → stress, irritation ⚕️🧑‍🦳💤",
            "Memory issues → confusion, fear 🧠📖❓",
            "Loss of loved ones → emotional pain 🕯️💔🌹"
        ],
        "hi-IN": [
            "एकाकीपन → कोई सामाजिक संपर्क नहीं → उदासी 🪑👵👴💬",
            "स्वायत्तता की कमी → बोझ जैसा महसूस करना 🏡🤝💛",
            "स्वास्थ्य समस्याएँ → तनाव, चिड़चिड़ापन ⚕️🧑‍🦳💤",
            "स्मृति समस्याएँ → भ्रम, डर 🧠📖❓",
            "प्रियजनों की हानि → भावनात्मक पीड़ा 🕯️💔🌹"
        ],
        "ta-IN": [
            "தனிமை → சமூக தொடர்பு இல்லை → சோகம் 🪑👵👴💬",
            "சுயாதீனத்தை இழப்பு → புயல் போல் உணர்ச்சி 🏡🤝💛",
            "சுகாதார பிரச்சினைகள் → மன அழுத்தம், கடுமை ⚕️🧑‍🦳💤",
            "நினைவுப் பிரச்சினைகள் → குழப்பம், பயம் 🧠📖❓",
            "அன்புக்குரியவர்களை இழப்பு → மன உறவு வலி 🕯️💔🌹"
        ],
        "ml-IN": [
            "ഒറ്റപ്പെടൽ → സാമൂഹിക ഇടപെടൽ ഇല്ല → ദു:ഖം 🪑👵👴💬",
            "സ്വാതന്ത്ര്യം നഷ്ടപ്പെടൽ → ഭാരംപോലെ അനുഭവപ്പെടുന്നു 🏡🤝💛",
            "ആരോഗ്യ പ്രശ്നങ്ങൾ → സമ്മർദ്ദം, കോപം ⚕️🧑‍🦳💤",
            "മെമ്മറി പ്രശ്നങ്ങൾ → ആശങ്ക, ഭയം 🧠📖❓",
            "സ്നേഹിതരെ നഷ്ടപ്പെടൽ → മാനസിക വേദന 🕯️💔🌹"
        ]
    },
    "suggestions": {
        "en-US": [
            ["Call a family member or friend 📞👨‍👩‍👧‍👦","Spend 10–15 mins talking daily ☕🗣️","Join community clubs 🏡🤝"],
            ["Complete small household tasks independently 🖐️🧹","Do self-care routines 🧴👕🥣","Engage in crafts, gardening, knitting 🧵🌱"],
            ["Drink water, rest, walk or stretch 💧🛋️🧘‍♂️","Follow meal & sleep schedule ⏰🥗🛏️","Attend health sessions 👴"],
            ["Write reminders, read books or puzzles ✏️📖🧩","Memorize poems, songs, prayers 🗣️🎵","Family review tasks together 👨‍👩‍👧‍👦💬"],
            ["Sit quietly, light candle, listen to soft music 🕯️🎵🛋️","Look at old photos, write gratitude notes 📸📝💌","Talk with friends or support group 🌹🤝"]
        ]
        // For brevity, you can add Hindi/Tamil/Malayalam similarly
    }
};

// --- Utility: speak text ---
function speak(text){
    if('speechSynthesis' in window){
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = selectedLanguage;
        window.speechSynthesis.speak(utter);
    }
}

// --- Language selection ---
function selectLanguage(){
    selectedLanguage = document.getElementById('languageSelect').value;
    document.getElementById('languageScreen').classList.remove('active');
    document.getElementById('step1').classList.add('active');
    loadStep1();
}

// --- Step 1: Intro ---
function loadStep1(){
    const welcome = translations.welcome[selectedLanguage];
    const intro = translations.intro[selectedLanguage];
    document.getElementById('welcomeText').innerText = welcome;
    document.getElementById('introText').innerText = intro;
    speak(welcome + ". " + intro);
}

// --- Step 1 -> Step 2 ---
function nextStep(){
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    loadStep2();
}

// --- Step 2: Emotion selection ---
function loadStep2(){
    document.getElementById('questionText').innerText = translations.question[selectedLanguage];
    speak(translations.question[selectedLanguage]);
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = "";
    translations.options[selectedLanguage].forEach((opt, idx)=>{
        const btn = document.createElement('button');
        btn.className = "option-btn o"+(idx+1);
        btn.innerText = opt;
        btn.onclick = ()=>showSuggestions(idx);
        optionsContainer.appendChild(btn);
    });
}

// --- Show suggestions ---
function showSuggestions(idx){
    const sugg = translations.suggestions[selectedLanguage][idx];
    const outputDiv = document.getElementById('output');
    let html = "<h2>Suggestions:</h2><ul>";
    sugg.forEach(s=> html += "<li>"+s+"</li>");
    html += "</ul>";
    outputDiv.innerHTML = html;
    document.getElementById('step2').classList.remove('active');
    outputDiv.classList.add('active');
    speak("Here are some suggestions: " + sugg.join(". "));
}