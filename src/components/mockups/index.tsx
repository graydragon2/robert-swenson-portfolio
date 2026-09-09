import type { ComponentType } from "react";
import GraydragonMockup from "@/components/mockups/GraydragonMockup";
import HomeSecurityMockup from "@/components/mockups/HomeSecurityMockup";
import NetworkCommandCenterMockup from "@/components/mockups/NetworkCommandCenterMockup";
import LocalAIMockup from "@/components/mockups/LocalAIMockup";
import HomelabMockup from "@/components/mockups/HomelabMockup";
import MortgageMockup from "@/components/mockups/MortgageMockup";

export const projectMockups: Record<string, ComponentType> = {
  graydragon: GraydragonMockup,
  "home-security": HomeSecurityMockup,
  "network-command-center": NetworkCommandCenterMockup,
  "local-ai": LocalAIMockup,
  homelab: HomelabMockup,
  "mortgage-intelligence": MortgageMockup,
};
