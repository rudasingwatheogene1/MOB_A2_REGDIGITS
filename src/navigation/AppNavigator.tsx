import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SkillsScreen from "../screens/SkillsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectDetailsScreen from "../screens/ProjectDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";

type ProjectStackParamList = {
  ProjectsHome: undefined;
  ProjectDetails: {
    projectId: string;
  };
};

type TabParamList = {
  Home: undefined;
  Skills: undefined;
  Projects: undefined;
  Profile: undefined;
  About: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const ProjectStack =
  createNativeStackNavigator<ProjectStackParamList>();

function ProjectsNavigator() {
  return (
    <ProjectStack.Navigator>
      <ProjectStack.Screen
        name="ProjectsHome"
        component={ProjectsScreen}
        options={{
          title: "Projects",
        }}
      />

      <ProjectStack.Screen
        name="ProjectDetails"
        component={ProjectDetailsScreen}
        options={{
          title: "Project Details",
        }}
      />
    </ProjectStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#2563EB",
          tabBarInactiveTintColor: "#64748B",
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
          tabBarStyle: {
            height: 62,
            paddingBottom: 7,
            paddingTop: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
          }}
        />

        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            tabBarLabel: "Skills",
          }}
        />

        <Tab.Screen
          name="Projects"
          component={ProjectsNavigator}
          options={{
            tabBarLabel: "Projects",
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
          }}
        />

        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: "About",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}