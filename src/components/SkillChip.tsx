import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface SkillChipProps {
  name: string;
  level?: string;
}

export default function SkillChip({
  name,
  level,
}: SkillChipProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      {level ? (
        <Text style={styles.level}>{level}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
    marginRight: 8,
    marginBottom: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },

  level: {
    marginTop: 2,
    fontSize: 11,
    color: "#64748B",
  },
});