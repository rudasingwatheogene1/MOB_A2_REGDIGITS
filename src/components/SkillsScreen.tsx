import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SectionTitle from "../components/SectionTitle";
import SkillChip from "../components/SkillChip";
import { education, skills } from "../constants";

export default function SkillsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <SectionTitle
          title="Skills"
          subtitle="Technologies and abilities I am developing"
        />

        <View style={styles.skills}>
          {skills.map((skill) => (
            <SkillChip
              key={skill.id}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </View>

        <View style={styles.sectionSpacing}>
          <SectionTitle
            title="Education"
            subtitle="My learning and training journey"
          />

          {education.map((item) => (
            <View
              key={item.id}
              style={styles.educationCard}
            >
              <Text style={styles.period}>
                {item.period}
              </Text>

              <Text style={styles.qualification}>
                {item.qualification}
              </Text>

              <Text style={styles.institution}>
                {item.institution}
              </Text>

              <Text style={styles.description}>
                {item.description}
              </Text>
            </View>
          ))}
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

  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  sectionSpacing: {
    marginTop: 30,
  },

  educationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  period: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563EB",
  },

  qualification: {
    marginTop: 6,
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
  },

  institution: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },

  description: {
    marginTop: 9,
    fontSize: 14,
    lineHeight: 21,
    color: "#64748B",
  },
});