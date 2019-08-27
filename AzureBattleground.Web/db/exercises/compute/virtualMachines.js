const VirtualMachinesExercises = {
    "exercises": [
        {
            "id": 1,
            "author": "Kamil Mrzygłód",
            "modifiedDate": new Date(2019, 8, 27, 7, 55),
            "level": 1,
            "name": "Creating a Windows virtual machine in Azure",
            "description": "In this exercise you will learn basics of creating Windows virtual machines in Azure using CLI and Azure Resource Manager.",
            "estimatedTimeInMinutes": 60,
            "tags": ["vm", "virtual", "machine", "arm", "cli", "azure", "resource", "manager"]
        },
        {
            "id": 2,
            "author": "Kamil Mrzygłód",
            "modifiedDate": new Date(2019, 8, 27, 7, 58),
            "level": 1,
            "name": "Using RDP to access a Windows VM",
            "description": "Once you have your virtual machine created, you probably want to access it. This exercise will present you how to perform that operation with all possible gotchas.",
            "estimatedTimeInMinutes": 60,
            "tags": ["vm", "virtual", "machine", "rdp", "windows"]
        },
        {
            "id": 3,
            "author": "Kamil Mrzygłód",
            "modifiedDate": new Date(2019, 8, 27, 7, 58),
            "level": 1,
            "name": "Using SSH to access a Linux VM",
            "description": "Linux VMs are a little bit different as they require SSH as a default access method. Here you will learn the differences and the proper configuration.",
            "estimatedTimeInMinutes": 60,
            "tags": ["vm", "virtual", "machine", "ssh", "linux"]
        }
    ]
}

module.exports = VirtualMachinesExercises;