/*! For license information please see 4618.1ebc436c.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4618"],{73113:function(t,s,n){"use strict";n.r(s);var a=n("69298");let e=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Progress</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to show the current progress of the operation.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Progress</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Progress</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>Use <code>percentage</code> prop to set current progress.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="stroke-width" tabindex="-1">Stroke Width</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;8&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="inactive" tabindex="-1">Inactive</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">inactive</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3>\n<p>Use <code>pivot-text</code> to custom text, use <code>color</code> to custom bar color.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;Orange&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#f2826a&quot;</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;25&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;Red&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span>\n  <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;75&quot;</span>\n  <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;Purple&quot;</span>\n  <span class="hljs-attr">pivot-color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #be99ff, #7232dd)&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>percentage</td>\n<td>Percentage</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>stroke-width</td>\n<td>Stroke width</td>\n<td><em>number | string</em></td>\n<td><code>4px</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>track-color</td>\n<td>Track color</td>\n<td><em>string</em></td>\n<td><code>#e5e5e5</code></td>\n</tr>\n<tr>\n<td>pivot-text</td>\n<td>Pivot text</td>\n<td><em>string</em></td>\n<td>percentage</td>\n</tr>\n<tr>\n<td>pivot-color</td>\n<td>Pivot text background color</td>\n<td><em>string</em></td>\n<td>inherit progress color</td>\n</tr>\n<tr>\n<td>text-color</td>\n<td>Pivot text color</td>\n<td><em>string</em></td>\n<td><code>white</code></td>\n</tr>\n<tr>\n<td>inactive</td>\n<td>Whether to be gray</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-pivot</td>\n<td>Whether to show text</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ProgressProps</span>, <span class="hljs-title class_">ProgressInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-progress-height</td>\n<td><em>4px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-progress-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-progress-inactive-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-progress-background</td>\n<td><em>var(--van-gray-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-progress-pivot-padding</td>\n<td><em>0 5px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-progress-pivot-text-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-progress-pivot-font-size</td>\n<td><em>var(--van-font-size-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-progress-pivot-line-height</td>\n<td><em>1.6</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-progress-pivot-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);