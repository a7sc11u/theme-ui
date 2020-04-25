import React, { forwardRef } from 'react'
import { html } from './tags'
import { jsx } from '@theme-ui/core'

/**
 * Create UIComponent higher order function
 */
export const createUIComponent = Component => {
  //
  const UIComponent = (props, ref) =>
    jsx(Component, {
      ...props,
      ref,
    })

  return forwardRef(UIComponent)
}

/**
 * UIFragment
 */
const UIFragment = forwardRef((props, ref) => {
  return <React.Fragment ref={ref}>{children}</React.Fragment>
})

/**
 * UI Object
 * reduce html tags to components
 */
export const ui = html.reduce(
  (res, tag) => {
    res[tag] = createUIComponent(tag)
    return res
  },
  {
    // <ui.tag as="p" sx={{}}/>
    tag: ({ as, ...rest }) => {
      const Tag = createUIComponent(as)
      return <Tag {...rest} />
    },
    // const UiComponent = ui.custom(AnyComponent)
    custom: createUIComponent,
    // <ui.fragment sx={{}}/>
    fragment: UIFragment,
  }
)

export default ui
