$('#qBody').each(function(){
      var qaPanel = []
      
        var webStateUrl = "./";

      var questionOne = [
        1,
        'Do you look forward to your future with your partner?',
        ['Absolutely', 'Maybe', 'No'],
        null
      ]
      var questionTwo = [
        2,
        'What makes you happier in a relationship, sharing or sacrificing?',
        ['Sharing', 'Sacrificing', 'Both'],
        null
      ]
      var questionThree = [
        3,
        'What is your primary love language?',
        ['English', 'Urdu', 'Punjabi'],
        null
      ]
      var questionFour = [
        4,
        'Where would you most like to go on vacation?',
        ['Try out new restaurant', 'Camping', 'Movies'],
        null
      ]
      qaPanel.push(questionOne)
      qaPanel.push(questionTwo)
      qaPanel.push(questionThree)
      qaPanel.push(questionFour)
        
      var dataExist = localStorage.getItem('questions');
        
        if(dataExist == null)
        {
          localStorage.setItem('contState', 0)
          localStorage.setItem('questions', JSON.stringify(qaPanel))
        }
    

      var qaStrPanel = JSON.parse(localStorage.getItem('questions'))
        
      loadQA(qaStrPanel)  
        
      function loadQA(qaStrPanel){
        
        for (let index = 0; index < qaStrPanel.length; index++) {
          const question = qaStrPanel[index]
           document.getElementById(index).innerHTML = question[1];
           
          if(question[3]!= null)
            {
                    
                document.getElementById("1"+index).style.backgroundColor ='#DC3F79'       
             }       

                 
        }
      }
      
      
      var index = -1;
        
      var contState = localStorage.getItem('contState')

      if(contState >1){
          document.getElementById('startBtn').innerHTML = "CONT."
      }

      var startBtn = document.getElementById('startBtn')
      if (startBtn) {
        startBtn.addEventListener('click', function () {
                contCheckQAState(qaStrPanel)
        })
      }

      var qone = document.getElementById('qone')
      if (qone) {
        qone.addEventListener('click', function () {
          index = 0;
          window.location.href = webStateUrl+"QPanel.html?q="+index;
        })
      }

      var qtwo = document.getElementById('qtwo')
      if (qtwo) {
        qtwo.addEventListener('click', function () {
          index = 1;
          window.location.href = webStateUrl+"QPanel.html?q="+index;
        })
      }

      var qthree = document.getElementById('qthree')
      if (qthree) {
        qthree.addEventListener('click', function () {
          index = 2;
          window.location.href = webStateUrl + "QPanel.html?q="+index;
        })
      }

      var qfour = document.getElementById('qfour')
      if (qfour) {
        qfour.addEventListener('click', function () {
          index = 3;
          window.location.href = webStateUrl + "QPanel.html?q="+index;
        })
      }

        var qstatenumber=0;
      function contCheckQAState (qaStrPanel) {
        
        for (let index = 0; index < qaStrPanel.length; index++) {
          const question = qaStrPanel[index]
      
          if (question[3] == null) {
            window.location.href = webStateUrl+"QPanel.html?q="+index;
            break
            }
                qstatenumber = qstatenumber + 1;
                
        }
              
        if(qstatenumber >= 4)
        {
          window.location.href = webStateUrl+"CongratulationsQA.html?q="+index;       
        }

      }
 
        
      
   
        
});