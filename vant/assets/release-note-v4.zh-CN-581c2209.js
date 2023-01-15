import{o as s,a as t,z as n}from"./vue-libs-b2a2f6f9.js";const e={class:"van-doc-markdown-body"},c=n(`<h1>4.0 版本介绍</h1><div class="van-doc-card"><h3 id="yin-yan" tabindex="-1">引言</h3><p>历经一年的迭代，Vant 4.0 版本已正式发布，这是 Vant 自 2017 年开源以来发布的第四个重要版本。</p><p>在本次迭代中，Vant 支持了深色模式，增加五个新组件，改善工具函数 API 并重构 Picker 等组件，同时继续在轻量化和易用性方面做出改进。</p></div><div class="van-doc-card"><h3 id="zhi-chi-shen-se-mo-shi" tabindex="-1">支持深色模式</h3><p><strong>Vant 4.0 支持切换所有组件为深色模式。</strong></p><p>只需要把 <a href="https://vant-ui.github.io/vant/#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>的 <code>theme</code> 属性设置为 <code>dark</code>，即可切换为深色模式，将页面上的所有 Vant 组件变成深色风格。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- child components --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><p><img src="https://user-images.githubusercontent.com/7237365/205472724-6c9ee0df-df10-4f9b-84b6-081576bdcea9.png" alt=""></p><p>同时，Vant 4.0 文档也已支持切换为深色模式：</p><p><img src="https://user-images.githubusercontent.com/7237365/205472729-fefc9053-1866-4812-8b97-ee0ba5d47230.png" alt=""></p></div><div class="van-doc-card"><h3 id="ji-ge-xin-zu-jian" tabindex="-1">几个新组件</h3><p><strong>Vant 4.0 包含以下新组件：</strong></p><ul><li><a href="https://vant-ui.github.io/vant/#/zh-CN/back-top" target="_blank">BackTop 回到顶部</a>：返回页面顶部的操作按钮。</li><li><a href="https://vant-ui.github.io/vant/#/zh-CN/time-picker" target="_blank">TimePicker 时间选择器</a>：用于时间选择，包括时、分、秒。</li><li><a href="https://vant-ui.github.io/vant/#/zh-CN/time-picker" target="_blank">DatePicker 日期选择器</a>：用于日期选择，包括年、月、日。</li><li><a href="https://vant-ui.github.io/vant/#/zh-CN/picker-group" target="_blank">PickerGroup 选择器组</a>：用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。</li><li><a href="https://vant-ui.github.io/vant/#/zh-CN/skeleton" target="_blank">Skeleton 骨架屏子组件</a>：通过 SkeletonTitle、SkeletonImage、SkeletonAvatar 等子组件来自定义骨架屏。</li></ul><p>其中，TimePicker 和 DatePicker 由旧版的 DatetimePicker 组件拆分而来，DatetimePicker 组件不再提供。你可以通过 PickerGroup 来实现同时选择日期和时间的交互效果。</p><p><img src="https://user-images.githubusercontent.com/7237365/205474243-14e0a87c-dcfa-4229-9a16-f6ebf910b621.png" alt=""></p></div><div class="van-doc-card"><h3 id="bao-chi-qing-liang" tabindex="-1">保持轻量</h3><p><strong>Vant 4.0 的安装体积降低 30%，包体积保持轻量。</strong></p><p>随着 npm 生态的发展，node_modules 正在吞噬我们的磁盘空间。为了缓解 node_modules 黑洞、加快安装速度，我们对 Vant 的 npm 依赖和构建产物进行了优化。</p><p>相较于 Vant 3.6.2 版本，Vant 4.0.0 版本的安装体积由 7MB 下降至 5MB。作为对比，社区中主流组件库的安装体积普遍在 15MB ~ 80MB。你可以通过 <a href="https://packagephobia.com/result?p=vant" target="_blank">packagephobia</a> 来查询 npm 包的安装体积。</p><p><img src="https://user-images.githubusercontent.com/7237365/205470714-e1828299-4df2-40f4-b7cc-f65971fe4567.png" alt=""></p><p>在包体积上，本次更新依然加量不加价，Minified + Gzipped 后的体积保持在 70KB 以下：</p><p><img src="https://user-images.githubusercontent.com/7237365/205474583-f2d8226f-e089-42d7-8326-3c874dcf1784.png" alt=""></p></div><div class="van-doc-card"><h3 id="tong-yi-zhu-se-diao" tabindex="-1">统一主色调</h3><p><strong>Vant 4.0 统一了所有组件的主色调。</strong></p><p>在之前的版本中，Vant 组件有两种主色调，部分组件采用蓝色 <code>#1989fa</code> 作为主色调，另一部分则采用红色 <code>#ee0a24</code>。</p><p>为了保持色彩规范的一致性，我们在 Vant 4 中对主色调进行统一，所有组件均采用蓝色作为主色调。</p><p><img src="https://user-images.githubusercontent.com/7237365/205472726-a0552833-f99d-447a-acce-051ec7ebdbe1.png" alt=""></p><p>统一主色调后，主题定制会变得更加容易。比如，你可以覆盖 <code>--van-primary-color</code> 这个 CSS 变量，将所有组件的主色调设置为绿色：</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-primary-color</span>: <span class="hljs-number">#07c160</span>;
}
</code></pre></div><div class="van-doc-card"><h3 id="an-xu-yin-ru-fang-shi-diao-zheng" tabindex="-1">按需引入方式调整</h3><p><strong>Vant 4.0 不再使用 babel-plugin-import 实现按需引入。</strong></p><p>在早期，组件库大多使用 <code>babel-plugin-import</code> 实现按需引入，这意味着组件库会强依赖 Babel 编译。从 Vant 4.0 开始，将不再支持 <code>babel-plugin-import</code>，主要带来以下收益：</p><ul><li>不再强依赖 Babel 编译，项目可以使用 SWC、esbuild 等现代编译工具，进而提升编译效率。</li></ul><p><img src="https://user-images.githubusercontent.com/7237365/205478241-dba3c4ed-152c-4892-9e74-1a0d978be314.png" alt=""></p><ul><li>不再受到 <code>babel-plugin-import</code> 的 import 限制，可以从 Vant 中导入除组件以外的内容，比如 Vant 4 中新增的 <code>showToast</code> 方法，或是 <code>buttonProps</code> 对象：</li></ul><pre><code class="language-ts"><span class="hljs-keyword">import</span> { showToast, buttonProps } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p>在包体积方面，移除 <code>babel-plugin-import</code> 对项目的 JS 体积不会有影响，因为 Vant 默认支持通过 Tree Shaking 来移除不需要的 JS 代码，而 CSS 代码可以通过 <a href="https://github.com/antfu/unplugin-vue-components" target="_blank">unplugin-vue-components</a> 插件实现按需引入，详细用法请参考 <a href="https://vant-ui.github.io/vant/#/zh-CN/quickstart" target="_blank">「快速上手」</a>。</p></div><div class="van-doc-card"><h3 id="yang-shi-bian-liang-lei-xing-ti-shi" tabindex="-1">样式变量类型提示</h3><p><strong>Vant 4.0 提供了样式变量的类型提示。</strong></p><p>Vant 提供了 700 多个样式变量，你可以通过 CSS 代码或 <code>ConfigProvider</code> 组件修改这些样式变量。在 Vant 4.0 中，我们新增了 <code>ConfigProviderThemeVars</code> 类型，以提供样式变量的类型提示。</p><p>因此在编写 TypeScript 代码时，你可以通过类型提示来补全主题变量名称：</p><p><img src="https://user-images.githubusercontent.com/7237365/205478960-c284e272-a394-4098-ad0f-eda72e74f9f7.png" alt=""></p></div><div class="van-doc-card"><h3 id="picker-zu-jian-chong-gou" tabindex="-1">Picker 组件重构</h3><p><strong>Vant 4.0 重构了 Picker 组件，以及基于 Picker 的 Area 和 DatetimePicker 组件。</strong></p><p>在之前的版本中，<code>Picker</code> 组件的 API 设计不够合理，导致大家在使用时经常遇到问题，比如：</p><ul><li>Picker 的 columns 数据格式不合理，容易产生误解。</li><li>Picker 的数据流不清晰，暴露了过多的实例方法来对数据进行操作。</li><li>DatetimePicker 的逻辑过于复杂，经常在边界场景下出现 bug。</li></ul><p>为了解决上述问题，我们在 Vant 4.0 中对 <code>Picker</code> 组件进行了重构，同时也重构了基于 <code>Picker</code> 派生出的 <code>Area</code> 和 <code>DatetimePicker</code> 组件。</p><p>如果你的项目中使用了这三个组件，请阅读 <a href="https://vant-ui.github.io/vant/#/zh-CN/migrate-from-v3" target="_blank">「升级指南」</a> 进行升级。</p></div><div class="van-doc-card"><h3 id="zu-jian-gong-ju-han-shu-diao-zheng" tabindex="-1">组件工具函数调整</h3><p><strong>Vant 4.0 调整了组件工具函数的用法，使其更符合直觉。</strong></p><p>Vant 3 提供了一些组件工具函数，比如调用 <code>Dialog()</code> 函数，可以快速唤起全局的弹窗组件，而 <code>Dialog.Component</code> 才是 <code>Dialog</code> 对应的组件对象。</p><pre><code class="language-ts"><span class="hljs-comment">// 函数调用</span>
<span class="hljs-title class_">Dialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Hello World!&#39;</span> });

<span class="hljs-comment">// 组件注册</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-string">&#39;van-dialog&#39;</span>, <span class="hljs-title class_">Dialog</span>.<span class="hljs-property">Component</span>);
</code></pre><p>以上 API 设计导致 Dialog 等支持工具函数的组件与常规组件存在用法差异，容易被误用；同时也导致 <code>unplugin-vue-components</code> 无法自动引入 Dialog 等组件。</p><p>为了更符合直觉，我们在 Vant 4 中调整了组件工具函数的调用方式，受影响的函数包括 <code>Dialog()</code>、<code>Toast()</code>、<code>Notify()</code> 和 <code>ImagePreview()</code>。以 Dialog 为例，我们将 <code>Dialog()</code> 函数重命名为 <code>showDialog()</code>，并让 <code>Dialog</code> 直接指向组件对象。</p><pre><code class="language-ts"><span class="hljs-comment">// 函数调用</span>
<span class="hljs-title function_">showDialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Hello World!&#39;</span> });

<span class="hljs-comment">// 组件注册</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-string">&#39;van-dialog&#39;</span>, <span class="hljs-title class_">Dialog</span>);
</code></pre><p>为了便于存量代码迁移至 Vant 4.0，我们提供了兼容方案，你可以使用 <code>@vant/compat</code> 中导出的 <code>Dialog()</code> 函数来兼容原有代码。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/compat&#39;</span>;

<span class="hljs-title class_">Dialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Hello World!&#39;</span> });
</code></pre><p><code>@vant/compat</code> 中导出的 <code>Dialog()</code> 与 Vant 3 中的 <code>Dialog()</code> 拥有完全一致的 API 和行为，因此在升级时，你只需要修改它的引用路径，其余代码可以保持不变。在项目完成升级到 Vant 4.0 后，建议在迭代中逐步替换为新的 <code>showDialog()</code> 等方法，并移除 <code>@vant/compat</code> 包。</p></div><div class="van-doc-card"><h3 id="shi-jian-ming-ming-diao-zheng" tabindex="-1">事件命名调整</h3><p><strong>Vant 4.0 将事件名改为驼峰格式。</strong></p><p>从 Vant 4 开始，所有的事件均采用 Vue 官方推荐的驼峰格式进行命名。</p><pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;click-input&#39;</span>);

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;clickInput&#39;</span>);
</code></pre><p>这项改动<strong>不影响原有的模板代码</strong>，Vue 会自动在模板中对事件名进行格式转换，因此你无须做任何更改。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 以下代码可以照常运行，无须做任何更改 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> @<span class="hljs-attr">click-input</span>=<span class="hljs-string">&quot;onClick&quot;</span> /&gt;</span>
</code></pre><p>如果你在 JSX 中使用 Vant 组件，需要将监听的事件名调整为驼峰格式，原有的中划线格式将不再生效，新的监听方式更加符合 JSX 本身的规范：</p><pre><code class="language-jsx"><span class="hljs-comment">// Vant 3</span>
&lt;<span class="hljs-title class_">Field</span> onClick-input={onClick} /&gt;

<span class="hljs-comment">// Vant 4</span>
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">onClickInput</span>=<span class="hljs-string">{onClick}</span> /&gt;</span></span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-chu-less-bian-liang" tabindex="-1">移除 Less 变量</h3><p><strong>Vant 4.0 不再支持通过 Less 变量定制主题。</strong></p><p>目前 Vant 已经支持基于 CSS 变量的主题定制，相较于 Less 定制更加灵活。因此，Vant 4 将不再提供基于 Less 的主题定制。这意味着 Vant 的 npm 包中将不再会包含 <code>.less</code> 样式源文件，仅会提供编译后的 <code>.css</code> 样式文件。</p><p>如果你的项目正在使用旧版的 Less 主题定制，请使用 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 全局配置</a> 进行替换。</p></div><div class="van-doc-card"><h3 id="vant-cli-5.0" tabindex="-1">Vant Cli 5.0</h3><p><strong>本次更新同步发布了 Vant Cli 5.0 版本。</strong></p><p><a href="https://github.com/youzan/vant/tree/main/packages/vant-cli" target="_blank">Vant Cli</a> 是 Vant 底层的组件库构建工具，本次更新内容有：</p><ul><li>升级 Vite 到 3.0 版本，并对相关的 Vite 插件进行升级。</li><li>不再默认安装 <code>stylelint</code> 和 <code>@vant/stylelint-config</code> 依赖，需要的话可以自行安装：</li></ul><pre><code class="language-bash">npm add stylelint@13 @vant/stylelint-config
</code></pre><ul><li>不再默认安装 <code>gh-pages</code> 依赖，请按照如下方式更新 package.json：</li></ul><pre><code class="language-diff"><span class="hljs-deletion">- &quot;release:site&quot;: &quot;pnpm build:site &amp;&amp; gh-pages -d site-dist&quot;,</span>
<span class="hljs-addition">+ &quot;release:site&quot;: &quot;pnpm build:site &amp;&amp; npx gh-pages -d site-dist&quot;,</span>
</code></pre></div><div class="van-doc-card"><h3 id="ban-ben-xin-xi" tabindex="-1">版本信息</h3><p><strong>目前 <a href="https://vant-ui.github.io/vant/" target="_blank">Vant 官网</a> 和 npm latest 标签均已指向 Vant 4.0。</strong></p><p>我们为 Vant 4.0 准备了完整的升级指南，请阅读 <a href="https://vant-ui.github.io/vant/#/zh-CN/migrate-from-v3" target="_blank">从 v3 升级到 v4</a> 进行升级。</p><p>同时，Vant 3.x 也会进入维护状态，后续 Vant 各个版本的维护状态如下：</p><table><thead><tr><th>名称</th><th>框架</th><th>发布时间</th><th>维护状态</th></tr></thead><tbody><tr><td>Vant 4</td><td>Vue 3</td><td><code>2022.12</code></td><td>持续迭代新功能</td></tr><tr><td>Vant 3</td><td>Vue 3</td><td><code>2020.12</code></td><td>停止迭代新功能，bug 会被处理和修复</td></tr><tr><td>Vant 2</td><td>Vue 2</td><td><code>2019.06</code></td><td>停止迭代新功能，重要 bug 会被处理和修复</td></tr><tr><td>Vant 1</td><td>Vue 2</td><td><code>2018.03</code></td><td>停止维护，不再接受 PR</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="zui-hou" tabindex="-1">最后</h3><p>感谢在 Vant 4.0 迭代期间做出贡献的朋友们，感谢所有使用 Vant 的开发者，愿大家在开源的道路上步履不停。</p><p><img src="https://user-images.githubusercontent.com/7237365/205481230-fdd89482-86ad-40c8-b81f-4af0789f8488.png" alt=""></p></div>`,15),o=[c],g={__name:"release-note-v4.zh-CN",setup(p,{expose:a}){return a({frontmatter:{}}),(l,d)=>(s(),t("div",e,o))}};export{g as default};
