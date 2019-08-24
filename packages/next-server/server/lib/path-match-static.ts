// We borrow this code from https://github.com/pillarjs/path-match
// That's because, ^^^ package comes with very old version of path-to-regexp
// So, it'll give us issues when the app has used a newer version of path-to-regexp
// (When webpack resolving packages)

export default staticPathExport

function staticPathExport() {
  return (path: string) => {
    return (pathname: string | undefined, params?: any) => {
      let m = false
      if (!pathname) {
        return false
      } else {
        m = pathname.startsWith(path)
      }
      if (!m) return false
      params = params || {}
      params['successPath'] = pathname
      params['checkAgainstPath'] = path
      return params
    }
  }
}

const route = staticPathExport()
const match = route('/food')
const matchResult = match('/food/hello/toy', { name: 'tony' })
console.log(matchResult)
