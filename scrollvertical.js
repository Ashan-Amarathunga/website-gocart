window.addEventListener('scroll',()=>{
    const navbar=document.getElementById('header2')

    if(window.scrollY > 90){
        navbar.style.borderBottom='2px solid rgb(246, 243, 243)'
    }
    else{
        navbar.style.borderBottom='none'
    }
});

