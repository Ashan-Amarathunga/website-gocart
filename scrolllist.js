//scroll for multiple pictures 

document.addEventListener('DOMContentLoaded',function(){

    const scrollLeftButton=document.getElementById('scroll-left');
    const scrollRightButton=document.getElementById('scroll-right');
    const content1=document.getElementById('content1');
    const content2=document.getElementById('content2');
    let intialscale=1;
    const scrollList=document.getElementById('scroll-list1');

    const scrollLeft=()=>{
        scrollList.scrollBy({
            left: -300, 
            behavior: 'smooth'
        })
    };

    const scrollRight=()=>{
        scrollList.scrollBy({
            left: 300, 
            behavior: 'smooth'
        })
    };

    scrollLeftButton.addEventListener('click',scrollLeft);
    scrollRightButton.addEventListener('click',scrollRight);

    const toggleContent = () =>{
            if(intialscale==1){
                    content1.style.display='';
                    content2.style.display='none'
                    intialscale=2;
            }else{
                content1.style.display='none';
                content2.style.display=''
                intialscale=1;
            }
    };

    scrollLeftButton.addEventListener('click', toggleContent);
    scrollRightButton.addEventListener('click', toggleContent);


})

