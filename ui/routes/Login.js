import React from 'react';
import ReactDom from 'react-dom';
import {graphql} from 'react-apollo';


// import verifyLogin from '../graphql/addloginmutation.graphql';

var bcrypt = require('bcrypt');
bcrypt.compare("admin321$","$2a$10$WUslZjETDavaupkX10aSK.ljh5oBw8dPt/OdXadaC.mgaYJnomCJW").then(function(res) {
	console.log("-------------------rs",res);
	// body...
})


console.log("bcrypt",bcrypt);

class Login extends React.Component{
	constructor(props){
		super(props);
		console.log("------------this.props.",props);	
	}

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

export default Login;