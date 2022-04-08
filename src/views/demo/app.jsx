import React from "react";
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            userInput:''
        }
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value });
    }

    clearAndFocusInput() {
        this.setState({ userInput: '' }, () => {
            this.refs.theInput.focus();
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to Focus and Reset
                </div>
                <input
                    ref="theInput"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}
export default App