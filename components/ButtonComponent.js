import React from 'react';
import{
TouchableOpacity,
View,
Text,
StyleSheet
    
}
from 'react-native'

const CustomButton=(props)=>{

    var btncolor = props.color!=undefined?props.color:'blue'

    return(
<TouchableOpacity
      onPress = {props.onPressEvent}
      activeOpacity={0.5}
      
      >
        <View 
        
        style={{...styles.custombuttonView,backgroundColor:btncolor}}>
    <Text style={{
        fontSize:props.textSize,
        color:props.textColor
    }} >{props.text}</Text>
        </View>
      </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    custombuttonView:{
        backgroundColor:'blue',
        padding:10,
        borderRadius:10,
        paddingHorizontal:15,
        marginLeft:10,
    
  
      },
      custombuttonText:{
       color:'white',
       fontSize:20,
  
      },

})

export default  CustomButton;

