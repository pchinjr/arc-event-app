exports.handler = async function (event) {
  console.log('got event', JSON.stringify(event, null, 2))
  return true
}