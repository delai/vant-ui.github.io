/*! For license information please see 9688.fbe6136a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9688"],{39490:function(s,a,t){"use strict";t.r(a),t.d(a,{default:function(){return e}});var n=t("57793"),l=t("35859"),e=(0,l.default)({},[["render",n.render]])},57793:function(s,a,t){"use strict";t.r(a);var n=t("86713");t.es(n,a)},86713:function(s,a,t){"use strict";t.r(a),t.d(a,{render:function(){return d}});var n=t("38613");let l={class:"van-doc-markdown-body"},e=[(0,n.createStaticVNode)('<h1>NoticeBar \u901A\u77E5\u680F</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5FAA\u73AF\u64AD\u653E\u5C55\u793A\u4E00\u7EC4\u6D88\u606F\u901A\u77E5\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NoticeBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NoticeBar</span>);\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code>text</code> \u5C5E\u6027\u8BBE\u7F6E\u901A\u77E5\u680F\u7684\u5185\u5BB9\uFF0C\u901A\u8FC7 <code>left-icon</code> \u5C5E\u6027\u8BBE\u7F6E\u901A\u77E5\u680F\u5DE6\u4FA7\u7684\u56FE\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span>\n  <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;volume-o&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u65E0\u8BBA\u6211\u4EEC\u80FD\u6D3B\u591A\u4E45\uFF0C\u6211\u4EEC\u80FD\u591F\u4EAB\u53D7\u7684\u53EA\u6709\u65E0\u6CD5\u5206\u5272\u7684\u6B64\u523B\uFF0C\u6B64\u5916\u522B\u65E0\u5176\u4ED6\u3002&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="gun-dong-bo-fang" tabindex="-1">\u6EDA\u52A8\u64AD\u653E</h3><p>\u901A\u77E5\u680F\u7684\u5185\u5BB9\u957F\u5EA6\u6EA2\u51FA\u65F6\u4F1A\u81EA\u52A8\u5F00\u542F\u6EDA\u52A8\u64AD\u653E\uFF0C\u901A\u8FC7 <code>scrollable</code> \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u8BE5\u884C\u4E3A\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u6587\u5B57\u8F83\u77ED\u65F6\uFF0C\u901A\u8FC7\u8BBE\u7F6E scrollable \u5C5E\u6027\u5F00\u542F\u6EDA\u52A8\u64AD\u653E --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">scrollable</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u7C73\u888B\u867D\u7A7A\u2014\u2014\u6A31\u82B1\u5F00\u54C9\uFF01&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- \u6587\u5B57\u8F83\u957F\u65F6\uFF0C\u901A\u8FC7\u7981\u7528 scrollable \u5C5E\u6027\u5173\u95ED\u6EDA\u52A8\u64AD\u653E --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span>\n  <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u4E0D\u4F1A\u56DE\u5934\u7684\u4E1C\u897F\u6709\u56DB\u4EF6\uFF1A\u8BF4\u51FA\u53E3\u7684\u8BDD\u3001\u79BB\u5F26\u7684\u7BAD\u3001\u901D\u53BB\u7684\u751F\u6D3B\u548C\u5931\u53BB\u7684\u673A\u4F1A\u3002&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="duo-xing-zhan-shi" tabindex="-1">\u591A\u884C\u5C55\u793A</h3><p>\u6587\u5B57\u8F83\u957F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>wrapable</code> \u5C5E\u6027\u6765\u5F00\u542F\u591A\u884C\u5C55\u793A\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span>\n  <span class="hljs-attr">wrapable</span>\n  <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u4E0D\u4F1A\u56DE\u5934\u7684\u4E1C\u897F\u6709\u56DB\u4EF6\uFF1A\u8BF4\u51FA\u53E3\u7684\u8BDD\u3001\u79BB\u5F26\u7684\u7BAD\u3001\u901D\u53BB\u7684\u751F\u6D3B\u548C\u5931\u53BB\u7684\u673A\u4F1A\u3002&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="tong-zhi-lan-mo-shi" tabindex="-1">\u901A\u77E5\u680F\u6A21\u5F0F</h3><p>\u901A\u77E5\u680F\u652F\u6301 <code>closeable</code> \u548C <code>link</code> \u4E24\u79CD\u6A21\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- closeable \u6A21\u5F0F\uFF0C\u5728\u53F3\u4FA7\u663E\u793A\u5173\u95ED\u6309\u94AE --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;closeable&quot;</span>&gt;</span>\u7C73\u888B\u867D\u7A7A\u2014\u2014\u6A31\u82B1\u5F00\u54C9\uFF01<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- link \u6A21\u5F0F\uFF0C\u5728\u53F3\u4FA7\u663E\u793A\u94FE\u63A5\u7BAD\u5934 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;link&quot;</span>&gt;</span>\u7C73\u888B\u867D\u7A7A\u2014\u2014\u6A31\u82B1\u5F00\u54C9\uFF01<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><p>\u901A\u8FC7 <code>color</code> \u5C5E\u6027\u8BBE\u7F6E\u6587\u672C\u989C\u8272\uFF0C\u901A\u8FC7 <code>background</code> \u5C5E\u6027\u8BBE\u7F6E\u80CC\u666F\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#ecf9ff&quot;</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;info-o&quot;</span>&gt;</span>\n  \u7C73\u888B\u867D\u7A7A\u2014\u2014\u6A31\u82B1\u5F00\u54C9\uFF01\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi-gun-dong" tabindex="-1">\u5782\u76F4\u6EDA\u52A8</h3><p>\u642D\u914D NoticeBar \u548C Swipe \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5782\u76F4\u6EDA\u52A8\u7684\u6548\u679C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;volume-o&quot;</span> <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>\n    <span class="hljs-attr">vertical</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-swipe&quot;</span>\n    <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span>\n    <span class="hljs-attr">:touchable</span>=<span class="hljs-string">&quot;false&quot;</span>\n    <span class="hljs-attr">:show-indicators</span>=<span class="hljs-string">&quot;false&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>\u660E\u6708\u76F4\u5165\uFF0C\u65E0\u5FC3\u53EF\u731C\u3002<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>\u4ED9\u4EBA\u629A\u6211\u9876\uFF0C\u7ED3\u53D1\u53D7\u957F\u751F\u3002<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>\u4ECA\u4EBA\u4E0D\u89C1\u53E4\u65F6\u6708\uFF0C\u4ECA\u6708\u66FE\u7ECF\u7167\u53E4\u4EBA\u3002<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.notice-swipe</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">40px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>mode</td><td>\u901A\u77E5\u680F\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>closeable</code> <code>link</code></td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>text</td><td>\u901A\u77E5\u6587\u672C\u5185\u5BB9</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>color</td><td>\u901A\u77E5\u6587\u672C\u989C\u8272</td><td><em>string</em></td><td><code>#ed6a0c</code></td></tr><tr><td>background</td><td>\u6EDA\u52A8\u6761\u80CC\u666F</td><td><em>string</em></td><td><code>#fffbe8</code></td></tr><tr><td>left-icon</td><td>\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td>-</td></tr><tr><td>delay</td><td>\u52A8\u753B\u5EF6\u8FDF\u65F6\u95F4 (s)</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>speed</td><td>\u6EDA\u52A8\u901F\u7387 (px/s)</td><td><em>number | string</em></td><td><code>60</code></td></tr><tr><td>scrollable</td><td>\u662F\u5426\u5F00\u542F\u6EDA\u52A8\u64AD\u653E\uFF0C\u5185\u5BB9\u957F\u5EA6\u6EA2\u51FA\u65F6\u9ED8\u8BA4\u5F00\u542F</td><td><em>boolean</em></td><td>-</td></tr><tr><td>wrapable</td><td>\u662F\u5426\u5F00\u542F\u6587\u672C\u6362\u884C\uFF0C\u53EA\u5728\u7981\u7528\u6EDA\u52A8\u65F6\u751F\u6548</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u901A\u77E5\u680F\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>close</td><td>\u5173\u95ED\u901A\u77E5\u680F\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>replay</td><td>\u6BCF\u5F53\u6EDA\u52A8\u680F\u91CD\u65B0\u5F00\u59CB\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 NoticeBar \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>reset</td><td>\u91CD\u7F6E\u901A\u77E5\u680F\u5230\u521D\u59CB\u72B6\u6001</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NoticeBarMode</span>, <span class="hljs-title class_">NoticeBarProps</span>, <span class="hljs-title class_">NoticeBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre><p><code>NoticeBarInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NoticeBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> noticeBarRef = ref&lt;<span class="hljs-title class_">NoticeBarInstance</span>&gt;();\n\nnoticeBarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">reset</span>();\n</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u5185\u5BB9</th></tr></thead><tbody><tr><td>default</td><td>\u901A\u77E5\u6587\u672C\u5185\u5BB9</td></tr><tr><td>left-icon</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u56FE\u6807</td></tr><tr><td>right-icon</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-notice-bar-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-notice-bar-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-wrapable-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-text-color</td><td><em>var(--van-orange-dark)</em></td><td>-</td></tr><tr><td>--van-notice-bar-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-notice-bar-background</td><td><em>var(--van-orange-light)</em></td><td>-</td></tr><tr><td>--van-notice-bar-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-notice-bar-icon-min-width</td><td><em>24px</em></td><td>-</td></tr></tbody></table></div>',18)];function d(s,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,e)}}}]);