cmake_minimum_required(VERSION 3.16.3)
project(hello)

set(CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}; ${CMAKE_MODULE_PATH}")
find_package(Hello)

include_directories(.)
include_directories(${HELLO_INCLUDE_DIRS})
add_executable(main
    main.cpp)
target_link_libraries(main ${HELLO_LIBRARIES})
