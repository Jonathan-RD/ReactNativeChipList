import React, { Component } from "react";

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
    

}
  }
  pillButtonItem(item, index){
    return (

      <View style={{
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: colors.gatherGreen,
        paddingHorizontal: 20,
        backgroundColor: this.state.selected[this.state.pageIndex][index]? colors.gatherGreen : "#fff",
        paddingVertical: 10 }}>
        <Text style={{ color: this.state.selected[this.state.pageIndex][index]? "#fff": colors.gatherGray }}>{item.substring(0, 15)}</Text>
      </View>

    )
  }
}


  render(){
    
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ paddingHorizontal: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.pageIndex == 0 ?this.setState({ screen: "BIO", pageIndex: 0 }): this.setState({ pageIndex: this.state.pageIndex - 1 })} style={{ paddingTop: 50 }}>
              <Ionicons name="ios-arrow-back" size={30}/>
            </TouchableOpacity>

            <View style={{ flex: 1,alignSelf: 'flex-end' }}>
              <TouchableOpacity style={{ marginRight: 30, alignSelf: 'flex-end' }} onPress={this.state.pageIndex == 4 ? () => this.save():() => this.next()}>
                <Text style={{ textAlign: 'right', fontSize: 16, color: colors.gatherGray,fontWeight: "900", alignSelf: 'flex-end' }}>{this.state.pageIndex == 4 ? "Finish": "Next"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ textAlign: "left", fontSize: 30, color: colors.gatherGray, fontWeight: "900", paddingTop: 35 }}>{this.state.heading[this.state.pageIndex]}</Text>

          <FlatList
            data={this.getDesiredList()}
            style={{ marginTop: 50 }}
            contentContainerStyle ={{ flexWrap: "wrap", flexDirection: "row" }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {

              return (
                <TouchableOpacity
                  onPress={() => {

                    var new_select = [...this.state.selected];
                    var arr = new_select[this.state.pageIndex];
                    var new_sub = arr;
                    new_sub[item.index] = !new_sub[item.index];
                    new_select[this.state.pageIndex] = new_sub
                    this.setState({ selected: new_select });
                  }}>
                  {this.pillButtonItem(item.item, item.index)}
                </TouchableOpacity> )
            }}>
          </FlatList>
        </ScrollView>
      </SafeAreaView>
    )
  }


}

export default Onboarding;