#include <stdio.h>

struct person {
    char *name;
    int age;
};

int main(int argc, char **argv) {
    struct person *project = malloc(sizeof(struct person));
    project->name = malloc(sizeof(char) * 20);
  
    strcpy(project->name, "Project_TL");
    project->age = 18;
  
    printf("Hello! I'm %s, I'm %d years old. Nice to meet you!\n", project->name, project->age);
    
    free(project);

    return 0;
}