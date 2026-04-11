    const pass = document.getElementById("pass");
    const email = document.getElementById("email");

    const mails = ["123@gmail.com", "234@gmail.com", "afksh@gmail.com", "safase@gmail.com", "efjwoe@gmail.com","fvbfgr@gmail.com"];
    const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const symbols = [";","~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","[","]","."];


  function change() {

    const randommails = mails[Math.floor(Math.random()*mails.length)];

    let randompassword = '';

    for (let index = 0; index < 10; index++) {
        const allchars = uppercase.concat(symbols);

        const randomchars = allchars[Math.floor(Math.random()*allchars.length)];

        randompassword += randomchars;
    }

    
   pass.value = randompassword;
   email.value = randommails;

}