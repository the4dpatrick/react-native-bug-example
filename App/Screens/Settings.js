var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

class Settings extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Settings
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

module.exports = Settings;