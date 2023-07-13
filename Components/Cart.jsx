import React, { useDeferredValue } from 'react'
import { View, Text,Image ,Button,FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from './action/Actions';

const Cart = () => {
  
   const items = useSelector(state=>state);  

   const dispatch = useDispatch()


   const removeItem = index =>{
      dispatch(removeItemFromCart(index))
      console.log(index)
   }
  
   console.log(items)
  
    return (
    <View 
      style={{
     justifyContent:"center",
     alignItems:"center",
     paddingTop:30
 }}
>
      
    




<FlatList
    style={{
       
        backgroundColor:"white",
      height:"100%",
     paddingTop:15,
     paddingBottom:5,
    }}
     
   


    data={items}




    renderItem={({index,item}) => (


      <View 
      style={{
        width:"95%",
        height:420,
        backgroundColor:"white",
        margin:10,
        // justifyContent:"center",
        alignItems:"flex-start",
        padding:15,
        marginTop:5,
        marginBottom:5,
        shadowOffset:{height:5,width:5},
        shadowColor:"black",
        shadowOpacity:1,
        elevation:105,
        borderRadius:10,
      }}
      
      >
        <Image

         source={{uri:`${item.images}`}}
        
        style=
        {{width:'100%',height:210,
        backgroundColor:"#fff",
      
         resizeMode:"cover",
       
      
      }}
      />

      <Text 
      
      style={{
        fontWeight:900,
        marginTop:20,
      }}
      
      
      >{item.brand}    {item.title}    {item.category}</Text>
         
      
         <Text 
      
      style={{
        fontWeight:900,
        marginTop:20,
      }}
      
      
      >{item.description}</Text>
      
      
      
       <View
         style={{
          flexDirection:"row",
          marginTop:20,
          width:"100%",
          justifyContent:"space-evenly"
         }}
       
       
       >

         


         <Button
             title='Buy Now'
              
             color={"green"}

             style={{
              width:80,
              
            }}
          
          />
          
          <Button
             title='Remove Item'


             onPress={()=>{removeItem(index)}}

             color={"red"}
          
            style={{
              width:80,
            }}
          />
         
           
       </View>
      
     
     
     
     
     
     
     
     
     
     
     
     
     
      </View>

      


    


    )}
    keyExtractor={item => item.id}
  />

    
    
    
    </View>
  )
}

export default Cart