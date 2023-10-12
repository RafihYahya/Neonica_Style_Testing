
play1 = document.getElementById('anima');
vartop = play1.style.top = '10px';

const animation_loop =  () => {
     for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            play1.style.top = i + '%';
            console.log(play1.style.top);

        } ,2000);
       
        
    }
};


 animation_loop();
