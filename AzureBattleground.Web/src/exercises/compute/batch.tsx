import React from "react";
import BatchExercises from '../../../db/exercises/compute/batch';
import ExercisesBase from "../exercisesBase";

export default class Batch extends React.Component<{}, {}> {
    render() {
        return <ExercisesBase 
                    exercises={BatchExercises.exercises} 
                    routeBase={'compute/batch'}
                    title='Azure Batch' 
                    subheader='Learn about different features of Azure Batch in Azure' 
                    icon='desktop' />
    }
}