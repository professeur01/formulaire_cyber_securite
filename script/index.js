
let connected = false;
localStorage.setItem('connected', JSON.stringify(connected));

const login = document.getElementById('login');
const pass = document.getElementById('pass');
const connection = document.querySelector('.submit');

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(datas.users));
}
if (!localStorage.getItem('questions')) {
    localStorage.setItem('questions', JSON.stringify(datas.questions));
}
if (!localStorage.getItem('reponses')) {
    localStorage.setItem('reponses', JSON.stringify(datas.reponses));
}
if (!localStorage.getItem('connected')) {
    localStorage.setItem('connected', JSON.stringify(connected));
}
connection.addEventListener("click", function() {
    let log = login.value;
    let password = pass.value;
 
    for (let i = 0; i < datas.users.length; i++) {
        if (log.trim() === datas.users[i].name && password.trim() === datas.users[i].pass) {
            localStorage.setItem('utilisateurConnecte', JSON.stringify(datas.users[i]));
            connected = true;
            localStorage.setItem('connected', JSON.stringify(connected));
            alert(`Utilisateur ${datas.users[i].name} connecté avec succès`);
            setTimeout(function() {
                window.location.href="./dashboard.html";
                console.log('hehehhe');
            }, 2000);
          
            break;
        }
        else{
            alert('Login et mot de passe non conforme')
        }
    }

  });