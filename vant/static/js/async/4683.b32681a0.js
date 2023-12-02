/*! For license information please see 4683.b32681a0.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4683"],{52976:function(s,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var n=t("5746"),e=t("35859"),d=(0,e.default)({},[["render",n.render]])},5746:function(s,a,t){"use strict";t.r(a);var n=t("62557");t.es(n,a)},62557:function(s,a,t){"use strict";t.r(a),t.d(a,{render:function(){return l}});var n=t("38613");let e={class:"van-doc-markdown-body"},d=[(0,n.createStaticVNode)('<h1>Image \u56FE\u7247</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u589E\u5F3A\u7248\u7684 img \u6807\u7B7E\uFF0C\u63D0\u4F9B\u591A\u79CD\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u652F\u6301\u56FE\u7247\u61D2\u52A0\u8F7D\u3001\u52A0\u8F7D\u4E2D\u63D0\u793A\u3001\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">VanImage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">VanImage</span>);\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u57FA\u7840\u7528\u6CD5\u4E0E\u539F\u751F <code>img</code> \u6807\u7B7E\u4E00\u81F4\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>src</code>\u3001<code>width</code>\u3001<code>height</code>\u3001<code>alt</code> \u7B49\u539F\u751F\u5C5E\u6027\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="tian-chong-mo-shi" tabindex="-1">\u586B\u5145\u6A21\u5F0F</h3><p>\u901A\u8FC7 <code>fit</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit" target="_blank">object-fit</a> \u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u89C1\u4E0B\u65B9\u8868\u683C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;contain&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="tu-pian-wei-zhi" tabindex="-1">\u56FE\u7247\u4F4D\u7F6E</h3><p>\u901A\u8FC7 <code>position</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u4F4D\u7F6E\uFF0C\u7ED3\u5408 <code>fit</code> \u5C5E\u6027\u4F7F\u7528\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position" target="_blank">object-position</a> \u5C5E\u6027\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;cover&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="yuan-xing-tu-pian" tabindex="-1">\u5706\u5F62\u56FE\u7247</h3><p>\u901A\u8FC7 <code>round</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u53D8\u5706\uFF0C\u6CE8\u610F\u5F53\u56FE\u7247\u5BBD\u9AD8\u4E0D\u76F8\u7B49\u4E14 <code>fit</code> \u4E3A <code>contain</code> \u6216 <code>scale-down</code> \u65F6\uFF0C\u5C06\u65E0\u6CD5\u586B\u5145\u4E00\u4E2A\u5B8C\u6574\u7684\u5706\u5F62\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">round</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="tu-pian-lan-jia-zai" tabindex="-1">\u56FE\u7247\u61D2\u52A0\u8F7D</h3><p>\u8BBE\u7F6E <code>lazy-load</code> \u5C5E\u6027\u6765\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u9700\u8981\u642D\u914D <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> \u7EC4\u4EF6\u4F7F\u7528\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">lazy-load</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);\n</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-zhong-ti-shi" tabindex="-1">\u52A0\u8F7D\u4E2D\u63D0\u793A</h3><p><code>Image</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u52A0\u8F7D\u4E2D\u63D0\u793A\uFF0C\u652F\u6301\u901A\u8FC7 <code>loading</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:loading</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;spinner&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-image</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-shi-bai-ti-shi" tabindex="-1">\u52A0\u8F7D\u5931\u8D25\u63D0\u793A</h3><p><code>Image</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\uFF0C\u652F\u6301\u901A\u8FC7 <code>error</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:error</span>&gt;</span>\u52A0\u8F7D\u5931\u8D25<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-image</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>src</td><td>\u56FE\u7247\u94FE\u63A5</td><td><em>string</em></td><td>-</td></tr><tr><td>fit</td><td>\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit" target="_blank">object-fit</a> \u5C5E\u6027</td><td><em>string</em></td><td><code>fill</code></td></tr><tr><td>position</td><td>\u56FE\u7247\u4F4D\u7F6E\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position" target="_blank">object-position</a> \u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A <code>top</code> <code>right</code> <code>bottom</code> <code>left</code> \u6216 <code>string</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>alt</td><td>\u66FF\u4EE3\u6587\u672C</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td>-</td></tr><tr><td>height</td><td>\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td>-</td></tr><tr><td>radius</td><td>\u5706\u89D2\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>round</td><td>\u662F\u5426\u663E\u793A\u4E3A\u5706\u5F62</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>block <code>3.6.3</code></td><td>\u662F\u5426\u5C06\u6839\u8282\u70B9\u8BBE\u7F6E\u4E3A\u5757\u7EA7\u5143\u7D20\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A <code>inline-block</code> \u5143\u7D20</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-load</td><td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u987B\u914D\u5408 <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> \u7EC4\u4EF6\u4F7F\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-error</td><td>\u662F\u5426\u5C55\u793A\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u63D0\u793A</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-loading</td><td>\u662F\u5426\u5C55\u793A\u56FE\u7247\u52A0\u8F7D\u4E2D\u63D0\u793A</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>error-icon</td><td>\u5931\u8D25\u65F6\u63D0\u793A\u7684\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td><code>photo-fail</code></td></tr><tr><td>loading-icon</td><td>\u52A0\u8F7D\u65F6\u63D0\u793A\u7684\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td><code>photo</code></td></tr><tr><td>icon-size</td><td>\u52A0\u8F7D\u56FE\u6807\u548C\u5931\u8D25\u56FE\u6807\u7684\u5927\u5C0F</td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>icon-prefix</td><td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tu-pian-tian-chong-mo-shi" tabindex="-1">\u56FE\u7247\u586B\u5145\u6A21\u5F0F</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>contain</td><td>\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u957F\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765</td></tr><tr><td>cover</td><td>\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u77ED\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\uFF0C\u88C1\u526A\u957F\u8FB9</td></tr><tr><td>fill</td><td>\u62C9\u4F38\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u586B\u6EE1\u5143\u7D20</td></tr><tr><td>none</td><td>\u4FDD\u6301\u56FE\u7247\u539F\u6709\u5C3A\u5BF8</td></tr><tr><td>scale-down</td><td>\u53D6 <code>none</code> \u6216 <code>contain</code> \u4E2D\u8F83\u5C0F\u7684\u4E00\u4E2A</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u56FE\u7247\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>load</td><td>\u56FE\u7247\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1</td><td><em>event: Event</em></td></tr><tr><td>error</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u56FE\u7247\u4E0B\u65B9\u7684\u5185\u5BB9</td></tr><tr><td>loading</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u7684\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u63D0\u793A\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ImageFit</span>, <span class="hljs-title class_">ImagePosition</span>, <span class="hljs-title class_">ImageProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-image-placeholder-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-image-placeholder-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-image-placeholder-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-image-loading-icon-size</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-image-loading-icon-color</td><td><em>var(--van-gray-4)</em></td><td>-</td></tr><tr><td>--van-image-error-icon-size</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-image-error-icon-color</td><td><em>var(--van-gray-4)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="ru-he-yin-yong-ben-di-tu-pian" tabindex="-1">\u5982\u4F55\u5F15\u7528\u672C\u5730\u56FE\u7247\uFF1F</h3><p>\u5728 .vue \u6587\u4EF6\u4E2D\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u5F15\u7528\u672C\u5730\u56FE\u7247\u65F6\uFF0C\u9700\u8981\u5728\u56FE\u7247\u7684\u94FE\u63A5\u5916\u5305\u4E0A\u4E00\u5C42 <code>require()</code>\uFF0C\u5C06\u56FE\u7247 URL \u8F6C\u6362\u4E3A webpack \u6A21\u5757\u8BF7\u6C42\uFF0C\u5E76\u7ED3\u5408 <a href="https://github.com/webpack-contrib/file-loader" target="_blank">file-loader</a> \u6216\u8005 <a href="https://github.com/webpack-contrib/url-loader" target="_blank">url-loader</a> \u8FDB\u884C\u5904\u7406\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u9519\u8BEF\u5199\u6CD5 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;./image.png&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- \u6B63\u786E\u5199\u6CD5 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;require(&#39;./image.png&#39;)&quot;</span> /&gt;</span>\n</code></pre><blockquote><p>\u5BF9\u6B64\u66F4\u8BE6\u7EC6\u7684\u89E3\u91CA\u53EF\u4EE5\u53C2\u8003 vue-loader \u7684<a href="https://vue-loader.vuejs.org/zh/guide/asset-url.html" target="_blank">\u5904\u7406\u8D44\u6E90\u8DEF\u5F84</a>\u7AE0\u8282\u3002</p></blockquote></div><div class="van-doc-card"><h3 id="shi-yong-image-biao-qian-wu-fa-xuan-ran" tabindex="-1">\u4F7F\u7528 image \u6807\u7B7E\u65E0\u6CD5\u6E32\u67D3\uFF1F</h3><p>\u4F7F\u7528 Image \u7EC4\u4EF6\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u5C06 &lt;image&gt; \u4F5C\u4E3A\u6807\u7B7E\u540D\u65F6\u65E0\u6CD5\u6E32\u67D3\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u5199\u6CD5\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;xxx&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    <span class="hljs-title class_">Image</span>,\n  },\n};\n&lt;script&gt;\n</span></code></pre><p>\u8FD9\u662F\u56E0\u4E3A &lt;image&gt; \u6807\u7B7E\u662F\u539F\u751F\u7684 SVG \u6807\u7B7E\uFF0CVue \u4E0D\u5141\u8BB8\u5C06\u539F\u751F\u6807\u7B7E\u540D\u6CE8\u518C\u4E3A\u7EC4\u4EF6\u540D\uFF0C\u4F7F\u7528 &lt;van-image&gt; \u5373\u53EF\u89C4\u907F\u8FD9\u4E2A\u95EE\u9898\u3002</p></div>',22)];function l(s,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",e,d)}}}]);