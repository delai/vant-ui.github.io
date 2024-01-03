/*! For license information please see 3198.86ad6f32.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3198"],{10055:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return l}});var t=a("36840");let e=["innerHTML"];var l={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useEventListener</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u65B9\u4FBF\u5730\u8FDB\u884C\u4E8B\u4EF6\u7ED1\u5B9A\uFF0C\u5728\u7EC4\u4EF6 <code>mounted</code> \u548C <code>activated</code> \u65F6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C<code>unmounted</code> \u548C <code>deactivated</code> \u65F6\u89E3\u7ED1\u4E8B\u4EF6\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-comment">// \u5728 window \u4E0A\u7ED1\u5B9A resize \u4E8B\u4EF6</span>\n    <span class="hljs-comment">// \u672A\u6307\u5B9A\u76D1\u542C\u5BF9\u8C61\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u76D1\u542C window \u7684\u4E8B\u4EF6</span>\n    <span class="hljs-title function_">useEventListener</span>(<span class="hljs-string">&#x27;resize&#x27;</span>, <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;window resize&#x27;</span>);\n    });\n\n    <span class="hljs-comment">// \u5728 body \u5143\u7D20\u4E0A\u7ED1\u5B9A click \u4E8B\u4EF6</span>\n    <span class="hljs-title function_">useEventListener</span>(\n      <span class="hljs-string">&#x27;click&#x27;</span>,\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;click body&#x27;</span>);\n      },\n      { <span class="hljs-attr">target</span>: <span class="hljs-variable language_">document</span>.<span class="hljs-property">body</span> },\n    );\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="qu-xiao-shi-jian-jian-ting" tabindex="-1">\u53D6\u6D88\u4E8B\u4EF6\u76D1\u542C</h3>\n<p><code>useEventListener</code> \u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>cleanup</code> \u51FD\u6570\uFF0C\u8C03\u7528\u8BE5\u51FD\u6570\u53EF\u4EE5\u53D6\u6D88\u4E8B\u4EF6\u76D1\u542C\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> cleanup = <span class="hljs-title function_">useEventListener</span>(<span class="hljs-string">&#x27;resize&#x27;</span>, <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;window resize&#x27;</span>);\n    });\n\n    <span class="hljs-title function_">cleanup</span>();\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {\n  target?: <span class="hljs-title class_">EventTarget</span> | <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">EventTarget</span>&gt;;\n  capture?: <span class="hljs-built_in">boolean</span>;\n  passive?: <span class="hljs-built_in">boolean</span>;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useEventListener</span>(<span class="hljs-params">\n  <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span>,\n  listener: EventListener,\n  options?: Options,\n</span>): <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>listener</td>\n<td>\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570</td>\n<td><em>EventListener</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u53EF\u9009\u7684\u914D\u7F6E\u9879</td>\n<td><em>Options</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>target</td>\n<td>\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20</td>\n<td><em>EventTarget | Ref&lt;EventTarget&gt;</em></td>\n<td><code>window</code></td>\n</tr>\n<tr>\n<td>capture</td>\n<td>\u662F\u5426\u5728\u4E8B\u4EF6\u6355\u83B7\u9636\u6BB5\u89E6\u53D1</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>passive</td>\n<td>\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u8868\u793A <code>listener</code> \u6C38\u8FDC\u4E0D\u4F1A\u8C03\u7528 <code>preventDefault</code></td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);