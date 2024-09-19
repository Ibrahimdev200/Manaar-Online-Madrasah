const questions = [
    {
        question: "What is the holy book of Islam?",
        options: ["Quran", "Bible", "Torah", "Vedas"],
        answer: "Quran",
    },
    {
        question: "How many pillars of Islam are there?",
        options: ["5", "6", "7", "4"],
        answer: "5",
    },
    {
        question: "Who was the last prophet in Islam?",
        options: ["Moses", "Jesus", "Muhammad", "Abraham"],
        answer: "Muhammad",
    },
    {
        question: "What is the direction Muslims pray towards?",
        options: ["East", "West", "North", "South"],
        answer: "East",
    },
    {
        question: "What is the month of fasting in Islam?",
        options: ["Ramadan", "Shawwal", "Dhu al-Hijjah", "Muharram"],
        answer: "Ramadan",
    },
    {
        question: "What is the term for the community of Muslims?",
        options: ["Ummah", "Sunnah", "Hadith", "Sharia"],
        answer: "Ummah",
    },
    {
        question: "What is the call to prayer called?",
        options: ["Adhan", "Iqamah", "Salah", "Zakat"],
        answer: "Adhan",
    },
    {
        question: "What is the pilgrimage to Mecca called?",
        options: ["Hajj", "Umrah", "Zakat", "Sawm"],
        answer: "Hajj",
    },
    {
        question: "What is the term for charity in Islam?",
        options: ["Zakat", "Sadaqah", "Khums", "Fitr"],
        answer: "Zakat",
    },
    {
        question: "What is the first month of the Islamic calendar?",
        options: ["Muharram", "Safar", "Rabi' al-Awwal", "Ramadan"],
        answer: "Muharram",
    },

    {
        question: "What is the holy book of Islam?",
        options: ["Quran", "Hadith", "Tafsir", "Sunnah"],
        answer: "Quran"
    },
    {
        question: "How many chapters are there in the Quran?",
        options: ["114", "30", "100", "66"],
        answer: "114"
    },
    {
        question: "What is the Arabic term for God in Islam?",
        options: ["Allah", "Rab", "Ilah", "Tawhid"],
        answer: "Allah"
    },
    {
        question: "What is the term for the sayings and actions of the Prophet Muhammad?",
        options: ["Hadith", "Quran", "Sunnah", "Sharia"],
        answer: "Hadith"
    },
    {
        question: "What does the term 'Islam' mean?",
        options: ["Submission", "Peace", "Faith", "Worship"],
        answer: "Submission"
    },
    {
        question: "What is the second pillar of Islam?",
        options: ["Sawm", "Zakat", "Salat", "Shahada"],
        answer: "Salat"
    },
    {
        question: "What is the month of fasting in Islam?",
        options: ["Ramadan", "Shawwal", "Muharram", "Rabi' al-Awwal"],
        answer: "Ramadan"
    },
    {
        question: "What is the term for the community of Muslims?",
        options: ["Ummah", "Sahabah", "Masjid", "Jama'ah"],
        answer: "Ummah"
    },
    {
        question: "What is the name of the angel who revealed the Quran to Muhammad?",
        options: ["Gabriel", "Michael", "Raphael", "Azrael"],
        answer: "Gabriel"
    },
    {
        question: "What is the term for the pilgrimage to Medina?",
        options: ["Hajj", "Umrah", "Ziyarat", "Sadaqah"],
        answer: "Umrah"
    },
    {
        question: "What is the term for fasting during Ramadan?",
        options: ["Sawm", "Zakat", "Hajj", "Salat"],
        answer: "Sawm"
    },
    {
        question: "What is the term for the annual almsgiving?",
        options: ["Zakat", "Sadaqah", "Khums", "Fitr"],
        answer: "Zakat"
    },
    {
        question: "What is the last month of the Islamic calendar?",
        options: ["Dhu al-Hijjah", "Ramadan", "Muharram", "Shawwal"],
        answer: "Dhu al-Hijjah"
    },
    {
        question: "What is the term for the declaration of faith in Islam?",
        options: ["Shahada", "Salat", "Zakat", "Sawm"],
        answer: "Shahada"
    },
    {
        question: "Which city is considered the holiest in Islam?",
        options: ["Mecca", "Medina", "Jerusalem", "Cairo"],
        answer: "Mecca"
    },
    {
        question: "What is the name of the Islamic law derived from the Quran and Hadith?",
        options: ["Sharia", "Fiqh", "Tafsir", "Sunnah"],
        answer: "Sharia"
    },
    {
        question: "What is the term for the struggle or effort in the way of God?",
        options: ["Jihad", "Sadaqah", "Umrah", "Hajj"],
        answer: "Jihad"
    },
    {
        question: "What does the term 'Halal' mean?",
        options: ["Permissible", "Forbidden", "Recommended", "Obligatory"],
        answer: "Permissible"
    },
    {
        question: "What is the term for the prohibited food in Islam?",
        options: ["Halal", "Zabiha", "Harām", "Tayyib"],
        answer: "Harām"
    },
    {
        question: "What is the direction Muslims face during prayer?",
        options: ["Qibla", "Masjid", "Kaaba", "Salah"],
        answer: "Qibla"
    },
    {
        question: "What is the first revelation received by Prophet Muhammad?",
        options: ["Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Alaq", "Surah Al-Baqarah"],
        answer: "Surah Al-Alaq"
    },
    {
        question: "Who was the first person to accept Islam?",
        options: ["Khadijah", "Abu Bakr", "Ali", "Umar"],
        answer: "Khadijah"
    },
    {
        question: "What is the term for the community of believers?",
        options: ["Ummah", "Masjid", "Sahabah", "Sunnah"],
        answer: "Ummah"
    },
    {
        question: "What is the term for the call to prayer?",
        options: ["Adhan", "Iqamah", "Salah", "Zakat"],
        answer: "Adhan"
    },
    {
        question: "What is the term for the Friday prayer in Islam?",
        options: ["Jumu'ah", "Salat", "Eid", "Tahajjud"],
        answer: "Jumu'ah"
    },
    {
        question: "What is the term for the annual festival of breaking the fast?",
        options: ["Eid al-Fitr", "Eid al-Adha", "Ramadan", "Hajj"],
        answer: "Eid al-Fitr"
    },
    {
        question: "What does the term 'Sadaqah' refer to?",
        options: ["Voluntary charity", "Obligatory charity", "Fasting", "Praying"],
        answer: "Voluntary charity"
    },
    {
        question: "What is the term for the festival of sacrifice?",
        options: ["Eid al-Adha", "Eid al-Fitr", "Mawlid", "Ashura"],
        answer: "Eid al-Adha"
    },
    {
        question: "What is the term for the night journey of the Prophet Muhammad?",
        options: ["Isra and Mi'raj", "Hijrah", "Badr", "Uhud"],
        answer: "Isra and Mi'raj"
    },
    {
        question: "What is the term for the Islamic creed?",
        options: ["Aqidah", "Fiqh", "Sunnah", "Hadith"],
        answer: "Aqidah"
    },
    {
        question: "What is the term for the religious leaders in Islam?",
        options: ["Imam", "Sheikh", "Mufti", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the term for the practice of giving 20% of savings to charity?",
        options: ["Khums", "Zakat", "Sadaqah", "Fitr"],
        answer: "Khums"
    },
    {
        question: "What is the term for the community prayer in Islam?",
        options: ["Salah", "Salat", "Jama'ah", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the main purpose of fasting in Ramadan?",
        options: ["To lose weight", "To gain knowledge", "To develop self-discipline", "To socialize"],
        answer: "To develop self-discipline"
    },
    {
        question: "What is the term for the scripture that includes the sayings of the Prophet?",
        options: ["Hadith", "Quran", "Tafsir", "Sunnah"],
        answer: "Hadith"
    },
    {
        question: "What is the term for the Islamic New Year?",
        options: ["Muharram", "Shawwal", "Rabi' al-Awwal", "Dhu al-Hijjah"],
        answer: "Muharram"
    },
    {
        question: "What is the term for the Islamic practice of purification before prayer?",
        options: ["Wudu", "Ghusl", "Tayammum", "Zakat"],
        answer: "Wudu"
    },
    {
        question: "What is the term for the ritual washing before prayer?",
        options: ["Wudu", "Ghusl", "Salah", "Zakat"],
        answer: "Wudu"
    },
    {
        question: "What is the term for the greater jihad?",
        options: ["Struggle against oneself", "Struggle against enemies", "Struggle for justice", "Struggle for knowledge"],
        answer: "Struggle against oneself"
    },
    {
        question: "What is the term for the lesser jihad?",
        options: ["Struggle against oneself", "Struggle against enemies", "Struggle for justice", "Struggle for knowledge"],
        answer: "Struggle against enemies"
    },
    {
        question: "What does 'Bismillah' mean?",
        options: ["In the name of Allah", "Praise be to Allah", "Thank you, Allah", "Allahu Akbar"],
        answer: "In the name of Allah"
    },
    {
        question: "What is the term for the last prophet in Islam?",
        options: ["Isa", "Musa", "Muhammad", "Ibrahim"],
        answer: "Muhammad"
    },
    {
        question: "What is the term for the Islamic practice of seeking knowledge?",
        options: ["Ilm", "Sharia", "Fiqh", "Sunnah"],
        answer: "Ilm"
    },
    {
        question: "What is the name of the first Islamic state established by Prophet Muhammad?",
        options: ["Medina", "Mecca", "Kufa", "Damascus"],
        answer: "Medina"
    },
    {
        question: "What is the term for the community of companions of the Prophet?",
        options: ["Sahabah", "Tabi'un", "Ahl al-Bayt", "Ummah"],
        answer: "Sahabah"
    },
    {
        question: "What is the term for the Islamic practice of remembrance of Allah?",
        options: ["Dhikr", "Dua", "Salah", "Sadaqah"],
        answer: "Dhikr"
    },
    {
        question: "What is the term for the Islamic practice of supplication?",
        options: ["Dua", "Dhikr", "Salah", "Zakat"],
        answer: "Dua"
    },
    {
        question: "What is the term for the Islamic practice of seeking forgiveness?",
        options: ["Tawbah", "Istighfar", "Zakat", "Sadaqah"],
        answer: "Istighfar"
    },
    {
        question: "What is the term for the Islamic concept of divine decree?",
        options: ["Qadar", "Taqwa", "Sunnah", "Aqidah"],
        answer: "Qadar"
    },
    {
        question: "What is the term for the Islamic practice of fasting during the month of Sha'ban?",
        options: ["Nafl", "Sawm", "Ramadan", "Zakat"],
        answer: "Nafl"
    },
    {
        question: "What is the term for the Islamic practice of performing good deeds?",
        options: ["Amal", "Sadaqah", "Zakat", "Hajj"],
        answer: "Amal"
    },
    {
        question: "What is the term for the Islamic practice of kindness and compassion?",
        options: ["Rahma", "Sadaqah", "Zakat", "Hajj"],
        answer: "Rahma"
    },
    {
        question: "What is the term for the Islamic concept of accountability on the Day of Judgment?",
        options: ["Hisab", "Qiyamah", "Jannah", "Naar"],
        answer: "Hisab"
    },
    {
        question: "What is the term for the Islamic concept of paradise?",
        options: ["Jannah", "Naar", "Dunya", "Akhirah"],
        answer: "Jannah"
    },
    {
        question: "What is the term for the Islamic concept of hell?",
        options: ["Naar", "Jannah", "Dunya", "Akhirah"],
        answer: "Naar"
    },
    {
        question: "What is the term for the Islamic concept of the afterlife?",
        options: ["Akhirah", "Dunya", "Jannah", "Naar"],
        answer: "Akhirah"
    },
    {
        question: "What is the term for the Islamic practice of praying at night?",
        options: ["Tahajjud", "Witr", "Fajr", "Isha"],
        answer: "Tahajjud"
    },
    {
        question: "What is the term for the Islamic prayer performed before dawn?",
        options: ["Fajr", "Dhuhr", "Asr", "Isha"],
        answer: "Fajr"
    },
    {
        question: "What is the term for the Islamic prayer performed after midday?",
        options: ["Dhuhr", "Asr", "Maghrib", "Isha"],
        answer: "Dhuhr"
    },
    {
        question: "What is the term for the Islamic prayer performed in the late afternoon?",
        options: ["Asr", "Dhuhr", "Maghrib", "Isha"],
        answer: "Asr"
    },
    {
        question: "What is the term for the Islamic prayer performed after sunset?",
        options: ["Maghrib", "Isha", "Fajr", "Dhuhr"],
        answer: "Maghrib"
    },
    {
        question: "What is the term for the Islamic prayer performed at night?",
        options: ["Isha", "Fajr", "Dhuhr", "Asr"],
        answer: "Isha"
    },
    {
        question: "What is the term for the Islamic practice of performing extra prayers?",
        options: ["Nafl", "Sunnah", "Witr", "Tahajjud"],
        answer: "Nafl"
    },
    {
        question: "What is the term for the Islamic practice of performing the funeral prayer?",
        options: ["Salat al-Janazah", "Salat al-Tahajjud", "Salat al-Eid", "Salat al-Maghrib"],
        answer: "Salat al-Janazah"
    },
    {
        question: "What is the term for the Islamic practice of seeking knowledge?",
        options: ["Ilm", "Zakat", "Sadaqah", "Hajj"],
        answer: "Ilm"
    },
    {
        question: "What is the term for the Islamic concept of self-restraint?",
        options: ["Taqwa", "Sabr", "Shukr", "Ikhlas"],
        answer: "Taqwa"
    },
    {
        question: "What is the term for the Islamic concept of patience?",
        options: ["Sabr", "Taqwa", "Shukr", "Ikhlas"],
        answer: "Sabr"
    },
    {
        question: "What is the term for the Islamic concept of gratitude?",
        options: ["Shukr", "Sabr", "Taqwa", "Ikhlas"],
        answer: "Shukr"
    },
    {
        question: "What is the term for the Islamic concept of sincerity?",
        options: ["Ikhlas", "Taqwa", "Sabr", "Shukr"],
        answer: "Ikhlas"
    },
    {
        question: "What is the term for the Islamic practice of performing good deeds?",
        options: ["Amal", "Zakat", "Sadaqah", "Hajj"],
        answer: "Amal"
    },
    {
        question: "What is the term for the Islamic concept of brotherhood?",
        options: ["Ukhuwwah", "Sahabah", "Ummah", "Jama'ah"],
        answer: "Ukhuwwah"
    },
    {
        question: "What is the term for the Islamic practice of seeking forgiveness?",
        options: ["Tawbah", "Istighfar", "Zakat", "Sadaqah"],
        answer: "Istighfar"
    },
    {
        question: "What is the term for the Islamic practice of performing pilgrimage?",
        options: ["Hajj", "Umrah", "Ziyarat", "Sadaqah"],
        answer: "Hajj"
    },
    {
        question: "What is the term for the Islamic concept of divine justice?",
        options: ["Adl", "Ihsan", "Taqwa", "Sabr"],
        answer: "Adl"
    },
    {
        question: "What is the term for the Islamic practice of performing extra prayers?",
        options: ["Nafl", "Sunnah", "Witr", "Tahajjud"],
        answer: "Nafl"
    },
    {
        question: "What is the term for the Islamic practice of reciting the Quran?",
        options: ["Tilawah", "Dhikr", "Dua", "Salah"],
        answer: "Tilawah"
    },
    {
        question: "What is the term for the Islamic concept of unity?",
        options: ["Wahdah", "Ikhtilaf", "Tafriq", "Firaq"],
        answer: "Wahdah"
    },
    {
        question: "What is the term for the Islamic concept of moderation?",
        options: ["Wasatiyyah", "Iqtisad", "Ihsan", "Adl"],
        answer: "Wasatiyyah"
    },
    

    
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const totalQuestions = 20;

document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("play-again").addEventListener("click", playAgain);
document.getElementById("exit").addEventListener("click", () => {
    window.location.reload();
});

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("start-button").classList.add("hidden");
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
    document.getElementById("next-button").classList.add("hidden");
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    let timeLeft = 300; // 5 minutes
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("score").innerText = `${score} out of ${totalQuestions}`;
    displayAdvice();
}

function displayAdvice() {
    let advice;
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) {
        advice = "Excellent! You have great knowledge of Islam! 🌟";
    } else if (percentage >= 70) {
        advice = "Good job! Keep learning more! 📚";
    } else if (percentage >= 50) {
        advice = "Not bad! A bit more study will help! 🤔";
    } else {
        advice = "Don't give up! Keep trying and learning! 💪";
    }
    document.getElementById("advice").innerText = advice;
}



function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("score").innerText = `${score} out of ${totalQuestions}`;
    displayAdvice();
}


function playAgain() {
    // Reset the game state
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = shuffleArray(questions); // Shuffle questions again
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("start-button").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    loadQuestion(); // Load the first question
    startTimer(); // Restart the timer
}



document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('hidden');
});

const shuffledQuestions = shuffleArray(questions);

// Display the questions
shuffledQuestions.forEach((q, index) => {
    console.log(`${index + 1}. ${q.question}`);
    q.options.forEach((option, i) => {
        console.log(`   ${String.fromCharCode(65 + i)}. ${option}`);
    });
});