import type { Meta, StoryObj } from '@storybook/vue3'

import BannerComponent from './BannerComponent.vue'

const meta: Meta<typeof BannerComponent> = {
  component: BannerComponent
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof BannerComponent>

export const Primary: Story = {
  render: (args) => ({
    components: { BannerComponent },
    setup() {
      return { args }
    },
    template: '<BannerComponent />'
  }),
  args: {
    class: 'w-full'
  }
}
