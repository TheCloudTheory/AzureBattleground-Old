import React from "react";
import AciExercises from '../../../db/exercises/compute/aci';
import ExercisesBase from "../exercisesBase";

export default class Aci extends React.Component<{}, {}> {
    render() {
        return <ExercisesBase 
                    exercises={AciExercises.exercises} 
                    title='Azure Containers Instances' 
                    subheader='Learn about different features of Azure Container Instances in Azure' 
                    icon='desktop' />
    }
}