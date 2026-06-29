---
title: "📝 Markdown 完全指南：从入门到精通"
publishedAt: 2026-06-26 12:30:26
tags: ["Markdown", "写作", "教程"]
draft: false
---

Markdown 是一种轻量级标记语言，让你可以用纯文本格式写出漂亮的文档。本文将带你全面了解 Markdown 的各种语法。

## 基础语法

### 标题

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

效果：

# 一级标题

## 二级标题

### 三级标题

### 段落与换行

普通文本就是段落。要换行，在行尾加两个空格。

### 强调

```markdown
_斜体文本_ 或 _斜体文本_
**粗体文本** 或 **粗体文本**
**_粗斜体文本_**
~~删除线~~
```

效果：_斜体_ **粗体** **_粗斜体_** ~~删除线~~

## 列表

### 无序列表

```markdown
- 项目一
- 项目二
  - 子项目 A
  - 子项目 B
- 项目三
```

效果：

- 项目一
- 项目二
  - 子项目 A
  - 子项目 B
- 项目三

### 有序列表

```markdown
1. 第一步
2. 第二步
3. 第三步
```

效果：

1. 第一步
2. 第二步
3. 第三步

### 任务列表

```markdown
- [x] 完成任务 A
- [ ] 待办任务 B
- [ ] 待办任务 C
```

效果：

- [x] 完成任务 A
- [ ] 待办任务 B
- [ ] 待办任务 C

## 代码

### 行内代码

```markdown
使用 `console.log()` 输出内容
```

效果：使用 `console.log()` 输出内容

### 代码块

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("World");
console.log(message);
```


```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
```


```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build
```

## 引用

```markdown
> 这是一段引用文本。
>
> 引用可以有多段。

> 嵌套引用
>
> > 这是嵌套的引用
```

效果：

> 这是一段引用文本。
>
> 引用可以有多段。

> 嵌套引用
>
> > 这是嵌套的引用

## 链接与图片

### 链接

```markdown
[访问 Astro 官网](https://astro.build/)
[带标题的链接](https://astro.build/ "Astro 官方文档")
<mailto:hello@example.com>
```

效果：[访问 Astro 官网](https://astro.build/)

### 图片

```markdown
![图片描述](https://astro.build/assets/press/full-logo-light.png)

![带标题的图片](https://astro.build/assets/press/full-logo-light.png "Astro Logo")
```

## 表格

```markdown
| 功能     | 描述                 | 状态 |
| -------- | -------------------- | ---- |
| 标题     | 支持 1-6 级标题      | ✅   |
| 列表     | 有序、无序、任务列表 | ✅   |
| 代码     | 行内和代码块         | ✅   |
| 表格     | 支持对齐和合并       | ✅   |
| 数学公式 | 支持 LaTeX           | ⚠️   |
```

效果：

| 功能     | 描述                 | 状态 |
| -------- | -------------------- | ---- |
| 标题     | 支持 1-6 级标题      | ✅   |
| 列表     | 有序、无序、任务列表 | ✅   |
| 代码     | 行内和代码块         | ✅   |
| 表格     | 支持对齐和合并       | ✅   |
| 数学公式 | 支持 LaTeX           | ⚠️   |

## 分割线

```markdown
---
---

---
```

效果：

---

## 脚注

```markdown
这是一段有脚注的文本[^1]。

[^1]: 这是脚注的内容
```

效果：

这是一段有脚注的文本[^1]。

[^1]: 这是脚注的内容

## 高级技巧

### 表情符号

支持常见的 emoji：😀 🚀 💡 ✨ 🔥

### 自动链接

```markdown
https://astro.build
mailto:hello@example.com
```

效果：https://astro.build

### 定义列表

```markdown
术语
: 术语的定义
```

---

**💡 提示**：Markdown 语法简洁优雅，适合写文档、笔记、博客等各种场景。掌握这些语法，让你的写作效率翻倍！
