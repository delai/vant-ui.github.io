/*! For license information please see 2449.18ab339c.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["2449"],{36550:function(s,a,t){"use strict";t.r(a),t.d(a,{default:function(){return e}});var n=t("41937"),l=t("35859"),e=(0,l.default)({},[["render",n.render]])},41937:function(s,a,t){"use strict";t.r(a);var n=t("50355");t.es(n,a)},50355:function(s,a,t){"use strict";t.r(a),t.d(a,{render:function(){return d}});var n=t("38613");let l={class:"van-doc-markdown-body"},e=[(0,n.createStaticVNode)('<h1>Tag</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to mark keywords and summarize the main content.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tag</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tag</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="plain-style" tabindex="-1">Plain style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="round-style" tabindex="-1">Round style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="mark-style" tabindex="-1">Mark style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">mark</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="closeable" tabindex="-1">Closeable</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">closeable</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>\n  Tag\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">close</span> = (<span class="hljs-params"></span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      close,\n    };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="custom-size" tabindex="-1">Custom Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffe1e1&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ad0000&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Type, can be set to <code>primary</code> <code>success</code> <code>danger</code> <code>warning</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>size</td><td>Size, can be set to <code>large</code> <code>medium</code></td><td><em>string</em></td><td>-</td></tr><tr><td>color</td><td>Custom color</td><td><em>string</em></td><td>-</td></tr><tr><td>show</td><td>Whether to show tag</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>plain</td><td>Whether to be plain style</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>round</td><td>Whether to be round style</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>mark</td><td>Whether to be mark style</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>text-color</td><td>Text color</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>closeable</td><td>Whether to be closeable</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when component is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>close</td><td>Emitted when close icon is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TagSize</span>, <span class="hljs-title class_">TagType</span>, <span class="hljs-title class_">TagProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-tag-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-tag-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-tag-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-tag-radius</td><td><em>2px</em></td><td>-</td></tr><tr><td>--van-tag-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-tag-medium-padding</td><td><em>2px 6px</em></td><td>-</td></tr><tr><td>--van-tag-large-padding</td><td><em>var(--van-padding-base) var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-tag-large-radius</td><td><em>var(--van-radius-md)</em></td><td>-</td></tr><tr><td>--van-tag-large-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-tag-round-radius</td><td><em>var(--van-radius-max)</em></td><td>-</td></tr><tr><td>--van-tag-danger-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-tag-primary-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-tag-success-color</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-tag-warning-color</td><td><em>var(--van-warning-color)</em></td><td>-</td></tr><tr><td>--van-tag-default-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-tag-plain-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr></tbody></table></div>',18)];function d(s,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,e)}}}]);