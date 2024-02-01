/*! For license information please see 2597.7694cfa1.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["2597"],{23010:function(s,n,a){"use strict";a.r(n);var t=a("69298");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>PasswordInput</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>The PasswordInput component is usually used with <a href="#/en-US/number-keyboard" target="_blank">NumberKeyboard</a> Component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PasswordInput</span>, <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PasswordInput</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>\n  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>\n  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;showKeyboard = false&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;123&#x27;</span>);\n    <span class="hljs-keyword">const</span> showKeyboard = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n\n    <span class="hljs-keyword">return</span> {\n      value,\n      showKeyboard,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-length" tabindex="-1">Custom Length</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>\n  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;15&quot;</span>\n  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>\n  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="add-gutter" tabindex="-1">Add Gutter</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>\n  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>\n  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>\n  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="without-mask" tabindex="-1">Without Mask</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>\n  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:mask</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>\n  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="hint-error" tabindex="-1">Hint Error</h3>\n<p>Use <code>info</code> to set info message, use <code>error-info</code> prop to set error message.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>\n  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">info</span>=<span class="hljs-string">&quot;Some tips&quot;</span>\n  <span class="hljs-attr">:error-info</span>=<span class="hljs-string">&quot;errorInfo&quot;</span>\n  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>\n  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;showKeyboard = false&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;123&#x27;</span>);\n    <span class="hljs-keyword">const</span> errorInfo = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> showKeyboard = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n\n    <span class="hljs-title function_">watch</span>(value, <span class="hljs-function">(<span class="hljs-params">newVal</span>) =&gt;</span> {\n      <span class="hljs-keyword">if</span> (newVal.<span class="hljs-property">length</span> === <span class="hljs-number">6</span> &amp;&amp; newVal !== <span class="hljs-string">&#x27;123456&#x27;</span>) {\n        errorInfo.<span class="hljs-property">value</span> = <span class="hljs-string">&#x27;Password Mistake&#x27;</span>;\n      } <span class="hljs-keyword">else</span> {\n        errorInfo.<span class="hljs-property">value</span> = <span class="hljs-string">&#x27;&#x27;</span>;\n      }\n    });\n\n    <span class="hljs-keyword">return</span> {\n      value,\n      errorInfo,\n      showKeyboard,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>Password value</td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>info</td>\n<td>Bottom info</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>error-info</td>\n<td>Bottom error info</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>length</td>\n<td>Maxlength of password</td>\n<td><em>number | string</em></td>\n<td><code>6</code></td>\n</tr>\n<tr>\n<td>gutter</td>\n<td>Gutter of input</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>mask</td>\n<td>Whether to mask value</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>focused</td>\n<td>Whether to show focused cursor</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>focus</td>\n<td>Emitted when input is focused</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PasswordInputProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-password-input-height</td>\n<td><em>50px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-margin</td>\n<td><em>0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-font-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-radius</td>\n<td><em>6px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-info-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-info-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-error-info-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-dot-size</td>\n<td><em>10px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-dot-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-cursor-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-cursor-width</td>\n<td><em>1px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-cursor-height</td>\n<td><em>40%</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-password-input-cursor-duration</td>\n<td><em>1s</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);