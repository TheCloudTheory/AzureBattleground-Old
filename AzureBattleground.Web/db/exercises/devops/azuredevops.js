const AzureDevopsExercises = {
    "category": "devops",
    "module": "azure-devops",
    "exercises": [
        {
            "id": 1,
            "author": "Kamil Mrzygłód",
            "modifiedDate": new Date(2019, 9, 19, 16, 26),
            "level": 2,
            "name": "Testing .NET application while building a Docker image using Azure DevOps",
            "description": "When building a Docker image, it's very important to run tests during the process, so we can be sure they are run in the environment, in which our application will work. In this exercise, you will learn how to do that correctly using Azure DevOps as your build orchestrator.",
            "estimatedTimeInMinutes": 30,
            "tags": ["azure", "devops", "ci", "docker", "dotnet", "net", "building", "testing", "image"],
            "path": "devops/azureDevOps/1.md"
        },
        {
            "id": 2,
            "author": "Kamil Mrzygłód",
            "modifiedDate": new Date(2019, 9, 26, 16, 22),
            "level": 1,
            "name": "Using kubectl inside a Bash script when connecting to Azure Kubernetes Service",
            "description": "Quite often you pipeline scripts, which have to perform multiple tasks at once. This includes things like connecting to a repository, working on a cluster or gathering various application-related data. This exercise will show you how you can implement a Bash script, which will use kubectl to perform maintenance on a cluster.",
            "estimatedTimeInMinutes": 20,
            "tags": ["azure", "devops", "ci", "k8s", "bash", "kubernetes", "cli"],
            "path": "devops/azureDevOps/2.md"
        }
    ]
}

module.exports = AzureDevopsExercises;