(this["webpackJsonpdog-api"]=this["webpackJsonpdog-api"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var o=a(0),l=a.n(o),n=a(12),c=a.n(n),s=a(13),r=a(14),m=a(16),i=a(15),g=a(17),d=a(2),u=a.n(d),h=(a(40),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).handleDogSelect=function(t){e.setState({dog:t.target.value});var a="https://dog.ceo/api/breed/"+t.target.value+"/images/random";u.a.get(a).then((function(t){e.setState({imgURL:t.data.message})})).catch((function(e){console.log("Error fetching image:",e)}))},e.handleDogName=function(t){e.setState({dogName:t.target.value})},e.handleFontSelect=function(t){e.setState({font:t.target.value})},e.handleFontColorSelect=function(t){e.setState({fontColor:t.target.value})},e.saveStorage=function(){var t=e.state,a=t.dog,o=t.dogName,l=t.font,n=t.fontColor,c=t.imgURL,s=(new Date).toLocaleDateString(),r=(new Date).getHours()+":"+String((new Date).getMinutes()).padStart(2,"0");e.setState({day:s,hour:r}),localStorage.setItem("Dog",a),localStorage.setItem("Img URL",c),localStorage.setItem("Dog Name",o),localStorage.setItem("Font",l),localStorage.setItem("Font Color",n),localStorage.setItem("Day",s),localStorage.setItem("Hour",r),alert("Seu cachorro foi salvo com sucesso!")},e.state={imgURL:"",list:[],dog:"",dogName:"",font:"",fontColor:"",day:"",hour:""},e}return Object(g.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("Dog")&&this.setState({dog:localStorage.getItem("Dog"),imgURL:localStorage.getItem("Img URL"),dogName:localStorage.getItem("Dog Name"),font:localStorage.getItem("Font"),fontColor:localStorage.getItem("Font Color"),day:localStorage.getItem("Day"),hour:localStorage.getItem("Hour")})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.list;u.a.get("https://dog.ceo/api/breeds/list").then((function(a){e.setState({list:t.concat(a.data.message)})})).catch((function(e){console.log("Error fetching: ",e)}))}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("h1",null,"Dog API")),l.a.createElement("div",{className:"col-sm-3 text-sm-right"},l.a.createElement("button",{type:"button",disabled:!this.state.dog,className:"btn btn-dark",onClick:this.saveStorage},"Salvar"))),l.a.createElement("div",{className:"row mt-2"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("select",{value:this.state.dog,onChange:this.handleDogSelect},l.a.createElement("option",{value:""}," Ra\xe7a do cachorro "),this.state.list.map((function(e){return l.a.createElement("option",{value:e,key:e}," ",e," ")})))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("input",{type:"text",name:"name",placeholder:""===this.state.dogName?"Nome de seu cachorro":this.state.dogName,onChange:this.handleDogName})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("select",{value:this.state.font,onChange:this.handleFontSelect},l.a.createElement("option",{value:""}," Fonte"),l.a.createElement("option",{value:"font1"},"Lato"),l.a.createElement("option",{value:"font2"},"Calistoga"),l.a.createElement("option",{value:"font3"},"Bebas Neue"),l.a.createElement("option",{value:"font4"},"Indie Flower"),l.a.createElement("option",{value:"font5"},"Dancing Script"))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("select",{value:this.state.fontColor,onChange:this.handleFontColorSelect},l.a.createElement("option",{value:""}," Cor da fonte"),l.a.createElement("option",{value:"color1",className:"color1Bg"},"Cor 1"),l.a.createElement("option",{value:"color2",className:"color2Bg"},"Cor 2"),l.a.createElement("option",{value:"color3",className:"color3Bg"},"Cor 3"),l.a.createElement("option",{value:"color4",className:"color4Bg"},"Cor 4"),l.a.createElement("option",{value:"color5",className:"color5Bg"},"Cor 5")))),l.a.createElement("div",{className:"row mt-4"},l.a.createElement("div",{className:"card bg-dark text-white text-left"},l.a.createElement("img",{src:""===this.state.imgURL?"https://gsdweb.space/images/bgdark.png":this.state.imgURL,className:"card-img",alt:"Dog API"}),l.a.createElement("div",{className:"card-img-overlay"},l.a.createElement("h5",{className:"card-title "+this.state.font+" "+this.state.fontColor},""===this.state.dogName?"Nome do Cachorro":this.state.dogName),l.a.createElement("p",{className:"card-text "+this.state.font+" "+this.state.fontColor},""===this.state.dog?"Ra\xe7a do Cachorro":this.state.dog),l.a.createElement("p",{className:"card-text "+this.state.font+" "+this.state.fontColor},l.a.createElement("small",null,""===this.state.day?"":"Salvo em: "+this.state.day+" \xe0s "+this.state.hour))))))}}]),t}(o.Component));a(41);c.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ae34dea9.chunk.js.map