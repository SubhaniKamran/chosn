$('#qpanelBody').each(function(){
var url = window.location.href;
var webStateUrl = "./";

var currentQuestionIndex = -1;
var currentQuestion = [];
        
        
var urlQuery  = url.split('q')[1];
var index  = urlQuery.split('=')[1];

var qaStrPanel = JSON.parse(localStorage.getItem('questions'))
openQA(index, qaStrPanel);
function openQA (index, qaStrPanel) {
        
        currentQuestion = qaStrPanel[index]
        currentQuestionIndex = parseInt(index)
        const totalQuestions = qaStrPanel.length
        const q_id = currentQuestion[0]
        const q_statement = currentQuestion[1]
        const q_options = currentQuestion[2]
        const q_ans = currentQuestion[3]
        
        document.getElementById("questionStatement").innerHTML = q_statement;
        document.getElementById('optionsOne').innerHTML = q_options[0]
        document.getElementById('optionsTwo').innerHTML = q_options[1]
        document.getElementById('optionsThree').innerHTML = q_options[2]
        
        document.getElementById('qaStatus').innerHTML =
          (currentQuestionIndex + 1) + '/' + totalQuestions
        if (q_ans == 0) {
          document.getElementById('optionsOneBlock').style.backgroundColor =
            '#DC3F79'
         document.getElementById('optionsTwoBlock').style.backgroundColor =
            '#2f2f2f'
         document.getElementById('optionsThreeBlock').style.backgroundColor =
            '#2f2f2f'
        }

        if (q_ans == 1) {
          document.getElementById('optionsOneBlock').style.backgroundColor =
            '#2f2f2f'
         document.getElementById('optionsTwoBlock').style.backgroundColor =
            '#DC3F79'
         document.getElementById('optionsThreeBlock').style.backgroundColor =
            '#2f2f2f'
        }

        if (q_ans == 2) {
        document.getElementById('optionsOneBlock').style.backgroundColor =
            '#2f2f2f'
         document.getElementById('optionsTwoBlock').style.backgroundColor =
            '#2f2f2f'
         document.getElementById('optionsThreeBlock').style.backgroundColor =
            '#DC3F79'
        }
      }

        
var optionOne = document.getElementById('qanswerOptOne')
if (optionOne) {
optionOne.addEventListener('click', function () {
  currentQuestion[3] = 0
  qaStrPanel[currentQuestionIndex] = currentQuestion   
  localStorage.setItem('contState', 3)
  localStorage.setItem('questions', JSON.stringify(qaStrPanel))
  contCheckQAState(qaStrPanel)
})
}

var optionTwo = document.getElementById('qanswerOptTwo')
if (optionTwo) {
optionTwo.addEventListener('click', function () {
  currentQuestion[3] = 1
  qaStrPanel[currentQuestionIndex] = currentQuestion
localStorage.setItem('contState', 3)
  localStorage.setItem('questions', JSON.stringify(qaStrPanel))
  contCheckQAState(qaStrPanel)
})
}

var optionThree = document.getElementById('qanswerOptThree')
if (optionThree) {
optionThree.addEventListener('click', function () {
  currentQuestion[3] = 2
  qaStrPanel[currentQuestionIndex] = currentQuestion
localStorage.setItem('contState', 3)
  localStorage.setItem('questions', JSON.stringify(qaStrPanel))
  contCheckQAState(qaStrPanel)        
})
}
        
function contCheckQAState (qaStrPanel) {

for (let index = 0; index < qaStrPanel.length; index++) {
  const question = qaStrPanel[index]
  if (question[3] == null) {
    window.location.href = webStateUrl+"QPanel.html?q="+index;
    break
          
   }else
    {
        window.location.href = webStateUrl+"CongratulationsQA.html";
    }
}
} 
        
        
        
        
        
});




