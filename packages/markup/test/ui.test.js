import React from 'react'
import renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { ui } from '../src'

expect.extend(matchers)

const render = el => renderer.create(el).toJSON()

test('ui / sx ', () => {
  const tree = render(<ui.div sx={{ color: '#0000ff' }} />)
  expect(tree).toHaveStyleRule('color', '#0000ff')
})
