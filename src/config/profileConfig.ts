import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像路径：使用 public 目录下的矢量头像
	avatar: "/assets/images/avatar.svg",

	// 名字
	name: "hayayha1",

	// 个人签名
	bio: "专注 AI Agent 与医疗多智能体系统研究",

	// 社交链接配置
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/hayayha1",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:18045280915@163.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
