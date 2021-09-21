import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormModal from './BookFormModal';
let URL = process.env.REACT_APP_BACKEND_URL;

export class BestBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksList: [],
            title: '',
            description: '',
            email: '',
            status: '',
            author: '',
            id: '',
            showBooks: false,
        }
    }

    componentDidMount = () => {
        axios.get(`${URL}/books`)
            .then(res => {
                this.setState({ booksList: res.data });
                this.state.booksList.length > 0 ? this.setState({ showBooks: true }) : this.setState({ showBooks: false });
            })
    }

    handleBookTitle = (event) => {
        this.setState({ title: event.target.value });
    }
    handleBookDescription = (event) => {
        this.setState({ description: event.target.value });
    }
    handleBookEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleBookStatus = (event) => {
        this.setState({ status: event.target.value });
    }
    handleBookAuthor = (event) => {
        this.setState({ author: event.target.value });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let config = {
            method: "POST",
            baseURL: URL,
            url: `/create-data`,
            data: {
                title: this.state.title,
                description: this.state.description,
                email: this.state.email,
                status: this.state.status,
                author: this.state.author,
            },
        }
        axios(config).then(res => {
            console.log(res.data)
            this.setState({
                booksList: res.data
            })
        })
        document.location.reload(true)
    }
    
    deleteSubmit=(id)=>{
        let config={
          method:"DELETE",
          baseURL:URL,
          url:`/delete-data/${id}`
        }
        axios(config).then(res=>{
          console.log(res.data);
        })
        document.location.reload(true)
    }

    


    render() {
        return (
            <div>
                <BookFormModal
                    handleSubmit={this.handleSubmit}
                    handleBookTitle={this.handleBookTitle}
                    handleBookDescription={this.handleBookDescription}
                    handleBookEmail={this.handleBookEmail}
                    handleBookStatus={this.handleBookStatus}
                    handleBookAuthor={this.handleBookAuthor}
                    id={this.state.booksList._id}
                    deleteSubmit={this.deleteSubmit}
                />
                    <Carousel> {this.state.booksList.map(item => {
                        return <Carousel.Item>
                        <img
                            className="d-block w-27"
                            src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>{item.email}</p>
                            <p>{item.status}</p>
                            <p>{item.author}</p>
                            <button onClick = {()=>{this.deleteSubmit(item._id)}} >Delete</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    })}

                    </Carousel>
                {
                    !this.state.showBooks && <h1>The book collection is empty.</h1>
                }
            </div>
        )
    }
}

export default BestBooks;




// import React, { Component } from 'react';
// import axios from 'axios';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BookFormModal from './BookFormModal';
// let URL = process.env.REACT_APP_BACKEND_URL;

// export class BestBooks extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             booksList: [],
//             title: '',
//             description: '',
//             email: '',
//             status: '',
//             author: '',
//             showBooks: false,
//         }
//     }

//     componentDidMount = () => {
//         axios.get(`${URL}/books`)
//             .then(res => {
//                 this.setState({ booksList: res.data });
//                 this.state.booksList.length > 0 ? this.setState({ showBooks: true }) : this.setState({ showBooks: false });
//             })
//     }

//     handleBookTitle = (event) => {
//         this.setState({ title: event.target.value });
//     }
//     handleBookDescription = (event) => {
//         this.setState({ description: event.target.value });
//     }
//     handleBookEmail = (event) => {
//         this.setState({ email: event.target.value });
//     }
//     handleBookStatus = (event) => {
//         this.setState({ status: event.target.value });
//     }
//     handleBookAuthor = (event) => {
//         this.setState({ author: event.target.value });
//     }


//     handleSubmit = (event) => {
//         event.preventDefault();
//         let config = {
//             method: "POST",
//             baseURL: URL,
//             url: `/create-data`,
//             data: {
//                 title: this.state.title,
//                 description: this.state.description,
//                 email: this.state.email,
//                 status: this.state.status,
//                 author: this.state.author,
//             },
//         }
//         axios(config).then(res => {
//             console.log(res.data)
//             this.setState({
//                 booksList: res.data
//             })
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <BookFormModal
//                     handleSubmit={this.handleSubmit}
//                     handleBookTitle={this.handleBookTitle}
//                     handleBookDescription={this.handleBookDescription}
//                     handleBookEmail={this.handleBookEmail}
//                     handleBookStatus={this.handleBookStatus}
//                     handleBookAuthor={this.handleBookAuthor}
//                 />
//                     <Carousel> {this.state.booksList.map(item => {
//                         return <Carousel.Item>
//                         <img
//                             className="d-block w-27"
//                             src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
//                             alt="First slide"
//                         />
//                         <Carousel.Caption>
//                             <h3>{item.title}</h3>
//                             <p>{item.description}</p>
//                             <p>{item.email}</p>
//                             <p>{item.status}</p>
//                             <p>{item.author}</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     })}

//                     </Carousel>
//                 {
//                     !this.state.showBooks && <h1>The book collection is empty.</h1>
//                 }
//             </div>
//         )
//     }
// }

// export default BestBooks;

