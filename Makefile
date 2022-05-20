cc = gcc
obj = main.o
target = profile

$(target): $(obj)
	$(cc) -o $(target) $(obj)

main.o: main.c
	$(cc) -c -o main.o main.c

clean:
	rm $(obj) $(target)