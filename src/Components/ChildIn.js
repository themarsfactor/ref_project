import React from 'react'

// class ChildIn extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return (
// 			<div>
// 			(<input />)
// 			</div>
// 			)
// 	}
// }

const ChildIn = React.forwardRef((props, ref) =>{
	return(
			<div>
			<input ref={ref} type="text" /> 
			</div>
		)

}) 

export default ChildIn