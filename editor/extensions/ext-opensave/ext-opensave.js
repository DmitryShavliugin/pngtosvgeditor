const e=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch(e){return!1}return"showOpenFilePicker"in self})(),r=e?Promise.resolve().then((function(){return c})):Promise.resolve().then((function(){return v}));async function n(){return(await r).default(...arguments)}e?Promise.resolve().then((function(){return d})):Promise.resolve().then((function(){return f}));const l=e?Promise.resolve().then((function(){return m})):Promise.resolve().then((function(){return g}));async function o(){return(await l).default(...arguments)}const s=async e=>{const r=await e.getFile();return r.handle=e,r};var c={__proto__:null,default:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}];Array.isArray(e)||(e=[e]);const r=[];e.forEach(((e,l)=>{r[l]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map((c=>{r[l].accept[c]=e.extensions||[]})):r[l].accept["*/*"]=e.extensions||[]}));const l=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:r,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),c=await Promise.all(l.map(s));return e[0].multiple?c:c[0]}};function u(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var r=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:r}}))}return u=function(e){this.s=e,this.n=e.next},u.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var r=this.s.return;return void 0===r?Promise.resolve({value:e,done:!0}):t(r.apply(this.s,arguments))},throw:function(e){var r=this.s.return;return void 0===r?Promise.reject(e):t(r.apply(this.s,arguments))}},new u(e)}const p=async function(e,r){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.name,c=arguments.length>3?arguments[3]:void 0;const d=[],m=[];var v,f=!1,g=!1;try{for(var y,_=function(e){var r,l,c,d=2;for("undefined"!=typeof Symbol&&(l=Symbol.asyncIterator,c=Symbol.iterator);d--;){if(l&&null!=(r=e[l]))return r.call(e);if(c&&null!=(r=e[c]))return new u(r.call(e));l="@@asyncIterator",c="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());f=!(y=await _.next()).done;f=!1){const v=y.value,f=`${l}/${v.name}`;"file"===v.kind?m.push(v.getFile().then((r=>(r.directoryHandle=e,r.handle=v,Object.defineProperty(r,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>f}))))):"directory"!==v.kind||!r||c&&c(v)||d.push(p(v,r,f,c))}}catch(e){g=!0,v=e}finally{try{f&&null!=_.return&&await _.return()}finally{if(g)throw v}}return[...(await Promise.all(d)).flat(),...await Promise.all(m)]};var d={__proto__:null,default:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.recursive=e.recursive||!1,e.mode=e.mode||"read";const r=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await r.values()).next()).done?[r]:p(r,e.recursive,void 0,e.skipDirectory)}},m={__proto__:null,default:async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[{}],l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;Array.isArray(r)||(r=[r]),r[0].fileName=r[0].fileName||"Untitled";const m=[];let v=null;if(e instanceof Blob&&e.type?v=e.type:e.headers&&e.headers.get("content-type")&&(v=e.headers.get("content-type")),r.forEach(((e,r)=>{m[r]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===r&&v&&e.mimeTypes.push(v),e.mimeTypes.map((l=>{m[r].accept[l]=e.extensions||[]}))):v?m[r].accept[v]=e.extensions||[]:m[r].accept["*/*"]=e.extensions||[]})),l)try{await l.getFile()}catch(e){if(l=null,c)throw e}const f=l||await window.showSaveFilePicker({suggestedName:r[0].fileName,id:r[0].id,startIn:r[0].startIn,types:m,excludeAcceptAllOption:r[0].excludeAcceptAllOption||!1});!l&&d&&d(f);const g=await f.createWritable();if("stream"in e){const r=e.stream();return await r.pipeTo(g),f}return"body"in e?(await e.body.pipeTo(g),f):(await g.write(await e),await g.close(),f)}},v={__proto__:null,default:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}];return Array.isArray(e)||(e=[e]),new Promise(((r,l)=>{const c=document.createElement("input");c.type="file";const d=[...e.map((e=>e.mimeTypes||[])),...e.map((e=>e.extensions||[]))].join();c.multiple=e[0].multiple||!1,c.accept=d||"",c.style.display="none",document.body.append(c);const a=e=>{"function"==typeof m&&m(),r(e)},m=e[0].legacySetup&&e[0].legacySetup(a,(()=>m(l)),c),s=()=>{window.removeEventListener("focus",s),c.remove()};c.addEventListener("click",(()=>{window.addEventListener("focus",s)})),c.addEventListener("change",(()=>{window.removeEventListener("focus",s),c.remove(),a(c.multiple?Array.from(c.files):c.files[0])})),"showPicker"in HTMLInputElement.prototype?c.showPicker():c.click()}))}},f={__proto__:null,default:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}];return Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise(((r,l)=>{const c=document.createElement("input");c.type="file",c.webkitdirectory=!0;const i=e=>{"function"==typeof d&&d(),r(e)},d=e[0].legacySetup&&e[0].legacySetup(i,(()=>d(l)),c);c.addEventListener("change",(()=>{let r=Array.from(c.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(r=r.filter((r=>r.webkitRelativePath.split("/").every((r=>!e[0].skipDirectory({name:r,kind:"directory"})))))):r=r.filter((e=>2===e.webkitRelativePath.split("/").length)),i(r)})),"showPicker"in HTMLInputElement.prototype?c.showPicker():c.click()}))}},g={__proto__:null,default:async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Array.isArray(r)&&(r=r[0]);const l=document.createElement("a");let c=e;"body"in e&&(c=await async function(e,r){const l=e.getReader(),c=new ReadableStream({start:e=>async function t(){return l.read().then((r=>{let{done:l,value:c}=r;if(!l)return e.enqueue(c),t();e.close()}))}()}),d=new Response(c),m=await d.blob();return l.releaseLock(),new Blob([m],{type:r})}(e.body,e.headers.get("content-type"))),l.download=r.fileName||"Untitled",l.href=URL.createObjectURL(await c);const i=()=>{"function"==typeof d&&d()},d=r.legacySetup&&r.legacySetup(i,(()=>d()),l);return l.addEventListener("click",(()=>{setTimeout((()=>URL.revokeObjectURL(l.href)),3e4),i()})),l.click(),null}};const y="opensave";let _=null;const loadExtensionTranslation=async function(e){let r;const l=e.configObj.pref("lang");try{r=await function __variableDynamicImportRuntime0__(e){switch(e){case"./locale/en.js":return Promise.resolve().then((function(){return w}));case"./locale/fr.js":return Promise.resolve().then((function(){return b}));case"./locale/sv.js":return Promise.resolve().then((function(){return P}));case"./locale/tr.js":return Promise.resolve().then((function(){return S}));case"./locale/uk.js":return Promise.resolve().then((function(){return A}));case"./locale/zh-CN.js":return Promise.resolve().then((function(){return C}));default:return new Promise((function(r,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./locale/${l}.js`)}catch(e){console.warn(`Missing translation (${l}) for ${y} - using 'en'`),r=await Promise.resolve().then((function(){return w}))}e.i18next.addResourceBundle(l,"translation",r.default,!0,!0)};var h={name:y,async init(e){const r=this,{svgCanvas:l}=r,{$id:c,$click:d}=l;await loadExtensionTranslation(r);const importImage=e=>{c("se-prompt-dialog").title=this.i18next.t("notification.loadingImage"),c("se-prompt-dialog").setAttribute("close",!1),e.stopPropagation(),e.preventDefault();const r="drop"===e.type?e.dataTransfer.files[0]:e.currentTarget.files[0];if(!r)return void c("se-prompt-dialog").setAttribute("close",!0);if(!r.type.includes("image"))return;let l;r.type.includes("svg")?(l=new FileReader,l.onloadend=e=>{const r=this.svgCanvas.importSvgString(e.target.result,m.shiftKey);this.svgCanvas.alignSelectedElements("m","page"),this.svgCanvas.alignSelectedElements("c","page"),this.svgCanvas.selectOnly([r]),c("se-prompt-dialog").setAttribute("close",!0)},l.readAsText(r)):(l=new FileReader,l.onloadend=e=>{let{target:{result:r}}=e;const insertNewImage=(e,l)=>{const d=this.svgCanvas.addSVGElementsFromJson({element:"image",attr:{x:0,y:0,width:e,height:l,id:this.svgCanvas.getNextId(),style:"pointer-events:inherit"}});this.svgCanvas.setHref(d,r),this.svgCanvas.selectOnly([d]),this.svgCanvas.alignSelectedElements("m","page"),this.svgCanvas.alignSelectedElements("c","page"),this.topPanel.updateContextPanel(),c("se-prompt-dialog").setAttribute("close",!0)};let l=100,d=100;const m=new Image;m.style.opacity=0,m.addEventListener("load",(()=>{l=m.offsetWidth||m.naturalWidth||m.width,d=m.offsetHeight||m.naturalHeight||m.height,insertNewImage(l,d)})),m.src=r},l.readAsDataURL(r))},m=document.createElement("input");m.type="file",m.addEventListener("change",importImage),this.workarea.addEventListener("drop",importImage);const clickClear=async function(){const[e,l]=r.configObj.curConfig.dimensions;"Cancel"!==await seConfirm(r.i18next.t("notification.QwantToClear"))&&(r.leftPanel.clickSelect(),r.svgCanvas.clear(),r.svgCanvas.setResolution(e,l),r.updateCanvas(!0),r.zoomImage(),r.layersPanel.populateLayers(),r.topPanel.updateContextPanel(),r.topPanel.updateTitle("untitled.svg"))},clickConvert=async function(){if("Cancel"!==await r.openPrep()){l.clear();try{const e=await n({mimeTypes:["image/png"]}),l=await function readAsDataURL(e){return new Promise(((r,l)=>{const c=new FileReader;c.onload=e=>r(e.target.result),c.onerror=l,c.readAsDataURL(e)}))}(e),c=await new Promise(((e,r)=>{ImageTracer.imageToSVG(l,(l=>{l?e(l):r(new Error("Failed to generate SVG."))}),{numberofcolors:16})}));console.log(c),await r.loadSvgString(c),r.updateCanvas(),_=e.handle,r.topPanel.updateTitle(e.name),r.svgCanvas.runExtensions("onOpenedDocument",{name:e.name,lastModified:e.lastModified,size:e.size,type:e.type}),r.layersPanel.populateLayers()}catch(e){"AbortError"!==e.name&&console.error(e)}}};const clickOpen=async function(){if("Cancel"!==await r.openPrep()){l.clear();try{const e=await n({mimeTypes:["image/*"]}),l=await e.text();await r.loadSvgString(l),r.updateCanvas(),_=e.handle,r.topPanel.updateTitle(e.name),r.svgCanvas.runExtensions("onOpenedDocument",{name:e.name,lastModified:e.lastModified,size:e.size,type:e.type}),r.layersPanel.populateLayers()}catch(e){if("AbortError"!==e.name)return console.error(e)}}},clickSave=async function(e){if("open"===c("se-svg-editor-dialog").getAttribute("dialog"))r.saveSourceEditor();else{const c={images:r.configObj.pref("img_save"),round_digits:2};if(l.clearSelection(),c){const e=l.mergeDeep(l.getSvgOption(),c);for(const[r,c]of Object.entries(e))l.setSvgOption(r,c)}l.setSvgOption("apply",!0);const d='<?xml version="1.0"?>\n'+l.svgCanvasToString(),m=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512;const c=atob(e),d=[];for(let e=0;e<c.length;e+=l){const r=c.slice(e,e+l),m=new Array(r.length);for(let e=0;e<r.length;e++)m[e]=r.charCodeAt(e);const v=new Uint8Array(m);d.push(v)}return new Blob(d,{type:r})}(l.encode64(d),"image/svg+xml");try{if("save"===e&&null!==_){const e=!1;_=await o(m,{fileName:"untitled.svg",extensions:[".svg"]},_,e)}else _=await o(m,{fileName:r.title,extensions:[".svg"]});r.topPanel.updateTitle(_.name),l.runExtensions("onSavedDocument",{name:_.name,kind:_.kind})}catch(e){if("AbortError"!==e.name)return console.error(e)}}};return{name:r.i18next.t(`${y}:name`),callback(){l.insertChildAtIndex(c("main_button"),'\n        <se-menu-item id="tool_clear" label="opensave.new_doc" shortcut="N" src="new.svg"></se-menu-item>',0);l.insertChildAtIndex(c("main_button"),'<se-menu-item id="tool_convert" label="opensave.convert_image_doc" src="open.svg"></se-menu-item>',1);l.insertChildAtIndex(c("main_button"),'<se-menu-item id="tool_open" label="opensave.open_image_doc" src="open.svg"></se-menu-item>',1);l.insertChildAtIndex(c("main_button"),'<se-menu-item id="tool_save" label="opensave.save_doc" shortcut="S" src="saveImg.svg"></se-menu-item>',2);l.insertChildAtIndex(c("main_button"),'<se-menu-item id="tool_save_as" label="opensave.save_as_doc" src="saveImg.svg"></se-menu-item>',3);l.insertChildAtIndex(c("main_button"),'<se-menu-item id="tool_import" label="tools.import_doc" src="importImg.svg"></se-menu-item>',4),d(c("tool_convert"),clickConvert.bind(this)),d(c("tool_clear"),clickClear.bind(this)),d(c("tool_open"),clickOpen.bind(this)),d(c("tool_save"),clickSave.bind(this,"save")),d(c("tool_save_as"),clickSave.bind(this,"saveas")),d(c("tool_import"),(e=>{m.shiftKey=e.shiftKey,m.click()}))}}}},w=Object.freeze({__proto__:null,default:{opensave:{new_doc:"New Image",open_image_doc:"Open SVG",convert_image_doc:"Convert PNG",save_doc:"Save SVG",save_as_doc:"Save as SVG"}}}),b=Object.freeze({__proto__:null,default:{opensave:{new_doc:"Nouvelle image",open_image_doc:"Ouvrir le SVG",convert_image_doc:"Convert PNG",save_doc:"Enregistrer l'image",save_as_doc:"Enregistrer en tant qu'image"}}}),P=Object.freeze({__proto__:null,default:{opensave:{new_doc:"Ny bild",open_image_doc:"Öppna SVG",convert_image_doc:"Convert PNG",save_doc:"Spara SVG",save_as_doc:"Spara som SVG"}}}),S=Object.freeze({__proto__:null,default:{opensave:{new_doc:"Yeni Resim",open_image_doc:"SVG Aç",convert_image_doc:"Convert PNG",save_doc:"SVG Kaydet",save_as_doc:"SVG olarak Kaydet"}}}),A=Object.freeze({__proto__:null,default:{opensave:{new_doc:"Нове Зображення",open_image_doc:"Відкрити SVG",convert_image_doc:"Convert PNG",save_doc:"Зберегти SVG",save_as_doc:"Зберегти SVG як"}}}),C=Object.freeze({__proto__:null,default:{opensave:{new_doc:"新图片",open_image_doc:"打开 SVG",convert_image_doc:"Convert PNG",save_doc:"保存图像",save_as_doc:"另存为图像"}}});export{h as default};
//# sourceMappingURL=ext-opensave.js.map
