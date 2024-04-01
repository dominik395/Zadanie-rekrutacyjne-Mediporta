import TagsTableHead from "../main/TagsList/Tags/TagsTableHead";

export default {
    title: 'main/tags/TagsTableHead',
    component: TagsTableHead,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        onRequestSort: { action: 'zmiana w sortowaniu' }
    }
}

const Template = (args) => <TagsTableHead {...args} />

export const BasicNoSort = Template.bind({})
BasicNoSort.args = {
    order: '',
    orderBy: '',
}

export const TagsAsc = Template.bind({})
TagsAsc.args = {
    order: 'asc',
    orderBy: 'tagi'
}

export const TagsDsc = Template.bind({})
TagsDsc.args = {
    order: 'dsc',
    orderBy: 'tagi'
}

export const CountAsc = Template.bind({})
CountAsc.args = {
    order: 'asc',
    orderBy: 'powiazanePosty'
}

export const CountDsc = Template.bind({})
CountDsc.args = {
    order: 'dsc',
    orderBy: 'powiazanePosty'
}