import React, { Component } from 'react';

export class BookFormModal extends Component {

    render() {
        return (
            <div>
                <form>
                    <input type="texts" placeholder="title" onChange={this.props.handleBookTitle} />
                    <input type="texts" placeholder="description" onChange={this.props.handleBookDescription} />
                    <input type="texts" placeholder="email" onChange={this.props.handleBookEmail} />
                    <input type="texts" placeholder="status" onChange={this.props.handleBookStatus} />
                    <input type="texts" placeholder="author" onChange={this.props.handleBookAuthor} />
                    <button onClick =  {this.props.handleSubmit} >Add Book</button>
                </form>

            </div>
        )
    }
}

export default BookFormModal;
