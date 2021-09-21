import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class BestBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksList: [],
            showBooks: false,
        }
    }

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`)
            .then(res => {
                this.setState({ booksList: res.data });
                this.state.booksList.length > 0 ? this.setState({ showBooks: true }) : this.setState({ showBooks: false });
                // console.log(this.state.booksList.length)
            })
    }
    render() {
        return (
            <div className=' container col-md-4' >
                {
                    this.state.showBooks && <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-27"
                                src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{this.state.booksList[0].title}</h3>
                                <p>{this.state.booksList[0].description}</p>
                                <p>{this.state.booksList[0].email}</p>
                                <p>{this.state.booksList[0].status}</p>
                                <p>{this.state.booksList[0].title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-27"
                                src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{this.state.booksList[1].title}</h3>
                                <p>{this.state.booksList[1].description}</p>
                                <p>{this.state.booksList[1].email}</p>
                                <p>{this.state.booksList[1].status}</p>
                                <p>{this.state.booksList[1].title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-27"
                                src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{this.state.booksList[2].title}</h3>
                                <p>{this.state.booksList[2].description}</p>
                                <p>{this.state.booksList[2].email}</p>
                                <p>{this.state.booksList[2].status}</p>
                                <p>{this.state.booksList[2].title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                }

                {
                    !this.state.showBooks && <h1>The book collection is empty.</h1>
                }

            </div>
        )
    }
}

export default BestBooks;



// {
//     this.state.showBooks && this.state.booksList.map(item => {
//         return <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>{item.title}</h3>
//                     <p>{item.description}</p>
//                     <p>{item.email}</p>
//                     <p>{item.status}</p>
//                     <p>{item.title}</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             </Carousel>

//     })
// }