/*! For license information please see 6386.bd487edf.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6386"],{48176:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return l}});var t=a("36840");let e=["innerHTML"];var l={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Swipe</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to loop a group of pictures or content.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Swipe</span>, <span class="hljs-title class_">SwipeItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Swipe</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwipeItem</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>Use <code>autoplay</code> prop to set autoplay interval.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-swipe&quot;</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">indicator-color</span>=<span class="hljs-string">&quot;white&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.my-swipe</span> <span class="hljs-selector-class">.van-swipe-item</span> {\n    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">150px</span>;\n    <span class="hljs-attribute">text-align</span>: center;\n    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#39a9ed</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="lazy-render" tabindex="-1">Lazy Render</h3>\n<p>Use <code>lazy-render</code> prop to enable lazy rendering.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">lazy-render</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;image in images&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;image&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> images = [\n      <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>,\n      <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#x27;</span>,\n    ];\n    <span class="hljs-keyword">return</span> { images };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="change-event" tabindex="-1">Change Event</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Current Swipe index:&#x27;</span> + index);\n    <span class="hljs-keyword">return</span> { onChange };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="vertical-scrolling" tabindex="-1">Vertical Scrolling</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="set-swipeitem-size" tabindex="-1">Set SwipeItem Size</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n</code></pre>\n<blockquote>\n<p>It\'s not supported to set SwipeItem size in the loop mode.</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="custom-indicator" tabindex="-1">Custom Indicator</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">indicator</span>=<span class="hljs-string">&quot;{ active, total }&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span>&gt;</span>{{ active + 1 }}/{{ total }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.custom-indicator</span> {\n    <span class="hljs-attribute">position</span>: absolute;\n    <span class="hljs-attribute">right</span>: <span class="hljs-number">5px</span>;\n    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">5px</span>;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span> <span class="hljs-number">5px</span>;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;\n    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.1</span>);\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="swipe-props" tabindex="-1">Swipe Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>autoplay</td>\n<td>Autoplay interval (ms)</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Animation duration (ms)</td>\n<td><em>number | string</em></td>\n<td><code>500</code></td>\n</tr>\n<tr>\n<td>initial-swipe</td>\n<td>Index of initial swipe, start from 0</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>width</td>\n<td>Width of swipe item</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>height</td>\n<td>Height of swipe item</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>loop</td>\n<td>Whether to enable loop</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-indicators</td>\n<td>Whether to show indicators</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>vertical</td>\n<td>Whether to be vertical Scrolling</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>touchable</td>\n<td>Whether to allow swipe by touch gesture</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>stop-propagation</td>\n<td>Whether to stop touchmove event propagation</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>Whether to enable lazy render</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>indicator-color</td>\n<td>Indicator color</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="swipe-events" tabindex="-1">Swipe Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>Emitted when current swipe changed</td>\n<td><em>index: number</em></td>\n</tr>\n<tr>\n<td>drag-start <code>v4.0.9</code></td>\n<td>Emitted when user starts dragging the swipe</td>\n<td><em>{ index: number }</em></td>\n</tr>\n<tr>\n<td>drag-end <code>v4.0.9</code></td>\n<td>Emitted when user ends dragging the swipe</td>\n<td><em>{ index: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="swipeitem-events" tabindex="-1">SwipeItem Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when component is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="swipe-methods" tabindex="-1">Swipe Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Swipe instance and call instance methods..</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>prev</td>\n<td>Swipe to prev item</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>next</td>\n<td>Swipe to next item</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>swipeTo</td>\n<td>Swipe to target index</td>\n<td><em>index: number, options: SwipeToOptions</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>resize</td>\n<td>Resize Swipe when container element resized or visibility changed</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeProps</span>, <span class="hljs-title class_">SwipeInstance</span>, <span class="hljs-title class_">SwipeToOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>SwipeInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> swipeRef = ref&lt;<span class="hljs-title class_">SwipeInstance</span>&gt;();\n\nswipeRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">next</span>();\n</code></pre>\n</div><div class="van-doc-card"><h3 id="swipetooptions" tabindex="-1">SwipeToOptions</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>immediate</td>\n<td>Whether to skip animation</td>\n<td><em>boolean</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="swipe-slots" tabindex="-1">Swipe Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Content</td>\n<td>-</td>\n</tr>\n<tr>\n<td>indicator</td>\n<td>Custom indicator</td>\n<td><em>{ active: number, total: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-swipe-indicator-size</td>\n<td><em>6px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-swipe-indicator-margin</td>\n<td><em>var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-swipe-indicator-active-opacity</td>\n<td><em>1</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-swipe-indicator-inactive-opacity</td>\n<td><em>0.3</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-swipe-indicator-active-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-swipe-indicator-inactive-background</td>\n<td><em>var(--van-border-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);