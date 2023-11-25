"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4212],{44212:function(e,t,n){n.r(t),n.d(t,{vb:function(){return I}});var r="error";function wordRegexp(e){return RegExp("^(("+e.join(")|(")+"))\\b","i")}var o=RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),a=RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),i=RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),c=RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),d=RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),u=RegExp("^[_A-Za-z][_A-Za-z0-9]*"),s=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],l=["else","elseif","case","catch","finally"],m=["next","loop"],h=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],p=wordRegexp(h),f=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],g=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],k=wordRegexp(f),b=wordRegexp(g),x=wordRegexp(s),y=wordRegexp(l),w=wordRegexp(m),v=wordRegexp(["end"]),R=wordRegexp(["do"]);function indent(e,t){t.currentIndent++}function dedent(e,t){t.currentIndent--}function tokenBase(e,t){if(e.eatSpace())return null;if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var n=!1;if(e.match(/^\d*\.\d+F?/i)?n=!0:e.match(/^\d+\.\d*F?/)?n=!0:e.match(/^\.\d+F?/)&&(n=!0),n)return e.eat(/J/i),"number";var s=!1;if(e.match(/^&H[0-9a-f]+/i)?s=!0:e.match(/^&O[0-7]+/i)?s=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),s=!0):e.match(/^0(?![\dx])/i)&&(s=!0),s)return e.eat(/L/i),"number"}return e.match('"')?(t.tokenize=tokenStringFactory(e.current()),t.tokenize(e,t)):e.match(d)||e.match(c)?null:e.match(i)||e.match(o)||e.match(p)?"operator":e.match(a)?null:e.match(R)?(indent(e,t),t.doInCurrentLine=!0,"keyword"):e.match(x)?(t.doInCurrentLine?t.doInCurrentLine=!1:indent(e,t),"keyword"):e.match(y)?"keyword":e.match(v)?(dedent(e,t),dedent(e,t),"keyword"):e.match(w)?(dedent(e,t),"keyword"):e.match(b)||e.match(k)?"keyword":e.match(u)?"variable":(e.next(),r)}function tokenStringFactory(e){var t=1==e.length,n="string";return function(r,o){for(;!r.eol();){if(r.eatWhile(/[^'"]/),r.match(e))return o.tokenize=tokenBase,n;r.eat(/['"]/)}return t&&(o.tokenize=tokenBase),n}}function tokenLexer(e,t){var n=t.tokenize(e,t),o=e.current();if("."===o)return"variable"===(n=t.tokenize(e,t))?"variable":r;var a="[({".indexOf(o);return(-1!==a&&indent(e,t),-1!==(a="])}".indexOf(o))&&dedent(e,t))?r:n}let I={name:"vb",startState:function(){return{tokenize:tokenBase,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=tokenLexer(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(w)||r.match(v)||r.match(y)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:"'"},autocomplete:s.concat(l).concat(m).concat(h).concat(f).concat(g)}}}}]);