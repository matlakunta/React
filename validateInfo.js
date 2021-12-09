export default function validateInfo(values) {
    let errors = {};

    if(!values.firstname.trim()) {
        errors.firstname = 'First name is required';
    }

    if(!values.lastname.trim()) {
        errors.lastname = 'Last name is required';
    }
    if(!values.email) {
        errors.email = 'Email address is required';
    } else if ((!/\S+@\S+\.\S+/.test(values.email)) ) {
        errors.email = 'Email address is invalid';
    }

    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if(!values.phonenumber) {
        errors.phonenumber = 'Phone number is required'
    }  else if (values.phonenumber!= 10) {
        errors.phonenumber = 'Invalid Phone number'
    }

    return errors;
}