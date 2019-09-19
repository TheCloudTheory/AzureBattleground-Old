import React from "react";
import AzureFunctionsExercises from '../../../db/exercises/compute/azureFunctions';
import ExercisesBase from "../exercisesBase";

export default class AzureFunctions extends React.Component<{}, {}> {
    render() {
        return <ExercisesBase 
                    exercises={AzureFunctionsExercises.exercises} 
                    routeBase={'compute/azure-functions'}
                    title='Azure Functions' 
                    subheader='Learn about different features of Azure Functions in Azure' 
                    icon='desktop' />
    }
}