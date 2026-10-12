import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {subtitle ? (
        <Text style={styles.subtitle}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 21,
    color: "#64748B",
  },
});