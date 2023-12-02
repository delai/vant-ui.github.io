/*! For license information please see 8404.9618d3c9.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["8404"],{52174:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return t}});var l=n("61423"),e=n("35859"),t=(0,e.default)({},[["render",l.render]])},61423:function(s,a,n){"use strict";n.r(a);var l=n("79292");n.es(l,a)},79292:function(s,a,n){"use strict";n.r(a),n.d(a,{render:function(){return c}});var l=n("38613");let e={class:"van-doc-markdown-body"},t=[(0,l.createStaticVNode)('<h1>\u4ECE v2 \u5347\u7EA7\u5230 v3</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u672C\u6587\u6863\u63D0\u4F9B\u4E86\u4ECE Vant 2 \u5230 Vant 3 \u7684\u5347\u7EA7\u6307\u5357\u3002</p></div><div class="van-doc-card"><h3 id="sheng-ji-bu-zou" tabindex="-1">\u5347\u7EA7\u6B65\u9AA4</h3><h4 id="1.-sheng-ji-vue-3" tabindex="-1">1. \u5347\u7EA7 Vue 3</h4><p>Vant 3 \u662F\u57FA\u4E8E Vue 3 \u5F00\u53D1\u7684\uFF0C\u5728\u4F7F\u7528 Vant 3 \u524D\uFF0C\u8BF7\u5C06\u9879\u76EE\u4E2D\u7684 Vue \u5347\u7EA7\u5230 3.0 \u4EE5\u4E0A\u7248\u672C\u3002</p><h4 id="2.-chu-li-bu-jian-rong-geng-xin" tabindex="-1">2. \u5904\u7406\u4E0D\u517C\u5BB9\u66F4\u65B0</h4><p>Vant 2 \u5230 Vant 3 \u5B58\u5728\u4E00\u4E9B\u4E0D\u517C\u5BB9\u66F4\u65B0\uFF0C\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4E0B\u65B9\u7684\u4E0D\u517C\u5BB9\u66F4\u65B0\u5185\u5BB9\uFF0C\u5E76\u4F9D\u6B21\u5904\u7406\u3002</p></div><h2 id="bu-jian-rong-geng-xin" tabindex="-1">\u4E0D\u517C\u5BB9\u66F4\u65B0</h2><div class="van-doc-card"><h3 id="zu-jian-ming-ming-diao-zheng" tabindex="-1">\u7EC4\u4EF6\u547D\u540D\u8C03\u6574</h3><p>GoodsAction \u5546\u54C1\u5BFC\u822A\u7EC4\u4EF6\u91CD\u547D\u540D\u4E3A <strong>ActionBar \u884C\u52A8\u680F</strong>\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action-icon</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u56FE\u6807&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action-button</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6309\u94AE&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-goods-action</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u56FE\u6807&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6309\u94AE&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="fei-qi-zu-jian" tabindex="-1">\u5E9F\u5F03\u7EC4\u4EF6</h3><p>\u79FB\u9664 SwitchCell \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Cell \u548C Switch \u7EC4\u4EF6\u4EE3\u66FF\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-switch-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="dan-chuang-xing-zu-jian-v-model-bian-geng" tabindex="-1">\u5F39\u7A97\u578B\u7EC4\u4EF6 v-model \u53D8\u66F4</h3><p>\u4E3A\u4E86\u9002\u914D Vue 3 \u7684 v-model API \u7528\u6CD5\u53D8\u66F4\uFF0C\u6240\u6709\u63D0\u4F9B v-model \u5C5E\u6027\u7684\u7EC4\u4EF6\u5728\u7528\u6CD5\u4E0A\u6709\u4E00\u5B9A\u8C03\u6574\u3002\u4EE5\u4E0B\u5F39\u7A97\u7C7B\u7EC4\u4EF6\u7684 <code>v-model</code> \u88AB\u91CD\u547D\u540D\u4E3A <code>v-model:show</code>\uFF1A</p><ul><li>ActionSheet</li><li>Calendar</li><li>Dialog</li><li>ImagePreview</li><li>Notify</li><li>Popover</li><li>Popup</li><li>ShareSheet</li></ul><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xing-zu-jian-v-model-nei-bu-zhi-bian-geng" tabindex="-1">\u8868\u5355\u578B\u7EC4\u4EF6 v-model \u5185\u90E8\u503C\u53D8\u66F4</h3><p>\u4EE5\u4E0B\u8868\u5355\u578B\u7EC4\u4EF6 v-model \u5BF9\u5E94\u7684 prop \u91CD\u547D\u540D\u4E3A <code>modelValue</code>\uFF0Cevent \u91CD\u547D\u540D\u4E3A <code>update:modelValue</code>\uFF1A</p><ul><li>Checkbox</li><li>CheckboxGroup</li><li>DatetimePicker</li><li>DropdownItem</li><li>Field</li><li>Radio</li><li>RadioGroup</li><li>Search</li><li>Stepper</li><li>Switch</li><li>Sidebar</li><li>Uploader</li></ul><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">update:model-value</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="qi-ta-v-model-diao-zheng" tabindex="-1">\u5176\u4ED6 v-model \u8C03\u6574</h3><ul><li>Circle: <code>v-model</code> \u91CD\u547D\u540D\u4E3A <code>v-model:currentRate</code></li><li>CouponList: <code>v-model</code> \u91CD\u547D\u540D\u4E3A <code>v-model:code</code></li><li>List: <code>v-model</code> \u91CD\u547D\u540D\u4E3A <code>v-model:loading</code>\uFF0C<code>error.sync</code> \u91CD\u547D\u540D\u4E3A <code>v-model:error</code></li><li>Tabs: <code>v-model</code> \u91CD\u547D\u540D\u4E3A <code>v-model:active</code></li><li>TreeSelect: <code>active-id.sync</code> \u91CD\u547D\u540D\u4E3A <code>v-model:active-id</code></li><li>TreeSelect: <code>main-active-index.sync</code> \u91CD\u547D\u540D\u4E3A <code>v-model:main-active-index</code></li></ul></div><div class="van-doc-card"><h3 id="hui-biao-shu-xing-ming-ming-diao-zheng" tabindex="-1">\u5FBD\u6807\u5C5E\u6027\u547D\u540D\u8C03\u6574</h3><p>\u5728\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7 info \u5C5E\u6027\u6765\u5C55\u793A\u56FE\u6807\u53F3\u4E0A\u89D2\u7684\u5FBD\u6807\u4FE1\u606F\uFF0C\u4E3A\u4E86\u66F4\u7B26\u5408\u793E\u533A\u7684\u547D\u540D\u4E60\u60EF\uFF0C\u6211\u4EEC\u5C06\u8FD9\u4E2A\u5C5E\u6027\u91CD\u547D\u540D\u4E3A badge\uFF0C\u5F71\u54CD\u4EE5\u4E0B\u7EC4\u4EF6\uFF1A</p><ul><li>Tab</li><li>Icon</li><li>GridItem</li><li>TreeSelect</li><li>TabbarItem</li><li>SidebarItem</li><li>GoodsActionIcon</li></ul><p>\u540C\u65F6\u5185\u90E8\u4F7F\u7528\u7684 Info \u7EC4\u4EF6\u4E5F\u4F1A\u91CD\u547D\u540D\u4E3A Badge\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">info</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="chong-ming-ming-get-container-shu-xing" tabindex="-1">\u91CD\u547D\u540D get-container \u5C5E\u6027</h3><p>Vue 3.0 \u4E2D\u589E\u52A0\u4E86 <code>Teleport</code> \u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u5C06\u7EC4\u4EF6\u6E32\u67D3\u5230\u4EFB\u610F DOM \u4F4D\u7F6E\u7684\u80FD\u529B\uFF0CVant 2 \u4E5F\u901A\u8FC7 <code>get-container</code> \u5C5E\u6027\u63D0\u4F9B\u4E86\u7C7B\u4F3C\u7684\u80FD\u529B\u3002\u4E3A\u4E86\u4E0E\u5B98\u65B9\u7684 API \u4FDD\u6301\u4E00\u81F4\uFF0CVant \u4E2D\u7684 <code>get-container</code> \u5C5E\u6027\u5C06\u91CD\u547D\u540D\u4E3A <code>teleport</code>\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">get-container</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">:get-container</span>=<span class="hljs-string">&quot;getContainer&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      <span class="hljs-title function_">getContainer</span>(<span class="hljs-params"></span>) {\n        <span class="hljs-keyword">return</span> <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;#container&#39;</span>);\n      },\n    },\n  };\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">:teleport</span>=<span class="hljs-string">&quot;container&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-title function_">beforeCreate</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-variable language_">this</span>.<span class="hljs-property">container</span> = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;#container&#39;</span>);\n    },\n  };\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="api-diao-zheng" tabindex="-1">API \u8C03\u6574</h3><h4 id="area" tabindex="-1">Area</h4><ul><li><code>change</code> \u4E8B\u4EF6\u53C2\u6570\u4E0D\u518D\u4F20\u5165\u7EC4\u4EF6\u5B9E\u4F8B</li></ul><h4 id="button" tabindex="-1">Button</h4><ul><li>\u84DD\u8272\u6309\u94AE\u5BF9\u5E94\u7684\u7C7B\u578B\u7531 <code>info</code> \u8C03\u6574\u4E3A <code>primary</code></li><li>\u7EFF\u8272\u6309\u94AE\u5BF9\u5E94\u7684\u7C7B\u578B\u7531 <code>primary</code> \u8C03\u6574\u4E3A <code>success</code></li><li><code>native-type</code> \u7684\u9ED8\u8BA4\u503C\u7531 <code>submit</code> \u8C03\u6574\u4E3A <code>button</code></li></ul><h4 id="checkbox" tabindex="-1">Checkbox</h4><ul><li>\u5728 Cell \u5185\u90E8\u4F7F\u7528\u65F6\uFF0C\u73B0\u5728\u9700\u8981\u624B\u52A8\u6DFB\u52A0 <code>@click.stop</code> \u6765\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</li></ul><h4 id="dialog" tabindex="-1">Dialog</h4><ul><li>\u9ED8\u8BA4\u5173\u95ED <code>allow-html</code> \u5C5E\u6027</li><li><code>before-close</code> \u5C5E\u6027\u7528\u6CD5\u8C03\u6574\uFF0C\u4E0D\u518D\u4F20\u5165 done \u51FD\u6570\uFF0C\u800C\u662F\u901A\u8FC7\u8FD4\u56DE Promise \u6765\u63A7\u5236</li></ul><h4 id="datetimepicker" tabindex="-1">DatetimePicker</h4><ul><li><code>change</code> \u4E8B\u4EF6\u53C2\u6570\u4E0D\u518D\u4F20\u5165\u7EC4\u4EF6\u5B9E\u4F8B</li></ul><h4 id="imagepreview" tabindex="-1">ImagePreview</h4><ul><li>\u79FB\u9664 <code>async-close</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u65B0\u589E\u7684 <code>before-close</code> \u5C5E\u6027\u4EE3\u66FF</li></ul><h4 id="picker" tabindex="-1">Picker</h4><ul><li><code>change</code> \u4E8B\u4EF6\u53C2\u6570\u4E0D\u518D\u4F20\u5165\u7EC4\u4EF6\u5B9E\u4F8B</li><li>\u9ED8\u8BA4\u5173\u95ED <code>allow-html</code> \u5C5E\u6027</li><li>\u9ED8\u8BA4\u5F00\u542F <code>show-toolbar</code> \u5C5E\u6027</li><li>\u7EA7\u8054\u9009\u62E9\u4E0B\uFF0C<code>confirm</code>\u3001<code>change</code> \u4E8B\u4EF6\u8FD4\u56DE\u7684\u56DE\u8C03\u53C2\u6570\u5C06\u5305\u542B\u4E3A\u5B8C\u6574\u7684\u9009\u9879\u5BF9\u8C61\u3002</li></ul><h4 id="popover" tabindex="-1">Popover</h4><ul><li><code>trigger</code> \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u8C03\u6574\u4E3A <code>click</code></li></ul><h4 id="stepper" tabindex="-1">Stepper</h4><ul><li><code>async-change</code> \u5C5E\u6027\u91CD\u547D\u540D\u4E3A <code>before-change</code>\uFF0C\u5E76\u8C03\u6574\u4F7F\u7528\u65B9\u6CD5</li></ul><h4 id="swipecell" tabindex="-1">SwipeCell</h4><ul><li><code>open</code> \u4E8B\u4EF6\u7684 <code>detail</code> \u53C2\u6570\u91CD\u547D\u540D\u4E3A <code>name</code></li><li><code>on-close</code> \u5C5E\u6027\u91CD\u547D\u540D\u4E3A <code>before-close</code>\uFF0C\u5E76\u8C03\u6574\u53C2\u6570\u7ED3\u6784</li><li><code>before-close</code> \u5C5E\u6027\u4E0D\u518D\u4F20\u5165\u7EC4\u4EF6\u5B9E\u4F8B</li></ul><h4 id="toast" tabindex="-1">Toast</h4><ul><li><code>mask</code> \u5C5E\u6027\u91CD\u547D\u540D\u4E3A <code>overlay</code></li></ul><h4 id="treeselect" tabindex="-1">TreeSelect</h4><ul><li><code>navclick</code> \u4E8B\u4EF6\u91CD\u547D\u540D\u4E3A <code>click-nav</code></li><li><code>itemclick</code> \u4E8B\u4EF6\u91CD\u547D\u540D\u4E3A <code>click-item</code></li></ul></div><div class="van-doc-card"><h3 id="zhu-ce-quan-ju-fang-fa" tabindex="-1">\u6CE8\u518C\u5168\u5C40\u65B9\u6CD5</h3><p>Vant 2 \u4E2D\u9ED8\u8BA4\u63D0\u4F9B\u4E86 <code>$toast</code>\u3001<code>$dialog</code> \u7B49\u5168\u5C40\u65B9\u6CD5\uFF0C\u4F46 Vue 3.0 \u4E0D\u518D\u652F\u6301\u76F4\u63A5\u5728 Vue \u7684\u539F\u578B\u94FE\u4E0A\u6302\u8F7D\u65B9\u6CD5\uFF0C\u56E0\u6B64\u4ECE Vant 3.0 \u5F00\u59CB\uFF0C\u4F7F\u7528\u5168\u5C40\u65B9\u6CD5\u524D\u5FC5\u987B\u5148\u901A\u8FC7 <code>app.use</code> \u5C06\u7EC4\u4EF6\u6CE8\u518C\u5230\u5BF9\u5E94\u7684 app \u4E0A\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span>, <span class="hljs-title class_">Dialog</span>, <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-comment">// \u5C06 Toast \u7B49\u7EC4\u4EF6\u6CE8\u518C\u5230 app \u4E0A</span>\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);\n\n<span class="hljs-comment">// app \u5185\u7684\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528 $toast \u7B49\u65B9\u6CD5</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-variable language_">this</span>.$toast(<span class="hljs-string">&#39;\u63D0\u793A\u6587\u6848&#39;</span>);\n  },\n};\n</code></pre></div>',13)];function c(s,a){return(0,l.openBlock)(),(0,l.createElementBlock)("div",e,t)}}}]);