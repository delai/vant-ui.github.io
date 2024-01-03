/*! For license information please see 1828.7b95d562.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1828"],{98671:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return o}});var a=n("36840");let t=["innerHTML"];var o={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Upgrade from v3 to v4</h1>\n<div class="van-doc-card"><h3 id="introduction" tabindex="-1">Introduction</h3>\n<p>This document provides an upgrade guide from Vant 3 to Vant 4.</p>\n</div><div class="van-doc-card"><h3 id="installing-vant-4" tabindex="-1">Installing Vant 4</h3>\n<p>First you need to install Vant 4 and <code>@vant/compat</code>.</p>\n<p><code>@vant/compat</code> is a compatibility package that helps you to switch from Vant 3 to Vant 4.</p>\n<pre><code class="language-bash"><span class="hljs-comment"># Install via npm</span>\nnpm add vant@^4 @vant/compat@^1\n\n<span class="hljs-comment"># Install via yarn</span>\nyarn add vant@^4 @vant/compat@^1\n\n<span class="hljs-comment"># Install via pnpm</span>\npnpm add vant@^4 @vant/compat@^1\n\n<span class="hljs-comment"># Install via Bun</span>\nbun add vant@^4 @vant/compat@^1\n</code></pre>\n<p>You can also change the version directly in the <code>dependencies</code> field of <code>package.json</code>, and you will need to reinstall the dependencies after the change.</p>\n<pre><code class="language-diff">{\n   &quot;dependencies&quot;: {\n<span class="hljs-deletion">-    &quot;vant&quot;: &quot;^3.0.0&quot;,</span>\n<span class="hljs-addition">+    &quot;vant&quot;: &quot;^4.0.0&quot;,</span>\n<span class="hljs-addition">+    &quot;@vant/compat&quot;: &quot;^1.0.0&quot;,</span>\n   }\n}\n</code></pre>\n</div><h2 id="import-method-changes" tabindex="-1">Import method changes</h2>\n<div class="van-doc-card"><h3 id="remove-babel-plugin-import" tabindex="-1">Remove babel-plugin-import</h3>\n<p>Starting from Vant 4.0, <code>babel-plugin-import</code> will no longer be supported, please remove the <code>babel-plugin-import</code> plugin that the project depends on.</p>\n<p>Simply remove the following code in <code>babel.config.js</code>:</p>\n<pre><code class="language-diff">module.exports = {\n  plugins: [\n<span class="hljs-deletion">-    [&#x27;import&#x27;, {</span>\n<span class="hljs-deletion">-      libraryName: &#x27;vant&#x27;,</span>\n<span class="hljs-deletion">-      libraryDirectory: &#x27;es&#x27;,</span>\n<span class="hljs-deletion">-      style: true</span>\n<span class="hljs-deletion">-    }, &#x27;vant&#x27;]</span>\n  ]\n};\n</code></pre>\n<h4 id="benefits" tabindex="-1">Benefits</h4>\n<p>The main benefits of removing <code>babel-plugin-import</code> are as follows:</p>\n<ul>\n<li>Instead of relying heavily on Babel compilation, projects can use modern compilation tools such as SWC and esbuild to improve compilation efficiency.</li>\n<li>No longer subject to the import restrictions of <code>babel-plugin-import</code>, you can import content other than Vant components, such as the new <code>showToast</code> method in Vant 4, or the <code>buttonProps</code> object:</li>\n</ul>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { showToast, buttonProps } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<h4 id="import-style-on-demand" tabindex="-1">Import style on demand</h4>\n<p>Removing <code>babel-plugin-import</code> will not affect the JS size of the project, because Vant supports Tree Shaking to remove unnecessary JS code by default.</p>\n<p>The way the CSS code is imported can be selected from the following two ways:</p>\n<ul>\n<li>Include Vant\'s style files in their entirety in the project:</li>\n</ul>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/lib/index.css&#x27;</span>;\n</code></pre>\n<ul>\n<li>Use the <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank">unplugin-vue-components</a> plugin to import styles on demand, see <a href="#/en-US/quickstart" target="_blank">Quick Start</a> for detailed usage.</li>\n</ul>\n</div><h2 id="component-refactoring" tabindex="-1">Component refactoring</h2>\n<div class="van-doc-card"><h3 id="introduction-1" tabindex="-1">Introduction</h3>\n<p>In Vant 4, three components have been refactored, they are:</p>\n<ul>\n<li><code>Area</code></li>\n<li><code>Picker</code></li>\n<li><code>DatetimePicker</code></li>\n</ul>\n<p>The reason for refactoring these three components is that in the previous version, the API design of the <code>Picker</code> component had some unreasonable designs, which caused people to often encounter problems when using it, such as:</p>\n<ul>\n<li>Picker columns data format definition is unreasonable, easy to cause misunderstanding</li>\n<li>The Picker data flow is not clear, exposing too many instance methods to operate on the data</li>\n<li>DatetimePicker logic is too complicated, bugs often occur in borderline scenarios</li>\n</ul>\n<p>To solve the above problems, we have refactored the <code>Picker</code> component in the v4 version, and also refactored the <code>Area</code> and <code>DatetimePicker</code> components derived from <code>Picker</code>. If you use these three components in your project, please read the documentation carefully and upgrade.</p>\n</div><div class="van-doc-card"><h3 id="picker-component-refactoring" tabindex="-1">Picker component refactoring</h3>\n<h4 id="major-changes" tabindex="-1">Major changes</h4>\n<ul>\n<li>Support binding the currently selected value through <code>v-model</code>, remove the <code>default-index</code> prop.</li>\n<li>Redefine the structure of the <code>columns</code> prop.</li>\n<li>Removed the instance methods for manipulating internal data, only the <code>confirm</code> method remains.</li>\n<li>Added <code>getSelectedOptions</code> instance method.</li>\n<li>Changed parameters of <code>confirm</code>, <code>cancel</code>, <code>change</code> events.</li>\n<li>Renamed <code>item-height</code> prop to <code>option-height</code>.</li>\n<li>Renamed <code>visible-item-count</code> prop to <code>visible-option-num</code>.</li>\n</ul>\n<blockquote>\n<p>Please refer to <a href="#/en-US/picker" target="_blank">Picker Component Documentation</a> for detailed usage.</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="datetimepicker-component-refactoring" tabindex="-1">DatetimePicker component refactoring</h3>\n<p>The DatetimePicker component is split into three subcomponents:</p>\n<ul>\n<li><a href="#/en-US/time-picker" target="_blank">TimePicker</a>: Used for time selection, including hours, minutes, and seconds.</li>\n<li><a href="#/en-US/date-picker" target="_blank">DatePicker</a>: Used for date selection, including year, month and day.</li>\n<li><a href="#/en-US/picker-group" target="_blank">PickerGroup</a>: Used to combine multiple Picker selector components to select multiple values in one interaction.</li>\n</ul>\n<p>At the same time, the TimePicker and DatePicker components are also refactored based on the new version of the Picker component, and some API designs are optimized.</p>\n<h4 id="major-changes-1" tabindex="-1">Major changes</h4>\n<p>The following are the main API changes of TimePicker and DatePicker. For more details, please refer to <a href="#/en-US/time-picker" target="_blank">TimePicker</a> and <a href="#/en-US/date-picker" target="_blank">DatePicker</a> documentation.</p>\n<ul>\n<li>The value of <code>v-model</code> binding is adjusted to array format.</li>\n<li>Added <code>columns-type</code> prop to control option type and order.</li>\n<li>Remove <code>type</code> and <code>columns-order</code> props.</li>\n<li>Remove <code>getPicker</code> method.</li>\n<li>Adjust the parameters of <code>confirm</code>, <code>cancel</code>, <code>change</code> events to be consistent with the Picker component.</li>\n</ul>\n<blockquote>\n<p>Vant 4 no longer provides the old version of the DatetimePicker component. The PickerGroup component can be used to achieve more flexible and richer interactive effects. For specific usage, please refer to the <a href="#/en-US/picker-group" target="_blank">PickerGroup</a> component documentation.</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="area-component-refactoring" tabindex="-1">Area component refactoring</h3>\n<p>The Area component is encapsulated based on the Picker component, so this upgrade also refactors the internal logic of the Area component and optimizes some APIs.</p>\n<h4 id="major-changes-2" tabindex="-1">Major changes</h4>\n<ul>\n<li>Support binding the currently selected value via <code>v-model</code>.</li>\n<li>Removed <code>reset</code> method, now can be reset by modifying <code>v-model</code>.</li>\n<li>Removed <code>is-oversea-code</code> prop.</li>\n<li>Adjust the parameters of <code>confirm</code>, <code>cancel</code>, <code>change</code> events to be consistent with the Picker component.</li>\n<li>Renamed <code>value</code> prop to <code>modelValue</code>.</li>\n<li>Renamed <code>item-height</code> prop to <code>option-height</code>.</li>\n<li>Renamed <code>visible-item-count</code> prop to <code>visible-option-num</code>.</li>\n</ul>\n<blockquote>\n<p>Please refer to <a href="#/en-US/area" target="_blank">Area Component Documentation</a> for detailed usage.</p>\n</blockquote>\n</div><h2 id="api-tweaks" tabindex="-1">API tweaks</h2>\n<div class="van-doc-card"><h3 id="dialog-calling-method-adjustment" tabindex="-1">Dialog calling method adjustment</h3>\n<p>In Vant 3, <code>Dialog</code> is a function, and calling the function can quickly evoke the global Dialog component, and <code>Dialog.Component</code> is the <code>Dialog</code> component object, which is different from the usage of most components, which can easily lead to mistake.</p>\n<p>In order to be more intuitive, we adjusted the calling method of <code>Dialog</code> in Vant 4, renamed the <code>Dialog()</code> function to <code>showDialog()</code>, and let <code>Dialog</code> directly point to the component object.</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title class_">Dialog</span>(); <span class="hljs-comment">// function call</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// Component object</span>\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">showDialog</span>(); <span class="hljs-comment">// function call</span>\n<span class="hljs-title class_">Dialog</span>; <span class="hljs-comment">// component object</span>\n</code></pre>\n<p>Since <code>Dialog</code> has become a component object, other methods mounted on <code>Dialog</code> have also been renamed. The mapping relationship between the old and new APIs is as follows:</p>\n<pre><code class="language-js"><span class="hljs-title class_">Dialog</span>(); <span class="hljs-comment">// -&gt; showDialog()</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>(); <span class="hljs-comment">// -&gt; showDialog()</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>(); <span class="hljs-comment">// -&gt; showConfirmDialog()</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">close</span>(); <span class="hljs-comment">// -&gt; closeDialog();</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setDialogDefaultOptions()</span>\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetDialogDefaultOptions()</span>\n</code></pre>\n<h4 id="migration" tabindex="-1">Migration</h4>\n<p>In order to facilitate the migration of old version code to v4, we provide a compatibility solution, you can use the <code>Dialog</code> object exported in <code>@vant/compat</code> to be compatible with the original code.</p>\n<p>Reference the <code>Dialog</code> method from <code>@vant/compat</code>:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/compat&#x27;</span>;\n\n<span class="hljs-title class_">Dialog</span>();\n<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">close</span>();\n</code></pre>\n<p>The <code>Dialog</code> exported in <code>@vant/compat</code> has exactly the same API and behavior as the <code>Dialog</code> in Vant 3, so you only need to modify the reference path of <code>Dialog</code>, and other codes can remain unchanged.</p>\n<p>After the project is upgraded to Vant v4, it is recommended to gradually replace it with the new <code>showDialog</code> and other methods in iterations, and remove the <code>@vant/compat</code> package.</p>\n</div><div class="van-doc-card"><h3 id="toast-calling-method-adjustment" tabindex="-1">Toast calling method adjustment</h3>\n<p>In Vant 4, the calling method of the <code>Toast</code> component has also been adjusted, which is consistent with the changes of the <code>Dialog</code> component:</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title class_">Toast</span>(); <span class="hljs-comment">// function call</span>\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">showToast</span>(); <span class="hljs-comment">// function call</span>\n<span class="hljs-title class_">Toast</span>; <span class="hljs-comment">// component object</span>\n</code></pre>\n<p>Other methods mounted on <code>Toast</code> have also been renamed, and the mapping relationship between the old and new APIs is as follows:</p>\n<pre><code class="language-js"><span class="hljs-title class_">Toast</span>(); <span class="hljs-comment">// -&gt; showToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">fail</span>(); <span class="hljs-comment">// -&gt; showFailToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">success</span>(); <span class="hljs-comment">// -&gt; showSuccessToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>(); <span class="hljs-comment">// -&gt; showLoadingToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>(); <span class="hljs-comment">// -&gt; closeToast()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setToastDefaultOptions()</span>\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetToastDefaultOptions()</span>\n</code></pre>\n<p>At the same time, Vant 4 will no longer globally register the <code>$toast</code> method on the <code>this</code> object, which means that <code>$toast</code> will not be accessible on the <code>this</code> object.</p>\n<h4 id="migration-1" tabindex="-1">Migration</h4>\n<p>In order to facilitate code migration, we provide a compatibility solution, you can use the <code>Toast</code> object exported in <code>@vant/compat</code> to be compatible with the original code.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/compat&#x27;</span>;\n\n<span class="hljs-title class_">Toast</span>();\n<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>();\n</code></pre>\n<p>The <code>Toast</code> exported in <code>@vant/compat</code> has exactly the same API and behavior as <code>Toast</code> in Vant 3, so you only need to modify the reference path of <code>Toast</code>, and other codes can remain unchanged.</p>\n</div><div class="van-doc-card"><h3 id="notify-calling-method-adjustment" tabindex="-1">Notify calling method adjustment</h3>\n<p>In Vant 4, the calling method of the <code>Notify</code> component has also been adjusted, which is consistent with the changes of the <code>Dialog</code> component:</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title class_">Notify</span>(); <span class="hljs-comment">// function call</span>\n<span class="hljs-title class_">Notify</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// component object</span>\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">showNotify</span>(); <span class="hljs-comment">// function call</span>\n<span class="hljs-title class_">Notify</span>; <span class="hljs-comment">// component object</span>\n</code></pre>\n<p>Other methods mounted on <code>Notify</code> have also been renamed, and the mapping relationship between the old and new APIs is as follows:</p>\n<pre><code class="language-js"><span class="hljs-title class_">Notify</span>(); <span class="hljs-comment">// -&gt; showNotify()</span>\n<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">clear</span>(); <span class="hljs-comment">// -&gt; closeNotify()</span>\n<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setNotifyDefaultOptions()</span>\n<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetNotifyDefaultOptions()</span>\n</code></pre>\n<p>At the same time, Vant 4 will no longer globally register the <code>$notify</code> method on the <code>this</code> object, which means that <code>$notify</code> will not be accessible on the <code>this</code> object.</p>\n<h4 id="migration-2" tabindex="-1">Migration</h4>\n<p>In order to facilitate code migration, we provide a compatibility solution, you can use the <code>Notify</code> object exported in <code>@vant/compat</code> to be compatible with the original code.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/compat&#x27;</span>;\n\n<span class="hljs-title class_">Notify</span>();\n<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">clear</span>();\n</code></pre>\n<p><code>Notify</code> exported in <code>@vant/compat</code> has exactly the same API and behavior as <code>Notify</code> in Vant 3, so you only need to modify the reference path of <code>Notify</code>, and other codes can remain unchanged.</p>\n</div><div class="van-doc-card"><h3 id="imagepreview-calling-method-adjustment" tabindex="-1">ImagePreview calling method adjustment</h3>\n<p>In Vant 4, the calling method of the <code>ImagePreview</code> component has also been adjusted, which is consistent with the changes of the <code>Dialog</code> component:</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title class_">ImagePreview</span>(); <span class="hljs-comment">// function call</span>\n<span class="hljs-title class_">ImagePreview</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// component object</span>\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">showImagePreview</span>(); <span class="hljs-comment">// function call</span>\n<span class="hljs-title class_">ImagePreview</span>; <span class="hljs-comment">// component object</span>\n</code></pre>\n<h4 id="migration-3" tabindex="-1">Migration</h4>\n<p>In order to facilitate code migration, we provide a compatibility solution, you can use the <code>ImagePreview</code> object exported in <code>@vant/compat</code> to be compatible with the original code.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/compat&#x27;</span>;\n\n<span class="hljs-title class_">ImagePreview</span>();\n</code></pre>\n<p>The <code>ImagePreview</code> exported in <code>@vant/compat</code> has exactly the same API and behavior as the <code>ImagePreview</code> in Vant 3, so you only need to modify the reference path of <code>ImagePreview</code>, and other codes can remain unchanged.</p>\n</div><div class="van-doc-card"><h3 id="event-naming-adjustment" tabindex="-1">Event naming adjustment</h3>\n<p>Starting from Vant 4, all events are named in <strong>camelCase</strong> officially recommended by Vue.</p>\n<pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#x27;click-input&#x27;</span>);\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#x27;clickInput&#x27;</span>);\n</code></pre>\n<p>This change <strong>does not affect the original template code</strong>, Vue will automatically format the event name in the template, so you don\'t need to make any changes.</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- The following code works as usual without any changes --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> @<span class="hljs-attr">click-input</span>=<span class="hljs-string">&quot;onClick&quot;</span> /&gt;</span>\n</code></pre>\n<p>If you use the Vant component in JSX, you need to adjust the monitored event name to camel case format, the original dash format will no longer take effect, and the new monitoring method is more in line with JSX\'s own specifications:</p>\n<pre><code class="language-jsx"><span class="hljs-comment">// Vant 3</span>\n&lt;<span class="hljs-title class_">Field</span> onClick-input={onClick} /&gt;\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">onClickInput</span>=<span class="hljs-string">{onClick}</span> /&gt;</span></span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="other-api-adjustments" tabindex="-1">Other API adjustments</h3>\n<p>In Vant 4.0 version, the following APIs have been updated incompatible:</p>\n<h4 id="addressedit" tabindex="-1">AddressEdit</h4>\n<ul>\n<li>Remove <code>show-postal</code> prop.</li>\n<li>Remove <code>postal-validator</code> prop.</li>\n<li>Parameter of <code>change-area</code> event changed to <code>PickerOption[]</code> type.</li>\n<li>Remove undocumented <code>getArea</code> instance method.</li>\n</ul>\n<h4 id="popup" tabindex="-1">Popup</h4>\n<p>Some adjustments have been made to the CSS style of Popup. If you have added some custom CSS styles to the Popup component, please check if this update affects the UI in the project.</p>\n<ul>\n<li>Added <code>box-sizing: border-box</code> style by default.</li>\n<li>Changed the horizontal centering method when <code>position=&quot;center&quot;</code>, to solve the problem that the width of the Popup cannot be adjusted correctly.</li>\n</ul>\n<pre><code class="language-less"><span class="hljs-comment">// Vant 3</span>\n<span class="hljs-selector-class">.van-popup</span> <span class="hljs-selector-tag">--center</span> {\n  <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;\n  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>, <span class="hljs-number">0</span>);\n}\n\n<span class="hljs-comment">// Vant 4</span>\n<span class="hljs-selector-class">.van-popup</span> <span class="hljs-selector-tag">--center</span> {\n  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">width</span>: fit-content;\n  <span class="hljs-attribute">max-width</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100vw</span> - <span class="hljs-built_in">var</span>(--van-padding-md) * <span class="hljs-number">2</span>);\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;\n  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(-<span class="hljs-number">50%</span>);\n}\n</code></pre>\n<h4 id="tabs" tabindex="-1">Tabs</h4>\n<ul>\n<li>Removed <code>click</code> and <code>disabled</code> events, please use <code>click-tab</code> event instead</li>\n</ul>\n</div><h2 id="style-adjustments" tabindex="-1">Style adjustments</h2>\n<div class="van-doc-card"><h3 id="uniform-primary-color" tabindex="-1">Uniform primary color</h3>\n<p>In the previous version, Vant components had two primary colors, some components used blue (#1989fa) as the primary color, and others used red (#ee0a24).</p>\n<p>To keep the colour specification consistent,, we have unified the primary color in Vant 4, and all components use blue as the primary color.</p>\n<p>The primary color of the following components has been changed from red to blue:</p>\n<ul>\n<li>AddressEdit</li>\n<li>AddressList</li>\n<li>Card</li>\n<li>Calendar</li>\n<li>Cascader</li>\n<li>ContactList</li>\n<li>ContactEdit</li>\n<li>CouponList</li>\n<li>Dialog</li>\n<li>DropdownMenu -IndexBar</li>\n<li>Sidebar -Steps</li>\n<li>Tabs</li>\n<li>TreeSelect</li>\n</ul>\n</div><div class="van-doc-card"><h3 id="remove-less-variables" tabindex="-1">Remove Less variables</h3>\n<p>Currently, Vant already supports theme customization capabilities based on CSS variables, which is more flexible than Less customization. Therefore, Vant 4 will no longer provide Less-based theme customization.</p>\n<p>This means that Vant\'s npm package will no longer contain <code>.less</code> style source files, only the compiled <code>.css</code> style files will be provided.</p>\n<p>If your project is using an old version of Less theme customization, please use the <a href="#/en-US/config-provider" target="_blank">ConfigProvider global configuration</a> component to replace it.</p>\n</div><div class="van-doc-card"><h3 id="simplify-css-variable-names" tabindex="-1">Simplify CSS variable names</h3>\n<p>With code size and usability in mind, we have simplified the names of some CSS variables, and used shorter words in the variable names to reduce the code size.</p>\n<p>This upgrade includes the following variable name changes:</p>\n<pre><code class="language-less"><span class="hljs-selector-tag">animation-duration</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">duration</span>\n<span class="hljs-selector-tag">animation-timing-function-enter</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">ease-out</span>\n<span class="hljs-selector-tag">animation-timing-function-leave</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">ease-in</span>\n<span class="hljs-selector-tag">background-color</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">background</span>\n<span class="hljs-selector-tag">background-color-light</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">background-2</span>\n<span class="hljs-selector-tag">border-radius</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">radius</span>\n<span class="hljs-selector-tag">border-width-base</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">border-width</span>\n<span class="hljs-selector-tag">box-shadow</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">shadow</span>\n<span class="hljs-selector-tag">font-family</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">font</span>\n<span class="hljs-selector-tag">font-weight-bold</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">font-bold</span>\n<span class="hljs-selector-tag">price-integer-font</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">price-font</span>\n<span class="hljs-selector-tag">text-link</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">link</span>\n<span class="hljs-selector-tag">transition-duration</span> <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">duration</span>\n</code></pre>\n<p>Due to the large number of CSS variables involved, it is recommended that you perform a global match and replace in the code repository.</p>\n<p>For the <code>ConfigProvider</code> component, we have added the <code>ConfigProviderThemeVars</code> type definition to provide full type hints. In TypeScript code, you can use type hints to ensure that theme variables are substituted correctly.</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ConfigProviderThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-attr">themeVars</span>: <span class="hljs-title class_">ConfigProviderThemeVars</span> = {\n  <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#x27;4px&#x27;</span>,\n};\n</code></pre>\n</div>'},null,8,t))}}}]);