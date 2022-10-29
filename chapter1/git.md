# Section1.3: Git 快速入门

## 必要的环境

* github

GitHub是一个面向开源及私有软件项目的托管平台

你必须有一个[github账号](https://github.com/)，才能向这个仓库提交内容，这里有一份[教程](https://cloud.tencent.com/developer/article/1487508)

* git

为了和Github进行交互，团队选择Git作为版本管理工具，你需要进行[Git的基础配置](https://www.cnblogs.com/techflow/p/13703721.html)。

### Install && Configure Git

```sh
# install
sudo apt-get install git

# configure
git config --global user.name "xxx"             # your name
git config --global user.email "xxx@xxx.com"    # your email
```

经过这些配置, 你就可以开始使用 git 了.

在实验中, 你会通过 git clone 命令下载我们提供的框架代码, 里面已经包含一些 git 记录, 因此不需要额外进行初始化. 如果你想在别的实验/项目中使用 git , 你首先需要切换到实验/项目的目录中, 然后输入

```sh
git init
```

进行初始化

### 查看存档信息

使用
```sh
git log
```
查看目前为止所有的存档.

使用

```sh
git status
```
可以得知, 与当前存档相比, 哪些文件发生了变化.

### 存档
你可以像以前一样编写代码. 等到你的开发取得了一些阶段性成果, 你应该马上进行"存档".

首先你需要使用 git status 查看是否有新的文件或已修改的文件未被跟踪, 若有, 则使用 git add 将文件加入跟踪列表, 例如

git add file.c
会将 file.c 加入跟踪列表. 如果需要一次添加所有未被跟踪的文件, 你可以使用

git add -A
但这样可能会跟踪了一些不必要的文件, 例如编译产生的 .o 文件, 和最后产生的可执行文件. 事实上, 我们只需要跟踪代码源文件即可. 为了让 git 在添加跟踪文件之前作筛选, 你可以编辑 .gitignore 文件(你可以使用 ls -a 命令看到它), 在里面给出需要被 git 忽略的文件和文件类型.

把新文件加入跟踪列表后, 使用 git status 再次确认. 确认无误后就可以存档了, 使用
```sh
git commit -m "your commit message"

# 一种推荐的提交信息格式
git commit -m "[file_path]: your changes"
```
你可以使用 git log 查看存档记录, 你应该能看到刚才编辑的注释.

### 读档

首先使用 git log 来查看已有的存档, 并决定你需要回到哪个过去. 每一份存档都有一个hash code, 例如 b87c512d10348fd8f1e32ddea8ec95f87215aaa5 , 你需要通过hash code来告诉 git 你希望读哪一个档. 使用以下命令进行读档:
```sh
git checkout b87c
# or
git reset --hard b87c # 慎用
```
其中 b87c 是上文hash code的前缀: 你不需要输入整个hash code. 这时你再看看你的代码, 你已经成功地回到了过去!

但事实上, 在使用 git reset 的hard模式之前, 你需要再三确认选择的存档是不是你的真正目标. 如果你读入了一个较早的存档, 那么比这个存档新的所有记录都将被删除! 这意为着你不能随便回到"将来"了.

### 第三视点
当然还是有办法来避免上文提到的副作用的, 这就是 git 的分支功能. 使用命令
```sh
git branch
```
查看所有分支. 其中 master 是主分支, 使用 git init 初始化之后会自动建立主分支.

读档的时候使用以下命令
```sh
git checkout b87c
```
而不是 git reset . 这时你将处于一个虚构的分支中, 你可以

查看 b87c 存档的内容
使用以下命令切换到其它分支
```sh
git checkout 分支名
```
对代码的内容进行修改, 但你不能使用 git commit 进行存档, 你需要使用
```sh
git checkout -B 分支名
```
把修改结果保存到一个新的分支中, 如果分支已存在, 其内容将会被覆盖
不同的分支之间不会相互干扰, 这也给项目的分布式开发带来了便利. 有了分支功能, 你就可以像第三视点那样在一个世界的不同时间(一个分支的多个存档), 或者是多个平行世界(多个分支)之间来回穿梭了.

### 更多功能
以上介绍的是 git 的一些基本功能, git 还提供很多强大的功能, 例如使用 git diff 比较同一个文件在不同版本中的区别, 使用 git bisect 进行二分搜索来寻找一个bug在哪次提交中被引入...

其它功能的使用请参考 git help , man git , 或者在网上搜索相关资料.

## Git Demo

举几个常见的场景

### 从Github上下载代码

* 本地没有仓库

```sh
git clone https://github.com/nArrow4/LangYa-Tutorials.git
cd LangYa-Tutorials
```

* 本地已新建仓库

```sh
cd LangYa-Tutorials
git init
git remote add origin https://github.com/nArrow4/LangYa-Tutorials.git
git pull origin main
```

### 将代码提交到Github

* 极简版本

```sh
git add .
git commit -m "commit message"
git push origin main
```

* 利用好分支

```sh
git checkout -b fix-bug
# 在这里修改代码
git add .
git commit -m "[file path]: message"
git checkout main
git merge fix-bug
git push origin main:main
```

### 从Github拉取代码

```sh
git pull origin main
# 如果有冲突，自行解决然后重新pull，或者
# 注意这种方法会覆盖本地修改
git pull origin main --force
```