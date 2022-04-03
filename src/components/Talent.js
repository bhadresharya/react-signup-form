import React, { useState } from 'react';

function Talent() {

    const [value, setValues] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    });

    const onChangeValue = (event) => {
        setValues({ ...value, [event.target.name]: event.target.value })
    }

    const submitTalent = event => {
        event.preventDefault();

        const url = 'http://wren.in:3200/api/sign-up/talent'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ first_name: value.firstName, last_name: value.lastName, user_name: value.userName, email: value.email, password: value.password })
        }
        fetch(url, requestOptions)
            .then(response => {
                setValues({
                    firstName: '',
                    lastName: '',
                    userName: '',
                    email: '',
                    password: ''
                })
                console.log('Submitted Successfully')})
            .catch(error => console.log('Form submit error', error))
    }

    return (
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <h4 className="text-center mb-4">Create Your Talent Account</h4>
            <form className="w-50 m-auto" onSubmit={submitTalent}>
                <div className="mb-3">
                    <label className="mb-2 ms-2">First Name*</label>
                    <input type="text" className="form-control rounded-pill" value={value.firstName} onChange={onChangeValue} name="firstName" required />
                </div>
                <div className="mb-3">
                    <label className="mb-2 ms-2">Last Name*</label>
                    <input type="text" className="form-control rounded-pill" value={value.lastName} onChange={onChangeValue} name="lastName" required />
                </div>
                <div className="mb-3">
                    <label className="mb-2 ms-2">Username*</label>
                    <input type="text" className="form-control rounded-pill" value={value.userName} onChange={onChangeValue} name="userName" required />
                </div>
                <div className="mb-3">
                    <label className="mb-2 ms-2">Email*</label>
                    <input type="email" className="form-control rounded-pill" value={value.email} onChange={onChangeValue} name="email" required />
                </div>
                <div className="mb-3">
                    <label className="mb-2 ms-2">Password*</label>
                    <input type="password" className="form-control rounded-pill" value={value.password} onChange={onChangeValue} name="password" required />
                </div>
                <div className="mb-3 form-check text-center">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="terms-conditions" required />
                        I agree to the Terms and Conditions.
                    </label>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary rounded-pill px-5 text-uppercase">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default Talent;