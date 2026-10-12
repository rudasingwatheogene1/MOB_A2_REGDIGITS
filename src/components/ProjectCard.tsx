import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onPress: () => void;
}

export default function ProjectCard({
  project,
  onPress,
}: ProjectCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Open ${project.title}`}
    >
      <Text style={styles.title}>{project.title}</Text>

      <Text style={styles.problem} numberOfLines={3}>
        {project.problem}
      </Text>

      <View style={styles.technologyContainer}>
        {project.technologies.map((technology) => (
          <View
            key={technology}
            style={styles.technology}
          >
            <Text style={styles.technologyText}>
              {technology}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.details}>View project →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  pressed: {
    opacity: 0.7,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },

  problem: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: "#475569",
  },

  technologyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },

  technology: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 6,
  },

  technologyText: {
    fontSize: 11,
    color: "#334155",
    fontWeight: "600",
  },

  details: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "700",
    color: "#2563EB",
  },
});