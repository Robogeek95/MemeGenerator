import React, { Component } from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
            <div>
                <div class="row d-flex flex-row justify-content-center align-items-center">
                    <form className="meme-form" onSubmit={this.handleSubmit}>
                        <div className="col-3 col-sm-auto">
                            <input className="border rounded"
                                type="text"
                                style={{ width: '100%' }}
                                name="topText"
                                placeholder="Top Text"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-3 col-sm-auto">
                            <input className="border rounded"
                                type="text"
                                style={{ width: '100%' }}
                                name="bottomText"
                                placeholder="Bottom Text"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            <button onClick={this.handleSubmit}
                                className="btn btn-success border rounded"
                                type="button">Generate</button></div>
                    </form>
                </div>

                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-12 col-md-8">
                        <div
                            className="d-flex flex-column justify-content-between"
                            style={{
                                height: 380, backgroundRepeat: 'no-repeat',
                                backgroundPosition: '50%', backgroundSize: 'cover',
                            }}>
                            <img src={this.state.randomImg} alt="" className='img-fluid' style={{
                                position: 'absolute', zIndex: -10,
                                height: 380,
                                width: 1000,
                            }} />
                            <p className="font-weight-bold text-white h2 text-center pt-3">{this.state.topText}</p>
                            <p className="font-weight-bold text-white h2 text-center pb-3">{this.state.bottomText}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MemeGenerator
