import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signIn, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends Component {

  constructor(props) {
    super(props)

    this.state = {
        email: '',
        password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      signIn(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name]: value })
  }

  render(){
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    label="email" 
                    handleChange={this.handleChange} 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    required
                />
                <FormInput 
                    label="password" 
                    handleChange={this.handleChange} 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    required
                />

                <div className="buttons">
                  <CustomButton type="submit"> Sign in </CustomButton>
                  <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    )
  }
}

export default SignIn