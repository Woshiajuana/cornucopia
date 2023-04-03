import { DocSearchTranslations } from '@docsearch/react'

export const translations: DocSearchTranslations = {
  button: {
    buttonText: '搜索',
    buttonAriaLabel: 'Search',
  },
  modal: {
    searchBox: {
      resetButtonTitle: '清除查询',
      resetButtonAriaLabel: 'Clear the query',
      cancelButtonText: '取消',
      cancelButtonAriaLabel: 'Cancel',
    },
    startScreen: {
      recentSearchesTitle: '最近的',
      noRecentSearchesText: '没有搜索历史',
      saveRecentSearchButtonTitle: '保存此搜索',
      removeRecentSearchButtonTitle: '从历史记录中删除此搜索',
      favoriteSearchesTitle: '收藏',
      removeFavoriteSearchButtonTitle: '从收藏夹中删除此搜索',
    },
    errorScreen: {
      titleText: '无法获取结果',
      helpText: '您可能需要检查网络连接.',
    },
    footer: {
      selectText: '选择',
      selectKeyAriaLabel: 'Enter key',
      navigateText: '切换',
      navigateUpKeyAriaLabel: 'Arrow up',
      navigateDownKeyAriaLabel: 'Arrow down',
      closeText: '关闭',
      closeKeyAriaLabel: 'Escape key',
      searchByText: '搜索供应商',
    },
    noResultsScreen: {
      noResultsText: '无法找到相关结果',
      suggestedQueryText: '尝试搜索',
      reportMissingResultsText: '相信这个查询应该返回结果吗？',
      reportMissingResultsLinkText: '让我们知道.',
    },
  },
}
