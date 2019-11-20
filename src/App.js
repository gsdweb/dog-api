import React, { Component } from 'react';
import axios from "axios";
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imgURL: "",
      list: [],
      dog: "",
      dogName: "",
      font: "",
      fontColor: "",
      day: "",
      hour: ""
    }
  }

  handleDogSelect = (e) => {
    this.setState({ dog: e.target.value })
    let url = "https://dog.ceo/api/breed/" + e.target.value + "/images/random";
    axios.get(url).then(response => {
      this.setState({ imgURL: response.data.message });
    }).catch(err => {
      console.log("Error fetching image:", err);
    });
  }

  handleDogName = (e) => {
    this.setState({
      dogName: e.target.value
    })
  }

  handleFontSelect = (e) => {
    this.setState({
      font: e.target.value
    })
  }

  handleFontColorSelect = (e) => {
    this.setState({
      fontColor: e.target.value
    })
  }

  saveStorage = () => {
    const { dog, dogName, font, fontColor, imgURL } = this.state;
    const day = new Date().toLocaleDateString();
    const hour = new Date().getHours() + ":" + String(new Date().getMinutes()).padStart(2, "0");;
    this.setState({day: day, hour: hour})
    localStorage.setItem('Dog', dog);
    localStorage.setItem('Img URL', imgURL);
    localStorage.setItem('Dog Name', dogName);
    localStorage.setItem('Font', font);
    localStorage.setItem('Font Color', fontColor);
    localStorage.setItem('Day', day);
    localStorage.setItem('Hour', hour);
    alert("Seu cachorro foi salvo com sucesso!");
  }

  componentWillMount() {
    localStorage.getItem('Dog') && this.setState({
      dog: localStorage.getItem('Dog'),
      imgURL: localStorage.getItem('Img URL'),
      dogName: localStorage.getItem('Dog Name'),
      font: localStorage.getItem('Font'),
      fontColor: localStorage.getItem('Font Color'),
      day: localStorage.getItem('Day'),
      hour: localStorage.getItem('Hour')
    })
  }

  componentDidMount() {
    const { list } = this.state;
    axios.get(`https://dog.ceo/api/breeds/list`).then(res => {
      this.setState({ list: list.concat(res.data.message) });
    }).catch(err => {
      console.log("Error fetching: ", err);
    });
  }

  render() {
    return (
      <main>

        <div className="row">
          <div className="col-sm-9"><h1>Dog API</h1></div>
          <div className="col-sm-3 text-sm-right">
            <button type="button" disabled={!this.state.dog} className="btn btn-dark" onClick={this.saveStorage}>Salvar</button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-3">
            <select value={this.state.dog} onChange={this.handleDogSelect}>
              <option value=""> Raça do cachorro </option>
              {this.state.list.map(e => (
                <option value={e} key={e}> {e} </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <input type="text" name="name" placeholder={this.state.dogName === "" ? "Nome de seu cachorro" : this.state.dogName} onChange={this.handleDogName} />
          </div>

          <div className="col-md-3">
            <select value={this.state.font} onChange={this.handleFontSelect}>
              <option value=""> Fonte</option>
              <option value="font1">Lato</option>
              <option value="font2">Calistoga</option>
              <option value="font3">Bebas Neue</option>
              <option value="font4">Indie Flower</option>
              <option value="font5">Dancing Script</option>
            </select>
          </div>

          <div className="col-md-3">
            <select value={this.state.fontColor} onChange={this.handleFontColorSelect}>
              <option value=""> Cor da fonte</option>
              <option value="color1" className="color1Bg">Cor 1</option>
              <option value="color2" className="color2Bg">Cor 2</option>
              <option value="color3" className="color3Bg">Cor 3</option>
              <option value="color4" className="color4Bg">Cor 4</option>
              <option value="color5" className="color5Bg">Cor 5</option>
            </select>
          </div>
        </div>

        <div className="row mt-4">

          <div className="card bg-dark text-white text-left">
            <img src={this.state.imgURL === "" ? "https://gsdweb.space/images/bgdark.png" : this.state.imgURL} className="card-img" alt="Dog API" />

            <div className="card-img-overlay">
              <h5 className={"card-title " + this.state.font + " " + this.state.fontColor}>{this.state.dogName === "" ? "Nome do Cachorro" : this.state.dogName}</h5>
              <p className={"card-text " + this.state.font + " " + this.state.fontColor}>{this.state.dog === "" ? "Raça do Cachorro" : this.state.dog}</p>
              <p className={"card-text " +  this.state.font + " " + this.state.fontColor}><small>{this.state.day === "" ? "" : "Salvo em: " + this.state.day + " às " + this.state.hour}</small></p>
            </div>
          </div>

        </div>


      </main>
    );
  }
}