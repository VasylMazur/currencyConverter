(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,a){},346:function(e,t,a){e.exports=a(644)},355:function(e,t,a){},643:function(e,t,a){},644:function(e,t,a){"use strict";a.r(t);var r,n=a(1),o=a.n(n),c=a(23),u=a.n(c),y=a(39),m=a(226),i=a(24),p=(a(355),a(27)),l=a(21),s=a(25),E=function(e){return{payload:e,type:"SET_TO_CURRENCY_SUCCESS"}},d=(a(93),a(144)),T=a.n(d),f=a(228);!function(e){e.YEAR="year",e.MONTH="month",e.DAY="day"}(r||(r={}));var C=function(e){return{payload:e,type:"SET_TO_CURRENCY_NAME"}},h=function(e){return{type:"GRAPH_ERROR",payload:e}},D=function(e){return{payload:e,type:"GET_GRAPH_CURRENCIES_SUCCESS"}},O=function(e){return{payload:e,type:"SET_DATE_TYPE"}},b=function(){return function(){var e=Object(f.a)(T.a.mark(function e(t,a){var n,o,c,u,y,m,i,p,l;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t({type:"CLEAR_GRAPH_CURRENCIES"}),n=a().graphState.fromDate,o=a().formState.fromCurrency.getCurrency(),c=a().formState.toCurrency.getCurrency(),t({payload:o,type:"SET_FROM_CURRENCY_NAME"}),t(C(c)),u=a().graphState.toDate,y=a().graphState.dateType,m="",i=0,p=0,y===r.DAY?(i=n.day,p=u.day):y===r.MONTH?(i=n.month,p=u.month):(i=n.year,p=u.year);case 14:if(!(i<=p)){e.next=23;break}return m=y===r.YEAR?"https://api.exchangeratesapi.io/".concat(i,"-").concat(n.month,"-").concat(n.day,"?symbols=").concat(c,"&base=").concat(o):y===r.MONTH?"https://api.exchangeratesapi.io/".concat(n.year,"-").concat(i,"-").concat(n.day,"?symbols=").concat(c,"&base=").concat(o):"https://api.exchangeratesapi.io/".concat(n.year,"-").concat(n.month,"-").concat(i,"?symbols=").concat(c,"&base=").concat(o),e.next=18,Object(s.a)({amount:100,currency:o}).convert(c,{endpoint:m,propertyPath:"rates.{{to}}"});case 18:l=e.sent,t(D({amount:l.getAmount()/100,date:i}));case 20:i++,e.next=14;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),t(h(e.t0));case 28:case"end":return e.stop()}},e,null,[[0,25]])}));return function(t,a){return e.apply(this,arguments)}}()},_={setFromCurrencySuccess:function(e){return{payload:e,type:"SET_FROM_CURRENCY_SUCCES"}},setToCurrencySuccess:E,convertThunk:function(e,t){return function(a){e.convert(t,{endpoint:"https://api.exchangeratesapi.io/latest?base={{from}}&symbols={{to}}",propertyPath:"rates.{{to}}"}).then(function(e){return a(E(e))}).catch(function(e){return a({payload:e,type:"FORM_ERROR"})})}},getCurrenciesThunk:b,switchCurrency:function(){return{type:"SWITCH_CURRENCY"}}},R=Object(i.b)(function(e){return{fromCurrency:e.formState.fromCurrency,toCurrency:e.formState.toCurrency}},_)(function(e){var t=Object(p.a)({},e);return o.a.createElement(l.b,{className:"CardForm",style:{backgroundColor:"#a5b9ff",paddingBottom:"4em",paddingTop:"4em"}},o.a.createElement(l.c,{style:{marginBottom:"1em"},value:t.fromCurrency.getCurrency(),type:"text",onChange:function(e){return t.setFromCurrencySuccess(Object(s.a)({amount:t.fromCurrency.getAmount(),currency:e.target.value}))},label:"From currency"}),o.a.createElement(l.c,{style:{marginBottom:"1em"},value:t.fromCurrency.getAmount(),type:"number",onChange:function(e){return!isNaN(parseFloat(e.target.value))&&t.setFromCurrencySuccess(Object(s.a)({amount:parseFloat(e.target.value),currency:t.fromCurrency.getCurrency()}))},label:"From amount"}),o.a.createElement(l.a,{style:{marginBottom:"1em"},variant:"contained",color:"inherit",onClick:function(){t.switchCurrency(),t.getCurrenciesThunk()}},"Switch"),o.a.createElement(l.c,{style:{marginBottom:"1em"},type:"text",label:"To currency",value:t.toCurrency.getCurrency(),onChange:function(e){return t.setToCurrencySuccess(Object(s.a)({amount:t.toCurrency.getAmount(),currency:e.target.value}))}}),o.a.createElement(l.c,{style:{marginBottom:"1em"},label:"To amount",value:t.toCurrency.getAmount()/100,disabled:!0}),o.a.createElement(l.a,{style:{marginBottom:"1em",display:"block"},variant:"contained",color:"primary",onClick:function(){t.convertThunk(Object(s.a)({amount:100*t.fromCurrency.getAmount(),currency:t.fromCurrency.getCurrency()}),t.toCurrency.getCurrency()),t.getCurrenciesThunk()}},"Convert"))}),S=(a(183),{setDateType:O}),g=Object(i.b)(function(e){return{dateType:e.graphState.dateType}},S)(function(e){var t=Object(p.a)({},e);return o.a.createElement("div",{className:"GraphInformationContainer"}," ",o.a.createElement("h1",null,"Graph date type in"," ",t.dateType),o.a.createElement(l.a,{color:"primary",onClick:function(){return t.setDateType(r.YEAR)}},"Set date to years"),o.a.createElement(l.a,{color:"primary",onClick:function(){return t.setDateType(r.MONTH)}}," ","Set date to months"," "),o.a.createElement(l.a,{color:"primary",onClick:function(){return t.setDateType(r.DAY)}},"Set date to days"))}),A=function(e){var t=e.inputValue,a=e.inputType,n=e.inputAction,c=e.dateType,u=e.isEnd,y=a===r.YEAR?2019:a===r.MONTH?12:30;return o.a.createElement(l.c,{style:{marginBottom:"1em"},type:"number",label:"".concat(a," in the ").concat(u?"end":"start"," of graph"),value:0===t?"":t,onChange:function(e){return function(e,t,a){var r=parseInt(e.target.value,10);isNaN(r)?t(0):r>a?t(a):r>0&&t(r)}(e,n,y)},disabled:u&&a!==c})},v={getCurrenciesThunk:b,setDateType:O,setFromDateDay:function(e){return{payload:e,type:"SET_FROM_DATE_DAY"}},setFromDateMonth:function(e){return{payload:e,type:"SET_FROM_DATE_YEAR_MONTH"}},setFromDateYear:function(e){return{payload:e,type:"SET_FROM_DATE_YEAR"}},setToDateDay:function(e){return{payload:e,type:"SET_TO_DATE_DAY"}},setToDateMonth:function(e){return{payload:e,type:"SET_TO_DATE_MONTH"}},setToDateYear:function(e){return{payload:e,type:"SET_TO_DATE_YEAR"}}},j=Object(i.b)(function(e){return{dateType:e.graphState.dateType,fromDate:e.graphState.fromDate,toDate:e.graphState.toDate}},v)(function(e){var t=Object(p.a)({},e);return o.a.createElement(l.b,{className:"CardForm",style:{backgroundColor:"#ffa4d9"}},o.a.createElement(A,{inputValue:t.fromDate.year,inputType:r.YEAR,inputAction:t.setFromDateYear,dateType:t.dateType,isEnd:!1}),o.a.createElement(A,{inputValue:t.fromDate.month,inputType:r.MONTH,inputAction:t.setFromDateMonth,dateType:t.dateType,isEnd:!1}),o.a.createElement(A,{inputValue:t.fromDate.day,inputType:r.DAY,inputAction:t.setFromDateDay,dateType:t.dateType,isEnd:!1}),o.a.createElement(A,{inputValue:t.toDate.year,inputType:r.YEAR,inputAction:t.setToDateYear,dateType:t.dateType,isEnd:!0}),o.a.createElement(A,{inputValue:t.toDate.month,inputType:r.MONTH,inputAction:t.setToDateMonth,dateType:t.dateType,isEnd:!0}),o.a.createElement(A,{inputValue:t.toDate.day,inputType:r.DAY,inputAction:t.setToDateDay,dateType:t.dateType,isEnd:!0}),o.a.createElement(l.a,{color:"secondary",variant:"contained",onClick:function(){return t.getCurrenciesThunk()}},"Build graph"))}),N=a(57),Y=Object(i.b)(function(e){return{currencies:e.graphState.currencies}})(function(e){var t=Object(p.a)({},e);return o.a.createElement(N.c,{width:600,height:350,data:t.currencies},o.a.createElement(N.b,{type:"monotone",dataKey:"amount",stroke:"#8884d8"}),o.a.createElement(N.a,{stroke:"#ccc"}),o.a.createElement(N.d,{dataKey:"date"}),o.a.createElement(N.e,null))}),M=Object(i.b)(function(e){return{dateType:e.graphState.dateType,fromCurrency:e.graphState.fromCurrencyName,fromDate:e.graphState.fromDate,toCurrency:e.graphState.toCurrencyName,toDate:e.graphState.toDate}})(function(e){var t=Object(p.a)({},e),a=t.dateType===r.YEAR?"".concat(t.toDate.year,"-").concat(t.fromDate.month,"-").concat(t.fromDate.day):t.dateType===r.MONTH?"".concat(t.fromDate.year,"-").concat(t.toDate.month,"-").concat(t.fromDate.day):"".concat(t.fromDate.year,"-").concat(t.fromDate.month,"-").concat(t.toDate.day);return o.a.createElement("div",{className:"GraphInformationContainer"},o.a.createElement("h1",null,"Convert from ",t.fromCurrency," to ",t.toCurrency," "),o.a.createElement("h3",null,"In the interval from ",t.fromDate.year,"-",t.fromDate.month,"-",t.fromDate.day," to ",a))}),F=Object(i.b)()(function(){return o.a.createElement("div",{className:"AppGrid"},o.a.createElement(R,null),o.a.createElement("div",null,o.a.createElement(M,null),o.a.createElement(Y,null),o.a.createElement(g,null)),o.a.createElement(j,null))});a(643),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k={formState:{errors:[],fromCurrency:Object(s.a)({amount:0,currency:"EUR"}),toCurrency:Object(s.a)({amount:0,currency:"PHP"})},graphState:{fromCurrencyName:"EUR",toCurrencyName:"PHP",currencies:[],dateType:r.YEAR,errors:[],fromDate:{day:1,month:1,year:2015},toDate:{day:1,month:1,year:2019}}},H=a(91),U=a(13),w=Object(y.c)({formState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.formState,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FROM_CURRENCY_SUCCES":return Object(U.a)({},e,{fromCurrency:t.payload});case"SET_TO_CURRENCY_SUCCESS":return Object(U.a)({},e,{toCurrency:t.payload});case"SWITCH_CURRENCY":var a=e.fromCurrency,r=e.toCurrency,n=r.getCurrency(),o=Math.round(r.getAmount()/100),c=a.getCurrency(),u=100*a.getAmount();return Object(U.a)({},e,{fromCurrency:Object(s.a)({amount:o,currency:n}),toCurrency:Object(s.a)({amount:u,currency:c})});case"FORM_ERROR":return Object(U.a)({},e,{errors:[].concat(Object(H.a)(e.errors),[t.payload])});default:return e}},graphState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.graphState,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GRAPH_CURRENCIES_SUCCESS":return Object(U.a)({},e,{currencies:e.currencies.concat([t.payload])});case"SET_DATE_TYPE":return Object(U.a)({},e,{dateType:t.payload});case"SET_FROM_DATE_YEAR":return Object(U.a)({},e,{fromDate:Object(U.a)({},e.fromDate,{year:t.payload})});case"SET_FROM_DATE_YEAR_MONTH":return Object(U.a)({},e,{fromDate:Object(U.a)({},e.fromDate,{month:t.payload})});case"SET_FROM_DATE_DAY":return Object(U.a)({},e,{fromDate:Object(U.a)({},e.fromDate,{day:t.payload})});case"SET_TO_DATE_YEAR":return Object(U.a)({},e,{toDate:Object(U.a)({},e.toDate,{year:t.payload})});case"SET_TO_DATE_MONTH":return Object(U.a)({},e,{toDate:Object(U.a)({},e.toDate,{month:t.payload})});case"SET_TO_DATE_DAY":return Object(U.a)({},e,{toDate:Object(U.a)({},e.toDate,{day:t.payload})});case"CLEAR_GRAPH_CURRENCIES":return Object(U.a)({},e,{currencies:[]});case"SET_FROM_CURRENCY_NAME":return Object(U.a)({},e,{fromCurrencyName:t.payload});case"SET_TO_CURRENCY_NAME":return Object(U.a)({},e,{toCurrencyName:t.payload});case"GRAPH_ERROR":return Object(U.a)({},e,{errors:[].concat(Object(H.a)(e.errors),[t.payload])});default:return e}}}),P=Object(y.d)(w,k,Object(y.a)(m.a));u.a.render(o.a.createElement(i.a,{store:P},o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){}},[[346,1,2]]]);
//# sourceMappingURL=main.360604b2.chunk.js.map