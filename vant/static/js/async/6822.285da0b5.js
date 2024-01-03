/*! For license information please see 6822.285da0b5.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6822"],{39534:function(t,a,s){"use strict";s.r(a),s.d(a,{default:function(){return r}});var n=s("36840");let e=["innerHTML"];var r={setup:()=>({html:""}),render:()=>((0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Watermark</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Add specific text or patterns on the page as watermarks, which can be used to prevent information theft. Please upgrade <code>vant</code> to &gt;= v4.2.0 before using this component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Watermark</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Watermark</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="text-watermark" tabindex="-1">Text Watermark</h3>\n<p>Use the <code>content</code> prop to set the text of the watermark.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Vant&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="image-watermark" tabindex="-1">Image Watermark</h3>\n<p>Use the <code>image</code> prop to set the watermark image, and use <code>opacity</code> prop to adjust the transparency of the watermark.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span>\n  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png&quot;</span>\n  <span class="hljs-attr">opacity</span>=<span class="hljs-string">&quot;0.2&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-gap" tabindex="-1">Custom Gap</h3>\n<p>Use <code>gap-x</code> <code>gap-y</code> prop to control the gap between watermark items.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span>\n  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png&quot;</span>\n  <span class="hljs-attr">:gap-x</span>=<span class="hljs-string">&quot;30&quot;</span>\n  <span class="hljs-attr">:gap-y</span>=<span class="hljs-string">&quot;10&quot;</span>\n  <span class="hljs-attr">opacity</span>=<span class="hljs-string">&quot;0.2&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-rotate" tabindex="-1">Custom Rotate</h3>\n<p>Use <code>rotate</code> prop to control the rotate of watermark. The default value is <code>-22</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span>\n  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png&quot;</span>\n  <span class="hljs-attr">rotate</span>=<span class="hljs-string">&quot;22&quot;</span>\n  <span class="hljs-attr">opacity</span>=<span class="hljs-string">&quot;0.2&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="display-range" tabindex="-1">Display Range</h3>\n<p>Use the <code>full-page</code> prop to control the display range of the watermark.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span>\n  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png&quot;</span>\n  <span class="hljs-attr">opacity</span>=<span class="hljs-string">&quot;0.2&quot;</span>\n  <span class="hljs-attr">:full-page</span>=<span class="hljs-string">&quot;true&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="html-watermark" tabindex="-1">HTML Watermark</h3>\n<p>Use the <code>content</code> slot to pass HTML as watermark. Only supports inline styles, and self-closing tags are not supported.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%)&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;mix-blend-mode: difference; color: #fff&quot;</span>&gt;</span>Vant watermark<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-watermark</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>Watermark width</td>\n<td><em>number</em></td>\n<td><code>100</code></td>\n</tr>\n<tr>\n<td>height</td>\n<td>Watermark height</td>\n<td><em>number</em></td>\n<td><code>100</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Watermark\'s z-index</td>\n<td><em>number | string</em></td>\n<td><code>100</code></td>\n</tr>\n<tr>\n<td>content</td>\n<td>Text watermark content</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>image</td>\n<td>Image watermark content. If <code>content</code> and <code>image</code> are passed at the same time, use the <code>image</code> watermark first</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>rotate</td>\n<td>Watermark rotation angle</td>\n<td><em>number | string</em></td>\n<td><code>-22</code></td>\n</tr>\n<tr>\n<td>full-page</td>\n<td>Whether to display the watermark in full screen</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>gap-x</td>\n<td>Horizontal spacing between watermarks</td>\n<td><em>number</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>gap-y</td>\n<td>Vertical spacing between watermarks</td>\n<td><em>number</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>text-color</td>\n<td>Color of text watermark</td>\n<td><em>string</em></td>\n<td><code>#dcdee0</code></td>\n</tr>\n<tr>\n<td>opacity</td>\n<td>Opacity of watermark</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>Content of HTML watermark. Only supports inline styles, and self-closing tags are not supported. The priority is higher than <code>content</code> or <code>image</code> props</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">WaterProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-watermark-z-index</td>\n<td><em>100</em></td>\n<td>z-index of root element</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);