/*! For license information please see 4371.01c16b01.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4371"],{52800:function(a,s,t){"use strict";t.r(s),t.d(s,{default:function(){return e}});var n=t("3452"),d=t("35859"),e=(0,d.default)({},[["render",n.render]])},3452:function(a,s,t){"use strict";t.r(s);var n=t("48054");t.es(n,s)},48054:function(a,s,t){"use strict";t.r(s),t.d(s,{render:function(){return l}});var n=t("38613");let d={class:"van-doc-markdown-body"},e=[(0,n.createStaticVNode)('<h1>Divider \u5206\u5272\u7EBF</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5C06\u5185\u5BB9\u5206\u9694\u4E3A\u591A\u4E2A\u533A\u57DF\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Divider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Divider</span>);\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u9ED8\u8BA4\u6E32\u67D3\u4E00\u6761\u6C34\u5E73\u5206\u5272\u7EBF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> /&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-wen-ben" tabindex="-1">\u5C55\u793A\u6587\u672C</h3><p>\u901A\u8FC7\u63D2\u69FD\u5728\u53EF\u4EE5\u5206\u5272\u7EBF\u4E2D\u95F4\u63D2\u5165\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span>&gt;</span>\u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="nei-rong-wei-zhi" tabindex="-1">\u5185\u5BB9\u4F4D\u7F6E</h3><p>\u901A\u8FC7 <code>content-position</code> \u6307\u5B9A\u5185\u5BB9\u6240\u5728\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">content-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">content-position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="xu-xian" tabindex="-1">\u865A\u7EBF</h3><p>\u6DFB\u52A0 <code>dashed</code> \u5C5E\u6027\u4F7F\u5206\u5272\u7EBF\u6E32\u67D3\u4E3A\u865A\u7EBF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">dashed</span>&gt;</span>\u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><p>\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 <code>style</code> \u5C5E\u6027\u8BBE\u7F6E\u5206\u5272\u7EBF\u7684\u6837\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ color: &#39;#1989fa&#39;, borderColor: &#39;#1989fa&#39;, padding: &#39;0 16px&#39; }&quot;</span>\n&gt;</span>\n  \u6587\u672C\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi" tabindex="-1">\u5782\u76F4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span>\n\u6587\u672C\n<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">dashed</span> /&gt;</span>\n\u6587\u672C\n<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">:hairline</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n\u6587\u672C\n<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ borderColor: &#39;#1989fa&#39; }&quot;</span> /&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dashed</td><td>\u662F\u5426\u4F7F\u7528\u865A\u7EBF</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>hairline</td><td>\u662F\u5426\u4F7F\u7528 0.5px \u7EBF</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>content-position</td><td>\u5185\u5BB9\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>vertical <code>v4.4.0</code></td><td>\u662F\u5426\u4F7F\u7528\u5782\u76F4</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DividerProps</span>, <span class="hljs-title class_">DividerContentPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-divider-margin</td><td><em>var(--van-padding-md) 0</em></td><td>-</td></tr><tr><td>--van-divider-vertical-margin</td><td><em>0 var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-divider-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-divider-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-divider-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-divider-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-divider-content-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-divider-content-left-width</td><td><em>10%</em></td><td>-</td></tr><tr><td>--van-divider-content-right-width</td><td><em>10%</em></td><td>-</td></tr></tbody></table></div>',16)];function l(a,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",d,e)}}}]);