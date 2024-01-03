/*! For license information please see 467.e854376d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["467"],{35909:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return p}});var t=a("36840");let l=["innerHTML"];var p={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Picker \u9009\u62E9\u5668</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u3001\u591A\u5217\u9009\u62E9\u548C\u7EA7\u8054\u9009\u62E9\uFF0C\u901A\u5E38\u4E0E<a href="#/zh-CN/popup" target="_blank">\u5F39\u51FA\u5C42</a>\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<h4 id="xuan-xiang-pei-zhi" tabindex="-1">\u9009\u9879\u914D\u7F6E</h4>\n<p>Picker \u7EC4\u4EF6\u901A\u8FC7 <code>columns</code> \u5C5E\u6027\u914D\u7F6E\u9009\u9879\u6570\u636E\uFF0C<code>columns</code> \u662F\u4E00\u4E2A\u5305\u542B\u5B57\u7B26\u4E32\u6216\u5BF9\u8C61\u7684\u6570\u7EC4\u3002</p>\n<h4 id="ding-bu-lan" tabindex="-1">\u9876\u90E8\u680F</h4>\n<p>\u9876\u90E8\u680F\u5305\u542B\u6807\u9898\u3001\u786E\u8BA4\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1 <code>confirm</code> \u4E8B\u4EF6\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u89E6\u53D1 <code>cancel</code> \u4E8B\u4EF6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>\n  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>\n  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>\n  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> columns = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u676D\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Hangzhou&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5B81\u6CE2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Ningbo&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6E29\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Wenzhou&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u7ECD\u5174&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Shaoxing&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6E56\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Huzhou&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">{ selectedValues }</span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">`\u5F53\u524D\u503C: <span class="hljs-subst">${selectedValues.join(<span class="hljs-string">&#x27;,&#x27;</span>)}</span>`</span>);\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">{ selectedValues }</span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">`\u5F53\u524D\u503C: <span class="hljs-subst">${selectedValues.join(<span class="hljs-string">&#x27;,&#x27;</span>)}</span>`</span>);\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      columns,\n      onChange,\n      onCancel,\n      onConfirm,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="da-pei-dan-chu-ceng-shi-yong" tabindex="-1">\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528</h3>\n<p>\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0CPicker \u901A\u5E38\u4F5C\u4E3A\u7528\u4E8E\u8F85\u52A9\u8868\u5355\u586B\u5199\uFF0C\u53EF\u4EE5\u642D\u914D Popup \u548C Field \u5B9E\u73B0\u8BE5\u6548\u679C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>\n  <span class="hljs-attr">is-link</span>\n  <span class="hljs-attr">readonly</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u9009\u62E9\u57CE\u5E02&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>\n    <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>\n    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>\n    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> columns = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u676D\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Hangzhou&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5B81\u6CE2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Ningbo&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6E29\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Wenzhou&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u7ECD\u5174&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Shaoxing&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6E56\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Huzhou&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {\n      showPicker.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      fieldValue.<span class="hljs-property">value</span> = selectedOptions[<span class="hljs-number">0</span>].<span class="hljs-property">text</span>;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      columns,\n      onConfirm,\n      fieldValue,\n      showPicker,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shuang-xiang-bang-ding" tabindex="-1">\u53CC\u5411\u7ED1\u5B9A</h3>\n<p>\u901A\u8FC7 <code>v-model</code> \u53EF\u4EE5\u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u9879\u7684 <code>values</code>\uFF0C\u4FEE\u6539 <code>v-model</code> \u7ED1\u5B9A\u7684\u503C\u65F6\uFF0CPicker \u7684\u9009\u4E2D\u72B6\u6001\u4E5F\u4F1A\u968F\u4E4B\u6539\u53D8\u3002</p>\n<p><code>v-model</code> \u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u7B2C\u4E00\u4F4D\u5BF9\u5E94\u7B2C\u4E00\u5217\u9009\u4E2D\u9879\u7684 <code>value</code>\uFF0C\u7B2C\u4E8C\u4F4D\u5BF9\u5E94\u7B2C\u4E8C\u5217\u9009\u4E2D\u9879\u7684 <code>value</code>\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selectedValues&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> columns = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u676D\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Hangzhou&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5B81\u6CE2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Ningbo&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6E29\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Wenzhou&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u7ECD\u5174&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Shaoxing&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6E56\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Huzhou&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> selectedValues = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;Wenzhou&#x27;</span>]);\n\n    <span class="hljs-keyword">return</span> {\n      columns,\n      selectedValues,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="duo-lie-xuan-ze" tabindex="-1">\u591A\u5217\u9009\u62E9</h3>\n<p><code>columns</code> \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u4E8C\u7EF4\u6570\u7EC4\u7684\u5F62\u5F0F\u914D\u7F6E\u591A\u5217\u9009\u62E9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> columns = [\n      <span class="hljs-comment">// \u7B2C\u4E00\u5217</span>\n      [\n        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5468\u4E00&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Monday&#x27;</span> },\n        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5468\u4E8C&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Tuesday&#x27;</span> },\n        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5468\u4E09&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Wednesday&#x27;</span> },\n        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5468\u56DB&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Thursday&#x27;</span> },\n        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5468\u4E94&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Friday&#x27;</span> },\n      ],\n      <span class="hljs-comment">// \u7B2C\u4E8C\u5217</span>\n      [\n        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u4E0A\u5348&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Morning&#x27;</span> },\n        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u4E0B\u5348&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Afternoon&#x27;</span> },\n        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u665A\u4E0A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Evening&#x27;</span> },\n      ],\n    ];\n\n    <span class="hljs-keyword">return</span> { columns };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ji-lian-xuan-ze" tabindex="-1">\u7EA7\u8054\u9009\u62E9</h3>\n<p>\u4F7F\u7528 <code>columns</code> \u7684 <code>children</code> \u5B57\u6BB5\u53EF\u4EE5\u5B9E\u73B0\u9009\u9879\u7EA7\u8054\u7684\u6548\u679C\u3002\u5982\u679C\u7EA7\u8054\u5C42\u7EA7\u8F83\u591A\uFF0C\u63A8\u8350\u4F7F\u7528 <a href="#/zh-CN/cascader" target="_blank">Cascader \u7EA7\u8054\u9009\u9879\u7EC4\u4EF6</a>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> columns = [\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F&#x27;</span>,\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Zhejiang&#x27;</span>,\n        <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u676D\u5DDE&#x27;</span>,\n            <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Hangzhou&#x27;</span>,\n            <span class="hljs-attr">children</span>: [\n              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u897F\u6E56\u533A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Xihu&#x27;</span> },\n              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u4F59\u676D\u533A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Yuhang&#x27;</span> },\n            ],\n          },\n          {\n            <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6E29\u5DDE&#x27;</span>,\n            <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Wenzhou&#x27;</span>,\n            <span class="hljs-attr">children</span>: [\n              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u9E7F\u57CE\u533A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Lucheng&#x27;</span> },\n              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u74EF\u6D77\u533A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Ouhai&#x27;</span> },\n            ],\n          },\n        ],\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u798F\u5EFA&#x27;</span>,\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Fujian&#x27;</span>,\n        <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u798F\u5DDE&#x27;</span>,\n            <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Fuzhou&#x27;</span>,\n            <span class="hljs-attr">children</span>: [\n              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u9F13\u697C\u533A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Gulou&#x27;</span> },\n              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u53F0\u6C5F\u533A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Taijiang&#x27;</span> },\n            ],\n          },\n          {\n            <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u53A6\u95E8&#x27;</span>,\n            <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Xiamen&#x27;</span>,\n            <span class="hljs-attr">children</span>: [\n              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u601D\u660E\u533A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Siming&#x27;</span> },\n              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D77\u6CA7\u533A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Haicang&#x27;</span> },\n            ],\n          },\n        ],\n      },\n    ];\n\n    <span class="hljs-keyword">return</span> { columns };\n  },\n};\n</code></pre>\n<blockquote>\n<p>\u7EA7\u8054\u9009\u62E9\u7684\u6570\u636E\u5D4C\u5957\u6DF1\u5EA6\u9700\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u5982\u679C\u90E8\u5206\u9009\u9879\u6CA1\u6709\u5B50\u9009\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7A7A\u5B57\u7B26\u4E32\u8FDB\u884C\u5360\u4F4D\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="jin-yong-xuan-xiang" tabindex="-1">\u7981\u7528\u9009\u9879</h3>\n<p>\u9009\u9879\u53EF\u4EE5\u4E3A\u5BF9\u8C61\u7ED3\u6784\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>disabled</code> \u6765\u7981\u7528\u8BE5\u9009\u9879\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> columns = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u676D\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Hangzhou&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5B81\u6CE2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Ningbo&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6E29\u5DDE&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Wenzhou&#x27;</span> },\n    ];\n    <span class="hljs-keyword">return</span> { columns };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">\u52A0\u8F7D\u72B6\u6001</h3>\n<p>\u82E5\u9009\u62E9\u5668\u6570\u636E\u662F\u5F02\u6B65\u83B7\u53D6\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>loading</code> \u5C5E\u6027\u663E\u793A\u52A0\u8F7D\u63D0\u793A\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> columns = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      columns.<span class="hljs-property">value</span> = [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u9009\u9879&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;option&#x27;</span> }];\n      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n    }, <span class="hljs-number">1000</span>);\n\n    <span class="hljs-keyword">return</span> { columns, loading };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-columns-de-jie-gou" tabindex="-1">\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>\n  <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>\n  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>\n  <span class="hljs-attr">:columns-field-names</span>=<span class="hljs-string">&quot;customFieldName&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> columns = [\n      {\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F&#x27;</span>,\n        <span class="hljs-attr">cities</span>: [\n          {\n            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u676D\u5DDE&#x27;</span>,\n            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u897F\u6E56\u533A&#x27;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u4F59\u676D\u533A&#x27;</span> }],\n          },\n          {\n            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u6E29\u5DDE&#x27;</span>,\n            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u9E7F\u57CE\u533A&#x27;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u74EF\u6D77\u533A&#x27;</span> }],\n          },\n        ],\n      },\n      {\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u798F\u5EFA&#x27;</span>,\n        <span class="hljs-attr">cities</span>: [\n          {\n            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u798F\u5DDE&#x27;</span>,\n            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u9F13\u697C\u533A&#x27;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u53F0\u6C5F\u533A&#x27;</span> }],\n          },\n          {\n            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u53A6\u95E8&#x27;</span>,\n            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u601D\u660E\u533A&#x27;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#x27;\u6D77\u6CA7\u533A&#x27;</span> }],\n          },\n        ],\n      },\n    ];\n\n    <span class="hljs-keyword">const</span> customFieldName = {\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;cityName&#x27;</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;cityName&#x27;</span>,\n      <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;cities&#x27;</span>,\n    };\n\n    <span class="hljs-keyword">return</span> {\n      columns,\n      customFieldName,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>\u5F53\u524D\u9009\u4E2D\u9879\u5BF9\u5E94\u7684\u503C</td>\n<td><em>number[] | string[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns</td>\n<td>\u5BF9\u8C61\u6570\u7EC4\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u663E\u793A\u7684\u6570\u636E</td>\n<td><em>PickerOption[] | PickerOption[][]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>columns-field-names</td>\n<td>\u81EA\u5B9A\u4E49 <code>columns</code> \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td>\n<td><em>object</em></td>\n<td><code>{ text: \'text\', value: \'value\', children: \'children\' }</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u9876\u90E8\u680F\u6807\u9898</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm-button-text</td>\n<td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u786E\u8BA4</code></td>\n</tr>\n<tr>\n<td>cancel-button-text</td>\n<td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u53D6\u6D88</code></td>\n</tr>\n<tr>\n<td>toolbar-position</td>\n<td>\u9876\u90E8\u680F\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>bottom</code></td>\n<td><em>string</em></td>\n<td><code>top</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u5207\u6362\u9009\u9879</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-toolbar</td>\n<td>\u662F\u5426\u663E\u793A\u9876\u90E8\u680F</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>allow-html</td>\n<td>\u662F\u5426\u5141\u8BB8\u9009\u9879\u5185\u5BB9\u4E2D\u6E32\u67D3 HTML</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>option-height</td>\n<td>\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> \u5355\u4F4D\uFF0C\u9ED8\u8BA4 <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>44</code></td>\n</tr>\n<tr>\n<td>visible-option-num</td>\n<td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td>\n<td><em>number | string</em></td>\n<td><code>6</code></td>\n</tr>\n<tr>\n<td>swipe-duration</td>\n<td>\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D <code>ms</code></td>\n<td><em>number | string</em></td>\n<td><code>1000</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>confirm</td>\n<td>\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td>\n</tr>\n<tr>\n<td>change</td>\n<td>\u9009\u4E2D\u7684\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td>\n</tr>\n<tr>\n<td>click-option</td>\n<td>\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1</td>\n<td><em>{ currentOption, selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td>\n</tr>\n<tr>\n<td>scroll-into <code>v4.2.1</code></td>\n<td>\u5F53\u7528\u6237\u901A\u8FC7\u70B9\u51FB\u6216\u62D6\u62FD\u8BA9\u4E00\u4E2A\u9009\u9879\u6EDA\u52A8\u5230\u4E2D\u95F4\u7684\u9009\u62E9\u533A\u57DF\u65F6\u89E6\u53D1</td>\n<td><em>{ currentOption, columnIndex }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toolbar</td>\n<td>\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm</td>\n<td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>option</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9</td>\n<td><em>option: PickerOption, index: number</em></td>\n</tr>\n<tr>\n<td>columns-top</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-bottom</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="pickeroption-shu-ju-jie-gou" tabindex="-1">PickerOption \u6570\u636E\u7ED3\u6784</h3>\n<table>\n<thead>\n<tr>\n<th>\u952E\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>\u9009\u9879\u6587\u5B57\u5185\u5BB9</td>\n<td><em>string | number</em></td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u9009\u9879\u5BF9\u5E94\u7684\u503C</td>\n<td><em>string | number</em></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u9009\u9879</td>\n<td><em>boolean</em></td>\n</tr>\n<tr>\n<td>children</td>\n<td>\u7EA7\u8054\u9009\u9879</td>\n<td><em>PickerOption[]</em></td>\n</tr>\n<tr>\n<td>className</td>\n<td>\u9009\u9879\u989D\u5916\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Picker \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>confirm</td>\n<td>\u505C\u6B62\u60EF\u6027\u6EDA\u52A8\u5E76\u89E6\u53D1 <code>confirm</code> \u4E8B\u4EF6</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>getSelectedOptions</td>\n<td>\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u7684\u9009\u9879</td>\n<td>-</td>\n<td><em>(PickerOption | undefined)[]</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">PickerProps</span>,\n  <span class="hljs-title class_">PickerColumn</span>,\n  <span class="hljs-title class_">PickerOption</span>,\n  <span class="hljs-title class_">PickerInstance</span>,\n  <span class="hljs-title class_">PickerFieldNames</span>,\n  <span class="hljs-title class_">PickerToolbarPosition</span>,\n  <span class="hljs-title class_">PickerCancelEventParams</span>,\n  <span class="hljs-title class_">PickerChangeEventParams</span>,\n  <span class="hljs-title class_">PickerConfirmEventParams</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>PickerInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> pickerRef = ref&lt;<span class="hljs-title class_">PickerInstance</span>&gt;();\n\npickerRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-picker-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-toolbar-height</td>\n<td><em>44px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-title-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-title-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-action-padding</td>\n<td><em>0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-action-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-confirm-action-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-cancel-action-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-option-padding</td>\n<td><em>0 var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-option-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-option-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-option-disabled-opacity</td>\n<td><em>0.3</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-mask-color</td>\n<td><em>linear-gradient</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-loading-icon-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-picker-loading-mask-color</td>\n<td><em>rgba(255, 255, 255, 0.9)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2>\n<div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3>\n<p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p>\n</div>'},null,8,l))}}}]);