/*! For license information please see 9603.dea00f0d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9603"],{67927:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return c}});var e=n("36840");let l=["innerHTML"];var c={setup:()=>({html:""}),render:()=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>\u4ECE v3 \u5347\u7EA7\u5230 v4</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u672C\u6587\u6863\u63D0\u4F9B\u4E86\u4ECE Vant 3 \u5230 Vant 4 \u7684\u5347\u7EA7\u6307\u5357\u3002</p>\n</div><div class="van-doc-card"><h3 id="an-zhuang-vant-4" tabindex="-1">\u5B89\u88C5 Vant 4</h3>\n<p>\u9996\u5148\u4F60\u9700\u8981\u5B89\u88C5 Vant 4 \u4EE5\u53CA <code>@vant/compat</code>\u3002</p>\n<p><code>@vant/compat</code> \u662F\u4E00\u4E2A\u517C\u5BB9\u5305\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u4F60\u4ECE Vant 3 \u8FC7\u6E21\u5230 Vant 4\u3002</p>\n<pre><code class="language-bash"><span class="hljs-comment"># \u901A\u8FC7 npm \u5B89\u88C5</span>\nnpm add vant@^4 @vant/compat@^1\n\n<span class="hljs-comment"># \u901A\u8FC7 yarn \u5B89\u88C5</span>\nyarn add vant@^4 @vant/compat@^1\n\n<span class="hljs-comment"># \u901A\u8FC7 pnpm \u5B89\u88C5</span>\npnpm add vant@^4 @vant/compat@^1\n\n<span class="hljs-comment"># \u901A\u8FC7 Bun \u5B89\u88C5</span>\nbun add vant@^4 @vant/compat@^1\n</code></pre>\n<p>\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539 <code>package.json</code> \u7684 <code>dependencies</code> \u5B57\u6BB5\u4E2D\u7684\u7248\u672C\u53F7\uFF0C\u4FEE\u6539\u5B8C\u6210\u540E\u9700\u8981\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u3002</p>\n<pre><code class="language-diff">{\n  &quot;dependencies&quot;: {\n<span class="hljs-deletion">-    &quot;vant&quot;: &quot;^3.0.0&quot;,</span>\n<span class="hljs-addition">+    &quot;vant&quot;: &quot;^4.0.0&quot;,</span>\n<span class="hljs-addition">+    &quot;@vant/compat&quot;: &quot;^1.0.0&quot;,</span>\n  }\n}\n</code></pre>\n</div><h2 id="diao-zheng-an-xu-yin-ru-fang-shi" tabindex="-1">\u8C03\u6574\u6309\u9700\u5F15\u5165\u65B9\u5F0F</h2>\n<div class="van-doc-card"><h3 id="yi-chu-babel-plugin-import" tabindex="-1">\u79FB\u9664 babel-plugin-import</h3>\n<p>\u4ECE Vant 4.0 \u5F00\u59CB\uFF0C\u5C06\u4E0D\u518D\u652F\u6301 <code>babel-plugin-import</code>\uFF0C\u8BF7\u79FB\u9664\u9879\u76EE\u4E2D\u4F9D\u8D56\u7684 <code>babel-plugin-import</code> \u63D2\u4EF6\u3002</p>\n<p>\u53EA\u9700\u8981\u5220\u9664 <code>babel.config.js</code> \u4E2D\u7684\u4EE5\u4E0B\u4EE3\u7801\u5373\u53EF\uFF1A</p>\n<pre><code class="language-diff">module.exports = {\n  plugins: [\n<span class="hljs-deletion">-    [&#x27;import&#x27;, {</span>\n<span class="hljs-deletion">-      libraryName: &#x27;vant&#x27;,</span>\n<span class="hljs-deletion">-      libraryDirectory: &#x27;es&#x27;,</span>\n<span class="hljs-deletion">-      style: true</span>\n<span class="hljs-deletion">-    }, &#x27;vant&#x27;]</span>\n  ]\n};\n</code></pre>\n<h4 id="shou-yi" tabindex="-1">\u6536\u76CA</h4>\n<p>\u79FB\u9664 <code>babel-plugin-import</code> \u4E3B\u8981\u5E26\u6765\u4EE5\u4E0B\u6536\u76CA\uFF1A</p>\n<ul>\n<li>\u4E0D\u518D\u5F3A\u4F9D\u8D56 Babel \u7F16\u8BD1\uFF0C\u9879\u76EE\u53EF\u4EE5\u4F7F\u7528 SWC\u3001esbuild \u7B49\u73B0\u4EE3\u7F16\u8BD1\u5DE5\u5177\uFF0C\u8FDB\u800C\u63D0\u5347\u7F16\u8BD1\u6548\u7387\u3002</li>\n<li>\u4E0D\u518D\u53D7\u5230 <code>babel-plugin-import</code> \u7684 import \u9650\u5236\uFF0C\u53EF\u4EE5\u4ECE Vant \u4E2D\u5BFC\u5165\u9664\u7EC4\u4EF6\u4EE5\u5916\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982 Vant 4 \u4E2D\u65B0\u589E\u7684 <code>showToast</code> \u65B9\u6CD5\uFF0C\u6216\u662F <code>buttonProps</code> \u5BF9\u8C61\uFF1A</li>\n</ul>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { showToast, buttonProps } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<h4 id="yang-shi-yin-ru-fang-an" tabindex="-1">\u6837\u5F0F\u5F15\u5165\u65B9\u6848</h4>\n<p>\u79FB\u9664 <code>babel-plugin-import</code> \u5BF9\u9879\u76EE\u7684 JS \u4F53\u79EF\u4E0D\u4F1A\u6709\u5F71\u54CD\uFF0C\u56E0\u4E3A Vant \u9ED8\u8BA4\u652F\u6301\u901A\u8FC7 Tree Shaking \u6765\u79FB\u9664\u4E0D\u9700\u8981\u7684 JS \u4EE3\u7801\u3002</p>\n<p>\u800C CSS \u4EE3\u7801\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u4ECE\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u4E2D\u8FDB\u884C\u9009\u62E9\uFF1A</p>\n<ul>\n<li>\u5728\u9879\u76EE\u4E2D\u5168\u91CF\u5F15\u5165 Vant \u7684\u6837\u5F0F\u6587\u4EF6\uFF1A</li>\n</ul>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/lib/index.css&#x27;</span>;\n</code></pre>\n<ul>\n<li>\u901A\u8FC7 <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank">unplugin-vue-components</a> \u63D2\u4EF6\u5B9E\u73B0\u6309\u9700\u5F15\u5165\u6837\u5F0F\uFF0C\u8BE6\u7EC6\u7528\u6CD5\u53C2\u89C1 <a href="#/zh-CN/quickstart" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</li>\n</ul>\n</div><h2 id="zu-jian-chong-gou" tabindex="-1">\u7EC4\u4EF6\u91CD\u6784</h2>\n<div class="van-doc-card"><h3 id="jie-shao-1" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5728 Vant 4 \u4E2D\uFF0C\u4E00\u5171\u6709\u4E09\u4E2A\u7EC4\u4EF6\u88AB\u5B8C\u5168\u91CD\u6784\uFF0C\u5B83\u4EEC\u662F\uFF1A</p>\n<ul>\n<li><code>Area</code></li>\n<li><code>Picker</code></li>\n<li><code>DatetimePicker</code></li>\n</ul>\n<p>\u8FD9\u4E09\u4E2A\u7EC4\u4EF6\u4E4B\u6240\u4EE5\u88AB\u91CD\u6784\uFF0C\u662F\u56E0\u4E3A\u5728\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C<code>Picker</code> \u7EC4\u4EF6\u7684 API \u8BBE\u8BA1\u5B58\u5728\u4E00\u4E9B\u4E0D\u5408\u7406\u7684\u8BBE\u8BA1\uFF0C\u5BFC\u81F4\u5927\u5BB6\u5728\u4F7F\u7528\u65F6\u7ECF\u5E38\u9047\u5230\u95EE\u9898\uFF0C\u6BD4\u5982\uFF1A</p>\n<ul>\n<li>Picker columns \u6570\u636E\u683C\u5F0F\u5B9A\u4E49\u4E0D\u5408\u7406\uFF0C\u5BB9\u6613\u4EA7\u751F\u8BEF\u89E3</li>\n<li>Picker \u6570\u636E\u6D41\u4E0D\u6E05\u6670\uFF0C\u66B4\u9732\u4E86\u8FC7\u591A\u7684\u5B9E\u4F8B\u65B9\u6CD5\u6765\u5BF9\u6570\u636E\u8FDB\u884C\u64CD\u4F5C</li>\n<li>DatetimePicker \u903B\u8F91\u8FC7\u4E8E\u590D\u6742\uFF0C\u7ECF\u5E38\u5728\u8FB9\u754C\u573A\u666F\u4E0B\u51FA\u73B0 bug</li>\n</ul>\n<p>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF0C\u6211\u4EEC\u5728 v4 \u7248\u672C\u4E2D\u5BF9 <code>Picker</code> \u7EC4\u4EF6\u8FDB\u884C\u4E86\u91CD\u6784\uFF0C\u540C\u65F6\u4E5F\u91CD\u6784\u4E86\u57FA\u4E8E <code>Picker</code> \u6D3E\u751F\u51FA\u7684 <code>Area</code> \u548C <code>DatetimePicker</code> \u7EC4\u4EF6\u3002\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E2D\u4F7F\u7528\u4E86\u8FD9\u4E09\u4E2A\u7EC4\u4EF6\uFF0C\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u6587\u6863\u5E76\u8FDB\u884C\u5347\u7EA7\u3002</p>\n</div><div class="van-doc-card"><h3 id="picker-zu-jian-chong-gou" tabindex="-1">Picker \u7EC4\u4EF6\u91CD\u6784</h3>\n<h4 id="zhu-yao-bian-geng" tabindex="-1">\u4E3B\u8981\u53D8\u66F4</h4>\n<ul>\n<li>\u652F\u6301\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u503C\uFF0C\u79FB\u9664 <code>default-index</code> \u5C5E\u6027</li>\n<li>\u91CD\u65B0\u5B9A\u4E49\u4E86 <code>columns</code> \u5C5E\u6027\u7684\u7ED3\u6784</li>\n<li>\u79FB\u9664\u4E86\u64CD\u4F5C\u5185\u90E8\u6570\u636E\u7684\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u4EC5\u4FDD\u7559 <code>confirm</code> \u65B9\u6CD5</li>\n<li>\u65B0\u589E <code>getSelectedOptions</code> \u5B9E\u4F8B\u65B9\u6CD5</li>\n<li>\u8C03\u6574\u4E86 <code>confirm</code>\u3001<code>cancel</code>\u3001<code>change</code> \u4E8B\u4EF6\u7684\u53C2\u6570</li>\n<li>\u91CD\u547D\u540D <code>item-height</code> \u5C5E\u6027\u4E3A <code>option-height</code></li>\n<li>\u91CD\u547D\u540D <code>visible-item-count</code> \u5C5E\u6027\u4E3A <code>visible-option-num</code></li>\n</ul>\n<blockquote>\n<p>\u8BE6\u7EC6\u7528\u6CD5\u8BF7\u53C2\u89C1 <a href="#/zh-CN/picker" target="_blank">Picker \u7EC4\u4EF6\u6587\u6863</a>\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="datetimepicker-zu-jian-chong-gou" tabindex="-1">DatetimePicker \u7EC4\u4EF6\u91CD\u6784</h3>\n<p>DatetimePicker \u7EC4\u4EF6\u88AB\u62C6\u5206\u4E3A\u4E09\u4E2A\u5B50\u7EC4\u4EF6\uFF1A</p>\n<ul>\n<li><a href="#/zh-CN/time-picker" target="_blank">TimePicker</a>: \u7528\u4E8E\u65F6\u95F4\u9009\u62E9\uFF0C\u5305\u62EC\u65F6\u3001\u5206\u3001\u79D2\u3002</li>\n<li><a href="#/zh-CN/date-picker" target="_blank">DatePicker</a>: \u7528\u4E8E\u65E5\u671F\u9009\u62E9\uFF0C\u5305\u62EC\u5E74\u3001\u6708\u3001\u65E5\u3002</li>\n<li><a href="#/zh-CN/picker-group" target="_blank">PickerGroup</a>: \u7528\u4E8E\u7ED3\u5408\u591A\u4E2A Picker \u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u5728\u4E00\u6B21\u4EA4\u4E92\u4E2D\u5B8C\u6210\u591A\u4E2A\u503C\u7684\u9009\u62E9\u3002</li>\n</ul>\n<p>\u540C\u65F6\uFF0CTimePicker \u548C DatePicker \u7EC4\u4EF6\u4E5F\u57FA\u4E8E\u65B0\u7248 Picker \u7EC4\u4EF6\u8FDB\u884C\u91CD\u6784\uFF0C\u5E76\u4F18\u5316\u4E86\u90E8\u5206 API \u8BBE\u8BA1\u3002</p>\n<h4 id="zhu-yao-bian-geng-1" tabindex="-1">\u4E3B\u8981\u53D8\u66F4</h4>\n<p>\u4EE5\u4E0B\u662F TimePicker \u548C DatePicker \u7684\u4E3B\u8981 API \u53D8\u5316\uFF0C\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003 <a href="#/zh-CN/time-picker" target="_blank">TimePicker</a> \u548C <a href="#/zh-CN/date-picker" target="_blank">DatePicker</a> \u6587\u6863\u3002</p>\n<ul>\n<li><code>v-model</code> \u7ED1\u5B9A\u7684\u503C\u8C03\u6574\u4E3A\u6570\u7EC4\u683C\u5F0F</li>\n<li>\u65B0\u589E <code>columns-type</code> \u5C5E\u6027\uFF0C\u7528\u4E8E\u63A7\u5236\u9009\u9879\u7C7B\u578B\u548C\u987A\u5E8F</li>\n<li>\u79FB\u9664 <code>type</code> \u5C5E\u6027\u548C <code>columns-order</code> \u5C5E\u6027</li>\n<li>\u79FB\u9664 <code>getPicker</code> \u65B9\u6CD5</li>\n<li>\u8C03\u6574 <code>confirm</code>\u3001<code>cancel</code>\u3001<code>change</code> \u4E8B\u4EF6\u7684\u53C2\u6570\uFF0C\u4E0E Picker \u7EC4\u4EF6\u4FDD\u6301\u4E00\u81F4</li>\n</ul>\n<blockquote>\n<p>Vant 4 \u4E0D\u518D\u63D0\u4F9B\u65E7\u7248\u7684 DatetimePicker \u7EC4\u4EF6\uFF0C\u4F7F\u7528 PickerGroup \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u66F4\u7075\u6D3B\u3001\u66F4\u4E30\u5BCC\u7684\u4EA4\u4E92\u6548\u679C\uFF0C\u5177\u4F53\u7528\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/picker-group" target="_blank">PickerGroup</a> \u7EC4\u4EF6\u6587\u6863\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="area-zu-jian-chong-gou" tabindex="-1">Area \u7EC4\u4EF6\u91CD\u6784</h3>\n<p>Area \u7EC4\u4EF6\u662F\u57FA\u4E8E Picker \u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5\u7684\uFF0C\u56E0\u6B64\u672C\u6B21\u5347\u7EA7\u4E5F\u5BF9 Area \u7EC4\u4EF6\u8FDB\u884C\u4E86\u5185\u90E8\u903B\u8F91\u7684\u91CD\u6784\uFF0C\u5E76\u4F18\u5316\u4E86\u90E8\u5206 API\u3002</p>\n<h4 id="zhu-yao-bian-geng-2" tabindex="-1">\u4E3B\u8981\u53D8\u66F4</h4>\n<ul>\n<li>\u652F\u6301\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u503C</li>\n<li>\u79FB\u9664 <code>reset</code> \u65B9\u6CD5\uFF0C\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 <code>v-model</code> \u6765\u8FDB\u884C\u91CD\u7F6E</li>\n<li>\u79FB\u9664 <code>is-oversea-code</code> \u5C5E\u6027</li>\n<li>\u8C03\u6574 <code>confirm</code>\u3001<code>cancel</code>\u3001<code>change</code> \u4E8B\u4EF6\u7684\u53C2\u6570\uFF0C\u4E0E Picker \u7EC4\u4EF6\u4FDD\u6301\u4E00\u81F4</li>\n<li>\u91CD\u547D\u540D <code>value</code> \u5C5E\u6027\u4E3A <code>modelValue</code></li>\n<li>\u91CD\u547D\u540D <code>item-height</code> \u5C5E\u6027\u4E3A <code>option-height</code></li>\n<li>\u91CD\u547D\u540D <code>visible-item-count</code> \u5C5E\u6027\u4E3A <code>visible-option-num</code></li>\n</ul>\n<blockquote>\n<p>\u8BE6\u7EC6\u7528\u6CD5\u8BF7\u53C2\u89C1 <a href="#/zh-CN/area" target="_blank">Area \u7EC4\u4EF6\u6587\u6863</a>\u3002</p>\n</blockquote>\n</div><h2 id="api-diao-zheng" tabindex="-1">API \u8C03\u6574</h2>\n<div class="van-doc-card"><h3 id="dialog-diao-yong-fang-shi-diao-zheng" tabindex="-1">Dialog \u8C03\u7528\u65B9\u5F0F\u8C03\u6574</h3>\n<p>\u5728 Vant 3 \u4E2D\uFF0C<code>Dialog</code> \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u51FD\u6570\u53EF\u4EE5\u5FEB\u901F\u5524\u8D77\u5168\u5C40\u7684\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u800C <code>Dialog.Component</code> \u624D\u662F <code>Dialog</code> \u7EC4\u4EF6\u5BF9\u8C61\uFF0C\u8FD9\u4E0E\u5927\u90E8\u5206\u7EC4\u4EF6\u7684\u7528\u6CD5\u5B58\u5728\u5DEE\u5F02\uFF0C\u5BB9\u6613\u5BFC\u81F4\u4F7F\u7528\u9519\u8BEF\u3002</p>\n<p>\u4E3A\u4E86\u66F4\u7B26\u5408\u76F4\u89C9\uFF0C\u6211\u4EEC\u5728 Vant 4 \u4E2D\u8C03\u6574\u4E86 <code>Dialog</code> \u7684\u8C03\u7528\u65B9\u5F0F\uFF0C\u5C06 <code>Dialog()</code> \u51FD\u6570\u91CD\u547D\u540D\u4E3A <code>showDialog()</code>\uFF0C\u5E76\u8BA9 <code>Dialog</code> \u76F4\u63A5\u6307\u5411\u7EC4\u4EF6\u5BF9\u8C61\u3002</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title class_">Dialog</span>(); <span class="hljs-comment">// \u51FD\u6570\u8C03\u7528</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// \u7EC4\u4EF6\u5BF9\u8C61</span>\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">showDialog</span>(); <span class="hljs-comment">// \u51FD\u6570\u8C03\u7528</span>\n<span class="hljs-title class_">Dialog</span>; <span class="hljs-comment">// \u7EC4\u4EF6\u5BF9\u8C61</span>\n</code></pre>\n<p>\u7531\u4E8E <code>Dialog</code> \u53D8\u4E3A\u4E86\u7EC4\u4EF6\u5BF9\u8C61\uFF0C<code>Dialog</code> \u4E0A\u6302\u8F7D\u7684\u5176\u4ED6\u65B9\u6CD5\u4E5F\u8FDB\u884C\u4E86\u91CD\u547D\u540D\uFF0C\u65B0\u65E7 API \u7684\u6620\u5C04\u5173\u7CFB\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-js"><span class="hljs-title class_">Dialog</span>(); <span class="hljs-comment">// -&gt; showDialog()</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>(); <span class="hljs-comment">// -&gt; showDialog()</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>(); <span class="hljs-comment">// -&gt; showConfirmDialog()</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">close</span>(); <span class="hljs-comment">// -&gt; closeDialog();</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setDialogDefaultOptions()</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetDialogDefaultOptions()</span>\n</code></pre>\n<h4 id="jian-rong-fang-an" tabindex="-1">\u517C\u5BB9\u65B9\u6848</h4>\n<p>\u4E3A\u4E86\u4FBF\u4E8E\u65E7\u7248\u672C\u4EE3\u7801\u8FC1\u79FB\u81F3 v4\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u517C\u5BB9\u65B9\u6848\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>@vant/compat</code> \u4E2D\u5BFC\u51FA\u7684 <code>Dialog</code> \u5BF9\u8C61\u6765\u517C\u5BB9\u539F\u6709\u4EE3\u7801\u3002</p>\n<p>\u4ECE <code>@vant/compat</code> \u4E2D\u5F15\u7528 <code>Dialog</code> \u65B9\u6CD5\uFF1A</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/compat&#x27;</span>;\n\n<span class="hljs-title class_">Dialog</span>();\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">close</span>();\n</code></pre>\n<p><code>@vant/compat</code> \u4E2D\u5BFC\u51FA\u7684 <code>Dialog</code> \u4E0E Vant 3 \u4E2D\u7684 <code>Dialog</code> \u62E5\u6709\u5B8C\u5168\u4E00\u81F4\u7684 API \u548C\u884C\u4E3A\uFF0C\u56E0\u6B64\u4F60\u53EA\u9700\u8981\u4FEE\u6539 <code>Dialog</code> \u7684\u5F15\u7528\u8DEF\u5F84\uFF0C\u5176\u4ED6\u4EE3\u7801\u53EF\u4EE5\u4FDD\u6301\u4E0D\u53D8\u3002</p>\n<p>\u5728\u9879\u76EE\u5B8C\u6210\u5347\u7EA7\u5230 Vant v4 \u540E\uFF0C\u5EFA\u8BAE\u5728\u8FED\u4EE3\u4E2D\u9010\u6B65\u66FF\u6362\u4E3A\u65B0\u7684 <code>showDialog</code> \u7B49\u65B9\u6CD5\uFF0C\u5E76\u79FB\u9664 <code>@vant/compat</code> \u5305\u3002</p>\n</div><div class="van-doc-card"><h3 id="toast-diao-yong-fang-shi-diao-zheng" tabindex="-1">Toast \u8C03\u7528\u65B9\u5F0F\u8C03\u6574</h3>\n<p>Vant 4 \u4E2D\uFF0C<code>Toast</code> \u7EC4\u4EF6\u7684\u8C03\u7528\u65B9\u5F0F\u4E5F\u8FDB\u884C\u4E86\u8C03\u6574\uFF0C\u4E0E <code>Dialog</code> \u7EC4\u4EF6\u7684\u6539\u52A8\u4E00\u81F4\uFF1A</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title class_">Toast</span>(); <span class="hljs-comment">// \u51FD\u6570\u8C03\u7528</span>\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">showToast</span>(); <span class="hljs-comment">// \u51FD\u6570\u8C03\u7528</span>\n<span class="hljs-title class_">Toast</span>; <span class="hljs-comment">// \u7EC4\u4EF6\u5BF9\u8C61</span>\n</code></pre>\n<p><code>Toast</code> \u4E0A\u6302\u8F7D\u7684\u5176\u4ED6\u65B9\u6CD5\u4E5F\u8FDB\u884C\u4E86\u91CD\u547D\u540D\uFF0C\u65B0\u65E7 API \u7684\u6620\u5C04\u5173\u7CFB\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-js"><span class="hljs-title class_">Toast</span>(); <span class="hljs-comment">// -&gt; showToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">fail</span>(); <span class="hljs-comment">// -&gt; showFailToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">success</span>(); <span class="hljs-comment">// -&gt; showSuccessToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>(); <span class="hljs-comment">// -&gt; showLoadingToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>(); <span class="hljs-comment">// -&gt; closeToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setToastDefaultOptions()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetToastDefaultOptions()</span>\n</code></pre>\n<p>\u540C\u65F6\uFF0CVant 4 \u5C06\u4E0D\u518D\u5728 <code>this</code> \u5BF9\u8C61\u4E0A\u5168\u5C40\u6CE8\u518C <code>$toast</code> \u65B9\u6CD5\uFF0C\u8FD9\u610F\u5473\u7740 <code>this</code> \u5BF9\u8C61\u4E0A\u5C06\u65E0\u6CD5\u8BBF\u95EE\u5230 <code>$toast</code>\u3002</p>\n<h4 id="jian-rong-fang-an-1" tabindex="-1">\u517C\u5BB9\u65B9\u6848</h4>\n<p>\u4E3A\u4E86\u4FBF\u4E8E\u4EE3\u7801\u8FC1\u79FB\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u517C\u5BB9\u65B9\u6848\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>@vant/compat</code> \u4E2D\u5BFC\u51FA\u7684 <code>Toast</code> \u5BF9\u8C61\u6765\u517C\u5BB9\u539F\u6709\u4EE3\u7801\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/compat&#x27;</span>;\n\n<span class="hljs-title class_">Toast</span>();\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>();\n</code></pre>\n<p><code>@vant/compat</code> \u4E2D\u5BFC\u51FA\u7684 <code>Toast</code> \u4E0E Vant 3 \u4E2D\u7684 <code>Toast</code> \u62E5\u6709\u5B8C\u5168\u4E00\u81F4\u7684 API \u548C\u884C\u4E3A\uFF0C\u56E0\u6B64\u4F60\u53EA\u9700\u8981\u4FEE\u6539 <code>Toast</code> \u7684\u5F15\u7528\u8DEF\u5F84\uFF0C\u5176\u4ED6\u4EE3\u7801\u53EF\u4EE5\u4FDD\u6301\u4E0D\u53D8\u3002</p>\n</div><div class="van-doc-card"><h3 id="notify-diao-yong-fang-shi-diao-zheng" tabindex="-1">Notify \u8C03\u7528\u65B9\u5F0F\u8C03\u6574</h3>\n<p>Vant 4 \u4E2D\uFF0C<code>Notify</code> \u7EC4\u4EF6\u7684\u8C03\u7528\u65B9\u5F0F\u4E5F\u8FDB\u884C\u4E86\u8C03\u6574\uFF0C\u4E0E <code>Dialog</code> \u7EC4\u4EF6\u7684\u6539\u52A8\u4E00\u81F4\uFF1A</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title class_">Notify</span>(); <span class="hljs-comment">// \u51FD\u6570\u8C03\u7528</span>\n<span class="hljs-title class_">Notify</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// \u7EC4\u4EF6\u5BF9\u8C61</span>\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">showNotify</span>(); <span class="hljs-comment">// \u51FD\u6570\u8C03\u7528</span>\n<span class="hljs-title class_">Notify</span>; <span class="hljs-comment">// \u7EC4\u4EF6\u5BF9\u8C61</span>\n</code></pre>\n<p><code>Notify</code> \u4E0A\u6302\u8F7D\u7684\u5176\u4ED6\u65B9\u6CD5\u4E5F\u8FDB\u884C\u4E86\u91CD\u547D\u540D\uFF0C\u65B0\u65E7 API \u7684\u6620\u5C04\u5173\u7CFB\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-js"><span class="hljs-title class_">Notify</span>(); <span class="hljs-comment">// -&gt; showNotify()</span>\n<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">clear</span>(); <span class="hljs-comment">// -&gt; closeNotify()</span>\n<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setNotifyDefaultOptions()</span>\n<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetNotifyDefaultOptions()</span>\n</code></pre>\n<p>\u540C\u65F6\uFF0CVant 4 \u5C06\u4E0D\u518D\u5728 <code>this</code> \u5BF9\u8C61\u4E0A\u5168\u5C40\u6CE8\u518C <code>$notify</code> \u65B9\u6CD5\uFF0C\u8FD9\u610F\u5473\u7740 <code>this</code> \u5BF9\u8C61\u4E0A\u5C06\u65E0\u6CD5\u8BBF\u95EE\u5230 <code>$notify</code>\u3002</p>\n<h4 id="jian-rong-fang-an-2" tabindex="-1">\u517C\u5BB9\u65B9\u6848</h4>\n<p>\u4E3A\u4E86\u4FBF\u4E8E\u4EE3\u7801\u8FC1\u79FB\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u517C\u5BB9\u65B9\u6848\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>@vant/compat</code> \u4E2D\u5BFC\u51FA\u7684 <code>Notify</code> \u5BF9\u8C61\u6765\u517C\u5BB9\u539F\u6709\u4EE3\u7801\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/compat&#x27;</span>;\n\n<span class="hljs-title class_">Notify</span>();\n<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">clear</span>();\n</code></pre>\n<p><code>@vant/compat</code> \u4E2D\u5BFC\u51FA\u7684 <code>Notify</code> \u4E0E Vant 3 \u4E2D\u7684 <code>Notify</code> \u62E5\u6709\u5B8C\u5168\u4E00\u81F4\u7684 API \u548C\u884C\u4E3A\uFF0C\u56E0\u6B64\u4F60\u53EA\u9700\u8981\u4FEE\u6539 <code>Notify</code> \u7684\u5F15\u7528\u8DEF\u5F84\uFF0C\u5176\u4ED6\u4EE3\u7801\u53EF\u4EE5\u4FDD\u6301\u4E0D\u53D8\u3002</p>\n</div><div class="van-doc-card"><h3 id="imagepreview-diao-yong-fang-shi-diao-zheng" tabindex="-1">ImagePreview \u8C03\u7528\u65B9\u5F0F\u8C03\u6574</h3>\n<p>Vant 4 \u4E2D\uFF0C<code>ImagePreview</code> \u7EC4\u4EF6\u7684\u8C03\u7528\u65B9\u5F0F\u4E5F\u8FDB\u884C\u4E86\u8C03\u6574\uFF0C\u4E0E <code>Dialog</code> \u7EC4\u4EF6\u7684\u6539\u52A8\u4E00\u81F4\uFF1A</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title class_">ImagePreview</span>(); <span class="hljs-comment">// \u51FD\u6570\u8C03\u7528</span>\n<span class="hljs-title class_">ImagePreview</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// \u7EC4\u4EF6\u5BF9\u8C61</span>\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">showImagePreview</span>(); <span class="hljs-comment">// \u51FD\u6570\u8C03\u7528</span>\n<span class="hljs-title class_">ImagePreview</span>; <span class="hljs-comment">// \u7EC4\u4EF6\u5BF9\u8C61</span>\n</code></pre>\n<h4 id="jian-rong-fang-an-3" tabindex="-1">\u517C\u5BB9\u65B9\u6848</h4>\n<p>\u4E3A\u4E86\u4FBF\u4E8E\u4EE3\u7801\u8FC1\u79FB\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u517C\u5BB9\u65B9\u6848\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>@vant/compat</code> \u4E2D\u5BFC\u51FA\u7684 <code>ImagePreview</code> \u5BF9\u8C61\u6765\u517C\u5BB9\u539F\u6709\u4EE3\u7801\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/compat&#x27;</span>;\n\n<span class="hljs-title class_">ImagePreview</span>();\n</code></pre>\n<p><code>@vant/compat</code> \u4E2D\u5BFC\u51FA\u7684 <code>ImagePreview</code> \u4E0E Vant 3 \u4E2D\u7684 <code>ImagePreview</code> \u62E5\u6709\u5B8C\u5168\u4E00\u81F4\u7684 API \u548C\u884C\u4E3A\uFF0C\u56E0\u6B64\u4F60\u53EA\u9700\u8981\u4FEE\u6539 <code>ImagePreview</code> \u7684\u5F15\u7528\u8DEF\u5F84\uFF0C\u5176\u4ED6\u4EE3\u7801\u53EF\u4EE5\u4FDD\u6301\u4E0D\u53D8\u3002</p>\n</div><div class="van-doc-card"><h3 id="shi-jian-ming-ming-diao-zheng" tabindex="-1">\u4E8B\u4EF6\u547D\u540D\u8C03\u6574</h3>\n<p>\u4ECE Vant 4 \u5F00\u59CB\uFF0C\u6240\u6709\u7684\u4E8B\u4EF6\u5747\u91C7\u7528 Vue \u5B98\u65B9\u63A8\u8350\u7684<strong>\u9A7C\u5CF0\u683C\u5F0F</strong>\u8FDB\u884C\u547D\u540D\u3002</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#x27;click-input&#x27;</span>);\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#x27;clickInput&#x27;</span>);\n</code></pre>\n<p>\u8FD9\u9879\u6539\u52A8<strong>\u4E0D\u5F71\u54CD\u539F\u6709\u7684\u6A21\u677F\u4EE3\u7801</strong>\uFF0CVue \u4F1A\u81EA\u52A8\u5728\u6A21\u677F\u4E2D\u5BF9\u4E8B\u4EF6\u540D\u8FDB\u884C\u683C\u5F0F\u8F6C\u6362\uFF0C\u56E0\u6B64\u4F60\u65E0\u987B\u505A\u4EFB\u4F55\u66F4\u6539\u3002</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u4EE5\u4E0B\u4EE3\u7801\u53EF\u4EE5\u7167\u5E38\u8FD0\u884C\uFF0C\u65E0\u987B\u505A\u4EFB\u4F55\u66F4\u6539 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> @<span class="hljs-attr">click-input</span>=<span class="hljs-string">&quot;onClick&quot;</span> /&gt;</span>\n</code></pre>\n<p>\u5982\u679C\u4F60\u5728 JSX \u4E2D\u4F7F\u7528 Vant \u7EC4\u4EF6\uFF0C\u9700\u8981\u5C06\u76D1\u542C\u7684\u4E8B\u4EF6\u540D\u8C03\u6574\u4E3A\u9A7C\u5CF0\u683C\u5F0F\uFF0C\u539F\u6709\u7684\u4E2D\u5212\u7EBF\u683C\u5F0F\u5C06\u4E0D\u518D\u751F\u6548\uFF0C\u65B0\u7684\u76D1\u542C\u65B9\u5F0F\u66F4\u52A0\u7B26\u5408 JSX \u672C\u8EAB\u7684\u89C4\u8303\uFF1A</p>\n<pre><code class="language-jsx"><span class="hljs-comment">// Vant 3</span>\n&lt;<span class="hljs-title class_">Field</span> onClick-input={onClick} /&gt;\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">onClickInput</span>=<span class="hljs-string">{onClick}</span> /&gt;</span></span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="qi-ta-api-diao-zheng" tabindex="-1">\u5176\u4ED6 API \u8C03\u6574</h3>\n<p>\u5728 Vant 4.0 \u7248\u672C\u4E2D\uFF0C\u4EE5\u4E0B API \u8FDB\u884C\u4E86\u4E0D\u517C\u5BB9\u66F4\u65B0\uFF1A</p>\n<h4 id="addressedit" tabindex="-1">AddressEdit</h4>\n<ul>\n<li>\u79FB\u9664 <code>show-postal</code> \u5C5E\u6027</li>\n<li>\u79FB\u9664 <code>postal-validator</code> \u5C5E\u6027</li>\n<li><code>change-area</code> \u4E8B\u4EF6\u7684\u53C2\u6570\u8C03\u6574\u4E3A <code>PickerOption[]</code> \u7C7B\u578B</li>\n<li>\u79FB\u9664\u672A\u5728\u6587\u6863\u4E2D\u6807\u6CE8\u7684 <code>getArea</code> \u5B9E\u4F8B\u65B9\u6CD5</li>\n</ul>\n<h4 id="popup" tabindex="-1">Popup</h4>\n<p>Popup \u7684 CSS \u6837\u5F0F\u8FDB\u884C\u4E86\u4E00\u5B9A\u8C03\u6574\uFF0C\u5982\u679C\u4F60\u5728 Popup \u7EC4\u4EF6\u4E0A\u6DFB\u52A0\u4E86\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684 CSS \u6837\u5F0F\uFF0C\u8BF7\u786E\u8BA4\u672C\u6B21\u5347\u7EA7\u662F\u5426\u5BF9\u9879\u76EE\u4E2D\u7684 UI \u4EA7\u751F\u5F71\u54CD\u3002</p>\n<ul>\n<li>\u9ED8\u8BA4\u6DFB\u52A0\u4E86 <code>box-sizing: border-box</code> \u6837\u5F0F</li>\n<li>\u8C03\u6574\u4E86 <code>position=&quot;center&quot;</code> \u65F6\u7684\u6C34\u5E73\u5C45\u4E2D\u65B9\u5F0F\uFF0C\u4EE5\u89E3\u51B3\u5F39\u7A97\u5BBD\u5EA6\u65E0\u6CD5\u6B63\u786E\u81EA\u9002\u5E94\u7684\u95EE\u9898\uFF1A</li>\n</ul>\n<pre><code class="language-less"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-selector-class">.van-popup--center</span> {\n  <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;\n  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>, <span class="hljs-number">0</span>);\n}\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-selector-class">.van-popup--center</span> {\n  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">width</span>: fit-content;\n  <span class="hljs-attribute">max-width</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100vw</span> - <span class="hljs-built_in">var</span>(--van-padding-md) * <span class="hljs-number">2</span>);\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;\n  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(-<span class="hljs-number">50%</span>);\n}\n</code></pre>\n<h4 id="tabs" tabindex="-1">Tabs</h4>\n<ul>\n<li>\u79FB\u9664\u4E86 <code>click</code> \u548C <code>disabled</code> \u4E8B\u4EF6\uFF0C\u8BF7\u4F7F\u7528 <code>click-tab</code> \u4E8B\u4EF6\u4EE3\u66FF</li>\n</ul>\n</div><h2 id="yang-shi-diao-zheng" tabindex="-1">\u6837\u5F0F\u8C03\u6574</h2>\n<div class="van-doc-card"><h3 id="zhu-se-diao-tong-yi" tabindex="-1">\u4E3B\u8272\u8C03\u7EDF\u4E00</h3>\n<p>\u5728\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0CVant \u7EC4\u4EF6\u6709\u4E24\u79CD\u4E3B\u8272\u8C03\uFF0C\u90E8\u5206\u7EC4\u4EF6\u91C7\u7528\u84DD\u8272\uFF08#1989fa\uFF09\u4F5C\u4E3A\u4E3B\u8272\u8C03\uFF0C\u53E6\u4E00\u90E8\u5206\u5219\u91C7\u7528\u7EA2\u8272\uFF08#ee0a24\uFF09\u3002</p>\n<p>\u4E3A\u4E86\u4FDD\u6301\u8272\u5F69\u89C4\u8303\u7684\u4E00\u81F4\u6027\uFF0C\u6211\u4EEC\u5728 Vant 4 \u4E2D\u5BF9\u4E3B\u8272\u8C03\u8FDB\u884C\u7EDF\u4E00\uFF0C\u6240\u6709\u7EC4\u4EF6\u5747\u91C7\u7528\u84DD\u8272\u4F5C\u4E3A\u4E3B\u8272\u8C03\u3002</p>\n<p>\u4EE5\u4E0B\u7EC4\u4EF6\u7684\u4E3B\u8272\u8C03\u7531\u7EA2\u8272\u8C03\u6574\u4E3A\u84DD\u8272\uFF1A</p>\n<ul>\n<li>AddressEdit</li>\n<li>AddressList</li>\n<li>Card</li>\n<li>Calendar</li>\n<li>Cascader</li>\n<li>ContactList</li>\n<li>ContactEdit</li>\n<li>CouponList</li>\n<li>Dialog</li>\n<li>DropdownMenu</li>\n<li>IndexBar</li>\n<li>Sidebar</li>\n<li>Steps</li>\n<li>Tabs</li>\n<li>TreeSelect</li>\n</ul>\n</div><div class="van-doc-card"><h3 id="yi-chu-less-bian-liang" tabindex="-1">\u79FB\u9664 Less \u53D8\u91CF</h3>\n<p>\u76EE\u524D Vant \u5DF2\u7ECF\u652F\u6301\u4E86\u57FA\u4E8E CSS \u53D8\u91CF\u7684\u4E3B\u9898\u5B9A\u5236\u80FD\u529B\uFF0C\u76F8\u8F83\u4E8E Less \u5B9A\u5236\u66F4\u52A0\u7075\u6D3B\u3002\u56E0\u6B64\uFF0CVant 4 \u5C06\u4E0D\u518D\u63D0\u4F9B\u57FA\u4E8E Less \u7684\u4E3B\u9898\u5B9A\u5236\u65B9\u5F0F\u3002</p>\n<p>\u8FD9\u610F\u5473\u7740 Vant \u7684 npm \u5305\u4E2D\u5C06\u4E0D\u518D\u4F1A\u5305\u542B <code>.less</code> \u6837\u5F0F\u6E90\u6587\u4EF6\uFF0C\u53EA\u4F1A\u63D0\u4F9B\u7F16\u8BD1\u540E\u7684 <code>.css</code> \u6837\u5F0F\u6587\u4EF6\u3002</p>\n<p>\u5982\u679C\u4F60\u7684\u9879\u76EE\u6B63\u5728\u4F7F\u7528\u65E7\u7248\u7684 Less \u4E3B\u9898\u5B9A\u5236\uFF0C\u8BF7\u4F7F\u7528 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u5168\u5C40\u914D\u7F6E</a> \u7EC4\u4EF6\u8FDB\u884C\u66FF\u6362\u3002</p>\n</div><div class="van-doc-card"><h3 id="jian-hua-css-bian-liang-ming" tabindex="-1">\u7B80\u5316 CSS \u53D8\u91CF\u540D</h3>\n<p>\u8003\u8651\u5230 <strong>\u4EE3\u7801\u4F53\u79EF</strong> \u548C <strong>\u4F7F\u7528\u4FBF\u6377\u6027</strong>\uFF0C\u6211\u4EEC\u5BF9\u90E8\u5206 CSS \u53D8\u91CF\u7684\u540D\u79F0\u8FDB\u884C\u4E86\u7B80\u5316\uFF0C\u5728\u53D8\u91CF\u540D\u4E2D\u4F7F\u7528\u4E86\u66F4\u7B80\u77ED\u7684\u5355\u8BCD\uFF0C\u4EE5\u51CF\u5C0F\u4EE3\u7801\u4F53\u79EF\u3002</p>\n<p>\u672C\u6B21\u5347\u7EA7\u6D89\u53CA\u4EE5\u4E0B\u53D8\u91CF\u540D\u53D8\u66F4\uFF1A</p>\n<pre><code class="language-less"><span class="hljs-selector-tag">animation-duration</span>               <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">duration</span>\n<span class="hljs-selector-tag">animation-timing-function-enter</span>  <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">ease-out</span>\n<span class="hljs-selector-tag">animation-timing-function-leave</span>  <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">ease-in</span>\n<span class="hljs-selector-tag">background-color</span>                 <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">background</span>\n<span class="hljs-selector-tag">background-color-light</span>           <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">background-2</span>\n<span class="hljs-selector-tag">border-radius</span>                    <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">radius</span>\n<span class="hljs-selector-tag">border-width-base</span>                <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">border-width</span>\n<span class="hljs-selector-tag">box-shadow</span>                       <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">shadow</span>\n<span class="hljs-selector-tag">font-family</span>                      <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">font</span>\n<span class="hljs-selector-tag">font-weight-bold</span>                 <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">font-bold</span>\n<span class="hljs-selector-tag">price-integer-font</span>               <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">price-font</span>\n<span class="hljs-selector-tag">text-link</span>                        <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">link</span>\n<span class="hljs-selector-tag">transition-duration</span>              <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">duration</span>\n</code></pre>\n<p>\u7531\u4E8E\u6D89\u53CA\u7684 CSS \u53D8\u91CF\u8F83\u591A\uFF0C\u5EFA\u8BAE\u5728\u4EE3\u7801\u4ED3\u5E93\u4E2D\u8FDB\u884C\u5168\u5C40\u5339\u914D\u548C\u66FF\u6362\u3002</p>\n<p>\u5BF9\u4E8E <code>ConfigProvider</code> \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u65B0\u589E\u4E86 <code>ConfigProviderThemeVars</code> \u7C7B\u578B\u5B9A\u4E49\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u63D0\u793A\u3002\u5728 TypeScript \u4EE3\u7801\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u7C7B\u578B\u63D0\u793A\u6765\u786E\u4FDD\u4E3B\u9898\u53D8\u91CF\u88AB\u6B63\u786E\u66FF\u6362\u3002</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ConfigProviderThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-attr">themeVars</span>: <span class="hljs-title class_">ConfigProviderThemeVars</span> = {\n  <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#x27;4px&#x27;</span>,\n};\n</code></pre>\n</div>'},null,8,l))}}}]);