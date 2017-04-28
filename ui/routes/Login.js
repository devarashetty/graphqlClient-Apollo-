import React from 'react';
import ReactDom from 'react-dom';

export default class Login extends React.Component{
	render(){
		return(
			<div>
				<form>
					<input type="text" placholder="enter username"/>
					<input type ="text" placholder="enter password"/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}