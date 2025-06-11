// Data Karakter Jepang
const japaneseData = {
  hiragana: [
    { char: "あ", romaji: "a" },
    { char: "い", romaji: "i" },
    { char: "う", romaji: "u" },
    { char: "え", romaji: "e" },
    { char: "お", romaji: "o" },
    { char: "か", romaji: "ka" },
    { char: "き", romaji: "ki" },
    { char: "く", romaji: "ku" },
    { char: "け", romaji: "ke" },
    { char: "こ", romaji: "ko" },
    { char: "さ", romaji: "sa" },
    { char: "し", romaji: "shi" },
    { char: "す", romaji: "su" },
    { char: "せ", romaji: "se" },
    { char: "そ", romaji: "so" },
    { char: "た", romaji: "ta" },
    { char: "ち", romaji: "chi" },
    { char: "つ", romaji: "tsu" },
    { char: "て", romaji: "te" },
    { char: "と", romaji: "to" },
    { char: "な", romaji: "na" },
    { char: "に", romaji: "ni" },
    { char: "ぬ", romaji: "nu" },
    { char: "ね", romaji: "ne" },
    { char: "の", romaji: "no" },
    { char: "は", romaji: "ha" },
    { char: "ひ", romaji: "hi" },
    { char: "ふ", romaji: "fu" },
    { char: "へ", romaji: "he" },
    { char: "ほ", romaji: "ho" },
    { char: "ま", romaji: "ma" },
    { char: "み", romaji: "mi" },
    { char: "む", romaji: "mu" },
    { char: "め", romaji: "me" },
    { char: "も", romaji: "mo" },
    { char: "や", romaji: "ya" },
    { char: "ゆ", romaji: "yu" },
    { char: "よ", romaji: "yo" },
    { char: "ら", romaji: "ra" },
    { char: "り", romaji: "ri" },
    { char: "る", romaji: "ru" },
    { char: "れ", romaji: "re" },
    { char: "ろ", romaji: "ro" },
    { char: "わ", romaji: "wa" },
    { char: "を", romaji: "wo" },
    { char: "ん", romaji: "n" },
  ],
  katakana: [
    { char: "ア", romaji: "a" },
    { char: "イ", romaji: "i" },
    { char: "ウ", romaji: "u" },
    { char: "エ", romaji: "e" },
    { char: "オ", romaji: "o" },
    { char: "カ", romaji: "ka" },
    { char: "キ", romaji: "ki" },
    { char: "ク", romaji: "ku" },
    { char: "ケ", romaji: "ke" },
    { char: "コ", romaji: "ko" },
    { char: "サ", romaji: "sa" },
    { char: "シ", romaji: "shi" },
    { char: "ス", romaji: "su" },
    { char: "セ", romaji: "se" },
    { char: "ソ", romaji: "so" },
    { char: "タ", romaji: "ta" },
    { char: "チ", romaji: "chi" },
    { char: "ツ", romaji: "tsu" },
    { char: "テ", romaji: "te" },
    { char: "ト", romaji: "to" },
    { char: "ナ", romaji: "na" },
    { char: "ニ", romaji: "ni" },
    { char: "ヌ", romaji: "nu" },
    { char: "ネ", romaji: "ne" },
    { char: "ノ", romaji: "no" },
    { char: "ハ", romaji: "ha" },
    { char: "ヒ", romaji: "hi" },
    { char: "フ", romaji: "fu" },
    { char: "ヘ", romaji: "he" },
    { char: "ホ", romaji: "ho" },
    { char: "マ", romaji: "ma" },
    { char: "ミ", romaji: "mi" },
    { char: "ム", romaji: "mu" },
    { char: "メ", romaji: "me" },
    { char: "モ", romaji: "mo" },
    { char: "ヤ", romaji: "ya" },
    { char: "ユ", romaji: "yu" },
    { char: "ヨ", romaji: "yo" },
    { char: "ラ", romaji: "ra" },
    { char: "リ", romaji: "ri" },
    { char: "ル", romaji: "ru" },
    { char: "レ", romaji: "re" },
    { char: "ロ", romaji: "ro" },
    { char: "ワ", romaji: "wa" },
    { char: "ヲ", romaji: "wo" },
    { char: "ン", romaji: "n" },
  ],
  kanji: [
    { char: "日", romaji: "にち / ひ", meaning: "hari, matahari" },
    { char: "人", romaji: "じん / ひと", meaning: "orang" },
    { char: "水", romaji: "すい / みず", meaning: "air" },
    { char: "火", romaji: "か / ひ", meaning: "api" },
    { char: "木", romaji: "もく / き", meaning: "pohon" },
    { char: "金", romaji: "きん / かね", meaning: "emas, uang" },
    { char: "土", romaji: "ど / つち", meaning: "tanah" },
    { char: "山", romaji: "さん / やま", meaning: "gunung" },
    { char: "川", romaji: "せん / かわ", meaning: "sungai" },
    { char: "天", romaji: "てん", meaning: "langit" },
  ],
};

let progressData = JSON.parse(localStorage.getItem("japaneseProgress")) || {};

let currentSession = {
  questions: [],
  currentQuestion: 0,
  correctAnswers: 0,
  totalQuestions: 0,
  currentCategory: "hiragana",
};

function openTab(tabId) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
    tabContents[i].setAttribute("hidden", "hidden");
  }

  const tabButtons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
    tabButtons[i].setAttribute("aria-selected", "false");
  }

  const activeTab = document.getElementById(tabId);
  activeTab.classList.add("active");
  activeTab.removeAttribute("hidden");

  const buttons = Array.from(tabButtons);
  const clickedButton = buttons.find(
    (btn) => btn.getAttribute("aria-controls") === tabId
  );
  if (clickedButton) {
    clickedButton.classList.add("active");
    clickedButton.setAttribute("aria-selected", "true");
    clickedButton.focus();
  }
}

function saveProgress() {
  localStorage.setItem("japaneseProgress", JSON.stringify(progressData));
}

// Render characters grid for each category
function displayCharacters() {
  ["hiragana", "katakana", "kanji"].forEach((category) => {
    const container = document.getElementById(`${category}-grid`);
    container.innerHTML = "";
    japaneseData[category].forEach((charData) => {
      // Key to progress is category + char for uniqueness
      const key = category + "_" + charData.char;
      const progress = progressData[key] || 0;
      const progressPercent = (progress / 20) * 100;
      const meaning =
        category === "kanji"
          ? `<div class="alphabet-meaning">${charData.meaning}</div>`
          : "";

      container.innerHTML += `
            <div class="alphabet-card ${progress >= 20 ? "learned" : ""}">
                <div class="alphabet-char">${charData.char}</div>
                <div class="alphabet-romaji">${charData.romaji}</div>
                ${meaning}
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${progressPercent}%"></div>
                </div>
            </div>
            `;
    });
  });
}

function startPracticeSession() {
  // Detect current active tab/category
  const activeCategoryBtn = document.querySelector(".tab-btn.active");
  currentSession.currentCategory = activeCategoryBtn
    ? activeCategoryBtn.getAttribute("aria-controls")
    : "hiragana";

  currentSession.totalQuestions = Math.floor(Math.random() * 11) + 10; // 10-20 questions
  currentSession.questions = [];
  currentSession.currentQuestion = 0;
  currentSession.correctAnswers = 0;

  const charPool = japaneseData[currentSession.currentCategory];

  // Randomly pick questions
  for (let i = 0; i < currentSession.totalQuestions; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    currentSession.questions.push(charPool[randomIndex]);
  }

  showNextQuestion();
}

function showNextQuestion() {
  if (currentSession.currentQuestion >= currentSession.totalQuestions) {
    showResults();
    return;
  }

  const modal = document.getElementById("practice-modal");
  const quizChar = document.getElementById("quiz-char");
  const quizOptions = document.getElementById("quiz-options");
  const feedback = document.getElementById("feedback");

  feedback.textContent = "";
  feedback.className = "feedback";

  const currentChar = currentSession.questions[currentSession.currentQuestion];
  quizChar.textContent = currentChar.char;

  quizOptions.innerHTML = "";

  let correctAnswer =
    currentSession.currentCategory === "kanji"
      ? currentChar.meaning
      : currentChar.romaji;

  // Collect options: start with correct, then add random wrong options from same category
  let options = [correctAnswer];
  const charPool = japaneseData[currentSession.currentCategory];
  let valuesPool = charPool.map((c) =>
    currentSession.currentCategory === "kanji" ? c.meaning : c.romaji
  );

  while (options.length < 4) {
    let randomIndex = Math.floor(Math.random() * valuesPool.length);
    let val = valuesPool[randomIndex];
    if (!options.includes(val)) options.push(val);
  }

  // Shuffle options
  options = options.sort(() => 0.5 - Math.random());

  options.forEach((option) => {
    const optionBtn = document.createElement("div");
    optionBtn.className = "quiz-option";
    optionBtn.textContent = option;
    optionBtn.onclick = () =>
      checkAnswer(currentChar.char, option, correctAnswer);
    quizOptions.appendChild(optionBtn);
  });

  modal.style.display = "flex";
  modal.focus();
}

function checkAnswer(char, selected, correct) {
  const options = document.querySelectorAll(".quiz-option");
  const feedback = document.getElementById("feedback");

  options.forEach((option) => (option.onclick = null));

  const key = currentSession.currentCategory + "_" + char;

  if (selected === correct) {
    currentSession.correctAnswers++;
    progressData[key] = (progressData[key] || 0) + 1;
    saveProgress();

    feedback.textContent = "Benar! [THUMBS UP]";
    feedback.className = "feedback correct";

    options.forEach((option) => {
      if (option.textContent === correct) option.classList.add("correct");
    });
  } else {
    feedback.textContent = `Salah! Jawaban benar: ${correct}`;
    feedback.className = "feedback incorrect";

    options.forEach((option) => {
      if (option.textContent === selected) option.classList.add("incorrect");
      if (option.textContent === correct) option.classList.add("correct");
    });
  }

  setTimeout(() => {
    currentSession.currentQuestion++;
    showNextQuestion();
  }, 1500);
}

function showResults() {
  closeModal();

  const resultModal = document.getElementById("result-modal");
  const resultScore = document.getElementById("result-score");
  const resultMessage = document.getElementById("result-message");

  const score = Math.round(
    (currentSession.correctAnswers / currentSession.totalQuestions) * 100
  );
  resultScore.textContent = `Skor: ${score}% (${currentSession.correctAnswers}/${currentSession.totalQuestions} benar)`;

  if (score >= 80) {
    resultMessage.textContent =
      "Luar biasa! Anda sangat menguasai karakter Jepang!";
  } else if (score >= 60) {
    resultMessage.textContent =
      "Bagus! Terus berlatih untuk hasil yang lebih baik!";
  } else {
    resultMessage.textContent =
      "Terus berlatih ya! Anda pasti bisa menguasainya!";
  }

  displayCharacters();

  resultModal.style.display = "flex";
  resultModal.focus();
}

function closeModal() {
  document.getElementById("practice-modal").style.display = "none";
}

function closeResultModal() {
  document.getElementById("result-modal").style.display = "none";
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

window.onload = () => {
  displayCharacters();
};
