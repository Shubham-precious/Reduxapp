import { View, Text } from 'react-native'
import React from 'react'
import Main from './Components/Main'
import { Provider } from 'react-redux'
import { mystore } from './Components/store/Store'

const App = () => {
  return (


     <Provider store={mystore}>
            <Main/>
     </Provider>




    // <View>
    //   <Main/>
    //   {/* <Text>Hello</Text> */}
    // </View>
  )
}

export default App