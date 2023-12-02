/*! For license information please see 2972.4260ae19.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["2972"],{30179:function(s,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p}});var n=t("71735"),l=t("35859"),p=(0,l.default)({},[["render",n.render]])},71735:function(s,a,t){"use strict";t.r(a);var n=t("98686");t.es(n,a)},98686:function(s,a,t){"use strict";t.r(a),t.d(a,{render:function(){return e}});var n=t("38613");let l={class:"van-doc-markdown-body"},p=[(0,n.createStaticVNode)('<h1>Tabbar \u6807\u7B7E\u680F</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5E95\u90E8\u5BFC\u822A\u680F\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u9875\u9762\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabbar</span>, <span class="hljs-title class_">TabbarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabbar</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TabbarItem</span>);\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p><code>v-model</code> \u9ED8\u8BA4\u7ED1\u5B9A\u9009\u4E2D\u6807\u7B7E\u7684\u7D22\u5F15\u503C\uFF0C\u901A\u8FC7\u4FEE\u6539 <code>v-model</code> \u5373\u53EF\u5207\u6362\u9009\u4E2D\u7684\u6807\u7B7E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">return</span> { active };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="tong-guo-ming-cheng-pi-pei" tabindex="-1">\u901A\u8FC7\u540D\u79F0\u5339\u914D</h3><p>\u5728\u6807\u7B7E\u6307\u5B9A <code>name</code> \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\uFF0C<code>v-model</code> \u7684\u503C\u4E3A\u5F53\u524D\u6807\u7B7E\u7684 <code>name</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;friends&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;setting&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;home&#39;</span>);\n    <span class="hljs-keyword">return</span> { active };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">\u5FBD\u6807\u63D0\u793A</h3><p>\u8BBE\u7F6E <code>dot</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u4E00\u4E2A\u5C0F\u7EA2\u70B9\uFF1B\u8BBE\u7F6E <code>badge</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u76F8\u5E94\u7684\u5FBD\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">dot</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h3><p>\u901A\u8FC7 <code>icon</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>slot-scope</code> \u5224\u65AD\u6807\u7B7E\u662F\u5426\u9009\u4E2D\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u81EA\u5B9A\u4E49<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.active ? icon.active : icon.inactive&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> icon = {\n      <span class="hljs-attr">active</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,\n      <span class="hljs-attr">inactive</span>:\n        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,\n    };\n    <span class="hljs-keyword">return</span> {\n      icon,\n      active,\n    };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3><p>\u901A\u8FC7 <code>active-color</code> \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272\uFF0C\u901A\u8FC7 <code>inactive-color</code> \u5C5E\u6027\u8BBE\u7F6E\u672A\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-qie-huan-shi-jian" tabindex="-1">\u76D1\u542C\u5207\u6362\u4E8B\u4EF6</h3><p>\u901A\u8FC7 <code>change</code> \u4E8B\u4EF6\u6765\u76D1\u542C\u9009\u4E2D\u6807\u7B7E\u7684\u53D8\u5316\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>\u6807\u7B7E 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>\u6807\u7B7E 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>\u6807\u7B7E 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>\u6807\u7B7E 4<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">`\u6807\u7B7E <span class="hljs-subst">${index}</span>`</span>);\n    <span class="hljs-keyword">return</span> {\n      icon,\n      onChange,\n    };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="lu-you-mo-shi" tabindex="-1">\u8DEF\u7531\u6A21\u5F0F</h3><p>\u6807\u7B7E\u680F\u652F\u6301\u8DEF\u7531\u6A21\u5F0F\uFF0C\u7528\u4E8E\u642D\u914D Vue Router \u4F7F\u7528\u3002\u8DEF\u7531\u6A21\u5F0F\u4E0B\u4F1A\u5339\u914D\u9875\u9762\u8DEF\u5F84\u548C\u6807\u7B7E\u7684 <code>to</code> \u5C5E\u6027\uFF0C\u5E76\u81EA\u52A8\u9009\u4E2D\u5BF9\u5E94\u7684\u6807\u7B7E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">route</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">replace</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/home&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">replace</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/search&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="tabbar-props" tabindex="-1">Tabbar Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u6807\u7B7E\u7684\u540D\u79F0\u6216\u7D22\u5F15\u503C</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>fixed</td><td>\u662F\u5426\u56FA\u5B9A\u5728\u5E95\u90E8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>z-index</td><td>\u5143\u7D20 z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>active-color</td><td>\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>\u672A\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#7d7e80</code></td></tr><tr><td>route</td><td>\u662F\u5426\u5F00\u542F\u8DEF\u7531\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>\u56FA\u5B9A\u5728\u5E95\u90E8\u65F6\uFF0C\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>\u662F\u5426\u5F00\u542F<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</a>\uFF0C\u8BBE\u7F6E fixed \u65F6\u9ED8\u8BA4\u5F00\u542F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>before-change</td><td>\u5207\u6362\u6807\u7B7E\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5207\u6362\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td><td><em>(name: number | string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbar-events" tabindex="-1">Tabbar Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u6807\u7B7E\u65F6\u89E6\u53D1</td><td><em>active: number | string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbaritem-props" tabindex="-1">TabbarItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u6807\u7B7E\u540D\u79F0\uFF0C\u4F5C\u4E3A\u5339\u914D\u7684\u6807\u8BC6\u7B26</td><td><em>number | string</em></td><td>\u5F53\u524D\u6807\u7B7E\u7684\u7D22\u5F15\u503C</td></tr><tr><td>icon</td><td>\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>dot</td><td>\u662F\u5426\u663E\u793A\u56FE\u6807\u53F3\u4E0A\u89D2\u5C0F\u7EA2\u70B9</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props</td><td>\u81EA\u5B9A\u4E49\u5FBD\u6807\u7684\u5C5E\u6027\uFF0C\u4F20\u5165\u7684\u5BF9\u8C61\u4F1A\u88AB\u900F\u4F20\u7ED9 <a href="#/zh-CN/badge#props" target="_blank">Badge \u7EC4\u4EF6\u7684 props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>url</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61\uFF0C\u7B49\u540C\u4E8E Vue Router \u7684 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to \u5C5E\u6027</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbaritem-slots" tabindex="-1">TabbarItem Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td><em>active: boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabbarProps</span>, <span class="hljs-title class_">TabbarItemProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-tabbar-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-tabbar-z-index</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-tabbar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-active-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-active-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-line-height</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-tabbar-item-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-tabbar-item-icon-margin-bottom</td><td><em>var(--van-padding-base)</em></td><td>-</td></tr></tbody></table></div>',19)];function e(s,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,p)}}}]);