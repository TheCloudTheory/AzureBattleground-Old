import React from "react";
import ServiceFabricExercises from '../../../db/exercises/compute/serviceFabric';
import ExercisesBase from "../exercisesBase";

export default class ServiceFabric extends React.Component<{}, {}> {
    render() {
        return <ExercisesBase 
                    exercises={ServiceFabricExercises.exercises} 
                    routeBase={'compute/service-fabric'}
                    title='Service Fabric' 
                    subheader='Learn about different features of Service Fabric in Azure' 
                    icon='desktop' />
    }
}