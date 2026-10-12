import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../constants";

interface ProjectsScreenProps {
  navigation: any;
}

export default function ProjectsScreen({
  navigation,
}: ProjectsScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <SectionTitle
          title="Projects"
          subtitle="Selected work and practical software projects"
        />

        {projects.length === 0 ? (
          <Text style={styles.empty}>
            No projects have been added yet.
          </Text>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPress={() =>
                navigation.navigate("ProjectDetails", {
                  projectId: project.id,
                })
              }
            />
          ))
        )}
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

  empty: {
    textAlign: "center",
    color: "#64748B",
    paddingVertical: 40,
  },
});