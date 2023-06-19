const buttons = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

// questions.forEach(function(question){
//     buttons.addEventListener('click', function(){
        // questions.forEach(function(item){
//     if(item !== questions){
//         item.classList.remove('show-text');
//     }
    // })
// })
// })
buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const toggleClass = e.currentTarget.parentElement.parentElement;
       toggleClass.classList.toggle('show-text');
    });
});