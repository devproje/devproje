#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_STRING_SIZE 50

struct person {
    char name[MAX_STRING_SIZE];
    char email[MAX_STRING_SIZE];
    char job[MAX_STRING_SIZE];
    int age;
};

int main(int argc, char **argv) {
    struct person *project = malloc(sizeof(struct person));
    strcpy(project->name, "Project_IO");
    strcpy(project->job, "Student, Backend Developer");
    strcpy(project->email, "me@projecttl.net");
    project->age = 18;
  
    puts(strcat(project->name, "'s Profile:"));
    printf("\tname:  %s\n", project->name);
    printf("\tage:   %d\n", project->age);
    printf("\tjob:   %s\n", project->job);
    printf("\temail: %s\n", project->email);
    
    free(project);

    return 0;
}
