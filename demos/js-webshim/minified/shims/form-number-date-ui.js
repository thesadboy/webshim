webshims.register("form-number-date-ui",function(a,b,c,d,e,f){"use strict";var g,h=b.formcfg,i=["01","02","03","04","05","06","07","08","09","10","11","12"],j=function(a){a.stopImmediatePropagation()},k=function(){var b;return function(){return b||(b='<option value=""></option>'+a.map(i,function(a){return'<option value="'+a+'"]>'+a+"</option>"}).join("")),b}}(),l=function(b){if(!g.patterns[b+"Obj"]){var c={};a.each(g.patterns[b].split(g[b+"Format"]),function(a,b){c[b]=a}),g.patterns[b+"Obj"]=c}},m={date:{_create:function(b){var c={splits:[a('<input type="text" class="yy" size="4" inputmode="numeric" />')[0]]};return b.monthSelect?c.splits.push(a('<select class="mm">'+k(b)+"</select>")[0]):c.splits.push(a('<input type="text" class="mm" inputmode="numeric" maxlength="2" size="2" />')[0]),c.splits.push(a('<input type="text" class="dd ws-spin" inputmode="numeric" maxlength="2" size="2" />')[0]),c.elements=[c.splits[0],a('<span class="ws-input-seperator" />')[0],c.splits[1],a('<span class="ws-input-seperator" />')[0],c.splits[2]],c},sort:function(b){l("d");var c=0,d=a(".ws-input-seperator",b).html(g.dFormat),e=a("input, select",b);a.each(g.patterns.dObj,function(a){var f=e.filter("."+a);f[0]&&(f.appendTo(b),c<d.length&&d.eq(c).insertAfter(f),c++)})}},month:{_create:function(b){var c={splits:[a('<input type="text" class="yy" inputmode="numeric" size="4" />')[0]]};return b.monthSelect?c.splits.push(a('<select class="mm ws-spin">'+k(b)+"</select>")[0]):(c.splits.push(a('<input type="text" class="mm ws-spin" />')[0]),b.onlyMonthDigits&&a(c.splits[1]).attr({inputmode:"numeric",size:2,maxlength:2})),c.elements=[c.splits[0],a('<span class="ws-input-seperator" />')[0],c.splits[1]],c},sort:function(b){var c,d=a(".ws-input-seperator",b).html(g.dFormat),e=a("input.mm, select.mm",b);g.date.showMonthAfterYear?(e.appendTo(b),c="insertBefore"):(e.prependTo(b),c="insertAfter"),d[c](e)}}},n=new Date((new Date).getTime()-60*(new Date).getTimezoneOffset()*1e3);n=new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours()).getTime();var o={number:{step:1},"datetime-local":{step:60,start:new Date(n).getTime()},time:{step:60},month:{step:1,start:new Date(n)},date:{step:1,start:new Date(n)}},p=function(){var c=function(){return b.getID(this)};return function(b,d,e){a(b).attr({"aria-labelledby":d.map(c).get().join(" ")}),e||d.on("click",function(a){return b.getShadowFocusElement().focus(),a.preventDefault(),!1})}}(),q=function(a){return a?(a+="",1==a.length?"0"+a:a):""},r=function(a,c){return a=("color"==a?"color":"forms")+"-picker",r[c+"Loaded"+a]||(r[c+"Loaded"+a]=!0,b.ready(c,function(){b.loader.loadList([a])})),a};f.addZero=q,b.loader.addModule("forms-picker",{noAutoCallback:!0,options:f}),b.loader.addModule("color-picker",{noAutoCallback:!0,css:"jpicker/jpicker.css",options:f,d:["forms-picker"]}),f.steps=o,function(){h.de=a.extend(!0,{numberFormat:{",":".",".":","},timeSigns:":. ",numberSigns:",",dateSigns:".",dFormat:".",patterns:{d:"dd.mm.yy"},month:{currentText:"Aktueller Monat"},time:{currentText:"Jetzt"},date:{close:"schlie\xdfen",clear:"L\xf6schen",prevText:"Zur\xfcck",nextText:"Vor",currentText:"Heute",monthNames:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},h.de||{}),h.en=a.extend(!0,{numberFormat:{".":".",",":","},numberSigns:".",dateSigns:"/",timeSigns:":. ",dFormat:"/",patterns:{d:"mm/dd/yy"},meridian:["AM","PM"],month:{currentText:"This month"},time:{currentText:"Now"},date:{closeText:"Done",clear:"Clear",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},h.en||{}),h["en-US"]||(h["en-US"]=a.extend(!0,{},h.en)),h["en-GB"]||(h["en-GB"]=a.extend(!0,{},h.en,{date:{firstDay:1},patterns:{d:"dd/mm/yy"}})),h["en-AU"]||(h["en-AU"]=a.extend(!0,{},h["en-GB"])),h[""]||(h[""]=h["en-US"]),g=h[""];var c=function(b){if(!b.date.monthkeys){var c=function(a,c){var d,e=a+1;d=10>e?"0"+e:""+e,b.date.monthkeys[e]=d,b.date.monthkeys[c]=d,b.date.monthkeys[c.toLowerCase()]=d};b.date.monthkeys={},b.date.monthDigits=i,b.numberSigns+="-",b.meridian&&(b.timeSigns+=b.meridian[0]+b.meridian[1]+b.meridian[0].toLowerCase()+b.meridian[1].toLowerCase()),a.each(b.date.monthNames,c),a.each(b.date.monthNamesShort,c)}b.colorSigns||(b.colorSigns="#abcdefABCDEF"),b["datetime-localSigns"]||(b["datetime-localSigns"]=b.dateSigns+b.timeSigns),b["datetime-local"]||(b["datetime-local"]={}),b.time||(b.time={}),!b["datetime-local"].currentText&&b.time.currentText&&(b["datetime-local"].currentText=b.time.currentText)},e=function(){c(g),a(d).triggerHandler("wslocalechange")};g=b.activeLang(h),e(),a(h).on("change",function(){g=h.__active,e()})}(),function(){var c=function(a,b){return"number"==typeof a||a&&a==1*a?1*a:b},d={number:function(a){return(a+"").replace(/\,/g,"").replace(/\./,g.numberFormat["."])},time:function(b){var c;return b&&g.meridian&&(b=b.split(":"),c=1*b[0],c&&c>=12?(b[0]=q(c-12+""),c=1):c=0,"00"===b[0]&&(b[0]="12"),b=a.trim(b.join(":"))+" "+g.meridian[c]),b},"datetime-local":function(b,c){var d=a.trim(b||"").split("T");return 2==d.length&&(b=this.date(d[0],c)+" "+this.time(d[1],c)),b},month:function(a,b){var c,d=a.split("-");return d[0]&&d[1]?(c=g.date[b.formatMonthNames]||g.date[b.monthNames]||g.date.monthNames,d[1]=c[1*d[1]-1],b&&b.splitInput?a=[d[0]||"",d[1]||""]:d[1]&&(a=g.date.showMonthAfterYear?d.join(" "):d[1]+" "+d[0])):b&&b.splitInput&&(a=[d[0]||"",d[1]||""]),a},date:function(a,b){var c=(a+"").split("-");return c[2]&&c[1]&&c[0]?b&&b.splitInput?a=c:(a=g.patterns.d.replace("yy",c[0]||""),a=a.replace("mm",c[1]||""),a=a.replace("dd",c[2]||"")):b&&b.splitInput&&(a=[c[0]||"",c[1]||"",c[2]||""]),a},color:function(a){var b="#000000";return a&&(a=a.toLowerCase(),7==a.length&&h("color").isValid(a)&&(b=a)),b}},e={number:function(a){return(a+"").replace(g.numberFormat[","],"").replace(g.numberFormat["."],".")},"datetime-local":function(b,c){var d,e=a.trim(b||"").split(/\s+/);return 2==e.length?(-1!=e[0].indexOf(":")&&-1==e[1].indexOf(":")&&(d=e[1],e[1]=e[0],e[0]=d),b=this.date(e[0],c)+"T"+this.time(e[1],c)):3==e.length&&(b=this.date(e[0],c)+"T"+this.time(e[1]+e[2],c)),b},time:function(b){var c;return b&&g.meridian&&(b=b.toUpperCase(),"12"===b.substr(0,2)&&(b="00"+b.substr(2)),-1!=b.indexOf(g.meridian[1])&&(b=b.split(":"),c=1*b[0],isNaN(c)||(b[0]=c+12),b=b.join(":")),b=a.trim(b.replace(g.meridian[0],"").replace(g.meridian[1],""))),b},month:function(a,b,c){var d=b.splitInput?a:a.trim().split(/[\.\s-\/\\]+/);return 2==d.length&&d[0]&&d[1]?(d[0]=!c&&g.date.monthkeys[d[0]]||d[0],d[1]=!c&&g.date.monthkeys[d[1]]||d[1],a=2==d[1].length&&d[0].length>3?d[0]+"-"+d[1]:2==d[0].length&&d[1].length>3?d[1]+"-"+d[0]:""):b.splitInput&&(a=""),a},date:function(a,b,c){l("d");var d;return b.splitInput?d={yy:0,mm:1,dd:2}:(d=g.patterns.dObj,a=a.split(g.dFormat)),3==a.length&&a[0]&&a[1]&&a[2]&&(!c||a[d.yy].length>3&&2==a[d.mm].length&&2==a[d.dd].length)?[q(a[d.yy]),q(a[d.mm]),q(a[d.dd])].join("-"):""},color:function(a){var b="#000000";return a&&(a=a.toLowerCase(),0!==a.indexOf("#")&&(a="#"+a),4==a.length&&(a="#"+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)+a.charAt(3)+a.charAt(3)),7==a.length&&h("color").isValid(a)&&(b=a)),b}},f={date:function(a,b){var c=(a||"").split("-");return c=3==c.length?b.splitInput?c:g.patterns.d.replace("yy",c[0]).replace("mm",c[1]).replace("dd",c[2]):b.splitInput?[a,a,a]:a},month:function(a,b){var c=(a||"").split("-");return c=2==c.length?b.splitInput?c:g.date.showMonthAfterYear?c[0]+" "+c[1]:c[1]+" "+c[0]:b.splitInput?[a,a]:a}},h=function(){var b={};return function(c){var d;return b[c]||(d=a('<input type="'+c+'" step="any" />'),b[c]={asNumber:function(a){var b="object"==typeof a?"valueAsDate":"value";return d.prop(b,a).prop("valueAsNumber")},asValue:function(a){var b="object"==typeof a?"valueAsDate":"valueAsNumber";return d.prop(b,a).prop("value")},isValid:function(b,c){return c&&(c.nodeName||c.jquery)&&(c={min:a(c).prop("min")||"",max:a(c).prop("max")||"",step:a(c).prop("step")||"any"}),c=a.extend({step:"any",min:"",max:""},c||{}),d.attr(c).prop("value",b).is(":valid")&&d.prop("value")==b}}),b[c]}}();o.range=o.number;var i={_create:function(){var c,d,e,f=this.options,g=this.createOpts;for(this.type=f.type,this.orig=f.orig,this.buttonWrapper=a('<span class="input-buttons '+this.type+'-input-buttons"></span>').insertAfter(this.element),this.options.containerElements.push(this.buttonWrapper[0]),f.mirrorValidity=f.mirrorValidity&&this.orig&&Modernizr.formvalidation&&!b.bugs.bustedValidity,f.splitInput&&this._addSplitInputs?(f.monthSelect&&this.element.addClass("ws-month-select"),this._addSplitInputs()):this.inputElements=this.element,o[this.type]&&"object"==typeof o[this.type].start&&(o[this.type].start=this.asNumber(o[this.type].start)),b.picker[this.type]||(f.buttonOnly=!1),c=0;c<g.length;c++)null!=f[g[c]]&&this[g[c]](f[g[c]],f[g[c]]);"color"==this.type&&this.inputElements.prop("maxLength",7),this.addBindings(),a(this.element).data("wsWidget"+f.type,this),f.buttonOnly&&this.inputElements.prop({readOnly:!0}),this._init=!0,f.mirrorValidity&&(d=this,e=function(){clearTimeout(e._timerDealy),e._timerDealy=setTimeout(e._wsexec,9)},e._wsexec=function(){clearTimeout(e._timerDealy),d.mirrorValidity(!0)},e(),a(this.orig).on("change input",function(a){"input"==a.type?e():e._wsexec()}))},mirrorValidity:function(b){if(this._init&&this.options.mirrorValidity){b||a.prop(this.orig,"validity");var c=a(this.orig).getErrorMessage();c!==this.lastErrorMessage&&(this.inputElements.prop("setCustomValidity",function(a,b){b._supvalue&&b._supvalue.call(this,c)}),this.lastErrorMessage=c)}},addBindings:function(){var c=this,d=this.options,e=function(){c._addBindings()};this._addBindings?e():(b.ready("forms-picker",e),r(this.type,"WINDOWLOAD")),this.inputElements.add(this.buttonWrapper).add(this.element).one("mousedown focusin",function(){r(c.type,"DOM")}).on({"change input focus focusin blur focusout":function(b){a(b.target).trigger("ws__"+b.type)}}),"color"!=this.type&&!function(){var b;d.splitInput?(b=function(){c.reorderInputs()},c.reorderInputs()):b=function(){d.value&&c.value(d.value,!0),f[c.type]&&d.placeholder&&c.placeholder(d.placeholder)},a(c.orig).onWSOff("wslocalechange",b)}()},required:function(a,b){this.inputElements.attr({"aria-required":""+b}),this.mirrorValidity()},parseValue:function(b){var c=this.inputElements.map(function(){return a.prop(this,"value")}).get();return this.options.splitInput||(c=c[0]),e[this.type](c,this.options,b)},formatValue:function(a,b){return d[this.type](a,b===!1?!1:this.options)},createOpts:["readonly","title","disabled","tabindex","placeholder","defaultValue","value","required"],placeholder:function(b){var c=this.options;c.placeholder=b;var d=b;f[this.type]&&(d=f[this.type](b,this.options)),c.splitInput&&"object"==typeof d?a.each(this.splits,function(b,c){a.prop(c,"placeholder",d[b])}):this.element.prop("placeholder",d)},list:function(b){"number"==this.type&&this.element.attr("list",a.attr(this.orig,"list")),this.options.list=b,this._propertyChange("list")},_propertyChange:a.noop,tabindex:function(b){this.options.tabindex=b,this.inputElements.prop("tabindex",this.options.tabindex),a("button",this.buttonWrapper).prop("tabindex",this.options.tabindex)},title:function(b){!b&&this.orig&&null==a.attr(this.orig,"title")&&(b=null),this.options.title=b,null==b?this.inputElements.removeAttr("title"):this.inputElements.prop("title",this.options.title)}};["defaultValue","value"].forEach(function(a){i[a]=function(b,c){(!this._init||c||b!==this.options[a])&&(this.element.prop(a,this.formatValue(b)),this.options[a]=b,this._propertyChange(a),this.mirrorValidity())}}),["readonly","disabled"].forEach(function(b){var c="disabled"==b;i[b]=function(d,e){var f=this.options;f[b]==e&&this._init||(f[b]=!!e,!c&&f.buttonOnly?this.inputElements.attr({"aria-readonly":f[b]}):this.inputElements.prop(b,f[b]),this.buttonWrapper[f[b]?"addClass":"removeClass"]("ws-"+b),c&&a("button",this.buttonWrapper).prop("disabled",f[b]))}});var j=a.extend({},i,{_create:function(){var b=this.options,c=h(b.type);this.elemHelper=a('<input type="'+b.type+'" />'),this.asNumber=c.asNumber,this.asValue=c.asValue,this.isValid=c.isValid,i._create.apply(this,arguments),this._init=!1,this.buttonWrapper.html('<span unselectable="on" class="step-controls"><span class="step-up"></span><span class="step-down"></span></span>'),"number"==this.type&&this.inputElements.attr("inputmode","numeric"),b.min||"number"!=typeof b.relMin||(b.min=this.asValue(this.getRelNumber(b.relMin)),a.prop(this.orig,"min",b.min)),b.max||"number"!=typeof b.relMax||(b.max=this.asValue(this.getRelNumber(b.relMax)),a.prop(this.orig,"max",b.max)),this._init=!0},createOpts:["step","min","max","readonly","title","disabled","tabindex","placeholder","defaultValue","value","required"],_addSplitInputs:function(){if(!this.inputElements){var b=m[this.type]._create(this.options);this.splits=b.splits,this.inputElements=a(b.elements).prependTo(this.element).filter("input, select")}},getRelNumber:function(a){var b=o[this.type].start||0;return a&&(b+=a),b},addZero:q,_setStartInRange:function(){var a=this.getRelNumber(this.options.relDefaultValue);!isNaN(this.minAsNumber)&&a<this.minAsNumber?a=this.minAsNumber:!isNaN(this.maxAsNumber)&&a>this.maxAsNumber&&(a=this.maxAsNumber),this.elemHelper.prop("valueAsNumber",a),this.options.defValue=this.elemHelper.prop("value")},reorderInputs:function(){if(m[this.type]){var a=this.element;m[this.type].sort(a,this.options),setTimeout(function(){var c=b.data(a);c&&c.shadowData&&(c.shadowData.shadowFocusElement=a.find("input, select")[0]||a[0])},9)}},step:function(a){var b=o[this.type];this.options.step=a,this.elemHelper.prop("step",c(a,b.step)),this.mirrorValidity()},_beforeValue:function(a){this.valueAsNumber=this.asNumber(a),this.options.value=a,isNaN(this.valueAsNumber)||!isNaN(this.minAsNumber)&&this.valueAsNumber<this.minAsNumber||!isNaN(this.maxAsNumber)&&this.valueAsNumber>this.maxAsNumber?this._setStartInRange():(this.elemHelper.prop("value",a),this.options.defValue="")}});["defaultValue","value"].forEach(function(b){var c="value"==b;j[b]=function(e,f){(!this._init||f||this.options[b]!==e)&&(c&&this._beforeValue(e),e=d[this.type](e,this.options),this.options.splitInput?a.each(this.splits,function(d,f){b in f||c||!a.nodeName(f,"select")?a.prop(f,b,e[d]):a('option[value="'+e[d]+'"]',f).prop("defaultSelected",!0)}):this.element.prop(b,e),this._propertyChange(b),this.mirrorValidity())}}),a.each({min:1,max:-1},function(a,b){var c=a+"AsNumber";j[a]=function(d){this.elemHelper.prop(a,d),this[c]=this.asNumber(d),null!=this.valueAsNumber&&(isNaN(this.valueAsNumber)||!isNaN(this[c])&&this.valueAsNumber*b<this[c]*b)&&this._setStartInRange(),this.options[a]=d,this._propertyChange(a),this.mirrorValidity()}}),a.fn.wsBaseWidget=function(b){return b=a.extend({},b),this.each(function(){a.webshims.objectCreate(i,{element:{value:a(this)}},b)})},a.fn.wsBaseWidget.wsProto=i,a.fn.spinbtnUI=function(b){return b=a.extend({monthNames:"monthNames",size:1,startView:0},b),this.each(function(){a.webshims.objectCreate(j,{element:{value:a(this)}},b)})},a.fn.spinbtnUI.wsProto=j}(),function(){var c={};b.inlinePopover={_create:function(){this.element=a('<div class="ws-inline-picker"><div class="ws-po-box" /></div>').data("wspopover",this),this.contentElement=a(".ws-po-box",this.element),this.element.insertAfter(this.options.prepareFor)},show:a.noop,hide:a.noop,preventBlur:a.noop,isVisible:!0},c._genericSetFocus=function(b,c){if(b=a(b||this.activeButton),!this.popover.openedByFocus&&!c){var d=this,e=function(a){clearTimeout(d.timer),d.timer=setTimeout(function(){b[0]&&(b[0].focus(),a===!0||b.is(":focus")||e(!0))},d.popover.isVisible?99:360)};this.popover.activateElement(b),e()}},c._actions={changeInput:function(a,b,d){d.options.noChangeDismiss||c._actions.cancel(a,b,d),d.setChange(a)},cancel:function(a,b,c){c.options.inlinePicker||(b.stopOpen=!0,c.element.getShadowFocusElement().trigger("focus"),setTimeout(function(){b.stopOpen=!1},9),b.hide())}},c.commonInit=function(b,c){var e;c.isDirty=!0,c.element.on("updatepickercontent pickerchange",function(){e=!1}),b.options.inlinePicker||c.contentElement.on({keydown:function(d){if(9==d.keyCode){e||(e=a('input:not(:disabled), [tabindex="0"]:not(:disabled)',this).filter(":visible"));var f=e.index(d.target);if(d.shiftKey&&0>=f)return e.last().focus(),!1;if(!d.shiftKey&&f>=e.length-1)return e.first().focus(),!1}else if(27==d.keyCode)return b.element.getShadowFocusElement().focus(),c.hide(),!1}}),b._propertyChange=function(){var a,d=function(){c.isVisible&&c.element.triggerHandler("updatepickercontent")};return function(e){("value"!=e||b.options.inlinePicker)&&(c.isDirty=!0,c.isVisible&&(clearTimeout(a),a=setTimeout(d,9)))}}(),c.activeElement=a([]),c.activateElement=function(b){b=a(b),b[0]!=c.activeElement[0]&&(c.activeElement.removeClass("ws-focus"),b.addClass("ws-focus")),c.activeElement=b},c.element.on({wspopoverbeforeshow:function(){b.element.triggerHandler("wsupdatevalue"),c.element.triggerHandler("updatepickercontent")}}),a(b.orig).on("remove",function(c){c.originalEvent||a(d).off("wslocalechange",b._propertyChange)})},c._common=function(d){var e=d.options,f=b.objectCreate(e.inlinePicker?b.inlinePopover:b.wsPopover,{},a.extend(e.popover||{},{prepareFor:e.inlinePicker?d.buttonWrapper:d.element})),g=a('<button type="button" class="ws-popover-opener"><span /></button>').appendTo(d.buttonWrapper);e.widgetPosition&&b.error("options.widgetPosition was removed use options.popover.position instead"),e.openOnFocus&&f.options&&("auto"==f.options.appendTo||"element"==f.options.appendTo)&&b.error('openOnFocus and popover.appendTo "auto/element" can prduce a11y problems try to change appendTo to body or similiar or use openOnMouseFocus instead');var h=function(){(c[d.type].showPickerContent||c.showPickerContent)(d,f)},i=function(){var a=r(d.type,"DOM");e.disabled||e.readonly||!e.inlinePicker&&f.isVisible||(b.ready(a,h),f.show(d.element))},k=function(){(e.inlinePicker||f.isVisible)&&f.activeElement&&(f.openedByFocus=!1,f.activeElement.focus()),i()};e.containerElements.push(f.element[0]),"color"!=d.type&&(e.yearButtons&&(e.startView=2),e.startView||(e.startView=0),"time"==d.type&&(e.minView=3,e.startView=3),e.minView||(e.minView=0),e.startView<e.minView&&(e.startView=e.minView,b.warn("wrong config for minView/startView.")),e.size||(e.size=1)),f.element.addClass(d.type+"-popover input-picker").attr({role:"application"}).on({wspopoverhide:function(){f.openedByFocus=!1},focusin:function(a){f.activateElement&&(f.openedByFocus=!1,f.activateElement(a.target))},focusout:function(){f.activeElement&&f.activeElement.removeClass("ws-focus"),e.inlinePicker&&(f.openedByFocus=!0)}}),p(f.element.children("div.ws-po-outerbox").attr({role:"group"}),e.labels,!0),p(g,e.labels,!0),null!=e.tabindex&&g.attr({tabindex:e.tabindex}),e.disabled&&g.prop({disabled:!0}),g.on({click:k}),e.inlinePicker?f.openedByFocus=!0:(g.on({mousedown:function(){j.apply(this,arguments),f.preventBlur()},focus:function(){f.preventBlur()}}),function(){var a=!1,b=function(){a=!1};d.inputElements.on({keydown:function(a){40==a.keyCode&&a.altKey&&k()},focus:function(){!f.stopOpen&&(e.buttonOnly||e.openOnFocus||a&&e.openOnMouseFocus)?(f.openedByFocus=e.buttonOnly?!1:!e.noInput,i()):f.preventBlur()},mousedown:function(){a=!0,setTimeout(b,9),e.buttonOnly&&f.isVisible&&f.activeElement&&(f.openedByFocus=!1,setTimeout(function(){f.openedByFocus=!1,f.activeElement.focus()},4)),d.element.is(":focus")&&(f.openedByFocus=e.buttonOnly?!1:!e.noInput,i()),f.preventBlur()}})}()),d.popover=f,d.opener=g,a(d.orig).on("remove",function(a){a.originalEvent||setTimeout(function(){g.remove(),f.element.remove()},4)}),e.inlinePicker&&i()},c.month=c._common,c.date=c._common,c.time=c._common,c["datetime-local"]=c._common,c.color=function(b){var d=c._common.apply(this,arguments),e=a(b.orig).data("alphacontrol"),f=b.opener.prepend('<span class="ws-color-indicator-bg"><span class="ws-color-indicator" /></span>').find(".ws-color-indicator"),g=function(){f.css({backgroundColor:a.prop(this,"value")||"#000000"})},h=function(){var a,c=function(){try{var a=b.alpha.prop("valueAsNumber")/(b.alpha.prop("max")||1);isNaN(a)||f.css({opacity:a})}catch(c){}};return function(b){clearTimeout(a),a=setTimeout(c,b&&"change"!=b.type?40:4)}}();return b.alpha=e?a("#"+e):a([]),a(b.orig).on("wsupdatevalue change",g).each(g),b.alpha.on("wsupdatevalue change input",h).each(h),d},b.picker=c}(),function(){var c,e,g=Modernizr.inputtypes,i={},k={disabled:1,required:1,readonly:1},l=["disabled","readonly","value","defaultValue","min","max","step","title","required","placeholder"],n=["data-placeholder","tabindex"];if(a.each(l.concat(n),function(a,d){var e=d.replace(/^data\-/,"");b.onNodeNamesPropertyModify("input",d,function(a,d){if(!c){var f=b.data(this,"shadowData");f&&f.data&&f.nativeElement===this&&f.data[e]&&(k[e]?f.data[e](a,d):f.data[e](a))}})}),f.replaceUI&&"valueAsNumber"in d.createElement("input")){var q=function(){b.data(this,"hasShadow")&&a.prop(this,"value",a.prop(this,"value"))};b.onNodeNamesPropertyModify("input","valueAsNumber",q),b.onNodeNamesPropertyModify("input","valueAsDate",q),a.each({stepUp:1,stepDown:-1},function(a){var c=b.defineNodeNameProperty("input",a,{prop:{value:function(){var a;return c.prop&&c.prop._supvalue&&(a=c.prop._supvalue.apply(this,arguments),q.apply(this,arguments)),a}}})})}var r=function(){return function(b,c){i[b]=c,c.attrs=a.merge([],n,c.attrs),c.props=a.merge([],l,c.props)}}(),s=function(){return"none"!=a.css(this,"display")},t=function(b){var c,d=function(){a(b.orig).removeClass("ws-important-hide"),a.style(b.orig,"display","");var d,e,f,g=.8;(!c||b.orig.offsetWidth)&&(d=b.buttonWrapper&&b.buttonWrapper.filter(s).length,e=a.css(b.orig,"marginRight"),b.element.css({marginLeft:a.css(b.orig,"marginLeft"),marginRight:d?0:e}),d&&(f=parseInt(b.buttonWrapper.css("marginLeft"),10)||0,b.element.css({paddingRight:""}),0>f?(e=(parseInt(e,10)||0)+-1*(b.buttonWrapper.outerWidth()+f),b.buttonWrapper.css("marginRight",e),b.element.css({paddingRight:""}).css({paddingRight:(parseInt(b.element.css("paddingRight"),10)||0)+b.buttonWrapper.outerWidth()})):(b.buttonWrapper.css("marginRight",e),g=b.buttonWrapper.outerWidth(!0)+g)),b.element.outerWidth(a(b.orig).outerWidth()-g)),c=!0,a(b.orig).addClass("ws-important-hide")};b.element.onWSOff("updateshadowdom",d,!0)},u=function(){var d,g,h,k,m,o=a.prop(this,"type");if(i[o]&&b.implement(this,"inputwidgets")){for(h={},k=o,m=a(this).jProp("labels"),g=a.extend({},f.widgets,f[o],a(a.prop(this,"form")).data(o)||{},a(this).data(o)||{},{orig:this,type:o,labels:m,options:{},input:function(a){g._change(a,"input")},change:function(a){g._change(a,"change")},_change:function(b,d){c=!0,a.prop(g.orig,"value",b),c=!1,d&&a(g.orig).trigger(d)},containerElements:[]}),d=0;d<l.length;d++)g[l[d]]=a.prop(this,l[d]);for(d=0;d<n.length;d++)k=n[d].replace(/^data\-/,""),"placeholder"!=k&&g[k]||(g[k]=a.attr(this,n[d])||g[k]);g.monthSelect&&(g.onlyMonthDigits=!0),g.onlyMonthDigits&&(g.formatMonthNames="monthDigits"),h.shim=i[o]._create(g),b.addShadowDom(this,h.shim.element,{data:h.shim||{}}),h.shim.options.containerElements.push(h.shim.element[0]),p(a(this).getShadowFocusElement(),m),a(this).on("change",function(){c||h.shim.value(a.prop(this,"value"))}),function(){var b,c={focusin:!0,focus:!0},d=!1,e=!1;a(h.shim.options.containerElements).on({"focusin focus focusout blur":function(f){f.stopImmediatePropagation(),e=c[f.type],clearTimeout(b),b=setTimeout(function(){e!=d&&(d=e,a(g.orig).triggerHandler(e?"focus":"blur"),a(g.orig).trigger(e?"focusin":"focusout")),d=e},0)}})}(),h.shim.element.on("change input",j),Modernizr.formvalidation&&a(g.orig).on("firstinvalid",function(c){(b.fromSubmit||!e)&&a(g.orig).off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(d){c.isInvalidUIPrevented()||d.isDefaultPrevented()||(b.validityAlert.showFor(c.target),c.preventDefault(),d.preventDefault()),a(g.orig).off("invalid.replacedwidgetbubble")})}),h.shim.buttonWrapper&&h.shim.buttonWrapper.filter(s).length&&h.shim.element.addClass("has-input-buttons"),h.shim.element.addClass(a.prop(this,"className")),g.calculateWidth?t(h.shim):a(this).addClass("ws-important-hide")}};Modernizr.formvalidation&&["input","form"].forEach(function(a){var c=b.defineNodeNameProperty(a,"checkValidity",{prop:{value:function(){e=!0;var a=c.prop._supvalue.apply(this,arguments);return e=!1,a}}})});var v={};f.replaceUI&&(a.isPlainObject(f.replaceUI)?a.extend(v,f.replaceUI):a.extend(v,{range:1,number:1,time:1,month:1,date:1,color:1,"datetime-local":1})),g.number&&-1==navigator.userAgent.indexOf("Touch")&&(/MSIE 1[0|1]\.\d/.test(navigator.userAgent)||/Trident\/7\.0/.test(navigator.userAgent))&&(v.number=1),(!g.range||v.range)&&r("range",{_create:function(b){var c=a("<span />").insertAfter(b.orig).rangeUI(b).data("rangeUi");return c}}),["number","time","month","date","color","datetime-local"].forEach(function(c){(!g[c]||v[c])&&r(c,{_create:function(d){d.monthSelect&&(d.splitInput=!0),d.splitInput&&!m[c]&&(b.warn("splitInput not supported for "+c),d.splitInput=!1);var e=d.splitInput?'<span class="ws-'+c+' ws-input ws-inputreplace" role="group"></span>':'<input class="ws-'+c+' ws-inputreplace" type="text" />',f=a(e).insertAfter(d.orig);return f=o[c]?f.spinbtnUI(d).data("wsWidget"+c):f.wsBaseWidget(d).data("wsWidget"+c),b.picker&&b.picker[c]&&b.picker[c](f),f.buttonWrapper.addClass("input-button-size-"+f.buttonWrapper.children().filter(s).length),f}})});var w=function(){b.addReady(function(b,c){a("input",b).add(c.filter("input")).each(u)})};h._isLoading?a(h).one("change",w):w()}()});