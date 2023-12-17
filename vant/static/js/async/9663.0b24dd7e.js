/*! For license information please see 9663.0b24dd7e.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9663"],{38566:function(t,d,s){"use strict";s.r(d),s.d(d,{default:function(){return e}});var a=s("88796"),n=s("35859"),e=(0,n.default)({},[["render",a.render]])},88796:function(t,d,s){"use strict";s.r(d);var a=s("1273");s.es(a,d)},1273:function(t,d,s){"use strict";s.r(d),s.d(d,{render:function(){return c}});var a=s("38613");let n={class:"van-doc-markdown-body"},e=[(0,a.createStaticVNode)('<h1>\u56FD\u9645\u5316</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>Vant \u91C7\u7528\u4E2D\u6587\u4F5C\u4E3A\u9ED8\u8BA4\u8BED\u8A00\uFF0C\u540C\u65F6\u652F\u6301\u591A\u8BED\u8A00\u5207\u6362\uFF0C\u8BF7\u6309\u7167\u4E0B\u65B9\u6559\u7A0B\u8FDB\u884C\u56FD\u9645\u5316\u8BBE\u7F6E\u3002</p></div><h2 id="shi-yong-fang-fa" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5</h2><div class="van-doc-card"><h3 id="duo-yu-yan-qie-huan" tabindex="-1">\u591A\u8BED\u8A00\u5207\u6362</h3><p>Vant \u901A\u8FC7 Locale \u7EC4\u4EF6\u5B9E\u73B0\u591A\u8BED\u8A00\u652F\u6301\uFF0C\u4F7F\u7528 <code>Locale.use</code> \u65B9\u6CD5\u53EF\u4EE5\u5207\u6362\u5F53\u524D\u4F7F\u7528\u7684\u8BED\u8A00\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Locale</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n<span class="hljs-comment">// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305</span>\n<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant/es/locale/lang/en-US&#39;</span>;\n\n<span class="hljs-title class_">Locale</span>.<span class="hljs-title function_">use</span>(<span class="hljs-string">&#39;en-US&#39;</span>, enUS);\n</code></pre></div><div class="van-doc-card"><h3 id="fu-gai-yu-yan-bao" tabindex="-1">\u8986\u76D6\u8BED\u8A00\u5305</h3><p>\u901A\u8FC7 <code>Locale.add</code> \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u6587\u6848\u7684\u4FEE\u6539\u548C\u6269\u5C55\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Locale</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> messages = {\n  <span class="hljs-string">&#39;zh-CN&#39;</span>: {\n    <span class="hljs-attr">vanPicker</span>: {\n      <span class="hljs-attr">confirm</span>: <span class="hljs-string">&#39;\u5173\u95ED&#39;</span>, <span class="hljs-comment">// \u5C06&#39;\u786E\u8BA4&#39;\u4FEE\u6539\u4E3A&#39;\u5173\u95ED&#39;</span>\n    },\n  },\n};\n\n<span class="hljs-title class_">Locale</span>.<span class="hljs-title function_">add</span>(messages);\n</code></pre></div><div class="van-doc-card"><h3 id="yu-yan-bao" tabindex="-1">\u8BED\u8A00\u5305</h3><p>\u76EE\u524D\u652F\u6301\u7684\u8BED\u8A00:</p><table><thead><tr><th>\u8BED\u8A00</th><th>\u6587\u4EF6\u540D</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>\u963F\u62C9\u4F2F\u8BED</td><td>ar-SA</td><td><code>v3.5.0</code></td></tr><tr><td>\u4FDD\u52A0\u5229\u4E9A\u8BED</td><td>bg-BG</td><td><code>v3.5.0</code></td></tr><tr><td>\u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09</td><td>bn-BD</td><td><code>v3.4.5</code></td></tr><tr><td>\u4E39\u9EA6\u8BED</td><td>da-DK</td><td><code>v3.4.8</code></td></tr><tr><td>\u5FB7\u8BED</td><td>de-DE</td><td>-</td></tr><tr><td>\u5FB7\u8BED\uFF08\u6B63\u5F0F\uFF09</td><td>de-DE-formal</td><td>-</td></tr><tr><td>\u5E0C\u814A\u8BED</td><td>el-GR</td><td><code>v3.5.0</code></td></tr><tr><td>\u82F1\u8BED</td><td>en-US</td><td>-</td></tr><tr><td>\u4E16\u754C\u8BED</td><td>eo-EO</td><td><code>v4.0.9</code></td></tr><tr><td>\u897F\u73ED\u7259\u8BED</td><td>es-ES</td><td>-</td></tr><tr><td>\u6CE2\u65AF\u8BED</td><td>fa-IR</td><td><code>v3.5.0</code></td></tr><tr><td>\u6CD5\u8BED</td><td>fr-FR</td><td>-</td></tr><tr><td>\u5E0C\u4F2F\u6765\u8BED</td><td>he-IL</td><td><code>v3.5.0</code></td></tr><tr><td>\u5370\u5730\u8BED</td><td>hi-IN</td><td><code>v3.4.3</code></td></tr><tr><td>\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED</td><td>id-ID</td><td><code>v3.4.5</code></td></tr><tr><td>\u51B0\u5C9B\u8BED</td><td>is-IS</td><td><code>v3.4.7</code></td></tr><tr><td>\u610F\u5927\u5229\u8BED</td><td>it-IT</td><td><code>v3.4.5</code></td></tr><tr><td>\u65E5\u8BED</td><td>ja-JP</td><td>-</td></tr><tr><td>\u9AD8\u68C9\u8BED</td><td>km-KH</td><td><code>v4.1.2</code></td></tr><tr><td>\u97E9\u8BED/\u671D\u9C9C\u8BED</td><td>ko-KR</td><td><code>v3.4.3</code></td></tr><tr><td>\u8001\u631D\u8BED</td><td>la-LA</td><td><code>v3.4.7</code></td></tr><tr><td>\u8499\u53E4\u8BED</td><td>mm-MN</td><td><code>v4.0.5</code></td></tr><tr><td>\u632A\u5A01\u8BED</td><td>nb-NO</td><td>-</td></tr><tr><td>\u8377\u5170\u8BED</td><td>nl-NL</td><td><code>v4.0.5</code></td></tr><tr><td>\u8461\u8404\u7259\u8BED\uFF08\u5DF4\u897F\uFF09</td><td>pt-BR</td><td><code>v3.3.3</code></td></tr><tr><td>\u7F57\u9A6C\u5C3C\u4E9A\u8BED</td><td>ro-RO</td><td>-</td></tr><tr><td>\u4FC4\u7F57\u65AF\u8BED</td><td>ru-RU</td><td><code>v3.1.5</code></td></tr><tr><td>\u585E\u5C14\u7EF4\u4E9A\u8BED</td><td>sr-RS</td><td><code>v4.6.4</code></td></tr><tr><td>\u745E\u5178\u8BED</td><td>sv-SE</td><td><code>v3.4.7</code></td></tr><tr><td>\u6CF0\u8BED</td><td>th-TH</td><td>-</td></tr><tr><td>\u571F\u8033\u5176\u8BED</td><td>tr-TR</td><td>-</td></tr><tr><td>\u4E4C\u514B\u5170\u8BED</td><td>uk-UA</td><td><code>v3.4.5</code></td></tr><tr><td>\u8D8A\u5357\u8BED</td><td>vi-VN</td><td><code>v3.4.5</code></td></tr><tr><td>\u7B80\u4F53\u4E2D\u6587</td><td>zh-CN</td><td>-</td></tr><tr><td>\u7E41\u9AD4\u4E2D\u6587\uFF08\u6E2F\uFF09</td><td>zh-HK</td><td>-</td></tr><tr><td>\u7E41\u9AD4\u4E2D\u6587\uFF08\u53F0\uFF09</td><td>zh-TW</td><td>-</td></tr></tbody></table><blockquote><p>\u5728 <a href="https://github.com/vant-ui/vant/tree/main/packages/vant/src/locale/lang" target="_blank">\u8FD9\u91CC</a> \u67E5\u770B\u6240\u6709\u7684\u8BED\u8A00\u5305\u6E90\u6587\u4EF6\u3002</p></blockquote></div><div class="van-doc-card"><h3 id="huo-qu-dang-qian-yu-yan" tabindex="-1">\u83B7\u53D6\u5F53\u524D\u8BED\u8A00</h3><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>useCurrentLang</code> \u65B9\u6CD5\u6765\u83B7\u53D6\u5F53\u524D\u4F7F\u7528\u7684\u8BED\u8A00\u3002</p><ul><li><strong>\u7C7B\u578B\uFF1A</strong></li></ul><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useCurrentLang</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">string</span>&gt;;\n</code></pre><ul><li><strong>\u793A\u4F8B\uFF1A</strong></li></ul><pre><code class="language-ts"><span class="hljs-keyword">import</span> { useCurrentLang } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> currentLang = <span class="hljs-title function_">useCurrentLang</span>();\n\n<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(currentLang.<span class="hljs-property">value</span>); <span class="hljs-comment">// --&gt; &#39;zh-CN&#39;</span>\n</code></pre></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="zhao-bu-dao-suo-xu-de-yu-yan-bao" tabindex="-1">\u627E\u4E0D\u5230\u6240\u9700\u7684\u8BED\u8A00\u5305\uFF1F</h3><p>\u5982\u679C\u4E0A\u65B9\u5217\u8868\u4E2D\u6CA1\u6709\u4F60\u9700\u8981\u7684\u8BED\u8A00\uFF0C\u6B22\u8FCE\u7ED9\u6211\u4EEC\u63D0 Pull Request \u6765\u589E\u52A0\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u6539\u52A8\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003<a href="https://github.com/vant-ui/vant/pull/7245" target="_blank">\u589E\u52A0\u5FB7\u8BED\u8BED\u8A00\u5305</a> \u7684 PR\u3002</p></div><div class="van-doc-card"><h3 id="ye-wu-dai-ma-ru-he-shi-xian-guo-ji-hua" tabindex="-1">\u4E1A\u52A1\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\u56FD\u9645\u5316\uFF1F</h3><p>\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/kazupon/vue-i18n" target="_blank">vue-i18n</a> \u6765\u5B9E\u73B0\u3002</p></div><div class="van-doc-card"><h3 id="yi-cdn-xing-shi-yin-ru-shi-ru-he-shi-yong-yu-yan-bao" tabindex="-1">\u4EE5 CDN \u5F62\u5F0F\u5F15\u5165\u65F6\uFF0C\u5982\u4F55\u4F7F\u7528\u8BED\u8A00\u5305\uFF1F</h3><p>\u76EE\u524D\u6CA1\u6709\u63D0\u4F9B CDN \u5F62\u5F0F\u7684\u8BED\u8A00\u5305\uFF0C\u53EF\u4EE5\u624B\u52A8\u62F7\u8D1D\u8BED\u8A00\u5305\u7684\u5185\u5BB9\u6765\u4F7F\u7528\u3002</p></div><div class="van-doc-card"><h3 id="yu-yan-bao-zhong-bu-bao-han-sku-zu-jian" tabindex="-1">\u8BED\u8A00\u5305\u4E2D\u4E0D\u5305\u542B Sku \u7EC4\u4EF6\uFF1F</h3><p>\u8BED\u8A00\u5305\u4E2D\u9ED8\u8BA4\u4E0D\u5305\u542B Sku \u4E1A\u52A1\u7EC4\u4EF6\u7684\u8BED\u8A00\u914D\u7F6E\uFF0C\u56E0\u6B64\u5982\u679C\u6709 Sku \u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u9700\u6C42\uFF0C\u8BF7\u81EA\u884C\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002</p></div>',12)];function c(t,d){return(0,a.openBlock)(),(0,a.createElementBlock)("div",n,e)}}}]);