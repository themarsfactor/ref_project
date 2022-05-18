import React from 'react'
import ChildIn from './ChildIn.js'
class ParentCheck extends React.Component{
	constructor(props){
		super(props);
		this.myRef = React.createRef()
	}


	

	CheckUs= () =>{
		this.myRef.current.focus()
	}

	render(){
		return (
			<div>

			<ChildIn ref={this.myRef} />
			<button onClick={this.CheckUs}>Create</button>

			</div>

			)
	}
}

export default ParentCheck