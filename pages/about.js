document.addEventListener('DOMContentLoaded', function(){
    var btnTab = document.querySelectorAll('.btn-tab');
    var introBody = document.querySelectorAll('.items-intro-body');

    function chooseItemsIntro(event, indexItems){
        event.preventDefault();
        for(var i = 0; i < introBody.length; i++){
            if(introBody[i].classList.contains('active', 'move-up')){
                introBody[i].classList.remove('active', 'move-up');
            }
        }
        for(var j = 0; j < introBody.length; j++){
            if(btnTab[j].classList.contains('intro-active')){
                btnTab[j].classList.remove('intro-active')
            }
        }
        
        introBody[indexItems].classList.add('active', 'move-up');
        btnTab[indexItems].classList.add('intro-active');
    }
    btnTab[0].addEventListener('click', function(){
        chooseItemsIntro(event, 0);
    })
    btnTab[1].addEventListener('click', function(){
        chooseItemsIntro(event, 1);
    })
    btnTab[2].addEventListener('click', function(){
        chooseItemsIntro(event, 2);
    })

})