import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordeon} from "./Accordeon";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Controlled/Accordeon',
    component: Accordeon,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordeon>;

const TemplateAccordeon: ComponentStory<typeof Accordeon> = (args) =>
    <Accordeon {...args}/>

const callback = action('collapsing change');
const onClickCallback = action('some item was clicked');


export const CollapsedMenu = TemplateAccordeon.bind({});
CollapsedMenu.args = {
    title: 'MAIN MENU',
    collapsed: true,
    items: [],
    onChange: callback,
    onClick: onClickCallback
};
export const NotCollapsedMenu = TemplateAccordeon.bind({});
NotCollapsedMenu.args = {
    title: 'MAIN MENU',
    collapsed: false,
    items: [],
    onChange: callback,
    onClick: onClickCallback,
};

export const AccordeonCollapseChanging = () => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordeon title={'MAIN MENU'} collapsed={collapsed} onChange={setCollapsed}/>
}
