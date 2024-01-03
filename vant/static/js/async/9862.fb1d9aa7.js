/*! For license information please see 9862.fb1d9aa7.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9862"],{70353:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return l}});var e=n("36840");let t=["innerHTML"];var l={setup:()=>({html:""}),render:()=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ConfigProvider</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to configure Vant components globally, providing dark mode, theme customization and other capabilities.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ConfigProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ConfigProvider</span>);\n</code></pre>\n</div><h2 id="dark-mode" tabindex="-1">Dark Mode</h2>\n<div class="van-doc-card"><h3 id="enable-dark-mode" tabindex="-1">Enable Dark Mode</h3>\n<p>Enabling dark mode by setting the <code>theme</code> prop of the ConfigProvider component to <code>dark</code>.</p>\n<p>In takes effect globally, making all Vant components on the page dark.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>\n</code></pre>\n<p>The theme prop will not change the text-color or background-color of the page, you can set it manually like this:</p>\n<pre><code class="language-css"><span class="hljs-selector-class">.van-theme-dark</span> <span class="hljs-selector-tag">body</span> {\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#f5f5f5</span>;\n  <span class="hljs-attribute">background-color</span>: black;\n}\n</code></pre>\n<blockquote>\n<p>Tips: The theme prop will not change the background color of the page, you need to set it manually.</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="switch-theme" tabindex="-1">Switch Theme</h3>\n<p>Switching between light and dark theme by dynamically setting the <code>theme</code> property.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> theme = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;light&#x27;</span>);\n\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      theme.<span class="hljs-property">value</span> = <span class="hljs-string">&#x27;dark&#x27;</span>;\n    }, <span class="hljs-number">1000</span>);\n\n    <span class="hljs-keyword">return</span> { theme };\n  },\n};\n</code></pre>\n</div><h2 id="custom-theme" tabindex="-1">Custom Theme</h2>\n<div class="van-doc-card"><h3 id="intro-1" tabindex="-1">Intro</h3>\n<p>Vant organize component styles through <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties" target="_blank">CSS Variables</a>, you can custom themes by overriding these CSS Variables.</p>\n<h4 id="demo" tabindex="-1">Demo</h4>\n<p>Looking at the style of the Button component, you can see that the following variables exist on the <code>.van-button--primary</code> class:</p>\n<pre><code class="language-css"><span class="hljs-selector-class">.van-button--primary</span> {\n  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-button-primary-color);\n  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--van-button-primary-background);\n}\n</code></pre>\n<p>The default values of these variables are defined on the <code>:root</code> node:</p>\n<pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {\n  <span class="hljs-attr">--van-white</span>: <span class="hljs-number">#fff</span>;\n  <span class="hljs-attr">--van-blue</span>: <span class="hljs-number">#1989fa</span>;\n  <span class="hljs-attr">--van-button-primary-color</span>: <span class="hljs-built_in">var</span>(--van-white);\n  <span class="hljs-attr">--van-button-primary-background</span>: <span class="hljs-built_in">var</span>(--van-primary-color);\n}\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-css-variables" tabindex="-1">Custom CSS Variables</h3>\n<h4 id="override-by-css" tabindex="-1">Override by CSS</h4>\n<p>You can directly override these CSS variables in the code, and the style of the Button component will change accordingly:</p>\n<pre><code class="language-css"><span class="hljs-comment">/* the Primary Button will turn red */</span>\n<span class="hljs-selector-pseudo">:root</span><span class="hljs-selector-pseudo">:root</span> {\n  <span class="hljs-attr">--van-button-primary-background</span>: red;\n}\n</code></pre>\n<blockquote>\n<p>Note: Why write two duplicate <code>:root</code>?</p>\n<p>Since the theme variables in vant are also declared under <code>:root</code>, in some cases they cannot be successfully overwritten due to priority issues. Through <code>:root:root</code> you can explicitly make the content you write a higher priority to ensure the successful coverage of the theme variables.</p>\n</blockquote>\n<h4 id="override-by-configprovider" tabindex="-1">Override by ConfigProvider</h4>\n<p>The <code>ConfigProvider</code> component provides the ability to override CSS variables. You need to wrap a <code>ConfigProvider</code> component at the root node and configure some CSS variables through the <code>theme-vars</code> property.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Rate&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;rate&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;slider&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Slider&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;slider&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\n        Submit\n      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> rate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">4</span>);\n    <span class="hljs-keyword">const</span> slider = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);\n\n    <span class="hljs-comment">// ThemeVars will be converted to the corresponding CSS variable</span>\n    <span class="hljs-comment">// For example, sliderBarHeight will be converted to `--van-slider-bar-height`</span>\n    <span class="hljs-keyword">const</span> themeVars = <span class="hljs-title function_">reactive</span>({\n      <span class="hljs-attr">rateIconFullColor</span>: <span class="hljs-string">&#x27;#07c160&#x27;</span>,\n      <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#x27;4px&#x27;</span>,\n      <span class="hljs-attr">sliderButtonWidth</span>: <span class="hljs-string">&#x27;20px&#x27;</span>,\n      <span class="hljs-attr">sliderButtonHeight</span>: <span class="hljs-string">&#x27;20px&#x27;</span>,\n      <span class="hljs-attr">sliderActiveBackground</span>: <span class="hljs-string">&#x27;#07c160&#x27;</span>,\n      <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#x27;#07c160&#x27;</span>,\n      <span class="hljs-attr">buttonPrimaryBorderColor</span>: <span class="hljs-string">&#x27;#07c160&#x27;</span>,\n    });\n\n    <span class="hljs-keyword">return</span> {\n      rate,\n      slider,\n      themeVars,\n    };\n  },\n};\n</code></pre>\n<h4 id="scope-of-css-variables" tabindex="-1">Scope of CSS Variables</h4>\n<p>By default, the CSS variables generated by <code>themeVars</code> are applied to the root node of the component, thereby only affecting the styles of its child components and not the entire page.</p>\n<p>You can modify the scope of CSS variables using the <code>theme-vars-scope</code> prop. For example, by setting <code>theme-vars-scope</code> to <code>global</code>, the CSS variables generated by <code>themeVars</code> will be applied to the root node of the HTML and affect all components within the entire page.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span> <span class="hljs-attr">theme-vars-scope</span>=<span class="hljs-string">&quot;global&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>\n</code></pre>\n<h4 id="use-in-typescript" tabindex="-1">Use In TypeScript</h4>\n<p>Using <code>ConfigProviderThemeVars</code> type to get code intellisense.</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ConfigProviderThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-attr">themeVars</span>: <span class="hljs-title class_">ConfigProviderThemeVars</span> = {\n  <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#x27;4px&#x27;</span>,\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="combining-dark-mode-with-css-variables" tabindex="-1">Combining dark mode with CSS variables</h3>\n<p>If you need to define CSS variables for dark mode or light mode separately, you can use the <code>theme-vars-dark</code> and <code>theme-vars-light</code> props.</p>\n<ul>\n<li><code>theme-vars-dark</code>: define CSS variables that only take effect in dark mode, will override the variables defined in <code>theme-vars</code>.</li>\n<li><code>theme-vars-light</code>: define CSS variables that only take effect in light mode, will override the variables defined in <code>theme-vars</code>.</li>\n</ul>\n<h4 id="example" tabindex="-1">Example</h4>\n<p>Take the <code>buttonPrimaryBackground</code> variable below as an example, the value will be <code>blue</code> in dark mode, and <code>green</code> in light mode.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span>\n  <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span>\n  <span class="hljs-attr">:theme-vars-dark</span>=<span class="hljs-string">&quot;themeVarsDark&quot;</span>\n  <span class="hljs-attr">:theme-vars-light</span>=<span class="hljs-string">&quot;themeVarsLight&quot;</span>\n&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> themeVars = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#x27;red&#x27;</span> });\n    <span class="hljs-keyword">const</span> themeVarsDark = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#x27;blue&#x27;</span> });\n    <span class="hljs-keyword">const</span> themeVarsLight = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#x27;green&#x27;</span> });\n\n    <span class="hljs-keyword">return</span> {\n      themeVars,\n      themeVarsDark,\n      themeVarsLight,\n    };\n  },\n};\n</code></pre>\n<h4 id="using-class-names" tabindex="-1">Using Class Names</h4>\n<p>In addition, you can also use the class selectors <code>.van-theme-light</code> and <code>.van-theme-dark</code> to individually modify the base variables and component variables in the light or dark mode.</p>\n<pre><code class="language-css"><span class="hljs-selector-class">.van-theme-light</span> {\n  <span class="hljs-attr">--van-white</span>: white;\n}\n\n<span class="hljs-selector-class">.van-theme-dark</span> {\n  <span class="hljs-attr">--van-white</span>: black;\n}\n</code></pre>\n</div><h2 id="variables" tabindex="-1">Variables</h2>\n<div class="van-doc-card"><h3 id="variable-types" tabindex="-1">Variable Types</h3>\n<p>In Vant, CSS variables are divided into <strong>basic variables</strong> and <strong>component variables</strong>. Component variables inherit from basic variables, so modifying a basic variable will affect all related components.</p>\n<h4 id="modifying-variables" tabindex="-1">Modifying Variables</h4>\n<p>CSS variables have an inheritance relationship, where component variables inherit from the nearest parent basic variable.</p>\n<p>Therefore, there are certain limitations when modifying basic variables. You need to use the <code>:root</code> selector or the global mode of the ConfigProvider component to modify basic variables. Otherwise, component variables may not inherit basic variables correctly.</p>\n<p>Taking the <code>--van-primary-color</code> basic variable as an example:</p>\n<ul>\n<li>You can modify it using the <code>:root</code> selector:</li>\n</ul>\n<pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {\n  <span class="hljs-attr">--van-primary-color</span>: red;\n}\n</code></pre>\n<ul>\n<li>You can modify it using the global mode of the ConfigProvider component:</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span>\n  <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;{ primaryColor: &#x27;red&#x27; }&quot;</span>\n  <span class="hljs-attr">theme-vars-scope</span>=<span class="hljs-string">&quot;global&quot;</span>\n&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>\n</code></pre>\n<ul>\n<li>You cannot modify it using the default <code>local</code> mode of the ConfigProvider component:</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;{ primaryColor: &#x27;red&#x27; }&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>\n</code></pre>\n<p>As for component variables, there are no such limitations, and you can modify them in any way you want.</p>\n</div><div class="van-doc-card"><h3 id="basic-variables-list" tabindex="-1">Basic Variables List</h3>\n<p>There are all <strong>Basic Variables</strong> below, for component CSS Variables, please refer to the documentation of each component.</p>\n<pre><code class="language-less"><span class="hljs-comment">// Color Palette</span>\n<span class="hljs-attr">--van-black</span>: #000;\n<span class="hljs-attr">--van-white</span>: #fff;\n<span class="hljs-attr">--van-gray-1</span>: #f7f8fa;\n<span class="hljs-attr">--van-gray-2</span>: #f2f3f5;\n<span class="hljs-attr">--van-gray-3</span>: #ebedf0;\n<span class="hljs-attr">--van-gray-4</span>: #dcdee0;\n<span class="hljs-attr">--van-gray-5</span>: #c8c9cc;\n<span class="hljs-attr">--van-gray-6</span>: #969799;\n<span class="hljs-attr">--van-gray-7</span>: #646566;\n<span class="hljs-attr">--van-gray-8</span>: #323233;\n<span class="hljs-attr">--van-red</span>: #ee0a24;\n<span class="hljs-attr">--van-blue</span>: #1989fa;\n<span class="hljs-attr">--van-orange</span>: #ff976a;\n<span class="hljs-attr">--van-orange-dark</span>: #ed6a0c;\n<span class="hljs-attr">--van-orange-light</span>: #fffbe8;\n<span class="hljs-attr">--van-green</span>: #07c160;\n\n<span class="hljs-comment">// Gradient Colors</span>\n<span class="hljs-attr">--van-gradient-red</span>: linear-gradient(to <span class="hljs-attribute">right, #ff6034, #ee0a24);\n--van-gradient-orange</span>: <span class="hljs-built_in">linear-gradient</span>(to right, <span class="hljs-number">#ffd01e</span>, <span class="hljs-number">#ff8917</span>);\n\n<span class="hljs-comment">// Component Colors</span>\n<span class="hljs-attr">--van-primary-color</span>: var(<span class="hljs-attr">--van-blue</span>);\n<span class="hljs-attr">--van-success-color</span>: var(<span class="hljs-attr">--van-green</span>);\n<span class="hljs-attr">--van-danger-color</span>: var(<span class="hljs-attr">--van-red</span>);\n<span class="hljs-attr">--van-warning-color</span>: var(<span class="hljs-attr">--van-orange</span>);\n<span class="hljs-attr">--van-text-color</span>: var(<span class="hljs-attr">--van-gray-8</span>);\n<span class="hljs-attr">--van-text-color-2</span>: var(<span class="hljs-attr">--van-gray-6</span>);\n<span class="hljs-attr">--van-text-color-3</span>: var(<span class="hljs-attr">--van-gray-5</span>);\n<span class="hljs-attr">--van-active-color</span>: var(<span class="hljs-attr">--van-gray-2</span>);\n<span class="hljs-attr">--van-active-opacity</span>: 0.6;\n<span class="hljs-attr">--van-disabled-opacity</span>: 0.5;\n<span class="hljs-attr">--van-background</span>: var(<span class="hljs-attr">--van-gray-1</span>);\n<span class="hljs-attr">--van-background-2</span>: var(<span class="hljs-attr">--van-white</span>);\n\n<span class="hljs-comment">// Padding</span>\n<span class="hljs-attr">--van-padding-base</span>: 4px;\n<span class="hljs-attr">--van-padding-xs</span>: 8px;\n<span class="hljs-attr">--van-padding-sm</span>: 12px;\n<span class="hljs-attr">--van-padding-md</span>: 16px;\n<span class="hljs-attr">--van-padding-lg</span>: 24px;\n<span class="hljs-attr">--van-padding-xl</span>: 32px;\n\n<span class="hljs-comment">// Font</span>\n<span class="hljs-attr">--van-font-size-xs</span>: 10px;\n<span class="hljs-attr">--van-font-size-sm</span>: 12px;\n<span class="hljs-attr">--van-font-size-md</span>: 14px;\n<span class="hljs-attr">--van-font-size-lg</span>: 16px;\n<span class="hljs-attr">--van-font-bold</span>: 600;\n<span class="hljs-attr">--van-line-height-xs</span>: 14px;\n<span class="hljs-attr">--van-line-height-sm</span>: 18px;\n<span class="hljs-attr">--van-line-height-md</span>: 20px;\n<span class="hljs-attr">--van-line-height-lg</span>: 22px;\n<span class="hljs-attr">--van-base-font</span>: -apple-system, BlinkMacSystemFont, &#x27;Helvetica Neue&#x27;, Helvetica,\n  Segoe UI, Arial, Roboto, &#x27;PingFang SC&#x27;, &#x27;miui&#x27;, &#x27;Hiragino Sans GB&#x27;, &#x27;Microsoft Yahei&#x27;,\n  sans-serif;\n<span class="hljs-attr">--van-price-font</span>: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;\n\n<span class="hljs-comment">// Animation</span>\n<span class="hljs-attr">--van-duration-base</span>: 0.3s;\n<span class="hljs-attr">--van-duration-fast</span>: 0.2s;\n<span class="hljs-attr">--van-ease-out</span>: ease-out;\n<span class="hljs-attr">--van-ease-in</span>: ease-in;\n\n<span class="hljs-comment">// Border</span>\n<span class="hljs-attr">--van-border-color</span>: var(<span class="hljs-attr">--van-gray-3</span>);\n<span class="hljs-attr">--van-border-width</span>: 1px;\n<span class="hljs-attr">--van-radius-sm</span>: 2px;\n<span class="hljs-attr">--van-radius-md</span>: 4px;\n<span class="hljs-attr">--van-radius-lg</span>: 8px;\n<span class="hljs-attr">--van-radius-max</span>: 999px;\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>theme</td>\n<td>Theme mode, can be set to <code>dark</code></td>\n<td><em>ConfigProviderTheme</em></td>\n<td><code>light</code></td>\n</tr>\n<tr>\n<td>theme-vars</td>\n<td>Theme variables</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>theme-vars-dark</td>\n<td>Theme variables that work in dark mode\uFF0Cwill override <code>theme-vars</code></td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>theme-vars-light</td>\n<td>Theme variables that work in light mode, will override <code>theme-vars</code></td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>theme-vars-scope</td>\n<td>by default only affects its child components\uFF0Cset to <code>global</code> for the entire page to take effect</td>\n<td><em>ConfigProviderThemeVarsScope</em></td>\n<td><code>local</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Set the z-index of all popup components, this property takes effect globally</td>\n<td><em>number</em></td>\n<td><code>2000</code></td>\n</tr>\n<tr>\n<td>tag</td>\n<td>HTML Tag of root element</td>\n<td><em>string</em></td>\n<td><code>div</code></td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">ConfigProviderProps</span>,\n  <span class="hljs-title class_">ConfigProviderTheme</span>,\n  <span class="hljs-title class_">ConfigProviderThemeVars</span>,\n  <span class="hljs-title class_">ConfigProviderThemeVarsScope</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div>'},null,8,t))}}}]);