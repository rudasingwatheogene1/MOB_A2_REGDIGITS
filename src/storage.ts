import AsyncStorage from "@react-native-async-storage/async-storage";

export type ProfileData = {
  fullName: string;
  registrationNumber: string;
  headline: string;
  biography: string;
  primarySkill: string;
  availability: string;
  imageUri: string | null;
};

const STORAGE_KEY = "@theoPortfolio_profile";

export async function loadProfile(): Promise<ProfileData | null> {
  try {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);

    if (saved === null) {
      return null;
    }

    return JSON.parse(saved) as ProfileData;
  } catch (error) {
    console.error("Failed to load profile:", error);
    return null;
  }
}

export async function saveProfile(
  profile: ProfileData
): Promise<void> {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(profile)
    );
  } catch (error) {
    console.error("Failed to save profile:", error);
  }
}