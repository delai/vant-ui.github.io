import{o as a,a as t,z as n}from"./vue-libs-b2a2f6f9.js";const l={class:"van-doc-markdown-body"},d=n(`<h1>Tag 标签</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于标记关键词和概括主要内容。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tag</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tag</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>type</code> 属性控制标签颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="kong-xin-yang-shi" tabindex="-1">空心样式</h3><p>设置 <code>plain</code> 属性设置为空心样式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yuan-jiao-yang-shi" tabindex="-1">圆角样式</h3><p>通过 <code>round</code> 设置为圆角样式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="biao-ji-yang-shi" tabindex="-1">标记样式</h3><p>通过 <code>mark</code> 设置为标记样式(半圆角)。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">mark</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ke-guan-bi-biao-qian" tabindex="-1">可关闭标签</h3><p>添加 <code>closeable</code> 属性表示标签是可关闭的，关闭标签时会触发 <code>close</code> 事件，在 <code>close</code> 事件中可以执行隐藏标签的逻辑。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">closeable</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>
  标签
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">close</span> = (<span class="hljs-params"></span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      show,
      close,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-qian-da-xiao" tabindex="-1">标签大小</h3><p>通过 <code>size</code> 属性调整标签大小。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>color</code> 和 <code>text-color</code> 属性设置标签颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffe1e1&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ad0000&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型，可选值为 <code>primary</code> <code>success</code> <code>danger</code> <code>warning</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>size</td><td>大小, 可选值为 <code>large</code> <code>medium</code></td><td><em>string</em></td><td>-</td></tr><tr><td>color</td><td>标签颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>show</td><td>是否展示标签</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>plain</td><td>是否为空心样式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>round</td><td>是否为圆角样式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>mark</td><td>是否为标记样式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>text-color</td><td>文本颜色，优先级高于 <code>color</code> 属性</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>closeable</td><td>是否为可关闭标签</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>标签显示内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>close</td><td>关闭标签时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TagSize</span>, <span class="hljs-title class_">TagType</span>, <span class="hljs-title class_">TagProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-tag-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-tag-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-tag-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-tag-radius</td><td><em>2px</em></td><td>-</td></tr><tr><td>--van-tag-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-tag-medium-padding</td><td><em>2px 6px</em></td><td>-</td></tr><tr><td>--van-tag-large-padding</td><td><em>var(--van-padding-base) var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-tag-large-radius</td><td><em>var(--van-radius-md)</em></td><td>-</td></tr><tr><td>--van-tag-large-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-tag-round-radius</td><td><em>var(--van-radius-max)</em></td><td>-</td></tr><tr><td>--van-tag-danger-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-tag-primary-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-tag-success-color</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-tag-warning-color</td><td><em>var(--van-warning-color)</em></td><td>-</td></tr><tr><td>--van-tag-default-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-tag-plain-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr></tbody></table></div>`,18),p=[d],i={__name:"README.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(r,o)=>(a(),t("div",l,p))}};export{i as default};
