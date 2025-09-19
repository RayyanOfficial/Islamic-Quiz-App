const quiz = [
    {
        question: "Who was the last Prophet in Islam?",
        options: ["Prophet Musa", "Prophet Isa", "Prophet Muhammad", "Prophet Ibrahim"],
        correctAnswer: "Prophet Muhammad"
    },
    {
        question: "What is the holy book of Islam called?",
        options: ["Bible", "Quran", "Torah", "Zabur"],
        correctAnswer: "Quran"
    },
    {
        question: "How many times a day do Muslims pray?",
        options: [3, 5, 7, 4],
        correctAnswer: 5
    },
    {
        question: "What is the pilgrimage to Mecca called?",
        options: ["Hajj", "Umrah", "Zakat", "Sawm"],
        correctAnswer: "Hajj"
    },
    {
        question: "Which month is fasting observed in Islam?",
        options: ["Ramadan", "Muharram", "Shawwal", "Dhul-Hijjah"],
        correctAnswer: "Ramadan"
    },
    {
        question: "What is the name of the mosque in Mecca?",
        options: ["Al-Masjid an-Nabawi", "Al-Aqsa Mosque", "Masjid al-Haram", "Sultan Ahmed Mosque"],
        correctAnswer: "Masjid al-Haram"
    },
    {
        question: "Who was the first Caliph after Prophet Muhammad (PBUH)?",
        options: ["Umar ibn Al-Khattab", "Abu Bakr", "Ali ibn Abi Talib", "Uthman ibn Affan"],
        correctAnswer: "Abu Bakr"
    },
    {
        question: "What is Zakat in Islam?",
        options: ["Fasting", "Pilgrimage", "Charity", "Prayer"],
        correctAnswer: "Charity"
    },
    {
        question: "What is the meaning of 'Islam'?",
        options: ["Peace", "Submission to God", "Faith", "Prayer"],
        correctAnswer: "Submission to God"
    },
    {
        question: "Which angel brought revelation to Prophet Muhammad?",
        options: ["Angel Jibril", "Angel Mikail", "Angel Israfil", "Angel Azrael"],
        correctAnswer: "Angel Jibril"
    }
];


var currentQuestion = 0;
var score = 0;
var correctCount = 0;
var wrongCount = 0;
var scoreElement = document.getElementById("score");

function renderQuestions() {
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz[currentQuestion].question;

    var quizOptions = document.getElementById("quizOption");
    quizOptions.innerHTML = '';

    for (var i = 0; i < quiz[currentQuestion].options.length; i++) {
        quizOptions.innerHTML += `<li onclick="checkCorrect(event)">${quiz[currentQuestion].options[i]}</li>`;
    }

    if (currentQuestion === quiz.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("finishBtn").style.display = "inline-block";
    } else {
        document.getElementById("nextBtn").style.display = "inline-block";
        document.getElementById("finishBtn").style.display = "none";
    }
}

function goToNext() {
    currentQuestion++;
    renderQuestions();
}

function checkCorrect(event) {
    if (quiz[currentQuestion].correctAnswer == event.target.innerHTML) {
        event.target.style.backgroundColor = "green";
        event.target.style.color = "white";
        score += 10;
        correctCount++;
    } else {
        event.target.style.backgroundColor = "red";
        event.target.style.color = "white";
        wrongCount++;
    }
    scoreElement.innerHTML = score;

    // Disable options after selection
    var options = document.querySelectorAll("#quizOption li");
    options.forEach(opt => opt.style.pointerEvents = "none");
}
function showResult() {
    // Calculate percentage
    const totalQuestions = quiz.length;
    const maxScore = totalQuestions * 10;
    const percentage = (score / maxScore) * 100;

    // Determine performance message based on score
    let performanceMsg = "";
    if (percentage >= 90) {
        performanceMsg = "Excellent work! 🌟";
    } else if (percentage >= 70) {
        performanceMsg = "Good job! 👍";
    } else if (percentage >= 50) {
        performanceMsg = "Fair effort, keep practicing!";
    } else {
        performanceMsg = "Needs improvement. Don't give up!";
    }

    // Result HTML with styling
    document.getElementById("result").innerHTML = `
        <div style="text-align:center; padding:20px; border: 2px solid #4CAF50; border-radius: 10px; background: #f9fff9;">
            <h2 style="color:#4CAF50;">🎉 Quiz Completed!</h2>
            <p style="font-size: 18px;">${performanceMsg}</p>
            <hr style="border:1px solid #4CAF50; width: 60%; margin: 10px auto;">
            <p><b>Total Score:</b> ${score} / ${maxScore}</p>
            <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
            <p><b>Total Questions:</b> ${totalQuestions}</p>
            <p><b>Correct Answers:</b> ${correctCount}</p>
            <p><b>Wrong Answers:</b> ${wrongCount}</p>
        </div>
    `;

    // Hide quiz elements
    document.getElementById("question").style.display = "none";
    document.getElementById("quizOption").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("finishBtn").style.display = "none";
    document.getElementById("image").style.display = "inline-block";
    document.getElementById("scores").style.display = "none";
    document.getElementById("score").style.display = "none";
}
function showResult() {
    const max = quiz.length * 10;
    const percent = (score / max) * 100;
    const msg = percent >= 90 ? "Excellent work! 🌟" :
                percent >= 70 ? "Good job! 👍" :
                percent >= 50 ? "Fair effort, keep practicing!" :
                "Needs improvement. Don't give up!";
  
    document.getElementById("result").innerHTML = `
      <div style="text-align:center; padding:20px; border:2px solid #4CAF50; border-radius:10px; background:#f9fff9;">
        <h2 style="color:#4CAF50;">🎉 Quiz Completed!</h2>
        <p style="font-size:18px;">${msg}</p>
        <hr style="border:1px solid #4CAF50; width:60%; margin:10px auto;">
        <p><b>Score:</b> ${score} / ${max}</p>
        <p><b>Percentage:</b> ${percent.toFixed(2)}%</p>
        <p><b>Questions:</b> ${quiz.length}</p>
        <p><b>Correct:</b> ${correctCount}</p>
        <p><b>Wrong:</b> ${wrongCount}</p>
      </div>`;
  
    ["question", "quizOption", "nextBtn", "finishBtn", "scores", "score"].forEach(id => 
      document.getElementById(id).style.display = "none"
    );
    document.getElementById("image").style.display = "inline-block";
  }
  
// function showResult() {
//     document.getElementById("result").innerHTML = `
//         🎉 Quiz Finished! <br>
//         ✅ Total Score: <b>${score}</b> / ${quiz.length * 10} <br>
//         ❓ Total Questions: <b>${quiz.length}</b> <br>
//         ✅ Correct Answers: <b>${correctCount}</b> <br>
//         ❌ Wrong Answers: <b>${wrongCount}</b>`;
//     document.getElementById("question").style.display = "none";
//     document.getElementById("quizOption").style.display = "none";
//     document.getElementById("nextBtn").style.display = "none";
//     document.getElementById("finishBtn").style.display = "none";
//     document.getElementById("image").style.display = "inline-block";
//     document.getElementById("scores").style.display = "none";
//     document.getElementById("score").style.display = "none";
// }

renderQuestions();