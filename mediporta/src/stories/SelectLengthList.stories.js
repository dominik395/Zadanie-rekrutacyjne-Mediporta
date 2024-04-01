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

export const WrongData = Template.bind({})
WrongData.args ={
    options: ['one', 'two', 'three']
}

export const EmptyData = Template.bind({})
EmptyData.args = {
    options: []
}

export const NumberInQuote = Template.bind({})
NumberInQuote.args = {
    options: [5, '10', 20, 30]
}

export const DifrentLengthSelect = Template.bind({})
DifrentLengthSelect.args = {
    options: [1, 2, 20, 3, 5, 12, 33, 24]
}
