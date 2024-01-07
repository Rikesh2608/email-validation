const subscribe=document.querySelector('.subscribe');
const dismiss=document.querySelector('.dismiss');
const front_page=document.querySelector('.frontpage-container');
const back_page=document.querySelector('.back-page-container');
const email=document.querySelector('input');
const email_error=document.querySelector('.email-error');

subscribe.addEventListener('click',()=>{
    email_checker();
});

dismiss.addEventListener('click',()=>{
    back_page.style.display=`none`;
    front_page.style.display=`block`;
});

email.addEventListener('keydown',(event)=>{
    email_checker(event);
});

function email_checker(event){
    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}/))
    {
        email_error.style.display=`None`;
        if(event.key=="Enter"){
            back_page.style.display=`block`;
            front_page.style.display=`none`;
            email.classList.remove('input-error');
            email.value=``;
        }
    }
    else{
        if(event.key=="Enter"){
        email.classList.add('input-error');
        email_error.style.display=`block`;
        }else{
            email.classList.remove('input-error');
        email_error.style.display=`none`;
        }
    }
}
