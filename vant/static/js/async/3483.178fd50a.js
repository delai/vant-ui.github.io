/*! For license information please see 3483.178fd50a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3483"],{52075:function(s,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a("8734"),d=a("35859"),l=(0,d.default)({},[["render",n.render]])},8734:function(s,t,a){"use strict";a.r(t);var n=a("38782");a.es(n,t)},38782:function(s,t,a){"use strict";a.r(t),a.d(t,{render:function(){return e}});var n=a("38613");let d={class:"van-doc-markdown-body"},l=[(0,n.createStaticVNode)('<h1>NavBar \u5BFC\u822A\u680F</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u4E3A\u9875\u9762\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\uFF0C\u5E38\u7528\u4E8E\u9875\u9762\u9876\u90E8\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NavBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NavBar</span>);\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code>title</code> \u5C5E\u6027\u8BBE\u7F6E\u5BFC\u822A\u680F\u6807\u9898\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> /&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="fan-hui-shang-ji" tabindex="-1">\u8FD4\u56DE\u4E0A\u7EA7</h3><p>\u5728\u5BFC\u822A\u680F\u5B9E\u73B0\u8FD4\u56DE\u4E0A\u7EA7\u529F\u80FD\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>\n  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;\u8FD4\u56DE&quot;</span>\n  <span class="hljs-attr">left-arrow</span>\n  @<span class="hljs-attr">click-left</span>=<span class="hljs-string">&quot;onClickLeft&quot;</span>\n/&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickLeft</span> = (<span class="hljs-params"></span>) =&gt; history.<span class="hljs-title function_">back</span>();\n    <span class="hljs-keyword">return</span> {\n      onClickLeft,\n    };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="you-ce-an-niu" tabindex="-1">\u53F3\u4FA7\u6309\u94AE</h3><p>\u5728\u5BFC\u822A\u680F\u53F3\u4FA7\u6DFB\u52A0\u53EF\u70B9\u51FB\u7684\u6309\u94AE\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>\n  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;\u8FD4\u56DE&quot;</span>\n  <span class="hljs-attr">right-text</span>=<span class="hljs-string">&quot;\u6309\u94AE&quot;</span>\n  <span class="hljs-attr">left-arrow</span>\n  @<span class="hljs-attr">click-left</span>=<span class="hljs-string">&quot;onClickLeft&quot;</span>\n  @<span class="hljs-attr">click-right</span>=<span class="hljs-string">&quot;onClickRight&quot;</span>\n/&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickLeft</span> = (<span class="hljs-params"></span>) =&gt; history.<span class="hljs-title function_">back</span>();\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickRight</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;\u6309\u94AE&#39;</span>);\n    <span class="hljs-keyword">return</span> {\n      onClickLeft,\n      onClickRight,\n    };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-cha-cao" tabindex="-1">\u4F7F\u7528\u63D2\u69FD</h3><p>\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u4E24\u4FA7\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;\u8FD4\u56DE&quot;</span> <span class="hljs-attr">left-arrow</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;18&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-nav-bar</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-an-niu" tabindex="-1">\u7981\u7528\u6309\u94AE</h3><p>\u901A\u8FC7 <code>left-disabled</code> \u6216 <code>right-disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u4E24\u4FA7\u7684\u6309\u94AE\u3002\u6309\u94AE\u88AB\u7981\u7528\u65F6\u900F\u660E\u5EA6\u964D\u4F4E\uFF0C\u4E14\u65E0\u6CD5\u70B9\u51FB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>\n  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;\u8FD4\u56DE&quot;</span>\n  <span class="hljs-attr">right-text</span>=<span class="hljs-string">&quot;\u6309\u94AE&quot;</span>\n  <span class="hljs-attr">left-arrow</span>\n  <span class="hljs-attr">left-disabled</span>\n  <span class="hljs-attr">right-disabled</span>\n/&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>left-text</td><td>\u5DE6\u4FA7\u6587\u6848</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>right-text</td><td>\u53F3\u4FA7\u6587\u6848</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>left-disabled <code>v4.6.8</code></td><td>\u662F\u5426\u7981\u7528\u5DE6\u4FA7\u6309\u94AE\uFF0C\u7981\u7528\u65F6\u900F\u660E\u5EA6\u964D\u4F4E\uFF0C\u4E14\u65E0\u6CD5\u70B9\u51FB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>right-disabled <code>v4.6.8</code></td><td>\u662F\u5426\u7981\u7528\u53F3\u4FA7\u6309\u94AE\uFF0C\u7981\u7528\u65F6\u900F\u660E\u5EA6\u964D\u4F4E\uFF0C\u4E14\u65E0\u6CD5\u70B9\u51FB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>left-arrow</td><td>\u662F\u5426\u663E\u793A\u5DE6\u4FA7\u7BAD\u5934</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>fixed</td><td>\u662F\u5426\u56FA\u5B9A\u5728\u9876\u90E8</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>\u56FA\u5B9A\u5728\u9876\u90E8\u65F6\uFF0C\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>z-index</td><td>\u5BFC\u822A\u680F z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>safe-area-inset-top</td><td>\u662F\u5426\u5F00\u542F<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">\u9876\u90E8\u5B89\u5168\u533A\u9002\u914D</a></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clickable</td><td>\u662F\u5426\u5F00\u542F\u4E24\u4FA7\u6309\u94AE\u7684\u70B9\u51FB\u53CD\u9988</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>left</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u533A\u57DF\u5185\u5BB9</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click-left</td><td>\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-right</td><td>\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NavBarProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-nav-bar-height</td><td><em>46px</em></td><td>-</td></tr><tr><td>--van-nav-bar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-nav-bar-arrow-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-nav-bar-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-text-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-nav-bar-title-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-z-index</td><td><em>1</em></td><td>-</td></tr></tbody></table></div>',16)];function e(s,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",d,l)}}}]);