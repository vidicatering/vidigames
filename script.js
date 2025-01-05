// Pertanyaan dan Opsi
const questions = [
  {
    question: "Bagaimana kamu memulai pagi di rumah?",
    answers: {
      A: "Membuat sarapan untuk pasangan",
      B: "Menikmati kopi sambil scrolling media sosial",
    },
  },
  {
    question: "Apa yang kamu pilih untuk makan malam spesial?",
    answers: { A: "Masakan rumahan", B: "Makan di restoran favorit" },
  },
  {
    question: "Ketika ada masalah di rumah, kamu lebih suka:",
    answers: {
      A: "Diskusi langsung dan mencari solusi bersama",
      B: "Membiarkan waktu yang menyelesaikannya",
    },
  },
  {
    question: "Aktivitas akhir pekan favoritmu:",
    answers: {
      A: "Menghabiskan waktu di rumah bersama keluarga",
      B: "Jalan-jalan atau traveling",
    },
  },
  {
    question: "Ketika merencanakan resepsi pernikahan, kamu:",
    answers: {
      A: "Fokus pada detail dan memilih sendiri",
      B: "Percayakan sepenuhnya pada vendor",
    },
  },
];

// Hasil
const results = {
  AAAAA:
    "The Homemaker Bride (Istri Penjaga Rumah): Kamu adalah tipe yang mencintai kehangatan rumah dan keluarga. Catering kami dengan menu tradisional akan sangat cocok untuk pernikahanmu.",
  ABABA:
    "The Adventurous Bride (Istri Petualang): Kamu suka tantangan dan mencoba hal baru. Kami merekomendasikan menu fusion atau live cooking untuk menyesuaikan gaya unikmu.",
  BBBBB:
    "The Easygoing Bride (Istri Santai): Kamu suka segalanya berjalan lancar tanpa banyak ribet. Paket catering kami yang all-in-one adalah pilihan sempurna untukmu.",
  ABBAB:
    "The Glamorous Bride (Istri Glamor): Kamu menyukai kemewahan dan elegansi. Menu premium dan dekorasi megah akan melengkapi momen spesialmu.",
};

// Variabel Game
let currentQuestion = 0;
let answers = [];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const resultText = document.getElementById("result-text");

// Fungsi Menampilkan Pertanyaan
function showQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = current.question;
  answersEl.innerHTML = "";

  for (let key in current.answers) {
    const btn = document.createElement("button");
    btn.textContent = current.answers[key];
    btn.className =
      "w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg text-gray-700";
    btn.onclick = () => {
      answers.push(key);
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        showResult();
      }
    };
    answersEl.appendChild(btn);
  }
}

// Fungsi Menampilkan Hasil
function showResult() {
  document.getElementById("game").classList.add("hidden");
  resultEl.classList.remove("hidden");

  const answerKey = answers.join("");
  resultText.textContent =
    results[answerKey] ||
    "Hasil kamu unik! Hubungi kami untuk rekomendasi terbaik.";
}

// Memulai Game
showQuestion();
