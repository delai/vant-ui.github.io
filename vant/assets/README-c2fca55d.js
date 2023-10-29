import{_ as t}from"./locales-ad8a99a3.js";import{o as s,a,z as n}from"./vue-libs-83dbabed.js";const e={},d={class:"van-doc-markdown-body"},o=n(`<h1>ContactEdit</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Edit and save the contact information.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactEdit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactEdit</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-edit</span>
  <span class="hljs-attr">is-edit</span>
  <span class="hljs-attr">show-set-default</span>
  <span class="hljs-attr">:contact-info</span>=<span class="hljs-string">&quot;editingContact&quot;</span>
  <span class="hljs-attr">set-default-label</span>=<span class="hljs-string">&quot;Set as the default contact&quot;</span>
  @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;onSave&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> editingContact = <span class="hljs-title function_">ref</span>({
      <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,
    });
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSave</span> = (<span class="hljs-params">contactInfo</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Save&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params">contactInfo</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Delete&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onSave,
      onDelete,
      editingContact,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>contact-info</td><td>Contact Info</td><td><em>ContactEditInfo</em></td><td><code>{}</code></td></tr><tr><td>is-edit</td><td>Whether is editing</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-saving</td><td>Whether to show save button loading status</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-deleting</td><td>Whether to show delete button loading status</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>tel-validator</td><td>The method to validate tel</td><td><em>(tel: string) =&gt; boolean</em></td><td>-</td></tr><tr><td>show-set-default</td><td>Whether to show default contact switch</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>set-default-label</td><td>default contact switch label</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>save</td><td>Emitted when the save button is clicked</td><td>content: contact info</td></tr><tr><td>delete</td><td>Emitted when the delete button is clicked</td><td>content: contact info</td></tr><tr><td>change-default</td><td>Emitted when the default contact is switched</td><td>checked：contact is not the default</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-contacteditinfo" tabindex="-1">Data Structure of ContactEditInfo</h3><table><thead><tr><th>key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>name</td><td>Name</td><td><em>string</em></td></tr><tr><td>tel</td><td>Phone</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>Is Default</td><td><em>boolean | undefined</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactEditInfo</span>, <span class="hljs-title class_">ContactEditProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-contact-edit-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-contact-edit-fields-radius</td><td><em>var(--van-radius-md)</em></td><td>-</td></tr><tr><td>--van-contact-edit-buttons-padding</td><td><em>var(--van-padding-xl) 0</em></td><td>-</td></tr><tr><td>--van-contact-edit-button-margin-bottom</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-contact-edit-button-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-contact-edit-field-label-width</td><td><em>4.1em</em></td><td>-</td></tr></tbody></table></div>`,12),l=[o];function c(i,r){return s(),a("div",d,l)}const m=t(e,[["render",c]]);export{m as default};