import React from 'react'

class Many extends React.Component{

	constructor(props){
		super(props);
		this.oneRef = React.createRef()
	}

	oneRef(){
		this.oneRef.current.focus();
	}


	checkMe = () =>{
		alert(this.oneRef.value)

	}


render(){

	return(
		<div>

		<input ref={this.oneRef} />

		<button onClick={this.checkMe}>Click me </button>

		</div>



			)
}
}

export default Many