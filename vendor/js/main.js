document.addEventListener('DOMContentLoaded', function(){
    
    var searchBtn = document.querySelector('.search-icon');
    var searchBtn2 = document.querySelector('.button-search');
    var wrapperSearch = document.querySelector('.wrapper-search-bar');
    var inputSearch = document.querySelector('.input-search');

    searchBtn.addEventListener('click', function(event){
        event.preventDefault();
        wrapperSearch.classList.add('active');
    })
    wrapperSearch.addEventListener('click', function(){
        wrapperSearch.classList.remove('active');
    })
    inputSearch.addEventListener('click', function(event){
        event.stopPropagation();
    })
    searchBtn2.addEventListener('click', function(event){
        event.stopPropagation();
    })


    var allweb = document.querySelector('.all-web');
    var loader = document.querySelector('.preloader');
    setTimeout(function(){
        loader.style.display = 'none';
        allweb.style.display = 'block';
        allweb.classList.add('web-show');
    }, 1000)

    /////////////////////////////////////////////////////////

    var scrollBtn = document.querySelector('.scrollTop');

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval); 
        },15);
    }

    scrollBtn.addEventListener('click', function(){
        scrollToTop(500);
    });

    window.addEventListener('scroll', function(){
        if(this.window.pageYOffset > 100){
            scrollBtn.classList.add('show-scroll');
        }
        else{
            scrollBtn.classList.remove('show-scroll');
        }
    })

    // ////////////////////////

    var slideIndex = 0;
    var slideIndex2 = 0;
    var slideCurrent = 0;
    var slideCurrent2 = 0;

    var slideNext = document.querySelector('.button-next');
    var slidePrev = document.querySelector('.button-prev');
    var allSlideBanner = document.querySelectorAll('.slide-items');

    var allSlideClient = document.querySelectorAll('.slide-clients-items');
    var PrevClientBtn = document.querySelector('.clients-content a.button-slide-client.button-prev');
    var NextClientBtn = document.querySelector('.clients-content a.button-slide-client.button-next');
    
    window.onload = function(){
        slideIndex = 0;
        slideIndex2 = 0;
        slideCurrent = 0;
        slideCurrent2 = 0;
    }
    /////////////
    function funcSlideNext(event, allSlide){
        event.preventDefault();
        slideCurrent = slideIndex;
        //console.log('loi: click slide cua slient nhung lai chay slide cua banner ? chua tim dc ngnhan.')
        if(slideIndex < allSlide.length-1){ // truong hop slide 1, 2
            slideIndex++;
        }
        else if (slideIndex == allSlide.length-1){ // cuoi slide
            slideIndex = 0;
        }
        for(var i = 0; i < allSlide.length; i++){
            allSlide[i].classList.remove('move-left-out', 'move-left-in', 'move-right-in', 'move-right-out');
        }
        allSlide[slideCurrent].classList.add('move-left-out');
        allSlide[slideIndex].classList.add('move-left-in','active');

        allSlide[slideIndex].addEventListener('animationend', function(){
            for(var i = 0; i < allSlide.length; i++){
                if(i != slideIndex){
                    allSlide[i].classList.remove('active');
                }
            }
        })
    }
    function funcSlidePrev(event, allSlide){
        event.preventDefault();
        slideCurrent = slideIndex;
        console.log('co chay dm');
        if(slideIndex > 0){ // truong hop slide 2, 3
            slideIndex--;
        }
        else if (slideIndex == 0){ // dau slide
            slideIndex = allSlide.length - 1;
        }
        for(var i = 0; i < allSlide.length; i++){
            allSlide[i].classList.remove('move-left-out', 'move-left-in', 'move-right-in', 'move-right-out');
        }


        allSlide[slideCurrent].classList.add('move-right-out');
        allSlide[slideIndex].classList.add('move-right-in', 'active');
        
        allSlide[slideIndex].addEventListener('animationend', function(){
            for(var i = 0; i < allSlide.length; i++){
                if(i != slideIndex){
                    allSlide[i].classList.remove('active');
                }
            }
        })
    }
    ///////////////
    function funcSlideNextForClient(event, allSlide){
        event.preventDefault();
        slideCurrent2 = slideIndex2;
        if(slideIndex2 < allSlide.length-1){ // truong hop slide 1, 2
            slideIndex2++;
        }
        else if (slideIndex2 == allSlide.length-1){ // cuoi slide
            slideIndex2 = 0;
        }
        for(var i = 0; i < allSlide.length; i++){
            allSlide[i].classList.remove('move-left-out', 'move-left-in', 'move-right-in', 'move-right-out');
        }
        allSlide[slideCurrent2].classList.add('move-left-out');
        allSlide[slideIndex2].classList.add('move-left-in','active');

        allSlide[slideIndex2].addEventListener('animationend', function(){
            for(var i = 0; i < allSlide.length; i++){
                if(i != slideIndex2){
                    allSlide[i].classList.remove('active');
                }
            }
        })
    }
    function funcSlidePrevForClient(event, allSlide){
        event.preventDefault();
        slideCurrent2 = slideIndex2;
        if(slideIndex2 > 0){ // truong hop slide 2, 3
            slideIndex2--;
        }
        else if (slideIndex2 == 0){ // dau slide
            slideIndex2 = allSlide.length - 1;
        }
        for(var i = 0; i < allSlide.length; i++){
            allSlide[i].classList.remove('move-left-out', 'move-left-in', 'move-right-in', 'move-right-out');
        }


        allSlide[slideCurrent2].classList.add('move-right-out');
        allSlide[slideIndex2].classList.add('move-right-in', 'active');
        
        allSlide[slideIndex2].addEventListener('animationend', function(){
            for(var i = 0; i < allSlide.length; i++){
                if(i != slideIndex2){
                    allSlide[i].classList.remove('active');
                }
            }
        })
    }
    //////////////
    // var funcNextForBanner = function(){
    //     funcSlideNext(event, allSlideBanner);
    // }
    // var funcPrevForBanner = function(){
    //     funcSlidePrev(event, allSlideBanner);
    // }

    // var funcNextForClient = function(){
    //     funcSlideNextForClient(event, allSlideClient);
    // }
    // var funcPrevForClient = function(){
    //     funcSlidePrevForClient(event, allSlideClient);
    // }

    // slideNext.addEventListener('click', funcNextForBanner);
    // slidePrev.addEventListener('click', funcPrevForBanner);

    // PrevClientBtn.addEventListener('click', funcPrevForClient);
    // NextClientBtn.addEventListener('click', funcNextForClient);

    slideNext.addEventListener('click', function(){
        funcSlideNext(event, allSlideBanner);
    });
    slidePrev.addEventListener('click', function(){
        funcSlidePrev(event, allSlideBanner);
    });

    PrevClientBtn.addEventListener('click', function(){
        funcSlideNextForClient(event, allSlideClient);
    });
    NextClientBtn.addEventListener('click', function(){
        funcSlidePrevForClient(event, allSlideClient);
    });



    // ///////////////////////////////////////

    var iconMenuRight = document.querySelector('.icon-menu-mobile-second');
    var menuRight = document.querySelector('.wrapper-content-mobile')

    iconMenuRight.addEventListener('click', function(event){
        event.preventDefault();
        menuRight.classList.toggle('active-content-menu-right');
    });
    
    // //////////////////////////////////////////

    var iconMenuLeft = document.querySelector('.icon-menu-mobile-main');
    var menuLeft = document.querySelector('.items-header-5');
    var blackScreen = document.querySelector('.fullscreen-black');

    iconMenuLeft.addEventListener('click', function(event){
        event.preventDefault();
        menuLeft.classList.add('active-content-menu-left');
        blackScreen.classList.add('active-black-screen');
    })
    blackScreen.addEventListener('click', function(event){
        event.preventDefault();
        menuLeft.classList.remove('active-content-menu-left');
        blackScreen.classList.remove('active-black-screen');
    })

    ////////////////////////////////////////////////

    // slider 2 items

    // var btnNextClients = document.querySelector('.button-slide-client.button-next');
    // var btnPrevClients = document.querySelector('.button-slide-client.button-prev');
    // var slidesClients = document.querySelectorAll('.slide-clients-items');

    // var clientsSlideIndex = [0,1];
    // var clientsSlideCurrent = [0,1];
    // console.log(clientsSlideIndex);
    // console.log(btnNextClients);

    // var clientsSlideNext = function(event){
    //     event.preventDefault();
    //     clientsSlideCurrent = Array.from(clientsSlideIndex);
    //     //console.log(clientsSlideCurrent);
    //     if(clientsSlideIndex[1] < slidesClients.length - 1){
    //         clientsSlideIndex[1]++;
    //         clientsSlideIndex[0] = clientsSlideIndex[1] - 1;
    //         //console.log(clientsSlideIndex);
    //     }
    //     else if(clientsSlideIndex[1] == slidesClients.length - 1){
    //         clientsSlideIndex[0]++;
    //         clientsSlideIndex[1] = 0;
    //         //console.log(clientsSlideIndex);
    //     }
    //     for(var i = 0; i < slidesClients.length; i++){
    //         slidesClients[i].classList.remove('move-left-out', 'move-left-in', 'move-right-in', 'move-right-out');
    //     }
    //     slidesClients[clientsSlideCurrent[0]].classList.add('move-left-out');

    //     slidesClients[clientsSlideIndex[0]].classList.add('move-left-out');
    //     slidesClients[clientsSlideIndex[1]].classList.add('move-left-in');

    //     slidesClients[clientsSlideIndex[1]].addEventListener('animationend', function(){
    //         for(var i = 0; i < slidesClients.length; i++){
    //             if(i != clientsSlideIndex[0] && i != clientsSlideIndex[1]){
    //                 slidesClients[i].classList.remove('active');
    //             }
    //         }
    //     })
    // }
    // btnNextClients.addEventListener('click', clientsSlideNext);

    //////////////////////////////////////////////////////////////////////////////////////////////////

});