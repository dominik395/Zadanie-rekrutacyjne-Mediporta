import MainTagsList from '../main/TagsList/MainTagsList'
import Progres from '../main/TagsList/Progres'
import AlertView from '../main/TagsList/AlertView'
import TagsList from '../main/TagsList/TagsList'
import React from 'react'

export default {
    title: 'main/MainTagsList',
    component: MainTagsList,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        dataTags: { type: 'boolean', default: false }
    },
}

const Template = ({ dataTags }) => {
    if (dataTags.data && dataTags.data.error_message) {
        return <AlertView error_message={dataTags.data.error_message} />;
    } else if (dataTags === false) {
        return <Progres />
    } else {
        return <MainTagsList {...dataTags} />;
    }
};

export const Loading = Template.bind({});
Loading.args = {
    dataTags: false
};


export const ErrorData = Template.bind({});
ErrorData.args = {
    dataTags: { data: {error_message: 'Jest bląd!'} }
}
  
export const CorrectData = Template.bind({});
CorrectData.args = {
    dataTags: {}
}

// CorrectData.args = {
//   dataTags: {
    // list: [
    //     {name: 'name 1', count: 200},
    //     {name: 'name 2', count: 600},
    //     {name: 'name 3', count: 300}
    // ],
//     paginationLength: 5
//   }
// };
