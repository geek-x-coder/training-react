// 이 파일ㄷ에서만 no-global-assign ESLint 옵션을 비활성화 합니다.
/* eslint-disable no-global-assign */

require = require('esm')(module /*, options*/);
module.exports = require('./index.js');
