/*! For license information please see 7074.2543fed9.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7074"],{37868:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return e}});var t=a("36840");let d=["innerHTML"];var e={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Signature \u7B7E\u540D</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u7B7E\u540D\u573A\u666F\u7684\u7EC4\u4EF6\uFF0C\u57FA\u4E8E Canvas \u5B9E\u73B0\u3002\u8BF7\u5347\u7EA7 <code>vant</code> \u5230 &gt;= 4.3.0 \u7248\u672C\u6765\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Signature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Signature</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u5F53\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u89E6\u53D1 <code>submit</code> \u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A <code>data</code>\uFF0C\u5305\u542B\u4EE5\u4E0B\u5B57\u6BB5\uFF1A</p>\n<ul>\n<li><code>image</code>\uFF1A\u7B7E\u540D\u5BF9\u5E94\u7684\u56FE\u7247\uFF0C\u4E3A base64 \u5B57\u7B26\u4E32\u683C\u5F0F\u3002\u82E5\u7B7E\u540D\u4E3A\u7A7A\uFF0C\u5219\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002</li>\n<li><code>canvas</code>\uFF1ACanvas \u5143\u7D20\u3002</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> image = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">data</span>) =&gt; {\n      image.<span class="hljs-property">value</span> = data.<span class="hljs-property">image</span>;\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClear</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;clear&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      image,\n      onSubmit,\n      onClear,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3>\n<p>\u901A\u8FC7 <code>pen-color</code> \u6765\u81EA\u5B9A\u4E49\u7B14\u89E6\u989C\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">pen-color</span>=<span class="hljs-string">&quot;#ff0000&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-xian-kuan" tabindex="-1">\u81EA\u5B9A\u4E49\u7EBF\u5BBD</h3>\n<p>\u901A\u8FC7 <code>line-width</code> \u6765\u81EA\u5B9A\u4E49\u7EBF\u6761\u5BBD\u5EA6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">:line-width</span>=<span class="hljs-string">&quot;6&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-bei-jing-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272</h3>\n<p>\u901A\u8FC7 <code>background-color</code> \u6765\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">background-color</span>=<span class="hljs-string">&quot;#eee&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>\u5BFC\u51FA\u56FE\u7247\u7C7B\u578B</td>\n<td><em>string</em></td>\n<td><code>png</code></td>\n</tr>\n<tr>\n<td>pen-color</td>\n<td>\u7B14\u89E6\u989C\u8272\uFF0C\u9ED8\u8BA4\u9ED1\u8272</td>\n<td><em>string</em></td>\n<td><code>#000</code></td>\n</tr>\n<tr>\n<td>line-width</td>\n<td>\u7EBF\u6761\u5BBD\u5EA6</td>\n<td><em>number</em></td>\n<td><code>3</code></td>\n</tr>\n<tr>\n<td>background-color</td>\n<td>\u80CC\u666F\u989C\u8272</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tips</td>\n<td>\u5F53\u4E0D\u652F\u6301 Canvas \u7684\u65F6\u5019\u51FA\u73B0\u7684\u63D0\u793A\u6587\u6848</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>clear-button-text</td>\n<td>\u6E05\u9664\u6309\u94AE\u6587\u6848</td>\n<td><em>string</em></td>\n<td><code>\u6E05\u7A7A</code></td>\n</tr>\n<tr>\n<td>confirm-button-text</td>\n<td>\u786E\u8BA4\u6309\u94AE\u6587\u6848</td>\n<td><em>string</em></td>\n<td><code>\u786E\u8BA4</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>\u5F00\u59CB\u7B7E\u540D\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>end</td>\n<td>\u7ED3\u675F\u7B7E\u540D\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>signing</td>\n<td>\u7B7E\u540D\u8FC7\u7A0B\u4E2D\u89E6\u53D1</td>\n<td><em>event: TouchEvent</em></td>\n</tr>\n<tr>\n<td>submit</td>\n<td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td><em>data: { image: string; canvas: HTMLCanvasElement }</em></td>\n</tr>\n<tr>\n<td>clear</td>\n<td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Signature \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>resize <code>v4.7.3</code></td>\n<td>\u5916\u5C42\u5143\u7D20\u5927\u5C0F\u6216\u7EC4\u4EF6\u663E\u793A\u72B6\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u6765\u89E6\u53D1\u91CD\u7ED8</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SignatureProps</span>, <span class="hljs-title class_">SignatureInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>SignatureInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SignatureInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> signatureRef = ref&lt;<span class="hljs-title class_">SignatureInstance</span>&gt;();\n\nsignatureRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">resize</span>();\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-signature-padding</td>\n<td><em>var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-signature-content-height</td>\n<td><em>200px</em></td>\n<td>\u753B\u5E03\u9AD8\u5EA6</td>\n</tr>\n<tr>\n<td>--van-signature-content-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>\u753B\u5E03\u80CC\u666F\u8272</td>\n</tr>\n<tr>\n<td>--van-signature-content-border</td>\n<td><em>1px dotted #dadada</em></td>\n<td>\u753B\u5E03\u8FB9\u6846\u6837\u5F0F</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);