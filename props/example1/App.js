class App extends React.Component {
    render(){
        return(
            <div>
                <h2>Emoji Picker</h2>
                <Emoji e1="😊" e2="😊" e3="😊"/>
                <Emoji e1="😊" e2="😂" e3="😊"/>
                <Emoji e1="😊" e2="😂" e3="😊"/>
                <Emoji e1="😂" e2="😂" e3="😂"/>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));