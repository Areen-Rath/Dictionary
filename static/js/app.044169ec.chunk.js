(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r=n(2),o=n.n(r),a=n(4),c=n.n(a),i=n(6),l=n.n(i),u=n(9),s=n.n(u),f=n(1),h=n.n(f),p=n(0),d=n(231),y=n(230),m=n(22),g=n.n(m),v=n(24),E=n(8),w=n(73),x=n(53),b=n(7),R=n(96);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var k=function(e){l()(n,e);var t=C(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return p.createElement(R.a,{style:T.inputBox,placeholder:this.props.placeholder,onChangeText:this.props.onChangeText})}}]),n}(p.Component),T=b.a.create({inputBox:{marginTop:20,width:"80%",height:40,borderWidth:2,alignSelf:"center",textAlign:"center"}}),A=n(97);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var B=function(e){l()(n,e);var t=S(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return p.createElement(A.a,{style:P.button,onPress:this.props.onPress},p.createElement(v.a,{style:P.buttonText},"Search"))}}]),n}(p.Component),P=b.a.create({button:{marginTop:20,width:100,height:30,backgroundColor:"red",alignSelf:"center",alignItems:"center",justifyContent:"center",textAlign:"center"},buttonText:{fontWeight:"bold",fontSize:20,color:"white"}}),W=n(166);function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var Q=function(e){l()(n,e);var t=I(n);function n(){var e;o()(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).speak=function(){return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:W.a(e.props.text);case 1:case"end":return t.stop()}}),null,null,null,Promise)},e}return c()(n,[{key:"render",value:function(){var e=this;return p.createElement(A.a,{style:{alignSelf:"flex-start"},onPress:function(){e.speak()}},p.createElement(v.a,{style:O.text},this.props.text))}}]),n}(p.Component),O=b.a.create({text:{fontWeight:"bold",fontSize:30}});function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var F=function(e){l()(n,e);var t=D(n);function n(){var e;return o()(this,n),(e=t.call(this)).getWordData=function(){var t,n;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.state.input,e.setState({word:t.toLowerCase(),wordData:[]}),n="https://api.dictionaryapi.dev/api/v2/entries/en/"+t,r.next=5,g.a.awrap(fetch(n).then((function(e){return e.json()})).then((function(t){var n=[];for(var r in t){t[r].meanings.map((function(e){n.push([e.partOfSpeech.toUpperCase(),e.definitions[0].definition])}))}e.setState({wordData:n})})));case 5:case"end":return r.stop()}}),null,null,null,Promise)},e.renderItem=function(e){return p.createElement(E.a,{style:{marginTop:20}},p.createElement(v.a,null,e.item[0]),p.createElement(v.a,null,e.item[1]))},e.state={input:"",word:"",wordData:[]},e}return c()(n,[{key:"render",value:function(){var e=this;return p.createElement(x.b,{style:{flex:1,backgroundColor:"white"},keyboardShouldPersistTaps:"handled"},p.createElement(E.a,{style:{flexDirection:"row",justifyContent:"center"}},p.createElement(k,{placeholder:"Enter a word",onChangeText:function(t){e.setState({input:t})}})),p.createElement(B,{onPress:function(){e.state.input&&e.getWordData()}}),p.createElement(E.a,{style:{marginTop:20,marginLeft:15}},p.createElement(Q,{text:this.state.word}),p.createElement(w.a,{data:this.state.wordData,renderItem:this.renderItem,keyExtractor:function(e,t){return t.toString()}})),p.createElement(E.a,{style:{marginTop:50}},p.createElement(v.a,{style:{textAlign:"center"}},"Type a word and click on Search. You will get the meaning of the word."),p.createElement(v.a,{style:{marginTop:10,textAlign:"center"}},"Click on the word and you can hear the pronunciation of the word."),p.createElement(v.a,{style:{marginTop:10,fontWeight:"bold",textAlign:"center"}},"Created by Areen Rath")))}}]),n}(p.Component),j=n(43);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var Y=function(e){l()(r,e);var t=L(r);function r(){return o()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){return p.createElement(x.b,{style:{flex:1,backgroundColor:"white"}},p.createElement(E.a,{style:z.topicContainer},p.createElement(v.a,{style:z.header},"Searching a Word Meaning"),p.createElement(v.a,{style:{marginTop:20}},"1. Type a word."),p.createElement(v.a,null,"2. Click on the Search button."),p.createElement(j.a,{style:{width:300,height:100},source:n(203)}),p.createElement(v.a,null,"3. You will get the meaning of the word."),p.createElement(j.a,{style:{width:300,height:150},source:n(204)})),p.createElement(E.a,{style:z.topicContainer},p.createElement(v.a,{style:z.header},"Text-to-Speech"),p.createElement(v.a,{style:{marginTop:20}},"1. Click on the word."),p.createElement(v.a,null,"2. You can hear the pronunciation of the word.")),p.createElement(E.a,{style:z.topicContainer},p.createElement(v.a,{style:z.header},"FAQs"),p.createElement(v.a,{style:z.FAQs},"Q: Is this an online or an offline app?"),p.createElement(v.a,null,"A: It is an online app."),p.createElement(v.a,{style:z.FAQs},"Q: Is this app in development?"),p.createElement(v.a,null,"A: Yes, this app is in development but the releases are not buggy."),p.createElement(v.a,{style:z.FAQs},"Q: Why can't I see the meanings of the words?"),p.createElement(v.a,null,"A: If you can't see the meanings of the words, it may be because of slow or no network. On startup, it may take time for the meanings of the word to be displayed."),p.createElement(v.a,{style:z.FAQs},"Q: Why can't I listen to the pronunciation of the words?"),p.createElement(v.a,null,"A: If you can't listen to the pronunciation of the words, it may be because of slow or no network. On startup, it may take time for pronunciation of the word to be heard."),p.createElement(v.a,{style:[z.FAQs,{marginLeft:-15,textAlign:"center"}]},"In case of slow network, please wait for the meaning of the word to be displayed or for the pronunciation of the word to be heard.")),p.createElement(v.a,{style:{marginTop:30,fontWeight:"bold",textAlign:"center"}},"Created by Areen Rath"))}}]),r}(p.Component),z=b.a.create({topicContainer:{marginTop:20,marginLeft:15},header:{marginTop:20,fontSize:30,fontWeight:"bold"},FAQs:{marginTop:20}});function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var N=Object(y.a)(),H=function(e){l()(n,e);var t=J(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return p.createElement(d.a,null,p.createElement(N.Navigator,{initialRouteName:"English Dictionary",screenOptions:{headerTitleAlign:"center"}},p.createElement(N.Screen,{name:"English Dictionary",component:F,options:{headerStyle:{backgroundColor:"#ffaa00"},headerTitleStyle:{fontWeight:"bold"}}}),p.createElement(N.Screen,{name:"Help and FAQs",component:Y,options:{headerStyle:{backgroundColor:"#ffaa00"},headerTitleStyle:{fontWeight:"bold"}}})))}}]),n}(p.Component)},173:function(e,t,n){e.exports=n(218)},203:function(e,t,n){e.exports=n.p+"static/media/search.504a041c.png"},204:function(e,t,n){e.exports=n.p+"static/media/result.d228d718.png"}},[[173,1,2]]]);
//# sourceMappingURL=app.044169ec.chunk.js.map