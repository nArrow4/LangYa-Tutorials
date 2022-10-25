cmake_minimum_required(VERSION 3.16.3)
project(hello)

# find_package(...)

include_directories(.)
add_executable(main 
    hello.cpp
    main.cpp)

function(build_src name)
    add_executable(${name} ${name}.cpp)
endfunction(build_src)

build_src(test1)
build_src(test2)

# target_link_libraries(main ...)