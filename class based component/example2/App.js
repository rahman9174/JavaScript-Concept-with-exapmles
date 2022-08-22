class App extends React.Component{
    render(){
        let myElement = <h1>Hello , what is your name ? </h1>
        return myElement;
    }
    
}
ReactDOM.render(<App/> , document.getElementById("root"));