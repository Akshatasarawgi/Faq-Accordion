const questions = document.querySelectorAll('.question-line');
const answers = document.querySelectorAll('.answer');
const symbols = document.querySelectorAll('.symbol');

questions.forEach((question) => {
    question.addEventListener("click", () => {
       symbols.forEach((symbol) => {
         symbol.setAttribute('src', './assets/images/icon-plus.svg') ;
       })
        const questionParent = question.parentElement;
        const symbol = questionParent.querySelector('.symbol');
        const answerToQuestion = questionParent.querySelector('.answer');


        answers.forEach((answer) => {
            if (answer !== answerToQuestion) {
                answer.classList.remove('active'); 
                answerToQuestion.style.maxHeight = "0";
            }
         } )

        answerToQuestion.classList.toggle('active');

        if(answerToQuestion.classList.contains('active')) { 
            answerToQuestion.style.maxHeight = answerToQuestion.scrollHeight + "px";
            symbol.setAttribute('src', './assets/images/icon-minus.svg') ;
            }
        else {
            answerToQuestion.style.maxHeight = "0";
            symbol.setAttribute('src', './assets/images/icon-plus.svg') ;
        }
     
    });
})