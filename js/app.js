function menuShow(){
    document.getElementById('sidebar').classList.toggle('active');
}



function passTogole(){
    if(document.getElementById('password').type === 'password') {
        document.getElementById('password').type = 'text';
        document.getElementById('password_eye').classList.add('fa-eye');
        document.getElementById('password_eye').classList.remove('fa-eye-slash');
    } else{ 
        document.getElementById('password').type = 'password'
        document.getElementById('password_eye').classList.add('fa-eye-slash');
        document.getElementById('password_eye').classList.remove('fa-eye');
    }
}