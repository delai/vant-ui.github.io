/*! For license information please see 4571.aef4e8dd.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4571"],{48859:function(t,s,d){"use strict";d.r(s),d.d(s,{default:function(){return n}});var a=d("115"),e=d("35859"),n=(0,e.default)({},[["render",a.render]])},115:function(t,s,d){"use strict";d.r(s);var a=d("59252");d.es(a,s)},59252:function(t,s,d){"use strict";d.r(s),d.d(s,{render:function(){return r}});var a=d("38613");let e={class:"van-doc-markdown-body"},n=[(0,a.createStaticVNode)('<h1>AddressEdit \u5730\u5740\u7F16\u8F91</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5730\u5740\u7F16\u8F91\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u65B0\u5EFA\u3001\u66F4\u65B0\u3001\u5220\u9664\u5730\u5740\u4FE1\u606F\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressEdit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressEdit</span>);\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-address-edit</span>\n  <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>\n  <span class="hljs-attr">show-delete</span>\n  <span class="hljs-attr">show-set-default</span>\n  <span class="hljs-attr">show-search-result</span>\n  <span class="hljs-attr">:search-result</span>=<span class="hljs-string">&quot;searchResult&quot;</span>\n  <span class="hljs-attr">:area-columns-placeholder</span>=<span class="hljs-string">&quot;[&#39;\u8BF7\u9009\u62E9&#39;, &#39;\u8BF7\u9009\u62E9&#39;, &#39;\u8BF7\u9009\u62E9&#39;]&quot;</span>\n  @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;onSave&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n  @<span class="hljs-attr">change-detail</span>=<span class="hljs-string">&quot;onChangeDetail&quot;</span>\n/&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> searchResult = <span class="hljs-title function_">ref</span>([]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSave</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;save&#39;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;delete&#39;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChangeDetail</span> = (<span class="hljs-params">val</span>) =&gt; {\n      <span class="hljs-keyword">if</span> (val) {\n        searchResult.<span class="hljs-property">value</span> = [\n          {\n            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3&#39;</span>,\n            <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u676D\u5DDE\u5E02\u897F\u6E56\u533A&#39;</span>,\n          },\n        ];\n      } <span class="hljs-keyword">else</span> {\n        searchResult.<span class="hljs-property">value</span> = [];\n      }\n    };\n\n    <span class="hljs-keyword">return</span> {\n      onSave,\n      onDelete,\n      areaList,\n      searchResult,\n      onChangeDetail,\n    };\n  },\n};\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>area-list</td><td>\u5730\u533A\u5217\u8868</td><td><em>object</em></td><td>-</td></tr><tr><td>area-columns-placeholder</td><td>\u5730\u533A\u9009\u62E9\u5217\u5360\u4F4D\u63D0\u793A\u6587\u5B57</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>area-placeholder</td><td>\u5730\u533A\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57</td><td><em>string</em></td><td><code>\u9009\u62E9\u7701 / \u5E02 / \u533A</code></td></tr><tr><td>address-info</td><td>\u5730\u5740\u4FE1\u606F\u521D\u59CB\u503C</td><td><em>AddressEditInfo</em></td><td><code>{}</code></td></tr><tr><td>search-result</td><td>\u8BE6\u7EC6\u5730\u5740\u641C\u7D22\u7ED3\u679C</td><td><em>AddressEditSearchItem[]</em></td><td><code>[]</code></td></tr><tr><td>show-delete</td><td>\u662F\u5426\u663E\u793A\u5220\u9664\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-set-default</td><td>\u662F\u5426\u663E\u793A\u9ED8\u8BA4\u5730\u5740\u680F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-search-result</td><td>\u662F\u5426\u663E\u793A\u641C\u7D22\u7ED3\u679C</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-area</td><td>\u662F\u5426\u663E\u793A\u5730\u533A</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-detail</td><td>\u662F\u5426\u663E\u793A\u8BE6\u7EC6\u5730\u5740</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disable-area</td><td>\u662F\u5426\u7981\u7528\u5730\u533A\u9009\u62E9</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>save-button-text</td><td>\u4FDD\u5B58\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u4FDD\u5B58</code></td></tr><tr><td>delete-button-text</td><td>\u5220\u9664\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u5220\u9664</code></td></tr><tr><td>detail-rows</td><td>\u8BE6\u7EC6\u5730\u5740\u8F93\u5165\u6846\u884C\u6570</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>detail-maxlength</td><td>\u8BE6\u7EC6\u5730\u5740\u6700\u5927\u957F\u5EA6</td><td><em>number | string</em></td><td><code>200</code></td></tr><tr><td>is-saving</td><td>\u662F\u5426\u663E\u793A\u4FDD\u5B58\u6309\u94AE\u52A0\u8F7D\u52A8\u753B</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-deleting</td><td>\u662F\u5426\u663E\u793A\u5220\u9664\u6309\u94AE\u52A0\u8F7D\u52A8\u753B</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>tel-validator</td><td>\u624B\u673A\u53F7\u683C\u5F0F\u6821\u9A8C\u51FD\u6570</td><td><em>(val: string) =&gt; boolean</em></td><td>-</td></tr><tr><td>tel-maxlength</td><td>\u624B\u673A\u53F7\u6700\u5927\u957F\u5EA6</td><td><em>number | string</em></td><td>-</td></tr><tr><td>validator</td><td>\u81EA\u5B9A\u4E49\u6821\u9A8C\u51FD\u6570</td><td><em>(key: string, val: string) =&gt; string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>save</td><td>\u70B9\u51FB\u4FDD\u5B58\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>info: AddressEditInfo</em></td></tr><tr><td>focus</td><td>\u8F93\u5165\u6846\u805A\u7126\u65F6\u89E6\u53D1</td><td><em>key: string</em></td></tr><tr><td>change <code>v4.7.0</code></td><td>\u4EC5 <code>name</code> \u548C <code>tel</code> \u8F93\u5165\u6846\u503C\u6539\u53D8\u89E6\u53D1</td><td><em>{key: string, value: string}</em></td></tr><tr><td>delete</td><td>\u786E\u8BA4\u5220\u9664\u5730\u5740\u65F6\u89E6\u53D1</td><td><em>info: AddressEditInfo</em></td></tr><tr><td>select-search</td><td>\u9009\u4E2D\u641C\u7D22\u7ED3\u679C\u65F6\u89E6\u53D1</td><td><em>value: string</em></td></tr><tr><td>click-area</td><td>\u70B9\u51FB\u6536\u4EF6\u5730\u533A\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>change-area</td><td>\u4FEE\u6539\u6536\u4EF6\u5730\u533A\u65F6\u89E6\u53D1</td><td><em>selectedOptions: PickerOption[]</em></td></tr><tr><td>change-detail</td><td>\u4FEE\u6539\u8BE6\u7EC6\u5730\u5740\u65F6\u89E6\u53D1</td><td><em>value: string</em></td></tr><tr><td>change-default</td><td>\u5207\u6362\u662F\u5426\u4F7F\u7528\u9ED8\u8BA4\u5730\u5740\u65F6\u89E6\u53D1</td><td><em>checked: boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5728\u90AE\u653F\u7F16\u7801\u4E0B\u65B9\u63D2\u5165\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 AddressEdit \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>setAddressDetail</td><td>\u8BBE\u7F6E\u8BE6\u7EC6\u5730\u5740</td><td><em>addressDetail: string</em></td><td>-</td></tr><tr><td>setAreaCode</td><td>\u8BBE\u7F6E\u5730\u533A\u7F16\u53F7</td><td><em>code: string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">AddressEditInfo</span>,\n  <span class="hljs-title class_">AddressEditProps</span>,\n  <span class="hljs-title class_">AddressEditInstance</span>,\n  <span class="hljs-title class_">AddressEditSearchItem</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre><p><code>AddressEditInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AddressEditInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> addressEditRef = ref&lt;<span class="hljs-title class_">AddressEditInstance</span>&gt;();\n\naddressEditRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">setAddressDetail</span>(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre></div><div class="van-doc-card"><h3 id="addresseditinfo-shu-ju-ge-shi" tabindex="-1">AddressEditInfo \u6570\u636E\u683C\u5F0F</h3><p>\u6CE8\u610F\uFF1A<code>AddressEditInfo</code> \u4EC5\u4F5C\u4E3A\u521D\u59CB\u503C\u4F20\u5165\uFF0C\u8868\u5355\u6700\u7EC8\u5185\u5BB9\u53EF\u4EE5\u5728 save \u4E8B\u4EF6\u4E2D\u83B7\u53D6\u3002</p><table><thead><tr><th>key</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>name</td><td>\u59D3\u540D</td><td><em>string</em></td></tr><tr><td>tel</td><td>\u624B\u673A\u53F7</td><td><em>string</em></td></tr><tr><td>province</td><td>\u7701\u4EFD</td><td><em>string</em></td></tr><tr><td>city</td><td>\u57CE\u5E02</td><td><em>string</em></td></tr><tr><td>county</td><td>\u533A\u53BF</td><td><em>string</em></td></tr><tr><td>addressDetail</td><td>\u8BE6\u7EC6\u5730\u5740</td><td><em>string</em></td></tr><tr><td>areaCode</td><td>\u5730\u533A\u7F16\u7801\uFF0C\u901A\u8FC7 <a href="#/zh-CN/area" target="_blank">\u7701\u5E02\u533A\u9009\u62E9</a> \u83B7\u53D6\uFF08\u5FC5\u586B\uFF09</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>\u662F\u5426\u4E3A\u9ED8\u8BA4\u5730\u5740</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="addresseditsearchitem-shu-ju-ge-shi" tabindex="-1">AddressEditSearchItem \u6570\u636E\u683C\u5F0F</h3><table><thead><tr><th>key</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>name</td><td>\u5730\u540D</td><td><em>string</em></td></tr><tr><td>address</td><td>\u8BE6\u7EC6\u5730\u5740</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sheng-shi-xian-lie-biao-shu-ju-ge-shi" tabindex="-1">\u7701\u5E02\u53BF\u5217\u8868\u6570\u636E\u683C\u5F0F</h3><p>\u8BF7\u53C2\u8003 <a href="#/zh-CN/area" target="_blank">Area \u7701\u5E02\u533A\u9009\u62E9</a> \u7EC4\u4EF6\u3002</p></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-address-edit-padding</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-edit-buttons-padding</td><td><em>var(--van-padding-xl) var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-address-edit-button-margin-bottom</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-edit-button-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr></tbody></table></div>',16)];function r(t,s){return(0,a.openBlock)(),(0,a.createElementBlock)("div",e,n)}}}]);