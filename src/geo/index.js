export default new Promise((resolve, reject) => {
  if ('geolocation' in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve(position)
    })
  } else {
    reject()
  }
})
