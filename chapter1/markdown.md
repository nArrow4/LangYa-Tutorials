# Section1.6: Markdown

## Intro

Typora是一款轻便简洁的Markdown编辑器，支持即时渲染技术，这也是与其他Markdown编辑器最显著的区别。即时渲染使得你写Markdown就想是写Word文档一样流畅自如，不像其他编辑器的有编辑栏和显示栏。

Typora删除了预览窗口，以及所有其他不必要的干扰。取而代之的是实时预览。
Markdown的语法因不同的解析器或编辑器而异，Typora使用的是GitHub Flavored Markdown。

## Markdown 语法

### 标题
```markdown
# 一级标题
## 二级标题
......
```
# 一级标题
## 二级标题
......

### 引用文字

```markdown 
> + 空格 + 引用文字
```
> 引用文字

### 无序列表

```markdown
*/-/+ list1
*/-/+ list2
```
* list1
* list2

### 有序列表

```markdown
1. A
2. B
```

1. A
2. B

### 代码块

```markdown
```cpp
int main() {
    printf("hello world\n");
}```
```
```cpp
int main() {
    printf("hello world\n");
}
```

### 数学公式

```markdown
行间公式：
$$\frac{\Sigma_{i=0}^N{(i+1)}}{\sqrt{N}}$$

行内公式：$ \omega $
```
行间公式：
$$\frac{\Sigma_{i=0}^N{(i+1)}}{\sqrt{N}}$$

行内公式：$\omega$

### 更多的功能大家自行探索