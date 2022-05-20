#include <stdio.h>

#define MAX_STRING_SIZE 50

struct person {
    char name[MAX_STRING_SIZE];
    char email[MAX_STRING_SIZE];
    char job[MAX_STRING_SIZE];
    int age;
};

int main(int argc, char **argv) {
    struct person *project = malloc(sizeof(struct person));
    strcpy(project->name, "Project_TL");
    strcpy(project->job, "Student");
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