import PaginationList from '../main/TagsList/PaginationList'

export default {
    title: 'main/PaginationList',
    component: PaginationList,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: { changePage: { action: 'zmiana strony na'} }
}

const Template = args => <PaginationList {...args} />

export const Basic = Template.bind({})
Basic.args = {
    page: 0,
    paginationLength: 10,
}

export const LastPage = Template.bind({})
LastPage.args = {
    page: 9,
    paginationLength: 10,
}