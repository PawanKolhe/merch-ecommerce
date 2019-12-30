import React from 'react';

import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // reset inputs
    this.setState({email: '', password: ''});
  }
  
  render() {
    return (
      <div className='signin'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label='Email' name='email' type='email' value={this.state.email} handleChange={this.handleChange} required />
          <FormInput label='Password' name='password' type='password' value={this.state.password} handleChange={this.handleChange} required />

          <CustomButton type='submit' name='Login'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}
export default SignIn;
