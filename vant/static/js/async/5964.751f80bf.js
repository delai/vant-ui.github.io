/*! For license information please see 5964.751f80bf.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5964"],{67661:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return l}});var t=a("36840");let e=["innerHTML"];var l={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Steps</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to show the various parts of the action flow and let the user know where the current action fits into the overall flow.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Step</span>, <span class="hljs-title class_">Steps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Step</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Steps</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>Step1<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>Step2<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>Step3<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>Step4<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-steps</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);\n    <span class="hljs-keyword">return</span> { active };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#07c160&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>Step1<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>Step2<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>Step3<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>Step4<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-steps</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="vertical-steps" tabindex="-1">Vertical Steps</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-steps</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>\u3010City\u3011Status1<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2016-07-12 12:40<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>\u3010City\u3011Status2<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2016-07-11 10:00<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>\u3010City\u3011Status3<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2016-07-10 09:30<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-steps</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="steps-props" tabindex="-1">Steps Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>active</td>\n<td>Active step</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>Can be set to <code>vertical</code></td>\n<td><em>string</em></td>\n<td><code>horizontal</code></td>\n</tr>\n<tr>\n<td>active-color</td>\n<td>Active step color</td>\n<td><em>string</em></td>\n<td><code>#07c160</code></td>\n</tr>\n<tr>\n<td>inactive-color</td>\n<td>Inactive step color</td>\n<td><em>string</em></td>\n<td><code>#969799</code></td>\n</tr>\n<tr>\n<td>active-icon</td>\n<td>Active icon name</td>\n<td><em>string</em></td>\n<td><code>checked</code></td>\n</tr>\n<tr>\n<td>inactive-icon</td>\n<td>Inactive icon name</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>finish-icon</td>\n<td>Finish icon name</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="step-slots" tabindex="-1">Step Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Step content</td>\n</tr>\n<tr>\n<td>active-icon</td>\n<td>Custom active icon</td>\n</tr>\n<tr>\n<td>inactive-icon</td>\n<td>Custom inactive icon</td>\n</tr>\n<tr>\n<td>finish-icon</td>\n<td>Custom finish icon</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="steps-events" tabindex="-1">Steps Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click-step</td>\n<td>Emitted when a step\'s title or icon is clicked</td>\n<td><em>index: number</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">StepsProps</span>, <span class="hljs-title class_">StepsDirection</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-step-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-active-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-process-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-line-color</td>\n<td><em>var(--van-border-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-finish-line-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-finish-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-icon-size</td>\n<td><em>12px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-circle-size</td>\n<td><em>5px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-circle-color</td>\n<td><em>var(--van-gray-6)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-step-horizontal-title-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-steps-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);