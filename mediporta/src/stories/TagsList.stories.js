import TagsList from "../main/TagsList/TagsList";

export default {
    title: 'main/tags/TagsList',
    component: TagsList,
    parameters: {
        layout: 'fullscreen'
    },
}

const Template = (args) => <TagsList {...args} /> 

export const Basic = Template.bind({})
Basic.args = {
    list: [
        {name: 'C#', count: 200},
        {name: '.net', count: 600},
        {name: 'Ruby', count: 300}
    ],
    paginationLength: 3,
}

export const ToManyPage = Template.bind({})
ToManyPage.args = {
    list: [
        {name: 'C#', count: 200},
        {name: '.net', count: 600},
        {name: 'Ruby', count: 300}
    ],
    paginationLength: 10
}