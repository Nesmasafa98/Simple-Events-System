async function login(){
    const response = await fetch("/login");
    console.log(response);
}

login();