import React from 'react'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light'
import js from 'react-syntax-highlighter/languages/prism/javascript'
import solarizedLight from 'react-syntax-highlighter/styles/prism/solarizedlight'

registerLanguage('javascript', js)

export default ({ children }) => (
  <SyntaxHighlighter language="javascript" style={solarizedLight}>
    {children}
  </SyntaxHighlighter>
)
