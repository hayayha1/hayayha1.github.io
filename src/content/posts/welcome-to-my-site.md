---
title: 欢迎来到我的个人主页与技术博客
published: 2026-09-20
pinned: false
description: 记录个人主页与技术博客的搭建历程，聊聊站点的现代化架构特点与后续内容更新规划。
tags: [关于本站, GitHub Pages, Astro, 个人随笔]
category: 站点日志
---

这是我的个人网站的第一篇文章。通过 GitHub Pages 与现代静态站点架构，我搭建了这个集 **个人主页、开源项目展示与技术博客** 于一体的技术空间。

## 为什么搭建这个站点？

在日常的研究与开发过程中，常常积累了许多碎片化的思考、架构设计经验以及实验探索。一个属于自己的独立主站，既能沉淀长期的知识资产，也是向同行展示项目成果与研究方向的最佳窗口。

> "沉淀思考，分享技术，连接未来。"

## 站点的技术特点

为了保证极佳的访问速度与极简的维护成本，本站点采用了现代静态站点生成体系：

1. **零服务器维护**：构建后作为静态资源发布，秒级响应。
2. **轻量 Markdown / MDX 博客系统**：支持直接编写 `.md` 文件，内置代码高亮、目录自动生成与文章检索。
3. **响应式与蓝白深浅主题**：支持清爽蓝白亮色模式与深邃暗色模式自适应切换，手机端、平板与宽屏桌面完美适配。
4. **与 GitHub 生态深度整合**：与个人 GitHub 仓库联动，开源项目动态一览无余。

## 常用代码示例展示

作为一个技术博客，代码展示是必不可少的。下面是一段典型的 Python Agent 循环逻辑示例：

```python
import asyncio
from typing import List, Dict

class AgentCoordinator:
    def __init__(self, agent_name: str):
        self.agent_name = agent_name
        self.message_history: List[Dict[str, str]] = []

    async def step(self, user_prompt: str) -> str:
        """执行单步推理与动作分发"""
        print(f"[{self.agent_name}] 正在处理任务: {user_prompt}")
        await asyncio.sleep(0.5)
        response = f"Agent 协同规划完成，已生成子任务图谱。"
        self.message_history.append({"role": "assistant", "content": response})
        return response

# 快速启动
if __name__ == "__main__":
    coordinator = AgentCoordinator(agent_name="DiagnosticAgent")
    result = asyncio.run(coordinator.step("分析病历多模态表征"))
    print(result)
```

## 未来计划

- 持续记录在 **医疗多智能体系统 (Medical-multi-agent-system)** 上的研究进展
- 分享自主 Agent（如 `self-agent2`）的演化机制与评测心得
- 探讨机器学习与系统架构的实战沉淀

感谢你的来访，欢迎在 GitHub 上交流或提出想法！
