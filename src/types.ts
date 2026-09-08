export type ProjectId = 'ALTERIA' | 'CLEANNET' | 'ARCHIVE' | 'MESH_DISPATCHER' | 'ACOUSTIC_CLASSIFIER';

export type CaseStudySectionId =
  | 'OVERVIEW'
  | 'PROCESS'
  | 'ARCHITECTURE'
  | 'TECHNOLOGY'
  | 'CONTRIBUTION'
  | 'CHALLENGES'
  | 'OUTCOME';

export interface ProjectData {
  id: ProjectId;
  tabLabel: string;
  tabNumber: string;
  name: string;
  tagline: string;
  categoryBadge: string;
  description: string;
  techStack: string[];
  status: string;
  statusType: 'active' | 'prototype' | 'archived';
  metricsSummary?: string;
  languages?: string[];
  capabilities?: {
    icon: string;
    title: string;
    desc: string;
    accent: 'primary' | 'secondary';
  }[];
  pipeline?: {
    step: string;
    title: string;
    desc: string;
  }[];
  heuristics?: string[];
  riskClassifier?: {
    level: string;
    action: string;
    color: string;
    dotColor: string;
  }[];
  sampleOutput?: {
    predictedRisk: string;
    confidence: string;
    reasoning: string;
    action: string;
    alert: string;
  };
}

export interface BuildLogItem {
  id: string;
  buildNumber: string;
  tag: string;
  title: string;
  problemStatement: string;
  whatIBuilt: string;
  myRole: string;
  techStack: string;
  badgeText: string;
  badgeVariant: 'emerald' | 'blue';
  projectId?: ProjectId;
}

export interface SkillCategory {
  title: string;
  badge: string;
  badgeColor: string;
  skills: string[];
}

export interface AchievementItem {
  icon: string;
  category: string;
  title: string;
  description: string;
  accent: 'primary' | 'secondary';
}

export interface CaseStudyContent {
  projectId: ProjectId;
  projectTitle: string;
  subtitle: string;
  sections: Record<CaseStudySectionId, {
    title: string;
    content: string;
    highlights?: string[];
    callout?: string;
  }>;
}
