"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5879],{95879:function(e,t,n){n.r(t),n.d(t,{scheme:function(){return h}});var r="comment",a="string",i="symbol",s="atom",c="number",l="bracket";function makeKeywords(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}var o=makeKeywords("λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),d=makeKeywords("define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless");function stateStack(e,t,n){this.indent=e,this.type=t,this.prev=n}function pushStack(e,t,n){e.indentStack=new stateStack(t,n,e.indentStack)}function popStack(e){e.indentStack=e.indentStack.prev}var u=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),m=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),p=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),f=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);function isBinaryNumber(e){return e.match(u)}function isOctalNumber(e){return e.match(m)}function isDecimalNumber(e,t){return!0===t&&e.backUp(1),e.match(f)}function isHexNumber(e){return e.match(p)}function processEscapedSequence(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t.token&&!r){t.state.mode=!1;break}r=!r&&"\\"==n}}let h={name:"scheme",startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1,sExprQuote:!1}},token:function(e,t){if(null==t.indentStack&&e.sol()&&(t.indentation=e.indentation()),e.eatSpace())return null;var n=null;switch(t.mode){case"string":processEscapedSequence(e,{token:'"',state:t}),n=a;break;case"symbol":processEscapedSequence(e,{token:"|",state:t}),n=i;break;case"comment":for(var u,m=!1;null!=(u=e.next());){if("#"==u&&m){t.mode=!1;break}m="|"==u}n=r;break;case"s-expr-comment":if(t.mode=!1,"("==e.peek()||"["==e.peek())t.sExprComment=0;else{e.eatWhile(/[^\s\(\)\[\]]/),n=r;break}default:var p=e.next();if('"'==p)t.mode="string",n=a;else if("'"==p)"("==e.peek()||"["==e.peek()?"number"!=typeof t.sExprQuote&&(t.sExprQuote=0):e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),n=s;else if("|"==p)t.mode="symbol",n=i;else if("#"==p){if(e.eat("|"))t.mode="comment",n=r;else if(e.eat(/[tf]/i))n=s;else if(e.eat(";"))t.mode="s-expr-comment",n=r;else{var f=null,h=!1,b=!0;e.eat(/[ei]/i)?h=!0:e.backUp(1),e.match(/^#b/i)?f=isBinaryNumber:e.match(/^#o/i)?f=isOctalNumber:e.match(/^#x/i)?f=isHexNumber:e.match(/^#d/i)?f=isDecimalNumber:e.match(/^[-+0-9.]/,!1)?(b=!1,f=isDecimalNumber):h||e.eat("#"),null!=f&&(b&&!h&&e.match(/^#[ei]/i),f(e)&&(n=c))}}else if(/^[-+0-9.]/.test(p)&&isDecimalNumber(e,!0))n=c;else if(";"==p)e.skipToEnd(),n=r;else if("("==p||"["==p){for(var g,x="",k=e.column();null!=(g=e.eat(/[^\s\(\[\;\)\]]/));)x+=g;x.length>0&&d.propertyIsEnumerable(x)?pushStack(t,k+2,p):(e.eatSpace(),e.eol()||";"==e.peek()?pushStack(t,k+1,p):pushStack(t,k+e.current().length,p)),e.backUp(e.current().length-1),"number"==typeof t.sExprComment&&t.sExprComment++,"number"==typeof t.sExprQuote&&t.sExprQuote++,n=l}else")"==p||"]"==p?(n=l,null!=t.indentStack&&t.indentStack.type==(")"==p?"(":"[")&&(popStack(t),"number"==typeof t.sExprComment&&0==--t.sExprComment&&(n=r,t.sExprComment=!1),"number"==typeof t.sExprQuote&&0==--t.sExprQuote&&(n=s,t.sExprQuote=!1))):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),n=o&&o.propertyIsEnumerable(e.current())?"builtin":"variable")}return"number"==typeof t.sExprComment?r:"number"==typeof t.sExprQuote?s:n},indent:function(e){return null==e.indentStack?e.indentation:e.indentStack.indent},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:";;"}}}}}]);