// Sample vocabulary data
const vocabularies = [
  {
    word: "Eager",
    definition: "Feeling or showing keen interest or enthusiasm.",
  },
  {
    word: " Hesitate",
    definition: "Pause before saying or doing something.",
  },
  {
    word: "Linger",
    definition: "Stay in a place longer than necessary.",
  },
  {
    word: "Nourish",
    definition:
      "Provide with the food or other substances necessary for growth.",
  },
  { word: "Reluctant", definition: "Unwilling and hesitant." },
  { word: "Vague", definition: "Uncertain or unclear." },
];

const vocabContainer = document.getElementById("vocab-cards");

// Function to create vocabulary cards
function createVocabCards() {
  vocabularies.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerText = item.word;
    questionDiv.onclick = () => {
      answerDiv.classList.toggle("show");
    };

    const answerDiv = document.createElement("div");
    answerDiv.className = "answer";
    answerDiv.innerText = item.definition;

    card.appendChild(questionDiv);
    card.appendChild(answerDiv);
    vocabContainer.appendChild(card);
  });
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleAnswer(index) {
  const answers = document.querySelectorAll(".faq .answer");
  answers[index].classList.toggle("show");
}

// Initialize the vocabulary cards on page load
window.onload = createVocabCards;
