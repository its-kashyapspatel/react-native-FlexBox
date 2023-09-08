import { StyleSheet, View } from 'react-native';
import Box from './components/box';

export default function App() {
  return (

    // Flex

    // <View style={{backgroundColor:"plum", flex:1}}></View>

    // <View style={styles.container}>
    //   <Box style={{backgroundColor: "lightblue", flex:1}}>Box 1</Box>
    //   <Box style={{backgroundColor: "lightgreen", flex:2}}>Box 2</Box>
    //   <Box style={{backgroundColor: "lightblue", flex:3}}>Box 3</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 4</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 5</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 6</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 7</Box>
    // </View>

    // Flex Direction, Justify Content

    // <View style={styles.container}>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 1</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 2</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 3</Box>
    // </View>

    // Align Items

    // <View style={styles.container}>
    //   <Box style={{backgroundColor: "lightblue", paddingVertical:100}}>Box 1</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 2</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 3</Box>
    // </View>

    // Align Self

    // <View style={styles.container}>
    //   <Box style={{backgroundColor: "lightblue", alignSelf:"start"}}>Box 1</Box>
    //   <Box style={{backgroundColor: "lightgreen", alignSelf:"flex-end"}}>Box 2</Box>
    //   <Box style={{backgroundColor: "lightblue", alignSelf:"center"}}>Box 3</Box>
    //   <Box style={{backgroundColor: "lightgreen", alignSelf:"stretch"}}>Box 4</Box>
    //   <Box style={{backgroundColor: "lightblue", alignSelf:"auto"}}>Box 5</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 6</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 7</Box>
    // </View>

    // Flex Wrap, Align Content, Gap

    // <View style={styles.container}>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 1</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 2</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 3</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 4</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 5</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 6</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 7</Box>
    // </View>

    // Flex Basis

    // <View style={styles.container}>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 1</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 2</Box>
    //   <Box style={{backgroundColor: "lightblue", flexBasis:140, flex:1}}>Box 3</Box>
    //   <Box style={{backgroundColor: "lightgreen", height:140, flex:1}}>Box 4</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 5</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 6</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 7</Box>
    // </View>

    // Flex Shrink

    // <View style={styles.container}>
    //   <Box style={{backgroundColor: "lightblue", flexShrink:1}}>Box 1 Shrink</Box>
    //   <Box style={{backgroundColor: "lightgreen", flexShrink:2}}>Box 2 Shrink</Box>
    // </View>

    // Flex Grow

    // <View style={styles.container}>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 1</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 2</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 3</Box>
    //   <Box style={{backgroundColor: "lightgreen"}}>Box 4</Box>
    //   <Box style={{backgroundColor: "lightblue", flexGrow:1}}>Box 5 Grow</Box>
    //   <Box style={{backgroundColor: "lightgreen", flexGrow:3}}>Box 6 Grow</Box>
    //   <Box style={{backgroundColor: "lightblue"}}>Box 7</Box>
    // </View>

    // Relative and Absolute Layout

    <View style={styles.container}>
      <Box style={{backgroundColor: "lightblue", top:75, left:75}}>Box 1</Box>
      <Box style={{backgroundColor: "lightgreen"}}>Box 2</Box>
      <Box style={{backgroundColor: "lightblue"}}>Box 3</Box>
      <Box style={{backgroundColor: "lightgreen", position:"absolute", top:100, left:100}}>Box 4</Box>
      <Box style={{backgroundColor: "lightblue"}}>Box 5</Box>
      <Box style={{backgroundColor: "lightgreen"}}>Box 6</Box>
      <Box style={{backgroundColor: "lightblue"}}>Box 7</Box>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    borderWidth: 5,
    borderColor: "red",
    flex:1,

    // Flex Direction
    // flexDirection: "column"
    // flexDirection: "column-reverse"
    // flexDirection: "row"
    // flexDirection: "row-reverse"

    // Justify Content
    // justifyContent: "flex-start"
    // justifyContent: "flex-end"
    // justifyContent: "center"
    // justifyContent: "space-between"
    // justifyContent: "space-around"
    // justifyContent: "space-evenly"

    // Align Items
    // alignItems: "stretch"
    // alignItems: "flex-start"
    // alignItems: "flex-end"
    // alignItems: "center"
    // flexDirection: "row",
    // alignItems: "baseline"

    // Align Self
    // alignItems: "flex-end"

    // Flex Wrap
    // height: 300,
    // flexWrap: "nowrap"
    // flexWrap: "wrap"
    // flexWrap: "wrap-reverse"
    // flexDirection: "row",
    // flexWrap: "wrap"

    // Align Content
    // flexWrap: "wrap",
    // height: 400,
    // alignContent: "flex-start"
    // alignContent: "flex-end"
    // alignContent: "center"
    // alignContent: "stretch"
    // alignContent: "space-between"
    // alignContent: "space-around"

    // Flex Basis
    // height: 300,
    // flexWrap: "wrap",
    // rowGap: 5,
    // columnGap: 20,
    // gap: 10

    // Flex Shrink
    // flexDirection: "row",
    // alignItems: "flex-start",
    // width: 300
  },
});
