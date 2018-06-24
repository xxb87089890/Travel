let defaultCtiy = '福州'
try {
  if (localStorage.city) {
    defaultCtiy = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCtiy
}
