import React, { Component } from 'react';

export class BookFormModal extends Component {
    render() {
        let title = this.props.title
        let description = this.props.description
        let email = this.props.email
        let status = this.props.status
        let author = this.props.author
        let updateState = this.props.updateState
        let updateFrom = this.props.updateFrom
        return (
            <div>
                {
                    !updateState ? <>
                        <form>
                            <input type="texts" placeholder="title" onChange={this.props.handleBookTitle} />
                            <input type="texts" placeholder="description" onChange={this.props.handleBookDescription} />
                            <input type="texts" placeholder="email" onChange={this.props.handleBookEmail} />
                            <input type="texts" placeholder="status" onChange={this.props.handleBookStatus} />
                            <input type="texts" placeholder="author" onChange={this.props.handleBookAuthor} />
                            <button onClick={this.props.handleSubmit} >Add Book</button>
                        </form>
                    </> :
                        <form>
                            <input type="texts" onChange={this.props.handleBookTitle} value={title} />
                            <input type="texts" onChange={this.props.handleBookDescription} value={description} />
                            <input type="texts" onChange={this.props.handleBookEmail} value={email} />
                            <input type="texts" onChange={this.props.handleBookStatus} value={status} />
                            <input type="texts" onChange={this.props.handleBookAuthor} value={author} />
                            <button onClick={updateFrom} >Update Book</button>
                        </form>
                }
            </div>
        )
    }
}

export default BookFormModal;
