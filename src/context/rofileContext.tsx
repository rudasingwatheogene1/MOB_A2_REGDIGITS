import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  REGISTRATION_NUMBER,
  STUDENT_NAME,
} from "../constants";

import { Profile } from "../types";
import { loadProfile, saveProfile } from "../storage";

const defaultProfile: Profile = {
  fullName: STUDENT_NAME,
  registrationNumber: REGISTRATION_NUMBER,
  headline: "Software Engineering Student",
  biography:
    "I am a software engineering student interested in building useful, reliable and user-friendly software applications.",
  primarySkill: "React Native",
  availability: "Available for internship",
  imageUri: null,
};

interface ProfileContextType {
  profile: Profile;
  updateProfile: (profile: Profile) => Promise<void>;
  resetProfile: () => Promise<void>;
  isLoading: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

interface ProfileProviderProps {
  children: ReactNode;
}

export function ProfileProvider({
  children,
}: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function restoreProfile() {
      try {
        const savedProfile = await loadProfile();

        if (savedProfile) {
          setProfile(savedProfile);
        }
      } finally {
        setIsLoading(false);
      }
    }

    restoreProfile();
  }, []);

  async function updateProfile(updatedProfile: Profile) {
    setProfile(updatedProfile);
    await saveProfile(updatedProfile);
  }

  async function resetProfile() {
    setProfile(defaultProfile);
    await saveProfile(defaultProfile);
  }

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        resetProfile,
        isLoading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile(): ProfileContextType {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfile must be used inside ProfileProvider"
    );
  }

  return context;
}
