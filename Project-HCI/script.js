function validateData(){
    var nama = document.getElementById("name_input").value;
    var phonenumber = document.getElementById("phonenumber_input").value;
    var quantity = document.getElementById("quantity_input").value;
    var productchoice = document.getElementById("productchoice_input").value;
    var address = document.getElementById("address_input").value;
    var checkbox = document.getElementById("checkbox_input");

    
    if(nama.length < 5 || nama.length > 20){
        alert("Name must consist of 5-20 alphabets");
    }
    else if(!phonenumber.startsWith("08")){
        alert("Phone Number must start with 08");
    }
    else if(quantity < 0 || quantity > 99){
        alert("Quantity must be between 0 to 99");
    }
    else if(!productchoice.includes("CH")){
        alert("our CHocolate name must start with 'CH'");
    }
    else if(address.length < 10 || address.length > 100){
        alert("Address must be in range of 10-100")
    }
    else if(checkbox.checked == false){
        alert("You have to Agree to All Terms and Conditions");
    }
}

document.getElementById("Submit").addEventListener("click", ()=>{
    validateData();
})
