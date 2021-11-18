#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct Person {
  char name[20];
  int age;
};

int main(int argc, char **argv) {
  struct Person *dev = malloc(sizeof(struct Person));
  
  strcpy(dev->name, "DEV_Project");
  dev->age = 17; // 한국 만 나이
  
  printf("Hello! I'm %d years old %s Nice to meet you!\n", dev->age, dev->name);
  free(dev);

  return 0;
}
