const quizeData = [
    {
        question: "What is capital of Bangladesh?",
        a: "Noya Delli",
        b: "Kualalampur",
        c: "Dhaka",
        d: "Abu Dhabi",
        correct: "c",
    },
    
    {
        question: "How many colos in Olympic?",
        a: "3",
        b: "5",
        c: "7",
        d: "6",
        correct: "d",
    },
    
    {
        question: "What is pagla country?",
        a: "India",
        b: "England",
        c: "Newzeland",
        d: "Australia",
        correct: "a",
    },
    
    {
        question: "What is gorib and faltu country?",
        a: "Newzeland and Australia",
        b: "England and America",
        c: "India and  Srilanka",
        d: "Zimbabwe and Uganda",
        correct: "c",
    },
        
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionElm = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizeData[currentQuiz]

    questionElm.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checket = false)
}

function getSelect() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checket) {
            answer = answerEl.id
        }
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelect()
    console.log(answer)
})