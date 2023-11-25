"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4144],{24144:function(e,n,t){function forEach(e,n){for(var t=0;t<e.length;t++)n(e[t],t)}function some(e,n){for(var t=0;t<e.length;t++)if(n(e[t],t))return!0;return!1}t.r(n),t.d(n,{dylan:function(){return m}});var i={unnamedDefinition:["interface"],namedDefinition:["module","library","macro","C-struct","C-union","C-function","C-callable-wrapper"],typeParameterizedDefinition:["class","C-subtype","C-mapped-subtype"],otherParameterizedDefinition:["method","function","C-variable","C-address"],constantSimpleDefinition:["constant"],variableSimpleDefinition:["variable"],otherSimpleDefinition:["generic","domain","C-pointer-type","table"],statement:["if","block","begin","method","case","for","select","when","unless","until","while","iterate","profiling","dynamic-bind"],separator:["finally","exception","cleanup","else","elseif","afterwards"],other:["above","below","by","from","handler","in","instance","let","local","otherwise","slot","subclass","then","to","keyed-by","virtual"],signalingCalls:["signal","error","cerror","break","check-type","abort"]};i.otherDefinition=i.unnamedDefinition.concat(i.namedDefinition).concat(i.otherParameterizedDefinition),i.definition=i.typeParameterizedDefinition.concat(i.otherDefinition),i.parameterizedDefinition=i.typeParameterizedDefinition.concat(i.otherParameterizedDefinition),i.simpleDefinition=i.constantSimpleDefinition.concat(i.variableSimpleDefinition).concat(i.otherSimpleDefinition),i.keyword=i.statement.concat(i.separator).concat(i.other);var r="[-_a-zA-Z?!*@<>$%]+",a=RegExp("^"+r),o={symbolKeyword:r+":",symbolClass:"<"+r+">",symbolGlobal:"\\*"+r+"\\*",symbolConstant:"\\$"+r},l={symbolKeyword:"atom",symbolClass:"tag",symbolGlobal:"variableName.standard",symbolConstant:"variableName.constant"};for(var f in o)o.hasOwnProperty(f)&&(o[f]=RegExp("^"+o[f]));o.keyword=[/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];var s={};s.keyword="keyword",s.definition="def",s.simpleDefinition="def",s.signalingCalls="builtin";var c={},u={};function chain(e,n,t){return n.tokenize=t,t(e,n)}function tokenBase(e,n){var t=e.peek();if("'"==t||'"'==t)return e.next(),chain(e,n,tokenString(t,"string"));if("/"==t){if(e.next(),e.eat("*"))return chain(e,n,tokenComment);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}else if(/[+\-\d\.]/.test(t)){if(e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i)||e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i)||e.match(/^[+-]?\d+/))return"number"}else if("#"==t){if(e.next(),'"'==(t=e.peek()))return e.next(),chain(e,n,tokenString('"',"string"));if("b"==t)return e.next(),e.eatWhile(/[01]/),"number";if("x"==t)return e.next(),e.eatWhile(/[\da-f]/i),"number";if("o"==t)return e.next(),e.eatWhile(/[0-7]/),"number";else if("#"==t)return e.next(),"punctuation";else if("["==t||"("==t)return e.next(),"bracket";else if(e.match(/f|t|all-keys|include|key|next|rest/i))return"atom";else return e.eatWhile(/[-a-zA-Z]/),"error"}else if("~"==t)return e.next(),"="==(t=e.peek())&&(e.next(),"="==(t=e.peek())&&e.next()),"operator";else if(":"==t){if(e.next(),"="==(t=e.peek()))return e.next(),"operator";if(":"==t)return e.next(),"punctuation"}else if(-1!="[](){}".indexOf(t))return e.next(),"bracket";else if(-1!=".,".indexOf(t))return e.next(),"punctuation";else if(e.match("end"))return"keyword";for(var i in o)if(o.hasOwnProperty(i)){var r=o[i];if(r instanceof Array&&some(r,function(n){return e.match(n)})||e.match(r))return l[i]}return/[+\-*\/^=<>&|]/.test(t)?(e.next(),"operator"):e.match("define")?"def":(e.eatWhile(/[\w\-]/),c.hasOwnProperty(e.current()))?u[e.current()]:e.current().match(a)?"variable":(e.next(),"variableName.standard")}function tokenComment(e,n){for(var t,i=!1,r=!1,a=0;t=e.next();){if("/"==t&&i){if(a>0)a--;else{n.tokenize=tokenBase;break}}else"*"==t&&r&&a++;i="*"==t,r="/"==t}return"comment"}function tokenString(e,n){return function(t,i){for(var r,a=!1,o=!1;null!=(r=t.next());){if(r==e&&!a){o=!0;break}a=!a&&"\\"==r}return(o||!a)&&(i.tokenize=tokenBase),n}}forEach(["keyword","definition","simpleDefinition","signalingCalls"],function(e){forEach(i[e],function(n){c[n]=e,u[n]=s[e]})});let m={name:"dylan",startState:function(){return{tokenize:tokenBase,currentIndent:0}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},languageData:{commentTokens:{block:{open:"/*",close:"*/"}}}}}}]);