import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

const {name, tagline,taglineCTA,image}= props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
       source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name} </Text>
        <Text style={styles.subtitle}>{tagline}{''}</Text>
        <Text style={styles.taglineCTA}>{taglineCTA}</Text>
      </View>

<View style = {styles.buttonscontainer}>

      <StyledButton
        type="primary"
        content={'Custom Order'}
        onPress={() => {
          console.warn('custom order was pressed');
        }}
      />

      <StyledButton
        type="seconadry"
        content={'Existing Inventoy'}
        onPress={() => {
          console.warn('custom order was pressed');
        }}
      />
    </View>
    </View>
    
  );
};
export default CarItem;


