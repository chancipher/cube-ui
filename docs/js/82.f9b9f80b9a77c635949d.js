webpackJsonp([82],{"3JND":function(e,t,s){var a=s("VU/8")(null,s("3OQM"),null,null,null);e.exports=a.exports},"3OQM":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h2",{attrs:{id:"create-apimodule"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-create-apimodule-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" create-api module")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),s("h3",{attrs:{id:"createAPI(Vue,Component,[events,single])"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-createAPI(Vue,Component,[events,single])-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" createAPI(Vue, Component, [events, single])")]),e._v(" "),e._m(2),e._v(" "),s("h3",{attrs:{id:"HowtouseingeneralJSfilesoruseitinglobal"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-HowtouseingeneralJSfilesoruseitinglobal-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" How to use in general JS files or use it in global")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Or components in cube-ui, like Dialog:")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("There is another idea which used the mode of data-driven. For example, in vuex, you could use a global state to label whether to call the component, and watch this state in App.vue to handle this component.")])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("This module exports a function called "),s("code",{pre:!0},[e._v("createAPI")]),e._v(" with which you can invoke the custom component which has been instantiated in api form. And It could be called both in Vue instance context and "),s("a",{attrs:{href:"https://didi.github.io/cube-ui/#/en-US/docs/create-api#cube-HowtouseingeneralJSfilesoruseitinglobal-anchor"}},[e._v("general js file")]),e._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",[e._v("Notice:")]),e._v(" All cube-ui componnets which used "),s("code",{pre:!0},[e._v("createAPI")]),e._v(" must be registered by "),s("code",{pre:!0},[e._v("Vue.use")]),e._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[e._v("Parameters:")]),e._v(" "),s("ul",[s("li",[s("code",{pre:!0},[e._v("{Function} Vue")]),e._v(" Vue function")]),e._v(" "),s("li",[s("code",{pre:!0},[e._v("{Function | Object} Component")]),e._v(" Vue component which must contains "),s("code",{pre:!0},[e._v("name")])]),e._v(" "),s("li",[s("code",{pre:!0},[e._v("{Array} [events]")]),e._v(" the collection of the instantiated Vue Component's event name")]),e._v(" "),s("li",[s("code",{pre:!0},[e._v("{Boolean} [single]")]),e._v(" whether singleton")])])]),e._v(" "),s("li",[s("p",[e._v("Usage:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("This method will add a method which is named "),s("code",{pre:!0},[e._v("$create{camelize(Component.name)}")]),e._v(" to Vue's prototype, so you can instantiate the Vue component by "),s("code",{pre:!0},[e._v("const instance = this.$createAaBb(config, [renderFn, single])")]),e._v(" in other components. The instantiated component's template content will be attached to "),s("code",{pre:!0},[e._v("body")]),e._v(" element.")])]),e._v(" "),s("li",[s("p",[s("code",{pre:!0},[e._v("const instance = this.$createAaBb(config, renderFn, single)")])]),e._v(" "),s("p",[s("strong",[e._v("Parameters：")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Attribute")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Accepted Values")]),e._v(" "),s("th",[e._v("Default")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("config")]),e._v(" "),s("td",[e._v("Config options")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[e._v("{}")]),e._v(" "),s("td",[e._v("-")])]),e._v(" "),s("tr",[s("td",[e._v("renderFn")]),e._v(" "),s("td",[e._v("Optional, used to generate the VNode child node in the slot scene in general")]),e._v(" "),s("td",[e._v("Function")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("function (createElement) {...}")])]),e._v(" "),s("tr",[s("td",[e._v("single")]),e._v(" "),s("td",[e._v("Optional, whether the instantiated component is a singleton or not. If two parameters are provided and the "),s("code",{pre:!0},[e._v("renderFn")]),e._v("'s type is not function, then the "),s("code",{pre:!0},[e._v("single")]),e._v(" value is the sencond parameter's value.")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("single in createAPI()")]),e._v(" "),s("td",[e._v("-")])])])]),e._v(" "),s("p",[s("strong",[e._v("Config options "),s("code",{pre:!0},[e._v("config")]),e._v(":")])]),e._v(" "),s("p",[e._v("It will be passed to the component as its props except the events in "),s("code",{pre:!0},[e._v("events")]),e._v("(It will transform by default, eg: If "),s("code",{pre:!0},[e._v("events")]),e._v(" has value "),s("code",{pre:!0},[e._v("['click']")]),e._v(", then the prop "),s("code",{pre:!0},[e._v("onClick")]),e._v(" will be treated as component's event and not component's props).")]),e._v(" "),s("p",[e._v("After 1.8.0+, you can set "),s("code",{pre:!0},[e._v("$props")]),e._v(" and "),s("code",{pre:!0},[e._v("$events")]),e._v(" in "),s("code",{pre:!0},[e._v("config")]),e._v(", "),s("code",{pre:!0},[e._v("$props")]),e._v(" supported reactive properties, these props will be watched.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Attribute")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Accepted Values")]),e._v(" "),s("th",[e._v("Default")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("$props")]),e._v(" "),s("td",[e._v("Component props")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("{"),s("br"),e._v(" title: 'title',"),s("br"),e._v(" content: 'my content',"),s("br"),e._v(" open: false"),s("br"),e._v("}")])]),e._v(" "),s("tr",[s("td",[e._v("$events")]),e._v(" "),s("td",[e._v("Component event handlers")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("{"),s("br"),e._v(" click: 'clickHandler',"),s("br"),e._v(" select: this.selectHandler"),s("br"),e._v("}")])])])]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("$props")]),e._v(" example, "),s("code",{pre:!0},[e._v("{ [key]: [propKey] }")]),e._v(":")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[e._v("{\n  "),s("span",{attrs:{class:"hljs-attr"}},[e._v("title")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'title'")]),e._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[e._v("content")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'my content'")]),e._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[e._v("open")]),e._v(": "),s("span",{attrs:{class:"hljs-literal"}},[e._v("false")]),e._v("\n}\n")])]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("title")]),e._v(", "),s("code",{pre:!0},[e._v("content")]),e._v(" and "),s("code",{pre:!0},[e._v("open")]),e._v(" are keys of the component prop, and the prop' value will be taken by the following steps:")]),e._v(" "),s("ol",[s("li",[e._v("If "),s("code",{pre:!0},[e._v("propKey")]),e._v(" is not a string value, then use "),s("code",{pre:!0},[e._v("propKey")]),e._v(" as the prop value.")]),e._v(" "),s("li",[e._v("If "),s("code",{pre:!0},[e._v("propKey")]),e._v(" is a string value and the caller instance dont have the "),s("code",{pre:!0},[e._v("propKey")]),e._v(" property, then use "),s("code",{pre:!0},[e._v("propKey")]),e._v(" as the prop value.")]),e._v(" "),s("li",[e._v("If "),s("code",{pre:!0},[e._v("propKey")]),e._v(" is a string value and the caller instance have the "),s("code",{pre:!0},[e._v("propKey")]),e._v(" property, then use the caller's "),s("code",{pre:!0},[e._v("propKey")]),e._v(" property value as the prop value. And the prop value will be reactively.")])]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("$events")]),e._v(" example, "),s("code",{pre:!0},[e._v("{ [eventName]: [eventValue] }")]),e._v(":")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[e._v("{\n  "),s("span",{attrs:{class:"hljs-attr"}},[e._v("click")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'clickHandler'")]),e._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[e._v("select")]),e._v(": "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".selectHandler\n}\n")])]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("click")]),e._v(" and "),s("code",{pre:!0},[e._v("select")]),e._v(" are event names, and the event handlers will be taken by the following steps:")]),e._v(" "),s("ol",[s("li",[e._v("If "),s("code",{pre:!0},[e._v("eventValue")]),e._v(" is not a string value, then use "),s("code",{pre:!0},[e._v("eventValue")]),e._v(" as the event handler.")]),e._v(" "),s("li",[e._v("If "),s("code",{pre:!0},[e._v("eventValue")]),e._v(" is a string value, then use the caller's "),s("code",{pre:!0},[e._v("eventValue")]),e._v(" property value as the event handler.")])]),e._v(" "),s("p",[e._v("After 1.10.0+, you can set "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth"}},[e._v("all avaliable properties in Vue")]),e._v(", but you need to add prefix "),s("code",{pre:!0},[e._v("$")]),e._v(", eg:")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[s("span",{attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$createAaBb({\n  "),s("span",{attrs:{class:"hljs-attr"}},[e._v("$attrs")]),e._v(": {\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("id")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'id'")]),e._v("\n  },\n  "),s("span",{attrs:{class:"hljs-attr"}},[e._v("$class")]),e._v(": {\n    "),s("span",{attrs:{class:"hljs-string"}},[e._v("'my-class'")]),e._v(": "),s("span",{attrs:{class:"hljs-literal"}},[e._v("true")]),e._v("\n  }\n})\n")])]),e._v(" "),s("p",[s("strong",[e._v("The Returned value "),s("code",{pre:!0},[e._v("instance")]),e._v(":")])]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("instance")]),e._v(" is a instantiated Vue component.")]),e._v(" "),s("blockquote",[s("p",[e._v("And the "),s("code",{pre:!0},[e._v("remove")]),e._v(" method will be "),s("strong",[e._v("attached")]),e._v(" to this instance.")])]),e._v(" "),s("p",[e._v("You can invoke the "),s("code",{pre:!0},[e._v("remove")]),e._v(" method to destroy the component and detach the component's content from "),s("code",{pre:!0},[e._v("body")]),e._v(" element.")]),e._v(" "),s("p",[e._v("If the caller is destroyed and the "),s("code",{pre:!0},[e._v("instance")]),e._v(" will be destroyed too.")])])])]),e._v(" "),s("li",[s("p",[e._v("Example:")]),e._v(" "),s("p",[e._v("First we create Hello.vue component：")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{attrs:{class:"hljs-attr"}},[e._v("@click")]),e._v("="),s("span",{attrs:{class:"hljs-string"}},[e._v('"clickHandler"')]),e._v(">")]),e._v("\n    {{content}}\n    "),s("span",{attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{attrs:{class:"hljs-name"}},[e._v("slot")]),e._v(" "),s("span",{attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{attrs:{class:"hljs-string"}},[e._v('"other"')]),e._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{attrs:{class:"hljs-name"}},[e._v("slot")]),e._v(">")]),e._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),s("span",{attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{attrs:{class:"hljs-name"}},[e._v("script")]),e._v(" "),s("span",{attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),s("span",{attrs:{class:"hljs-string"}},[e._v('"text/ecmascript-6"')]),e._v(">")]),s("span",{attrs:{class:"javascript"}},[e._v("\n  "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'hello'")]),e._v(",\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("props")]),e._v(": {\n      "),s("span",{attrs:{class:"hljs-attr"}},[e._v("content")]),e._v(": {\n        "),s("span",{attrs:{class:"hljs-attr"}},[e._v("type")]),e._v(": "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("String")]),e._v(",\n        "),s("span",{attrs:{class:"hljs-attr"}},[e._v("default")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'Hello'")]),e._v("\n      }\n    },\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      clickHandler(e) {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$emit("),s("span",{attrs:{class:"hljs-string"}},[e._v("'click'")]),e._v(", e)\n      }\n    }\n  }\n")]),s("span",{attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])]),e._v(" "),s("p",[e._v("Then we make Hello.vue to an API style component by calling the "),s("code",{pre:!0},[e._v("createAPI")]),e._v(" method.")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[e._v("  "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"hljs-string"}},[e._v("'vue'")]),e._v("\n  "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Hello "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"hljs-string"}},[e._v("'./Hello.vue'")]),e._v("\n\n  "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// import Style to load the base style")]),e._v("\n  "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" {\n    "),s("span",{attrs:{class:"hljs-comment"}},[e._v("/* eslint-disable no-unused-vars */")]),e._v("\n    Style,\n    Dialog,\n    createAPI\n  } "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"hljs-string"}},[e._v("'cube-ui'")]),e._v("\n\n  Vue.use(Dialog)\n\n  "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// create this.$createHello API")]),e._v("\n  createAPI(Vue, Hello, ["),s("span",{attrs:{class:"hljs-string"}},[e._v("'click'")]),e._v("], "),s("span",{attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(")\n\n  "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// init Vue")]),e._v("\n  "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Vue({\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("el")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'#app'")]),e._v(",\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("render")]),e._v(": "),s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" ("),s("span",{attrs:{class:"hljs-params"}},[e._v("h")]),e._v(") ")]),e._v("{\n      "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" h("),s("span",{attrs:{class:"hljs-string"}},[e._v("'button'")]),e._v(", {\n        "),s("span",{attrs:{class:"hljs-attr"}},[e._v("on")]),e._v(": {\n          "),s("span",{attrs:{class:"hljs-attr"}},[e._v("click")]),e._v(": "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".showHello\n        }\n      }, ["),s("span",{attrs:{class:"hljs-string"}},[e._v("'Show Hello'")]),e._v("])\n    },\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      showHello() {\n        "),s("span",{attrs:{class:"hljs-comment"}},[e._v("/* The first parameter of `$createHello` will be passed to the component as its props except the events in `events`(It will transform by default, eg: If `events` has value `['click']`, then the prop `onClick` will be treated as component's event and not component's props) */")]),e._v("\n        "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" instance = "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$createHello({\n          "),s("span",{attrs:{class:"hljs-attr"}},[e._v("content")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'My Hello Content'")]),e._v(",\n          onClick(e) {\n            "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{attrs:{class:"hljs-string"}},[e._v("'Hello component clicked.'")]),e._v(")\n          }\n        }, "),s("span",{attrs:{class:"hljs-comment"}},[e._v("/* renderFn */")]),e._v(" (createElement) => {\n          "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" [\n            createElement("),s("span",{attrs:{class:"hljs-string"}},[e._v("'p'")]),e._v(", {\n              "),s("span",{attrs:{class:"hljs-attr"}},[e._v("slot")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'other'")]),e._v("\n            }, "),s("span",{attrs:{class:"hljs-string"}},[e._v("'other content'")]),e._v(")\n          ]\n        })\n        "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// Also, the event hanlder can be registered by instance's `$on` method")]),e._v("\n        instance.$on("),s("span",{attrs:{class:"hljs-string"}},[e._v("'click'")]),e._v(", (e) => {\n          "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" $dialog = "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$createDialog({\n            "),s("span",{attrs:{class:"hljs-attr"}},[e._v("type")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'confirm'")]),e._v(",\n            "),s("span",{attrs:{class:"hljs-attr"}},[e._v("content")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'click confirm to remove current instance'")]),e._v(",\n            "),s("span",{attrs:{class:"hljs-attr"}},[e._v("icon")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'cubeic-alert'")]),e._v("\n          })\n          $dialog.show()\n\n          $dialog.$on("),s("span",{attrs:{class:"hljs-string"}},[e._v("'confirm'")]),e._v(", () => {\n            "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// remove instance")]),e._v("\n            instance.remove()\n          }).$on("),s("span",{attrs:{class:"hljs-string"}},[e._v("'cancel'")]),e._v(", () => {\n            "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{attrs:{class:"hljs-string"}},[e._v("'cancel'")]),e._v(")\n          })\n        })\n      }\n    }\n  })\n")])]),e._v(" "),s("p",[e._v("In this example, we create a component "),s("code",{pre:!0},[e._v("Hello")]),e._v(" which needs to be invoked in api form and we invoke it in another component.The focus is what "),s("code",{pre:!0},[e._v("showHello()")]),e._v(" does: invoking method "),s("code",{pre:!0},[e._v("this.$createHello(config, renderFn)")]),e._v(" to instantiate "),s("code",{pre:!0},[e._v("Hello")]),e._v(".")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("In vue component, you could call by "),s("code",{pre:!0},[e._v("this.$createHello(config, renderFn)")]),e._v(" because the "),s("code",{pre:!0},[e._v("this")]),e._v(" is just a Vue instance. But in general JS files, you need to use "),s("code",{pre:!0},[e._v("Hello.$create")]),e._v(". As shown below:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[s("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"hljs-string"}},[e._v("'vue'")]),e._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Hello "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"hljs-string"}},[e._v("'./Hello.vue'")]),e._v("\n\n"),s("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" {\n  createAPI\n} "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"hljs-string"}},[e._v("'cube-ui'")]),e._v("\n\n"),s("span",{attrs:{class:"hljs-comment"}},[e._v("// 创建 this.$createHello and $Hello.create API")]),e._v("\ncreateAPI(Vue, Hello, ["),s("span",{attrs:{class:"hljs-string"}},[e._v("'click'")]),e._v("], "),s("span",{attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(")\n\nHello.$create(config, renderFn)\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[s("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"hljs-string"}},[e._v("'vue'")]),e._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { Dialog } "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"hljs-string"}},[e._v("'cube-ui'")]),e._v("\n\nVue.use(Dialog)\n\nDialog.$create({\n  ...\n})\n")])])}]}},"i/fd":function(e,t,s){e.exports=s("3JND")}});