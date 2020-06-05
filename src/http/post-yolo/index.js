let arc = require('@architect/functions')

async function yolo() {
  await arc.events.publish({
    // the name of the event
    name: 'yolo', 
    // the JSON payload you want to send
    payload: { 
      message: 'swag',
      timestamp: new Date(Date.now()).toISOString()
    }
  })
  // return a redirect to the home page
  return { location: '/' } 
}

exports.handler = arc.http.async(yolo)