import React from 'react'

// function Welcome(props){

// 	return <h1> {props.name}</h1>
// }

class Welcome extends React.Component{
	constructor(props){
		super(props);
		this.oneRef = React.createRef()


		}

		oneRef(){
			this.oneRef.current.focus();
			
		}


		clickMe = () =>{
			alert(this.oneRef.current.value)

	}
	render(){

		return(
		<div>
		 <input type="text" ref={this.oneRef}

		 />

		 <button onClick={this.clickMe}> Click</button>

		 </div>
		 )
	}
}

//export default Welcome