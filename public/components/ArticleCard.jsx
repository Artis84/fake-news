import { Component } from "react";

class ArticleCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main className="inline-flex m-5">
                <div>
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img className="rounded-t-lg" src={this.props.img} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{this.props.title}</h5>
                            <p className="text-gray-700 text-base mb-4">{this.props.description}</p>
                            <a
                                href={this.props.url}
                                className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Voir l'article
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ArticleCard;
