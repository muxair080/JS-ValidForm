console.log('Welcome to UETM Contact Page');
// object of differnet input tags
const form = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phoneNo: document.getElementById('Pnum')
};
//  this object is using che check form is filled or not before submittion;
let valadation = {
    name: false,
    email: false,
    phoneNo: false
};
// this method is used to check that the given name is valid or not;
function Name() {
    console.log('name is blured');
    let regex = /^[a-zA-Z]([a-zA-z0-9]){3,20}/; // regular expression 
    let str = form.name.value;
    console.log(str);
    // errormsg is used to take that div in which we print the msg for invalid data;
    let errormsg = document.getElementById('nameerror');

    // the the user input is true;
    if (regex.test(str)) {
        console.log('Name is valid');
        valadation.name = true;

    }
    // if user input is not true then this code will be  executed and show msg to user that you  input data is invalid 
    else {

        console.log('Name is invalid');
        let invalid = `Invalid Name`;
        errormsg.innerHTML = invalid;
        form.name.style.border = ' 1px solid red';
        errormsg.style.color = 'red';
        errormsg.style.display = 'block';
        valadation.name = false;
    }
    // when user correct data again then error msg will be hide;
    form.name.addEventListener('click', () => {
        errormsg.style.display = 'none';
        form.name.style.border = ' 1px solid black';
        console.log("Add envent listner is fired");
    });

}
// this msg is for email its working same as name method ;
function Email() {
    console.log('Email is blured');

    let regex = /^([_\-\.0-9A-Za-z]+)@([_\-\.0-9A-Za-z]+)\.([a-zA-Z]){2,7}$/;
    // let regex  = /^([_\-\.0-9A-Za-z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = form.email.value;
    console.log(str);
    let errormsg = document.getElementById('emailerror');


    if (regex.test(str)) {
        console.log('email is valid');
        valadation.email = true;

    }
    else {

        console.log('email is invalid');
        let invalid = `*Invalid Email`
        errormsg.innerHTML = invalid;
        form.email.style.border = ' 1px solid red';
        errormsg.style.color = 'red';
        errormsg.style.display = 'block';
        valadation.email = false;
    }
    form.email.addEventListener('click', () => {
        errormsg.style.display = 'none';
        form.email.style.border = ' 1px solid black';
        console.log("Add envent listner is fired");
    });
}
// this method is used to check phone number is correct or not
function PhoneNumber() {
    console.log('Phone number is blured');
    let regex = /^([0-9]){11}$/;
    let str = form.phoneNo.value;
    console.log(str);
    let errormsg = document.getElementById('phoneerror');


    if (regex.test(str)) {
        console.log('phone number  is valid');
        valadation.phoneNo = true;

    }
    else {

        console.log('phone number is invalid');
        let invalid = `*Invalid Phone number`
        errormsg.innerHTML = invalid;
        form.phoneNo.style.border = ' 1px solid red';
        errormsg.style.color = 'red';
        errormsg.style.display = 'block';
        valadation.phoneNo = false;
    }
    form.phoneNo.addEventListener('click', () => {
        errormsg.style.display = 'none';
        form.phoneNo.style.border = ' 1px solid black';
        console.log("Add envent listner is fired");
    });
}
// addevent listener on name email and phone number input fields;
form.name.addEventListener('blur', Name);

form.email.addEventListener('blur', Email);

form.phoneNo.addEventListener('blur', PhoneNumber);



// this code is for submit button;

const submitbtn = document.getElementById('submitbtn');
let msg = document.getElementById('alert');

function success_fail_msg(e) {

    let success = '<span>Form successfully Submitted</span> <a href = "#" id = "close">X</a> ';
    let fail = '<span>Form has not been submitted </span><a href = "#" id = "close">X</a>';
    console.log(valadation.name , valadation.email  , valadation.phoneNo);
    if (valadation.name === true && valadation.email === true && valadation.phoneNo === true) {
        msg.innerHTML = success;
        form.name.value = ``;
        form.email.value = ``;
        form.phoneNo.value = ``;
        msg.style.backgroundColor = 'lightgreen';
    }
    else {
        msg.innerHTML = fail;
        msg.style.backgroundColor = ' rgb(246, 148, 148)';
    }
    msg.style.display = 'block';
    msg.style.fontSize = '1.5rem';
    // if someone click on close btn the alert msg will be hide;
    const closebtn = document.getElementById('close');
    function close_alert(){
        msg.style.display = 'none';
    }
    // alert will be hide after 5 seconds
    closebtn.addEventListener('click' , close_alert);
    setTimeout(() => {
        msg.style.display = 'none';
    }, 5000);  

    e.preventDefault();
}

submitbtn.addEventListener('click', success_fail_msg);