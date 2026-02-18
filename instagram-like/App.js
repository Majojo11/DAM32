import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {

  const [numberLikes, setNumberLikes] = useState(0);
  const [likeColor, setLikeColor] = useState("black");
  const [likeColor2, setSaveColor] = useState("black")
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    if (numberLikes === 0) {
      setNumberLikes(1);
      setLikeColor("#e54848");
    } else {
      setNumberLikes(0);
      setLikeColor("black");
    }
  };

const handleSaveToggle = () => {
  if (!isSaved) {
    setSaveColor("black");
    setIsSaved(true);
  } else {
    setSaveColor("black");
    setIsSaved(false);
  }
};

  const [fontsLoaded] = useFonts({
    Insta: require('./assets/fonts/VeganStylePersonalUse-5Y58.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.main}>Instagram</Text>
      </View>

      <View style={styles.container2}>
        <Image source={require('./assets/Images/userwstory.jpg')} style={styles.user}/>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.options}>⋯</Text>
      </View>

      <View style={styles.containerImage}>
        <Image source={require('./assets/Images/Post.jpeg')} style={styles.postImage}/>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity onPress={handleLike} style={styles.LikeContainer}>
          <Ionicons name={numberLikes === 1 ? "heart" : "heart-outline"} size={28} color={likeColor}/>
          <Text style={styles.NumberContainerLike}>
            {numberLikes}
          </Text>
        </TouchableOpacity>

        <Image source={require('./assets/Images/comment.png')} style={styles.icon}/>
        <Image source={require('./assets/Images/share.png')} style={styles.icon}/>

        <TouchableOpacity onPress={handleSaveToggle} style={styles.SaveContainer}>
          <Ionicons name={isSaved ? "bookmark" : "bookmark-outline"} size={28} color={likeColor2}/>
        </TouchableOpacity>
      </View>

      <View style={styles.container4}>
        <Text style={styles.description}>17,280 views</Text>
        <Text style={styles.description}>Username instagram template #Template</Text>
        <Text style={styles.description}>View all 370 comments</Text>
        <Text style={styles.description}>2 hours ago </Text>
      </View>

      <View style={styles.divider}/>

      <View style={styles.containerBarra}>
        <Image source={require('./assets/Images/home.png')} style={styles.iconBarra}/>
        <Image source={require('./assets/Images/search.png')} style={styles.iconBarra}/>
        <Image source={require('./assets/Images/PostB.png')} style={styles.iconBarra}/>
        <Image source={require('./assets/Images/noti.png')} style={styles.iconBarra}/>
        <Image source={require('./assets/Images/profile.png')} style={styles.iconBarra}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: '#fff',
  },
  container1: {
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  main: {
    fontFamily: 'Insta',
    fontSize: 26,
    lineHeight: 45,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  user: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  username: {
    marginLeft: 10,
    fontWeight: 400,
    fontSize: 16,
  },
  options: {
    marginLeft: 'auto',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  containerImage: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: 400,
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  LikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  NumberContainerLike:{
    marginLeft: 6, 
    marginRight: 10,
    fontWeight: 'bold' 
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  SaveContainer: {
    marginLeft: 'auto',
  },
  container4: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
    marginVertical: 10,
  }, 
  containerBarra: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBarra: {
    width: 24,
    height: 24,
    marginHorizontal: 15,
  },
});