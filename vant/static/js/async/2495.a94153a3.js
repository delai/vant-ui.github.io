/*! For license information please see 2495.a94153a3.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["2495"],{92395:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return e}});var t=n("36840");let l=["innerHTML"];var e={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Tab \u6807\u7B7E\u9875</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u9009\u9879\u5361\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u7684\u5185\u5BB9\u533A\u57DF\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tab</span>, <span class="hljs-title class_">Tabs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tab</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabs</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u901A\u8FC7 <code>v-model:active</code> \u7ED1\u5B9A\u5F53\u524D\u6FC0\u6D3B\u6807\u7B7E\u5BF9\u5E94\u7684\u7D22\u5F15\u503C\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u542F\u7528\u7B2C\u4E00\u4E2A\u6807\u7B7E\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 1&quot;</span>&gt;</span>\u5185\u5BB9 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 2&quot;</span>&gt;</span>\u5185\u5BB9 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 3&quot;</span>&gt;</span>\u5185\u5BB9 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 4&quot;</span>&gt;</span>\u5185\u5BB9 4<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">return</span> { active };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tong-guo-ming-cheng-pi-pei" tabindex="-1">\u901A\u8FC7\u540D\u79F0\u5339\u914D</h3>\n<p>\u5728\u6807\u7B7E\u6307\u5B9A <code>name</code> \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\uFF0C<code>v-model:active</code> \u7684\u503C\u4E3A\u5F53\u524D\u6807\u7B7E\u7684 <code>name</code>\uFF08\u6B64\u65F6\u65E0\u6CD5\u901A\u8FC7\u7D22\u5F15\u503C\u6765\u5339\u914D\u6807\u7B7E\uFF09\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>\u5185\u5BB9 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>\u5185\u5BB9 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>\u5185\u5BB9 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> activeName = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;b&#x27;</span>);\n    <span class="hljs-keyword">return</span> { activeName };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="biao-qian-lan-gun-dong" tabindex="-1">\u6807\u7B7E\u680F\u6EDA\u52A8</h3>\n<p>\u6807\u7B7E\u6570\u91CF\u8D85\u8FC7 5 \u4E2A\u65F6\uFF0C\u6807\u7B7E\u680F\u53EF\u4EE5\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u6EDA\u52A8\uFF0C\u5207\u6362\u65F6\u4F1A\u81EA\u52A8\u5C06\u5F53\u524D\u6807\u7B7E\u5C45\u4E2D\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 8&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;\u6807\u7B7E &#x27; + index&quot;</span>&gt;</span>\n    \u5185\u5BB9 {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-yong-biao-qian" tabindex="-1">\u7981\u7528\u6807\u7B7E</h3>\n<p>\u8BBE\u7F6E <code>disabled</code> \u5C5E\u6027\u5373\u53EF\u7981\u7528\u6807\u7B7E\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 1&quot;</span>&gt;</span>\u5185\u5BB9 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u5185\u5BB9 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 3&quot;</span>&gt;</span>\u5185\u5BB9 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yang-shi-feng-ge" tabindex="-1">\u6837\u5F0F\u98CE\u683C</h3>\n<p><code>Tab</code> \u652F\u6301\u4E24\u79CD\u6837\u5F0F\u98CE\u683C\uFF1A<code>line</code> \u548C<code>card</code>\uFF0C\u9ED8\u8BA4\u4E3A <code>line</code> \u6837\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>type</code> \u5C5E\u6027\u5207\u6362\u6837\u5F0F\u98CE\u683C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 1&quot;</span>&gt;</span>\u5185\u5BB9 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 2&quot;</span>&gt;</span>\u5185\u5BB9 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 3&quot;</span>&gt;</span>\u5185\u5BB9 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="dian-ji-shi-jian" tabindex="-1">\u70B9\u51FB\u4E8B\u4EF6</h3>\n<p>\u70B9\u51FB\u6807\u7B7E\u9875\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>click-tab</code> \u4E8B\u4EF6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">click-tab</span>=<span class="hljs-string">&quot;onClickTab&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 1&quot;</span>&gt;</span>\u5185\u5BB9 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u7B7E 2&quot;</span>&gt;</span>\u5185\u5BB9 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickTab</span> = (<span class="hljs-params">{ title }</span>) =&gt; <span class="hljs-title function_">showToast</span>(title);\n    <span class="hljs-keyword">return</span> {\n      active,\n      onClickTab,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="nian-xing-bu-ju" tabindex="-1">\u7C98\u6027\u5E03\u5C40</h3>\n<p>\u901A\u8FC7 <code>sticky</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u7C98\u6027\u5E03\u5C40\uFF0C\u7C98\u6027\u5E03\u5C40\u4E0B\uFF0C\u6807\u7B7E\u9875\u6EDA\u52A8\u5230\u9876\u90E8\u65F6\u4F1A\u81EA\u52A8\u5438\u9876\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">sticky</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;\u9009\u9879 &#x27; + index&quot;</span>&gt;</span>\n    \u5185\u5BB9 {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<blockquote>\n<p>Tips: \u5982\u679C\u9875\u9762\u9876\u90E8\u6709\u5176\u4ED6\u5185\u5BB9\uFF0C\u53EF\u4EE5\u901A\u8FC7 offset-top \u5C5E\u6027\u8BBE\u7F6E\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="shou-suo-bu-ju" tabindex="-1">\u6536\u7F29\u5E03\u5C40</h3>\n<p>\u901A\u8FC7 <code>shrink</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6536\u7F29\u5E03\u5C40\uFF0C\u5F00\u542F\u540E\uFF0C\u6240\u6709\u7684\u6807\u7B7E\u4F1A\u5411\u5DE6\u4FA7\u6536\u7F29\u5BF9\u9F50\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">shrink</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;\u9009\u9879 &#x27; + index&quot;</span>&gt;</span>\n    \u5185\u5BB9 {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-biao-qian" tabindex="-1">\u81EA\u5B9A\u4E49\u6807\u7B7E</h3>\n<p>\u901A\u8FC7 <code>title</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;more-o&quot;</span> /&gt;</span>\u9009\u9879 <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    \u5185\u5BB9 {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="qie-huan-dong-hua" tabindex="-1">\u5207\u6362\u52A8\u753B</h3>\n<p>\u901A\u8FC7 <code>animated</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u5207\u6362\u6807\u7B7E\u5185\u5BB9\u65F6\u7684\u8F6C\u573A\u52A8\u753B\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">animated</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;\u9009\u9879 &#x27; + index&quot;</span>&gt;</span>\n    \u5185\u5BB9 {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="hua-dong-qie-huan" tabindex="-1">\u6ED1\u52A8\u5207\u6362</h3>\n<p>\u901A\u8FC7 <code>swipeable</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6ED1\u52A8\u5207\u6362\u6807\u7B7E\u9875\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">swipeable</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;\u9009\u9879 &#x27; + index&quot;</span>&gt;</span>\n    \u5185\u5BB9 {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="gun-dong-dao-hang" tabindex="-1">\u6EDA\u52A8\u5BFC\u822A</h3>\n<p>\u901A\u8FC7 <code>scrollspy</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6EDA\u52A8\u5BFC\u822A\u6A21\u5F0F\uFF0C\u8BE5\u6A21\u5F0F\u4E0B\uFF0C\u5185\u5BB9\u5C06\u4F1A\u5E73\u94FA\u5C55\u793A\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">scrollspy</span> <span class="hljs-attr">sticky</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 8&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;\u9009\u9879 &#x27; + index&quot;</span>&gt;</span>\n    \u5185\u5BB9 {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yi-bu-qie-huan" tabindex="-1">\u5F02\u6B65\u5207\u6362</h3>\n<p>\u901A\u8FC7 <code>before-change</code> \u5C5E\u6027\u53EF\u4EE5\u5728\u5207\u6362\u6807\u7B7E\u524D\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">:before-change</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;\u9009\u9879 &#x27; + index&quot;</span>&gt;</span>\n    \u5185\u5BB9 {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeChange</span> = (<span class="hljs-params">index</span>) =&gt; {\n      <span class="hljs-comment">// \u8FD4\u56DE false \u8868\u793A\u963B\u6B62\u6B64\u6B21\u5207\u6362</span>\n      <span class="hljs-keyword">if</span> (index === <span class="hljs-number">1</span>) {\n        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n      }\n\n      <span class="hljs-comment">// \u8FD4\u56DE Promise \u6765\u6267\u884C\u5F02\u6B65\u903B\u8F91</span>\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n        <span class="hljs-comment">// \u5728 resolve \u51FD\u6570\u4E2D\u8FD4\u56DE true \u6216 false</span>\n        <span class="hljs-title function_">resolve</span>(index !== <span class="hljs-number">3</span>);\n      });\n    };\n\n    <span class="hljs-keyword">return</span> {\n      beforeChange,\n    };\n  },\n};\n</code></pre>\n<blockquote>\n<p>Tips: \u901A\u8FC7\u624B\u52BF\u6ED1\u52A8\u4E0D\u4F1A\u89E6\u53D1 before-change \u5C5E\u6027\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="yin-cang-biao-ti-lan" tabindex="-1">\u9690\u85CF\u6807\u9898\u680F</h3>\n<p>\u901A\u8FC7\u5C06 <code>showHeader</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u53EF\u4EE5\u4E0D\u6E32\u67D3 Tabs \u7684\u6807\u9898\u680F\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6765\u63A7\u5236 Tabs \u7684 <code>active</code> \u5C5E\u6027\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">:show-header</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span>&gt;</span> \u5185\u5BB9 {{ index }} <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="tabs-props" tabindex="-1">Tabs Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:active</td>\n<td>\u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u6807\u7B7E\u7684\u6807\u8BC6\u7B26</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>\u6837\u5F0F\u98CE\u683C\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>card</code></td>\n<td><em>string</em></td>\n<td><code>line</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>\u6807\u7B7E\u4E3B\u9898\u8272</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>\u6807\u7B7E\u680F\u80CC\u666F\u8272</td>\n<td><em>string</em></td>\n<td><code>white</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>line-width</td>\n<td>\u5E95\u90E8\u6761\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>40px</code></td>\n</tr>\n<tr>\n<td>line-height</td>\n<td>\u5E95\u90E8\u6761\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>3px</code></td>\n</tr>\n<tr>\n<td>animated</td>\n<td>\u662F\u5426\u5F00\u542F\u5207\u6362\u6807\u7B7E\u5185\u5BB9\u65F6\u7684\u8F6C\u573A\u52A8\u753B</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>\u662F\u5426\u663E\u793A\u6807\u7B7E\u680F\u5916\u8FB9\u6846\uFF0C\u4EC5\u5728 <code>type=&quot;line&quot;</code> \u65F6\u6709\u6548</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>ellipsis</td>\n<td>\u662F\u5426\u7701\u7565\u8FC7\u957F\u7684\u6807\u9898\u6587\u5B57</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>sticky</td>\n<td>\u662F\u5426\u4F7F\u7528\u7C98\u6027\u5E03\u5C40</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>shrink</td>\n<td>\u662F\u5426\u5F00\u542F\u5DE6\u4FA7\u6536\u7F29\u5E03\u5C40</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td>\u662F\u5426\u5F00\u542F\u624B\u52BF\u5DE6\u53F3\u6ED1\u52A8\u5207\u6362</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>\u662F\u5426\u5F00\u542F\u5EF6\u8FDF\u6E32\u67D3\uFF08\u9996\u6B21\u5207\u6362\u5230\u6807\u7B7E\u65F6\u624D\u89E6\u53D1\u5185\u5BB9\u6E32\u67D3\uFF09</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>scrollspy</td>\n<td>\u662F\u5426\u5F00\u542F\u6EDA\u52A8\u5BFC\u822A</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-header <code>v4.7.3</code></td>\n<td>\u662F\u5426\u663E\u793A\u6807\u9898\u680F</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>offset-top</td>\n<td>\u7C98\u6027\u5E03\u5C40\u4E0B\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\uFF0C\u652F\u6301 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> \u5355\u4F4D\uFF0C\u9ED8\u8BA4 <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>swipe-threshold</td>\n<td>\u6EDA\u52A8\u9608\u503C\uFF0C\u6807\u7B7E\u6570\u91CF\u8D85\u8FC7\u9608\u503C\u4E14\u603B\u5BBD\u5EA6\u8D85\u8FC7\u6807\u7B7E\u680F\u5BBD\u5EA6\u65F6\u5F00\u59CB\u6A2A\u5411\u6EDA\u52A8</td>\n<td><em>number | string</em></td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td>title-active-color</td>\n<td>\u6807\u9898\u9009\u4E2D\u6001\u989C\u8272</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title-inactive-color</td>\n<td>\u6807\u9898\u9ED8\u8BA4\u6001\u989C\u8272</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-change</td>\n<td>\u5207\u6362\u6807\u7B7E\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5207\u6362\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td>\n<td><em>(name: number | string) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="tab-props" tabindex="-1">Tab Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u6807\u9898</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u6807\u7B7E</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>\u662F\u5426\u5728\u6807\u9898\u53F3\u4E0A\u89D2\u663E\u793A\u5C0F\u7EA2\u70B9</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>badge</td>\n<td>\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>name</td>\n<td>\u6807\u7B7E\u540D\u79F0\uFF0C\u4F5C\u4E3A\u5339\u914D\u7684\u6807\u8BC6\u7B26</td>\n<td><em>number | string</em></td>\n<td>\u6807\u7B7E\u7684\u7D22\u5F15\u503C</td>\n</tr>\n<tr>\n<td>url</td>\n<td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>to</td>\n<td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61\uFF0C\u7B49\u540C\u4E8E Vue Router \u7684 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>replace</td>\n<td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>title-style</td>\n<td>\u81EA\u5B9A\u4E49\u6807\u9898\u6837\u5F0F</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>\u81EA\u5B9A\u4E49\u6807\u9898\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>show-zero-badge</td>\n<td>\u5F53 badge \u4E3A\u6570\u5B57 0 \u65F6\uFF0C\u662F\u5426\u5C55\u793A\u5FBD\u6807</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="tabs-events" tabindex="-1">Tabs Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click-tab</td>\n<td>\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1</td>\n<td><em>{ name: string | number, title: string, event: MouseEvent, disabled: boolean }</em></td>\n</tr>\n<tr>\n<td>change</td>\n<td>\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u6539\u53D8\u65F6\u89E6\u53D1</td>\n<td><em>name: string | number, title: string</em></td>\n</tr>\n<tr>\n<td>rendered</td>\n<td>\u6807\u7B7E\u5185\u5BB9\u9996\u6B21\u6E32\u67D3\u65F6\u89E6\u53D1\uFF08\u4EC5\u5728\u5F00\u542F\u5EF6\u8FDF\u6E32\u67D3\u540E\u89E6\u53D1\uFF09</td>\n<td><em>name: string | number, title: string</em></td>\n</tr>\n<tr>\n<td>scroll</td>\n<td>\u6EDA\u52A8\u65F6\u89E6\u53D1\uFF0C\u4EC5\u5728 sticky \u6A21\u5F0F\u4E0B\u751F\u6548</td>\n<td><em>{ scrollTop: number, isFixed: boolean }</em></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>\u63D0\u793A\uFF1Aclick \u548C disabled \u4E8B\u4EF6\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 click-tab \u4E8B\u4EF6\u4EE3\u66FF\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="tabs-fang-fa" tabindex="-1">Tabs \u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Tabs \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>resize</td>\n<td>\u5916\u5C42\u5143\u7D20\u5927\u5C0F\u6216\u7EC4\u4EF6\u663E\u793A\u72B6\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u6765\u89E6\u53D1\u91CD\u7ED8</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>scrollTo</td>\n<td>\u6EDA\u52A8\u5230\u6307\u5B9A\u7684\u6807\u7B7E\u9875\uFF0C\u5728\u6EDA\u52A8\u5BFC\u822A\u6A21\u5F0F\u4E0B\u53EF\u7528</td>\n<td><em>name: string | number</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabProps</span>, <span class="hljs-title class_">TabsType</span>, <span class="hljs-title class_">TabsProps</span>, <span class="hljs-title class_">TabsInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>TabsInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabsInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> tabsRef = ref&lt;<span class="hljs-title class_">TabsInstance</span>&gt;();\n\ntabsRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">scrollTo</span>(<span class="hljs-number">0</span>);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tabs-slots" tabindex="-1">Tabs Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>nav-left</td>\n<td>\u6807\u7B7E\u680F\u5DE6\u4FA7\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>nav-right</td>\n<td>\u6807\u7B7E\u680F\u53F3\u4FA7\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>nav-bottom</td>\n<td>\u6807\u7B7E\u680F\u4E0B\u65B9\u5185\u5BB9</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="tab-slots" tabindex="-1">Tab Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u6807\u7B7E\u9875\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u6807\u9898</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-tab-text-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tab-active-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tab-disabled-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tab-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tab-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-default-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-line-height</td>\n<td><em>44px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-card-height</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-nav-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-bottom-bar-width</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-bottom-bar-height</td>\n<td><em>3px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-bottom-bar-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2>\n<div class="van-doc-card"><h3 id="zu-jian-cong-yin-cang-zhuang-tai-qie-huan-dao-xian-shi-zhuang-tai-shi-di-bu-tiao-wei-zhi-cuo-wu" tabindex="-1">\u7EC4\u4EF6\u4ECE\u9690\u85CF\u72B6\u6001\u5207\u6362\u5230\u663E\u793A\u72B6\u6001\u65F6\uFF0C\u5E95\u90E8\u6761\u4F4D\u7F6E\u9519\u8BEF\uFF1F</h3>\n<p>Tabs \u7EC4\u4EF6\u5728\u6302\u8F7D\u65F6\uFF0C\u4F1A\u83B7\u53D6\u81EA\u8EAB\u7684\u5BBD\u5EA6\uFF0C\u5E76\u8BA1\u7B97\u51FA\u5E95\u90E8\u6761\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u7EC4\u4EF6\u4E00\u5F00\u59CB\u5904\u4E8E\u9690\u85CF\u72B6\u6001\uFF0C\u5219\u83B7\u53D6\u5230\u7684\u5BBD\u5EA6\u6C38\u8FDC\u4E3A 0\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5C55\u793A\u5E95\u90E8\u6761\u4F4D\u7F6E\u3002</p>\n<h4 id="jie-jue-fang-fa" tabindex="-1">\u89E3\u51B3\u65B9\u6CD5</h4>\n<p>\u65B9\u6CD5\u4E00\uFF0C\u5982\u679C\u662F\u4F7F\u7528 <code>v-show</code> \u6765\u63A7\u5236\u7EC4\u4EF6\u5C55\u793A\u7684\uFF0C\u5219\u66FF\u6362\u4E3A <code>v-if</code> \u5373\u53EF\u89E3\u51B3\u6B64\u95EE\u9898\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- Before --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>\n<span class="hljs-comment">&lt;!-- After --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>\n</code></pre>\n<p>\u65B9\u6CD5\u4E8C\uFF0C\u8C03\u7528\u7EC4\u4EF6\u7684 resize \u65B9\u6CD5\u6765\u4E3B\u52A8\u89E6\u53D1\u91CD\u7ED8\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tabs&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">tabs</span>.<span class="hljs-title function_">resize</span>();\n</code></pre>\n</div>'},null,8,l))}}}]);