# src file
SOURCES := hello.cpp main.cpp
OBJ := hello.o main.o
TARGET := main

# compiler
CC := g++
INCLUDE := -I .

$(TARGET): $(OBJ)
	$(CC) $(OBJ) -o $(TARGET)

hello.o: hello.cpp hello.h
	$(CC) -c hello.cpp -o hello.o

main.o: main.cpp hello.h
	$(CC) -c main.cpp -o main.o

.PHONY: all
all: $(TARGET)

.PHONY : clean
clean:
	rm $(OBJ) $(TARGET)