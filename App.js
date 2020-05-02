/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import CustomButton from "./components/ButtonComponent";


export default App=()=>{

  const [getText,setText] = useState("");
  const [getList,setList] = useState([]);
  const [buttontitle,setbuttontitle] = useState('Add');
  const[itemIndex,setitemIndex] = useState(0);
  


  const addItems=()=>{
    console.log(getText);
    if(buttontitle ==="Add"){
      if(getText==""){
        
      
      }else{
         
        setList([
          ...getList,
          {
            key:Math.random().toString(),
            data:getText,
  
          }
    ]);
    
        setText(''); 
      }
    }
    else if(buttontitle==="update"){
      if(getText==""){
        setbuttontitle("Add")
      }
      else{
        let newList =[...getList]
        newList[itemIndex].data = getText
        setList(newList)
        setText("")
        setbuttontitle("Add")

      }
    }
  
    
  }

  const removeItems=(itemkey)=>{
     var list = getList.filter(item=>item.key!=itemkey);
     setList(list);
    
  }

  const updateItems = (itemkey,itemindex)=>{
    setbuttontitle("update")
    setText(itemkey.data)
    setitemIndex(itemIndex)
  
  }


  return(
    
    <View 
    style = {styles.container}
         >
      <Text style={styles.title}>To do</Text>
      <View style= {styles.inputContainer}>
      <TextInput 
      placeholder = "Enter Item"
      style  ={styles.textInput}
      onChangeText = {text => setText(text)}
      value={getText}
       >
      
      </TextInput>

      <CustomButton
      onPressEvent = {addItems}
      text= {buttontitle}
      color = 'blue'
      textSize ={15}
      textColor = "white"

      />
      
      
      {/* <Button 
      onPress = {addItems}
      title = "Add"></Button>
      */}
      </View>


  <View style = {{fontSize: 26}}>

  <Text>{getText}</Text>
  </View>

  <ScrollView style={styles.scrollview}>

  {getList.map((item,index)=> 
  <TouchableOpacity
  key={item.key}
  activeOpacity ={0.7}
  onPress={()=>updateItems(item,index)}
  >
    

    <View 
    key={item.key}
    style={styles.scrollviewItem}>

   <TouchableOpacity
   
   
   >
    <View style={styles.indexTextView}>
    <Text style={styles.indexText}>{index + 1}</Text>
    </View>
    </TouchableOpacity>

    <Text  style={styles.scrollviewText}>{item.data}</Text>

    <TouchableOpacity 
    onPress={()=>removeItems(item.key)}
    >
    <View style={styles.crossTextView}>
  <Text style={styles.crossText}>X</Text>
    </View>
    </TouchableOpacity>
    
    </View>
  </TouchableOpacity> 
    )}
    </ScrollView>  
     
     </View>
    
  );
  }

  const styles = StyleSheet.create({

    custombuttonView:{
      backgroundColor:'blue',
      padding:10,
      borderRadius:50,
      paddingHorizontal:20,

    },
    custombuttonText:{
     color:'white',
     fontSize:20,

    },

    crossText:{
      fontSize:16,
      color:'white',
      fontWeight:'bold',


    },
    indexText:{
      fontSize:16,
      color:'white',
      fontWeight:'bold',


    },

    crossTextView:{
        backgroundColor:'red',
        color:'white',
        borderRadius:50,
        padding :5,
        width:30,
        justifyContent:'center',
        alignItems:'center',


    },
    indexTextView:{
      backgroundColor:'green',
      color:'white',
      borderRadius:50,
      padding :5,
      width:30,
      justifyContent:'center',
      alignItems:'center',


  },


  scrollviewText:{
  fontSize:20,
  color:'white',

    },

    scrollviewItem:{
      backgroundColor:'grey',
      width:'100%',
      alignSelf:'center',
      padding:10, 
      margin:5,
      borderRadius:10,
      flexDirection:"row",
      justifyContent:'space-between',

    },

    scrollview:{
     
      width:'100%'
    },


    container:{
      flex:1,
      backgroundColor:'black',
      alignItems:'center',
      padding:60,

    },

    title:{
    fontSize:60,
    color:'lightgrey',
    },

    inputContainer:{
     
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-between',
      paddingTop:20,
      alignItems:'center',
      color:'white'
      

      
    },
    
    textInput:{
    
      borderBottomWidth:2,
      borderColor:'green',
      width:'80%',
      //borderRadius:10,
      fontSize:16,
      color:'white'
    },

  

  });

