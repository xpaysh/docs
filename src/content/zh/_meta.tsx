import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
      copyPage: false,
    },
  },
  introduction: {
    type: 'page',
    theme: {
      navbar: true,
      toc: false,
      copyPage: false,
    },
  },
  docs: {
    title: '📦 示例代码',
    type: 'page',
  },
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        新变化
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord
