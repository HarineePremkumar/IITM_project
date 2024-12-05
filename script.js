function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
    var interest = document.querySelectorAll('input[name="interest"]:checked');
    
    var nameError = document.getElementById('nameError');
    var phoneError = document.getElementById('phoneError');
    var dobError = document.getElementById('dobError');
    var emailError = document.getElementById('emailError');
    var addressError = document.getElementById('addressError');
    var genderError = document.getElementById('genderError');
    var interestError = document.getElementById('interestError');
    
    var isValid = true;

    nameError.textContent = '';
    phoneError.textContent = '';
    dobError.textContent = '';
    emailError.textContent = '';
    addressError.textContent = '';
    genderError.textContent = '';
    interestError.textContent = '';

    if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    if (phone === '') {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    } else if (!isValidPhone(phone)) {
        phoneError.textContent = 'Invalid phone number format';
        isValid = false;
    }

    if (dob === '') {
        dobError.textContent = 'Date of Birth is required';
        isValid = false;
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    if (address === '') {
        addressError.textContent = 'Address is required';
        isValid = false;
    }

    if (gender === '') {
        genderError.textContent = 'Gender is required';
        isValid = false;
    }

    if (interest.length === 0) {
        interestError.textContent = 'Area of Interest is required';
        isValid = false;
    }

    return isValid;
}

function isValidPhone(phone) {
    // Simple phone number validation using regular expression
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function isValidEmail(email) {
    // Simple email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
