import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Input } from 'antd';
const style = require('./style.scss');


export default () => {
  const [markdownCtx, updateMarkdownCtx] = React.useState('');
  const handleChange = React.useCallback((e) => {
    updateMarkdownCtx(e.target.value);
  }, []);
  return (<div className={style.mdEditor}>
    <div className={style.editorArea}>
      <Input.TextArea
        autoSize
        onChange={handleChange}
      />
    </div>

    <div className={style.displayArea}>
      <ReactMarkdown
        source={markdownCtx}
        escapeHtml={false}
      />
    </div>

  </div>);
}