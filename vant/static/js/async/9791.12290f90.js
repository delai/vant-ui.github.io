/*! For license information please see 9791.12290f90.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9791"],{4071:function(s,n,a){"use strict";a.r(n);var t=a("69298");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ShareSheet \u5206\u4EAB\u9762\u677F</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5E95\u90E8\u5F39\u8D77\u7684\u5206\u4EAB\u9762\u677F\uFF0C\u7528\u4E8E\u5C55\u793A\u5404\u5206\u4EAB\u6E20\u9053\u5BF9\u5E94\u7684\u64CD\u4F5C\u6309\u94AE\uFF0C\u4E0D\u542B\u5177\u4F53\u7684\u5206\u4EAB\u903B\u8F91\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ShareSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ShareSheet</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u5206\u4EAB\u9762\u677F\u901A\u8FC7 <code>options</code> \u5C5E\u6027\u6765\u5B9A\u4E49\u5206\u4EAB\u9009\u9879\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u683C\u5F0F\u89C1\u6587\u6863\u4E0B\u65B9\u8868\u683C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u663E\u793A\u5206\u4EAB\u9762\u677F&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showShare = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB&quot;</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5FAE\u4FE1&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;wechat&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5FAE\u535A&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;weibo&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u590D\u5236\u94FE\u63A5&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;link&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5206\u4EAB\u6D77\u62A5&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;poster&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u4E8C\u7EF4\u7801&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;qrcode&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">option</span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(option.<span class="hljs-property">name</span>);\n      showShare.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      options,\n      onSelect,\n      showShare,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhan-shi-duo-xing-xuan-xiang" tabindex="-1">\u5C55\u793A\u591A\u884C\u9009\u9879</h3>\n<p>\u5F53\u5206\u4EAB\u9009\u9879\u7684\u6570\u91CF\u8F83\u591A\u65F6\uFF0C\u53EF\u4EE5\u5C06 <code>options</code> \u5B9A\u4E49\u4E3A\u6570\u7EC4\u5D4C\u5957\u7684\u683C\u5F0F\uFF0C\u6BCF\u4E2A\u5B50\u6570\u7EC4\u4F1A\u4F5C\u4E3A\u4E00\u884C\u9009\u9879\u5C55\u793A\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB&quot;</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      [\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5FAE\u4FE1&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;wechat&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u670B\u53CB\u5708&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;wechat-moments&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5FAE\u535A&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;weibo&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;QQ&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;qq&#x27;</span> },\n      ],\n      [\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u590D\u5236\u94FE\u63A5&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;link&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5206\u4EAB\u6D77\u62A5&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;poster&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u4E8C\u7EF4\u7801&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;qrcode&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5C0F\u7A0B\u5E8F\u7801&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;weapp-qrcode&#x27;</span> },\n      ],\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      options,\n      showShare,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h3>\n<p>\u9664\u4E86\u4F7F\u7528\u5185\u7F6E\u7684\u51E0\u79CD\u56FE\u6807\u5916\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 <code>icon</code> \u4E2D\u4F20\u5165\u56FE\u7247 URL \u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u540D\u79F0&#x27;</span>,\n        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-fire.png&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u540D\u79F0&#x27;</span>,\n        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-light.png&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u540D\u79F0&#x27;</span>,\n        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-water.png&#x27;</span>,\n      },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      options,\n      showShare,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhan-shi-miao-shu-xin-xi" tabindex="-1">\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F</h3>\n<p>\u901A\u8FC7 <code>description</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u6587\u5B57, \u5728 <code>options</code> \u5185\u8BBE\u7F6E <code>description</code> \u5C5E\u6027\u53EF\u4EE5\u6DFB\u52A0\u5206\u4EAB\u9009\u9879\u63CF\u8FF0\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5FAE\u4FE1&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;wechat&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5FAE\u535A&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;weibo&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u590D\u5236\u94FE\u63A5&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;link&#x27;</span>, <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;\u63CF\u8FF0\u4FE1\u606F&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5206\u4EAB\u6D77\u62A5&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;poster&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u4E8C\u7EF4\u7801&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;qrcode&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      options,\n      showShare,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>\u662F\u5426\u663E\u793A\u5206\u4EAB\u9762\u677F</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u5206\u4EAB\u9009\u9879</td>\n<td><em>Option[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u9876\u90E8\u6807\u9898</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel-text</td>\n<td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\uFF0C\u4F20\u5165\u7A7A\u5B57\u7B26\u4E32\u53EF\u4EE5\u9690\u85CF\u6309\u94AE</td>\n<td><em>string</em></td>\n<td><code>\'\u53D6\u6D88\'</code></td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u6807\u9898\u4E0B\u65B9\u7684\u8F85\u52A9\u63CF\u8FF0\u6587\u5B57</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>\u5C06\u9762\u677F\u7684 z-index \u5C42\u7EA7\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u56FA\u5B9A\u503C</td>\n<td><em>number | string</em></td>\n<td><code>2000+</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>\u662F\u5426\u663E\u793A\u5706\u89D2</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>overlay-class</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlay-style</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lock-scroll</td>\n<td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>\u662F\u5426\u5728\u663E\u793A\u5F39\u5C42\u65F6\u624D\u6E32\u67D3\u5185\u5BB9</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-popstate</td>\n<td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>\u662F\u5426\u5F00\u542F<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</a></td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-close</td>\n<td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td>\n<td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="option-shu-ju-jie-gou" tabindex="-1">Option \u6570\u636E\u7ED3\u6784</h3>\n<p><code>options</code> \u5C5E\u6027\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A</p>\n<table>\n<thead>\n<tr>\n<th>\u952E\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>\u5206\u4EAB\u6E20\u9053\u540D\u79F0</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u5206\u4EAB\u9009\u9879\u63CF\u8FF0</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u56FE\u6807\uFF0C\u53EF\u9009\u503C\u4E3A <code>wechat</code> <code>weibo</code> <code>qq</code> <code>link</code> <code>qrcode</code> <code>poster</code> <code>weapp-qrcode</code> <code>wechat-moments</code>\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u7247 URL</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>className</td>\n<td>\u5206\u4EAB\u9009\u9879\u7C7B\u540D</td>\n<td><em>string</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>select</td>\n<td>\u70B9\u51FB\u5206\u4EAB\u9009\u9879\u65F6\u89E6\u53D1</td>\n<td><em>option: Option, index: number</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>open</td>\n<td>\u6253\u5F00\u9762\u677F\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>\u5173\u95ED\u9762\u677F\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>\u6253\u5F00\u9762\u677F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>\u5173\u95ED\u9762\u677F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>click-overlay</td>\n<td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u9876\u90E8\u6807\u9898</td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u5B57</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">ShareSheetProps</span>,\n  <span class="hljs-title class_">ShareSheetOption</span>,\n  <span class="hljs-title class_">ShareSheetOptions</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-share-sheet-header-padding</td>\n<td><em>var(--van-padding-sm) var(--van-padding-md) var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-title-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-title-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-title-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-description-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-description-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-description-line-height</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-icon-size</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-option-name-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-option-name-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-option-description-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-option-description-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-cancel-button-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-cancel-button-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-cancel-button-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2>\n<div class="van-doc-card"><h3 id="ru-he-shi-xian-fen-xiang-luo-ji" tabindex="-1">\u5982\u4F55\u5B9E\u73B0\u5206\u4EAB\u903B\u8F91\uFF1F</h3>\n<p>\u5728\u4E0D\u540C\u7684 App \u6216\u6D4F\u89C8\u5668\u4E2D\uFF0C\u5B58\u5728\u5404\u5F0F\u5404\u6837\u7684\u5206\u4EAB\u63A5\u53E3\u6216\u5206\u4EAB\u65B9\u5F0F\uFF0C\u56E0\u6B64 ShareSheet \u7EC4\u4EF6\u4E0D\u63D0\u4F9B\u5177\u4F53\u7684\u5206\u4EAB\u903B\u8F91\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u6839\u636E\u4E1A\u52A1\u573A\u666F\u81EA\u884C\u5B9E\u73B0\u3002</p>\n<h4 id="wei-xin-nei-fen-xiang" tabindex="-1">\u5FAE\u4FE1\u5185\u5206\u4EAB</h4>\n<p>\u7531\u4E8E\u5FAE\u4FE1\u672A\u63D0\u4F9B\u5206\u4EAB\u76F8\u5173\u7684 API\uFF0C\u9700\u8981\u5F15\u5BFC\u7528\u6237\u70B9\u51FB\u53F3\u4E0A\u89D2\u8FDB\u884C\u5206\u4EAB\u3002</p>\n<h4 id="app-nei-fen-xiang" tabindex="-1">App \u5185\u5206\u4EAB</h4>\n<p>\u53EF\u4EE5\u901A\u8FC7 JSBridge \u8C03\u7528\u539F\u751F\u5E94\u7528\u7684 SDK \u8FDB\u884C\u5206\u4EAB\u3002</p>\n<h4 id="fen-xiang-hai-bao-huo-er-wei-ma" tabindex="-1">\u5206\u4EAB\u6D77\u62A5\u6216\u4E8C\u7EF4\u7801</h4>\n<p>\u53EF\u4EE5\u901A\u8FC7 <a href="#/zh-CN/popup" target="_blank">Popup</a> \u7EC4\u4EF6\u4EE5\u5F39\u5C42\u7684\u5F62\u5F0F\u5C55\u793A\u56FE\u7247\uFF0C\u7136\u540E\u5F15\u5BFC\u7528\u6237\u4FDD\u5B58\u56FE\u7247\u8FDB\u884C\u5206\u4EAB\u3002</p>\n</div>'},null,8,e))}}}]);