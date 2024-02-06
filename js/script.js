let nameinp = document.querySelector(".namee")
let nameerar = document.querySelector(".nameerorr")

let emailinp = document.querySelector(".emaill")
let emaileror = document.querySelector(".emailerorr")

let proooinp = document.querySelector(".prooo")
let progeror = document.querySelector(".progerorr")

let numberrinp = document.querySelector(".numberr")
let numbereror = document.querySelector(".numbererorr")

let addressinp = document.querySelector(".address")
let addreseror = document.querySelector(".adresserorr")

let submitbtn = document.querySelector(".btnnn")
let restbtn = document.querySelector(".btnnns")

let subheading = document.querySelector(".subheading")

let idbox = document.querySelector(".idcard")

let demo_nameout = document.querySelector(".demo_name")
let demo_emailout = document.querySelector(".demo_email")
let demo_progout = document.querySelector(".demo_prooo")
let demo_numberout = document.querySelector(".demo_numberr")
let demo_addressout = document.querySelector(".demo_address")

let emailregax = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// let array = []

submitbtn.addEventListener("click", function(){
    if(nameinp.value == ""){
        nameerar.innerHTML = "please enter your name*"
        nameinp.style.border = "1px solid red"

    }else if(emailinp.value == ""){
        emaileror.innerHTML = "Please Enter Your Email"
        emailinp.style.border = "1px solid red"

    }else if(!emailregax.test(emailinp.value)){
        emaileror.innerHTML = "Email Did Not Match"
        emailinp.style.border = "1px solid red"

    }else if(proooinp.value == ""){
        progeror.innerHTML = "Please Enter Your Batch"
        proooinp.style.border = "1px solid red"

    }else if(numberrinp.value == ""){
        numbereror.innerHTML = "Please Enter Your Number"
        numberrinp.style.border = "1px solid red"

    }else if(isNaN(numberrinp.value)){
        numbereror.innerHTML = "Please Enter Right Phone Number"
        numberrinp.style.border = "1px solid red"

    }else if(addressinp.value == ""){
        addreseror.innerHTML = "Please Enter Your address"
        addressinp.style.border = "1px solid red"
    }

    else{
        idbox.style.display = "block"
        subheading.style.display = "none"

        demo_nameout.innerHTML = "Name : " + nameinp.value
        nameerar.innerHTML = ""
        nameinp.style.border = ""

        demo_emailout.innerHTML = "Email : " + emailinp.value
        emaileror.innerHTML = ""
        emailinp.style.border = ""

        demo_progout.innerHTML = "Your Program : " + proooinp.value
        progeror.innerHTML = ""
        proooinp.style.border = ""

        demo_numberout.innerHTML = "Your Number : " + numberrinp.value
        numbereror.innerHTML = ""
        numberrinp.style.border = ""

        demo_addressout.innerHTML = "Your Address : " + addressinp.value
        addreseror.innerHTML = ""
        addressinp.style.border = ""
    }
})


restbtn.addEventListener("click", function(){
    nameinp.value = ""
    emailinp.value = ""
    proooinp.value = ""
    numberrinp.value = ""
    addressinp.value = ""
    idbox.style.display = "none"
    subheading.style.display = "block"
    
})

