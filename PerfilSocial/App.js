import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';

export default function App() {
  const [followers, setFollowers] = useState(947);
const [isFollowing, setIsFollowing] = useState(false);

const handleFollowToggle = () => {
  if (!isFollowing) {
    setFollowers(followers + 1);
    setIsFollowing(true);
  } else {
    if (followers > 0) {
      setFollowers(followers - 1);
    }
    setIsFollowing(false);
  }
};
  return (
    <ScrollView>
      <View style={styles.Container}>

        <View style={styles.userContainer}>
          <Ionicons name="chevron-back" size={28} style={styles.backIcon} color="white" />
          <Text style={styles.UserName}>hudsonwilliamsoffi...</Text>
            <MaterialIcons name="verified" size={12} style={styles.verifiedIcon} color="#4EA1FF" />
          <Feather name="bell" size={24} style={styles.bellIcon} color="white" />
          <SimpleLineIcons name="options" size={24} style={styles.optionsIcon} color="white" />
        </View>

  <View style={styles.profileRow}>
    <Image source={require('./assets/Images/UserPicture.jpeg')} style={styles.UserPic}/>

    <View style={styles.rightSection}>
      <Text style={styles.Name}>Hudson Williams</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>35</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {followers}
            </Text>

            <Text style={styles.statLabel}>followers</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>125</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
      </View>
    </View>
    
    <View style={styles.bioContainer}>
      <Text style={styles.artistText}>Artist</Text>
      <Text style={styles.bioText}>이거 뭐야?</Text>
      <Text style={styles.bioTranslate}>See Translation</Text>

      <View style= {styles.linkContainer}>
        <Fontisto name="link2" size={15} style={styles.linkIcon} color="#4EA1FF" />
        <Text style={styles.youtubeLink}>youtube.com/@hudsonwilliams9010?</Text>
      </View>

      <Text style={styles.handle}>@hudsonwilliamsofficial</Text>

      <View style={styles.followedInfo}>
        <Image source={require('./assets/Images/Follows.jpeg')} style={styles.followsImage}/>
        <Text style={styles.FollowedBy}>Followed by melisaresendiz12, mari_ezji and 12 others</Text>
      </View>

      <View style={styles.followUnfollowContainer}>
        <TouchableOpacity onPress={handleFollowToggle}>
          <Text style={styles.followUnfollowButton}>
            {isFollowing ? "Unfollow" : "Follow"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.message}>Message</Text>
        <SimpleLineIcons name="user-follow" style={styles.followIcon} color="white" />
      </View>

      <Image source={require('./assets/Images/highlights.jpeg')} style={styles.highlights} />
    </View>

    <View style={styles.barra}>
      <FontAwesome6 name="table-cells" size={24} color="#ffffff" />
      <Octicons name="video" size={24} color="#888c91" />
      <SimpleLineIcons name="share-alt" size={24} color="#888c91" />
      <FontAwesome5 name="user-tag" size={24} color="#888c91" />
    </View>
    
    <View style={styles.containerPosts}>
      <Image source={require('./assets/Images/Posts.jpeg')} style={styles.postImage}/>
    </View>
  </View>
</ScrollView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 45,
    paddingBottom: 50,
    backgroundColor: '#0F1419',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#0F1419',
    marginTop: 10,
  },
  UserName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  backIcon: {
    marginRight: 10,
  },
  verifiedIcon: {
    marginLeft: 8,
  },
  bellIcon: {
    marginLeft: 'auto',
    marginRight: 15,
  },
  optionsIcon: {
    marginRight: 15,
  },
  UserPic: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  rightSection: {
    flex: 1,
    marginLeft: 20,
  },
  Name: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 15,
    color: '#fff',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
  },
  artistText: {
    fontSize: 15,
    color: '#85889d',
  },
  bioContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#0F1419',
  },
  bioText: {
    fontSize: 14,
    color: '#fff',
    },
  bioTranslate: {
    fontSize: 13,
    color: '#ffffff',
    marginTop: 5,
    fontWeight: 'bold',
  },
  youtubeLink: {
    fontSize: 13,
    color: '#4EA1FF',
    marginTop: 5,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'auto',
  },
  linkIcon: {
    marginRight: 6,
  },
  followedInfo: {
    marginTop: 15,
    flexDirection: 'row',
  },
  handle: {
    fontSize: 13,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  followsImage: {
    width: 80,
    height: 30,
  },
  FollowedBy: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 10,
    marginRight: 100,
  },
  followUnfollowContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  followUnfollowButton: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#343c45',
    paddingVertical: 6,
    width: 150,
    textAlign: 'center',
    borderRadius: 7,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#343c45',
    paddingVertical: 6,
    paddingHorizontal: 45,
    borderRadius: 7,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  followIcon: {
    size: 20,
    color: '#fff',
    backgroundColor: '#343c45',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 7,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  highlights: {
    width: 70,
    height: 85,
    marginTop: 15,
  },
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#0F1419',
    marginTop: 10,
  },
  containerPosts: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  postImage: {
    width: '100%',
    height: 700,
  },
});

