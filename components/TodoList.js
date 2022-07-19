/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import monStyle from './style';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        list: [],
        inputTxt: '',
    }
    title = 'Ma TodoList';
    insertList() {
        if (this.state.list.length === 0) {
            let listTmp = this.state.list;
            listTmp.push({ key: this.state.inputTxt });
            this.setState({ list: listTmp });
        } else {
            this.state.list.map((value) => {
                if (this.state.inputTxt !== value.key) {
                    let listTmp = this.state.list;
                    listTmp.push({ key: this.state.inputTxt });
                    this.setState({ list: listTmp });
                }
            });
        }
        this.setState({ inputTxt: '' });
    }
    deleteItem(index) {
        let listTmp = this.state.list;
        listTmp.splice(index, 1);
        this.setState({ list: listTmp });
    }
    render() {
        return (
            <View>
                <Text style={monStyle.title}>{this.title}</Text>
                <TextInput
                    label="..."
                    onChangeText={(text) => { this.setState({ inputTxt: text }) }}
                    value={this.state.inputTxt}
                ></TextInput>

                <Button
                    onPress={() => {
                        this.state.inputTxt.length !== 0 && this.insertList();// BIG UP Williams !!! OUH OUH OUH !!!
                    }}
                >Ajouter un Article</Button>
                <ScrollView>
                    <FlatList
                        data={this.state.list}
                        renderItem={({ item, index }) =>
                            <View style={monStyle.txt}>
                                <Text>
                                    {item.key}
                                </Text>
                                <Button
                                    onPress={() => { this.deleteItem(index); }}
                                >X</Button>
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        )
    }


}

export default TodoList;