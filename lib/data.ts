import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoLogoIonic } from "react-icons/io";
import { TbBrandFlutter } from "react-icons/tb";

// uav
import uav_patroling_en from "@/public/project/uav/patroling_en.png";
import uav_patroling_zh from "@/public/project/uav/patroling_zh.png";
import explosive_patroling_zh from "@/public/project/explosive/patroling_zh.png";
import pad1_zh from "@/public/project/pad/pad1_zh.png";
import pad1_en from "@/public/project/pad/pad1_en.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "Frontend Developer",
        location: "Hangzhou Shenhao Information Technology Co., Ltd., China",
        description: "Mainly for vue3 technology stack development, including unmanned aerial system, explosion-proof robot system. Also developed Flutter's robot control App.",
        icon: React.createElement(FaVuejs),
        date: "2023 Sep - up to now",
    },
    {
        title: "Frontend Developer",
        location: "Hangzhou Ruifulai Network Technology Co., Ltd, China",
        description: "Use vue2 to develop background management system. use Flutter to develop instant messaging App.",
        icon: React.createElement(TbBrandFlutter),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "Frontend Developer",
        location: "Hangzhou Kiwi Drinks Technology Chain Co., Ltd, China",
        description: "Use Angular's ionic mobile framework for hybrid App development.",
        icon: React.createElement(IoLogoIonic),
        date: "2018 May - 2019 Jun",
    },
    {
        title: "Bachelor of Management",
        location: "NingBo University, China",
        description: "Graduated with the Bachelor of Management, ILT Level II certificate, mastered the knowledge of logistics management.",
        icon: React.createElement(LuGraduationCap),
        date: "2013 Sep - 2017 Jun",
    },

]

export const experiencesDataZn = [
    {
        "title": "前端开发",
        "location": "杭州申昊科技有限公司",
        "description": "主要是进行vue3的技术栈进行开发，包括无人机系统，防爆机器人系统。同时也开发flutter的机器人控制App。",
        icon: React.createElement(FaVuejs),
        "date": "2021年3月 - 至今"
    },
    {
        "title": "前端开发",
        "location": "杭州瑞芙莱网络科技有限公司",
        "description": "使用vue2开发后台管理系统,使用Flutter 开发即时通讯App。",
        "icon": React.createElement(TbBrandFlutter),
        "date": "2019年6月 - 2021年2月"
    },
    {
        "title": "前端开发",
        "location": "杭州奇异鸟饮品科技有限公司",
        "description": "使用Angular的ionic移动框架，进行混合开发App。",
        "icon": React.createElement(IoLogoIonic),
        "date": "2018年5月 - 2019年6月"
    },
    {
        "title": "管理学学士",
        "location": "宁波大学",
        "description": "获得管理学学士，ILt 二级证书，掌握了物流管理的知识。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2013年9月 - 2017年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "Uav inspection system",
        title_zh: '无人机管理系统',
        description: "The UAV inspection management system includes equipment management, route creation, task delivery, process monitoring and 3D display. Using WebSocket real-time communication, integrated Cesium for 3D display and historical playback.",
        desc_zh: "该无人机巡检管理系统包括设备管理、巡检路线创建、任务下发、巡检过程监控和3D场景展示。设备管理涵盖无人机注册、维护记录和状态监控；巡检路线创建和优化；任务下发提供详细信息和提醒功能；通过WebSocket实现实时通信和异常报警，并记录巡检数据；集成Cesium展示巡检场景、模型及历史回放功能。",
        tags: ["Vue3", "TypeScript", "Tailwind", "Cesium"],
        imageUrlen: uav_patroling_en,
        imageUrlzh: uav_patroling_zh,
        projectUrl: '',
        demoUrl: '',
    },
    {
        title: "Explosion-proof inspection robot",
        title_zh: '防爆机器人',
        description: "The project aims to use robots instead of humans to monitor the safety indicators of natural gas stations and ensure safe production. Use ECharts' geo capability to display the robot's location in real time and communicate in real time via WebSocket.",
        desc_zh: "该项目旨在用机器人代替人类监控天然气站的安全指标，确保安全生产。利用ECharts的geo功能实时展示机器人的位置，并通过WebSocket进行实时通信。",
        tags: ["Vue2", "Echart", "element-ui", "Vuex"],
        imageUrlen: explosive_patroling_zh,
        imageUrlzh: explosive_patroling_zh,
        projectUrl: '',
        demoUrl: '',
    },
    {
        title: "Robot control App",
        title_zh: "机器人控制App",
        description: "The App, written primarily in Flutter, uses the VLC plugin to stream robot videos and integrates the Flutter plugin of a third-party SDK to control the rotation of the camera.",
        desc_zh: "这个App主要用Flutter编写，使用VLC插件播放机器人视频流，并集成第三方SDK的Flutter插件来控制相机云台的转动。",
        tags: ["Flutter", "Dart", "VLC", "Flutter-plugin"],
        imageUrlen: pad1_en,
        imageUrlzh: pad1_zh,
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Dart",
    "Flutter",
    "Node",
    "nestjs",
    "Prisma",
    "Postgres",
    "Express",
    "Koa2",
    "Git",
    "Github",
    "Tailwind",
] 
