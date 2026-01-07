function validateform(){
    //request data gathering logic
    let name=document.getElementById("user").value;
    let password=document.getElementById("pass").value;
    //validation logic
    if(name==""){
        alert("Please enter your name");
        return false;
    }
}
