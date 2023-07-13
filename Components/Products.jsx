import { View, Text ,FlatList,Image,TouchableOpacity, SectionList,Button} from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from './action/Actions'
// import Header from './Header'

const Products = ({navigation}) => {


     const data = [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": 
              "https://i.dummyjson.com/data/products/1/1.jpg",
              
          },
       {

      "id": 2,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
      "images": "https://i.dummyjson.com/data/products/6/1.png",
      
    },
    {
        "id": 3,
        "title": "perfume Oil",
        "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        "price": 13,
        "discountPercentage": 8.4,
        "rating": 4.26,
        "stock": 65,
        "brand": "Impression of Acqua Di Gio",
        "category": "fragrances",
        "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
        "images": 
          "https://i.dummyjson.com/data/products/11/1.jpg",
     },
     {
        "id": 4,
        "title": "Brown Perfume",
        "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        "price": 40,
        "discountPercentage": 15.66,
        "rating": 4,
        "stock": 52,
        "brand": "Royal_Mirage",
        "category": "fragrances",
        "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
        "images": 
          "https://i.dummyjson.com/data/products/12/1.jpg",
      },
{
      "id": 5,
      "title": "Skin Beauty Serum.",
      "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      "price": 46,
      "discountPercentage": 10.68,
      "rating": 4.42,
      "stock": 54,
      "brand": "ROREC White Rice",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
      "images": 
        "https://i.dummyjson.com/data/products/19/1.jpg",
        
      
    },

    {
      "id": 6,
      "title": "- Daal Masoor 500 grams",
      "description": "Fine quality Branded Product Keep in a cool and dry place",
      "price": 20,
      "discountPercentage": 4.81,
      "rating": 4.44,
      "stock": 133,
      "brand": "Saaf & Khaas",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
      "images": 
        "https://i.dummyjson.com/data/products/21/1.png",
        
      
    },

    {
      "id": 7,
      "title": "Orange Essence Food Flavou",
      "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      "price": 14,
      "discountPercentage": 8.04,
      "rating": 4.85,
      "stock": 26,
      "brand": "Baking Food Items",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
      "images": 
        "https://i.dummyjson.com/data/products/23/1.jpg",
        
    },
    {
      "id": 8,
      "title": "Key Holder",
      "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      "price": 30,
      "discountPercentage": 2.92,
      "rating": 4.92,
      "stock": 54,
      "brand": "Golden",
      "category": "home-decoration",
      "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
      "images": 
        "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
      
    },
    {
      "id": 9,
      "title": "3D Embellishment Art Lamp",
      "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      "price": 20,
      "discountPercentage": 16.49,
      "rating": 4.82,
      "stock": 54,
      "brand": "LED Lights",
      "category": "home-decoration",
      "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
      "images": 
        "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
      
    },
    {
      "id": 10,
      "title": "Gulab Powder 50 Gram",
      "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      "price": 70,
      "discountPercentage": 13.58,
      "rating": 4.87,
      "stock": 47,
      "brand": "Dry Rose",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
      "images": 
        "https://i.dummyjson.com/data/products/25/1.png",
       
    },
]

const dispatch = useDispatch()



const addItem= item => {
  dispatch(addItemToCart(item))
}

let addedItems=[]; 

const items = useSelector (state=>state);

addedItems=items;








  return (


    




  
      <View 
//   style={{
//   // height:520,
//  width:"100%",
//  padding:10, 
//   }} 
 >

   <View
   
    style={{
      width:"100%",
      height:50,
      backgroundColor:"grey",
      alignItems:"flex-end",
      justifyContent:"center",
      paddingRight:20
      }}
   
   >
       <TouchableOpacity
          style={{
            width:100,
            height:40,
            backgroundColor:"yellowgreen",
            borderRadius:20,
            // justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            gap:10
          }}


          onPress={()=>{navigation.navigate('Cart')}}





       >

       <Image 
         
         source={require("../carticon.png")}
       
         style={{
          height:20,width:20,marginLeft:20
         }}
       
       />
       
       <Text>{addedItems.length}</Text>



       </TouchableOpacity>






   </View>







{/* <Header/> */}
    <FlatList
    style={{
       
        backgroundColor:"white",
      height:"100%",
     paddingTop:15,
     paddingBottom:5,
    }}
     
   


    data={data}




    renderItem={({item}) => (


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
             title='Add To Cart'

             onPress={()=>{
              addItem (item);
             } }
          
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

export default Products