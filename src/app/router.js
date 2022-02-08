const express = require('express');
const router = express.Router();

// ---------------- User ----------------

require('./modules/user/routes/register')(router);
require('./modules/user/routes/login')(router);

// ---------------- Home ----------------

require('./modules/home/routers/home')(router);


module.exports = router;