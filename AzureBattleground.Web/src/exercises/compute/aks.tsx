import React from "react";
import AksExercises from '../../../db/exercises/compute/aks';
import ExercisesBase from "../exercisesBase";

export default class Aks extends React.Component<{}, {}> {
    render() {
        return <ExercisesBase 
                    exercises={AksExercises.exercises} 
                    title='Azure Kubernetes Service' 
                    subheader='Learn about different features of Azure Kubernetes Service in Azure' 
                    icon='desktop' />
    }
}