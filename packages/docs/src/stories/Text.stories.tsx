import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

// global
export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, numquam? Ratione soluta quo similique cupiditate ex reprehenderit adipisci, voluptatum amet doloribus aperiam magni culpa quis eveniet est eligendi consequatur impedit!',
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    },
}
