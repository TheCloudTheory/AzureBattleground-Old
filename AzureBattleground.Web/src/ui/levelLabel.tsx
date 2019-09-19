import React from "react";
import { Label } from "semantic-ui-react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";

export default class LevelLabel extends React.Component<LevelLabelProps> {
    constructor(props) {
        super(props);
    }

    render() {
        let label: LabelProps = {
            text: '',
            color: 'grey'
        };
        
        switch (this.props.level) {
            case 1:
                label.text = 'Easy';
                label.color = 'green';
                break;
            case 2:
                label.text = 'Medium';
                label.color = 'orange';
                break;
            case 3:
                label.text = 'Hard';
                label.color = 'red';
                break;
            default:
                label.text = 'Not rated';
                label.color = 'grey';
                break;
        }

        return <Label color={label.color} horizontal style={{ float: 'left', textOrientation: 'upright', writingMode: 'vertical-rl' }}>
            {label.text}
        </Label>;
    }
}

type LevelLabelProps = {
    level: Number
}

type LabelProps = {
    text: string,
    color: SemanticCOLORS
}