/*! For license information please see 4973.87d7bcb9.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4973"],{12818:function(s,n,a){"use strict";a.r(n);var t=a("69298");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useClickAway</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Triggers a callback when user clicks outside of the target element.</p>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n    <span class="hljs-title function_">useClickAway</span>(root, <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;click outside!&#x27;</span>);\n    });\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-event" tabindex="-1">Custom Event</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n    <span class="hljs-title function_">useClickAway</span>(\n      root,\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;touch outside!&#x27;</span>);\n      },\n      { <span class="hljs-attr">eventName</span>: <span class="hljs-string">&#x27;touchstart&#x27;</span> },\n    );\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {\n  eventName?: <span class="hljs-built_in">string</span>;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useClickAway</span>(<span class="hljs-params">\n  target:\n    | Element\n    | Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;\n    | <span class="hljs-built_in">Array</span>&lt;Element | Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;&gt;,\n  listener: EventListener,\n  options?: Options,\n</span>): <span class="hljs-built_in">void</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>target</td>\n<td>Target element, support multiple elements</td>\n<td><em>Element | Ref&lt;Element&gt; | Array&lt;Element | Ref&lt;Element&gt;&gt;</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>listener</td>\n<td>Callback function when the outside is clicked</td>\n<td><em>EventListener</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>options</td>\n<td>Options</td>\n<td><em>Options</em></td>\n<td><code>{ eventName: \'click\' }</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>eventName</td>\n<td>Event name</td>\n<td><em>string</em></td>\n<td><code>click</code></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);