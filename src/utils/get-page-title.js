import defaultSettings from '@/settings'

const title = defaultSettings.title || '深圳宏利达'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
