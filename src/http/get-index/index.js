exports.handler = async function http() {
  let form = 
  `<form action=/yolo method=post>
    <button>YOLO</button>
  </form>`
  let html =  `<!doctype html><html><body>${ form }</body></html>`
  return { 
    statusCode: 200, 
    headers: { 'content-type': 'text/html' },
    body: html
  }
}