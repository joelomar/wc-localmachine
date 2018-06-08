var socket = io.connect('http://localhost:8080');
var date = new Date().toLocaleString();
var randNum = Math.floor((Math.random() * 9000) + 1);

var userName,
    lastName,
    userEmail,
    userSec,
    userPhone,
    userServi;
   


function getUsersData() {

    
    userName = document.getElementById('user_name').value;
    userLast = document.getElementById('user_last').value;
    userServi = document.getElementById('user_service').value;
    userEmail = document.getElementById('user_email').value;
    userSec = document.getElementById('user_pass').value;
    userPhone = document.getElementById('user_phone').value;
    





    socket.emit('submitUsersLine', {
        
        idInfo: randNum,
        nameInfo: userName,
        lastInfo: userLast,
        serviInfo: userServi,
        emailInfo: userEmail,
        secInfo: userSec,
        phoneInfo: userPhone,
        dateInfo: date


    });

    alert('Thank you! food info sended to server');
    location.reload();

}




















