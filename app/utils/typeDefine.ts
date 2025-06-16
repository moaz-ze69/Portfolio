import { ComponentType } from "react";
export interface NavButtons {
  name: string;
}

export interface LinkType {
  name: string;
  link: string;
  icon: ComponentType;
}
export interface Experience {
  companyName: string;
  position: string;
  learning: string;
  tenure: string;
image:string;
}

export interface DeveloperInfo {
  name: string;
  fullName: string;
  gender: string;
  type: string;
  country: string;
  description: string;
  skills:string;
  contact:string;
  mail:string;
  phone:string;

}
export interface Skill {
  name: string;
  icon: ComponentType;
}

export interface Project {
  number: string;
  title: string;
  description: string;
  image: any;
  type: string;
  link:string;
}
export interface Tab {
  name: string;
}