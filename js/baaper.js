document.getElementById ('login-sub-btn').addEventListener( 'click', function(){
    // get-user-email
 const emailFilde = document.getElementById ('user-email');
 const userEmail =emailFilde.value ;

//  get-user-pass
const paswrdFild =  document.getElementById('user-passowerd');
const userPaswrd = paswrdFild.value
// chek-
if(userEmail == 'b@' && userPaswrd == 'bap'){
    console.log('oky go')
    window.location.href ='banktk.html'
}
})