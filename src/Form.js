import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            book: '',
            price: ''
        }

        this.state = this.initialState;
    }

    inputListener = event => {
        const {name, value} = event.target;
    
        this.setState({
          [name] : value
        });
    }

    formSubmit = () => {
        this.props.submitListener(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, book, price } = this.state;

        return (
        <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.inputListener}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="book">Book</label>
                        <input
                            id="book"
                            type="text"
                            name="book"
                            value={book}
                            onChange={this.inputListener}
                        />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="price">Price</label>
                        <input
                            id="price"
                            type="text"
                            name="price"
                            value={price}
                            onChange={this.inputListener}
                        />
                    </div>
                </div>
                <button onClick={this.formSubmit} type="button">Save
                </button>
            </form>);

    }
}

export default Form;