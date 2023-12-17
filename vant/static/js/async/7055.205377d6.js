/*! For license information please see 7055.205377d6.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7055"],{80720:function(t,s,d){"use strict";d.r(s),d.d(s,{default:function(){return e}});var a=d("99805"),n=d("35859"),e=(0,n.default)({},[["render",a.render]])},99805:function(t,s,d){"use strict";d.r(s);var a=d("35599");d.es(a,s)},35599:function(t,s,d){"use strict";d.r(s),d.d(s,{render:function(){return o}});var a=d("38613");let n={class:"van-doc-markdown-body"},e=[(0,a.createStaticVNode)('<h1>Dialog \u5F39\u51FA\u6846</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u6A21\u6001\u6846\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\uFF0C\u6216\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002\u652F\u6301\u7EC4\u4EF6\u8C03\u7528\u548C\u51FD\u6570\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);\n</code></pre></div><div class="van-doc-card"><h3 id="han-shu-diao-yong" tabindex="-1">\u51FD\u6570\u8C03\u7528</h3><p>\u4E3A\u4E86\u4FBF\u4E8E\u4F7F\u7528 <code>Dialog</code>\uFF0CVant \u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u8F85\u52A9\u51FD\u6570\uFF0C\u901A\u8FC7\u8F85\u52A9\u51FD\u6570\u53EF\u4EE5\u5FEB\u901F\u5524\u8D77\u5168\u5C40\u7684\u5F39\u7A97\u7EC4\u4EF6\u3002</p><p>\u6BD4\u5982\u4F7F\u7528 <code>showDialog</code> \u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u6E32\u67D3\u5BF9\u5E94\u7684\u5F39\u51FA\u6846\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-title function_">showDialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u63D0\u793A&#39;</span> });\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="xiao-xi-ti-shi" tabindex="-1">\u6D88\u606F\u63D0\u793A</h3><p>\u7528\u4E8E\u63D0\u793A\u4E00\u4E9B\u6D88\u606F\uFF0C\u9ED8\u8BA4\u53EA\u5305\u542B\u4E00\u4E2A\u786E\u8BA4\u6309\u94AE\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-title function_">showDialog</span>({\n  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u9898&#39;</span>,\n  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002&#39;</span>,\n}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {\n  <span class="hljs-comment">// on close</span>\n});\n\n<span class="hljs-title function_">showDialog</span>({\n  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002&#39;</span>,\n}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {\n  <span class="hljs-comment">// on close</span>\n});\n</code></pre></div><div class="van-doc-card"><h3 id="xiao-xi-que-ren" tabindex="-1">\u6D88\u606F\u786E\u8BA4</h3><p>\u7528\u4E8E\u786E\u8BA4\u6D88\u606F\uFF0C\u9ED8\u8BA4\u5305\u542B\u786E\u8BA4\u548C\u53D6\u6D88\u6309\u94AE\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showConfirmDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-title function_">showConfirmDialog</span>({\n  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u9898&#39;</span>,\n  <span class="hljs-attr">message</span>:\n    <span class="hljs-string">&#39;\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002&#39;</span>,\n})\n  .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-comment">// on confirm</span>\n  })\n  .<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-comment">// on cancel</span>\n  });\n</code></pre></div><div class="van-doc-card"><h3 id="yuan-jiao-an-niu-feng-ge" tabindex="-1">\u5706\u89D2\u6309\u94AE\u98CE\u683C</h3><p>\u5C06 theme \u9009\u9879\u8BBE\u7F6E\u4E3A <code>round-button</code> \u53EF\u4EE5\u5C55\u793A\u5706\u89D2\u6309\u94AE\u98CE\u683C\u7684\u5F39\u7A97\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-title function_">showDialog</span>({\n  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u9898&#39;</span>,\n  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002&#39;</span>,\n  <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;round-button&#39;</span>,\n}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {\n  <span class="hljs-comment">// on close</span>\n});\n\n<span class="hljs-title function_">showDialog</span>({\n  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002&#39;</span>,\n  <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;round-button&#39;</span>,\n}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {\n  <span class="hljs-comment">// on close</span>\n});\n</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-guan-bi" tabindex="-1">\u5F02\u6B65\u5173\u95ED</h3><p>\u901A\u8FC7 <code>beforeClose</code> \u5C5E\u6027\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u5F39\u7A97\u5173\u95ED\u524D\u8FDB\u884C\u7279\u5B9A\u64CD\u4F5C\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showConfirmDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeClose</span> = (<span class="hljs-params">action</span>) =&gt;\n  <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-comment">// action !== &#39;confirm&#39;  \u62E6\u622A\u53D6\u6D88\u64CD\u4F5C</span>\n      <span class="hljs-title function_">resolve</span>(action === <span class="hljs-string">&#39;confirm&#39;</span>);\n    }, <span class="hljs-number">1000</span>);\n  });\n\n<span class="hljs-title function_">showConfirmDialog</span>({\n  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u9898&#39;</span>,\n  <span class="hljs-attr">message</span>:\n    <span class="hljs-string">&#39;\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002&#39;</span>,\n  beforeClose,\n});\n</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-dialog-zu-jian" tabindex="-1">\u4F7F\u7528 Dialog \u7EC4\u4EF6</h3><p>\u5982\u679C\u4F60\u9700\u8981\u5728 Dialog \u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Dialog \u7EC4\u4EF6\uFF0C\u5E76\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u8FDB\u884C\u5B9A\u5236\u3002\u4F7F\u7528\u524D\u9700\u8981\u901A\u8FC7 <code>app.use</code> \u7B49\u65B9\u5F0F\u6CE8\u518C\u7EC4\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dialog</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">show-cancel-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dialog</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">return</span> { show };\n  },\n};\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>Vant \u4E2D\u5BFC\u51FA\u4E86\u4EE5\u4E0B Dialog \u76F8\u5173\u7684\u8F85\u52A9\u51FD\u6570\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>showDialog</td><td>\u5C55\u793A\u6D88\u606F\u63D0\u793A\u5F39\u7A97\uFF0C\u9ED8\u8BA4\u5305\u542B\u786E\u8BA4\u6309\u94AE</td><td><em>options: DialogOptions</em></td><td><code>Promise&lt;void&gt;</code></td></tr><tr><td>showConfirmDialog</td><td>\u5C55\u793A\u6D88\u606F\u786E\u8BA4\u5F39\u7A97\uFF0C\u9ED8\u8BA4\u5305\u542B\u786E\u8BA4\u548C\u53D6\u6D88\u6309\u94AE</td><td><em>options: DialogOptions</em></td><td><code>Promise&lt;void&gt;</code></td></tr><tr><td>closeDialog</td><td>\u5173\u95ED\u5F53\u524D\u5C55\u793A\u7684\u5F39\u7A97</td><td>-</td><td><code>void</code></td></tr><tr><td>setDialogDefaultOptions</td><td>\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5F71\u54CD\u6240\u6709\u7684 <code>showDialog</code> \u8C03\u7528</td><td><em>options: DialogOptions</em></td><td><code>void</code></td></tr><tr><td>resetDialogDefaultOptions</td><td>\u91CD\u7F6E\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5F71\u54CD\u6240\u6709\u7684 <code>showDialog</code> \u8C03\u7528</td><td>-</td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dialogoptions" tabindex="-1">DialogOptions</h3><p>\u8C03\u7528 <code>showDialog</code> \u7B49\u65B9\u6CD5\u65F6\uFF0C\u652F\u6301\u4F20\u5165\u4EE5\u4E0B\u9009\u9879\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>\u5F39\u7A97\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>320px</code></td></tr><tr><td>message</td><td>\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u901A\u8FC7 <code>\\n</code> \u6362\u884C</td><td><em>string | () =&gt; JSX.ELement</em></td><td>-</td></tr><tr><td>messageAlign</td><td>\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>theme</td><td>\u6837\u5F0F\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A <code>round-button</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>className</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>showConfirmButton</td><td>\u662F\u5426\u5C55\u793A\u786E\u8BA4\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>showCancelButton</td><td>\u662F\u5426\u5C55\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>confirmButtonText</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u6848</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td>confirmButtonColor</td><td>\u786E\u8BA4\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>confirmButtonDisabled</td><td>\u662F\u5426\u7981\u7528\u786E\u8BA4\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>cancelButtonText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>cancelButtonColor</td><td>\u53D6\u6D88\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td><code>black</code></td></tr><tr><td>cancelButtonDisabled</td><td>\u662F\u5426\u7981\u7528\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlayClass</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td><td><em>object</em></td><td>-</td></tr><tr><td>closeOnPopstate</td><td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>closeOnClickOverlay</td><td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u5F39\u7A97</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lockScroll</td><td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allowHtml</td><td>\u662F\u5426\u5141\u8BB8 message \u5185\u5BB9\u4E2D\u6E32\u67D3 HTML</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>beforeClose</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>transition</td><td>\u52A8\u753B\u7C7B\u540D\uFF0C\u7B49\u4EF7\u4E8E <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> \u7684 <code>name</code> \u5C5E\u6027</td><td><em>string</em></td><td>-</td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 <code>Dialog</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B Props\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:show</td><td>\u662F\u5426\u663E\u793A\u5F39\u7A97</td><td><em>boolean</em></td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>\u5F39\u7A97\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>320px</code></td></tr><tr><td>message</td><td>\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u901A\u8FC7 <code>\\n</code> \u6362\u884C</td><td><em>string | () =&gt; JSX.Element</em></td><td>-</td></tr><tr><td>message-align</td><td>\u5185\u5BB9\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>left</code> <code>right</code> <code>justify</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>theme</td><td>\u6837\u5F0F\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A <code>round-button</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>show-confirm-button</td><td>\u662F\u5426\u5C55\u793A\u786E\u8BA4\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-cancel-button</td><td>\u662F\u5426\u5C55\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u6848</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td>confirm-button-color</td><td>\u786E\u8BA4\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>confirm-button-disabled</td><td>\u662F\u5426\u7981\u7528\u786E\u8BA4\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>cancel-button-color</td><td>\u53D6\u6D88\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td><code>black</code></td></tr><tr><td>cancel-button-disabled</td><td>\u662F\u5426\u7981\u7528\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>z-index</td><td>\u5C06\u5F39\u7A97\u7684 z-index \u5C42\u7EA7\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u56FA\u5B9A\u503C</td><td><em>number | string</em></td><td><code>2000+</code></td></tr><tr><td>overlay</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay-class</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td><td><em>string</em></td><td>-</td></tr><tr><td>overlay-style</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td><td><em>object</em></td><td>-</td></tr><tr><td>close-on-popstate</td><td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u5F39\u7A97</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>\u662F\u5426\u5728\u663E\u793A\u5F39\u5C42\u65F6\u624D\u6E32\u67D3\u8282\u70B9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-html</td><td>\u662F\u5426\u5141\u8BB8 message \u5185\u5BB9\u4E2D\u6E32\u67D3 HTML</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>transition</td><td>\u52A8\u753B\u7C7B\u540D\uFF0C\u7B49\u4EF7\u4E8E <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> \u7684 <code>name</code> \u5C5E\u6027</td><td><em>string</em></td><td>-</td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 <code>Dialog</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B\u4E8B\u4EF6\uFF1A</p><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>open</td><td>\u6253\u5F00\u5F39\u7A97\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\u5F39\u7A97\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>opened</td><td>\u6253\u5F00\u5F39\u7A97\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>closed</td><td>\u5173\u95ED\u5F39\u7A97\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 <code>Dialog</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B\u63D2\u69FD\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u533A\u57DF</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">DialogProps</span>,\n  <span class="hljs-title class_">DialogTheme</span>,\n  <span class="hljs-title class_">DialogMessage</span>,\n  <span class="hljs-title class_">DialogOptions</span>,\n  <span class="hljs-title class_">DialogMessageAlign</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-dialog-width</td><td><em>320px</em></td><td>-</td></tr><tr><td>--van-dialog-small-screen-width</td><td><em>90%</em></td><td>-</td></tr><tr><td>--van-dialog-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-dialog-transition</td><td><em>var(--van-duration-base)</em></td><td>-</td></tr><tr><td>--van-dialog-radius</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-dialog-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-dialog-header-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-dialog-header-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-dialog-header-padding-top</td><td><em>26px</em></td><td>-</td></tr><tr><td>--van-dialog-header-isolated-padding</td><td><em>var(--van-padding-lg) 0</em></td><td>-</td></tr><tr><td>--van-dialog-message-padding</td><td><em>var(--van-padding-lg)</em></td><td>-</td></tr><tr><td>--van-dialog-message-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-dialog-message-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-dialog-message-max-height</td><td><em>60vh</em></td><td>-</td></tr><tr><td>--van-dialog-has-title-message-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-dialog-has-title-message-padding-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-dialog-button-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-dialog-round-button-height</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-dialog-confirm-button-text-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="yin-yong-showdialog-shi-chu-xian-bian-yi-bao-cuo" tabindex="-1">\u5F15\u7528 showDialog \u65F6\u51FA\u73B0\u7F16\u8BD1\u62A5\u9519\uFF1F</h3><p>\u5982\u679C\u5F15\u7528 <code>showDialog</code> \u65B9\u6CD5\u65F6\u51FA\u73B0\u4EE5\u4E0B\u62A5\u9519\uFF0C\u8BF4\u660E\u9879\u76EE\u4E2D\u4F7F\u7528\u4E86 <code>babel-plugin-import</code> \u63D2\u4EF6\uFF0C\u5BFC\u81F4\u4EE3\u7801\u88AB\u9519\u8BEF\u7F16\u8BD1\u3002</p><pre><code class="language-bash">These dependencies were not found:\n\n* vant/es/show-dialog <span class="hljs-keyword">in</span> ./src/xxx.js\n* vant/es/show-dialog/style <span class="hljs-keyword">in</span> ./src/xxx.js\n</code></pre><p>Vant \u4ECE 4.0 \u7248\u672C\u5F00\u59CB\u4E0D\u518D\u652F\u6301 <code>babel-plugin-import</code> \u63D2\u4EF6\uFF0C\u8BF7\u53C2\u8003 <a href="#/zh-CN/migrate-from-v3#yi-chu-babel-plugin-import" target="_blank">\u8FC1\u79FB\u6307\u5357</a> \u79FB\u9664\u8BE5\u63D2\u4EF6\u3002</p></div><div class="van-doc-card"><h3 id="zai-beforerouteleave-li-diao-yong-dialog-wu-fa-zhan-shi" tabindex="-1">\u5728 beforeRouteLeave \u91CC\u8C03\u7528 Dialog \u65E0\u6CD5\u5C55\u793A\uFF1F</h3><p>\u5C06 <code>closeOnPopstate</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A false \u5373\u53EF\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-title function_">showDialog</span>({\n  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u9898&#39;</span>,\n  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5F39\u7A97\u5185\u5BB9&#39;</span>,\n  <span class="hljs-attr">closeOnPopstate</span>: <span class="hljs-literal">false</span>,\n}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {\n  <span class="hljs-comment">// on close</span>\n});\n</code></pre></div>',22)];function o(t,s){return(0,a.openBlock)(),(0,a.createElementBlock)("div",n,e)}}}]);