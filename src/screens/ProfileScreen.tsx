import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";

import { useProfile } from "../context/ProfileContext";
import { AvailabilityStatus } from "../types";
import Avatar from "../components/Avatar";

interface Errors {
  headline?: string;
  biography?: string;
  primarySkill?: string;
}

export default function ProfileScreen() {
  const { profile, updateProfile } = useProfile();

  const [headline, setHeadline] = useState(profile.headline);
  const [biography, setBiography] = useState(profile.biography);
  const [primarySkill, setPrimarySkill] = useState(
    profile.primarySkill
  );
  const [availability, setAvailability] =
   useState<AvailabilityStatus>(
  profile.availability as AvailabilityStatus
);

  const [imageUri, setImageUri] = useState<string | null>(
    profile.imageUri
  );

  const [errors, setErrors] = useState<Errors>({});
  const [savedMessage, setSavedMessage] = useState("");

  function validate(): boolean {
    const newErrors: Errors = {};

    if (headline.trim().length < 5) {
      newErrors.headline =
        "Headline must contain at least 5 characters.";
    }

    if (biography.trim().length < 30) {
      newErrors.biography =
        "Biography must contain at least 30 characters.";
    }

    if (primarySkill.trim().length < 2) {
      newErrors.primarySkill =
        "Primary skill is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSave() {
    setSavedMessage("");

    if (!validate()) {
      return;
    }

    try {
      await updateProfile({
        ...profile,
        headline: headline.trim(),
        biography: biography.trim(),
        primarySkill: primarySkill.trim(),
        availability,
        imageUri,
      });

      setSavedMessage("Profile saved successfully.");
    } catch {
      Alert.alert(
        "Save failed",
        "Your profile could not be saved. Please try again."
      );
    }
  }

  async function selectImage() {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permission required",
          "Please allow photo library access to select a profile image."
        );
        return;
      }

      const result =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });

      if (result.canceled) {
        Alert.alert(
          "Selection cancelled",
          "No profile image was selected."
        );
        return;
      }

      if (result.assets.length > 0) {
        setImageUri(result.assets[0].uri);
      }
    } catch {
      Alert.alert(
        "Image error",
        "The image could not be selected."
      );
    }
  }

  async function takePhoto() {
    try {
      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permission required",
          "Please allow camera access to take a profile photo."
        );
        return;
      }

      const result =
        await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });

      if (result.canceled) {
        Alert.alert(
          "Photo cancelled",
          "No profile photo was taken."
        );
        return;
      }

      if (result.assets.length > 0) {
        setImageUri(result.assets[0].uri);
      }
    } catch {
      Alert.alert(
        "Camera error",
        "The camera could not be opened."
      );
    }
  }

  function removeImage() {
    setImageUri(null);
  }

  function showImageOptions() {
    Alert.alert(
      "Profile image",
      "Choose an option",
      [
        {
          text: "Gallery",
          onPress: selectImage,
        },
        {
          text: "Camera",
          onPress: takePhoto,
        },
        {
          text: "Remove",
          onPress: removeImage,
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>
          Edit Profile
        </Text>

        <Text style={styles.subtitle}>
          Update your portfolio information. Changes are
          stored locally on this device.
        </Text>

        <View style={styles.imageSection}>
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={styles.profileImage}
            />
          ) : (
            <Avatar
              name={profile.fullName}
              size={110}
            />
          )}

          <Pressable
            onPress={showImageOptions}
            style={styles.imageButton}
          >
            <Text style={styles.imageButtonText}>
              {imageUri ? "Replace / Remove image" : "Add profile image"}
            </Text>
          </Pressable>
        </View>

        <View style={styles.readOnlyCard}>
          <Text style={styles.readOnlyLabel}>
            Student name
          </Text>

          <Text style={styles.readOnlyValue}>
            {profile.fullName}
          </Text>

          <Text style={styles.readOnlyLabel}>
            Registration number
          </Text>

          <Text style={styles.readOnlyValue}>
            {profile.registrationNumber}
          </Text>
        </View>

        <Text style={styles.label}>
          Professional headline
        </Text>

        <TextInput
          value={headline}
          onChangeText={(value) => {
            setHeadline(value);
            if (errors.headline) {
              setErrors((current) => ({
                ...current,
                headline: undefined,
              }));
            }
          }}
          placeholder="Example: Software Engineering Student"
          style={[
            styles.input,
            errors.headline && styles.inputError,
          ]}
          accessibilityLabel="Professional headline"
        />

        {errors.headline ? (
          <Text style={styles.error}>
            {errors.headline}
          </Text>
        ) : null}

        <Text style={styles.label}>
          Short biography
        </Text>

        <TextInput
          value={biography}
          onChangeText={(value) => {
            setBiography(value);
            if (errors.biography) {
              setErrors((current) => ({
                ...current,
                biography: undefined,
              }));
            }
          }}
          placeholder="Write a short professional biography"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          style={[
            styles.input,
            styles.textArea,
            errors.biography && styles.inputError,
          ]}
          accessibilityLabel="Short biography"
        />

        {errors.biography ? (
          <Text style={styles.error}>
            {errors.biography}
          </Text>
        ) : null}

        <Text style={styles.label}>
          Primary skill
        </Text>

        <TextInput
          value={primarySkill}
          onChangeText={(value) => {
            setPrimarySkill(value);
            if (errors.primarySkill) {
              setErrors((current) => ({
                ...current,
                primarySkill: undefined,
              }));
            }
          }}
          placeholder="Example: React Native"
          style={[
            styles.input,
            errors.primarySkill && styles.inputError,
          ]}
          accessibilityLabel="Primary skill"
        />

        {errors.primarySkill ? (
          <Text style={styles.error}>
            {errors.primarySkill}
          </Text>
        ) : null}

        <Text style={styles.label}>
          Availability
        </Text>

        <View style={styles.options}>
          {(
            [
              "Available for internship",
              "Available for freelance",
              "Not currently available",
            ] as AvailabilityStatus[]
          ).map((option) => {
            const selected = availability === option;

            return (
              <Pressable
                key={option}
                onPress={() => setAvailability(option)}
                style={[
                  styles.option,
                  selected && styles.selectedOption,
                ]}
                accessibilityRole="radio"
                accessibilityState={{
                  selected,
                }}
              >
                <Text
                  style={[
                    styles.optionText,
                    selected && styles.selectedOptionText,
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={handleSave}
          style={styles.saveButton}
          accessibilityRole="button"
        >
          <Text style={styles.saveButtonText}>
            Save Profile
          </Text>
        </Pressable>

        {savedMessage ? (
          <Text style={styles.success}>
            {savedMessage}
          </Text>
        ) : null}
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
    paddingBottom: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#0F172A",
  },

  subtitle: {
    marginTop: 7,
    marginBottom: 25,
    fontSize: 14,
    lineHeight: 21,
    color: "#64748B",
  },

  imageSection: {
    alignItems: "center",
    marginBottom: 25,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    resizeMode: "cover",
  },

  imageButton: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#E2E8F0",
  },

  imageButtonText: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "700",
  },

  readOnlyCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 25,
  },

  readOnlyLabel: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: 3,
  },

  readOnlyValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 13,
  },

  label: {
    fontSize: 14,
    fontWeight: "800",
    color: "#334155",
    marginBottom: 7,
    marginTop: 14,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#0F172A",
  },

  textArea: {
    minHeight: 120,
  },

  inputError: {
    borderColor: "#DC2626",
  },

  error: {
    color: "#DC2626",
    fontSize: 12,
    marginTop: 5,
  },

  options: {
    marginTop: 2,
  },

  option: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    padding: 13,
    marginBottom: 8,
  },

  selectedOption: {
    borderColor: "#2563EB",
    backgroundColor: "#EFF6FF",
  },

  optionText: {
    fontSize: 14,
    color: "#475569",
  },

  selectedOptionText: {
    color: "#1D4ED8",
    fontWeight: "800",
  },

  saveButton: {
    backgroundColor: "#2563EB",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 25,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  success: {
    textAlign: "center",
    marginTop: 13,
    color: "#15803D",
    fontSize: 14,
    fontWeight: "700",
  },
});