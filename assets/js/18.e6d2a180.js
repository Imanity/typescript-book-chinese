(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{243:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"命令行的行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行的行为","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令行的行为")]),t._v(" "),a("h2",{attrs:{id:"如何控制输出文件中的排序（-out）？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何控制输出文件中的排序（-out）？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何控制输出文件中的排序（-- out）？")]),t._v(" "),a("p",[t._v("输出文件的排序遵循预处理后输入文件的顺序。")]),t._v(" "),a("p",[t._v("编译器执行预处理，主要是为了解决所有的三斜线指令和模块导入。在这个过程中，额外的文件将会被将入到编译过程中。")]),t._v(" "),a("p",[t._v("这个过程开始于一个给定的根文件，这些是在命令行或者是 "),a("code",[t._v("tsconfig.json")]),t._v(" 文件中 files 指定文件名，这些根文件按照指定的顺序进行预处理。在一个文件添加到这个列表之前，将处理所有的三斜线引用和模块导入语法，并包括它们的目标。三斜线引用和导入语法按照它们在文件中出现的顺序，以深度优先的方式解析。")]),t._v(" "),a("p",[t._v("请参考有关"),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("三斜线指令"),a("OutboundLink")],1),t._v("的更多信息，和"),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("模块"),a("OutboundLink")],1),t._v("导入语法的信息。")]),t._v(" "),a("h2",{attrs:{id:"exported-variable-name-has-or-is-using-private-name-name-是什么错误？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exported-variable-name-has-or-is-using-private-name-name-是什么错误？","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("Exported variable [name] has or is using private name [name]")]),t._v(" 是什么错误？")]),t._v(" "),a("p",[t._v("当你使用 "),a("code",[t._v("--declarartion")]),t._v(" 编译选项的时候，可能会出现这个错误，因为编译器试图生成与你定义模块完全匹配的声明文件：")]),t._v(" "),a("p",[t._v("假设你有这样一段代码：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// MyFile.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... other members ....")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some thing'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("为了生成声明文件，编译器必须为 "),a("code",[t._v("t")]),t._v(" 写一个类型：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// MyFile.d.ts, auto-generated")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ___fill "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the blank___"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("成员 "),a("code",[t._v("t")]),t._v(" 有类型 "),a("code",[t._v("Test")]),t._v("，但是类型 "),a("code",[t._v("Test")]),t._v(" 并不是可见的，因为它没有导出，因此我们不能写 "),a("code",[t._v("t: Test")]),t._v("。")]),t._v(" "),a("p",[t._v("在这个非常简单的例子里，我们可以用一个对象字面量重写 "),a("code",[t._v("Test's")]),t._v(" 的形状。但是对于绝大多数情况，这并不能正常工作。如代码里所写，Test 的形状是自引用的，不能重写为匿名函数。如果 "),a("code",[t._v("Test")]),t._v(" 有任何私有或受保护的成员，这同样也不能正常工作。因此，与其让你通过编写一个真实的类来获得 65% 的成功而后开始抛出错误，我们仅仅是在一开始的时候就抛出错误（你以后会发现）并为你省去不必要的麻烦。")]),t._v(" "),a("p",[t._v("为了避免这些错误：")]),t._v(" "),a("ul",[a("li",[t._v("导出相关类型中使用的声明")]),t._v(" "),a("li",[t._v("当编写声明的时候，显示的为编译器指定类型注解")])]),t._v(" "),a("h2",{attrs:{id:"为什么添加-outdir-属性后，当在添加一个新文件时，会把所有的输出删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么添加-outdir-属性后，当在添加一个新文件时，会把所有的输出删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么添加 "),a("code",[t._v("--outDir")]),t._v(" 属性后，当在添加一个新文件时，会把所有的输出删除")]),t._v(" "),a("p",[a("code",[t._v("--outDir")]),t._v(" 指定输出的「根」目录。编译器需要此属性，用来将资源映射输出到根目录。如果 "),a("code",[t._v("--rootDir")]),t._v(" 没有被指定，编辑器将会自己计算出一个。它根据常见的路径计算，它是所有输入文件的最长公共前缀。显然，当在较短路径前缀中添加新文件时，"),a("code",[t._v("--rootDir")]),t._v(" 将会被修改。")]),t._v(" "),a("p",[t._v("为了确保添加一个新文件时，输出不会被修改，你应该在命令行中或 "),a("code",[t._v("tsconfig.json")]),t._v(" 指定一个 "),a("code",[t._v("--rootDir")]),t._v("。")])])},[],!1,null,null,null);s.default=r.exports}}]);