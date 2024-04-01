import Tags from "../main/TagsList/Tags/Tags";

export default {
    title: 'main/tags/Tags',
    component: Tags,
    parameters: {
        layout: 'fullscreen'
    },
    argType: {
        page: {action: 'zmiana strony na:'},
        rowsPerPage: {action: 'zmiana kolumn na stronie:'},
    }
}

const Template = args => <Tags {...args} />

export const Basic = Template.bind({})
Basic.args = {
    tagsList: [
        {name: 'JavaScript', count: 200},
        {name: 'Python', count: 600},
        {name: 'Java', count: 300}
    ],
    rowsPerPage: 3,
    page: 0
}

export const SecondPage = Template.bind({})
SecondPage.args = {
    tagsList: [
        {name: 'C++', count: 200},
        {name: 'Java', count: 600},
        {name: 'C#', count: 300},
        {name: 'Python', count: 400},
        {name: 'JavaScript', count: 1000}
    ],
    rowsPerPage: 3,
    page: 1,
}