/*! For license information please see 6872.02adf04f.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6872"],{93561:function(t,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var n=a("52372"),e=a("35859"),d=(0,e.default)({},[["render",n.render]])},52372:function(t,s,a){"use strict";a.r(s);var n=a("18253");a.es(n,s)},18253:function(t,s,a){"use strict";a.r(s),a.d(s,{render:function(){return l}});var n=a("38613");let e={class:"van-doc-markdown-body"},d=[(0,n.createStaticVNode)('<h1>Pagination</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>When the amount of data is too much, use pagination to separate the data, and load only one page at a time.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Pagination</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">:items-per-page</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentPage = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);\n    <span class="hljs-keyword">return</span> { currentPage };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="simple-mode" tabindex="-1">Simple mode</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:page-count</span>=<span class="hljs-string">&quot;12&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;simple&quot;</span> /&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="show-ellipses" tabindex="-1">Show ellipses</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pagination</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span>\n  <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;125&quot;</span>\n  <span class="hljs-attr">:show-page-size</span>=<span class="hljs-string">&quot;3&quot;</span>\n  <span class="hljs-attr">force-ellipses</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="custom-button" tabindex="-1">Custom Button</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:show-page-size</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prev-text</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow-left&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">next-text</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">page</span>=<span class="hljs-string">&quot;{ text }&quot;</span>&gt;</span>{{ text }}<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-pagination</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Current page number</td><td><em>number</em></td><td>-</td></tr><tr><td>mode</td><td>Mode, can be set to <code>simple</code> <code>multi</code></td><td><em>string</em></td><td><code>multi</code></td></tr><tr><td>prev-text</td><td>Previous text</td><td><em>string</em></td><td><code>Previous</code></td></tr><tr><td>next-text</td><td>Next text</td><td><em>string</em></td><td><code>Next</code></td></tr><tr><td>total-items</td><td>Total items</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>items-per-page</td><td>Item number per page</td><td><em>number | string</em></td><td><code>10</code></td></tr><tr><td>page-count</td><td>The total number of pages, if not set, will be calculated based on <code>total-items</code> and <code>items-per-page</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td>show-page-size</td><td>Count of page size to show</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td>force-ellipses</td><td>Whether to show ellipses</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-prev-button <code>v4.2.1</code></td><td>Whether to show prev button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-next-button <code>v4.2.1</code></td><td>Whether to show next button</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when current page changed</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>page</td><td>Custom pagination item</td><td><em>{ number: number, text: string, active: boolean }</em></td></tr><tr><td>prev-text</td><td>Custom prev text</td><td>-</td></tr><tr><td>next-text</td><td>Custom next text</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PaginationMode</span>, <span class="hljs-title class_">PaginationProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-pagination-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-pagination-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-pagination-item-width</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-pagination-item-default-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-pagination-item-disabled-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-pagination-item-disabled-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-pagination-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-pagination-desc-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-pagination-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr></tbody></table></div>',15)];function l(t,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",e,d)}}}]);