'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Constants
const DEFAULT_PORT = 3000;
const START_DIRECTORY = __dirname + '/../dist';

console.log(START_DIRECTORY);

let app = (0, _express2.default)();

app.set('port', process.env.PORT || DEFAULT_PORT);

app.use(_express2.default.static(START_DIRECTORY));

app.listen(app.get('port'), function () {

  console.log('Node app is running at localhost:' + app.get('port'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE1BQU0sZUFBZSxJQUFmO0FBQ04sTUFBTSxrQkFBa0IsWUFBWSxVQUFaOztBQUV4QixRQUFRLEdBQVIsQ0FBWSxlQUFaOztBQUVBLElBQUksTUFBTSx3QkFBTjs7QUFFSixJQUFJLEdBQUosQ0FBUSxNQUFSLEVBQWlCLFFBQVEsR0FBUixDQUFZLElBQVosSUFBb0IsWUFBcEIsQ0FBakI7O0FBRUEsSUFBSSxHQUFKLENBQVEsa0JBQVEsTUFBUixDQUFlLGVBQWYsQ0FBUjs7QUFFQSxJQUFJLE1BQUosQ0FBVyxJQUFJLEdBQUosQ0FBUSxNQUFSLENBQVgsRUFBNEIsWUFBWTs7QUFFdEMsVUFBUSxHQUFSLENBQVksc0NBQXNDLElBQUksR0FBSixDQUFRLE1BQVIsQ0FBdEMsQ0FBWixDQUZzQztDQUFaLENBQTVCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbi8vIENvbnN0YW50c1xuY29uc3QgREVGQVVMVF9QT1JUID0gMzAwMDtcbmNvbnN0IFNUQVJUX0RJUkVDVE9SWSA9IF9fZGlybmFtZSArICcvLi4vZGlzdCc7XG5cbmNvbnNvbGUubG9nKFNUQVJUX0RJUkVDVE9SWSk7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC5zZXQoJ3BvcnQnLCAocHJvY2Vzcy5lbnYuUE9SVCB8fCBERUZBVUxUX1BPUlQpKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhTVEFSVF9ESVJFQ1RPUlkpKTtcblxuYXBwLmxpc3RlbihhcHAuZ2V0KCdwb3J0JyksIGZ1bmN0aW9uICgpIHtcblxuICBjb25zb2xlLmxvZygnTm9kZSBhcHAgaXMgcnVubmluZyBhdCBsb2NhbGhvc3Q6JyArIGFwcC5nZXQoJ3BvcnQnKSk7XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
