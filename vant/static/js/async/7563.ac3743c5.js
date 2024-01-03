/*! For license information please see 7563.ac3743c5.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7563"],{83533:function(s,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var a=t("36840");let e=["innerHTML"];var l={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Circle</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Circular progress bar component, and supports gradient color animation.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Circle</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Circle</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;30&quot;</span>\n  <span class="hljs-attr">:speed</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentRate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> currentRate.<span class="hljs-property">value</span>.<span class="hljs-title function_">toFixed</span>(<span class="hljs-number">0</span>) + <span class="hljs-string">&#x27;%&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      text,\n      currentRate,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-width" tabindex="-1">Custom Width</h3>\n<p>The width of the progress bar is controlled by the <code>stroke-width</code> prop, <code>stroke-width</code> refers to the width of <code>path</code> in SVG, and the default value is <code>40</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>\n  <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">&quot;60&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Custom Width&quot;</span>\n/&gt;</span>\n</code></pre>\n<p>The unit of <code>stroke-width</code> is not <code>px</code>, if you want to know the relationship between <code>stroke-width</code> and <code>px</code>, you can use the following formula to calculate:</p>\n<pre><code class="language-js"><span class="hljs-comment">// viewBox size for SVG</span>\n<span class="hljs-keyword">const</span> viewBox = <span class="hljs-number">1000</span> + strokeWidth;\n\n<span class="hljs-comment">// The width of the Circle component, the default is 100px</span>\n<span class="hljs-keyword">const</span> circleWidth = <span class="hljs-number">100</span>;\n\n<span class="hljs-comment">// Final rendered progress bar width (px)</span>\n<span class="hljs-keyword">const</span> pxWidth = (strokeWidth * circleWidth) / viewBox;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>\n  <span class="hljs-attr">layer-color</span>=<span class="hljs-string">&quot;#ebedf0&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Custom Color&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="gradient" tabindex="-1">Gradient</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>\n  <span class="hljs-attr">:color</span>=<span class="hljs-string">&quot;gradientColor&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Gradient&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentRate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> gradientColor = {\n      <span class="hljs-string">&#x27;0%&#x27;</span>: <span class="hljs-string">&#x27;#3fecff&#x27;</span>,\n      <span class="hljs-string">&#x27;100%&#x27;</span>: <span class="hljs-string">&#x27;#6149f6&#x27;</span>,\n    };\n\n    <span class="hljs-keyword">return</span> {\n      currentRate,\n      gradientColor,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="counter-clockwise" tabindex="-1">Counter Clockwise</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>\n  <span class="hljs-attr">:clockwise</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Counter Clockwise&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-size" tabindex="-1">Custom Size</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>\n  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;120px&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Custom Size&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="start-position" tabindex="-1">Start Position</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Left&quot;</span>\n  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;left&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Right&quot;</span>\n  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;right&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>\n  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Bottom&quot;</span>\n  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:current-rate</td>\n<td>Current rate</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>rate</td>\n<td>Target rate</td>\n<td><em>number | string</em></td>\n<td><code>100</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Circle size</td>\n<td><em>number | string</em></td>\n<td><code>100px</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Progress color, passing object to render gradient</td>\n<td><em>string | object</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>layer-color</td>\n<td>Layer color</td>\n<td><em>string</em></td>\n<td><code>white</code></td>\n</tr>\n<tr>\n<td>fill</td>\n<td>Fill color</td>\n<td><em>string</em></td>\n<td><code>none</code></td>\n</tr>\n<tr>\n<td>speed</td>\n<td>Animate speed\uFF08rate/s\uFF09</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>text</td>\n<td>Text</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>stroke-width</td>\n<td>Stroke width</td>\n<td><em>number | string</em></td>\n<td><code>40</code></td>\n</tr>\n<tr>\n<td>stroke-linecap</td>\n<td>Stroke linecap, can be set to <code>square</code> <code>butt</code></td>\n<td><em>string</em></td>\n<td><code>round</code></td>\n</tr>\n<tr>\n<td>clockwise</td>\n<td>Whether to be clockwise</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>start-position</td>\n<td>Progress start position, can be set to <code>left</code>\u3001<code>right</code>\u3001<code>bottom</code></td>\n<td><em>CircleStartPosition</em></td>\n<td><code>top</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>custom text content</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CircleProps</span>, <span class="hljs-title class_">CircleStartPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-circle-size</td>\n<td><em>100px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-circle-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-circle-layer-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-circle-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-circle-text-font-weight</td>\n<td><em>var(--van-font-bold)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-circle-text-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-circle-text-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);