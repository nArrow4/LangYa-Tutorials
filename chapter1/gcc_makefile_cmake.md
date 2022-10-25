# Section1.2: GCC && Makefile && CMake

## C/C++代码是怎么在系统上运行的

```mermaid {align="center"}
graph LR
B1(GCC)
B2(Makefile)
B3(CMake)
B1-->C1(预编译)
B1-->C2(编译)
B1-->C3(汇编)
B1-->C4(链接)
B2-->D1(构建工程)
B3-->E1(生成Makefile)
```

## GCC编译代码

用一个简单的C++程序来举例

```cpp
// hello.cpp
#include "hello.h"

int print() {
    std::cout << "hello world." << std::endl;
}

// hello.h
#include <iostream>
void print();

// hello.cpp
#include "hello.h"

int main() {
    // print hello world
    print();
}
```

### 预编译

这一部分主要做两件事情：
1. 把所有的头文件和宏定义展开
2. 把代码中的所有注释去掉

```sh
g++ --E main.cpp -o main.i
```

查看main.i文件的末尾

```cpp
...

# 3 "hello.h"
void print();
# 2 "main.cpp" 2

int main() {

 print();
}

```

### 编译

将预编译代码编译成汇编代码
```sh
g++ -S main.i -o main.s
```

```cpp
main:
    ...
```

### 汇编

编译汇编代码得到重定向代码
```sh
g++ -c main.s -o main.o
```

### 链接

链接所有重定向代码和库文件得到可执行文件
```sh
g++ main -o main.o
```

## Makefile构建工程

make命令执行时，需要一个makefile文件，以告诉make命令需要怎么样的去编译和链接程序。

首先，用一个示例来说明makefile的书写规则，以便给大家一个感性认识。工程有两个c文件，和一个头文件，我们要写一个makefile来告诉make命令如何编译和链接这几个文件。我们的规则是：

1. 如果这个工程没有编译过，那么我们的所有c文件都要编译并被链接。
2. 如果这个工程的某几个c文件被修改，那么我们只编译被修改的c文件，并链接目标程序。
3. 如果这个工程的头文件被改变了，那么我们需要编译引用了这几个头文件的c文件，并链接目标程序。

### Makefile的规则

Makefile的规则是：当依赖项中如果有一个及以上的文件比目标文件要新的话，就会重新执行指令构建目标文件。

```makefile
目标文件: 依赖项
    生成目标文件的指令
```

## CMake简化Makefile

### hello world sample

```cmake
# CMakeLists.txt
cmake_minimum_required(VERSION 3.16.3)
project(hello)

include_directories(.)
add_executable(main 
    hello.cpp
    main.cpp)
```

### 链接开源库

```cmake
# CMakeLists.txt
cmake_minimum_required(VERSION 3.16.3)
project(opencv_demo)

find_package(OpenCV REQUIRED)

include_directories(.)
include_directories(${OpenCV_INCLUDE_DIRS})

add_executable(main 
    main.cpp)

target_link_libraries(main
    ${OpenCV_LIBRARIES})
```


### functions

```cmake
functions(function_name args1 args2 ...)
    message(${args1} ${args2} ...)
endfunctions(function_name)
```