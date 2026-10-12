import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { projects } from "../constants";

interface ProjectDetailsScreenProps {
  route: {
    params: {
      projectId: string;
    };
  };
}

export default function ProjectDetailsScreen({
  route,
}: ProjectDetailsScreenProps) {
  const project = projects.find(
    (item) => item.id === route.params.projectId
  );

  if (!project) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>
            Project not found.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{project.title}</Text>

        <Text style={styles.description}>
          {project.description}
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Problem
          </Text>

          <Text style={styles.text}>
            {project.problem}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            My contribution
          </Text>

          <Text style={styles.text}>
            {project.contribution}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Technologies
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    lineHeight: 35,
    fontWeight: "900",
    color: "#0F172A",
  },

  description: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 23,
    color: "#475569",
  },

  section: {
    marginTop: 28,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
  },

  text: {
    fontSize: 15,
    lineHeight: 24,
    color: "#475569",
  },

  technologyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  technology: {
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  technologyText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
  },

  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  notFoundText: {
    fontSize: 16,
    color: "#64748B",
  },
});