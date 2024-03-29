import React from "react";
import AppServicesExercises from '../../../db/exercises/compute/appServices';
import ExercisesBase from "../exercisesBase";

export default class AppServices extends React.Component<{}, {}> {
    render() {
        return <ExercisesBase 
                    exercises={AppServicesExercises.exercises} 
                    routeBase={'compute/app-services'}
                    title='App Services' 
                    subheader='Learn about different features of App Services in Azure' 
                    icon='desktop' />
    }
}