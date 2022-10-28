cmake_minimum_required(VERSION 3.16.3)
project(hello)

set(CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}; ${CMAKE_MODULE_PATH}")
find_package(HELLO)

include_directories(.)
include_directories(${HELLO_INCLUDE_DIRS})
add_executable(main
    main.cpp)
target_link_libraries(main ${HELLO_LIBRARIES})

# function(build_src name)
#     add_executable(${name} ${name}.cpp)
# endfunction(build_src)

# build_src(test1)
# build_src(test2)
