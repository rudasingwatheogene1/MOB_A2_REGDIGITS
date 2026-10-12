import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { loadProfile, saveProfile } from "../storage";

export type ProfileData = {
  fullName: string;
  registrationNumber: string;
  headline: string;
  biography: string;
  primarySkill: string;
  availability: string;
  imageUri: string | null;
};

type ProfileContextType = {
  profile: ProfileData;
  updateProfile: (data: ProfileData) => Promise<void>;
  loading: boolean;
};

const defaultProfile: ProfileData = {
  fullName: "RUDASINGWA Theogene",
  registrationNumber: "25/27330",
  headline: "Mobile Application Developer",
  biography:
    "I am a software engineering student interested in building useful mobile applications.",
  primarySkill: "React Native",
  availability: "Available for student projects",
  imageUri: null,
};

const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

export function ProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSavedProfile = async () => {
      try {
        const savedProfile = await loadProfile();

        if (savedProfile) {
          setProfile(savedProfile);
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSavedProfile();
  }, []);

  const updateProfile = async (data: ProfileData) => {
    setProfile(data);
    await saveProfile(data);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        loading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfile must be used inside ProfileProvider"
    );
  }

  return context;
}