import React from "react";
import VirtualMachinesExercises from '../../../db/exercises/compute/virtualMachines';
import ExercisesBase from "../exercisesBase";

export default class VirtualMachines extends React.Component<{}, {}> {
    render() {
        return <ExercisesBase 
                    exercises={VirtualMachinesExercises.exercises} 
                    title='Virtual Machines' 
                    subheader='Learn about different features of VMs in Azure' 
                    icon='desktop' />
    }
}