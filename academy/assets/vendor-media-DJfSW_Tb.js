import{c as L,R as w}from"./vendor-react-C53i4ILT.js";const m={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},D={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},sn={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rn=Object.entries(sn),n=rn.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),Mo={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},wt=rn.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...Mo});Object.entries(wt).reduce((t,[e,i])=>{const a=n[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const Lo=Object.entries(n).reduce((t,[e,i])=>{const a=wt[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),ke={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},Mt={DISABLED:"disabled",SHOWING:"showing"},Ba={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},te={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ye={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},wo={FULLSCREEN:"fullscreen"};function Ro(t){return t==null?void 0:t.map(Do).join(" ")}function Do(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(s=>s!=null).join(":")}}function Co(t){return t==null?void 0:t.map(Oo).join(" ")}function Oo(t){if(t){const{id:e,kind:i,language:a,label:s}=t;return[e,i,a,s].filter(r=>r!=null).join(":")}}function ys(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}const nn=t=>new Promise(e=>setTimeout(e,t)),Po={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Va(t){return String(t).replace(/[&<>"']/g,e=>Po[e])}const Uo={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var Sr;const ei={en:Uo};let Lt=((Sr=globalThis.navigator)==null?void 0:Sr.language)||"en";const xo=t=>{Lt=t},No=t=>{var e,i,a;const[s]=Lt.split("-");return((e=ei[Lt])==null?void 0:e[t])||((i=ei[s])==null?void 0:i[t])||((a=ei.en)==null?void 0:a[t])||t},$o=()=>{const[t]=Lt.split("-");return ei[Lt]?Lt:ei[t]?t:"en"},E=(t,e={})=>No(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`),yr=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],kr=(t,e)=>{const i=E(t===1?yr[e].singular:yr[e].plural);return`${t} ${i}`},ti=t=>{if(!ys(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((o,d)=>o&&kr(o,d)).filter(o=>o).join(", ");return i?E("{time} remaining",{time:r}):e===0?kr(0,2):r};function Ge(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),s=Math.floor(t/60%60),r=Math.floor(t/3600);const o=Math.floor(e/60%60),d=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(r=s=a="0"),r=r>0||d>0?r+":":"",s=((r||o>=10)&&s<10?"0"+s:s)+":",a=a<10?"0"+a:a,(i?"-":"")+r+s+a}class on{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class ln extends on{}class Mr extends ln{constructor(){super(...arguments),this.role=null}}class Ho{observe(){}unobserve(){}disconnect(){}}const dn={createElement:function(){return new ni.HTMLElement},createElementNS:function(){return new ni.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},ni={ResizeObserver:Ho,document:dn,Node:ln,Element:Mr,HTMLElement:class extends Mr{constructor(){super(...arguments),this.innerHTML=""}get content(){return new ni.DocumentFragment}},DocumentFragment:class extends on{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},un="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>"u"||typeof window.customElements>"u",cn=Object.keys(ni).every(t=>t in globalThis),l=un&&!cn?ni:globalThis,j=un&&!cn?dn:globalThis.document,Lr=new WeakMap,ks=t=>{let e=Lr.get(t);return e||Lr.set(t,e=new Set),e},hn=new l.ResizeObserver(t=>{for(const e of t)for(const i of ks(e.target))i(e)});function mn(t,e){ks(t).add(e),hn.observe(t)}function pn(t,e){const i=ks(t);i.delete(e),i.size||hn.unobserve(t)}function Ee(t){const e={};for(const i of t)e[i.name]=i.value;return e}function Fo(t){var e;return(e=Wo(t))!=null?e:mi(t,"media-controller")}function Wo(t){var e;const{MEDIA_CONTROLLER:i}=D,a=t.getAttribute(i);if(a)return(e=Vo(t))==null?void 0:e.getElementById(a)}const En=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},Bo=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},vn=(t,e)=>Bo(t,e)[0],Ct=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:Ct(t,e.getRootNode().host),mi=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||mi(t.getRootNode().host,e)};function _n(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=_n(i.shadowRoot))!=null?e:i:null}function Vo(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function fn(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let s=t;for(;s&&e>0;){const r=getComputedStyle(s);if(i&&r.opacity==="0"||a&&r.visibility==="hidden"||r.display==="none")return!1;s=s.parentElement,e--}return!0}function Ko(t,e,i,a){const s=a.x-i.x,r=a.y-i.y,o=s*s+r*r;if(o===0)return 0;const d=((t-i.x)*s+(e-i.y)*r)/o;return Math.max(0,Math.min(1,d))}function V(t,e){const i=Go(t,a=>a===e);return i||gn(t,e)}function Go(t,e){var i,a;let s;for(s of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let r;try{r=(a=s.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of r??[])if(e(o.selectorText))return o}}function gn(t,e){var i,a;const s=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],r=s==null?void 0:s[s.length-1];if(!(r!=null&&r.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const o=r==null?void 0:r.sheet.insertRule(`${e}{}`,r.sheet.cssRules.length);return(a=r.sheet.cssRules)==null?void 0:a[o]}function N(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function Y(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}N(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function k(t,e){return t.hasAttribute(e)}function M(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}k(t,e)!=i&&t.toggleAttribute(e,i)}function $(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function x(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;$(t,e,void 0)!==a&&t.setAttribute(e,a)}var bn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},le=(t,e,i)=>(bn(t,e,"read from private field"),i?i.call(t):e.get(t)),qo=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vi=(t,e,i,a)=>(bn(t,e,"write to private field"),e.set(t,i),i),Z;function Yo(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class _a extends l.HTMLElement{constructor(){if(super(),qo(this,Z,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[D.MEDIA_CONTROLLER,n.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var s,r,o,d,u;e===D.MEDIA_CONTROLLER&&(i&&((r=(s=le(this,Z))==null?void 0:s.unassociateElement)==null||r.call(s,this),vi(this,Z,null)),a&&this.isConnected&&(vi(this,Z,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=le(this,Z))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),vi(this,Z,Qo(this)),this.getAttribute(D.MEDIA_CONTROLLER)&&((i=(e=le(this,Z))==null?void 0:e.associateElement)==null||i.call(e,this)),le(this,Z)&&(le(this,Z).addEventListener("pointerdown",this),le(this,Z).addEventListener("click",this),le(this,Z).hasAttribute("tabindex")||(le(this,Z).tabIndex=0))}disconnectedCallback(){var e,i,a,s;this.getAttribute(D.MEDIA_CONTROLLER)&&((i=(e=le(this,Z))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=le(this,Z))==null||a.removeEventListener("pointerdown",this),(s=le(this,Z))==null||s.removeEventListener("click",this),vi(this,Z,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:r,clientY:o}=e,{left:d,top:u,width:I,height:T}=this.getBoundingClientRect(),b=r-d,_=o-u;if(b<0||_<0||b>I||_>T||I===0&&T===0)return;const h=this._pointerType||"mouse";if(this._pointerType=void 0,h===Ba.TOUCH){this.handleTap(e);return}else if(h===Ba.MOUSE||h===Ba.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return k(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(i,{composed:!0,bubbles:!0}))}}Z=new WeakMap;_a.shadowRootOptions={mode:"open"};_a.getTemplateHTML=Yo;function Qo(t){var e;const i=t.getAttribute(D.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):mi(t,"media-controller")}l.customElements.get("media-gesture-receiver")||l.customElements.define("media-gesture-receiver",_a);var Ya=_a,Ms=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},H=(t,e,i)=>(Ms(t,e,"read from private field"),i?i.call(t):e.get(t)),J=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},de=(t,e,i,a)=>(Ms(t,e,"write to private field"),e.set(t,i),i),pe=(t,e,i)=>(Ms(t,e,"access private method"),i),Wt,ia,ct,Rt,yt,Qa,ht,Li,za,An,Za,Tn,oi,fa,ga,Ls,Dt,li,xe,wi;const f={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function zo(t){return`
    <style>
      
      :host([${n.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${f.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${f.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${f.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${f.AUDIO}])[${f.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${f.AUDIO}])[${f.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${f.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${f.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${f.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${f.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${f.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${f.USER_INACTIVE}]:not([${n.MEDIA_PAUSED}]):not([${n.MEDIA_IS_AIRPLAYING}]):not([${n.MEDIA_IS_CASTING}]):not([${f.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${f.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${f.USER_INACTIVE}]:not([${f.NO_AUTOHIDE}]):not([${n.MEDIA_PAUSED}]):not([${n.MEDIA_IS_CASTING}]):not([${f.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${f.USER_INACTIVE}][${f.AUTOHIDE_OVER_CONTROLS}]:not([${f.NO_AUTOHIDE}]):not([${n.MEDIA_PAUSED}]):not([${n.MEDIA_IS_CASTING}]):not([${f.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${f.AUDIO}])[${n.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${f.AUDIO}])[${n.MEDIA_STREAM_TYPE}="${ye.ON_DEMAND}"][${n.MEDIA_CURRENT_TIME}]:not([${n.MEDIA_CURRENT_TIME}="0"])) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Ya.shadowRootOptions.mode}">
          ${Ya.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const Zo=Object.values(n),Xo="sm:384 md:576 lg:768 xl:960";function Jo(t){In(t.target,t.contentRect.width)}function In(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(f.BREAKPOINTS))!=null?i:Xo,s=jo(a),r=el(s,e);let o=!1;if(Object.keys(s).forEach(d=>{if(r.includes(d)){t.hasAttribute(`breakpoint${d}`)||(t.setAttribute(`breakpoint${d}`,""),o=!0);return}t.hasAttribute(`breakpoint${d}`)&&(t.removeAttribute(`breakpoint${d}`),o=!0)}),o){const d=new CustomEvent(wt.BREAKPOINTS_CHANGE,{detail:r});t.dispatchEvent(d)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(wt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function jo(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function el(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class pi extends l.HTMLElement{constructor(){if(super(),J(this,za),J(this,Za),J(this,oi),J(this,ga),J(this,Dt),J(this,Wt,void 0),J(this,ia,0),J(this,ct,null),J(this,Rt,null),J(this,yt,void 0),this.breakpointsComputed=!1,J(this,Qa,e=>{const i=this.media;for(const a of e){if(a.type!=="childList")continue;const s=a.removedNodes;for(const r of s){if(r.slot!="media"||a.target!=this)continue;let o=a.previousSibling&&a.previousSibling.previousElementSibling;if(!o||!i)this.mediaUnsetCallback(r);else{let d=o.slot!=="media";for(;(o=o.previousSibling)!==null;)o.slot=="media"&&(d=!1);d&&this.mediaUnsetCallback(r)}}if(i)for(const r of a.addedNodes)r===i&&this.handleMediaUpdated(i)}}),J(this,ht,!1),J(this,Li,e=>{H(this,ht)||(setTimeout(()=>{Jo(e),de(this,ht,!1)},0),de(this,ht,!0))}),J(this,xe,void 0),J(this,wi,()=>{if(!H(this,xe).assignedElements({flatten:!0}).length){H(this,ct)&&this.mediaUnsetCallback(H(this,ct));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}de(this,Wt,new MutationObserver(H(this,Qa)))}static get observedAttributes(){return[f.AUTOHIDE,f.GESTURES_DISABLED].concat(Zo).filter(e=>![n.MEDIA_RENDITION_LIST,n.MEDIA_AUDIO_TRACK_LIST,n.MEDIA_CHAPTERS_CUES,n.MEDIA_WIDTH,n.MEDIA_HEIGHT,n.MEDIA_ERROR,n.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==f.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(de(this,ct,e),e.localName.includes("-")&&await l.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;H(this,Wt).observe(this,{childList:!0,subtree:!0}),mn(this,H(this,Li));const i=this.getAttribute(f.AUDIO)!=null,a=E(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(f.USER_INACTIVE,""),In(this,this.getBoundingClientRect().width);const s=this.querySelector(":scope > slot[slot=media]");s&&(de(this,xe,s),H(this,xe).addEventListener("slotchange",H(this,wi))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=l.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;pn(this,H(this,Li)),clearTimeout(H(this,Rt)),H(this,Wt).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=l.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),H(this,xe)&&(H(this,xe).removeEventListener("slotchange",H(this,wi)),de(this,xe,null)),de(this,ht,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){de(this,ct,null)}handleEvent(e){switch(e.type){case"pointerdown":de(this,ia,e.timeStamp);break;case"pointermove":pe(this,za,An).call(this,e);break;case"pointerup":pe(this,Za,Tn).call(this,e);break;case"mouseleave":pe(this,oi,fa).call(this);break;case"mouseup":this.removeAttribute(f.KEYBOARD_CONTROL);break;case"keyup":pe(this,Dt,li).call(this),this.setAttribute(f.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);de(this,yt,isNaN(i)?0:i)}get autohide(){return(H(this,yt)===void 0?2:H(this,yt)).toString()}get breakpoints(){return $(this,f.BREAKPOINTS)}set breakpoints(e){x(this,f.BREAKPOINTS,e)}get audio(){return k(this,f.AUDIO)}set audio(e){M(this,f.AUDIO,e)}get gesturesDisabled(){return k(this,f.GESTURES_DISABLED)}set gesturesDisabled(e){M(this,f.GESTURES_DISABLED,e)}get keyboardControl(){return k(this,f.KEYBOARD_CONTROL)}set keyboardControl(e){M(this,f.KEYBOARD_CONTROL,e)}get noAutohide(){return k(this,f.NO_AUTOHIDE)}set noAutohide(e){M(this,f.NO_AUTOHIDE,e)}get autohideOverControls(){return k(this,f.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){M(this,f.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return k(this,f.USER_INACTIVE)}set userInteractive(e){M(this,f.USER_INACTIVE,e)}}Wt=new WeakMap;ia=new WeakMap;ct=new WeakMap;Rt=new WeakMap;yt=new WeakMap;Qa=new WeakMap;ht=new WeakMap;Li=new WeakMap;za=new WeakSet;An=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-H(this,ia)<250)return;pe(this,ga,Ls).call(this),clearTimeout(H(this,Rt));const e=this.hasAttribute(f.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&pe(this,Dt,li).call(this)};Za=new WeakSet;Tn=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(f.USER_INACTIVE);[this,this.media].includes(t.target)&&e?pe(this,oi,fa).call(this):pe(this,Dt,li).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&pe(this,Dt,li).call(this)};oi=new WeakSet;fa=function(){if(H(this,yt)<0||this.hasAttribute(f.USER_INACTIVE))return;this.setAttribute(f.USER_INACTIVE,"");const t=new l.CustomEvent(wt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};ga=new WeakSet;Ls=function(){if(!this.hasAttribute(f.USER_INACTIVE))return;this.removeAttribute(f.USER_INACTIVE);const t=new l.CustomEvent(wt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};Dt=new WeakSet;li=function(){pe(this,ga,Ls).call(this),clearTimeout(H(this,Rt));const t=parseInt(this.autohide);t<0||de(this,Rt,setTimeout(()=>{pe(this,oi,fa).call(this)},t*1e3))};xe=new WeakMap;wi=new WeakMap;pi.shadowRootOptions={mode:"open"};pi.getTemplateHTML=zo;l.customElements.get("media-container")||l.customElements.define("media-container",pi);var tl=pi,ws=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},je=(t,e,i)=>(ws(t,e,"read from private field"),e.get(t)),Re=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Rs=(t,e,i,a)=>(ws(t,e,"write to private field"),e.set(t,i),i),Ye=(t,e,i)=>(ws(t,e,"access private method"),i),aa,di,tt,Ri,Xa,Ja,Sn,ja,yn,es,kn,ts,Mn,is,Ln;function il(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function al(t){return`
    <slot id="content"></slot>
  `}const Nt={OPEN:"open",ANCHOR:"anchor"};class it extends l.HTMLElement{constructor(){super(),Re(this,Ri),Re(this,Ja),Re(this,ja),Re(this,es),Re(this,ts),Re(this,is),Re(this,aa,!1),Re(this,di,null),Re(this,tt,null)}static get observedAttributes(){return[Nt.OPEN,Nt.ANCHOR]}get open(){return k(this,Nt.OPEN)}set open(e){M(this,Nt.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Ye(this,es,kn).call(this,e);break;case"focusout":Ye(this,ts,Mn).call(this,e);break;case"keydown":Ye(this,is,Ln).call(this,e);break}}connectedCallback(){Ye(this,Ri,Xa).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){Ye(this,Ri,Xa).call(this),e===Nt.OPEN&&a!==i&&(this.open?Ye(this,Ja,Sn).call(this):Ye(this,ja,yn).call(this))}focus(){Rs(this,di,_n());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}aa=new WeakMap;di=new WeakMap;tt=new WeakMap;Ri=new WeakSet;Xa=function(){if(!je(this,aa)&&(Rs(this,aa,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=Ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=V(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Ja=new WeakSet;Sn=function(){var t;(t=je(this,tt))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};ja=new WeakSet;yn=function(){var t;(t=je(this,tt))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};es=new WeakSet;kn=function(t){Rs(this,tt,t.relatedTarget),Ct(this,t.relatedTarget)||(this.open=!this.open)};ts=new WeakSet;Mn=function(t){var e;Ct(this,t.relatedTarget)||((e=je(this,di))==null||e.focus(),je(this,tt)&&je(this,tt)!==t.relatedTarget&&this.open&&(this.open=!1))};is=new WeakSet;Ln=function(t){var e,i,a,s,r;const{key:o,ctrlKey:d,altKey:u,metaKey:I}=t;d||u||I||this.keysUsed.includes(o)&&(t.preventDefault(),t.stopPropagation(),o==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(s=(a=this.nextElementSibling)==null?void 0:a.focus)==null||s.call(a),this.blur()):o==="Escape"&&((r=je(this,di))==null||r.focus(),this.open=!1))};it.shadowRootOptions={mode:"open"};it.getTemplateHTML=il;it.getSlotTemplateHTML=al;l.customElements.get("media-chrome-dialog")||l.customElements.define("media-chrome-dialog",it);var sl=it,rl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Pe=(t,e,i)=>(rl(t,e,"read from private field"),i?i.call(t):e.get(t)),wr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},mt,pt;const Bt={HOTKEYS:"hotkeys"},nl=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"←"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"→"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"↑"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"↓"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function Ds(t){return t===" "?"nospace":`no${t.toLowerCase()}`}function ol(t){const e=new Set(t==null?void 0:t.split(/\s+/));return nl.map(({keys:i,description:a})=>({keys:i.filter(({key:s})=>!e.has(Ds(s))),description:a})).filter(({keys:i})=>i.length)}function ll(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${wn(t[Bt.HOTKEYS])}
    </slot>
  `}function wn(t){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${ol(t).map(({keys:i,description:a})=>`
        <tr>
          <td>
            <div class="key-combo">${i.map(({key:r,label:o=r},d)=>d>0?`<span class="key-separator">or</span><span class="key">${o}</span>`:`<span class="key">${o}</span>`).join("")}</div>
          </td>
          <td class="description">${a}</td>
        </tr>
      `).join("")}</table>
  `}class Cs extends it{constructor(){super(...arguments),wr(this,mt,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const s=e.composedPath(),r=s[0]===this||s.includes(this),o=s.includes(a);r&&!o&&(this.open=!1)}),wr(this,pt,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,Bt.HOTKEYS]}get hotkeys(){var e;return(e=$(this,Bt.HOTKEYS))!=null?e:void 0}set hotkeys(e){x(this,Bt.HOTKEYS,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Pe(this,mt)),document.addEventListener("keydown",Pe(this,pt)))}disconnectedCallback(){this.removeEventListener("click",Pe(this,mt)),document.removeEventListener("keydown",Pe(this,pt))}attributeChangedCallback(e,i,a){var s;if(super.attributeChangedCallback(e,i,a),e==="open")this.open?(this.addEventListener("click",Pe(this,mt)),document.addEventListener("keydown",Pe(this,pt))):(this.removeEventListener("click",Pe(this,mt)),document.removeEventListener("keydown",Pe(this,pt)));else if(e===Bt.HOTKEYS&&a!==i){const r=(s=this.shadowRoot)==null?void 0:s.querySelector("#content");r&&(r.innerHTML=wn(a))}}}mt=new WeakMap;pt=new WeakMap;Cs.getSlotTemplateHTML=ll;l.customElements.get("media-keyboard-shortcuts-dialog")||l.customElements.define("media-keyboard-shortcuts-dialog",Cs);var dl=Cs,Rn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},q=(t,e,i)=>(Rn(t,e,"read from private field"),i?i.call(t):e.get(t)),$t=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_i=(t,e,i,a)=>(Rn(t,e,"write to private field"),e.set(t,i),i),Et,vt,sa,Je,De,Ne;class Dn{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){$t(this,De),$t(this,Et,void 0),$t(this,vt,void 0),$t(this,sa,void 0),$t(this,Je,new Set),_i(this,Et,e),_i(this,vt,i),_i(this,sa,new Set(a))}[Symbol.iterator](){return q(this,De,Ne).values()}get length(){return q(this,De,Ne).size}get value(){var e;return(e=[...q(this,De,Ne)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(_i(this,Je,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...q(this,De,Ne)][e]}values(){return q(this,De,Ne).values()}forEach(e,i){q(this,De,Ne).forEach(e,i)}add(...e){var i,a;e.forEach(s=>q(this,Je).add(s)),!(this.value===""&&!((i=q(this,Et))!=null&&i.hasAttribute(`${q(this,vt)}`)))&&((a=q(this,Et))==null||a.setAttribute(`${q(this,vt)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>q(this,Je).delete(a)),(i=q(this,Et))==null||i.setAttribute(`${q(this,vt)}`,`${this.value}`)}contains(e){return q(this,De,Ne).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Et=new WeakMap;vt=new WeakMap;sa=new WeakMap;Je=new WeakMap;De=new WeakSet;Ne=function(){return q(this,Je).size?q(this,Je):q(this,sa)};const ul=(t="")=>t.split(/\s+/),Cn=(t="")=>{const[e,i,a]=t.split(":"),s=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?ke.CAPTIONS:ke.SUBTITLES,language:i,label:s}},On=(t="",e={})=>ul(t).map(i=>{const a=Cn(i);return{...e,...a}}),Pn=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Cn(e):e):typeof t=="string"?On(t):[t]:[],cl=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,as=(t=[])=>Array.prototype.map.call(t,cl).join(" "),hl=(t,e)=>i=>i[t]===e,Un=t=>{const e=Object.entries(t).map(([i,a])=>hl(i,a));return i=>e.every(a=>a(i))},ii=(t,e=[],i=[])=>{const a=Pn(i).map(Un),s=r=>a.some(o=>o(r));Array.from(e).filter(s).forEach(r=>{r.mode=t})},ba=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:Un(e);return Array.from(t.textTracks).filter(i)},ml=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(n.MEDIA_SUBTITLES_SHOWING)},pl=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const s=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(s){const r=(e=a[s])==null?void 0:e.call(a);if(r instanceof Promise)return r.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(s){console.error(s)}},Rr="exitFullscreen"in j?"exitFullscreen":"webkitExitFullscreen"in j?"webkitExitFullscreen":"webkitCancelFullScreen"in j?"webkitCancelFullScreen":void 0,El=t=>{var e;const{documentElement:i}=t;if(Rr){const a=(e=i==null?void 0:i[Rr])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Vt="fullscreenElement"in j?"fullscreenElement":"webkitFullscreenElement"in j?"webkitFullscreenElement":void 0,vl=t=>{const{documentElement:e,media:i}=t,a=e==null?void 0:e[Vt];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===wo.FULLSCREEN?i:a},_l=t=>{var e;const{media:i,documentElement:a,fullscreenElement:s=i}=t;if(!i||!a)return!1;const r=vl(t);if(!r)return!1;if(r===s||r===i)return!0;if(r.localName.includes("-")){let o=r.shadowRoot;if(!(Vt in o))return Ct(r,s);for(;o!=null&&o[Vt];){if(o[Vt]===s)return!0;o=(e=o[Vt])==null?void 0:e.shadowRoot}}return!1},fl="fullscreenEnabled"in j?"fullscreenEnabled":"webkitFullscreenEnabled"in j?"webkitFullscreenEnabled":void 0,gl=t=>{const{documentElement:e,media:i}=t;return!!(e!=null&&e[fl])||i&&"webkitSupportsFullscreen"in i};let fi;const Os=()=>{var t,e;return fi||(fi=(e=(t=j)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),fi)},bl=async(t=Os())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([Al(t,i.signal),Tl(t,e)]);return i.abort(),a},Al=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),Tl=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await nn(10)}return t.volume!==e},Il=/.*Version\/.*Safari\/.*/.test(l.navigator.userAgent),xn=(t=Os())=>l.matchMedia("(display-mode: standalone)").matches&&Il?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",Nn=(t=Os())=>gl({documentElement:j,media:t}),Sl=Nn(),yl=xn(),kl=!!l.WebKitPlaybackTargetAvailabilityEvent,Ml=!!l.chrome,ra=t=>ba(t.media,e=>[ke.SUBTITLES,ke.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),$n=t=>ba(t.media,e=>e.mode===Mt.SHOWING&&[ke.SUBTITLES,ke.CAPTIONS].includes(e.kind)),Hn=(t,e)=>{const i=ra(t),a=$n(t),s=!!a.length;if(i.length){if(e===!1||s&&e!==!0)ii(Mt.DISABLED,i,a);else if(e===!0||!s&&e!==!1){let r=i[0];const{options:o}=t;if(!(o!=null&&o.noSubtitlesLangPref)){const T=l.localStorage.getItem("media-chrome-pref-subtitles-lang"),b=T?[T,...l.navigator.languages]:l.navigator.languages,_=i.filter(h=>b.some(g=>h.language.toLowerCase().startsWith(g.split("-")[0]))).sort((h,g)=>{const v=b.findIndex(A=>h.language.toLowerCase().startsWith(A.split("-")[0])),S=b.findIndex(A=>g.language.toLowerCase().startsWith(A.split("-")[0]));return v-S});_[0]&&(r=_[0])}const{language:d,label:u,kind:I}=r;ii(Mt.DISABLED,i,a),ii(Mt.SHOWING,i,[{language:d,label:u,kind:I}])}}},Ps=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Ll(t,e):Object.entries(t).every(([i,a])=>i in e&&Ps(a,e[i])),Ll=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((s,r)=>Ps(s,e[r])):!0},wl=Object.values(ye);let na;const Rl=bl().then(t=>(na=t,na)),Dl=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof l.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=l.customElements.get(i);a&&e instanceof a||(await l.customElements.whenDefined(i),l.customElements.upgrade(e))}))},Cl=new l.DOMParser,Ol=t=>t&&(Cl.parseFromString(t,"text/html").body.textContent||t),Kt={mediaError:{get(t,e){const{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:s}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=s==null?void 0:s.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const s=l.localStorage.getItem("media-chrome-pref-muted")!==null,r=i.hasAttribute("muted");if(a){s&&l.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!s)return;l.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(s){console.debug("Error setting muted pref",s)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const s=l.localStorage.getItem("media-chrome-pref-muted")==="true";Kt.mediaMuted.set(s,e),t(s)}catch(s){console.debug("Error getting muted pref",s)}}]},mediaLoop:{get(t){const{media:e}=t;return e==null?void 0:e.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?l.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&l.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(s){console.debug("Error setting volume pref",s)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const s=l.localStorage.getItem("media-chrome-pref-volume");if(s==null)return;Kt.mediaVolume.set(+s,e),t(+s)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!ys(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const a=i.seekable.start(0),s=i.seekable.end(i.seekable.length-1);if(!(!a&&!s))return[Number(a.toFixed(3)),Number(s.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((s,r)=>[Number(a.start(r).toFixed(3)),Number(a.end(r).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[ye.LIVE,ye.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:s}=e;if(wl.includes(s))return s===ye.UNKNOWN?a:s;const r=e.duration;return r===1/0?ye.LIVE:Number.isFinite(r)?ye.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Kt.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===ye.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Kt.mediaStreamType.get(t)===ye.LIVE))return!1;const s=e.seekable;if(!s)return!0;if(!s.length)return!1;const r=s.end(s.length-1)-i;return e.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return ra(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return $n(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:s,options:r}=e;if(!s)return;const o=d=>{var u;!r.defaultSubtitles||d&&![ke.CAPTIONS,ke.SUBTITLES].includes((u=d==null?void 0:d.track)==null?void 0:u.kind)||Hn(e,!0)};return s.addEventListener("loadstart",o),(i=s.textTracks)==null||i.addEventListener("addtrack",o),(a=s.textTracks)==null||a.addEventListener("removetrack",o),()=>{var d,u;s.removeEventListener("loadstart",o),(d=s.textTracks)==null||d.removeEventListener("addtrack",o),(u=s.textTracks)==null||u.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=ba(i,{kind:ke.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:s,startTime:r,endTime:o})=>({text:Ol(s),startTime:r,endTime:o}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const s=a.querySelector('track[kind="chapters"][default][src]'),r=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return s==null||s.addEventListener("load",t),r==null||r.addEventListener("load",t),()=>{s==null||s.removeEventListener("load",t),r==null||r.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:s}=t;if(!a||!s||!s.pictureInPictureElement)return!1;if(s.pictureInPictureElement===a)return!0;if(s.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?Ct(a,s.pictureInPictureElement):!1;if(s.pictureInPictureElement.localName.includes("-")){let r=s.pictureInPictureElement.shadowRoot;for(;r!=null&&r.pictureInPictureElement;){if(r.pictureInPictureElement===a)return!0;r=(i=r.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!j.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(s=>{if(s.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const r=()=>{i.removeEventListener("loadedmetadata",o),i.preload="none"},o=()=>{i.requestPictureInPicture().catch(a),r()};i.addEventListener("loadedmetadata",o),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),r()},1e3)}else throw s}else throw s})}else j.pictureInPictureElement&&j.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:s}=t;return(a=(i=s==null?void 0:s.videoRenditions)==null?void 0:i[(e=s.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,s=Array.prototype.findIndex.call(i.videoRenditions,r=>r.id==a);i.videoRenditions.selectedIndex!=s&&(i.videoRenditions.selectedIndex=s)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(s=>s.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const s of i.audioTracks)s.enabled=a==s.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return _l(t)},set(t,e,i){var a,s;t?(pl(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((s=e.media)==null||s.focus())):El(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;const{media:s}=e;if(s&&!(t&&((i=s.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=s.remote)==null?void 0:a.state)!=="connected")){if(typeof s.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}s.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&l.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!Sl||!Nn(e))return te.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!yl||!xn(e))return te.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return te.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(na===!1||(e==null?void 0:e.volume)==null)return te.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{na==null&&Rl.then(e=>t(e?void 0:te.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!Ml||!((i=a==null?void 0:a.remote)!=null&&i.state))return te.UNSUPPORTED;if(!(e==null||e==="available"))return te.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(r=>{t({availability:r?"available":"not-available"})}).catch(r=>{r.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var r;(r=a==null?void 0:a.remote)==null||r.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!kl)return te.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return te.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(r=>{t({availability:r?"available":"not-available"})}).catch(r=>{r.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var r;(r=a==null?void 0:a.remote)==null||r.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return te.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return te.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!(a!=null&&a.audioTracks))return te.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return te.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},Pl={[m.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,s,r;const{media:o}=e,d=i??void 0;let u,I;if(o&&d!=null){const[h]=ba(o,{kind:ke.METADATA,label:"thumbnails"}),g=Array.prototype.find.call((a=h==null?void 0:h.cues)!=null?a:[],(v,S,A)=>S===0?v.endTime>d:S===A.length-1?v.startTime<=d:v.startTime<=d&&v.endTime>d);if(g){const v=/'^(?:[a-z]+:)?\/\//i.test(g.text)||(s=o==null?void 0:o.querySelector('track[label="thumbnails"]'))==null?void 0:s.src,S=new URL(g.text,v);I=new URLSearchParams(S.hash).get("#xywh").split(",").map(X=>+X),u=S.href}}const T=t.mediaDuration.get(e);let _=(r=t.mediaChaptersCues.get(e).find((h,g,v)=>g===v.length-1&&T===h.endTime?h.startTime<=d&&h.endTime>=d:h.startTime<=d&&h.endTime>d))==null?void 0:r.text;return i!=null&&_==null&&(_=""),{mediaPreviewTime:d,mediaPreviewImage:u,mediaPreviewCoords:I,mediaPreviewChapter:_}},[m.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[m.MEDIA_PLAY_REQUEST](t,e){var i,a,s,r;const o="mediaPaused",u=t.mediaStreamType.get(e)===ye.LIVE,I=!((i=e.options)!=null&&i.noAutoSeekToLive),T=t.mediaTargetLiveWindow.get(e)>0;if(u&&I&&!T){const b=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(b){const _=(r=(s=e.options)==null?void 0:s.seekToLiveOffset)!=null?r:0,h=b-_;t.mediaCurrentTime.set(h,e)}}t[o].set(!1,e)},[m.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",s=i;t[a].set(s,e)},[m.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[m.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[m.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",s=!!i;return t[a].set(s,e),{mediaLoop:s}},[m.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",s=i;s&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(s,e)},[m.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",s=i;t[a].set(s,e)},[m.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,s;const r="mediaCurrentTime",o=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(o)))return;const d=(s=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?s:0,u=o-d;t[r].set(u,e)},[m.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:s}=e,r=ra(e),o=Pn(i),d=(a=o[0])==null?void 0:a.language;d&&!s.noSubtitlesLangPref&&l.localStorage.setItem("media-chrome-pref-subtitles-lang",d),ii(Mt.SHOWING,r,o)},[m.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=ra(e),s=i??[];ii(Mt.DISABLED,a,s)},[m.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Hn(e,i)},[m.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",s=i;t[a].set(s,e)},[m.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",s=i;t[a].set(s,e)},[m.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[m.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[m.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[m.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[m.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[m.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[m.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},Ul=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Kt,requestMap:s=Pl,options:r={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{const d=[],u={options:{...r}};let I=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const T=v=>{v!=null&&(Ps(v,I)||(I=Object.freeze({...I,...v}),d.forEach(S=>S(I))))},b=()=>{const v=Object.entries(a).reduce((S,[A,{get:X}])=>(S[A]=X(u),S),{});T(v)},_={};let h;const g=async(v,S)=>{var A,X,Ot,Pt,st,Le,we,Ut,qe,Js,js,er,tr,ir,ar,sr;const go=!!h;if(h={...u,...h??{},...v},go)return;await Dl(...Object.values(v));const rt=d.length>0&&S===0&&o,rr=u.media!==h.media,nr=((A=u.media)==null?void 0:A.textTracks)!==((X=h.media)==null?void 0:X.textTracks),or=((Ot=u.media)==null?void 0:Ot.videoRenditions)!==((Pt=h.media)==null?void 0:Pt.videoRenditions),lr=((st=u.media)==null?void 0:st.audioTracks)!==((Le=h.media)==null?void 0:Le.audioTracks),dr=((we=u.media)==null?void 0:we.remote)!==((Ut=h.media)==null?void 0:Ut.remote),ur=u.documentElement!==h.documentElement,cr=!!u.media&&(rr||rt),hr=!!((qe=u.media)!=null&&qe.textTracks)&&(nr||rt),mr=!!((Js=u.media)!=null&&Js.videoRenditions)&&(or||rt),pr=!!((js=u.media)!=null&&js.audioTracks)&&(lr||rt),Er=!!((er=u.media)!=null&&er.remote)&&(dr||rt),vr=!!u.documentElement&&(ur||rt),Wa=cr||hr||mr||pr||Er||vr,nt=d.length===0&&S===1&&o,_r=!!h.media&&(rr||nt),fr=!!((tr=h.media)!=null&&tr.textTracks)&&(nr||nt),gr=!!((ir=h.media)!=null&&ir.videoRenditions)&&(or||nt),br=!!((ar=h.media)!=null&&ar.audioTracks)&&(lr||nt),Ar=!!((sr=h.media)!=null&&sr.remote)&&(dr||nt),Tr=!!h.documentElement&&(ur||nt),Ir=_r||fr||gr||br||Ar||Tr;if(!(Wa||Ir)){Object.entries(h).forEach(([C,xt])=>{u[C]=xt}),b(),h=void 0;return}Object.entries(a).forEach(([C,{get:xt,mediaEvents:bo=[],textTracksEvents:Ao=[],videoRenditionsEvents:To=[],audioTracksEvents:Io=[],remoteEvents:So=[],rootEvents:yo=[],stateOwnersUpdateHandlers:ko=[]}])=>{_[C]||(_[C]={});const ee=P=>{const F=xt(u,P);T({[C]:F})};let K;K=_[C].mediaEvents,bo.forEach(P=>{K&&cr&&(u.media.removeEventListener(P,K),_[C].mediaEvents=void 0),_r&&(h.media.addEventListener(P,ee),_[C].mediaEvents=ee)}),K=_[C].textTracksEvents,Ao.forEach(P=>{var F,oe;K&&hr&&((F=u.media.textTracks)==null||F.removeEventListener(P,K),_[C].textTracksEvents=void 0),fr&&((oe=h.media.textTracks)==null||oe.addEventListener(P,ee),_[C].textTracksEvents=ee)}),K=_[C].videoRenditionsEvents,To.forEach(P=>{var F,oe;K&&mr&&((F=u.media.videoRenditions)==null||F.removeEventListener(P,K),_[C].videoRenditionsEvents=void 0),gr&&((oe=h.media.videoRenditions)==null||oe.addEventListener(P,ee),_[C].videoRenditionsEvents=ee)}),K=_[C].audioTracksEvents,Io.forEach(P=>{var F,oe;K&&pr&&((F=u.media.audioTracks)==null||F.removeEventListener(P,K),_[C].audioTracksEvents=void 0),br&&((oe=h.media.audioTracks)==null||oe.addEventListener(P,ee),_[C].audioTracksEvents=ee)}),K=_[C].remoteEvents,So.forEach(P=>{var F,oe;K&&Er&&((F=u.media.remote)==null||F.removeEventListener(P,K),_[C].remoteEvents=void 0),Ar&&((oe=h.media.remote)==null||oe.addEventListener(P,ee),_[C].remoteEvents=ee)}),K=_[C].rootEvents,yo.forEach(P=>{K&&vr&&(u.documentElement.removeEventListener(P,K),_[C].rootEvents=void 0),Tr&&(h.documentElement.addEventListener(P,ee),_[C].rootEvents=ee)});const Ei=_[C].stateOwnersUpdateHandlers;if(Ei&&Wa&&(Array.isArray(Ei)?Ei:[Ei]).forEach(F=>{typeof F=="function"&&F()}),Ir){const P=ko.map(F=>F(ee,h)).filter(F=>typeof F=="function");_[C].stateOwnersUpdateHandlers=P.length===1?P[0]:P}else Wa&&(_[C].stateOwnersUpdateHandlers=void 0)}),Object.entries(h).forEach(([C,xt])=>{u[C]=xt}),b(),h=void 0};return g({media:t,fullscreenElement:e,documentElement:i,options:r}),{dispatch(v){const{type:S,detail:A}=v;if(s[S]&&I.mediaErrorCode==null){T(s[S](a,u,v));return}S==="mediaelementchangerequest"?g({media:A}):S==="fullscreenelementchangerequest"?g({fullscreenElement:A}):S==="documentelementchangerequest"?g({documentElement:A}):S==="optionschangerequest"&&(Object.entries(A??{}).forEach(([X,Ot])=>{u.options[X]=Ot}),b())},getState(){return I},subscribe(v){return g({},d.length+1),d.push(v),v(I),()=>{const S=d.indexOf(v);S>=0&&(g({},d.length-1),d.splice(S,1))}}}};var Us=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},p=(t,e,i)=>(Us(t,e,"read from private field"),i?i.call(t):e.get(t)),ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ue=(t,e,i,a)=>(Us(t,e,"write to private field"),e.set(t,i),i),$e=(t,e,i)=>(Us(t,e,"access private method"),i),Ce,Gt,y,se,qt,fe,Di,Yt,Ci,ss,et,Oi,rs,ai,oa,ns,Fn;const Wn=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Dr=10,Cr=.025,Or=.25,xl=.25,Nl=2,c={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};let Bn=class extends pi{constructor(){super(),ie(this,Ci),ie(this,Oi),ie(this,ai),ie(this,ns),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ie(this,Ce,new Dn(this,c.HOTKEYS)),ie(this,Gt,void 0),ie(this,y,void 0),ie(this,se,null),ie(this,qt,void 0),ie(this,fe,void 0),ie(this,Di,i=>{var a;(a=p(this,y))==null||a.dispatch(i)}),ie(this,Yt,void 0),ie(this,et,i=>{const{key:a,shiftKey:s}=i;if(!(s&&(a==="/"||a==="?")||Wn.includes(a))){this.removeEventListener("keyup",p(this,et));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};ue(this,qt,i=>{Object.entries(i).forEach(([a,s])=>{if(a in e&&e[a]===s)return;this.propagateMediaState(a,s);const r=a.toLowerCase(),o=new l.CustomEvent(Lo[r],{composed:!0,detail:s});this.dispatchEvent(o)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(c.NO_HOTKEYS,c.HOTKEYS,c.DEFAULT_STREAM_TYPE,c.DEFAULT_SUBTITLES,c.DEFAULT_DURATION,c.NO_MUTED_PREF,c.NO_VOLUME_PREF,c.LANG,c.LOOP,c.LIVE_EDGE_OFFSET,c.SEEK_TO_LIVE_OFFSET,c.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return p(this,y)}set mediaStore(e){var i,a;if(p(this,y)&&((i=p(this,fe))==null||i.call(this),ue(this,fe,void 0)),ue(this,y,e),!p(this,y)&&!this.hasAttribute(c.NO_DEFAULT_STORE)){$e(this,Ci,ss).call(this);return}ue(this,fe,(a=p(this,y))==null?void 0:a.subscribe(p(this,qt)))}get fullscreenElement(){var e;return(e=p(this,Gt))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(c.FULLSCREEN_ELEMENT)&&this.removeAttribute(c.FULLSCREEN_ELEMENT),ue(this,Gt,e),(i=p(this,y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return k(this,c.DEFAULT_SUBTITLES)}set defaultSubtitles(e){M(this,c.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return $(this,c.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){x(this,c.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return N(this,c.DEFAULT_DURATION)}set defaultDuration(e){Y(this,c.DEFAULT_DURATION,e)}get noHotkeys(){return k(this,c.NO_HOTKEYS)}set noHotkeys(e){M(this,c.NO_HOTKEYS,e)}get keysUsed(){return $(this,c.KEYS_USED)}set keysUsed(e){x(this,c.KEYS_USED,e)}get liveEdgeOffset(){return N(this,c.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){Y(this,c.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return k(this,c.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){M(this,c.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return k(this,c.NO_VOLUME_PREF)}set noVolumePref(e){M(this,c.NO_VOLUME_PREF,e)}get noMutedPref(){return k(this,c.NO_MUTED_PREF)}set noMutedPref(e){M(this,c.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return k(this,c.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){M(this,c.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return k(this,c.NO_DEFAULT_STORE)}set noDefaultStore(e){M(this,c.NO_DEFAULT_STORE,e)}get resolvedLang(){return $o()}attributeChangedCallback(e,i,a){var s,r,o,d,u,I,T,b,_,h,g,v;if(super.attributeChangedCallback(e,i,a),e===c.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(c.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys(),$e(this,ai,oa).call(this);else if(e===c.HOTKEYS)p(this,Ce).value=a,$e(this,ai,oa).call(this);else if(e===c.DEFAULT_SUBTITLES&&a!==i)(s=p(this,y))==null||s.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES)}});else if(e===c.DEFAULT_STREAM_TYPE)(o=p(this,y))==null||o.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(r=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?r:void 0}});else if(e===c.LIVE_EDGE_OFFSET&&a!==i)(d=p(this,y))==null||d.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0}});else if(e===c.SEEK_TO_LIVE_OFFSET&&a!==i)(u=p(this,y))==null||u.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0}});else if(e===c.NO_AUTO_SEEK_TO_LIVE)(I=p(this,y))==null||I.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE)}});else if(e===c.FULLSCREEN_ELEMENT){const S=a?(T=this.getRootNode())==null?void 0:T.getElementById(a):void 0;ue(this,Gt,S),(b=p(this,y))==null||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===c.LANG&&a!==i?(xo(a),(_=p(this,y))==null||_.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===c.LOOP&&a!==i?(h=p(this,y))==null||h.dispatch({type:m.MEDIA_LOOP_REQUEST,detail:a!=null}):e===c.NO_VOLUME_PREF&&a!==i?(g=p(this,y))==null||g.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF)}}):e===c.NO_MUTED_PREF&&a!==i&&((v=p(this,y))==null||v.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(c.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!p(this,y)&&!this.hasAttribute(c.NO_DEFAULT_STORE)&&$e(this,Ci,ss).call(this),(e=p(this,y))==null||e.dispatch({type:"documentelementchangerequest",detail:j}),(i=p(this,y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),p(this,y)&&!p(this,fe)&&ue(this,fe,(a=p(this,y))==null?void 0:a.subscribe(p(this,qt))),p(this,Yt)!==void 0&&p(this,y)&&this.media&&setTimeout(()=>{var s,r,o;(r=(s=this.media)==null?void 0:s.textTracks)!=null&&r.length&&((o=p(this,y))==null||o.dispatch({type:m.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:p(this,Yt)}))},0),this.hasAttribute(c.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,s,r,o;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),p(this,y)){const d=p(this,y).getState();ue(this,Yt,!!((i=d.mediaSubtitlesShowing)!=null&&i.length)),(a=p(this,y))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(s=p(this,y))==null||s.dispatch({type:"documentelementchangerequest",detail:void 0}),(r=p(this,y))==null||r.dispatch({type:m.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}p(this,fe)&&((o=p(this,fe))==null||o.call(this),ue(this,fe,void 0)),this.unassociateElement(this),p(this,se)&&(p(this,se).remove(),ue(this,se,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=p(this,y))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=p(this,y))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){xr(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),s=this.unregisterMediaStateReceiver.bind(this),r=Vl(e,a,s);Object.values(m).forEach(o=>{e.addEventListener(o,p(this,Di))}),i.set(e,r)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(m).forEach(s=>{e.removeEventListener(s,p(this,Di))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),p(this,y)&&Object.entries(p(this,y).getState()).forEach(([s,r])=>{xr([e],s,r)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",$e(this,Oi,rs))}disableHotkeys(){this.removeEventListener("keydown",$e(this,Oi,rs)),this.removeEventListener("keyup",p(this,et))}get hotkeys(){return p(this,Ce)}set hotkeys(e){x(this,c.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,s,r,o,d,u,I,T;const b=e.target;if(((s=(a=(i=b.getAttribute(c.KEYS_USED))==null?void 0:i.split(" "))!=null?a:b==null?void 0:b.keysUsed)!=null?s:[]).map(A=>A==="Space"?" ":A).filter(Boolean).includes(e.key))return;let h,g,v;if(!(p(this,Ce).contains(Ds(e.key))||e.shiftKey&&(e.key==="/"||e.key==="?")&&p(this,Ce).contains("noshift+/")))switch(e.key){case" ":case"k":h=p(this,y).getState().mediaPaused?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new l.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"m":h=this.mediaStore.getState().mediaVolumeLevel==="off"?m.MEDIA_UNMUTE_REQUEST:m.MEDIA_MUTE_REQUEST,this.dispatchEvent(new l.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"f":h=this.mediaStore.getState().mediaIsFullscreen?m.MEDIA_EXIT_FULLSCREEN_REQUEST:m.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new l.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new l.CustomEvent(m.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const A=this.hasAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET):Dr;g=Math.max(((r=this.mediaStore.getState().mediaCurrentTime)!=null?r:0)-A,0),v=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(v);break}case"ArrowRight":case"l":{const A=this.hasAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET):Dr;g=Math.max(((o=this.mediaStore.getState().mediaCurrentTime)!=null?o:0)+A,0),v=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(v);break}case"ArrowUp":{const A=this.hasAttribute(c.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(c.KEYBOARD_UP_VOLUME_STEP):Cr;g=Math.min(((d=this.mediaStore.getState().mediaVolume)!=null?d:1)+A,1),v=new l.CustomEvent(m.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(v);break}case"ArrowDown":{const A=this.hasAttribute(c.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(c.KEYBOARD_DOWN_VOLUME_STEP):Cr;g=Math.max(((u=this.mediaStore.getState().mediaVolume)!=null?u:1)-A,0),v=new l.CustomEvent(m.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(v);break}case"<":{const A=(I=this.mediaStore.getState().mediaPlaybackRate)!=null?I:1;g=Math.max(A-Or,xl).toFixed(2),v=new l.CustomEvent(m.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(v);break}case">":{const A=(T=this.mediaStore.getState().mediaPlaybackRate)!=null?T:1;g=Math.min(A+Or,Nl).toFixed(2),v=new l.CustomEvent(m.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(v);break}case"/":case"?":{e.shiftKey&&$e(this,ns,Fn).call(this);break}case"p":{h=this.mediaStore.getState().mediaIsPip?m.MEDIA_EXIT_PIP_REQUEST:m.MEDIA_ENTER_PIP_REQUEST,v=new l.CustomEvent(h,{composed:!0,bubbles:!0}),this.dispatchEvent(v);break}}}};Ce=new WeakMap;Gt=new WeakMap;y=new WeakMap;se=new WeakMap;qt=new WeakMap;fe=new WeakMap;Di=new WeakMap;Yt=new WeakMap;Ci=new WeakSet;ss=function(){var t;this.mediaStore=Ul({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(c.DEFAULT_DURATION)?+this.getAttribute(c.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(c.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(c.NO_SUBTITLES_LANG_PREF)}})};et=new WeakMap;Oi=new WeakSet;rs=function(t){var e;const{metaKey:i,altKey:a,key:s,shiftKey:r}=t,o=r&&(s==="/"||s==="?");if(o&&((e=p(this,se))!=null&&e.open)){this.removeEventListener("keyup",p(this,et));return}if(i||a||!o&&!Wn.includes(s)){this.removeEventListener("keyup",p(this,et));return}const d=t.target,u=d instanceof HTMLElement&&(d.tagName.toLowerCase()==="media-volume-range"||d.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(s)&&!p(this,Ce).contains(Ds(s))&&!u&&t.preventDefault(),this.addEventListener("keyup",p(this,et),{once:!0})};ai=new WeakSet;oa=function(){p(this,se)&&(p(this,se).hotkeys=p(this,Ce).value||void 0,(this.noHotkeys||p(this,Ce).contains("noshift+/"))&&(p(this,se).open=!1))};ns=new WeakSet;Fn=function(){p(this,se)||(ue(this,se,j.createElement("media-keyboard-shortcuts-dialog")),$e(this,ai,oa).call(this),this.appendChild(p(this,se))),p(this,se).open=!0};const $l=Object.values(n),Hl=Object.values(sn),Vn=t=>{var e,i,a,s;let{observedAttributes:r}=t.constructor;!r&&((e=t.nodeName)!=null&&e.includes("-"))&&(l.customElements.upgrade(t),{observedAttributes:r}=t.constructor);const o=(s=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,D.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:s.call(a,/\s+/);return Array.isArray(r||o)?(r||o).filter(d=>$l.includes(d)):[]},Fl=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&l.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof l.customElements.get(t.nodeName.toLowerCase()))&&l.customElements.upgrade(t),Hl.some(a=>a in t)},os=t=>Fl(t)||!!Vn(t).length,Pr=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},Ur={[n.MEDIA_SUBTITLES_LIST]:as,[n.MEDIA_SUBTITLES_SHOWING]:as,[n.MEDIA_SEEKABLE]:Pr,[n.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(Pr).join(" "),[n.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[n.MEDIA_RENDITION_LIST]:Ro,[n.MEDIA_AUDIO_TRACK_LIST]:Co},Wl=async(t,e,i)=>{var a,s;if(t.isConnected||await nn(0),typeof i=="boolean"||i==null)return M(t,e,i);if(typeof i=="number")return Y(t,e,i);if(typeof i=="string")return x(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const r=(s=(a=Ur[e])==null?void 0:a.call(Ur,i))!=null?s:i;return t.setAttribute(e,r)},Bl=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},Ze=(t,e)=>{if(Bl(t))return;const i=(s,r)=>{var o,d;os(s)&&r(s);const{children:u=[]}=s??{},I=(d=(o=s==null?void 0:s.shadowRoot)==null?void 0:o.children)!=null?d:[];[...u,...I].forEach(b=>Ze(b,r))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!os(t)){l.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},xr=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const s=Vn(a),r=e.toLowerCase();s.includes(r)&&Wl(a,r,i)})},Vl=(t,e,i)=>{Ze(t,e);const a=T=>{var b;const _=(b=T==null?void 0:T.composedPath()[0])!=null?b:T.target;e(_)},s=T=>{var b;const _=(b=T==null?void 0:T.composedPath()[0])!=null?b:T.target;i(_)};t.addEventListener(m.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(m.UNREGISTER_MEDIA_STATE_RECEIVER,s);const r=T=>{T.forEach(b=>{const{addedNodes:_=[],removedNodes:h=[],type:g,target:v,attributeName:S}=b;g==="childList"?(Array.prototype.forEach.call(_,A=>Ze(A,e)),Array.prototype.forEach.call(h,A=>Ze(A,i))):g==="attributes"&&S===D.MEDIA_CHROME_ATTRIBUTES&&(os(v)?e(v):i(v))})};let o=[];const d=T=>{const b=T.target;b.name!=="media"&&(o.forEach(_=>Ze(_,i)),o=[...b.assignedElements({flatten:!0})],o.forEach(_=>Ze(_,e)))};t.addEventListener("slotchange",d);const u=new MutationObserver(r);return u.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Ze(t,i),t.removeEventListener("slotchange",d),u.disconnect(),t.removeEventListener(m.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(m.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};l.customElements.get("media-controller")||l.customElements.define("media-controller",Bn);var Kl=Bn;const ot={PLACEMENT:"placement",BOUNDS:"bounds"};function Gl(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class Aa extends l.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!fn(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),s=(e=mi(this,"#"+this.bounds))!=null?e:Fo(this);if(!s)return;const{x:r,width:o}=s.getBoundingClientRect(),{x:d,width:u}=this.getBoundingClientRect(),I=d+u,T=r+o,b=a.getPropertyValue("--media-tooltip-offset-x"),_=b?parseFloat(b.replace("px","")):0,h=a.getPropertyValue("--media-tooltip-container-margin"),g=h?parseFloat(h.replace("px","")):0,v=d-r+_-g,S=I-T+_+g;if(v<0){this.style.setProperty("--media-tooltip-offset-x",`${v}px`);return}if(S>0){this.style.setProperty("--media-tooltip-offset-x",`${S}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[ot.PLACEMENT,ot.BOUNDS]}get placement(){return $(this,ot.PLACEMENT)}set placement(e){x(this,ot.PLACEMENT,e)}get bounds(){return $(this,ot.BOUNDS)}set bounds(e){x(this,ot.BOUNDS,e)}}Aa.shadowRootOptions={mode:"open"};Aa.getTemplateHTML=Gl;l.customElements.get("media-tooltip")||l.customElements.define("media-tooltip",Aa);var ls=Aa,xs=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},W=(t,e,i)=>(xs(t,e,"read from private field"),i?i.call(t):e.get(t)),Qe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gi=(t,e,i,a)=>(xs(t,e,"write to private field"),e.set(t,i),i),Nr=(t,e,i)=>(xs(t,e,"access private method"),i),ge,kt,ds,Kn,Ke,_t,Pi,us,Gn;const Ue={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function ql(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${ls.shadowRootOptions.mode}">
          ${ls.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Yl(t,e){return`
    <slot></slot>
  `}function Ql(){return""}class Q extends l.HTMLElement{constructor(){if(super(),Qe(this,ds),Qe(this,us),Qe(this,ge,void 0),this.preventClick=!1,this.tooltipEl=null,Qe(this,kt,e=>{this.preventClick||this.handleClick(e),setTimeout(W(this,Ke),0)}),Qe(this,Ke,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),Qe(this,_t,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",W(this,_t));return}this.preventClick||this.handleClick(e)}),Qe(this,Pi,e=>{const{metaKey:i,altKey:a,key:s}=e;if(i||a||!this.keysUsed.includes(s)){this.removeEventListener("keyup",W(this,_t));return}this.addEventListener("keyup",W(this,_t),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Ue.TOOLTIP_PLACEMENT,D.MEDIA_CONTROLLER,n.MEDIA_LANG]}enable(){this.addEventListener("click",W(this,kt)),this.addEventListener("keydown",W(this,Pi)),this.tabIndex=0}disable(){this.removeEventListener("click",W(this,kt)),this.removeEventListener("keydown",W(this,Pi)),this.removeEventListener("keyup",W(this,_t)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var s,r,o,d,u;e===D.MEDIA_CONTROLLER?(i&&((r=(s=W(this,ge))==null?void 0:s.unassociateElement)==null||r.call(s,this),gi(this,ge,null)),a&&this.isConnected&&(gi(this,ge,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=W(this,ge))==null?void 0:d.associateElement)==null||u.call(d,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Ue.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===n.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),Nr(this,ds,Kn).call(this)&&W(this,Ke).call(this)}connectedCallback(){var e,i,a;const{style:s}=V(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const r=this.getAttribute(D.MEDIA_CONTROLLER);r&&(gi(this,ge,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=W(this,ge))==null?void 0:i.associateElement)==null||a.call(i,this)),l.customElements.whenDefined("media-tooltip").then(()=>Nr(this,us,Gn).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=W(this,ge))==null?void 0:e.unassociateElement)==null||i.call(e,this),gi(this,ge,null),this.removeEventListener("mouseenter",W(this,Ke)),this.removeEventListener("focus",W(this,Ke)),this.removeEventListener("click",W(this,kt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return $(this,Ue.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){x(this,Ue.TOOLTIP_PLACEMENT,e)}get mediaController(){return $(this,D.MEDIA_CONTROLLER)}set mediaController(e){x(this,D.MEDIA_CONTROLLER,e)}get disabled(){return k(this,Ue.DISABLED)}set disabled(e){M(this,Ue.DISABLED,e)}get noTooltip(){return k(this,Ue.NO_TOOLTIP)}set noTooltip(e){M(this,Ue.NO_TOOLTIP,e)}handleClick(e){}}ge=new WeakMap;kt=new WeakMap;ds=new WeakSet;Kn=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}};Ke=new WeakMap;_t=new WeakMap;Pi=new WeakMap;us=new WeakSet;Gn=function(){this.addEventListener("mouseenter",W(this,Ke)),this.addEventListener("focus",W(this,Ke)),this.addEventListener("click",W(this,kt));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};Q.shadowRootOptions={mode:"open"};Q.getTemplateHTML=ql;Q.getSlotTemplateHTML=Yl;Q.getTooltipContentHTML=Ql;l.customElements.get("media-chrome-button")||l.customElements.define("media-chrome-button",Q);var zl=Q;const $r=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function Zl(t){return`
    <style>
      :host([${n.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${n.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${n.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${n.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${$r}</slot>
      <slot name="exit">${$r}</slot>
    </slot>
  `}function Xl(){return`
    <slot name="tooltip-enter">${E("start airplay")}</slot>
    <slot name="tooltip-exit">${E("stop airplay")}</slot>
  `}const Hr=t=>{const e=t.mediaIsAirplaying?E("stop airplay"):E("start airplay");t.setAttribute("aria-label",e)};class Ta extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_AIRPLAYING,n.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Hr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_IS_AIRPLAYING&&Hr(this)}get mediaIsAirplaying(){return k(this,n.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){M(this,n.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return $(this,n.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){x(this,n.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new l.CustomEvent(m.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}Ta.getSlotTemplateHTML=Zl;Ta.getTooltipContentHTML=Xl;l.customElements.get("media-airplay-button")||l.customElements.define("media-airplay-button",Ta);var Jl=Ta;const jl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ed=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function td(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${jl}</slot>
      <slot name="off">${ed}</slot>
    </slot>
  `}function id(){return`
    <slot name="tooltip-enable">${E("Enable captions")}</slot>
    <slot name="tooltip-disable">${E("Disable captions")}</slot>
  `}const Fr=t=>{t.setAttribute("aria-checked",ml(t).toString())};class Ia extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_SUBTITLES_LIST,n.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",E("closed captions")),Fr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_SUBTITLES_SHOWING&&Fr(this)}get mediaSubtitlesList(){return Wr(this,n.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Br(this,n.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Wr(this,n.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Br(this,n.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new l.CustomEvent(m.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Ia.getSlotTemplateHTML=td;Ia.getTooltipContentHTML=id;const Wr=(t,e)=>{const i=t.getAttribute(e);return i?On(i):[]},Br=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=as(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};l.customElements.get("media-captions-button")||l.customElements.define("media-captions-button",Ia);var ad=Ia;const sd='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',rd='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function nd(t){return`
    <style>
      :host([${n.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${n.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${n.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${n.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sd}</slot>
      <slot name="exit">${rd}</slot>
    </slot>
  `}function od(){return`
    <slot name="tooltip-enter">${E("Start casting")}</slot>
    <slot name="tooltip-exit">${E("Stop casting")}</slot>
  `}const Vr=t=>{const e=t.mediaIsCasting?E("stop casting"):E("start casting");t.setAttribute("aria-label",e)};class Sa extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_CASTING,n.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Vr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_IS_CASTING&&Vr(this)}get mediaIsCasting(){return k(this,n.MEDIA_IS_CASTING)}set mediaIsCasting(e){M(this,n.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return $(this,n.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){x(this,n.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?m.MEDIA_EXIT_CAST_REQUEST:m.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}Sa.getSlotTemplateHTML=nd;Sa.getTooltipContentHTML=od;l.customElements.get("media-cast-button")||l.customElements.define("media-cast-button",Sa);var ld=Sa,Ns=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},U=(t,e,i)=>(Ns(t,e,"read from private field"),i?i.call(t):e.get(t)),z=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},He=(t,e,i,a)=>(Ns(t,e,"write to private field"),e.set(t,i),i),ce=(t,e,i)=>(Ns(t,e,"access private method"),i),be,ya,Ui,xi,he,la,Ni,$i,Hi,$s,qn,Fi,cs,Wi,hs,da,Hs,ms,Yn,ps,Qn,Es,zn,vs,Zn;function dd(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function ud(t){return""}class at extends l.HTMLElement{constructor(){if(super(),z(this,$s),z(this,Fi),z(this,Wi),z(this,da),z(this,ms),z(this,ps),z(this,Es),z(this,vs),z(this,be,void 0),z(this,ya,void 0),z(this,Ui,void 0),z(this,xi,void 0),z(this,he,{}),z(this,la,[]),z(this,Ni,()=>{if(this.range.matches(":focus-visible")){const{style:e}=V(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),z(this,$i,()=>{const{style:e}=V(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),z(this,Hi,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),He(this,Ui,this.shadowRoot.querySelector("#startpoint")),He(this,xi,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",D.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var s,r,o,d,u;e===D.MEDIA_CONTROLLER?(i&&((r=(s=U(this,be))==null?void 0:s.unassociateElement)==null||r.call(s,this),He(this,be,null)),a&&this.isConnected&&(He(this,be,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=U(this,be))==null?void 0:d.associateElement)==null||u.call(d,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),ce(this,Fi,cs).call(this)):(this.range.setAttribute(e,a),ce(this,Wi,hs).call(this)))}connectedCallback(){var e,i,a;const{style:s}=V(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),U(this,he).pointer=V(this.shadowRoot,"#pointer"),U(this,he).progress=V(this.shadowRoot,"#progress"),U(this,he).thumb=V(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),U(this,he).activeSegment=V(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const r=this.getAttribute(D.MEDIA_CONTROLLER);r&&(He(this,be,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=U(this,be))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",U(this,Ni)),this.shadowRoot.addEventListener("focusout",U(this,$i)),ce(this,Fi,cs).call(this),mn(this.container,U(this,Hi))}disconnectedCallback(){var e,i;ce(this,Wi,hs).call(this),(i=(e=U(this,be))==null?void 0:e.unassociateElement)==null||i.call(e,this),He(this,be,null),this.shadowRoot.removeEventListener("focusin",U(this,Ni)),this.shadowRoot.removeEventListener("focusout",U(this,$i)),pn(this.container,U(this,Hi))}updatePointerBar(e){var i;(i=U(this,he).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=U(this,he).progress)==null||e.style.setProperty("width",`${a}%`),(i=U(this,he).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const a=[...new Set([+this.range.min,...e.flatMap(r=>[r.start,r.end]),+this.range.max])];He(this,la,[...a]);const s=a.pop();for(const[r,o]of a.entries()){const[d,u]=[r===0,r===a.length-1],I=d?"calc(var(--segments-gap) / -1)":`${o*100}%`,b=`calc(${((u?s:a[r+1])-o)*100}%${d||u?"":" - var(--segments-gap)"})`,_=j.createElementNS("http://www.w3.org/2000/svg","rect"),h=gn(this.shadowRoot,`#segments-clipping rect:nth-child(${r+1})`);h.style.setProperty("x",I),h.style.setProperty("width",b),i.append(_)}}getPointerRatio(e){return Ko(e.clientX,e.clientY,U(this,Ui).getBoundingClientRect(),U(this,xi).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":ce(this,vs,Zn).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":ce(this,ms,Yn).call(this,e);break;case"pointerdown":ce(this,da,Hs).call(this,e);break;case"pointerup":ce(this,ps,Qn).call(this);break;case"pointerleave":ce(this,Es,zn).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}be=new WeakMap;ya=new WeakMap;Ui=new WeakMap;xi=new WeakMap;he=new WeakMap;la=new WeakMap;Ni=new WeakMap;$i=new WeakMap;Hi=new WeakMap;$s=new WeakSet;qn=function(t){const e=U(this,he).activeSegment;if(!e)return;const i=this.getPointerRatio(t),s=`#segments-clipping rect:nth-child(${U(this,la).findIndex((r,o,d)=>{const u=d[o+1];return u!=null&&i>=r&&i<=u})+1})`;(e.selectorText!=s||!e.style.transform)&&(e.selectorText=s,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Fi=new WeakSet;cs=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Wi=new WeakSet;hs=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=l.window)==null||t.removeEventListener("pointerup",this),(e=l.window)==null||e.removeEventListener("pointermove",this)};da=new WeakSet;Hs=function(t){var e;He(this,ya,t.composedPath().includes(this.range)),(e=l.window)==null||e.addEventListener("pointerup",this,{once:!0})};ms=new WeakSet;Yn=function(t){var e;t.pointerType!=="mouse"&&ce(this,da,Hs).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=l.window)==null||e.addEventListener("pointermove",this)};ps=new WeakSet;Qn=function(){var t;(t=l.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Es=new WeakSet;zn=function(){var t,e;this.removeEventListener("pointerleave",this),(t=l.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=U(this,he).activeSegment)==null||e.style.removeProperty("transform")};vs=new WeakSet;Zn=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),ce(this,$s,qn).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!U(this,ya))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};at.shadowRootOptions={mode:"open"};at.getTemplateHTML=dd;at.getContainerTemplateHTML=ud;l.customElements.get("media-chrome-range")||l.customElements.define("media-chrome-range",at);var cd=at,Xn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},bi=(t,e,i)=>(Xn(t,e,"read from private field"),i?i.call(t):e.get(t)),hd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ai=(t,e,i,a)=>(Xn(t,e,"write to private field"),e.set(t,i),i),Ae;function md(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}let ka=class extends l.HTMLElement{constructor(){if(super(),hd(this,Ae,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[D.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var s,r,o,d,u;e===D.MEDIA_CONTROLLER&&(i&&((r=(s=bi(this,Ae))==null?void 0:s.unassociateElement)==null||r.call(s,this),Ai(this,Ae,null)),a&&this.isConnected&&(Ai(this,Ae,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=bi(this,Ae))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const s=this.getAttribute(D.MEDIA_CONTROLLER);s&&(Ai(this,Ae,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=bi(this,Ae))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=bi(this,Ae))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ai(this,Ae,null)}};Ae=new WeakMap;ka.shadowRootOptions={mode:"open"};ka.getTemplateHTML=md;l.customElements.get("media-control-bar")||l.customElements.define("media-control-bar",ka);var pd=ka,Jn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ti=(t,e,i)=>(Jn(t,e,"read from private field"),i?i.call(t):e.get(t)),Ed=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ii=(t,e,i,a)=>(Jn(t,e,"write to private field"),e.set(t,i),i),Te;function vd(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function _d(t,e){return`
    <slot></slot>
  `}class Oe extends l.HTMLElement{constructor(){if(super(),Ed(this,Te,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[D.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var s,r,o,d,u;e===D.MEDIA_CONTROLLER&&(i&&((r=(s=Ti(this,Te))==null?void 0:s.unassociateElement)==null||r.call(s,this),Ii(this,Te,null)),a&&this.isConnected&&(Ii(this,Te,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=Ti(this,Te))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const{style:s}=V(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const r=this.getAttribute(D.MEDIA_CONTROLLER);r&&(Ii(this,Te,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Ti(this,Te))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ti(this,Te))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ii(this,Te,null)}}Te=new WeakMap;Oe.shadowRootOptions={mode:"open"};Oe.getTemplateHTML=vd;Oe.getSlotTemplateHTML=_d;l.customElements.get("media-text-display")||l.customElements.define("media-text-display",Oe);var fd=Oe,jn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Kr=(t,e,i)=>(jn(t,e,"read from private field"),i?i.call(t):e.get(t)),gd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},bd=(t,e,i,a)=>(jn(t,e,"write to private field"),e.set(t,i),i),Qt;function Ad(t,e){return`
    <slot>${Ge(e.mediaDuration)}</slot>
  `}class Fs extends Oe{constructor(){var e;super(),gd(this,Qt,void 0),bd(this,Qt,this.shadowRoot.querySelector("slot")),Kr(this,Qt).textContent=Ge((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===n.MEDIA_DURATION&&(Kr(this,Qt).textContent=Ge(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return N(this,n.MEDIA_DURATION)}set mediaDuration(e){Y(this,n.MEDIA_DURATION,e)}}Qt=new WeakMap;Fs.getSlotTemplateHTML=Ad;l.customElements.get("media-duration-display")||l.customElements.define("media-duration-display",Fs);var Td=Fs;const Id={2:E("Network Error"),3:E("Decode Error"),4:E("Source Not Supported"),5:E("Encryption Error")},Sd={2:E("A network error caused the media download to fail."),3:E("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:E("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:E("The media is encrypted and there are no keys to decrypt it.")},Ws=t=>{var e,i;return t.code===1?null:{title:(e=Id[t.code])!=null?e:`Error ${t.code}`,message:(i=Sd[t.code])!=null?i:t.message}};var eo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},yd=(t,e,i)=>(eo(t,e,"read from private field"),i?i.call(t):e.get(t)),kd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Md=(t,e,i,a)=>(eo(t,e,"write to private field"),e.set(t,i),i),Bi;function Ld(t){const e=+t.mediaerrorcode;return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e}" id="content">
      ${to({code:e,message:t.mediaerrormessage})}
    </slot>
  `}function wd(t){return t.code&&Ws(t)!==null}function to(t){var e;const{title:i,message:a}=(e=Ws(t))!=null?e:{},s=Va(t.code);let r="";return i&&(r+=`<slot name="error-${s}-title"><h3>${Va(i)}</h3></slot>`),a&&(r+=`<slot name="error-${s}-message"><p>${Va(a)}</p></slot>`),r}const Gr=[n.MEDIA_ERROR_CODE,n.MEDIA_ERROR_MESSAGE];class Ma extends it{constructor(){super(...arguments),kd(this,Bi,null)}static get observedAttributes(){return[...super.observedAttributes,...Gr]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var s;if(super.attributeChangedCallback(e,i,a),!Gr.includes(e))return;const r=(s=this.mediaError)!=null?s:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=wd(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){const{title:o}=Ws(r);o&&this.setAttribute("aria-label",o)}}get mediaError(){return yd(this,Bi)}set mediaError(e){Md(this,Bi,e)}get mediaErrorCode(){return N(this,"mediaerrorcode")}set mediaErrorCode(e){Y(this,"mediaerrorcode",e)}get mediaErrorMessage(){return $(this,"mediaerrormessage")}set mediaErrorMessage(e){x(this,"mediaerrormessage",e)}}Bi=new WeakMap;Ma.getSlotTemplateHTML=Ld;Ma.formatErrorMessage=to;l.customElements.get("media-error-dialog")||l.customElements.define("media-error-dialog",Ma);var Rd=Ma,io=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Dd=(t,e,i)=>(io(t,e,"read from private field"),e.get(t)),Cd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Od=(t,e,i,a)=>(io(t,e,"write to private field"),e.set(t,i),i),Vi;const Pd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Ud=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function xd(t){return`
    <style>
      :host([${n.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${n.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${n.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${n.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Pd}</slot>
      <slot name="exit">${Ud}</slot>
    </slot>
  `}function Nd(){return`
    <slot name="tooltip-enter">${E("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${E("Exit fullscreen mode")}</slot>
  `}const qr=t=>{const e=t.mediaIsFullscreen?E("exit fullscreen mode"):E("enter fullscreen mode");t.setAttribute("aria-label",e)};class La extends Q{constructor(){super(...arguments),Cd(this,Vi,null)}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_FULLSCREEN,n.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),qr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_IS_FULLSCREEN&&qr(this)}get mediaFullscreenUnavailable(){return $(this,n.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){x(this,n.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return k(this,n.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){M(this,n.MEDIA_IS_FULLSCREEN,e)}handleClick(e){Od(this,Vi,e);const i=Dd(this,Vi)instanceof PointerEvent,a=this.mediaIsFullscreen?new l.CustomEvent(m.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new l.CustomEvent(m.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}Vi=new WeakMap;La.getSlotTemplateHTML=xd;La.getTooltipContentHTML=Nd;l.customElements.get("media-fullscreen-button")||l.customElements.define("media-fullscreen-button",La);var $d=La;const{MEDIA_TIME_IS_LIVE:Ki,MEDIA_PAUSED:si}=n,{MEDIA_SEEK_TO_LIVE_REQUEST:Hd,MEDIA_PLAY_REQUEST:Fd}=m,Wd='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function Bd(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Ki}]:not([${si}])) slot[name=indicator] > *,
      :host([${Ki}]:not([${si}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Ki}]:not([${si}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Wd}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${E("live")}</slot>
  `}const Yr=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=E(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const s=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');s&&(s.textContent=E("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Bs extends Q{static get observedAttributes(){return[...super.observedAttributes,Ki,si]}connectedCallback(){super.connectedCallback(),Yr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Yr(this)}get mediaPaused(){return k(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return k(this,n.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){M(this,n.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new l.CustomEvent(Hd,{composed:!0,bubbles:!0})),this.hasAttribute(si)&&this.dispatchEvent(new l.CustomEvent(Fd,{composed:!0,bubbles:!0})))}}Bs.getSlotTemplateHTML=Bd;l.customElements.get("media-live-button")||l.customElements.define("media-live-button",Bs);var Vd=Bs,ao=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ht=(t,e,i)=>(ao(t,e,"read from private field"),i?i.call(t):e.get(t)),Qr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ft=(t,e,i,a)=>(ao(t,e,"write to private field"),e.set(t,i),i),Ie,Gi;const Si={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},so=500,Kd=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Gd(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${so}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${n.MEDIA_LOADING}]:not([${n.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${n.MEDIA_LOADING}]:not([${n.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${n.MEDIA_LOADING}]:not([${n.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Kd}</slot>
    <div id="status" role="status" aria-live="polite">${E("media loading")}</div>
  `}class wa extends l.HTMLElement{constructor(){if(super(),Qr(this,Ie,void 0),Qr(this,Gi,so),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[D.MEDIA_CONTROLLER,n.MEDIA_PAUSED,n.MEDIA_LOADING,Si.LOADING_DELAY]}attributeChangedCallback(e,i,a){var s,r,o,d,u;e===Si.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===D.MEDIA_CONTROLLER&&(i&&((r=(s=Ht(this,Ie))==null?void 0:s.unassociateElement)==null||r.call(s,this),Ft(this,Ie,null)),a&&this.isConnected&&(Ft(this,Ie,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=Ht(this,Ie))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const s=this.getAttribute(D.MEDIA_CONTROLLER);s&&(Ft(this,Ie,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=Ht(this,Ie))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ht(this,Ie))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ft(this,Ie,null)}get loadingDelay(){return Ht(this,Gi)}set loadingDelay(e){Ft(this,Gi,e);const{style:i}=V(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return k(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}get mediaLoading(){return k(this,n.MEDIA_LOADING)}set mediaLoading(e){M(this,n.MEDIA_LOADING,e)}get mediaController(){return $(this,D.MEDIA_CONTROLLER)}set mediaController(e){x(this,D.MEDIA_CONTROLLER,e)}get noAutohide(){return k(this,Si.NO_AUTOHIDE)}set noAutohide(e){M(this,Si.NO_AUTOHIDE,e)}}Ie=new WeakMap;Gi=new WeakMap;wa.shadowRootOptions={mode:"open"};wa.getTemplateHTML=Gd;l.customElements.get("media-loading-indicator")||l.customElements.define("media-loading-indicator",wa);var qd=wa;const Yd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,zr=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Qd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function zd(t){return`
    <style>
      :host(:not([${n.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${n.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${n.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${n.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${n.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${n.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${n.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Yd}</slot>
      <slot name="low">${zr}</slot>
      <slot name="medium">${zr}</slot>
      <slot name="high">${Qd}</slot>
    </slot>
  `}function Zd(){return`
    <slot name="tooltip-mute">${E("Mute")}</slot>
    <slot name="tooltip-unmute">${E("Unmute")}</slot>
  `}const Zr=t=>{const e=t.mediaVolumeLevel==="off",i=E(e?"unmute":"mute");t.setAttribute("aria-label",i)};let Ra=class extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Zr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_VOLUME_LEVEL&&Zr(this)}get mediaVolumeLevel(){return $(this,n.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){x(this,n.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?m.MEDIA_UNMUTE_REQUEST:m.MEDIA_MUTE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};Ra.getSlotTemplateHTML=zd;Ra.getTooltipContentHTML=Zd;l.customElements.get("media-mute-button")||l.customElements.define("media-mute-button",Ra);var Xd=Ra;const Xr=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Jd(t){return`
    <style>
      :host([${n.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${n.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${n.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${n.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Xr}</slot>
      <slot name="exit">${Xr}</slot>
    </slot>
  `}function jd(){return`
    <slot name="tooltip-enter">${E("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${E("Exit picture in picture mode")}</slot>
  `}const Jr=t=>{const e=t.mediaIsPip?E("exit picture in picture mode"):E("enter picture in picture mode");t.setAttribute("aria-label",e)};class Da extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_PIP,n.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Jr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_IS_PIP&&Jr(this)}get mediaPipUnavailable(){return $(this,n.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){x(this,n.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return k(this,n.MEDIA_IS_PIP)}set mediaIsPip(e){M(this,n.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?m.MEDIA_EXIT_PIP_REQUEST:m.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}Da.getSlotTemplateHTML=Jd;Da.getTooltipContentHTML=jd;l.customElements.get("media-pip-button")||l.customElements.define("media-pip-button",Da);var eu=Da,tu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},lt=(t,e,i)=>(tu(t,e,"read from private field"),i?i.call(t):e.get(t)),iu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Fe;const Ka={RATES:"rates"},au=[1,1.2,1.5,1.7,2],zt=1;function _s(t){return Math.round(t*100)/100}function su(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?_s(+t.mediaplaybackrate):zt}x</slot>
  `}function ru(){return E("Playback rate")}class Ca extends Q{constructor(){var e;super(),iu(this,Fe,new Dn(this,Ka.RATES,{defaultValue:au})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${_s((e=this.mediaPlaybackRate)!=null?e:zt)}x`}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PLAYBACK_RATE,Ka.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Ka.RATES&&(lt(this,Fe).value=a),e===n.MEDIA_PLAYBACK_RATE){const s=a?+a:Number.NaN,r=_s(Number.isNaN(s)?zt:s);this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",E("Playback rate {playbackRate}",{playbackRate:r}))}}get rates(){return lt(this,Fe)}set rates(e){e?Array.isArray(e)?lt(this,Fe).value=e.join(" "):typeof e=="string"&&(lt(this,Fe).value=e):lt(this,Fe).value=""}get mediaPlaybackRate(){return N(this,n.MEDIA_PLAYBACK_RATE,zt)}set mediaPlaybackRate(e){Y(this,n.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(lt(this,Fe).values(),o=>+o).sort((o,d)=>o-d),s=(i=(e=a.find(o=>o>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:zt,r=new l.CustomEvent(m.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(r)}}Fe=new WeakMap;Ca.getSlotTemplateHTML=su;Ca.getTooltipContentHTML=ru;l.customElements.get("media-playback-rate-button")||l.customElements.define("media-playback-rate-button",Ca);var nu=Ca;const ou=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,lu=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function du(t){return`
    <style>
      :host([${n.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${n.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${n.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${n.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ou}</slot>
      <slot name="pause">${lu}</slot>
    </slot>
  `}function uu(){return`
    <slot name="tooltip-play">${E("Play")}</slot>
    <slot name="tooltip-pause">${E("Pause")}</slot>
  `}const jr=t=>{const e=t.mediaPaused?E("play"):E("pause");t.setAttribute("aria-label",e)};let Oa=class extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PAUSED,n.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),jr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===n.MEDIA_PAUSED||e===n.MEDIA_LANG)&&jr(this)}get mediaPaused(){return k(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};Oa.getSlotTemplateHTML=du;Oa.getTooltipContentHTML=uu;l.customElements.get("media-play-button")||l.customElements.define("media-play-button",Oa);var cu=Oa;const ve={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function hu(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const mu=t=>{t.style.removeProperty("background-image")},pu=(t,e)=>{t.style["background-image"]=`url('${e}')`};class Pa extends l.HTMLElement{static get observedAttributes(){return[ve.PLACEHOLDER_SRC,ve.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===ve.SRC&&(a==null?this.image.removeAttribute(ve.SRC):this.image.setAttribute(ve.SRC,a)),e===ve.PLACEHOLDER_SRC&&(a==null?mu(this.image):pu(this.image,a))}get placeholderSrc(){return $(this,ve.PLACEHOLDER_SRC)}set placeholderSrc(e){x(this,ve.SRC,e)}get src(){return $(this,ve.SRC)}set src(e){x(this,ve.SRC,e)}}Pa.shadowRootOptions={mode:"open"};Pa.getTemplateHTML=hu;l.customElements.get("media-poster-image")||l.customElements.define("media-poster-image",Pa);var Eu=Pa,ro=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},vu=(t,e,i)=>(ro(t,e,"read from private field"),i?i.call(t):e.get(t)),_u=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},fu=(t,e,i,a)=>(ro(t,e,"write to private field"),e.set(t,i),i),qi;class no extends Oe{constructor(){super(),_u(this,qi,void 0),fu(this,qi,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PREVIEW_CHAPTER,n.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===n.MEDIA_PREVIEW_CHAPTER||e===n.MEDIA_LANG)&&a!==i&&a!=null)if(vu(this,qi).textContent=a,a!==""){const s=E("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",s)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return $(this,n.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){x(this,n.MEDIA_PREVIEW_CHAPTER,e)}}qi=new WeakMap;l.customElements.get("media-preview-chapter-display")||l.customElements.define("media-preview-chapter-display",no);var gu=no,oo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},yi=(t,e,i)=>(oo(t,e,"read from private field"),i?i.call(t):e.get(t)),bu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ki=(t,e,i,a)=>(oo(t,e,"write to private field"),e.set(t,i),i),Se;function Au(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class Ua extends l.HTMLElement{constructor(){if(super(),bu(this,Se,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[D.MEDIA_CONTROLLER,n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const s=this.getAttribute(D.MEDIA_CONTROLLER);s&&(ki(this,Se,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=yi(this,Se))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=yi(this,Se))==null?void 0:e.unassociateElement)==null||i.call(e,this),ki(this,Se,null)}attributeChangedCallback(e,i,a){var s,r,o,d,u;[n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===D.MEDIA_CONTROLLER&&(i&&((r=(s=yi(this,Se))==null?void 0:s.unassociateElement)==null||r.call(s,this),ki(this,Se,null)),a&&this.isConnected&&(ki(this,Se,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=yi(this,Se))==null?void 0:d.associateElement)==null||u.call(d,this)))}get mediaPreviewImage(){return $(this,n.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){x(this,n.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(n.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(n.MEDIA_PREVIEW_COORDS);return}this.setAttribute(n.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,s,r,o]=e,d=i.split("#")[0],u=getComputedStyle(this),{maxWidth:I,maxHeight:T,minWidth:b,minHeight:_}=u,h=u.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let g,v;if(h==="fill"){const Le=parseInt(I)/r,we=parseInt(T)/o,Ut=parseInt(b)/r,qe=parseInt(_)/o;g=Le<1?Le:Math.max(Le,Ut),v=we<1?we:Math.max(we,qe)}else{const Le=Math.min(parseInt(I)/r,parseInt(T)/o),we=Math.max(parseInt(b)/r,parseInt(_)/o),qe=Le<1?Le:we>1?we:1;g=qe,v=qe}const{style:S}=V(this.shadowRoot,":host"),A=V(this.shadowRoot,"img").style,X=this.shadowRoot.querySelector("img"),Pt=Math.min(g,v)<1?"min":"max";S.setProperty(`${Pt}-width`,"initial","important"),S.setProperty(`${Pt}-height`,"initial","important"),S.width=`${r*g}px`,S.height=`${o*v}px`;const st=()=>{A.width=`${this.imgWidth*g}px`,A.height=`${this.imgHeight*v}px`,A.display="block"};X.src!==d&&(X.onload=()=>{this.imgWidth=X.naturalWidth,this.imgHeight=X.naturalHeight,st(),X.onload=null},X.src=d,st()),st(),A.transform=`translate(-${a*g}px, -${s*v}px)`}}Se=new WeakMap;Ua.shadowRootOptions={mode:"open"};Ua.getTemplateHTML=Au;l.customElements.get("media-preview-thumbnail")||l.customElements.define("media-preview-thumbnail",Ua);var fs=Ua,lo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},en=(t,e,i)=>(lo(t,e,"read from private field"),i?i.call(t):e.get(t)),Tu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Iu=(t,e,i,a)=>(lo(t,e,"write to private field"),e.set(t,i),i),Zt;class uo extends Oe{constructor(){super(),Tu(this,Zt,void 0),Iu(this,Zt,this.shadowRoot.querySelector("slot")),en(this,Zt).textContent=Ge(0)}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_PREVIEW_TIME&&a!=null&&(en(this,Zt).textContent=Ge(parseFloat(a)))}get mediaPreviewTime(){return N(this,n.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){Y(this,n.MEDIA_PREVIEW_TIME,e)}}Zt=new WeakMap;l.customElements.get("media-preview-time-display")||l.customElements.define("media-preview-time-display",uo);var Su=uo;const dt={SEEK_OFFSET:"seekoffset"},Ga=30,yu=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function ku(t,e){return`
    <slot name="icon">${yu(e.seekOffset)}</slot>
  `}const Mu=(t,e)=>{t.setAttribute("aria-label",E("seek back {seekOffset} seconds",{seekOffset:e}))};function Lu(){return E("Seek backward")}const wu=0;class xa extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME,dt.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=N(this,dt.SEEK_OFFSET,Ga)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Mu(this,this.seekOffset),e===dt.SEEK_OFFSET&&(this.seekOffset=N(this,dt.SEEK_OFFSET,Ga))}get seekOffset(){return N(this,dt.SEEK_OFFSET,Ga)}set seekOffset(e){Y(this,dt.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),En(vn(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return N(this,n.MEDIA_CURRENT_TIME,wu)}set mediaCurrentTime(e){Y(this,n.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}xa.getSlotTemplateHTML=ku;xa.getTooltipContentHTML=Lu;l.customElements.get("media-seek-backward-button")||l.customElements.define("media-seek-backward-button",xa);var Ru=xa;const ut={SEEK_OFFSET:"seekoffset"},qa=30,Du=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function Cu(t,e){return`
    <slot name="icon">${Du(e.seekOffset)}</slot>
  `}const Ou=(t,e)=>{t.setAttribute("aria-label",E("seek forward {seekOffset} seconds",{seekOffset:e}))};function Pu(){return E("Seek forward")}const Uu=0;class Na extends Q{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME,ut.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=N(this,ut.SEEK_OFFSET,qa)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Ou(this,this.seekOffset),e===ut.SEEK_OFFSET&&(this.seekOffset=N(this,ut.SEEK_OFFSET,qa))}get seekOffset(){return N(this,ut.SEEK_OFFSET,qa)}set seekOffset(e){Y(this,ut.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),En(vn(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return N(this,n.MEDIA_CURRENT_TIME,Uu)}set mediaCurrentTime(e){Y(this,n.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Na.getSlotTemplateHTML=Cu;Na.getTooltipContentHTML=Pu;l.customElements.get("media-seek-forward-button")||l.customElements.define("media-seek-forward-button",Na);var xu=Na,Vs=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},me=(t,e,i)=>(Vs(t,e,"read from private field"),i?i.call(t):e.get(t)),ze=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ks=(t,e,i,a)=>(Vs(t,e,"write to private field"),e.set(t,i),i),Be=(t,e,i)=>(Vs(t,e,"access private method"),i),ft,Me,$a,Gs,co,ua,qs,Xt,Yi,Qi,gs;const We={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},tn=[...Object.values(We),n.MEDIA_CURRENT_TIME,n.MEDIA_DURATION,n.MEDIA_SEEKABLE],ho=["Enter"," "],Nu="&nbsp;/&nbsp;",bs=(t,{timesSep:e=Nu}={})=>{var i,a;const s=(i=t.mediaCurrentTime)!=null?i:0,[,r]=(a=t.mediaSeekable)!=null?a:[];let o=0;Number.isFinite(t.mediaDuration)?o=t.mediaDuration:Number.isFinite(r)&&(o=r);const d=t.remaining?Ge(0-(o-s)):Ge(s);return t.showDuration?`${d}${e}${Ge(o)}`:d},$u=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let s=null;if(Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(a)&&(s=a),i==null||s===null){t.setAttribute("aria-description",E("video not loaded, unknown time."));return}const r=t.remaining?ti(0-(s-i)):ti(i);if(!t.showDuration){t.setAttribute("aria-description",r);return}const o=ti(s),d=E("{currentTime} of {totalTime}",{currentTime:r,totalTime:o});t.setAttribute("aria-description",d)};function Hu(t,e){return`
    <slot>${bs(e)}</slot>
  `}const Fu=t=>{t.setAttribute("aria-label",E("playback time"))};let Ys=class extends Oe{constructor(){super(),ze(this,Gs),ze(this,ua),ze(this,Xt),ze(this,Qi),ze(this,ft,void 0),ze(this,Me,null),ze(this,$a,e=>{const{metaKey:i,altKey:a,key:s}=e;if(i||a||!ho.includes(s)){this.removeEventListener("keyup",me(this,Me));return}this.addEventListener("keyup",me(this,Me))}),Ks(this,ft,this.shadowRoot.querySelector("slot")),me(this,ft).innerHTML=`${bs(this)}`}static get observedAttributes(){return[...super.observedAttributes,...tn,"disabled"]}connectedCallback(){const{style:e}=V(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",E("playback time")),Be(this,Xt,Yi).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Be(this,ua,qs).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){Fu(this),tn.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Be(this,Xt,Yi).call(this):Be(this,Qi,gs).call(this):e===We.NO_TOGGLE&&a!==i&&(this.noToggle?Be(this,Qi,gs).call(this):Be(this,Xt,Yi).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return k(this,We.REMAINING)}set remaining(e){M(this,We.REMAINING,e)}get showDuration(){return k(this,We.SHOW_DURATION)}set showDuration(e){M(this,We.SHOW_DURATION,e)}get noToggle(){return k(this,We.NO_TOGGLE)}set noToggle(e){M(this,We.NO_TOGGLE,e)}get mediaDuration(){return N(this,n.MEDIA_DURATION)}set mediaDuration(e){Y(this,n.MEDIA_DURATION,e)}get mediaCurrentTime(){return N(this,n.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){Y(this,n.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(n.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(n.MEDIA_SEEKABLE);return}this.setAttribute(n.MEDIA_SEEKABLE,e.join(":"))}update(){const e=bs(this);$u(this),e!==me(this,ft).innerHTML&&(me(this,ft).innerHTML=e)}};ft=new WeakMap;Me=new WeakMap;$a=new WeakMap;Gs=new WeakSet;co=function(){me(this,Me)||(Ks(this,Me,t=>{const{key:e}=t;if(!ho.includes(e)){this.removeEventListener("keyup",me(this,Me));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",me(this,$a)),this.addEventListener("click",this.toggleTimeDisplay))};ua=new WeakSet;qs=function(){me(this,Me)&&(this.removeEventListener("keyup",me(this,Me)),this.removeEventListener("keydown",me(this,$a)),this.removeEventListener("click",this.toggleTimeDisplay),Ks(this,Me,null))};Xt=new WeakSet;Yi=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Be(this,Gs,co).call(this))};Qi=new WeakSet;gs=function(){this.removeAttribute("role"),this.disable(),Be(this,ua,qs).call(this)};Ys.getSlotTemplateHTML=Hu;l.customElements.get("media-time-display")||l.customElements.define("media-time-display",Ys);var Wu=Ys,mo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},G=(t,e,i)=>(mo(t,e,"read from private field"),e.get(t)),_e=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ae=(t,e,i,a)=>(mo(t,e,"write to private field"),e.set(t,i),i),Bu=(t,e,i,a)=>({set _(s){ae(t,e,s)},get _(){return G(t,e)}}),gt,zi,bt,Jt,Zi,Xi,Ji,At,Xe,ji;class Vu{constructor(e,i,a){_e(this,gt,void 0),_e(this,zi,void 0),_e(this,bt,void 0),_e(this,Jt,void 0),_e(this,Zi,void 0),_e(this,Xi,void 0),_e(this,Ji,void 0),_e(this,At,void 0),_e(this,Xe,0),_e(this,ji,(s=performance.now())=>{ae(this,Xe,requestAnimationFrame(G(this,ji))),ae(this,Jt,performance.now()-G(this,bt));const r=1e3/this.fps;if(G(this,Jt)>r){ae(this,bt,s-G(this,Jt)%r);const o=1e3/((s-G(this,zi))/++Bu(this,Zi)._),d=(s-G(this,Xi))/1e3/this.duration;let u=G(this,Ji)+d*this.playbackRate;u-G(this,gt).valueAsNumber>0?ae(this,At,this.playbackRate/this.duration/o):(ae(this,At,.995*G(this,At)),u=G(this,gt).valueAsNumber+G(this,At)),this.callback(u)}}),ae(this,gt,e),this.callback=i,this.fps=a}start(){G(this,Xe)===0&&(ae(this,bt,performance.now()),ae(this,zi,G(this,bt)),ae(this,Zi,0),G(this,ji).call(this))}stop(){G(this,Xe)!==0&&(cancelAnimationFrame(G(this,Xe)),ae(this,Xe,0))}update({start:e,duration:i,playbackRate:a}){const s=e-G(this,gt).valueAsNumber,r=Math.abs(i-this.duration);(s>0||s<-.5/i||r>=.5)&&this.callback(e),ae(this,Ji,e),ae(this,Xi,performance.now()),this.duration=i,this.playbackRate=a}}gt=new WeakMap;zi=new WeakMap;bt=new WeakMap;Jt=new WeakMap;Zi=new WeakMap;Xi=new WeakMap;Ji=new WeakMap;At=new WeakMap;Xe=new WeakMap;ji=new WeakMap;var Qs=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},O=(t,e,i)=>(Qs(t,e,"read from private field"),i?i.call(t):e.get(t)),B=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},re=(t,e,i,a)=>(Qs(t,e,"write to private field"),e.set(t,i),i),ne=(t,e,i)=>(Qs(t,e,"access private method"),i),Tt,Ve,ca,ri,ha,ea,ui,ci,It,St,jt,As,po,Ts,ma,zs,pa,Zs,Ea,Xs,Is,Eo,hi,va,Ss,vo;const Ku=t=>{const e=t.range,i=ti(+_o(t)),a=ti(+t.mediaSeekableEnd),s=i&&a?E("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):E("video not loaded, unknown time.");e.setAttribute("aria-valuetext",s)};function Gu(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${n.MEDIA_PREVIEW_IMAGE}], [${n.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${n.MEDIA_PREVIEW_IMAGE}], [${n.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${n.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${n.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${n.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${n.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${n.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${n.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${n.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${n.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${n.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${n.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${fs.shadowRootOptions.mode}">
            ${fs.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const Mi=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const s=(e-i)/(a-i);return Math.max(0,Math.min(s,1))},_o=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};let Ha=class extends at{constructor(){super(),B(this,As),B(this,ma),B(this,pa),B(this,Ea),B(this,Is),B(this,hi),B(this,Ss),B(this,Tt,null),B(this,Ve,void 0),B(this,ca,void 0),B(this,ri,void 0),B(this,ha,void 0),B(this,ea,void 0),B(this,ui,void 0),B(this,ci,void 0),B(this,It,void 0),B(this,St,void 0),B(this,jt,()=>{ne(this,As,po).call(this)?O(this,Ve).start():O(this,Ve).stop()}),B(this,Ts,a=>{this.dragging||(ys(a)&&(this.range.valueAsNumber=a),O(this,St)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),re(this,ca,this.shadowRoot.querySelectorAll('[part~="box"]')),re(this,ha,this.shadowRoot.querySelector('[part~="preview-box"]')),re(this,ea,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);re(this,ui,parseInt(i.getPropertyValue("--media-box-padding-left"))),re(this,ci,parseInt(i.getPropertyValue("--media-box-padding-right"))),re(this,Ve,new Vu(this.range,O(this,Ts),60))}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PAUSED,n.MEDIA_DURATION,n.MEDIA_SEEKABLE,n.MEDIA_CURRENT_TIME,n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_TIME,n.MEDIA_PREVIEW_CHAPTER,n.MEDIA_BUFFERED,n.MEDIA_PLAYBACK_RATE,n.MEDIA_LOADING,n.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",E("seek")),O(this,jt).call(this),re(this,Tt,this.getRootNode()),(e=O(this,Tt))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),O(this,Ve).stop(),(e=O(this,Tt))==null||e.removeEventListener("transitionstart",this),re(this,Tt,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===n.MEDIA_CURRENT_TIME||e===n.MEDIA_PAUSED||e===n.MEDIA_ENDED||e===n.MEDIA_LOADING||e===n.MEDIA_DURATION||e===n.MEDIA_SEEKABLE?(O(this,Ve).update({start:Mi(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),O(this,jt).call(this),Ku(this)):e===n.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===n.MEDIA_DURATION||e===n.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=O(this,It),this.updateBar()))}get mediaChaptersCues(){return O(this,It)}set mediaChaptersCues(e){var i;re(this,It,e),this.updateSegments((i=O(this,It))==null?void 0:i.map(a=>({start:Mi(this,a.startTime),end:Mi(this,a.endTime)})))}get mediaPaused(){return k(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}get mediaLoading(){return k(this,n.MEDIA_LOADING)}set mediaLoading(e){M(this,n.MEDIA_LOADING,e)}get mediaDuration(){return N(this,n.MEDIA_DURATION)}set mediaDuration(e){Y(this,n.MEDIA_DURATION,e)}get mediaCurrentTime(){return N(this,n.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){Y(this,n.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return N(this,n.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){Y(this,n.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(n.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(n.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(n.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(n.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(n.MEDIA_SEEKABLE);return}this.setAttribute(n.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return $(this,n.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){x(this,n.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return N(this,n.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){Y(this,n.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return k(this,n.MEDIA_ENDED)}set mediaEnded(e){M(this,n.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const r=this.mediaCurrentTime,[,o=this.mediaSeekableStart]=(e=i.find(([d,u])=>d<=r&&r<=u))!=null?e:[];a=Mi(this,o)}const{style:s}=V(this.shadowRoot,"#buffered");s.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=V(this.shadowRoot,"#current-rail"),a=V(this.shadowRoot,'[part~="current-box"]'),s=ne(this,ma,zs).call(this,O(this,ea)),r=ne(this,pa,Zs).call(this,s,this.range.valueAsNumber),o=ne(this,Ea,Xs).call(this,s,this.range.valueAsNumber);i.style.transform=`translateX(${r})`,i.style.setProperty("--_range-width",`${s.range.width}`),a.style.setProperty("--_box-shift",`${o}`),a.style.setProperty("--_box-width",`${s.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":ne(this,Ss,vo).call(this);break;case"pointermove":ne(this,Is,Eo).call(this,e);break;case"pointerup":O(this,St)&&re(this,St,!1);break;case"pointerdown":re(this,St,!0);break;case"pointerleave":ne(this,hi,va).call(this,null);break;case"transitionstart":Ct(e.target,this)&&setTimeout(()=>O(this,jt).call(this),0);break}}};Tt=new WeakMap;Ve=new WeakMap;ca=new WeakMap;ri=new WeakMap;ha=new WeakMap;ea=new WeakMap;ui=new WeakMap;ci=new WeakMap;It=new WeakMap;St=new WeakMap;jt=new WeakMap;As=new WeakSet;po=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&fn(this)};Ts=new WeakMap;ma=new WeakSet;zs=function(t){var e;const a=((e=this.getAttribute("bounds")?mi(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),s=this.range.getBoundingClientRect(),r=t.offsetWidth,o=-(s.left-a.left-r/2),d=a.right-s.left-r/2;return{box:{width:r,min:o,max:d},bounds:a,range:s}};pa=new WeakSet;Zs=function(t,e){let i=`${e*100}%`;const{width:a,min:s,max:r}=t.box;if(!a)return i;if(Number.isNaN(s)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${s}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(r)){const d=`calc(1 / var(--_range-width) * 100 * ${r}% - var(--media-box-padding-right))`;i=`min(${i}, ${d})`}return i};Ea=new WeakSet;Xs=function(t,e){const{width:i,min:a,max:s}=t.box,r=e*t.range.width;if(r<a+O(this,ui)){const o=t.range.left-t.bounds.left-O(this,ui);return`${r-i/2+o}px`}if(r>s-O(this,ci)){const o=t.bounds.right-t.range.right-O(this,ci);return`${r+i/2-o-t.range.width}px`}return 0};Is=new WeakSet;Eo=function(t){const e=[...O(this,ca)].some(T=>t.composedPath().includes(T));if(!this.dragging&&(e||!t.composedPath().includes(this))){ne(this,hi,va).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=V(this.shadowRoot,"#preview-rail"),s=V(this.shadowRoot,'[part~="preview-box"]'),r=ne(this,ma,zs).call(this,O(this,ha));let o=(t.clientX-r.range.left)/r.range.width;o=Math.max(0,Math.min(1,o));const d=ne(this,pa,Zs).call(this,r,o),u=ne(this,Ea,Xs).call(this,r,o);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${r.range.width}`),s.style.setProperty("--_box-shift",`${u}`),s.style.setProperty("--_box-width",`${r.box.width}px`);const I=Math.round(O(this,ri))-Math.round(o*i);Math.abs(I)<1&&o>.01&&o<.99||(re(this,ri,o*i),ne(this,hi,va).call(this,O(this,ri)))};hi=new WeakSet;va=function(t){this.dispatchEvent(new l.CustomEvent(m.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Ss=new WeakSet;vo=function(){O(this,Ve).stop();const t=_o(this);this.dispatchEvent(new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Ha.shadowRootOptions={mode:"open"};Ha.getContainerTemplateHTML=Gu;l.customElements.get("media-time-range")||l.customElements.define("media-time-range",Ha);var qu=Ha,Yu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},an=(t,e,i)=>(Yu(t,e,"read from private field"),i?i.call(t):e.get(t)),Qu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ta;const zu=1,Zu=t=>t.mediaMuted?0:t.mediaVolume,Xu=t=>`${Math.round(t*100)}%`;class fo extends at{constructor(){super(...arguments),Qu(this,ta,()=>{const e=this.range.value,i=new l.CustomEvent(m.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_VOLUME,n.MEDIA_MUTED,n.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",E("volume")),this.range.addEventListener("input",an(this,ta))}disconnectedCallback(){this.range.removeEventListener("input",an(this,ta)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===n.MEDIA_VOLUME||e===n.MEDIA_MUTED)&&(this.range.valueAsNumber=Zu(this),this.range.setAttribute("aria-valuetext",Xu(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return N(this,n.MEDIA_VOLUME,zu)}set mediaVolume(e){Y(this,n.MEDIA_VOLUME,e)}get mediaMuted(){return k(this,n.MEDIA_MUTED)}set mediaMuted(e){M(this,n.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return $(this,n.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){x(this,n.MEDIA_VOLUME_UNAVAILABLE,e)}}ta=new WeakMap;l.customElements.get("media-volume-range")||l.customElements.define("media-volume-range",fo);var Ju=fo;function ju(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${n.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function ec(){return E("Loop")}class Fa extends Q{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=E("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return k(this,n.MEDIA_LOOP)}set mediaLoop(e){M(this,n.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new l.CustomEvent(m.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Fa.getSlotTemplateHTML=ju;Fa.getTooltipContentHTML=ec;l.customElements.get("media-loop-button")||l.customElements.define("media-loop-button",Fa);var tc=Fa;function R(t){if(typeof t=="boolean")return t?"":void 0;if(typeof t=="function")return;const e=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean";if(Array.isArray(t)&&t.every(e))return t.join(" ");if(!(typeof t=="object"&&t!==null))return t}L({tagName:"media-gesture-receiver",elementClass:Ya,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-container",elementClass:tl,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-chrome-dialog",elementClass:sl,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-keyboard-shortcuts-dialog",elementClass:dl,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});const mc=L({tagName:"media-controller",elementClass:Kl,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-tooltip",elementClass:ls,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-chrome-button",elementClass:zl,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-airplay-button",elementClass:Jl,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-captions-button",elementClass:ad,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-cast-button",elementClass:ld,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-chrome-range",elementClass:cd,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});const pc=L({tagName:"media-control-bar",elementClass:pd,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-text-display",elementClass:fd,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-duration-display",elementClass:Td,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-error-dialog",elementClass:Rd,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-fullscreen-button",elementClass:$d,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-live-button",elementClass:Vd,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-loading-indicator",elementClass:qd,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});const Ec=L({tagName:"media-mute-button",elementClass:Xd,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-pip-button",elementClass:eu,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-playback-rate-button",elementClass:nu,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});const vc=L({tagName:"media-play-button",elementClass:cu,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-poster-image",elementClass:Eu,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-preview-chapter-display",elementClass:gu,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-preview-thumbnail",elementClass:fs,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-preview-time-display",elementClass:Su,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-seek-backward-button",elementClass:Ru,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-seek-forward-button",elementClass:xu,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});const _c=L({tagName:"media-time-display",elementClass:Wu,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}}),fc=L({tagName:"media-time-range",elementClass:qu,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-volume-range",elementClass:Ju,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-loop-button",elementClass:tc,react:w,toAttributeValue:R,defaultProps:{suppressHydrationWarning:!0}});export{mc as M,pc as a,vc as b,_c as c,fc as d,Ec as e};
