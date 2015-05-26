var React = require('react-native');
var SideMenu = require('react-native-side-menu');
var Menu = require('../Components/Menu');

var {
  StyleSheet,
  View,
  Text
} = React;

class ScreenWithMenu extends React.Component{

  render() {
    var menu = <Menu navigator={this.props.navigator} toggleNavigation={this.props.toggleNavigation} />
    return (
      <SideMenu menu={menu}>
        <View style={styles.container}>
          <Text>
            Hello
          </Text>
        </View>
      </SideMenu>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

module.exports = ScreenWithMenu;