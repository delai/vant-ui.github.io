/*! For license information please see 3178.6ac8ee66.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3178"],{44123:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return p}});var t=a("36840");let l=["innerHTML"];var p={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useCountDown</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u63D0\u4F9B\u5012\u8BA1\u65F6\u7BA1\u7406\u80FD\u529B\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u603B\u65F6\u95F4\uFF1A{{ current.total }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u5929\u6570\uFF1A{{ current.days }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u5C0F\u65F6\uFF1A{{ current.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u5206\u949F\uFF1A{{ current.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u79D2\u6570\uFF1A{{ current.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u6BEB\u79D2\uFF1A{{ current.milliseconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({\n      <span class="hljs-comment">// \u5012\u8BA1\u65F6 24 \u5C0F\u65F6</span>\n      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,\n    });\n\n    <span class="hljs-comment">// \u5F00\u59CB\u5012\u8BA1\u65F6</span>\n    countDown.<span class="hljs-title function_">start</span>();\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="hao-miao-ji-xuan-ran" tabindex="-1">\u6BEB\u79D2\u7EA7\u6E32\u67D3</h3>\n<p>\u5012\u8BA1\u65F6\u9ED8\u8BA4\u6BCF\u79D2\u6E32\u67D3\u4E00\u6B21\uFF0C\u8BBE\u7F6E millisecond \u9009\u9879\u53EF\u4EE5\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({\n      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,\n      <span class="hljs-attr">millisecond</span>: <span class="hljs-literal">true</span>,\n    });\n    countDown.<span class="hljs-title function_">start</span>();\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">CurrentTime</span> = {\n  <span class="hljs-attr">days</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">hours</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">total</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">minutes</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">seconds</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">milliseconds</span>: <span class="hljs-built_in">number</span>;\n};\n\n<span class="hljs-keyword">type</span> <span class="hljs-title class_">CountDown</span> = {\n  <span class="hljs-attr">start</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;\n  <span class="hljs-attr">pause</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;\n  <span class="hljs-attr">reset</span>: <span class="hljs-function">(<span class="hljs-params">totalTime: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;\n  <span class="hljs-attr">current</span>: <span class="hljs-title class_">ComputedRef</span>&lt;<span class="hljs-title class_">CurrentTime</span>&gt;;\n};\n\n<span class="hljs-keyword">type</span> <span class="hljs-title class_">UseCountDownOptions</span> = {\n  <span class="hljs-attr">time</span>: <span class="hljs-built_in">number</span>;\n  millisecond?: <span class="hljs-built_in">boolean</span>;\n  onChange?: <span class="hljs-function">(<span class="hljs-params">current: CurrentTime</span>) =&gt;</span> <span class="hljs-built_in">void</span>;\n  onFinish?: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useCountDown</span>(<span class="hljs-params">options: UseCountDownOptions</span>): <span class="hljs-title class_">CountDown</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>time</td>\n<td>\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>millisecond</td>\n<td>\u662F\u5426\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u5012\u8BA1\u65F6\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td>\n<td><em>(current: CurrentTime) =&gt; void</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onFinish</td>\n<td>\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td>\n<td><em>() =&gt; void</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>current</td>\n<td>\u5F53\u524D\u5269\u4F59\u7684\u65F6\u95F4</td>\n<td><em>CurrentTime</em></td>\n</tr>\n<tr>\n<td>start</td>\n<td>\u5F00\u59CB\u5012\u8BA1\u65F6</td>\n<td><em>() =&gt; void</em></td>\n</tr>\n<tr>\n<td>pause</td>\n<td>\u6682\u505C\u5012\u8BA1\u65F6</td>\n<td><em>() =&gt; void</em></td>\n</tr>\n<tr>\n<td>reset</td>\n<td>\u91CD\u7F6E\u5012\u8BA1\u65F6\uFF0C\u652F\u6301\u4F20\u5165\u65B0\u7684\u5012\u8BA1\u65F6\u65F6\u957F</td>\n<td><em>(time?: number): void</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="currenttime-ge-shi" tabindex="-1">CurrentTime \u683C\u5F0F</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>total</td>\n<td>\u5269\u4F59\u603B\u65F6\u95F4\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>days</td>\n<td>\u5269\u4F59\u5929\u6570</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>hours</td>\n<td>\u5269\u4F59\u5C0F\u65F6</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>minutes</td>\n<td>\u5269\u4F59\u5206\u949F</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>seconds</td>\n<td>\u5269\u4F59\u79D2\u6570</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>milliseconds</td>\n<td>\u5269\u4F59\u6BEB\u79D2</td>\n<td><em>number</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);