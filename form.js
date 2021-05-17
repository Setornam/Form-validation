//targeting the elements (form and form inputs)
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
 
// an event listener for when the form is submitted
    form.addEventListener('submit', e   => {
        e.preventDefault();
        
        //call on a custom function to check inputs
        checkInputs();
    });
    
    function checkInputs() {
        //getting the values from the input to be checked & trim to remove the whitespaces
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        //conditional statement to run the function for all inputs
        if(usernameValue === '') {
            //call function to show error
            setErrorFor(username, 'Username cannot be blank');
        } else {
            //call function to show success message
            setSuccessFor(username);
        }
        
        if(emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
        } else {
            setSuccessFor(email);
        }
        
        if(passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else {
            setSuccessFor(password);
        }
        
        if(password2Value === '') {
            setErrorFor(password2, 'Password check cannot be blank');
        } else if(passwordValue !== password2Value) {
            setErrorFor(password2, 'Passwords does not match');
        } else{
            setSuccessFor(password2);
        }
    }
    
    //defining custom error function
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    //defining custom success function
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
      
    //custom function to check the validity of email
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    