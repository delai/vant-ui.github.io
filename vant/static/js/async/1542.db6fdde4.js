/*! For license information please see 1542.db6fdde4.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1542"],{96503:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return d}});var t=a("36840");let e=["innerHTML"];var d={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Rate \u8BC4\u5206</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u5BF9\u4E8B\u7269\u8FDB\u884C\u8BC4\u7EA7\u64CD\u4F5C\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Rate</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Rate</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u901A\u8FC7 <code>v-model</code> \u6765\u7ED1\u5B9A\u5F53\u524D\u8BC4\u5206\u503C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h3>\n<p>\u901A\u8FC7 <code>icon</code> \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u65F6\u7684\u56FE\u6807\uFF0C<code>void-icon</code> \u5C5E\u6027\u8BBE\u7F6E\u672A\u9009\u4E2D\u65F6\u7684\u56FE\u6807\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;like&quot;</span> <span class="hljs-attr">void-icon</span>=<span class="hljs-string">&quot;like-o&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F</h3>\n<p>\u901A\u8FC7 <code>size</code> \u5C5E\u6027\u8BBE\u7F6E\u56FE\u6807\u5927\u5C0F\uFF0C<code>color</code> \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u65F6\u7684\u989C\u8272\uFF0C<code>void-color</code> \u8BBE\u7F6E\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;25&quot;</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffd21e&quot;</span>\n  <span class="hljs-attr">void-icon</span>=<span class="hljs-string">&quot;star&quot;</span>\n  <span class="hljs-attr">void-color</span>=<span class="hljs-string">&quot;#eee&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ban-xing" tabindex="-1">\u534A\u661F</h3>\n<p>\u8BBE\u7F6E <code>allow-half</code> \u5C5E\u6027\u540E\u53EF\u4EE5\u9009\u4E2D\u534A\u661F\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">allow-half</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">2.5</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-shu-liang" tabindex="-1">\u81EA\u5B9A\u4E49\u6570\u91CF</h3>\n<p>\u901A\u8FC7 <code>count</code> \u5C5E\u6027\u8BBE\u7F6E\u8BC4\u5206\u603B\u6570\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ke-qing-kong" tabindex="-1">\u53EF\u6E05\u7A7A</h3>\n<p>\u5F53 <code>clearable</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>true</code>\uFF0C\u518D\u6B21\u70B9\u51FB\u76F8\u540C\u7684\u503C\u65F6\uFF0C\u53EF\u4EE5\u5C06\u503C\u91CD\u7F6E\u4E3A <code>0</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">clearable</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h3>\n<p>\u901A\u8FC7 <code>disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u8BC4\u5206\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhi-du-zhuang-tai" tabindex="-1">\u53EA\u8BFB\u72B6\u6001</h3>\n<p>\u901A\u8FC7 <code>readonly</code> \u5C5E\u6027\u5C06\u8BC4\u5206\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhi-du-zhuang-tai-xian-shi-xiao-shu" tabindex="-1">\u53EA\u8BFB\u72B6\u6001\u663E\u793A\u5C0F\u6570</h3>\n<p>\u8BBE\u7F6E <code>readonly</code> \u548C <code>allow-half</code> \u5C5E\u6027\u540E\uFF0CRate \u7EC4\u4EF6\u53EF\u4EE5\u5C55\u793A\u4EFB\u610F\u5C0F\u6570\u7ED3\u679C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">allow-half</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3.3</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jian-ting-change-shi-jian" tabindex="-1">\u76D1\u542C change \u4E8B\u4EF6</h3>\n<p>\u8BC4\u5206\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>change</code> \u4E8B\u4EF6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;\u5F53\u524D\u503C\uFF1A&#x27;</span> + value);\n    <span class="hljs-keyword">return</span> {\n      value,\n      onChange,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>\u5F53\u524D\u5206\u503C</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>count</td>\n<td>\u56FE\u6807\u603B\u6570</td>\n<td><em>number | string</em></td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>gutter</td>\n<td>\u56FE\u6807\u95F4\u8DDD\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>4px</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>\u9009\u4E2D\u65F6\u7684\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#ee0a24</code></td>\n</tr>\n<tr>\n<td>void-color</td>\n<td>\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#c8c9cc</code></td>\n</tr>\n<tr>\n<td>disabled-color</td>\n<td>\u7981\u7528\u65F6\u7684\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#c8c9cc</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u9009\u4E2D\u65F6\u7684\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>star</code></td>\n</tr>\n<tr>\n<td>void-icon</td>\n<td>\u672A\u9009\u4E2D\u65F6\u7684\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>star-o</code></td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>allow-half</td>\n<td>\u662F\u5426\u5141\u8BB8\u534A\u9009</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clearable <code>v4.6.0</code></td>\n<td>\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u4FEE\u6539\u8BC4\u5206</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u8BC4\u5206</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>touchable</td>\n<td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6ED1\u52A8\u624B\u52BF\u9009\u62E9\u8BC4\u5206</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>\u5F53\u524D\u5206\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td>\n<td><em>currentValue: number</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RateProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-rate-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-rate-icon-gutter</td>\n<td><em>var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-rate-icon-void-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-rate-icon-full-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-rate-icon-disabled-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);