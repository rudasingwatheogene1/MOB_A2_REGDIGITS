import React from "react";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SkillsScreen from "../screens/SkillsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectDetailsScreen from "../screens/ProjectDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();
const ProjectStack = createNativeStackNavigator();

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