(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=a(6),i=a(2),m=a(3),s=a(5),u=a(4),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.hadleInput=function(t){var a=t.target;e.setState({inputValue:a.value})},e.hadleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{onSubmit:this.hadleSubmit,className:"SearchForm"},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.hadleInput})))}}]),a}(n.Component),g=function(e){var t=e.imageLink,a=e.largeImageUrl,n=e.webformatWidth,o=e.webformatHeight;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{"data-img":a,src:t,alt:"",className:"ImageGalleryItem-image",width:n,height:o}))},d=function(e){var t=e.images,a=e.onClick;return r.a.createElement("ul",{onClick:a,className:"ImageGallery"},t.map((function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.webformatWidth,o=e.webformatHeight,c=e.id;return r.a.createElement(g,{largeImageUrl:a,imageLink:t,webformatWidth:n,webformatHeight:o,key:c})})))},f=function(e){var t=e.handleClickBtn;return r.a.createElement("button",{type:"button",onClick:t,className:"Button"},"Load more")},p=a(9),b=a.n(p),v=(a(36),function(){return r.a.createElement("div",{className:"Spiner"},r.a.createElement(b.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100}))}),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModalByKeyDown=function(t){"Escape"===t.code&&e.props.onClick()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalByKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalByKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.largeImageUrl,a=e.onClick;return r.a.createElement("div",{onClick:a,className:"Overlay"},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:t,alt:""})))}}]),a}(n.Component),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=13157109-fcd6eded5baca4880d7f5c7a8&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return e.hits}))},E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,searchRequest:"",page:1,largeImageUrl:null,loader:!1},e.fetchImages=function(){var t=e.state,a=t.searchRequest,n=t.page,r=document.documentElement.offsetHeight-120;e.setState({loader:!0}),w(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}})),window.scrollTo({top:r,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loader:!1})}))},e.handleSubmitForm=function(t){e.setState({searchRequest:t,images:[],page:1})},e.toggleModalWindow=function(t){var a=t.target;e.setState({largeImageUrl:a.dataset.img})},e.closeModalWindow=function(){e.setState({largeImageUrl:null})},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchRequest!==this.state.searchRequest&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loader,n=e.largeImageUrl,o=t.length>0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{onSubmit:this.handleSubmitForm}),o&&r.a.createElement(d,{images:t,onClick:this.toggleModalWindow}),o&&r.a.createElement(f,{handleClickBtn:this.fetchImages}),a&&r.a.createElement(v,null),n&&r.a.createElement(y,{largeImageUrl:n,onClick:this.closeModalWindow}))}}]),a}(n.Component);a(37);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0f251c9e.chunk.js.map