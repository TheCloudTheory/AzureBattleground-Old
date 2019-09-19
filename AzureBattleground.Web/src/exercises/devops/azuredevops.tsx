import React from "react";
import AzureDevOpsExercises from '../../../db/exercises/devops/azureDevOps';
import ExercisesBase from "../exercisesBase";

export default class AzureDevOps extends React.Component<{}, {}> {
    render() {
        return <ExercisesBase 
                    exercises={AzureDevOpsExercises.exercises} 
                    routeBase='devops/azure-devops'
                    title='Azure DevOps' 
                    subheader='Learn building and delivering software using Azure DevOps' 
                    icon='desktop' />
    }
}