import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface AvatarProps {
  name: string;
  imageUri?: string | null;
  size?: number;
}

export default function Avatar({
  name,
  imageUri,
  size = 110,
}: AvatarProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  if (imageUri) {
    return (
      <Image
        source={{ uri: imageUri }}
        style={[
          styles.image,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      />
    );
  }

  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Text style={[styles.initials, { fontSize: size * 0.32 }]}>
        {initials || "ME"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
  },

  initials: {
    color: "#FFFFFF",
    fontWeight: "800",
  },

  image: {
    resizeMode: "cover",
  },
});