import React from 'react'
import logo from './logo.svg';
import './App.css';
import ParentCheck from "./Components/ParentCheck.js"




class App extends React.Component{

  constructor(props){
    super(props);
    this.oneRef = React.createRef()
  }

  oneRef(){
    this.oneRef.current.focus();
  }


  checkMe = () =>{
    alert(this.oneRef.current.value)

  }


render(){

  return(
    <div>

    <ParentCheck />
    <input />

    <input ref={this.oneRef} />


    <button onClick={this.checkMe}>Click me </button>

    </div>



      )
}
}

// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();  }

//   componentDidMount() {
//     this.textInput.current.focusTextInput();  }

//   render() {
//     return (
//       <CustomTextInput ref={this.textInput} />


//           );
//   }
// }

// export default CustomTextInput
// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     // create a ref to store the textInput DOM element
//     this.textInput = React.createRef();    
//     this.focusTextInput = this.focusTextInput.bind(this);
//   }

//   focusTextInput() {
//     // Explicitly focus the text input using the raw DOM API
//     // Note: we're accessing "current" to get the DOM node
//     this.textInput.current.focus();  
//     alert("yes");
//   }

//   render() {
//     // tell React that we want to associate the <input> ref
//     // with the `textInput` that we created in the constructor
//     return (
//       <div>

          
//         <input
//           type="text" value="active"
//           ref={this.textInput} />          
          
//           <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
      
//       </div>
//     );
//   }
// }

export default App