const omit = require('lodash/omit')
const { ajv } = require('../../lib/ajv')
const { properties } = require('../../schema/models/Author')

// Schema for the input data
const validateInput = ajv.compile({
  title: 'addAuthors input',
  type: 'array',
  items: {
    type: 'object',
    properties: omit(properties, ['_id']),
    required: ['name'],
    additionalProperties: false,
  },
})

exports.validateInput = validateInput