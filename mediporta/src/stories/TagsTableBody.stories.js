import TagsTableBody from "../main/TagsList/Tags/TagsTableBody";

export default {
    title: 'main/tags/TagsTableBody',
    component: TagsTableBody,
    parameters: {
        layout: 'fullscreen'
    }
}

const Template = (args) => <TagsTableBody {...args} />

export const Basic = Template.bind({})
Basic.args = {
    page: 0,
    rowsPerPage: 3,
    tagsList: [
        {name: 'C#', count: 200},
        {name: '.net', count: 600},
        {name: 'Ruby', count: 300}
    ]
}

export const SecondPage = Template.bind({})
SecondPage.args = {
    page: 1,
    rowsPerPage: 3,
    tagsList: [
        {name: 'C#', count: 200},
        {name: '.net', count: 600},
        {name: 'Ruby', count: 300},
        {name: 'Python', count: 400},
        {name: 'C++', count: 100},
        {name: 'JavaScript', count: 1000}
    ]
}

export const EmptyOneRow = Template.bind({})
EmptyOneRow.args = {
    page: 1,
    rowsPerPage: 3,
    tagsList: [
        {name: 'Python', count: 300},
        {name: 'Ruby', count: 100},
        {name: '.net', count: 600},
        {name: 'C++', count: 100},
        {name: 'JavaScript', count: 1000}
    ]
}
