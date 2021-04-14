//my-awesome-formatter.js
module.exports = function(results) {
  var parser = [];

  results.forEach(result => {
    if (result.messages.length) {
      parser.push({
        filePath: result.filePath,
        messages: result.messages.map((message) => {
          return `[${message.ruleId}] ${message.line}-${message.endLine}: ${message.message}`
        })
      });
    }
  });

  return JSON.stringify(parser, null, 2);
};
