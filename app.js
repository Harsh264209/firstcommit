let users=[];



function register(){

    let name=document.getElementById('name').value
    let email=document.getElementById('email').value

    let countemail = users.filter((user)=>{
        return user.email == email;
    })

    let tempuser = {
        name: name,
        email: email,
         }
       
         if(countemail.length == 0){
            users.push(tempuser)
            console.log(tempuser)
         }
         else{
              console.log('already register')
         }

}

