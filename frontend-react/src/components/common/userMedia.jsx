import React from "react";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  media: {
    height: 5,
    paddingTop: "60%",
    marginTop: "20"
  }
};

const UserMedia = ({ user }) => {
  return user ? (
    <CardMedia
      image={require(`../../static/${user.username}.jpg`)}
      title="Contemplative Reptile"
      style={styles.media}
    />
  ) : null;
};

export default UserMedia;
