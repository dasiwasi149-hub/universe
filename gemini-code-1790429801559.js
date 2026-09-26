// Data for Modal Popups
const topicData = {
    bigbang: {
        title: "The Big Bang Theory",
        content: "The Big Bang theory is the prevailing cosmological model explaining the creation of the universe. It states that around 13.8 billion years ago, the entire universe expanded rapidly from an extremely high-density and high-temperature state."
    },
    stars: {
        title: "Stars & Galaxies",
        content: "Stars are massive celestial bodies made of hydrogen and helium that generate light and heat through nuclear fusion. Galaxies are vast systems held together by gravity, containing billions of stars, interstellar gas, and dust."
    },
    blackholes: {
        title: "Black Holes",
        content: "A black hole is a cosmic object with gravity so strong that nothing, not even light, can escape from it. They are formed when massive stars collapse at the end of their life cycle."
    },
    solarsystem: {
        title: "Our Solar System",
        content: "Our Solar System consists of our star, the Sun, and everything bound to it by gravity—the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; tens of moons; and millions of asteroids, comets, and meteoroids."
    },
    darkmatter: {
        title: "Dark Matter & Dark Energy",
        content: "Normal matter (stars, planets, living beings) makes up only about 5% of the universe. Dark Matter makes up roughly 27%, providing invisible gravity, while Dark Energy makes up 68%, driving the accelerating expansion of the universe."
    },
    exploration: {
        title: "Human Space Exploration",
        content: "Human space exploration has advanced from launching early satellites to landing astronauts on the Moon, operating the International Space Station (ISS), and deploying deep-space observatories like the James Webb Space Telescope."
    }
};

// Modal Control Functions
function openModal(topicKey) {
    const topic = topicData[topicKey];
    if (topic) {
        document.getElementById('modal-title').innerText = topic.title;
        document.getElementById('modal-body').innerText = topic.content;
        document.getElementById('info-modal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('info-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Simple Interactive Quiz
const quizData = {
    question: "How old is the universe approximately?",
    options: ["4.5 Billion Years", "13.8 Billion Years", "20 Billion Years", "1 Trillion Years"],
    correct: 1
};

function loadQuiz() {
    document.getElementById('quiz-question').innerText = quizData.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    quizData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const resultElement = document.getElementById('quiz-result');
    if (selectedIndex === quizData.correct) {
        resultElement.style.color = '#00ff88';
        resultElement.innerText = "Correct! The universe is about 13.8 billion years old.";
    } else {
        resultElement.style.color = '#ff4d4d';
        resultElement.innerText = "Incorrect! Try again.";
    }
}

// Initialize quiz on load
document.addEventListener('DOMContentLoaded', loadQuiz);