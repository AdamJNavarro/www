if (!(global as any).navigator) {
  ;(global as any).navigator = {}
}
if (!(global as any).navigator.userAgent) {
  ;(global as any).navigator.userAgent = "all"
}

const getNavigatorAgent = (userAgent?: string | null): string | null => {
  return userAgent
    ? userAgent
    : navigator.userAgent || navigator.vendor || (window as any).opera
}

export const isAndroid = (userAgent?: string | null) => {
  const navigatorAgent = getNavigatorAgent(userAgent)
  return navigatorAgent ? /Android/i.test(navigatorAgent) : false
}

export const isIOS = (userAgent?: string | null) => {
  const navigatorAgent = getNavigatorAgent(userAgent)

  return Boolean(
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigatorAgent?.includes("Mac") && "ontouchend" in document)
  )
}
