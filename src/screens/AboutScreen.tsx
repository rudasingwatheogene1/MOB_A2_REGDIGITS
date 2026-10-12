import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  APP_NAME,
  APP_VERSION,
  REGISTRATION_NUMBER,
  STUDENT_NAME,
  VERIFICATION_CODE,
} from "../constants";

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <Text style={styles.title}>
          About
        </Text>

        <View style={styles.card}>
          <InfoRow
            label="Application"
            value={APP_NAME}
          />

          <InfoRow
            label="Student"
            value={STUDENT_NAME}
          />

          <InfoRow
            label="Registration number"
            value={REGISTRATION_NUMBER}
          />

          <InfoRow
            label="Verification code"
            value={VERIFICATION_CODE}
          />

          <InfoRow
            label="Version"
            value={APP_VERSION}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Data use
          </Text>

          <Text style={styles.body}>
            This application stores portfolio information
            locally on the device for demonstration purposes.
            It does not require an online account and does
            not store passwords, authentication tokens or
            sensitive personal records.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Offline use
          </Text>

          <Text style={styles.body}>
            The core portfolio content and saved profile
            remain usable without an internet connection.
            Optional external links, if added later, may
            require a network connection.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
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
    fontWeight: "900",
    color: "#0F172A",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  row: {
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  label: {
    fontSize: 12,
    color: "#64748B",
  },

  value: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
  },

  body: {
    fontSize: 14,
    lineHeight: 22,
    color: "#64748B",
  },
});