(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{165:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e(30),o=e.n(a),i=(e(42),e(43),e(20)),c=e(9),s=e(10),u=e(12),l=e(11),d=e(1),p=e(4),f=e(5);function h(){var n=Object(p.a)(["\npadding:50px 0px 50px;\nwidth:100%;\nbackground-color:grey;\n"]);return h=function(){return n},n}var b=f.a.header(h());function j(n){var t=n.children;return Object(r.jsx)(b,{children:Object(r.jsx)("nav",{children:t})})}function g(){var n=Object(p.a)(["\nwidth:100%;\nheight:30px;\nborder: 2px solid black;\nborder-radius:0.5rem;\npadding-left: 10px;\nfont-size:1rem;\n"]);return g=function(){return n},n}function m(){var n=Object(p.a)(["\nmax-width:350px;\nmargin:0 auto;\n"]);return m=function(){return n},n}var v=f.a.form(m()),O=f.a.input(g()),x=function(n){Object(u.a)(e,n);var t=Object(l.a)(e);function e(){var n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=t.call.apply(t,[this].concat(a))).state={inputValue:""},n.handleInput=function(t){n.setState({inputValue:t.target.value})},n.handlerForm=function(t){t.preventDefault(),n.props.onSearch(n.state.inputValue),n.setState({inputValue:""})},n}return Object(s.a)(e,[{key:"render",value:function(){return Object(r.jsx)(v,{onSubmit:this.handlerForm,children:Object(r.jsx)(O,{type:"text",value:this.state.inputValue,onChange:this.handleInput,placeholder:"Search images and photos"})})}}]),e}(d.Component);function y(){var n=Object(p.a)(["\npadding:50px 0px 50px;\nmax-width:1000px;\nmargin:0 auto;\n"]);return y=function(){return n},n}var w=f.a.section(y());function S(n){var t=n.children;return Object(r.jsx)(w,{children:t})}var k=e(7),I=e(8),L=e(13),M=e.p+"static/media/default-image.2e01288c.jpg";function U(){var n=Object(p.a)(["\nposition:absolute;\nleft:50%;\ntop:50%;\ntransform:translate(-50%,-50%);\n"]);return U=function(){return n},n}function C(){var n=Object(p.a)(["\nfont-size:0.8rem;\nfont-weight:600;\ncolor:#fff;\n&:not(:last-child){\n    margin-right:10px;\n}\n"]);return C=function(){return n},n}function A(){var n=Object(p.a)(["\nwidth:100%;\ndisplay:flex;\njustify-content:center;\nposition:absolute;\nbottom:5px;\n"]);return A=function(){return n},n}function E(){var n=Object(p.a)(["\nvisibility:hidden;\nopacity:0;\nposition:absolute;\nbackground-color:rgba(0,0,0,0.7);\ntop:0;\nleft:0;\nright:0;\nbottom: 0;\ntransition-property:opacity;\ntransition-duration:0.3s;\n"]);return E=function(){return n},n}function F(){var n=Object(p.a)(["\nheight:100%;\nwidth:100%;\n"]);return F=function(){return n},n}function z(){var n=Object(p.a)(["\nposition:relative;\nwidth:300px;\nheight:200px;\nmargin-bottom:25px;\n\n&:hover .overlay{\nvisibility:visible;\nopacity:1;\n}\n&:hover{\n   \n    box-shadow: 10px 5px 5px grey;\n    border:3px solid green;\n    animation: 2s "," ease-in-out;\n}\ncursor:zoom-in;\n"]);return z=function(){return n},n}function H(){var n=Object(p.a)(["\nwidth:100%;\ndisplay:flex;\nflex-wrap:wrap;\njustify-content:space-around;\n"]);return H=function(){return n},n}function V(){var n=Object(p.a)(["",""]);return V=function(){return n},n}var T=Object(f.b)(V(),L.tada),q=f.a.ul(H()),D=f.a.li(z(),T),N=f.a.img(F()),B=f.a.div(E()),G=f.a.div(A()),J=f.a.span(C()),R=f.a.div(U());function _(n){var t=n.imagesArr,e=n.onGetLargeImg;return Object(r.jsx)(q,{children:t.map((function(n){var t=n.id,a=n.webformatURL,o=void 0===a?M:a,i=n.largeImageURL,c=n.tags,s=n.likes,u=n.views,l=n.downloads;return Object(r.jsxs)(D,{onClick:function(){return e(i)},children:[Object(r.jsxs)(B,{className:"overlay",children:[Object(r.jsxs)(R,{children:[" ",Object(r.jsx)(k.a,{icon:I.c,color:"green",size:"3x"})]}),Object(r.jsxs)(G,{children:[Object(r.jsxs)(J,{children:[Object(r.jsx)(k.a,{icon:I.a,color:"green"})," ",u]}),Object(r.jsxs)(J,{children:[Object(r.jsx)(k.a,{icon:I.d,color:"green"})," ",s]}),Object(r.jsxs)(J,{children:[Object(r.jsx)(k.a,{icon:I.b,color:"green"})," ",l]})]})]}),Object(r.jsx)(N,{src:o,alt:c})]},t)}))})}var P=e(34),W=e.n(P);function K(n,t){return console.log(t),W.a.get("".concat("https://pixabay.com/api/","?key=").concat("18487031-50da0da9ba31764b7f32dc2fc","&q=").concat(n,"&image_type=photo&page=").concat(t,"&orientation=horizontal&per_page=12")).then((function(n){return n.data}))}var Q=e(35),X=e.n(Q);e(161);function Y(){var n=Object(p.a)(["\nmargin:0 auto;\ndisplay:flex;\njustify-content:center;\n"]);return Y=function(){return n},n}var Z=f.a.div(Y());function $(){return Object(r.jsx)(Z,{children:Object(r.jsx)(X.a,{type:"Bars",color:"#00BFFF",height:80,width:80})})}function nn(n){var t=n.message;return Object(r.jsx)("div",{children:t})}var tn=e(36);e(162),e(163),e(164);function en(){return Object(tn.info)({title:"The input is not correct",text:"Please input another request!!",delay:3e3})}function rn(){var n=Object(p.a)(["\nposition:absolute;\ntop:10px;\nright:10px;\nbackground-color:transparent;\nborder:2px solid grey;\nborder-radius:50%;\ncursor:pointer;\nopacity:0;\ntransition-property:opacity;\ntransition-delay:4s;\n&.open{\nopacity:1;\n}\n &.close{   \nopacity:0;\n }\n"]);return rn=function(){return n},n}function an(){var n=Object(p.a)(["\nposition:relative;\nopacity:0;\ntransition-property:opacity;\ntransition-delay:0.3s;\n&.open{\n    opacity:1;\n animation: 1s ",";\n}\n\n &.close{\n     animation: 0.6s ",";\n     opacity:0;\n }\n"]);return an=function(){return n},n}function on(){var n=Object(p.a)(["\noverflow: hidden;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\npadding:40px;\nposition: fixed;\ntop:0;\nleft:0;\nheight:100vh;\nwidth:100vw;\nbackground-color:rgba(0,0,0,0.7);\n"]);return on=function(){return n},n}function cn(){var n=Object(p.a)(["\nheight:100%;\nwidth:100%;\nobject-fit: contain;\n"]);return cn=function(){return n},n}function sn(){var n=Object(p.a)(["",""]);return sn=function(){return n},n}function un(){var n=Object(p.a)(["",""]);return un=function(){return n},n}var ln=Object(f.b)(un(),L.rollIn),dn=Object(f.b)(sn(),L.rollOut),pn=f.a.img(cn()),fn=f.a.div(on()),hn=f.a.div(an(),ln,dn),bn=f.a.button(rn()),jn=function(n){Object(u.a)(e,n);var t=Object(l.a)(e);function e(){var n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=t.call.apply(t,[this].concat(a))).state={isOut:null,timeOut:null},n.handlerEscape=function(t){"Escape"===t.code&&n.fadeoutModal()},n.fadeoutModal=function(){n.setState({isOut:!0});var t=setTimeout((function(){return n.props.onCloseModal()}),500);n.setState({timeOut:t})},n.onLoadImage=function(){n.setState({isOut:!1})},n}return Object(s.a)(e,[{key:"componentDidMount",value:function(){document.body.style.overflow="hidden",window.addEventListener("keydown",this.handlerEscape)}},{key:"componentWillUnmount",value:function(){document.body.style.overflow="visible",window.removeEventListener("keydown",this.handlerEscape),clearTimeout(this.state.timeOut)}},{key:"render",value:function(){var n=this,t=this.props.imgUrl,e="close",a="open";return Object(r.jsx)(fn,{children:Object(r.jsxs)(hn,{className:this.state.isOut?e:a,children:[Object(r.jsx)(bn,{className:this.state.isOut?e:a,type:"button",onClick:function(){n.fadeoutModal()},children:Object(r.jsx)(k.a,{icon:I.e,color:"green",size:"2x"})}),Object(r.jsx)(pn,{src:t,onLoad:this.onLoadImage})]})})}}]),e}(d.Component);function gn(){var n=Object(p.a)(["\ndisplay:block;\npadding:20px 10px;\nmax-width:250px;\nmargin:0 auto;\nborder:none;\nborder-radius:0.5rem;\nbackground-color:green;\ncolor:#fff;\nfont-size:0.8rem;\nfont-weight:600;\ncursor:pointer;\n"]);return gn=function(){return n},n}var mn=f.a.button(gn());function vn(n){var t=n.onLoad;return Object(r.jsx)(mn,{type:"button",onClick:function(){return t()},children:"LoadMore"})}var On=function(n){Object(u.a)(e,n);var t=Object(l.a)(e);function e(){var n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=t.call.apply(t,[this].concat(a))).state={images:[],formSearch:"",page:1,loading:!1,error:null,largeImgUrl:null,isfullHits:!1},n.fethApi=function(){var t=n.state,e=t.formSearch,r=t.page;n.setState({loading:!0}),K(e,r).then((function(t){0===t.hits.length&&en(),n.state.images.length<t.total?n.setState((function(n){return{images:[].concat(Object(i.a)(n.images),Object(i.a)(t.hits)),page:n.page+1,isfullHits:!1}})):n.setState({isfullHits:!0})})).catch((function(t){n.setState({error:t})})).finally((function(){n.setState({loading:!1})}))},n.handlerFormSubmit=function(t){n.setState({formSearch:t,page:1,images:[],isfullHits:!1})},n.openModal=function(t){n.setState({largeImgUrl:t})},n.closeModal=function(){n.setState({largeImgUrl:null})},n}return Object(s.a)(e,[{key:"componentDidUpdate",value:function(n,t){t.formSearch!==this.state.formSearch&&this.fethApi(),t.page!==this.state.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var n=this.state,t=n.images,e=n.loading,a=n.error,o=n.largeImgUrl,i=n.isfullHits;return Object(r.jsxs)(d.Fragment,{children:[Object(r.jsx)(j,{children:Object(r.jsx)(x,{onSearch:this.handlerFormSubmit})}),Object(r.jsx)("main",{children:Object(r.jsxs)(S,{children:[t.length>0&&Object(r.jsx)(_,{imagesArr:t,onGetLargeImg:this.openModal}),e&&Object(r.jsx)($,{}),a&&Object(r.jsx)(nn,{message:"Error loading:".concat(a.message)}),!e&&t.length>0&&!i&&Object(r.jsx)(vn,{onLoad:this.fethApi}),Object(r.jsx)("div",{id:"trackingObj"})]})}),o&&Object(r.jsx)(jn,{imgUrl:this.state.largeImgUrl,onCloseModal:this.closeModal})]})}}]),e}(d.Component);o.a.render(Object(r.jsx)(On,{}),document.querySelector("#root"))},43:function(n,t,e){}},[[165,1,2]]]);
//# sourceMappingURL=main.908c3d5c.chunk.js.map