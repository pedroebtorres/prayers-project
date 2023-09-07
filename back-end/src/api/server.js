const server = require('./routes');

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log('\'Prayers API\' running on port', PORT));
