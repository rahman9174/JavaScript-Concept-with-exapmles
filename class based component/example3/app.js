class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
                <Clock/>
                <RandomNum/>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));