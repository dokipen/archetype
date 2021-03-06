/**
 * Archetype, a web framework leveraging Node.js.
 *   http://github.com/jefftrudeau/archetype
 *
 * Released under the GNU General Public License, version 2.
 *   http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * Copyright (C) Jeff Trudeau
 */

var models = require('archetype/database').database.models;

this.index = function (request, response) {
  models.system.sync();
  response.writeHead(200, {'Content-Type': request.__route.mime});
  return data = {title: request.__route.title, user_agent: request.headers['user-agent']};
};
