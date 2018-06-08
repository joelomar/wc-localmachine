var socket = io.connect('http://localhost:8080');
var date = new Date().toLocaleString();

var emailLog,
    secLog;
   


function getLoginData() {

    
    emailLog = document.getElementById('email_log').value;
    secLog = document.getElementById('pass_log').value;
    
    socket.emit('submitLoginLine', {
        
        emailInfo: emailLog,
        secInfo: secLog


    });

    alert('Succes login');

}




//-------Get Server user01 Auth


socket.on('user01AuthLine', function (data) {

     localStorage.setItem('user01Token', data);
     location.assign('http://localhost:8080/user01');

});

























