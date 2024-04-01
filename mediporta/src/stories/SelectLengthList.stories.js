import SelectLengthList from "../main/TagsList/SelectLengthList";

export default {
    title: 'main/SelectLengthList',
    component: SelectLengthList,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: { maxLengthList: { action: 'zmienione dane na' }}
}

const Template = (args) => <SelectLengthList {...args} />

export const Baisc = Template.bind({})
Baisc.args = {
    options: [5, 10, 20, 30]
}

export const DifrentRowsPerPage = Template.bind({})
DifrentRowsPerPage.args = {
    options: [1, 2, 3, 4]
}
