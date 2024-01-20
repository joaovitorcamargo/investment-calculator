import type { Meta, StoryObj } from '@storybook/vue3'

import HeaderComponent from './HeaderComponent.vue'

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof HeaderComponent>

export const Primary: Story = {
  render: (args) => ({
    components: { HeaderComponent },
    setup() {
      return { args }
    },
    template: '<HeaderComponent />'
  }),
  args: {
    class: 'w-full'
  }
}
