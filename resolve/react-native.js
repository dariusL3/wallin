import * as StandardModule from 'react-native';

// add some stub to use deprecated props
delete StandardModule['ViewPropTypes'];
delete StandardModule['ColorPropType'];
delete StandardModule['EdgeInsetsPropType'];
delete StandardModule['PointPropType'];

module.exports = {
    ...StandardModule,
    get ViewPropTypes(){
        return require('deprecated-react-native-prop-types/DeprecatedViewPropTypes');
    },
    get ColorPropType(){
        return require('deprecated-react-native-prop-types/DeprecatedColorPropType');
    },
    get EdgeInsetsPropType(){
        return require('deprecated-react-native-prop-types/DeprecatedEdgeInsetsPropType')
    },
    get PointPropType(){
        return require('deprecated-react-native-prop-types/DeprecatedPointPropType');
    }
}
