/*! For license information please see 1397.9495ec36.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1397"],{53990:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return e}});var t=a("36840");let l=["innerHTML"];var e={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useClickAway</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u76D1\u542C\u70B9\u51FB\u5143\u7D20\u5916\u90E8\u7684\u4E8B\u4EF6\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n    <span class="hljs-title function_">useClickAway</span>(root, <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;click outside!&#x27;</span>);\n    });\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-shi-jian" tabindex="-1">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3>\n<p>\u901A\u8FC7 <code>eventName</code> \u9009\u9879\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9700\u8981\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n    <span class="hljs-title function_">useClickAway</span>(\n      root,\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;touch outside!&#x27;</span>);\n      },\n      { <span class="hljs-attr">eventName</span>: <span class="hljs-string">&#x27;touchstart&#x27;</span> },\n    );\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {\n  eventName?: <span class="hljs-built_in">string</span>;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useClickAway</span>(<span class="hljs-params">\n  target:\n    | Element\n    | Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;\n    | <span class="hljs-built_in">Array</span>&lt;Element | Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;&gt;,\n  listener: EventListener,\n  options?: Options,\n</span>): <span class="hljs-built_in">void</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>target</td>\n<td>\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u652F\u6301\u4F20\u5165\u6570\u7EC4\u6765\u7ED1\u5B9A\u591A\u4E2A\u5143\u7D20</td>\n<td><em>Element | Ref&lt;Element&gt; | Array&lt;Element | Ref&lt;Element&gt;&gt;</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>listener</td>\n<td>\u70B9\u51FB\u5916\u90E8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td>\n<td><em>EventListener</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u53EF\u9009\u7684\u914D\u7F6E\u9879</td>\n<td><em>Options</em></td>\n<td>\u89C1\u4E0B\u8868</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>eventName</td>\n<td>\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B</td>\n<td><em>string</em></td>\n<td><code>click</code></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);