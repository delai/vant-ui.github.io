import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>Field \u8F93\u5165\u6846</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u6237\u53EF\u4EE5\u5728\u6587\u672C\u6846\u5185\u8F93\u5165\u6216\u7F16\u8F91\u6587\u5B57\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Field</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Field</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u53EF\u4EE5\u901A\u8FC7 <code>v-model</code> \u53CC\u5411\u7ED1\u5B9A\u8F93\u5165\u6846\u7684\u503C\uFF0C\u901A\u8FC7 <code>placeholder</code> \u8BBE\u7F6E\u5360\u4F4D\u63D0\u793A\u6587\u5B57\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u53EF\u4EE5\u4F7F\u7528 CellGroup \u4F5C\u4E3A\u5BB9\u5668 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-lei-xing" tabindex="-1">\u81EA\u5B9A\u4E49\u7C7B\u578B</h3><p>\u6839\u636E <code>type</code> \u5C5E\u6027\u5B9A\u4E49\u4E0D\u540C\u7C7B\u578B\u7684\u8F93\u5165\u6846\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>text</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- \u8F93\u5165\u4EFB\u610F\u6587\u672C --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- \u8F93\u5165\u624B\u673A\u53F7\uFF0C\u8C03\u8D77\u624B\u673A\u53F7\u952E\u76D8 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u624B\u673A\u53F7&quot;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- \u5141\u8BB8\u8F93\u5165\u6B63\u6574\u6570\uFF0C\u8C03\u8D77\u7EAF\u6570\u5B57\u952E\u76D8 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6574\u6570&quot;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- \u5141\u8BB8\u8F93\u5165\u6570\u5B57\uFF0C\u8C03\u8D77\u5E26\u7B26\u53F7\u7684\u7EAF\u6570\u5B57\u952E\u76D8 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6570\u5B57&quot;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- \u8F93\u5165\u5BC6\u7801 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> tel = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> digit = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> number = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> password = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);

    <span class="hljs-keyword">return</span> { tel, text, digit, number, password };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-shu-ru-kuang" tabindex="-1">\u7981\u7528\u8F93\u5165\u6846</h3><p>\u901A\u8FC7 <code>readonly</code> \u5C06\u8F93\u5165\u6846\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u901A\u8FC7 <code>disabled</code> \u5C06\u8F93\u5165\u6846\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> <span class="hljs-attr">model-value</span>=<span class="hljs-string">&quot;\u8F93\u5165\u6846\u53EA\u8BFB&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> <span class="hljs-attr">model-value</span>=<span class="hljs-string">&quot;\u8F93\u5165\u6846\u5DF2\u7981\u7528&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xian-shi-tu-biao" tabindex="-1">\u663E\u793A\u56FE\u6807</h3><p>\u901A\u8FC7 <code>left-icon</code> \u548C <code>right-icon</code> \u914D\u7F6E\u8F93\u5165\u6846\u4E24\u4FA7\u7684\u56FE\u6807\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>clearable</code> \u5728\u8F93\u5165\u8FC7\u7A0B\u4E2D\u5C55\u793A\u6E05\u9664\u56FE\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span>
    <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;smile-o&quot;</span>
    <span class="hljs-attr">right-icon</span>=<span class="hljs-string">&quot;warning-o&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u663E\u793A\u56FE\u6807&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">clearable</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span>
    <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;music-o&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u663E\u793A\u6E05\u9664\u56FE\u6807&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">return</span> {
      value1,
      value2,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="cuo-wu-ti-shi" tabindex="-1">\u9519\u8BEF\u63D0\u793A</h3><p>\u8BBE\u7F6E <code>required</code> \u5C5E\u6027\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u5FC5\u586B\u9879\uFF0C\u53EF\u4EE5\u914D\u5408 <code>error</code> \u6216 <code>error-message</code> \u5C5E\u6027\u663E\u793A\u5BF9\u5E94\u7684\u9519\u8BEF\u63D0\u793A\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span>
    <span class="hljs-attr">error</span>
    <span class="hljs-attr">required</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;phone&quot;</span>
    <span class="hljs-attr">required</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u624B\u673A\u53F7&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u624B\u673A\u53F7&quot;</span>
    <span class="hljs-attr">error-message</span>=<span class="hljs-string">&quot;\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="cha-ru-an-niu" tabindex="-1">\u63D2\u5165\u6309\u94AE</h3><p>\u901A\u8FC7 button \u63D2\u69FD\u53EF\u4EE5\u5728\u8F93\u5165\u6846\u5C3E\u90E8\u63D2\u5165\u6309\u94AE\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;sms&quot;</span>
    <span class="hljs-attr">center</span>
    <span class="hljs-attr">clearable</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u77ED\u4FE1\u9A8C\u8BC1\u7801&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u53D1\u9001\u9A8C\u8BC1\u7801<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ge-shi-hua-shu-ru-nei-rong" tabindex="-1">\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9</h3><p>\u901A\u8FC7 <code>formatter</code> \u5C5E\u6027\u53EF\u4EE5\u5BF9\u8F93\u5165\u7684\u5185\u5BB9\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u901A\u8FC7 <code>format-trigger</code> \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u6267\u884C\u683C\u5F0F\u5316\u7684\u65F6\u673A\uFF0C\u9ED8\u8BA4\u5728\u8F93\u5165\u65F6\u8FDB\u884C\u683C\u5F0F\u5316\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span>
    <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span>
    <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
    <span class="hljs-attr">format-trigger</span>=<span class="hljs-string">&quot;onBlur&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-comment">// \u8FC7\u6EE4\u8F93\u5165\u7684\u6570\u5B57</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">value</span>) =&gt; value.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/\\d/g</span>, <span class="hljs-string">&#39;&#39;</span>);

    <span class="hljs-keyword">return</span> {
      value1,
      value2,
      formatter,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="gao-du-zi-gua-ying" tabindex="-1">\u9AD8\u5EA6\u81EA\u9002\u5E94</h3><p>\u5BF9\u4E8E textarea\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>autosize</code> \u5C5E\u6027\u8BBE\u7F6E\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;message&quot;</span>
    <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;1&quot;</span>
    <span class="hljs-attr">autosize</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7559\u8A00&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7559\u8A00&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xian-shi-zi-shu-tong-ji" tabindex="-1">\u663E\u793A\u5B57\u6570\u7EDF\u8BA1</h3><p>\u8BBE\u7F6E <code>maxlength</code> \u548C <code>show-word-limit</code> \u5C5E\u6027\u540E\u4F1A\u5728\u5E95\u90E8\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;message&quot;</span>
    <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">autosize</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7559\u8A00&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>
    <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7559\u8A00&quot;</span>
    <span class="hljs-attr">show-word-limit</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shu-ru-kuang-nei-rong-dui-qi" tabindex="-1">\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50</h3><p>\u901A\u8FC7 <code>input-align</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8F93\u5165\u6846\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code>\u3001<code>right</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50&quot;</span>
    <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;right&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u8F93\u5165\u7684\u503C</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>\u8F93\u5165\u6846\u5DE6\u4FA7\u6587\u672C</td><td><em>string</em></td><td>-</td></tr><tr><td>name</td><td>\u540D\u79F0\uFF0C\u4F5C\u4E3A\u63D0\u4EA4\u8868\u5355\u65F6\u7684\u6807\u8BC6\u7B26</td><td><em>string</em></td><td>-</td></tr><tr><td>id <code>v3.2.2</code></td><td>\u8F93\u5165\u6846 id\uFF0C\u540C\u65F6\u4F1A\u8BBE\u7F6E label \u7684 for \u5C5E\u6027</td><td><em>string</em></td><td><code>van-field-n-input</code></td></tr><tr><td>type</td><td>\u8F93\u5165\u6846\u7C7B\u578B, \u652F\u6301\u539F\u751F input \u6807\u7B7E\u7684\u6240\u6709 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%3Cinput%3E_types" target="_blank">type \u5C5E\u6027</a>\uFF0C\u989D\u5916\u652F\u6301\u4E86 <code>digit</code> \u7C7B\u578B</td><td><em>FieldType</em></td><td><code>text</code></td></tr><tr><td>size</td><td>\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>large</code></td><td><em>string</em></td><td>-</td></tr><tr><td>maxlength</td><td>\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570</td><td><em>number | string</em></td><td>-</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57</td><td><em>string</em></td><td>-</td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8F93\u5165\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u8F93\u5165\u5185\u5BB9</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>colon</td><td>\u662F\u5426\u5728 label \u540E\u9762\u6DFB\u52A0\u5192\u53F7</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>required</td><td>\u662F\u5426\u663E\u793A\u8868\u5355\u5FC5\u586B\u661F\u53F7</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>center</td><td>\u662F\u5426\u4F7F\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clearable</td><td>\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clear-icon <code>v3.0.12</code></td><td>\u6E05\u9664\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>clear-trigger</td><td>\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C<code>always</code> \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C<br><code>focus</code> \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A</td><td><em>FieldClearTrigger</em></td><td><code>focus</code></td></tr><tr><td>clickable</td><td>\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-link</td><td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>autofocus</td><td>\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-word-limit</td><td>\u662F\u5426\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\uFF0C\u9700\u8981\u8BBE\u7F6E <code>maxlength</code> \u5C5E\u6027</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error</td><td>\u662F\u5426\u5C06\u8F93\u5165\u5185\u5BB9\u6807\u7EA2</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error-message</td><td>\u5E95\u90E8\u9519\u8BEF\u63D0\u793A\u6587\u6848\uFF0C\u4E3A\u7A7A\u65F6\u4E0D\u5C55\u793A</td><td><em>string</em></td><td>-</td></tr><tr><td>error-message-align</td><td>\u9519\u8BEF\u63D0\u793A\u6587\u6848\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>formatter</td><td>\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u5316\u51FD\u6570</td><td><em>(val: string) =&gt; string</em></td><td>-</td></tr><tr><td>format-trigger</td><td>\u683C\u5F0F\u5316\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A <code>onBlur</code></td><td><em>FieldFormatTrigger</em></td><td><code>onChange</code></td></tr><tr><td>arrow-direction</td><td>\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>left</code> <code>up</code> <code>down</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>label-class</td><td>\u5DE6\u4FA7\u6587\u672C\u989D\u5916\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>label-width</td><td>\u5DE6\u4FA7\u6587\u672C\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>6.2em</code></td></tr><tr><td>label-align</td><td>\u5DE6\u4FA7\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>input-align</td><td>\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>autosize</td><td>\u662F\u5426\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EA\u5BF9 textarea \u6709\u6548\uFF0C<br>\u53EF\u4F20\u5165\u5BF9\u8C61,\u5982 { maxHeight: 100, minHeight: 50 }\uFF0C<br>\u5355\u4F4D\u4E3A<code>px</code></td><td><em>boolean | FieldAutosizeConfig</em></td><td><code>false</code></td></tr><tr><td>left-icon</td><td>\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td>-</td></tr><tr><td>right-icon</td><td>\u53F3\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>rules</td><td>\u8868\u5355\u6821\u9A8C\u89C4\u5219\uFF0C\u8BE6\u89C1 <a href="#/zh-CN/form#rule-shu-ju-jie-gou" target="_blank">Form \u7EC4\u4EF6</a></td><td><em>FieldRule[]</em></td><td>-</td></tr><tr><td>autocomplete <code>v3.0.3</code></td><td>HTML \u539F\u751F\u5C5E\u6027\uFF0C\u7528\u4E8E\u63A7\u5236\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\uFF0C\u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank">MDN - autocomplete</a></td><td><em>string</em></td><td>-</td></tr><tr><td>enterkeyhint <code>v3.4.8</code></td><td>HTML \u539F\u751F\u5C5E\u6027\uFF0C\u7528\u4E8E\u63A7\u5236\u56DE\u8F66\u952E\u6837\u5F0F\uFF0C\u6B64 API \u4EC5\u5728\u90E8\u5206\u6D4F\u89C8\u5668\u652F\u6301\uFF0C\u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint" target="_blank">MDN - enterkeyhint</a><br></td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>update:model-value</td><td>\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td><td><em>value: string (\u5F53\u524D\u8F93\u5165\u7684\u503C)</em></td></tr><tr><td>focus</td><td>\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td><em>event: Event</em></td></tr><tr><td>blur</td><td>\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td><em>event: Event</em></td></tr><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>click</td><td>\u70B9\u51FB\u7EC4\u4EF6\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-input</td><td>\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-left-icon</td><td>\u70B9\u51FB\u5DE6\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-right-icon</td><td>\u70B9\u51FB\u53F3\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>start-validate <code>v3.5.1</code></td><td>\u5F00\u59CB\u8868\u5355\u6821\u9A8C\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>end-validate <code>v3.5.1</code></td><td>\u7ED3\u675F\u8868\u5355\u6821\u9A8C\u65F6\u89E6\u53D1</td><td><em>{ status: string }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Field \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>focus</td><td>\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9</td><td>-</td><td>-</td></tr><tr><td>blur</td><td>\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">FieldType</span>,
  <span class="hljs-title class_">FieldRule</span>,
  <span class="hljs-title class_">FieldProps</span>,
  <span class="hljs-title class_">FieldInstance</span>,
  <span class="hljs-title class_">FieldTextAlign</span>,
  <span class="hljs-title class_">FieldRuleMessage</span>,
  <span class="hljs-title class_">FieldClearTrigger</span>,
  <span class="hljs-title class_">FieldFormatTrigger</span>,
  <span class="hljs-title class_">FieldRuleValidator</span>,
  <span class="hljs-title class_">FiledRuleFormatter</span>,
  <span class="hljs-title class_">FieldValidateError</span>,
  <span class="hljs-title class_">FieldAutosizeConfig</span>,
  <span class="hljs-title class_">FieldValidateTrigger</span>,
  <span class="hljs-title class_">FieldValidationStatus</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>FieldInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FieldInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> fieldRef = ref&lt;<span class="hljs-title class_">FieldInstance</span>&gt;();

fieldRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">focus</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5DE6\u4FA7\u6587\u672C</td><td>-</td></tr><tr><td>input</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\uFF0C\u4F7F\u7528\u6B64\u63D2\u69FD\u540E\uFF0C\u4E0E\u8F93\u5165\u6846\u76F8\u5173\u7684\u5C5E\u6027\u548C\u4E8B\u4EF6\u5C06\u5931\u6548</td><td>-</td></tr><tr><td>left-icon</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807</td><td>-</td></tr><tr><td>right-icon</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807</td><td>-</td></tr><tr><td>button</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5C3E\u90E8\u6309\u94AE</td><td>-</td></tr><tr><td>error-message <code>v3.2.5</code></td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u9519\u8BEF\u63D0\u793A\u6587\u6848</td><td><em>{ message: string }</em></td></tr><tr><td>extra</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u6700\u53F3\u4FA7\u7684\u989D\u5916\u5185\u5BB9</td><td>-</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-field-label-width</td><td><em>6.2em</em></td><td>-</td></tr><tr><td>--van-field-label-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-field-label-margin-right</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-field-input-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-field-input-error-text-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-field-input-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-placeholder-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-field-clear-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-field-clear-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-field-right-icon-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-field-error-message-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-field-error-message-font-size</td><td><em>12px</em></td><td>-</td></tr><tr><td>--van-field-text-area-min-height</td><td><em>60px</em></td><td>-</td></tr><tr><td>--van-field-word-limit-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-field-word-limit-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-field-word-limit-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-field-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-required-mark-color</td><td><em>var(--van-red)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="she-zhi-type-wei-number-hou-wei-shi-me-input-biao-qian-de-lei-xing-reng-wei-text" tabindex="-1">\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?</h3><p>HTML \u539F\u751F\u7684 <code>type=&quot;number&quot;</code> \u5C5E\u6027\u5728 iOS \u548C Android \u7CFB\u7EDF\u4E0A\u90FD\u5B58\u5728\u4E00\u5B9A\u95EE\u9898\uFF0C\u6BD4\u5982 maxlength \u5C5E\u6027\u4E0D\u751F\u6548\u3001\u65E0\u6CD5\u83B7\u53D6\u5230\u5B8C\u6574\u7684\u8F93\u5165\u5185\u5BB9\u7B49\u3002\u56E0\u6B64\u8BBE\u7F6E type \u4E3A <code>number</code> \u65F6\uFF0CField \u4E0D\u4F1A\u4F7F\u7528\u539F\u751F\u7684 <code>type=&quot;number&quot;</code> \u5C5E\u6027\uFF0C\u800C\u662F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode" target="_blank">inputmode \u5C5E\u6027</a>\u6765\u63A7\u5236\u8F93\u5165\u952E\u76D8\u7684\u7C7B\u578B\u3002</p></div><div class="van-doc-card"><h3 id="wei-shi-me-v-model-bang-ding-de-zhi-bei-geng-xin-wei-string-lei-xing" tabindex="-1">\u4E3A\u4EC0\u4E48 v-model \u7ED1\u5B9A\u7684\u503C\u88AB\u66F4\u65B0\u4E3A string \u7C7B\u578B\uFF1F</h3><p>Field \u7EC4\u4EF6\u5185\u90E8\u4F1A\u5C06\u4F20\u5165\u7684 v-model \u683C\u5F0F\u5316\u4E3A string \u7C7B\u578B\uFF0C\u4FBF\u4E8E\u7EC4\u4EF6\u5185\u90E8\u8FDB\u884C\u5904\u7406\u3002</p><p>\u5982\u679C\u4F60\u5E0C\u671B\u5728 v-model \u4E0A\u7ED1\u5B9A number \u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F7F\u7528 Vue \u63D0\u4F9B\u7684 <a href="https://vuejs.org/guide/essentials/forms.html#lazy" target="_blank">.number \u4FEE\u9970\u7B26</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model.number</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;tel&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-dian-ji-qing-chu-an-niu-wu-xiao" tabindex="-1">\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F</h3><p>\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p></div>`,26),d=[e],h={__name:"README.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(c,o)=>(a(),t("div",l,d))}};export{h as default};