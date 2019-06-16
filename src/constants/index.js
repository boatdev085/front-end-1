const Constants = {
  HOST:
    process.env.REACT_APP_ENV === 'DEV'
      ? ''
      : process.env.REACT_APP_API || 'https://api.webnovelsapp.com/v5/base',
  API: {
    banner: process.env.REACT_APP_BANNER || '/banner_man.html',
    collection: process.env.REACT_APP_COLLECTION || '/man.html'
  },
  PATH_IMAGE:
    process.env.REACT_APP_BOOK_IMAGE ||
    'https://api.webnovelsapp.com/BookFiles/BookImages/'
}

module.exports = Constants
