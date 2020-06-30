const uri = require('url');

const request = require('request');

const DOMParser = require('xmldom').DOMParser;

function get(url, options, cb) {
  url = uri.parse(url);
  const opt = {
    method: 'GET',
    url: url.href,
    timeout: 12000,
    gzip: true
  };
  options.proxy && (opt.proxy = options.proxy);
  request(opt, function(error, response, body) {
    const xml = new DOMParser().parseFromString(body);
    cb(null, xml);
  });
}

export const nodeURLHandler = {
  get
};
