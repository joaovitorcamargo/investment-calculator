import type { Meta, StoryObj } from '@storybook/vue3'

import SliderInputComponent from './SliderInputComponent.vue'

const meta: Meta<typeof SliderInputComponent> = {
  component: SliderInputComponent
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof SliderInputComponent>

export const Primary: Story = {
  render: (args) => ({
    components: { SliderInputComponent },
    setup() {
      return { args }
    },
    template: '<SliderInputComponent v-bind="args" value="12" min="12" max="120" />'
  }),
  args: {
    class: 'w-full'
  }
}
