import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Controlled/OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

const TemplateOnOff: ComponentStory<typeof OnOff> = (args) =>
    <OnOff {...args}/>

const callback = action('clicked On or Off');

export const ActiveOn = TemplateOnOff.bind({});
ActiveOn.args = {
    value: true,
    onClick: callback
};
export const ActiveOff = TemplateOnOff.bind({});
ActiveOff.args = {
    value: false,
    onClick: callback,
};

export const OnOffChange = () => {
    let [on, setOn] = useState<boolean>(false)
    return <OnOff value={on} onClick={setOn}/>
}
