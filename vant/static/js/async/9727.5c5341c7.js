/*! For license information please see 9727.5c5341c7.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9727"],{39368:function(t,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var e=s("36840");let d=["innerHTML"];var a={setup:()=>({html:""}),render:()=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>AddressEdit</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to create, update, and delete receiving addresses.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressEdit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressEdit</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-address-edit</span>\n  <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>\n  <span class="hljs-attr">show-delete</span>\n  <span class="hljs-attr">show-set-default</span>\n  <span class="hljs-attr">show-search-result</span>\n  <span class="hljs-attr">:search-result</span>=<span class="hljs-string">&quot;searchResult&quot;</span>\n  <span class="hljs-attr">:area-columns-placeholder</span>=<span class="hljs-string">&quot;[&#x27;Choose&#x27;, &#x27;Choose&#x27;, &#x27;Choose&#x27;]&quot;</span>\n  @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;onSave&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n  @<span class="hljs-attr">change-detail</span>=<span class="hljs-string">&quot;onChangeDetail&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> searchResult = <span class="hljs-title function_">ref</span>([]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSave</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;save&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;delete&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChangeDetail</span> = (<span class="hljs-params">val</span>) =&gt; {\n      <span class="hljs-keyword">if</span> (val) {\n        searchResult.<span class="hljs-property">value</span> = [\n          {\n            <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Name1&#x27;</span>,\n            <span class="hljs-attr">address</span>: <span class="hljs-string">&#x27;Address&#x27;</span>,\n          },\n        ];\n      } <span class="hljs-keyword">else</span> {\n        searchResult.<span class="hljs-property">value</span> = [];\n      }\n    };\n\n    <span class="hljs-keyword">return</span> {\n      onSave,\n      onDelete,\n      areaList,\n      searchResult,\n      onChangeDetail,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>area-list</td>\n<td>Area List</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>area-columns-placeholder</td>\n<td>placeholder of area columns</td>\n<td><em>string[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>area-placeholder</td>\n<td>placeholder of area input field</td>\n<td><em>string</em></td>\n<td><code>Area</code></td>\n</tr>\n<tr>\n<td>address-info</td>\n<td>Address Info</td>\n<td><em>AddressEditInfo</em></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>search-result</td>\n<td>Address search result</td>\n<td><em>AddressEditSearchItem[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>show-delete</td>\n<td>Whether to show delete button</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-set-default</td>\n<td>Whether to show default address switch</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-search-result</td>\n<td>Whether to show address search result</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-area</td>\n<td>Whether to show area cell</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-detail</td>\n<td>Whether to show detail field</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>disable-area</td>\n<td>Whether to disable area select</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>save-button-text</td>\n<td>Save button text</td>\n<td><em>string</em></td>\n<td><code>Save</code></td>\n</tr>\n<tr>\n<td>delete-button-text</td>\n<td>Delete button text</td>\n<td><em>string</em></td>\n<td><code>Delete</code></td>\n</tr>\n<tr>\n<td>detail-rows</td>\n<td>Detail input rows</td>\n<td><em>number | string</em></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>detail-maxlength</td>\n<td>Detail maxlength</td>\n<td><em>number | string</em></td>\n<td><code>200</code></td>\n</tr>\n<tr>\n<td>is-saving</td>\n<td>Whether to show save button loading status</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>is-deleting</td>\n<td>Whether to show delete button loading status</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>tel-validator</td>\n<td>The method to validate tel</td>\n<td><em>(val: string) =&gt; boolean</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tel-maxlength</td>\n<td>Tel maxlength</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>validator</td>\n<td>Custom validator</td>\n<td><em>(key: string, val: string) =&gt; string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>save</td>\n<td>Emitted when the save button is clicked</td>\n<td><em>info: AddressEditInfo</em></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>Emitted when field is focused</td>\n<td><em>key: string</em></td>\n</tr>\n<tr>\n<td>change <code>v4.7.0</code></td>\n<td>Emitted when only the name and tel field are changed</td>\n<td><em>{key: string, value: string}</em></td>\n</tr>\n<tr>\n<td>delete</td>\n<td>Emitted when confirming delete</td>\n<td><em>info: AddressEditInfo</em></td>\n</tr>\n<tr>\n<td>select-search</td>\n<td>Emitted when a search result is selected</td>\n<td><em>value: string</em></td>\n</tr>\n<tr>\n<td>click-area</td>\n<td>Emitted when the area field is clicked</td>\n<td>-</td>\n</tr>\n<tr>\n<td>change-area</td>\n<td>Emitted when area changed</td>\n<td><em>selectedOptions: PickerOption[]</em></td>\n</tr>\n<tr>\n<td>change-detail</td>\n<td>Emitted when address detail changed</td>\n<td><em>value: string</em></td>\n</tr>\n<tr>\n<td>change-default</td>\n<td>Emitted when switching default address</td>\n<td><em>checked: boolean</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom content below address detail</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get AddressEdit instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>setAddressDetail</td>\n<td>Set address detail</td>\n<td><em>addressDetail: string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>setAreaCode</td>\n<td>Set area code</td>\n<td><em>code: string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">AddressEditInfo</span>,\n  <span class="hljs-title class_">AddressEditProps</span>,\n  <span class="hljs-title class_">AddressEditInstance</span>,\n  <span class="hljs-title class_">AddressEditSearchItem</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>AddressEditInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AddressEditInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> addressEditRef = ref&lt;<span class="hljs-title class_">AddressEditInstance</span>&gt;();\n\naddressEditRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">setAddressDetail</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="addresseditinfo-data-structure" tabindex="-1">AddressEditInfo Data Structure</h3>\n<table>\n<thead>\n<tr>\n<th>key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>Name</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>tel</td>\n<td>Phone</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>province</td>\n<td>Province</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>city</td>\n<td>City</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>county</td>\n<td>County</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>addressDetail</td>\n<td>Detailed Address</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>areaCode</td>\n<td>Area code</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>isDefault</td>\n<td>Is default address</td>\n<td><em>boolean</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="addresseditsearchitem-data-structure" tabindex="-1">AddressEditSearchItem Data Structure</h3>\n<table>\n<thead>\n<tr>\n<th>key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>Name</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>address</td>\n<td>Address</td>\n<td><em>string</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="area-data-structure" tabindex="-1">Area Data Structure</h3>\n<p>Please refer to <a href="#/en-US/area" target="_blank">Area</a> component.</p>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-address-edit-padding</td>\n<td><em>var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-edit-buttons-padding</td>\n<td><em>var(--van-padding-xl) var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-edit-button-margin-bottom</td>\n<td><em>var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-address-edit-button-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);