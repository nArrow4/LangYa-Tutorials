# Section1.4: Vim

vim被称为编译器之神，在开始之前，请先用一下指令安装vim。
```sh
sudo apt-get install vim
```

## Learning Vim

这里只是简单列举常用语法，详情阅读[《vim.pdf》](./assets/vim.pdf)

### 打开，保存，关闭文件

* 打开

```sh
vim your_file_path
```

* 保存、关闭

```sh
# 退出vim
:q
# 保存并退出
:wq
# 不保存退出
:q!
```

### vim的三种模式

* 编辑模式

可以在文件中移动光标位置，并进行搜索、复制、粘贴等操作

* 插入模式

插入模式可以直接向文档键入内容

* 命令模式

通过输入指令完成指定操作

* 三种模式的切换

刚打开vim时处于编辑模式
1. 编辑模式到插入模式：a/i
2. 编辑模式到命令模式：:
3. 返回编辑模式：[esc]

### 搜索，删除，替换，复制

* 搜索

```vim
/[word]
```

* 复制粘贴

```vim
yy
p
```

## The Power of VIM

举个例子

```
# 创建一个新文件，生成以下内容
1
2
3
.....
98
99
100
```

```vim
i1<ESC>q1yyp<C-a>q98@1
```

## Vim Features

### 语法高亮

以语法高亮为例来说明如何启用 vim 的功能。 为此需要修改 vim 配置文件，该文件名为vimrc，位于 /etc/vim 目录下。

```sh
sudo vim /etc/vim/vimrc
```

然后开启语法高亮：
```vim
--- before modification
+++ after modification
@@ -17,3 +17,3 @@
 " Vim5 and later versions support syntax highlighting. Uncommenting the next
 " line enables syntax highlighting by default.
-"syntax on
+syntax on
```

### 更多特性

就跟vscode插件类似，大家可以自行定制

```vim
--- before modification
+++ after modification
@@ -21,3 +21,3 @@
 " If using a dark background within the editing area and syntax highlighting
 " turn on this option as well
-"set background=dark
+set background=dark
@@ -31,5 +31,5 @@
 " Uncomment the following to have Vim load indentation rules and plugins
 " according to the detected filetype.
-"filetype plugin indent on
+filetype plugin indent on
@@ -37,10 +37,10 @@
 " The following are commented out as they cause vim to behave a lot
 " differently from regular Vi. They are highly recommended though.
 "set showcmd            " Show (partial) command in status line.
-"set showmatch          " Show matching brackets.
-"set ignorecase         " Do case insensitive matching
-"set smartcase          " Do smart case matching
-"set incsearch          " Incremental search
+set showmatch          " Show matching brackets.
+set ignorecase         " Do case insensitive matching
+set smartcase          " Do smart case matching
+set incsearch          " Incremental search
 "set autowrite          " Automatically save before commands like :next and :make
-"set hidden             " Hide buffers when they are abandoned
+set hidden             " Hide buffers when they are abandoned
 "set mouse=a            " Enable mouse usage (all modes)
```

相关说明：
```vim
setlocal noswapfile " 不要生成swap文件
set bufhidden=hide " 当buffer被丢弃的时候隐藏它
colorscheme evening " 设定配色方案
set number " 显示行号
set cursorline " 突出显示当前行
set ruler " 打开状态栏标尺
set shiftwidth=4 " 设定 << 和 >> 命令移动时的宽度为 4
set softtabstop=4 " 使得按退格键时可以一次删掉 4 个空格
set tabstop=4 " 设定 tab 长度为 4
set nobackup " 覆盖文件时不备份
set autochdir " 自动切换当前目录为当前文件所在的目录
set backupcopy=yes " 设置备份时的行为为覆盖
set hlsearch " 搜索时高亮显示被找到的文本
set noerrorbells " 关闭错误信息响铃
set novisualbell " 关闭使用可视响铃代替呼叫
set t_vb= " 置空错误铃声的终端代码
set matchtime=2 " 短暂跳转到匹配括号的时间
set magic " 设置魔术
set smartindent " 开启新行时使用智能自动缩进
set backspace=indent,eol,start " 不设定在插入状态无法用退格键和 Delete 键删除回车符
set cmdheight=1 " 设定命令行的行数为 1
set laststatus=2 " 显示状态栏 (默认值为 1, 无法显示状态栏)
set statusline=\ %<%F[%1*%M%*%n%R%H]%=\ %y\ %0(%{&fileformat}\ %{&encoding}\ Ln\ %l,\ Col\ %c/%L%) " 设置在状态行显示的信息
set foldenable " 开始折叠
set foldmethod=syntax " 设置语法折叠
set foldcolumn=0 " 设置折叠区域的宽度
setlocal foldlevel=1 " 设置折叠层数为 1
nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR> " 用空格键来开关折叠
```