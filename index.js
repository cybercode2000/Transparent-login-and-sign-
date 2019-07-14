const first = document.querySelector('#first');
const last = document.querySelector('#last');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const repeat = document.querySelector('#confirm');

function login(){
     if(first.value === '' && last.value === '' && email.value=== '' && pass.value === '' && repeat.value === ''){
        alert('pls kindly fill the required forms');
     }
     else {
       var a = alert('registration successful');
       if(a === undefined)
       {
           first.value = '';
           last.value = '';
           email.value = '';
           pass.value = '';
           repeat.value = '';
       }
     }
 
} 

function signin() {
    if( email.value === 'rasheed' && 'rasheed' === repeat.value)
    var a = alert('yes have successfully login');
    if(a === undefined)
        {
            email.value = '';
            repeat.value = '';
        }

    else 
    alert('the username and pass does not match each other');
}
