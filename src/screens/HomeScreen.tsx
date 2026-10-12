import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Avatar from "../components/Avatar";
import SectionTitle from "../components/SectionTitle";
import { VERIFICATION_CODE } from "../constants";
import { useProfile } from "../context/ProfileContext";

export default function HomeScreen() {
  const { profile } = useProfile();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.identity}>
          My name is {profile.fullName}.
        </Text>

        <View style={styles.profileHeader}>
          <Avatar
            name={profile.fullName}
            imageUri={profile.imageUri}
          />

          <View style={styles.headerText}>
            <Text style={styles.name}>
              {profile.fullName}
            </Text>

            <Text style={styles.headline}>
              {profile.headline}
            </Text>
          </View>
        </View>

        <View style={styles.verificationCard}>
          <Text style={styles.verificationLabel}>
            Verification code
          </Text>

          <Text style={styles.verificationCode}>
            {VERIFICATION_CODE}
          </Text>
        </View>

        <SectionTitle
          title="About me"
          subtitle="A short introduction"
        />

        <Text style={styles.biography}>
          {profile.biography}
        </Text>

        <View style={styles.availability}>
          <Text style={styles.availabilityLabel}>
            Availability
          </Text>

          <Text style={styles.availabilityValue}>
            {profile.availability}
          </Text>
        </View>

        <SectionTitle
          title="What I build"
          subtitle="Software solutions focused on practical problems"
        />

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Software Engineering
          </Text>

          <Text style={styles.infoText}>
            I enjoy creating mobile and web applications
            using modern development tools and technologies.
          </Text>
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

  identity: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "900",
    color: "#0F172A",
    marginBottom: 24,
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  headerText: {
    flex: 1,
    marginLeft: 18,
  },

  name: {
    fontSize: 21,
    fontWeight: "800",
    color: "#0F172A",
  },

  headline: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: "#64748B",
  },

  verificationCard: {
    backgroundColor: "#0F172A",
    borderRadius: 16,
    padding: 18,
    marginBottom: 28,
  },

  verificationLabel: {
    color: "#CBD5E1",
    fontSize: 12,
    fontWeight: "600",
  },

  verificationCode: {
    marginTop: 5,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 1,
  },

  biography: {
    fontSize: 15,
    lineHeight: 24,
    color: "#475569",
    marginBottom: 18,
  },

  availability: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 30,
  },

  availabilityLabel: {
    fontSize: 12,
    color: "#64748B",
  },

  availabilityValue: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  infoTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
  },

  infoText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    color: "#64748B",
  },
});