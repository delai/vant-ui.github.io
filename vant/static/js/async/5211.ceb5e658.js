/*! For license information please see 5211.ceb5e658.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5211"],{7149:function(n,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var a=t("36840");let e=["innerHTML"];var d={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ActionSheet \u52A8\u4F5C\u9762\u677F</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5E95\u90E8\u5F39\u8D77\u7684\u6A21\u6001\u9762\u677F\uFF0C\u5305\u542B\u4E0E\u5F53\u524D\u60C5\u5883\u76F8\u5173\u7684\u591A\u4E2A\u9009\u9879\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionSheet</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u52A8\u4F5C\u9762\u677F\u901A\u8FC7 <code>actions</code> \u5C5E\u6027\u6765\u5B9A\u4E49\u9009\u9879\uFF0C<code>actions</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u683C\u5F0F\u89C1\u6587\u6863\u4E0B\u65B9\u8868\u683C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u7840\u7528\u6CD5&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E00&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E8C&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E09&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">item</span>) =&gt; {\n      <span class="hljs-comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u70B9\u51FB\u9009\u9879\u65F6\u4E0D\u4F1A\u81EA\u52A8\u6536\u8D77</span>\n      <span class="hljs-comment">// \u53EF\u4EE5\u901A\u8FC7 close-on-click-action \u5C5E\u6027\u5F00\u542F\u81EA\u52A8\u6536\u8D77</span>\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      <span class="hljs-title function_">showToast</span>(item.<span class="hljs-property">name</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n      onSelect,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhan-shi-qu-xiao-an-niu" tabindex="-1">\u5C55\u793A\u53D6\u6D88\u6309\u94AE</h3>\n<p>\u8BBE\u7F6E <code>cancel-text</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5E95\u90E8\u5C55\u793A\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u5173\u95ED\u5F53\u524D\u9762\u677F\u5E76\u89E6\u53D1 <code>cancel</code> \u4E8B\u4EF6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>\n  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>\n  <span class="hljs-attr">close-on-click-action</span>\n  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E00&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E8C&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E09&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhan-shi-miao-shu-xin-xi" tabindex="-1">\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F</h3>\n<p>\u901A\u8FC7 <code>description</code> \u53EF\u4EE5\u5728\u83DC\u5355\u9876\u90E8\u663E\u793A\u63CF\u8FF0\u4FE1\u606F\uFF0C\u901A\u8FC7\u9009\u9879\u7684 <code>subname</code> \u5C5E\u6027\u53EF\u4EE5\u5728\u9009\u9879\u6587\u5B57\u7684\u53F3\u4FA7\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>\n  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F&quot;</span>\n  <span class="hljs-attr">close-on-click-action</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E00&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E8C&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u9009\u9879\u4E09&#x27;</span>, <span class="hljs-attr">subname</span>: <span class="hljs-string">&#x27;\u63CF\u8FF0\u4FE1\u606F&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xuan-xiang-zhuang-tai" tabindex="-1">\u9009\u9879\u72B6\u6001</h3>\n<p>\u53EF\u4EE5\u901A\u8FC7 <code>loading</code> \u548C <code>disabled</code> \u5C06\u9009\u9879\u8BBE\u7F6E\u4E3A\u52A0\u8F7D\u72B6\u6001\u6216\u7981\u7528\u72B6\u6001\uFF0C\u6216\u8005\u901A\u8FC7<code>color</code>\u8BBE\u7F6E\u9009\u9879\u7684\u989C\u8272</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>\n  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>\n  <span class="hljs-attr">close-on-click-action</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u7740\u8272\u9009\u9879&#x27;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;#ee0a24&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u7981\u7528\u9009\u9879&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u52A0\u8F7D\u9009\u9879&#x27;</span>, <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-mian-ban" tabindex="-1">\u81EA\u5B9A\u4E49\u9762\u677F</h3>\n<p>\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u5C55\u793A\u5185\u5BB9\uFF0C\u540C\u65F6\u53EF\u4EE5\u4F7F\u7528<code>title</code>\u5C5E\u6027\u5C55\u793A\u6807\u9898\u680F</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-sheet</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.content</span> {\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span> <span class="hljs-number">16px</span> <span class="hljs-number">160px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>\u662F\u5426\u663E\u793A\u52A8\u4F5C\u9762\u677F</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>actions</td>\n<td>\u9762\u677F\u9009\u9879\u5217\u8868</td>\n<td><em>ActionSheetAction[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u9876\u90E8\u6807\u9898</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel-text</td>\n<td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u9009\u9879\u4E0A\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-icon</td>\n<td>\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>cross</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>\u5C06\u9762\u677F\u7684 z-index \u5C42\u7EA7\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u56FA\u5B9A\u503C</td>\n<td><em>number | string</em></td>\n<td><code>2000+</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>\u662F\u5426\u663E\u793A\u5706\u89D2</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>overlay-class</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlay-style</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lock-scroll</td>\n<td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>\u662F\u5426\u5728\u663E\u793A\u5F39\u5C42\u65F6\u624D\u6E32\u67D3\u8282\u70B9</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-popstate</td>\n<td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-action</td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u9009\u9879\u540E\u5173\u95ED</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>\u662F\u5426\u5F00\u542F<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</a></td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-close</td>\n<td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td>\n<td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="action-shu-ju-jie-gou" tabindex="-1">Action \u6570\u636E\u7ED3\u6784</h3>\n<p><code>actions</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A</p>\n<table>\n<thead>\n<tr>\n<th>\u952E\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>\u6807\u9898</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>subname</td>\n<td>\u4E8C\u7EA7\u6807\u9898</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>color</td>\n<td>\u9009\u9879\u6587\u5B57\u989C\u8272</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>className</td>\n<td>\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684 class</td>\n<td><em>string | Array | object</em></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001</td>\n<td><em>boolean</em></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td>\n<td><em>boolean</em></td>\n</tr>\n<tr>\n<td>callback</td>\n<td>\u70B9\u51FB\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td>\n<td><em>action: ActionSheetAction</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>select</td>\n<td>\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1\uFF0C\u7981\u7528\u6216\u52A0\u8F7D\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1</td>\n<td><em>action: ActionSheetAction, index: number</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>open</td>\n<td>\u6253\u5F00\u9762\u677F\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>\u5173\u95ED\u9762\u677F\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>\u6253\u5F00\u9762\u677F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>\u5173\u95ED\u9762\u677F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>click-overlay</td>\n<td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u5C55\u793A\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848</td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>action</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9</td>\n<td><em>{ action: ActionSheetAction, index: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ActionSheetProps</span>, <span class="hljs-title class_">ActionSheetAction</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-action-sheet-max-height</td>\n<td><em>80%</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-header-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-header-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-description-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-description-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-description-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-line-height</td>\n<td><em>var(--van-line-height-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-disabled-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-subname-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-subname-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-subname-line-height</td>\n<td><em>var(--van-line-height-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-close-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-close-icon-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-close-icon-padding</td>\n<td><em>0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-cancel-text-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-cancel-padding-top</td>\n<td><em>var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-cancel-padding-color</td>\n<td><em>var(--van-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-loading-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);