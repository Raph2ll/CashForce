const { 
  StatusCodes: { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR }, 
} = require('http-status-codes');
const service = require('../service/orders');

module.exports = async (req, res) => {
  try {
    const result = await service.list();

    if (!result) {
    return res.status(BAD_REQUEST)
    .json({
      message: 'List not found',
    }); 
} 

    return res.status(OK).json(result);
  } catch (e) {
    // console.log(e.message);
    return res.status(INTERNAL_SERVER_ERROR).end();
  }
};