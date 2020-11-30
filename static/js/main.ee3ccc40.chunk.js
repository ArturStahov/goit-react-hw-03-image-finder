(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{165:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e(1),i=e.n(a),o=e(30),c=e.n(o),s=(e(42),e(43),e(20)),u=e(9),l=e(10),d=e(12),h=e(11),f=e(4),p=e(5);function b(){var n=Object(f.a)(["\n  padding: 50px 0px 20px;\n  width: 100%;\n  background-color: grey;\n"]);return b=function(){return n},n}var j=p.a.header(b());function g(n){var t=n.children;return Object(r.jsx)(j,{id:"page-header",children:Object(r.jsx)("nav",{children:t})})}function v(){var n=Object(f.a)(["\n  width: 100%;\n  height: 30px;\n  border: 2px solid black;\n  border-radius: 0.5rem;\n  padding-left: 10px;\n  font-size: 1rem;\n"]);return v=function(){return n},n}function m(){var n=Object(f.a)(["\n  max-width: 350px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n"]);return m=function(){return n},n}var O=p.a.form(m()),x=p.a.input(v()),y=function(n){Object(d.a)(e,n);var t=Object(h.a)(e);function e(){var n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={inputValue:""},n.handleInput=function(t){n.setState({inputValue:t.target.value})},n.handlerForm=function(t){t.preventDefault();var e=n.state.inputValue;n.props.onSearch(e),n.setState({inputValue:""})},n}return Object(l.a)(e,[{key:"render",value:function(){return Object(r.jsx)(O,{onSubmit:this.handlerForm,children:Object(r.jsx)(x,{type:"text",value:this.state.inputValue,onChange:this.handleInput,placeholder:"Search images and photos"})})}}]),e}(a.Component);function w(){var n=Object(f.a)(["\n  padding: 50px 0px 50px;\n  max-width: 1000px;\n  margin: 0 auto;\n"]);return w=function(){return n},n}var k=p.a.section(w());function S(n){var t=n.children;return Object(r.jsx)(k,{children:t})}var I=e(7),C=e(8),L=e(13);function F(){var n=Object(f.a)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]);return F=function(){return n},n}function M(){var n=Object(f.a)(["\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #fff;\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]);return M=function(){return n},n}function U(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  bottom: 5px;\n"]);return U=function(){return n},n}function A(){var n=Object(f.a)(["\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition-property: opacity;\n  transition-duration: 0.3s;\n"]);return A=function(){return n},n}function z(){var n=Object(f.a)(["\n  height: 100%;\n  width: 100%;\n"]);return z=function(){return n},n}function E(){var n=Object(f.a)(["\n  position: relative;\n  width: 300px;\n  height: 200px;\n  margin-bottom: 25px;\n\n  &:hover .overlay {\n    visibility: visible;\n    opacity: 1;\n  }\n  &:hover {\n    box-shadow: 10px 5px 5px grey;\n    border: 3px solid green;\n    animation: 2s "," ease-in-out;\n  }\n  cursor: zoom-in;\n"]);return E=function(){return n},n}function H(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]);return H=function(){return n},n}function V(){var n=Object(f.a)(["",""]);return V=function(){return n},n}var q=Object(p.b)(V(),L.tada),N=p.a.ul(H()),T=p.a.li(E(),q),D=p.a.img(z()),B=p.a.div(A()),G=p.a.div(U()),J=p.a.span(M()),R=p.a.div(F()),_=e.p+"static/media/default-image.2e01288c.jpg";function P(n){var t=n.imagesArr,e=n.onGetLargeImg;return Object(r.jsx)(N,{children:t.map((function(n){var t=n.id,a=n.webformatURL,i=void 0===a?_:a,o=n.largeImageURL,c=n.tags,s=n.likes,u=n.views,l=n.downloads;return Object(r.jsxs)(T,{onClick:function(){return e(o)},children:[Object(r.jsxs)(B,{className:"overlay",children:[Object(r.jsxs)(R,{children:[" ",Object(r.jsx)(I.a,{icon:C.d,color:"green",size:"3x"})]}),Object(r.jsxs)(G,{children:[Object(r.jsxs)(J,{children:[Object(r.jsx)(I.a,{icon:C.b,color:"green"})," ",u]}),Object(r.jsxs)(J,{children:[Object(r.jsx)(I.a,{icon:C.e,color:"green"})," ",s]}),Object(r.jsxs)(J,{children:[Object(r.jsx)(I.a,{icon:C.c,color:"green"})," ",l]})]})]}),Object(r.jsx)(D,{src:i,alt:c})]},t)}))})}var W=e(34),K=e.n(W);function Q(n,t){return K.a.get("".concat("https://pixabay.com/api/","?key=").concat("18487031-50da0da9ba31764b7f32dc2fc","&q=").concat(n,"&image_type=photo&page=").concat(t,"&orientation=horizontal&per_page=12")).then((function(n){return n.data}))}var X=e(35),Y=e.n(X);e(161);function Z(){var n=Object(f.a)(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n"]);return Z=function(){return n},n}var $=p.a.div(Z());function nn(){return Object(r.jsx)($,{children:Object(r.jsx)(Y.a,{type:"Bars",color:"#00BFFF",height:80,width:80})})}function tn(n){var t=n.message;return Object(r.jsx)("div",{children:t})}var en=e(36);e(162),e(163),e(164);function rn(){return Object(en.info)({title:"The input is not correct",text:"Please input another request!!",delay:3e3})}function an(){var n=Object(f.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: transparent;\n  border: 2px solid grey;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0;\n  transition-property: opacity;\n  transition-delay: 4s;\n  &.open {\n    opacity: 1;\n  }\n  &.close {\n    opacity: 0;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(f.a)(["\n  position: relative;\n  opacity: 0;\n  transition-property: opacity;\n  transition-delay: 0.3s;\n  &.open {\n    opacity: 1;\n    animation: 1s ",";\n  }\n\n  &.close {\n    animation: 0.6s ",";\n    opacity: 0;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(f.a)(["\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.7);\n"]);return cn=function(){return n},n}function sn(){var n=Object(f.a)(["\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n"]);return sn=function(){return n},n}function un(){var n=Object(f.a)(["",""]);return un=function(){return n},n}function ln(){var n=Object(f.a)(["",""]);return ln=function(){return n},n}var dn=Object(p.b)(ln(),L.rollIn),hn=Object(p.b)(un(),L.rollOut),fn=p.a.img(sn()),pn=p.a.div(cn()),bn=p.a.div(on(),dn,hn),jn=p.a.button(an()),gn=function(n){Object(d.a)(e,n);var t=Object(h.a)(e);function e(){var n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={isOut:null,timeOut:null},n.handlerEscape=function(t){"Escape"===t.code&&n.fadeoutModal()},n.fadeoutModal=function(){n.setState({isOut:!0});var t=setTimeout((function(){return n.props.onCloseModal()}),500);n.setState({timeOut:t})},n.onLoadImage=function(){n.setState({isOut:!1})},n}return Object(l.a)(e,[{key:"componentDidMount",value:function(){document.body.style.overflow="hidden",window.addEventListener("keydown",this.handlerEscape)}},{key:"componentWillUnmount",value:function(){document.body.style.overflow="visible",window.removeEventListener("keydown",this.handlerEscape),clearTimeout(this.state.timeOut)}},{key:"render",value:function(){var n=this,t=this.props.imgUrl,e="close",a="open",i=this.state.isOut;return Object(r.jsx)(pn,{children:Object(r.jsxs)(bn,{className:i?e:a,children:[Object(r.jsx)(jn,{className:i?e:a,type:"button",onClick:function(){n.fadeoutModal()},children:Object(r.jsx)(I.a,{icon:C.f,color:"green",size:"2x"})}),Object(r.jsx)(fn,{src:t,onLoad:this.onLoadImage})]})})}}]),e}(a.Component);function vn(){var n=Object(f.a)(["\n  display: block;\n  padding: 20px 10px;\n  max-width: 250px;\n  margin: 0 auto;\n  border: none;\n  border-radius: 0.5rem;\n  background-color: green;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n"]);return vn=function(){return n},n}var mn=p.a.button(vn());function On(n){var t=n.onLoad;return Object(r.jsx)(mn,{type:"button",onClick:function(){return t()},children:"LoadMore"})}function xn(){var n=Object(f.a)(["\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: green;\n  margin-right: 5px;\n"]);return xn=function(){return n},n}function yn(){var n=Object(f.a)(["\n  width: 17px;\n  height: 17px;\n"]);return yn=function(){return n},n}function wn(){var n=Object(f.a)(["\n  width: max-content;\n  display: block;\n  margin: 0 auto;\n"]);return wn=function(){return n},n}var kn=p.a.label(wn()),Sn=p.a.input(yn()),In=p.a.span(xn()),Cn=function(n){Object(d.a)(e,n);var t=Object(h.a)(e);function e(){var n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={isInfinityLoad:!1},n.handleCheckbox=function(t){var e=t.target.checked;n.setState({isInfinityLoad:e}),n.props.onCheckChange(e)},n}return Object(l.a)(e,[{key:"render",value:function(){var n=this.state.isInfinityLoad;return Object(r.jsxs)(kn,{children:[Object(r.jsx)(In,{children:"use infinity scroll:"}),Object(r.jsx)(Sn,{type:"checkbox",checked:n,onChange:this.handleCheckbox})]})}}]),e}(a.Component);function Ln(){var n=Object(f.a)(["\n  display: block;\n  position: fixed;\n  right: 5px;\n  bottom: 10px;\n  background-color: transparent;\n  cursor: pointer;\n  &:hover .icon {\n    color: green;\n  }\n"]);return Ln=function(){return n},n}var Fn=p.a.a(Ln());function Mn(){return Object(r.jsx)(Fn,{href:"#page-header",children:Object(r.jsx)(I.a,{className:"icon",icon:C.a,color:"grey",size:"3x"})})}var Un=function(n){Object(d.a)(e,n);var t=Object(h.a)(e);function e(){var n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={images:[],formSearch:"",page:1,loading:!1,error:null,largeImgUrl:null,isFullHits:!1,isInfinityScroll:!1},n.registrationIntersectionObserver=function(){var t=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&""!==n.state.formSearch&&n.state.isInfinityScroll&&(console.log("object is intersecting"),n.fethApi())}))}),{rootMargin:"200px",threshold:.5}),e=document.querySelector("#trackingObj");t.observe(e)},n.fethApi=function(){var t=n.state,e=t.formSearch,r=t.page;n.setState({loading:!0}),Q(e,r).then((function(t){0===t.hits.length&&rn(),n.state.images.length<t.total?n.setState((function(n){return{images:[].concat(Object(s.a)(n.images),Object(s.a)(t.hits)),page:n.page+1,isFullHits:!1}})):n.setState({isFullHits:!0})})).catch((function(t){n.setState({error:t})})).finally((function(){n.setState({loading:!1})}))},n.handlerFormSubmit=function(t){n.setState({formSearch:t,page:1,images:[],isFullHits:!1})},n.openModal=function(t){n.setState({largeImgUrl:t})},n.closeModal=function(){n.setState({largeImgUrl:null})},n.handleCheckbox=function(t){n.setState({isInfinityScroll:t}),n.registrationIntersectionObserver()},n}return Object(l.a)(e,[{key:"componentDidUpdate",value:function(n,t){t.formSearch!==this.state.formSearch&&this.fethApi(),t.page!==this.state.page&&(this.state.isInfinityScroll||window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}},{key:"render",value:function(){var n=this.state,t=n.images,e=n.loading,i=n.error,o=n.largeImgUrl,c=n.isFullHits,s=n.isInfinityScroll;return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)(g,{children:[Object(r.jsx)(y,{onSearch:this.handlerFormSubmit}),Object(r.jsx)(Cn,{onCheckChange:this.handleCheckbox})]}),Object(r.jsx)("main",{children:Object(r.jsxs)(S,{children:[t.length>0&&Object(r.jsx)(P,{imagesArr:t,onGetLargeImg:this.openModal}),e&&Object(r.jsx)(nn,{}),i&&Object(r.jsx)(tn,{message:"Error loading:".concat(i.message)}),!e&&t.length>0&&!c&&!s&&Object(r.jsx)(On,{onLoad:this.fethApi}),Object(r.jsx)("div",{id:"trackingObj"}),t.length>0&&Object(r.jsx)(Mn,{})]})}),o&&Object(r.jsx)(gn,{imgUrl:this.state.largeImgUrl,onCloseModal:this.closeModal})]})}}]),e}(a.Component);c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Un,{})}),document.querySelector("#root"))},43:function(n,t,e){}},[[165,1,2]]]);
//# sourceMappingURL=main.ee3ccc40.chunk.js.map