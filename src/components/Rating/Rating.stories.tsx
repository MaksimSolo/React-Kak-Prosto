import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating} from "./Rating";

export default {
    title: 'Controlled/Rating',
    component: Rating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Rating>;

const TemplateRating: ComponentStory<typeof Rating> = (args) =>
    <Rating {...args}/>

export const EmptyRating = TemplateRating.bind({});
EmptyRating.args = {
    value: 0,
    onClick: (x: number) => {
        return x
    },
};
export const Rating1 = TemplateRating.bind({});
Rating1.args = {
    value: 1,
    onClick: (x: number) => {
        return x
    },
};

export const Rating2 = TemplateRating.bind({});
Rating2.args = {
    value: 2,
    onClick: (x: number) => {
        return x
    },
};
export const Rating3 = TemplateRating.bind({});
Rating3.args = {
    value: 3,
    onClick: (x: number) => {
        return x
    },
};
export const Rating4 = TemplateRating.bind({});
Rating4.args = {
    value: 4,
    onClick: (x: number) => {
        return x
    },
};
export const Rating5 = TemplateRating.bind({});
Rating5.args = {
    value: 5,
    onClick: (x: number) => {
        return x
    },
};
export const RatingChange = () => {
    let [rateValue, setRateValue] = useState<number>(0)
    return <Rating value={rateValue} onClick={setRateValue}/>
}
