var Pusher = require('pusher')

var pusher = new Pusher({
  appId: '1097596',
  key: '********************************',
  secret: '****************',
  cluster: 'ap4',
  encrypted: true
})

pusher.trigger('kito', 'kibo', {
  message: 'hello village'
})
