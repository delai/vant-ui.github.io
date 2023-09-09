import{_ as s}from"./locales-4d039684.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const e={},d={class:"van-doc-markdown-body"},r=n(`<h1>Progress 进度条</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于展示操作的当前进度。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Progress</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Progress</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>进度条默认为蓝色，使用 <code>percentage</code> 属性来设置当前进度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xian-tiao-cu-xi" tabindex="-1">线条粗细</h3><p>通过 <code>stroke-width</code> 可以设置进度条的粗细。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;8&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-hui" tabindex="-1">置灰</h3><p>设置 <code>inactive</code> 属性后进度条将置灰。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">inactive</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yang-shi-ding-zhi" tabindex="-1">样式定制</h3><p>可以使用 <code>pivot-text</code> 属性自定义文字，<code>color</code> 属性自定义进度条颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;橙色&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#f2826a&quot;</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;25&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;红色&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span>
  <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;75&quot;</span>
  <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;紫色&quot;</span>
  <span class="hljs-attr">pivot-color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #be99ff, #7232dd)&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>percentage</td><td>进度百分比</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>stroke-width</td><td>进度条粗细，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>4px</code></td></tr><tr><td>color</td><td>进度条颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>track-color</td><td>轨道颜色</td><td><em>string</em></td><td><code>#e5e5e5</code></td></tr><tr><td>pivot-text</td><td>进度文字内容</td><td><em>string</em></td><td>百分比</td></tr><tr><td>pivot-color</td><td>进度文字背景色</td><td><em>string</em></td><td>同进度条颜色</td></tr><tr><td>text-color</td><td>进度文字颜色</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>inactive</td><td>是否置灰</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-pivot</td><td>是否显示进度文字</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ProgressProps</span>, <span class="hljs-title class_">ProgressInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>ProgressInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ProgressInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> progressRef = ref&lt;<span class="hljs-title class_">ProgressInstance</span>&gt;();

progressRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">resize</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-progress-height</td><td><em>4px</em></td><td>-</td></tr><tr><td>--van-progress-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-progress-inactive-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-progress-background</td><td><em>var(--van-gray-3)</em></td><td>-</td></tr><tr><td>--van-progress-pivot-padding</td><td><em>0 5px</em></td><td>-</td></tr><tr><td>--van-progress-pivot-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-progress-pivot-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-progress-pivot-line-height</td><td><em>1.6</em></td><td>-</td></tr><tr><td>--van-progress-pivot-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr></tbody></table></div>`,13),p=[r];function o(l,c){return t(),a("div",d,p)}const g=s(e,[["render",o]]);export{g as default};