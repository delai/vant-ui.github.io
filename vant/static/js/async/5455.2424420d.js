/*! For license information please see 5455.2424420d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5455"],{42761:function(t,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var n=a("45832"),e=a("35859"),d=(0,e.default)({},[["render",n.render]])},45832:function(t,s,a){"use strict";a.r(s);var n=a("65912");a.es(n,s)},65912:function(t,s,a){"use strict";a.r(s),a.d(s,{render:function(){return l}});var n=a("38613");let e={class:"van-doc-markdown-body"},d=[(0,n.createStaticVNode)('<h1>Search</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Input box component for search scenarios.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Search</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Search</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="listen-to-events" tabindex="-1">Listen to Events</h3><p><code>search</code> event will be Emitted when click the search button on the keyboard, <code>cancel</code> event will be Emitted when click the cancel button.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n    <span class="hljs-attr">show-action</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n    @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>\n    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSearch</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-title function_">showToast</span>(val);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Cancel&#39;</span>);\n    <span class="hljs-keyword">return</span> {\n      value,\n      onSearch,\n      onCancel,\n    };\n  },\n};\n</code></pre><blockquote><p>Tips: There will be a search button on the keyboard when Search is inside a form in iOS.</p></blockquote></div><div class="van-doc-card"><h3 id="input-align" tabindex="-1">Input Align</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;center&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span> /&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span> /&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="custom-background-color" tabindex="-1">Custom Background Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span>\n  <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#4fc08d&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="custom-action-button" tabindex="-1">Custom Action Button</h3><p>Use <code>action</code> slot to custom right button, <code>cancel</code> event will no longer be Emitted when use this slot.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">show-action</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Address&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n  @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">action</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickButton&quot;</span>&gt;</span>Search<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-search</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSearch</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-title function_">showToast</span>(val);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickButton</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(value.<span class="hljs-property">value</span>);\n    <span class="hljs-keyword">return</span> {\n      value,\n      onSearch,\n      onClickButton,\n    };\n  },\n};\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Input value</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>Left side label</td><td><em>string</em></td><td>-</td></tr><tr><td>name</td><td>As the identifier when submitting the form</td><td><em>string</em></td><td>-</td></tr><tr><td>shape</td><td>Shape of field, can be set to <code>round</code></td><td><em>string</em></td><td><code>square</code></td></tr><tr><td>id</td><td>Input id, the for attribute of the label also will be set</td><td><em>string</em></td><td><code>van-search-n-input</code></td></tr><tr><td>background</td><td>Background color of field</td><td><em>string</em></td><td><code>#f2f2f2</code></td></tr><tr><td>maxlength</td><td>Max length of value</td><td><em>number | string</em></td><td>-</td></tr><tr><td>placeholder</td><td>Placeholder</td><td><em>string</em></td><td>-</td></tr><tr><td>clearable</td><td>Whether to be clearable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>clear-icon</td><td>Clear icon name</td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>clear-trigger</td><td>When to display the clear icon, <code>always</code> means to display the icon when value is not empty, <code>focus</code> means to display the icon when input is focused</td><td><em>string</em></td><td><code>focus</code></td></tr><tr><td>autofocus</td><td>Whether to auto focus, unsupported in iOS</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-action</td><td>Whether to show right action button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>action-text</td><td>Text of action button</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td>disabled</td><td>Whether to disable field</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error</td><td>Whether to mark the input content in red</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error-message</td><td>Error message</td><td><em>string</em></td><td>-</td></tr><tr><td>formatter</td><td>Input value formatter</td><td><em>(val: string) =&gt; string</em></td><td>-</td></tr><tr><td>format-trigger</td><td>When to format value, can be set to <code>onBlur</code></td><td><em>string</em></td><td><code>onChange</code></td></tr><tr><td>input-align</td><td>Text align of field, can be set to <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>left-icon</td><td>Left icon name</td><td><em>string</em></td><td><code>search</code></td></tr><tr><td>right-icon</td><td>Right icon name</td><td><em>string</em></td><td>-</td></tr><tr><td>autocomplete</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank">autocomplete</a> attribute of native input element</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>search</td><td>Emitted when confirming search</td><td><em>value: string</em></td></tr><tr><td>update:model-value</td><td>Emitted when input value changed</td><td><em>value: string</em></td></tr><tr><td>focus</td><td>Emitted when input is focused</td><td><em>event: Event</em></td></tr><tr><td>blur</td><td>Emitted when input is blurred</td><td><em>event: Event</em></td></tr><tr><td>click-input</td><td>Emitted when the input is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-left-icon</td><td>Emitted when the left icon is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-right-icon</td><td>Emitted when the right icon is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>clear</td><td>Emitted when the clear icon is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Search instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>focus</td><td>Trigger input focus</td><td>-</td><td>-</td></tr><tr><td>blur</td><td>Trigger input blur</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SearchProps</span>, <span class="hljs-title class_">SearchShape</span>, <span class="hljs-title class_">SearchInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre><p><code>SearchInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SearchInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> searchRef = ref&lt;<span class="hljs-title class_">SearchInstance</span>&gt;();\n\nsearchRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">focus</span>();\n</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>left</td><td>Custom left side content</td></tr><tr><td>action</td><td>Custom right button, displayed when <code>show-action</code> is <code>true</code></td></tr><tr><td>label</td><td>Custom Search label</td></tr><tr><td>left-icon</td><td>Custom left icon</td></tr><tr><td>right-icon</td><td>Custom right icon</td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-search-padding</td><td><em>10px var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-search-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-search-content-background</td><td><em>var(--van-gray-1)</em></td><td>-</td></tr><tr><td>--van-search-input-height</td><td><em>34px</em></td><td>-</td></tr><tr><td>--van-search-label-padding</td><td><em>0 5px</em></td><td>-</td></tr><tr><td>--van-search-label-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-search-label-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-search-left-icon-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-search-action-padding</td><td><em>0 var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-search-action-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-search-action-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr></tbody></table></div>',18)];function l(t,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",e,d)}}}]);