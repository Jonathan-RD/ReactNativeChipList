import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

class ChipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: this.props.color ? this.props.color : '#fff',
      borderColor: this.props.borderColor ? this.props.borderColor : '#000',
      size: sizes[this.props.size - 1],
      data: this.props.data,
    };
  }

  chipListItem(item, index) {
    const children = this.props.children;
    return (
      <View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderColor: this.state.borderColor,
            borderRadius: 40,
            backgroundColor: this.state.backgroundColor,
          },
          this.state.size,
        ]}>
        {children}
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{paddingHorizontal: 15}}>
          <FlatList
            data={this.state.data}
            contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={(item, index) => {
              return (
                <TouchableOpacity onPress={() => console.log('Pressed')}>
                  {this.pillButtonItem(item.item, index)}
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const sizes = [
  {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
  },

  {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderWidth: 4,
  },
];

ChipList.propTypes = {
  data: PropTypes.array.isRequired,
  hildren: PropTypes.element,
  size: PropTypes.number.isRequired,
};

export default ChipList;
