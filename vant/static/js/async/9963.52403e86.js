/*! For license information please see 9963.52403e86.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9963"],{41643:function(s,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var a=t("69298");let e=["innerHTML"];var l={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>NumberKeyboard</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>The NumberKeyboard component can be used with <a href="#/en-US/password-input" target="_blank">PasswordInput</a> component or custom input box components.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="default-keyboard" tabindex="-1">Default Keyboard</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Show Keyboard<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onInput</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title function_">showToast</span>(value);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;delete&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      onInput,\n      onDelete,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="keyboard-with-sidebar" tabindex="-1">Keyboard With Sidebar</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;custom&quot;</span>\n  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;.&quot;</span>\n  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;Close&quot;</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="idnumber-keyboard" tabindex="-1">IdNumber Keyboard</h3>\n<p>Use <code>extra-key</code> prop to set the content of bottom left button.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\n  Show IdNumber Keyboard\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;X&quot;</span>\n  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;Close&quot;</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="keyboard-with-title" tabindex="-1">Keyboard With Title</h3>\n<p>Use <code>title</code> prop to set keyboard title.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\n  Show Keyboard With Title\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Keyboard Title&quot;</span>\n  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;.&quot;</span>\n  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;Close&quot;</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="multiple-extrakey" tabindex="-1">Multiple ExtraKey</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\n  Show Keyboard With Multiple ExtraKey\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;custom&quot;</span>\n  <span class="hljs-attr">:extra-key</span>=<span class="hljs-string">&quot;[&#x27;00&#x27;, &#x27;.&#x27;]&quot;</span>\n  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;Close&quot;</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="random-key-order" tabindex="-1">Random Key Order</h3>\n<p>Use <code>random-key-order</code> prop to shuffle the order of keys.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\n  Show Keyboard With Random Key Order\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">random-key-order</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="bind-value" tabindex="-1">Bind Value</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;6&quot;</span>\n  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      show,\n      value,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Current value</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>show</td>\n<td>Whether to show keyboard</td>\n<td><em>boolean</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Keyboard title</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>theme</td>\n<td>Keyboard theme, can be set to <code>custom</code></td>\n<td><em>string</em></td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>maxlength</td>\n<td>Value maxlength</td>\n<td><em>number | string</em></td>\n<td><code>Infinity</code></td>\n</tr>\n<tr>\n<td>transition</td>\n<td>Whether to show transition animation</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Keyboard z-index</td>\n<td><em>number | string</em></td>\n<td><code>100</code></td>\n</tr>\n<tr>\n<td>extra-key</td>\n<td>Content of bottom left key</td>\n<td><em>string | string[]</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>close-button-text</td>\n<td>Close button text</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>delete-button-text</td>\n<td>Delete button text</td>\n<td><em>string</em></td>\n<td>Delete Icon</td>\n</tr>\n<tr>\n<td>close-button-loading</td>\n<td>Whether to show loading close button in custom theme</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-delete-key</td>\n<td>Whether to show delete button</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>blur-on-close</td>\n<td>Whether to emit blur event when clicking close button</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>hide-on-click-outside</td>\n<td>Whether to hide keyboard when outside is clicked</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where NumberKeyboard will be mounted</td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>Whether to enable bottom safe area adaptation</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>random-key-order</td>\n<td>Whether to shuffle the order of keys</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>input</td>\n<td>Emitted when a key is pressed</td>\n<td><em>key: string</em></td>\n</tr>\n<tr>\n<td>delete</td>\n<td>Emitted when the delete key is pressed</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>Emitted when the close button is clicked</td>\n<td>-</td>\n</tr>\n<tr>\n<td>blur</td>\n<td>Emitted when the close button is clicked or the keyboard is blurred</td>\n<td>-</td>\n</tr>\n<tr>\n<td>show</td>\n<td>Emitted when keyboard is fully displayed</td>\n<td>-</td>\n</tr>\n<tr>\n<td>hide</td>\n<td>Emitted when keyboard is fully hidden</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>delete</td>\n<td>Custom delete key content</td>\n</tr>\n<tr>\n<td>extra-key</td>\n<td>Custom extra key content</td>\n</tr>\n<tr>\n<td>title-left</td>\n<td>Custom title left content</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NumberKeyboardProps</span>, <span class="hljs-title class_">NumberKeyboardTheme</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-number-keyboard-background</td>\n<td><em>var(--van-gray-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-key-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-key-font-size</td>\n<td><em>28px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-key-active-color</td>\n<td><em>var(--van-gray-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-key-background</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-delete-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-title-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-title-height</td>\n<td><em>34px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-title-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-close-padding</td>\n<td><em>0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-close-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-close-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-button-text-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-button-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-number-keyboard-z-index</td>\n<td><em>100</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);