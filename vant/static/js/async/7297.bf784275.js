/*! For license information please see 7297.bf784275.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7297"],{87076:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return l}});var t=a("36840");let e=["innerHTML"];var l={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Tab</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to switch between different content areas.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tab</span>, <span class="hljs-title class_">Tabs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tab</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabs</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>The first tab is active by default, you can set <code>v-model:active</code> to active specified tab.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab&#x27; + index&quot;</span>&gt;</span>\n    content of tab {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">return</span> { active };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="match-by-name" tabindex="-1">Match By Name</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tab 1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>content of tab 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tab 2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>content of tab 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tab 3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>content of tab 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> activeName = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;b&#x27;</span>);\n    <span class="hljs-keyword">return</span> { activeName };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="swipe-tabs" tabindex="-1">Swipe Tabs</h3>\n<p>By default more than 5 tabs, you can scroll through the tabs. You can set <code>swipe-threshold</code> attribute to customize threshold number.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 8&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab&#x27; + index&quot;</span>&gt;</span>\n    content of tab {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled-tab" tabindex="-1">Disabled Tab</h3>\n<p>Use <code>disabled</code> prop to disable a tab.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 3&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab&#x27; + index&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;index === 2&quot;</span>&gt;</span>\n    content of tab {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="card-style" tabindex="-1">Card Style</h3>\n<p>Tabs styled as cards.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 3&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab&#x27; + index&quot;</span>&gt;</span>\n    content of tab {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="click-tab-event" tabindex="-1">Click Tab Event</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">click-tab</span>=<span class="hljs-string">&quot;onClickTab&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 2&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab&#x27; + index&quot;</span>&gt;</span>\n    content of tab {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickTab</span> = (<span class="hljs-params">{ title }</span>) =&gt; <span class="hljs-title function_">showToast</span>(title);\n    <span class="hljs-keyword">return</span> {\n      onClickTab,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="sticky" tabindex="-1">Sticky</h3>\n<p>In sticky mode, the tab nav will be fixed to top when scroll to top.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">sticky</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab &#x27; + index&quot;</span>&gt;</span>\n    content {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shrink" tabindex="-1">Shrink</h3>\n<p>In shrink mode, the tabs will be shrinked to the left.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">shrink</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab &#x27; + index&quot;</span>&gt;</span>\n    content {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-title" tabindex="-1">Custom title</h3>\n<p>Use title slot to custom tab title.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;more-o&quot;</span> /&gt;</span>tab <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    content {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="switch-animation" tabindex="-1">Switch Animation</h3>\n<p>Use <code>animated</code> props to change tabs with animation.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">animated</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab &#x27; + index&quot;</span>&gt;</span>\n    content {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="swipeable" tabindex="-1">Swipeable</h3>\n<p>In swipeable mode, you can switch tabs with swipe gesture in the content.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">swipeable</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab &#x27; + index&quot;</span>&gt;</span>\n    content {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="scrollspy" tabindex="-1">Scrollspy</h3>\n<p>In scrollspy mode, the list of content will be tiled.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">scrollspy</span> <span class="hljs-attr">sticky</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 8&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab &#x27; + index&quot;</span>&gt;</span>\n    content {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="before-change" tabindex="-1">Before Change</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">:before-change</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#x27;tab &#x27; + index&quot;</span>&gt;</span>\n    content {{ index }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeChange</span> = (<span class="hljs-params">index</span>) =&gt; {\n      <span class="hljs-comment">// prevent change</span>\n      <span class="hljs-keyword">if</span> (index === <span class="hljs-number">1</span>) {\n        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n      }\n\n      <span class="hljs-comment">// async</span>\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n        <span class="hljs-title function_">resolve</span>(index !== <span class="hljs-number">3</span>);\n      });\n    };\n\n    <span class="hljs-keyword">return</span> {\n      active,\n      beforeChange,\n    };\n  },\n};\n</code></pre>\n<blockquote>\n<p>Tips: The before-change callback will not be triggered by swiping gesture.</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="hide-header" tabindex="-1">Hide Header</h3>\n<p>By setting the <code>showHeader</code> prop to <code>false</code>, the title bar of the Tabs component can be hidden. In this case, you can control the <code>active</code> prop of the Tabs using custom components.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">:show-header</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span>&gt;</span> content {{ index }} <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="tabs-props" tabindex="-1">Tabs Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:active</td>\n<td>Index of active tab</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>Can be set to <code>line</code> <code>card</code></td>\n<td><em>string</em></td>\n<td><code>line</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Tab color</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>Background color</td>\n<td><em>string</em></td>\n<td><code>white</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Toggle tab\'s animation time</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>line-width</td>\n<td>Width of tab line</td>\n<td><em>number | string</em></td>\n<td><code>40px</code></td>\n</tr>\n<tr>\n<td>line-height</td>\n<td>Height of tab line</td>\n<td><em>number | string</em></td>\n<td><code>3px</code></td>\n</tr>\n<tr>\n<td>animated</td>\n<td>Whether to change tabs with animation</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>Whether to show border when <code>type=&quot;line&quot;</code></td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>ellipsis</td>\n<td>Whether to ellipsis too long title</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>sticky</td>\n<td>Whether to use sticky mode</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>shrink</td>\n<td>Whether to shrink the the tabs to the left</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td>Whether to enable gestures to slide left and right</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>Whether to enable tab content lazy render</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>scrollspy</td>\n<td>Whether to use scrollspy mode</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-header <code>v4.7.3</code></td>\n<td>Whether to show title bar</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>offset-top</td>\n<td>Sticky offset top , supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>swipe-threshold</td>\n<td>Set swipe tabs threshold</td>\n<td><em>number | string</em></td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td>title-active-color</td>\n<td>Title active color</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title-inactive-color</td>\n<td>Title inactive color</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-change</td>\n<td>Callback function before changing tabs, return <code>false</code> to prevent change, support return Promise</td>\n<td><em>(name: number | string) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="tab-props" tabindex="-1">Tab Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>Title</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable tab</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>Whether to show red dot on the title</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>badge</td>\n<td>Content of the badge on the title</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>name</td>\n<td>Identifier</td>\n<td><em>number | string</em></td>\n<td>Index of tab</td>\n</tr>\n<tr>\n<td>url</td>\n<td>Link</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>to</td>\n<td>The target route should navigate to when clicked on, same as the <a href="https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to prop</a> of Vue Router</td>\n<td><em>string | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>replace</td>\n<td>If true, the navigation will not leave a history record</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>title-style</td>\n<td>Custom title style</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>Custom title class name</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>show-zero-badge</td>\n<td>Whether to show badge when the value is zero</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="tabs-events" tabindex="-1">Tabs Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click-tab</td>\n<td>Emitted when a tab is clicked</td>\n<td><em>{ name: string | number, title: string, event: MouseEvent, disabled: boolean }</em></td>\n</tr>\n<tr>\n<td>change</td>\n<td>Emitted when active tab changed</td>\n<td><em>name: string | number, title: string</em></td>\n</tr>\n<tr>\n<td>rendered</td>\n<td>Emitted when content first rendered in lazy-render mode</td>\n<td><em>name: string | number, title: string</em></td>\n</tr>\n<tr>\n<td>scroll</td>\n<td>Emitted when tab scrolling in sticky mode</td>\n<td><em>{ scrollTop: number, isFixed: boolean }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="tabs-methods" tabindex="-1">Tabs Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Tabs instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>resize</td>\n<td>Resize Tabs when container element resized or visibility changed</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>scrollTo</td>\n<td>Go to specified tab in scrollspy mode</td>\n<td><em>name: string | number</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabProps</span>, <span class="hljs-title class_">TabsType</span>, <span class="hljs-title class_">TabsProps</span>, <span class="hljs-title class_">TabsInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>TabsInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabsInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> tabsRef = ref&lt;<span class="hljs-title class_">TabsInstance</span>&gt;();\n\ntabsRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">scrollTo</span>(<span class="hljs-number">0</span>);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tabs-slots" tabindex="-1">Tabs Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>nav-left</td>\n<td>Custom nav left content</td>\n</tr>\n<tr>\n<td>nav-right</td>\n<td>Custom nav right content</td>\n</tr>\n<tr>\n<td>nav-bottom</td>\n<td>Custom nav bottom content</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="tab-slots" tabindex="-1">Tab Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Content of tab</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Custom tab title</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-tab-text-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tab-active-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tab-disabled-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tab-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tab-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-default-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-line-height</td>\n<td><em>44px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-card-height</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-nav-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-bottom-bar-width</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-bottom-bar-height</td>\n<td><em>3px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tabs-bottom-bar-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);