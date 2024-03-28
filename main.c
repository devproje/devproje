#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_STRING_SIZE 50

typedef struct {
        char name[MAX_STRING_SIZE];
        char email[MAX_STRING_SIZE];
        char job[MAX_STRING_SIZE];
        int age;
} Person;

int main(int argc, char **argv)
{
        Person *project = malloc(sizeof(Person));
        strcpy(project->name, "Project_IO");
        strcpy(project->job, "Student, Backend Developer");
        strcpy(project->email, "me@projecttl.net");
        project->age = 20;

        printf("%s's Profile\n", project->name);
        printf("\tname:  %s\n", project->name);
        printf("\tage:   %d\n", project->age);
        printf("\tjob:   %s\n", project->job);
        printf("\temail: %s\n", project->email);
    
        free(project);

        return 0;
}
